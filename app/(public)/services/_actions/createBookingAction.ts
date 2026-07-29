"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

type ActionState = {
    success: boolean;
    message: string;
};

export async function createBookingAction(
    serviceId: string
): Promise<ActionState> {
    try {
        const cookieStore = await cookies();

        const accessToken =
            cookieStore.get("accessToken")?.value;

        const res = await fetch(
            `${process.env.BACKEND_API_URL}/api/bookings`,
            {
                method: "POST",
                headers: {
                    Authorization: accessToken!,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    serviceId,
                }),
                cache: "no-store",
            }
        );

        const result = await res.json();

        if (!result.success) {
            return {
                success: false,
                message:
                    result.message ?? "Booking failed.",
            };
        }

        revalidatePath("/services");

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