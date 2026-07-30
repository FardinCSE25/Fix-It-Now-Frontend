import { Skeleton } from "@/components/ui/skeleton";

export default function UsersLoading() {
    return (
        <section className="min-h-screen bg-gray-100 py-12">
            <div className="mx-auto max-w-350 space-y-6 p-2">
                {/* Header */}
                <div className="space-y-2">
                    <Skeleton className="h-9 w-72" />
                    <Skeleton className="h-4 w-96" />
                </div>

                {/* Table Card */}
                <div className="rounded-2xl border bg-white shadow-sm">
                    {/* Card Header */}
                    <div className="border-b px-6 py-5">
                        <Skeleton className="h-7 w-48" />
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b">
                                    {[
                                        "User",
                                        "Email",
                                        "Role",
                                        "Status",
                                        "Joined",
                                        "Actions",
                                    ].map((_, index) => (
                                        <th
                                            key={index}
                                            className="px-6 py-4 text-left"
                                        >
                                            <Skeleton className="h-4 w-20" />
                                        </th>
                                    ))}
                                </tr>
                            </thead>

                            <tbody>
                                {Array.from({ length: 8 }).map((_, index) => (
                                    <tr
                                        key={index}
                                        className="border-b last:border-0"
                                    >
                                        {/* User */}
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <Skeleton className="size-10 rounded-full" />

                                                <Skeleton className="h-5 w-36" />
                                            </div>
                                        </td>

                                        {/* Email */}
                                        <td className="px-6 py-4">
                                            <Skeleton className="h-5 w-52" />
                                        </td>

                                        {/* Role */}
                                        <td className="px-6 py-4">
                                            <Skeleton className="h-7 w-24 rounded-full" />
                                        </td>

                                        {/* Status */}
                                        <td className="px-6 py-4">
                                            <Skeleton className="h-7 w-20 rounded-full" />
                                        </td>

                                        {/* Joined */}
                                        <td className="px-6 py-4">
                                            <Skeleton className="h-5 w-28" />
                                        </td>

                                        {/* Action */}
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex justify-end">
                                                <Skeleton className="h-9 w-24 rounded-lg" />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}