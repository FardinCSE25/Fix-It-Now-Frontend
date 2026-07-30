import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <div className="bg-gray-100 min-h-screen">
            <section className="container mx-auto space-y-8 py-14">
                {/* Header */}
                <div className="space-y-3">
                    <Skeleton className="h-10 w-72" />
                    <Skeleton className="h-5 w-130" />
                </div>

                {/* Table */}
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>
                                    <Skeleton className="h-4 w-20" />
                                </TableHead>

                                <TableHead>
                                    <Skeleton className="h-4 w-16" />
                                </TableHead>

                                <TableHead>
                                    <Skeleton className="ml-auto h-4 w-12" />
                                </TableHead>

                                <TableHead>
                                    <Skeleton className="h-4 w-14" />
                                </TableHead>

                                <TableHead>
                                    <Skeleton className="h-4 w-16" />
                                </TableHead>

                                <TableHead>
                                    <Skeleton className="h-4 w-20" />
                                </TableHead>

                                <TableHead>
                                    <Skeleton className="ml-auto h-4 w-16" />
                                </TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {Array.from({ length: 5 }).map((_, i) => (
                                <TableRow key={i}>
                                    <TableCell className="py-5">
                                        <div className="flex items-center gap-3">
                                            <Skeleton className="h-10 w-10 rounded-full" />

                                            <div className="space-y-2">
                                                <Skeleton className="h-4 w-32" />
                                                <Skeleton className="h-3 w-44" />
                                            </div>
                                        </div>
                                    </TableCell>

                                    <TableCell>
                                        <div className="space-y-2">
                                            <Skeleton className="h-4 w-52" />
                                            <Skeleton className="h-3 w-64" />
                                        </div>
                                    </TableCell>

                                    <TableCell>
                                        <Skeleton className="ml-auto h-4 w-16" />
                                    </TableCell>

                                    <TableCell>
                                        <Skeleton className="h-7 w-20 rounded-full" />
                                    </TableCell>

                                    <TableCell>
                                        <Skeleton className="h-7 w-20 rounded-full" />
                                    </TableCell>

                                    <TableCell>
                                        <Skeleton className="h-4 w-24" />
                                    </TableCell>

                                    <TableCell>
                                        <div className="flex justify-end gap-2">
                                            <Skeleton className="h-9 w-20 rounded-md" />
                                            <Skeleton className="h-9 w-20 rounded-md" />
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </section>
        </div>
    );
}