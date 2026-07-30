import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardContentSkeleton() {
    return (
        <section className="min-h-screen bg-gray-100 py-12">
            <div className="container mx-auto space-y-8">

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
                            className="rounded-2xl border bg-white p-6"
                        >
                            <div className="flex items-center justify-between">
                                <Skeleton className="size-12 rounded-xl" />
                                <Skeleton className="h-6 w-14 rounded-full" />
                            </div>

                            <div className="mt-5 space-y-3">
                                <Skeleton className="h-4 w-24" />
                                <Skeleton className="h-8 w-28" />
                                <Skeleton className="h-3 w-36" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Two large cards */}
                <div className="grid gap-6 lg:grid-cols-2">
                    {Array.from({ length: 2 }).map((_, card) => (
                        <div
                            key={card}
                            className="rounded-2xl border bg-white"
                        >
                            <div className="flex items-center justify-between border-b p-6">
                                <div className="space-y-2">
                                    <Skeleton className="h-6 w-40" />
                                    <Skeleton className="h-4 w-56" />
                                </div>

                                <Skeleton className="h-9 w-24 rounded-lg" />
                            </div>

                            <div className="divide-y">
                                {Array.from({ length: 3 }).map((_, row) => (
                                    <div
                                        key={row}
                                        className="flex items-center justify-between p-5"
                                    >
                                        <div className="flex items-center gap-3">
                                            <Skeleton className="size-10 rounded-full" />

                                            <div className="space-y-2">
                                                <Skeleton className="h-4 w-48" />
                                                <Skeleton className="h-3 w-32" />
                                            </div>
                                        </div>

                                        <div className="space-y-2 text-right">
                                            <Skeleton className="ml-auto h-4 w-20" />
                                            <Skeleton className="ml-auto h-3 w-16" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}