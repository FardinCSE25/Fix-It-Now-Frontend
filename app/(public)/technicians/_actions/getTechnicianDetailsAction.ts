"use server";

import { Technician } from "../_types/technician";

export async function getTechnicianDetailsAction(
    technicianId: string
) {
    try {
        const res = await fetch(
            `${process.env.BACKEND_API_URL}/api/technicians/${technicianId}`,
            {
                next: {
                    tags: [`technician-${technicianId}`],
                },
            }
        );

        const result = await res.json();

        if (!res.ok) {
            return {
                success: false,
                message: result.message,
                data: null as Technician | null,
            };
        }

        return {
            success: true,
            message: result.message,
            data: result.data as Technician,
        };
    } catch {
        return {
            success: false,
            message: "Something went wrong.",
            data: null as Technician | null,
        };
    }
}