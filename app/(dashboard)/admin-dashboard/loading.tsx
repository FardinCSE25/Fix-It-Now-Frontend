import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function AdminDashboardLoadingSkeleton() {
    return (
        <section className="bg-gray-100 py-12 min-h-screen">
            <div className="space-y-8 p-1 container mx-auto sm:p-2">
                {/* Header Skeleton */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="space-y-2">
                        <Skeleton className="h-8 w-64 bg-slate-200" />
                        <Skeleton className="h-4 w-80 bg-slate-200" />
                    </div>

                    <div className="flex items-center gap-3">
                        <Skeleton className="h-10 w-32 rounded-xl bg-slate-200" />
                        <Skeleton className="h-10 w-36 rounded-xl bg-slate-200" />
                    </div>
                </div>

                {/* Stat Cards Skeleton */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <Card key={i} className="rounded-2xl border-slate-200/80 shadow-xs bg-white">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between">
                                    <Skeleton className="h-12 w-12 rounded-xl bg-slate-200" />
                                    <Skeleton className="h-5 w-12 rounded-full bg-slate-200" />
                                </div>

                                <div className="mt-4 space-y-2">
                                    <Skeleton className="h-4 w-24 bg-slate-200" />
                                    <Skeleton className="h-8 w-28 bg-slate-200" />
                                    <Skeleton className="h-3 w-36 bg-slate-200" />
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Main Content Area Skeleton */}
                <div className="grid gap-6 lg:grid-cols-3">
                    {/* Recent Reviews Skeleton */}
                    <Card className="lg:col-span-2 rounded-2xl border-slate-200/80 shadow-xs bg-white">
                        <CardHeader className="flex flex-row items-center justify-between border-b border-slate-100 pb-4">
                            <div className="space-y-1.5">
                                <Skeleton className="h-5 w-36 bg-slate-200" />
                                <Skeleton className="h-3.5 w-60 bg-slate-200" />
                            </div>
                            <Skeleton className="h-8 w-20 rounded-lg bg-slate-200" />
                        </CardHeader>

                        <CardContent className="p-0">
                            <div className="divide-y divide-slate-100">
                                {Array.from({ length: 4 }).map((_, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-between p-4 sm:px-6"
                                    >
                                        <div className="flex items-center gap-3">
                                            <Skeleton className="h-10 w-10 rounded-full bg-slate-200" />
                                            <div className="space-y-2">
                                                <Skeleton className="h-4 w-48 bg-slate-200" />
                                                <Skeleton className="h-3 w-36 bg-slate-200" />
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <Skeleton className="h-3 w-16 bg-slate-200" />
                                            <Skeleton className="h-6 w-14 rounded-full bg-slate-200" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Users Preview Skeleton */}
                    <Card className="rounded-2xl border-slate-200/80 shadow-xs bg-white">
                        <CardHeader className="flex flex-row items-center justify-between border-b border-slate-100 pb-4">
                            <div className="space-y-1.5">
                                <Skeleton className="h-5 w-32 bg-slate-200" />
                                <Skeleton className="h-3.5 w-40 bg-slate-200" />
                            </div>
                            <Skeleton className="h-8 w-20 rounded-lg bg-slate-200" />
                        </CardHeader>

                        <CardContent className="p-0">
                            <div className="divide-y divide-slate-100">
                                {Array.from({ length: 4 }).map((_, index) => (
                                    <div key={index} className="flex items-center justify-between p-4">
                                        <div className="flex items-center gap-3">
                                            <Skeleton className="h-9 w-9 rounded-full bg-slate-200" />
                                            <div className="space-y-1.5">
                                                <Skeleton className="h-4 w-28 bg-slate-200" />
                                                <Skeleton className="h-3 w-36 bg-slate-200" />
                                            </div>
                                        </div>
                                        <Skeleton className="h-5 w-16 rounded-md bg-slate-200" />
                                    </div>
                                ))}
                            </div>

                            <div className="p-4 border-t border-slate-100 bg-slate-50/50 rounded-b-2xl">
                                <Skeleton className="h-4 w-36 bg-slate-200" />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}