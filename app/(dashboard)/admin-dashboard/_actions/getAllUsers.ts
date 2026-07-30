"use server";

import { cookies } from "next/headers";

export const getAllUsers = async () => {
    const cookieStore = await cookies();

    const accessToken = cookieStore.get("accessToken")?.value;

    if (!accessToken) {
        return {
            success: false,
            message: "User not logged in!",
        };
    }

    const res = await fetch(
        `${process.env.BACKEND_API_URL}/api/auth/users`,
        {
            headers: {
                Cookie: `accessToken=${accessToken}`,
            },

            cache: "force-cache",
            next: {
                revalidate: 0,
                tags: ["users"]
            }
        }
    );

    const result = await res.json();

    return result;
};