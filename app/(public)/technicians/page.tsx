import { getTechniciansAction } from "./_actions/getTechniciansAction";
// import TechnicianGrid from "./_components/TechnicianGrid";

export default async function TechniciansPage() {
    const result = await getTechniciansAction();

    if (!result.success) {
        return (
            <section className="container mx-auto py-14">
                <div className="rounded-xl border bg-white p-12 text-center">
                    <h2 className="text-2xl font-bold">
                        Failed to load technicians
                    </h2>

                    <p className="mt-2 text-muted-foreground">
                        {result.message}
                    </p>
                </div>
            </section>
        );
    }

    if (result.data.length === 0) {
        return (
            <section className="container mx-auto py-14">
                <div className="rounded-xl border bg-white p-12 text-center">
                    <h2 className="text-2xl font-bold">
                        No technicians found
                    </h2>

                    <p className="mt-2 text-muted-foreground">
                        There are no technicians available right now.
                    </p>
                </div>
            </section>
        );
    }

    return (
        <section className="container mx-auto py-14">
            <div className="mb-10">
                <h1 className="text-4xl font-bold">
                    Our Technicians
                </h1>

                <p className="mt-2 text-muted-foreground">
                    Browse our experienced professionals and
                    choose the right technician for your service.
                </p>
            </div>

            {/* <TechnicianGrid
                technicians={result.data}
            /> */}
        </section>
    );
}