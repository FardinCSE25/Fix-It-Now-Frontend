"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

type Payload = {
    workingDays: string[];
    startTime: string;
    endTime: string;
};

export async function updateAvailabilityAction(
    payload: Payload
) {
    try {
        const cookieStore = await cookies();

        const accessToken =
            cookieStore.get("accessToken")?.value;

        const res = await fetch(
            `${process.env.BACKEND_API_URL}/api/technicians/availability`,
            {
                method: "PUT",

                headers: {
                    "Content-Type": "application/json",
                    Cookie: `accessToken=${accessToken}`,
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

        revalidateTag("my-profile", {
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