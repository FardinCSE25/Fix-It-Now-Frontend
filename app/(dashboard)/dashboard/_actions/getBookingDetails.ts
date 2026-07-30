"use server";

import { cookies } from "next/headers";

export async function getBookingDetails(
    bookingId: string
) {
    const cookieStore = await cookies();

    const token = cookieStore.get("accessToken")?.value;

    const res = await fetch(
        `${process.env.BACKEND_API_URL}/api/bookings/my-bookings/${bookingId}`,
        {
            headers: token
                ? {
                    Authorization: `Bearer ${token}`,
                }
                : {},
            cache: "no-store",
        }
    );

    return res.json();
}