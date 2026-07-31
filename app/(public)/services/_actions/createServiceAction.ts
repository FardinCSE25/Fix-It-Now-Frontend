"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

type ActionState = {
  success: boolean;
  message: string;
};

export async function createServiceAction(
  prevState: ActionState | null,
  formData: FormData
): Promise<ActionState> {
  try {
    const cookieStore = await cookies();

    const accessToken =
      cookieStore.get("accessToken")?.value;

    const payload = {
      categoryId: formData.get("categoryId"),
      title: formData.get("title"),
      description: formData.get("description"),
      price: Number(formData.get("price")),
    };

    const res = await fetch(
      `${process.env.BACKEND_API_URL}/api/services`,
      {
        method: "POST",
        headers: {
          Authorization: accessToken!,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        cache: "no-store",
      }
    );

    const result = await res.json();

    if (!result.success) {
      return {
        success: false,
        message:
          result.message || "Failed to create service.",
      };
    }

    revalidateTag("services", {
      expire: 0,
    });

    return {
      success: true,
      message: result.message,
    };
  } catch {
    return {
      success: false,
      message: "Something went wrong.",
    };
  }
}