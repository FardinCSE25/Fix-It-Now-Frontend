import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <section className="container mx-auto py-14">
            <div className="rounded-3xl border bg-white shadow-sm">

                {/* Header */}

                <div className="flex items-center justify-between border-b p-8">
                    <div className="space-y-3">
                        <Skeleton className="h-9 w-64" />
                        <Skeleton className="h-5 w-80" />
                    </div>

                    <Skeleton className="h-9 w-28 rounded-full" />
                </div>

                <div className="grid gap-8 p-8 lg:grid-cols-3">

                    {/* Left */}

                    <div className="space-y-8 lg:col-span-2">

                        {/* Technician */}

                        <div className="flex gap-5">
                            <Skeleton className="size-20 rounded-full" />

                            <div className="flex-1 space-y-3">
                                <Skeleton className="h-7 w-56" />
                                <Skeleton className="h-5 w-72" />
                                <Skeleton className="h-5 w-40" />
                            </div>
                        </div>

                        <Skeleton className="h-px w-full" />

                        {/* Bio */}

                        <div className="space-y-4">
                            <Skeleton className="h-6 w-36" />

                            <Skeleton className="h-5 w-full" />
                            <Skeleton className="h-5 w-full" />
                            <Skeleton className="h-5 w-4/5" />
                        </div>

                        <Skeleton className="h-px w-full" />

                        {/* Reviews */}

                        <div className="space-y-4">
                            <Skeleton className="h-6 w-40" />

                            <Skeleton className="h-24 w-full rounded-xl" />
                            <Skeleton className="h-24 w-full rounded-xl" />
                        </div>
                    </div>

                    {/* Right */}

                    <div>
                        <div className="rounded-2xl border bg-slate-50 p-6">

                            <Skeleton className="h-7 w-40" />

                            <div className="mt-6 space-y-5">

                                <div className="flex justify-between">
                                    <Skeleton className="h-5 w-28" />
                                    <Skeleton className="h-5 w-24" />
                                </div>

                                <Skeleton className="h-px w-full" />

                                <div className="flex justify-between">
                                    <Skeleton className="h-5 w-24" />
                                    <Skeleton className="h-5 w-20" />
                                </div>

                                <Skeleton className="h-px w-full" />

                                <div className="flex justify-between">
                                    <Skeleton className="h-5 w-28" />
                                    <Skeleton className="h-5 w-36" />
                                </div>

                                <Skeleton className="h-px w-full" />

                                <Skeleton className="h-11 w-full rounded-lg" />

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}