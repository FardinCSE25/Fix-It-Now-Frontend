import { Skeleton } from "@/components/ui/skeleton";

export default function TechnicianDashboardLoading() {
    return (
        <section className="min-h-screen bg-gray-100 py-12">
            <div className="container mx-auto space-y-8 p-1 sm:p-2">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div className="space-y-3">
                        <Skeleton className="h-9 w-72" />
                        <Skeleton className="h-4 w-96" />
                    </div>

                    <div className="flex gap-3">
                        <Skeleton className="h-10 w-36 rounded-xl" />
                        <Skeleton className="h-10 w-36 rounded-xl" />
                    </div>
                </div>

                {/* Stat Cards */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <div
                            key={index}
                            className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs"
                        >
                            <div className="flex items-center justify-between">
                                <Skeleton className="h-12 w-12 rounded-xl" />
                                <Skeleton className="h-6 w-10 rounded-full" />
                            </div>

                            <div className="mt-5 space-y-3">
                                <Skeleton className="h-4 w-28" />
                                <Skeleton className="h-8 w-20" />
                                <Skeleton className="h-3 w-36" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Recent Bookings */}
                <div className="grid gap-6 lg:grid-cols-4">
                    <div className="lg:col-span-2 rounded-2xl border border-slate-200/80 bg-white shadow-xs">
                        {/* Card Header */}
                        <div className="flex items-center justify-between border-b border-slate-100 p-6">
                            <div className="space-y-2">
                                <Skeleton className="h-6 w-56" />
                                <Skeleton className="h-4 w-40" />
                            </div>

                            <Skeleton className="h-9 w-24 rounded-lg" />
                        </div>

                        {/* Booking Rows */}
                        <div className="divide-y divide-slate-100">
                            {Array.from({ length: 3 }).map((_, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between p-6"
                                >
                                    <div className="flex items-center gap-3">
                                        <Skeleton className="size-10 rounded-full" />

                                        <div className="space-y-2">
                                            <Skeleton className="h-4 w-56" />
                                            <Skeleton className="h-3 w-36" />
                                        </div>
                                    </div>

                                    <div className="space-y-2 text-right">
                                        <Skeleton className="ml-auto h-4 w-16" />
                                        <Skeleton className="ml-auto h-3 w-14" />
                                        <Skeleton className="ml-auto h-6 w-24 rounded-full" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}