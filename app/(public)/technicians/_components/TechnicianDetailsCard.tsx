"use client";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import {
    CalendarDays,
    Clock3,
    Mail,
    Star,
    UserRound,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Technician } from "../_types/technician";
import TechnicianReviewsModal from "./TechnicianReviewsModal";

type Props = {
    technician: Technician;
};

export default function TechnicianDetailsCard({
    technician,
}: Props) {
    const initials = technician.name
        .split(" ")
        .map((item) => item[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

    const recentReviews = technician.technicianReviews.slice(0, 3);

    const totalReviews = technician.technicianReviews.length;
    const [openReviews, setOpenReviews] = useState(false);
    const averageRating =
        totalReviews === 0
            ? 0
            : (
                technician.technicianReviews.reduce(
                    (sum, review) =>
                        sum + review.rating,
                    0
                ) / totalReviews
            ).toFixed(1);

    return (
        <div className="rounded-3xl border bg-white shadow-sm">

            {/* Header */}

            <div className="flex items-center justify-between border-b p-8">

                <div>
                    <h1 className="text-3xl font-bold">
                        Technician Details
                    </h1>

                    <p className="mt-2 text-muted-foreground">
                        Technician ID : {technician.id}
                    </p>
                </div>

                <Badge className="bg-emerald-600">
                    {technician.status}
                </Badge>

            </div>

            <div className="grid gap-8 p-8 lg:grid-cols-3">

                {/* Left */}

                <div className="space-y-8 lg:col-span-2">

                    <div>

                        <h2 className="mb-5 flex items-center gap-2 text-lg font-semibold">
                            <UserRound className="size-5 text-primary" />
                            Technician Information
                        </h2>

                        <div className="flex gap-5">

                            <Avatar className="size-16">
                                <AvatarFallback>
                                    {initials}
                                </AvatarFallback>
                            </Avatar>

                            <div className="space-y-3">

                                <h3 className="text-xl font-semibold">
                                    {technician.name}
                                </h3>

                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Mail className="size-4" />
                                    {technician.email}
                                </div>

                                <div className="flex items-center gap-2 text-sm">
                                    <Clock3 className="size-4 text-primary" />
                                    {
                                        technician
                                            .technicianProfile
                                            .experience
                                    }
                                </div>

                            </div>

                        </div>

                    </div>

                    <Separator />

                    <div>

                        <h2 className="mb-5 text-lg font-semibold">
                            Bio
                        </h2>

                        <p className="leading-7 text-muted-foreground">
                            {technician.technicianProfile.bio ||
                                "No bio available."}
                        </p>

                    </div>

                    <Separator />

                    <div>
                        <div className="mb-5 flex items-center justify-between">

                            <h2 className="flex items-center gap-2 text-lg font-semibold">
                                <Star className="size-5 fill-yellow-400 text-yellow-400" />
                                Recent Reviews
                            </h2>

                            <Badge variant="outline">
                                {totalReviews} Reviews
                            </Badge>

                        </div>

                        {totalReviews === 0 ? (
                            <div className="rounded-xl border border-dashed p-8 text-center">
                                <p className="text-muted-foreground">
                                    No reviews yet.
                                </p>
                            </div>
                        ) : (
                            <>
                                <div className="space-y-4">

                                    {recentReviews.map((review) => (
                                        <div
                                            key={review.id}
                                            className="rounded-2xl border bg-slate-50 p-5"
                                        >

                                            <div className="mb-3 flex items-center justify-between">

                                                <div className="flex">

                                                    {Array.from({
                                                        length: 5,
                                                    }).map((_, index) => (
                                                        <Star
                                                            key={index}
                                                            className={`size-4 ${index < review.rating
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

                                {totalReviews > 3 && (
                                    <div className="mt-6 text-center">

                                        <Button
                                            variant="outline"
                                            onClick={() => setOpenReviews(true)}
                                        >
                                            View All Reviews ({totalReviews})
                                        </Button>

                                    </div>
                                )}
                            </>
                        )}
                    </div>

                </div>

                {/* Right */}

                <div>

                    <div className="rounded-2xl border bg-slate-50 p-6">

                        <h3 className="text-lg font-semibold">
                            Overview
                        </h3>

                        <div className="mt-6 space-y-5">

                            <div className="flex justify-between">
                                <span className="text-muted-foreground">
                                    Experience
                                </span>

                                <span className="font-semibold">
                                    {
                                        technician
                                            .technicianProfile
                                            .experience
                                    }
                                </span>
                            </div>

                            <Separator />

                            <div className="flex justify-between">

                                <span className="text-muted-foreground">
                                    Rating
                                </span>

                                <span className="font-semibold">
                                    ⭐ {averageRating}
                                </span>

                            </div>

                            <Separator />

                            <div>

                                <p className="mb-2 text-muted-foreground">
                                    Working Days
                                </p>

                                <div className="flex flex-wrap gap-2">

                                    {technician.availability.workingDays.map(
                                        (day) => (
                                            <Badge
                                                key={day}
                                                className="text-white"
                                                variant="secondary"
                                            >
                                                {day}
                                            </Badge>
                                        )
                                    )}

                                </div>

                            </div>

                            <Separator />

                            <div className="flex items-start gap-2">

                                <CalendarDays className="mt-1 size-4 text-primary" />

                                <div>

                                    <p className="font-medium">
                                        Working Hours
                                    </p>

                                    <p className="text-sm text-muted-foreground">
                                        {
                                            technician
                                                .availability
                                                .startTime
                                        }{" "}
                                        -{" "}
                                        {
                                            technician
                                                .availability
                                                .endTime
                                        }
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
            <TechnicianReviewsModal
                open={openReviews}
                onOpenChange={setOpenReviews}
                reviews={technician.technicianReviews}
            />
        </div>

    );
}