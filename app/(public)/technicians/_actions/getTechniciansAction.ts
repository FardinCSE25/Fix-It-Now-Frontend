"use server";

import { Technician } from "../_types/technician";

export async function getTechniciansAction() {
    try {
        const res = await fetch(
            `${process.env.BACKEND_API_URL}/api/technicians`,
            {
                next: {
                    tags: ["technicians"],
                },
            }
        );

        const result = await res.json();

        if (!res.ok) {
            return {
                success: false,
                message: result.message,
                data: [] as Technician[],
            };
        }

        return {
            success: true,
            message: result.message,
            data: result.data as Technician[],
        };
    } catch {
        return {
            success: false,
            message: "Something went wrong.",
            data: [] as Technician[],
        };
    }
}