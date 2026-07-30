"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

type Payload = {
    bio: string;
    experience: string;
};

export async function updateProfileAction(
    payload: Payload
) {
    try {
        const cookieStore = await cookies();

        const accessToken =
            cookieStore.get("accessToken")?.value;

        const res = await fetch(
            `${process.env.BACKEND_API_URL}/api/technicians/profile`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: accessToken
                        ? accessToken
                        : "",
                },
                body: JSON.stringify(payload),
            }
        );

        const result = await res.json();

        if (!res.ok) {
            return {
                success: false,
                message:
                    result.message ||
                    "Failed to update profile.",
            };
        }

        revalidateTag("me", {
            expire: 0,
        });

        return {
            success: true,
            message:
                result.message ||
                "Profile updated successfully.",
        };
    } catch {
        return {
            success: false,
            message: "Something went wrong.",
        };
    }
}