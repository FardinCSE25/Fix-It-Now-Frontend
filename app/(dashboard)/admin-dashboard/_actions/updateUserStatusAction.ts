"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export async function updateUserStatusAction(
    userId: string,
    status: "Active" | "Banned"
) {
    try {
        const cookieStore = await cookies();

        const accessToken =
            cookieStore.get("accessToken")?.value;

        const res = await fetch(
            `${process.env.BACKEND_API_URL}/api/auth/users/${userId}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Cookie: `accessToken=${accessToken}`,
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

        revalidateTag("users", {
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