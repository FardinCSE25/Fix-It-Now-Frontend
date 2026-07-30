import { MessageSquareText, Star } from "lucide-react";

import {
    Avatar,
    AvatarFallback,
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { getAllReviews } from "../_actions/getAllReviews";
import { Review } from "../_types/review";

export default async function ReviewsPage() {
    const response = await getAllReviews();

    const reviews: Review[] = response?.data || [];

    return (
        <section className="min-h-screen bg-gray-100 py-12">
            <div className="mx-auto max-w-350 space-y-6 p-2">
                <div>
                    <h1 className="text-3xl font-bold">
                        Reviews Management
                    </h1>

                    <p className="mt-1 text-sm text-muted-foreground">
                        View all customer reviews submitted for technicians.
                    </p>
                </div>

                <Card className="rounded-2xl">
                    <CardHeader>
                        <CardTitle>
                            All Reviews ({reviews.length})
                        </CardTitle>
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
                                {reviews.map((review) => {
                                    const customerInitials =
                                        review.customer.name
                                            .split(" ")
                                            .map((word) => word[0])
                                            .join("")
                                            .slice(0, 2)
                                            .toUpperCase();

                                    const technicianInitials =
                                        review.technician.name
                                            .split(" ")
                                            .map((word) => word[0])
                                            .join("")
                                            .slice(0, 2)
                                            .toUpperCase();

                                    return (
                                        <TableRow key={review.id}>
                                            <TableCell>
                                                <div className="flex items-center gap-3">
                                                    <Avatar>
                                                        <AvatarFallback>
                                                            {customerInitials}
                                                        </AvatarFallback>
                                                    </Avatar>

                                                    <div>
                                                        <p className="font-medium">
                                                            {review.customer.name}
                                                        </p>

                                                        <p className="text-xs text-muted-foreground">
                                                            {review.customer.email}
                                                        </p>
                                                    </div>
                                                </div>
                                            </TableCell>

                                            <TableCell>
                                                <div className="flex items-center gap-3">
                                                    <Avatar>
                                                        <AvatarFallback>
                                                            {technicianInitials}
                                                        </AvatarFallback>
                                                    </Avatar>

                                                    <div>
                                                        <p className="font-medium">
                                                            {review.technician.name}
                                                        </p>

                                                        <p className="text-xs text-muted-foreground">
                                                            {review.technician.email}
                                                        </p>
                                                    </div>
                                                </div>
                                            </TableCell>

                                            <TableCell>
                                                <Badge className="gap-1">
                                                    <Star className="size-3 fill-current" />
                                                    {review.rating}/5
                                                </Badge>
                                            </TableCell>

                                            <TableCell>
                                                <p className="max-w-xs line-clamp-2">
                                                    {review.comment}
                                                </p>
                                            </TableCell>

                                            <TableCell>
                                                {new Date(
                                                    review.createdAt
                                                ).toLocaleDateString()}
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>

                        {reviews.length === 0 && (
                            <div className="py-16 text-center text-muted-foreground">
                                <MessageSquareText className="mx-auto mb-3 size-10 opacity-50" />

                                <p>No reviews found.</p>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}