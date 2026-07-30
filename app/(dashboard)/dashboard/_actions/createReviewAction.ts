"use server";

import { cookies } from "next/headers";

type Payload = {
  bookingId: string;
  rating: number;
  comment: string;
};

export async function createReviewAction(
  payload: Payload
) {
  try {
    const cookieStore = await cookies();

    const token =
      cookieStore.get("accessToken")?.value;

    const res = await fetch(
      `${process.env.BACKEND_API_URL}/api/reviews`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const result = await res.json();

    if (!res.ok) {
      return {
        success: false,
        message: result.message,
      };
    }

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