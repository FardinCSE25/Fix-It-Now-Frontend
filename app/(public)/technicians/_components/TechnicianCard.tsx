import Link from "next/link";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
    CalendarDays,
    Mail,
    Star,
} from "lucide-react";

import { Technician } from "../_types/technician";

type Props = {
    technician: Technician;
};

export default function TechnicianCard({
    technician,
}: Props) {
    const initials = technician.name
        .split(" ")
        .map((item) => item[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

    const totalReviews =
        technician.technicianReviews.length;

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
        <div className="rounded-3xl border bg-white p-6 shadow-sm transition hover:shadow-md">

            <div className="flex items-center gap-4">

                <Avatar className="size-16">
                    <AvatarFallback>
                        {initials}
                    </AvatarFallback>
                </Avatar>

                <div className="flex-1">

                    <h3 className="text-xl font-semibold">
                        {technician.name}
                    </h3>

                    <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                        <Mail className="size-4" />
                        {technician.email}
                    </div>

                </div>
            </div>

            <div className="mt-6 space-y-4">

                <div className="flex items-center justify-between">

                    <span className="text-sm text-muted-foreground">
                        Experience
                    </span>

                    <Badge variant="secondary">
                        {
                            technician.technicianProfile
                                .experience
                        }
                    </Badge>
                </div>

                <div className="flex items-center justify-between">

                    <span className="text-sm text-muted-foreground">
                        Rating
                    </span>

                    <div className="flex items-center gap-1">

                        <Star className="size-4 fill-yellow-400 text-yellow-400" />

                        <span className="font-medium">
                            {averageRating}
                        </span>

                        <span className="text-sm text-muted-foreground">
                            ({totalReviews})
                        </span>

                    </div>
                </div>

                <div className="flex items-start gap-2 text-sm text-muted-foreground">

                    <CalendarDays className="mt-0.5 size-4" />

                    <span>
                        {
                            technician.availability
                                .workingDays
                                .join(", ")
                        }
                    </span>

                </div>

                <p className="line-clamp-3 text-sm leading-6 text-muted-foreground">
                    {
                        technician.technicianProfile
                            .bio
                    }
                </p>

                <Button
                    className="mt-4 w-full"
                >
                    <Link
                        href={`/technicians/${technician.id}`}
                    >
                        View Details
                    </Link>
                </Button>

            </div>
        </div>
    );
}