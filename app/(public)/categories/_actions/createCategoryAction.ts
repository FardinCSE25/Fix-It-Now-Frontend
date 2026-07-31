"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export type CreateCategoryState = {
  success: boolean;
  message: string;
};

export async function createCategoryAction(
  prevState: CreateCategoryState | null,
  formData: FormData
): Promise<CreateCategoryState> {
  const title = formData.get("title")?.toString().trim();
  const description = formData.get("description")?.toString().trim();

  if (!title || !description) {
    return {
      success: false,
      message: "All fields are required.",
    };
  }

  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  try {
    const res = await fetch(
      `${process.env.BACKEND_API_URL}/api/categories`,
      {
        method: "POST",

        headers: {
          Authorization: accessToken!,
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          title,
          description,
        }),

        cache: "no-store",
      }
    );

    const result = await res.json();

    if (!res.ok) {
      return {
        success: false,
        message: result.message || "Failed to create category.",
      };
    }

    revalidateTag("categories", {
      expire: 0,
    });

    return {
      success: true,
      message: "Category created successfully.",
    };
  } catch {
    return {
      success: false,
      message: "Something went wrong.",
    };
  }
}