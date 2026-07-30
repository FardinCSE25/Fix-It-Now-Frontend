import { notFound } from "next/navigation";

import { getTechnicianDetailsAction } from "../_actions/getTechnicianDetailsAction";
import TechnicianDetailsCard from "../_components/TechnicianDetailsCard";

type Props = {
    params: Promise<{
        technicianId: string;
    }>;
};

export default async function TechnicianDetailsPage({
    params,
}: Props) {
    const { technicianId } = await params;

    const result =
        await getTechnicianDetailsAction(
            technicianId
        );

    if (!result.success || !result.data) {
        notFound();
    }

    return (
        <div className="bg-gray-100">
            <section className="container mx-auto min-h-screen py-19">
            <TechnicianDetailsCard
                technician={result.data}
            />
        </section>
        </div>
    );
}