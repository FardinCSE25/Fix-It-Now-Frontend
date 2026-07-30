import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <section className="container mx-auto py-14">

            {/* Header */}

            <div className="mb-10 space-y-3">
                <Skeleton className="h-10 w-72" />
                <Skeleton className="h-5 w-125" />
            </div>

            {/* Cards */}

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">

                {Array.from({ length: 6 }).map((_, index) => (
                    <div
                        key={index}
                        className="rounded-3xl border bg-white p-6 shadow-sm"
                    >

                        {/* Avatar + Name */}

                        <div className="flex items-center gap-4">

                            <Skeleton className="size-16 rounded-full" />

                            <div className="flex-1 space-y-2">
                                <Skeleton className="h-6 w-40" />
                                <Skeleton className="h-4 w-56" />
                            </div>

                        </div>

                        {/* Body */}

                        <div className="mt-6 space-y-5">

                            <div className="flex items-center justify-between">
                                <Skeleton className="h-4 w-24" />
                                <Skeleton className="h-6 w-24 rounded-full" />
                            </div>

                            <div className="flex items-center justify-between">
                                <Skeleton className="h-4 w-16" />
                                <Skeleton className="h-4 w-20" />
                            </div>

                            <div>
                                <Skeleton className="mb-2 h-4 w-28" />
                                <Skeleton className="h-4 w-full" />
                            </div>

                            <div>
                                <Skeleton className="mb-2 h-4 w-16" />

                                <div className="space-y-2">
                                    <Skeleton className="h-4 w-full" />
                                    <Skeleton className="h-4 w-full" />
                                    <Skeleton className="h-4 w-3/4" />
                                </div>
                            </div>

                            <Skeleton className="mt-4 h-10 w-full rounded-lg" />

                        </div>

                    </div>
                ))}

            </div>

        </section>
    );
}