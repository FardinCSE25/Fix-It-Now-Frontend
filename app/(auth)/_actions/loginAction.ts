"use server";

import jwt, { JwtPayload } from "jsonwebtoken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type LoginState = {
  success: boolean;
  statusCode: number;
  message: string;
  data?: {
    accessToken: string;
  };
};

export const loginAction = async (
  redirectTo: string,
  prevState: LoginState | null,
  formData: FormData
): Promise<LoginState> => {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    return {
      success: false,
      statusCode: 400,
      message: "Email and Password are required.",
    };
  }

  const payload = {
    email,
    password,
  };

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    }
  );

  const result = await res.json();
console.log(result);

  if (!result.success) {
    return {
      success: false,
      statusCode: result.statusCode,
      message: result.message,
    };
  }

  const cookieStore = await cookies();

  cookieStore.set("accessToken", result.data.accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 3, // 3 days
  });

  const decodedToken = jwt.decode(result.data.accessToken) as JwtPayload;

  if (
    redirectTo &&
    redirectTo.startsWith("/") &&
    !redirectTo.startsWith("//")
  ) {
    redirect(redirectTo);
  }

  switch (decodedToken.role) {
    case "Customer":
      redirect("/dashboard/customer");

    case "Technician":
      redirect("/dashboard/technician");

    case "Admin":
      redirect("/dashboard/admin");

    default:
      redirect("/");
  }
};