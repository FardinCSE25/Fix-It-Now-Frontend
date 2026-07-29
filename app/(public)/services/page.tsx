import { getMe } from "@/services/getMe";

import { getAllCategories } from "../categories/_actions/getAllCategories";
import { getAllServices } from "./_actions/getAllServices";

import ServiceGrid from "./_components/ServiceGrid";
import ServicesHeader from "./_components/ServiceHeader";


type Props = {
    searchParams: Promise<{
        [key: string]: string | string[] | undefined;
    }>;
};

export default async function ServicesPage({
    searchParams,
}: Props) {
    const params = await searchParams;

    const [services, categories, user] = await Promise.all([
        getAllServices(params),
        getAllCategories(),
        getMe(),
    ]);

    const isTechnician =
        user?.data?.role === "Technician";

    return (
        <div className="bg-gray-100">
        <section className="space-y-8 py-14 container mx-auto">
            {/* Header */}
            <ServicesHeader isTechnician={isTechnician} categories={categories.data} />

            {/* Services */}
            <ServiceGrid isTechnician={isTechnician} services={services.data} />

        </section>
        </div>
    );
}