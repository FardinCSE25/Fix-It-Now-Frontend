import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <div className="min-h-screen bg-slate-100">
            <section className="container mx-auto space-y-8 py-14">

                {/* Header */}
                <div className="space-y-3">
                    <Skeleton className="h-10 w-72" />
                    <Skeleton className="h-5 w-120" />
                </div>

                {/* Table */}
                <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
                    {/* Table Header */}
                    <div className="flex items-center border-b bg-slate-50 px-6 py-4">
                        <Skeleton className="h-4 w-40" />
                    </div>

                    {/* Rows */}
                    <div className="divide-y">
                        {Array.from({ length: 6 }).map((_, index) => (
                            <div
                                key={index}
                                className="grid grid-cols-7 items-center gap-6 px-6 py-5"
                            >
                                {/* Service */}
                                <div className="space-y-2">
                                    <Skeleton className="h-5 w-44" />
                                    <Skeleton className="h-4 w-60" />
                                </div>

                                {/* Technician */}
                                <div className="space-y-2">
                                    <Skeleton className="h-5 w-32" />
                                    <Skeleton className="h-4 w-44" />
                                </div>

                                {/* Amount */}
                                <Skeleton className="h-5 w-20 justify-self-end" />

                                {/* Status */}
                                <Skeleton className="h-8 w-24 rounded-full" />

                                {/* Transaction */}
                                <Skeleton className="h-5 w-36" />

                                {/* Date */}
                                <Skeleton className="h-5 w-24" />

                                {/* Details */}
                                <Skeleton className="h-9 w-20 justify-self-end rounded-md" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}