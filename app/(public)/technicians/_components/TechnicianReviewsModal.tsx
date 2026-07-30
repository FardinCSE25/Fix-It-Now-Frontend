"use client";

import { Star } from "lucide-react";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import { Technician } from "../_types/technician";

type Props = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    reviews: Technician["technicianReviews"];
};

export default function TechnicianReviewsModal({
    open,
    onOpenChange,
    reviews,
}: Props) {
    return (
        <Dialog
            open={open}
            onOpenChange={onOpenChange}
        >
            <DialogContent className="max-h-[80vh] max-w-2xl overflow-y-auto">

                <DialogHeader>
                    <DialogTitle>
                        All Reviews ({reviews.length})
                    </DialogTitle>
                </DialogHeader>

                {reviews.length === 0 ? (
                    <div className="rounded-xl border border-dashed p-8 text-center">
                        <p className="text-muted-foreground">
                            No reviews yet.
                        </p>
                    </div>
                ) : (
                    <div className="space-y-4">

                        {reviews.map((review) => (
                            <div
                                key={review.id}
                                className="rounded-xl border p-5"
                            >
                                <div className="mb-3 flex items-center justify-between">

                                    <div className="flex">

                                        {Array.from({
                                            length: 5,
                                        }).map((_, index) => (
                                            <Star
                                                key={index}
                                                className={`size-4 ${
                                                    index < review.rating
                                                        ? "fill-yellow-400 text-yellow-400"
                                                        : "text-slate-300"
                                                }`}
                                            />
                                        ))}

                                    </div>

                                    <span className="text-xs text-muted-foreground">
                                        {new Date(
                                            review.createdAt
                                        ).toLocaleDateString()}
                                    </span>

                                </div>

                                <p className="leading-7 text-muted-foreground">
                                    {review.comment ||
                                        "No comment provided."}
                                </p>

                            </div>
                        ))}

                    </div>
                )}

            </DialogContent>
        </Dialog>
    );
}