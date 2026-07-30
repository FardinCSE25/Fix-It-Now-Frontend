import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <div className="min-h-screen bg-slate-100">
            <section className="container mx-auto space-y-8 py-14">
                {/* Back button */}
                <Skeleton className="h-10 w-32 rounded-lg" />

                {/* Header */}
                <div className="space-y-3">
                    <Skeleton className="h-10 w-80" />
                    <Skeleton className="h-5 w-96" />
                </div>

                {/* Main Card */}
                <div className="rounded-3xl border -mt-36 bg-white shadow-sm">

                    {/* Header */}
                    <div className="flex items-center justify-between border-b p-8">
                        <div className="space-y-3">
                            <Skeleton className="h-10 w-64" />
                            <Skeleton className="h-5 w-96" />
                        </div>

                        <Skeleton className="h-8 w-24 rounded-full" />
                    </div>

                    <div className="grid gap-8 p-8 lg:grid-cols-3">

                        {/* Left */}
                        <div className="space-y-8 lg:col-span-2">

                            {/* Booking */}
                            <div className="space-y-5">
                                <Skeleton className="h-6 w-48" />

                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Skeleton className="h-4 w-28" />
                                        <Skeleton className="h-6 w-40" />
                                    </div>

                                    <div className="space-y-2">
                                        <Skeleton className="h-4 w-24" />
                                        <Skeleton className="h-6 w-20 rounded-full" />
                                    </div>
                                </div>
                            </div>

                            <Skeleton className="h-px w-full" />

                            {/* Service */}
                            <div className="space-y-5">
                                <Skeleton className="h-6 w-52" />
                                <Skeleton className="h-6 w-64" />
                                <Skeleton className="h-20 w-full" />
                                <Skeleton className="h-8 w-32" />
                            </div>

                            <Skeleton className="h-px w-full" />

                            {/* Technician */}
                            <div className="space-y-5">
                                <Skeleton className="h-6 w-40" />

                                <div className="flex gap-5">
                                    <Skeleton className="h-16 w-16 rounded-full" />

                                    <div className="flex-1 space-y-3">
                                        <Skeleton className="h-6 w-44" />
                                        <Skeleton className="h-4 w-52" />
                                        <Skeleton className="h-4 w-24" />
                                        <Skeleton className="h-20 w-full" />
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Right */}
                        <div>
                            <div className="rounded-2xl border p-6">
                                <Skeleton className="h-7 w-44" />

                                <div className="mt-6 space-y-5">
                                    <div className="flex justify-between">
                                        <Skeleton className="h-4 w-28" />
                                        <Skeleton className="h-4 w-20" />
                                    </div>

                                    <Skeleton className="h-px w-full" />

                                    <div className="flex justify-between">
                                        <Skeleton className="h-6 w-20" />
                                        <Skeleton className="h-6 w-24" />
                                    </div>

                                    <Skeleton className="mt-6 h-11 w-full rounded-lg" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}