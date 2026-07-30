import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

export default function ReviewsLoadingSkeleton() {
    return (
        <section className="min-h-screen bg-gray-100 py-12">
            <div className="mx-auto max-w-350 space-y-6 p-2">
                {/* Header Skeleton */}
                <div className="space-y-2">
                    <Skeleton className="h-9 w-64 bg-slate-200" />
                    <Skeleton className="h-4 w-96 bg-slate-200" />
                </div>

                {/* Main Card Skeleton */}
                <Card className="rounded-2xl">
                    <CardHeader>
                        <Skeleton className="h-6 w-40 bg-slate-200" />
                    </CardHeader>

                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Customer</TableHead>
                                    <TableHead>Technician</TableHead>
                                    <TableHead>Rating</TableHead>
                                    <TableHead>Comment</TableHead>
                                    <TableHead>Date</TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                {/* 5টি ফেক রো (Row) তৈরি করা হচ্ছে লোডিং দেখানোর জন্য */}
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <TableRow key={index}>
                                        {/* Customer Column Skeleton */}
                                        <TableCell>
                                            <div className="flex items-center gap-3">
                                                <Skeleton className="h-10 w-10 rounded-full bg-slate-200" />
                                                <div className="space-y-1.5">
                                                    <Skeleton className="h-4 w-28 bg-slate-200" />
                                                    <Skeleton className="h-3 w-36 bg-slate-200" />
                                                </div>
                                            </div>
                                        </TableCell>

                                        {/* Technician Column Skeleton */}
                                        <TableCell>
                                            <div className="flex items-center gap-3">
                                                <Skeleton className="h-10 w-10 rounded-full bg-slate-200" />
                                                <div className="space-y-1.5">
                                                    <Skeleton className="h-4 w-28 bg-slate-200" />
                                                    <Skeleton className="h-3 w-36 bg-slate-200" />
                                                </div>
                                            </div>
                                        </TableCell>

                                        {/* Rating Skeleton */}
                                        <TableCell>
                                            <Skeleton className="h-6 w-16 rounded-full bg-slate-200" />
                                        </TableCell>

                                        {/* Comment Skeleton */}
                                        <TableCell>
                                            <div className="space-y-1">
                                                <Skeleton className="h-3.5 w-48 bg-slate-200" />
                                                <Skeleton className="h-3.5 w-32 bg-slate-200" />
                                            </div>
                                        </TableCell>

                                        {/* Date Skeleton */}
                                        <TableCell>
                                            <Skeleton className="h-4 w-20 bg-slate-200" />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}