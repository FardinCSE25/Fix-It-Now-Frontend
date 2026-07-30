"use server";

import { cookies } from "next/headers";

export async function createCheckoutSessionAction(
    bookingId: string
) {
    try {
        const cookieStore = await cookies();

        const accessToken =
            cookieStore.get("accessToken")?.value;

        const res = await fetch(
            `${process.env.BACKEND_API_URL}/api/payments/create`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`,
                },
                body: JSON.stringify({
                    bookingId,
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

        return {
            success: true,
            paymentUrl: result.data.paymentUrl,
        };
    } catch {
        return {
            success: false,
            message: "Something went wrong.",
        };
    }
}