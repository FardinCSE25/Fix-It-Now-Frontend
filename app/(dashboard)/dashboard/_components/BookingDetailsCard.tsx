"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import {
    Calendar,
    Clock3,
    CreditCard,
    Mail,
    UserRound,
    Wrench,
} from "lucide-react";
import { Booking } from "../_types/booking";

type Props = {
    booking: Booking;
};

export default function BookingDetailsCard({
    booking,
}: Props) {
    const statusStyles: Record<
        Booking["status"],
        string
    > = {
        Pending:
            "bg-amber-50 text-amber-700 border-amber-200",
        Accepted:
            "bg-blue-50 text-blue-700 border-blue-200",
        Completed:
            "bg-emerald-50 text-emerald-700 border-emerald-200",
        Rejected:
            "bg-rose-50 text-rose-700 border-rose-200",
    };

    const initials = booking.technician.name
        .split(" ")
        .map((item) => item[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

    return (
        <div className="w-full rounded-3xl border bg-white shadow-sm">

            {/* Header */}

            <div className="flex items-center justify-between border-b p-8">
                <div>
                    <h1 className="text-3xl font-bold">
                        Booking Details
                    </h1>

                    <p className="mt-2 text-muted-foreground">
                        Booking ID : {booking.id}
                    </p>
                </div>

                <Badge
                    className={`border px-4 py-1 ${statusStyles[booking.status]}`}
                >
                    {booking.status}
                </Badge>
            </div>

            <div className="grid gap-8 p-8 lg:grid-cols-3">

                {/* Left */}

                <div className="space-y-8 lg:col-span-2">

                    {/* Booking */}

                    <div>
                        <h2 className="mb-5 flex items-center gap-2 text-lg font-semibold">
                            <Calendar className="size-5 text-primary" />
                            Booking Information
                        </h2>

                        <div className="grid gap-6 sm:grid-cols-2">

                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Booking Date
                                </p>

                                <p className="mt-1 font-medium">
                                    {new Date(
                                        booking.createdAt
                                    ).toLocaleDateString()}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Payment
                                </p>

                                <Badge
                                    className={
                                        booking.payment
                                            ? "bg-emerald-600"
                                            : "bg-rose-600"
                                    }
                                >
                                    {booking.payment
                                        ? "Paid"
                                        : "Unpaid"}
                                </Badge>
                            </div>
                        </div>
                    </div>

                    <Separator />

                    {/* Service */}

                    <div>
                        <h2 className="mb-5 flex items-center gap-2 text-lg font-semibold">
                            <Wrench className="size-5 text-primary" />
                            Service Information
                        </h2>

                        <div className="space-y-5">

                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Service
                                </p>

                                <p className="font-semibold">
                                    {booking.service.title}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Description
                                </p>

                                <p className="leading-7">
                                    {booking.service.description}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Price
                                </p>

                                <p className="text-2xl font-bold text-primary">
                                    ৳
                                    {Number(
                                        booking.service.price
                                    ).toLocaleString()}
                                </p>
                            </div>
                        </div>
                    </div>

                    <Separator />

                    {/* Technician */}

                    <div>
                        <h2 className="mb-5 flex items-center gap-2 text-lg font-semibold">
                            <UserRound className="size-5 text-primary" />
                            Technician
                        </h2>

                        <div className="flex gap-5">

                            <Avatar className="size-16">
                                <AvatarFallback>
                                    {initials}
                                </AvatarFallback>
                            </Avatar>

                            <div className="space-y-3">

                                <h3 className="text-xl font-semibold">
                                    {booking.technician.name}
                                </h3>

                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Mail className="size-4" />
                                    {booking.technician.email}
                                </div>

                                <div className="flex items-center gap-2 text-sm">
                                    <Clock3 className="size-4 text-primary" />
                                    {
                                        booking.technician
                                            .technicianProfile
                                            .experience
                                    }
                                </div>

                                <p className="leading-7 text-muted-foreground">
                                    {
                                        booking.technician
                                            .technicianProfile.bio
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right */}

                <div>

                    <div className="rounded-2xl border bg-slate-50 p-6">

                        <h3 className="text-lg font-semibold">
                            Payment Summary
                        </h3>

                        <div className="mt-6 space-y-5">

                            <div className="flex justify-between">
                                <span className="text-muted-foreground">
                                    Service Fee
                                </span>

                                <span className="font-semibold">
                                    ৳
                                    {Number(
                                        booking.service.price
                                    ).toLocaleString()}
                                </span>
                            </div>

                            <Separator />

                            <div className="flex justify-between text-lg font-bold">
                                <span>Total</span>

                                <span>
                                    ৳
                                    {Number(
                                        booking.service.price
                                    ).toLocaleString()}
                                </span>
                            </div>

                            {!booking.payment &&
                                booking.status ===
                                "Accepted" && (
                                    <Button
                                        className="mt-6 w-full"
                                        size="lg"
                                    >
                                        <CreditCard className="mr-2 size-5" />
                                        Pay Now
                                    </Button>
                                )}

                            {booking.payment && (
                                <Button
                                    disabled
                                    variant="success"
                                    className="mt-6 w-full"
                                >
                                    Payment Completed
                                </Button>
                            )}

                            {booking.status ===
                                "Pending" && (
                                    <Button
                                        disabled
                                        variant="secondary"
                                        className="mt-6 w-full"
                                    >
                                        Waiting for Approval
                                    </Button>
                                )}

                            {booking.status ===
                                "Rejected" && (
                                    <Button
                                        disabled
                                        variant="destructive"
                                        className="mt-6 w-full"
                                    >
                                        Booking Rejected
                                    </Button>
                                )}
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}