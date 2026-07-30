"use server";

import { cookies } from "next/headers";

export const getAllReviews = async () => {
    try {
        const cookieStore = await cookies();

        const accessToken =
            cookieStore.get("accessToken")?.value;

        const res = await fetch(
            `${process.env.BACKEND_API_URL}/api/reviews`,
            {
                headers: {
                    Cookie: `accessToken=${accessToken}`,
                },
                cache: "no-store",
            }
        );

        const result = await res.json();

        return result;
    } catch {
        return {
            success: false,
            message: "Something went wrong.",
            data: [],
        };
    }
};