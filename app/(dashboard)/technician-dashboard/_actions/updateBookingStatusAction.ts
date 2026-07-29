"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export const updateBookingStatusAction = async (
  bookingId: string,
  status: "Accepted" | "Rejected" | "Completed"
) => {
  try {
    const cookieStore = await cookies();

    const accessToken = cookieStore.get("accessToken")?.value;

    const res = await fetch(
      `${process.env.BACKEND_API_URL}/api/bookings/technician/${bookingId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: accessToken!,
        },
        body: JSON.stringify({
          status,
        }),
      }
    );

    const result = await res.json();

    if (!res.ok) {
      return {
        success: false,
        message: result.message,
      };
    }

    revalidatePath("/technician-dashboard/my-bookings");

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
};