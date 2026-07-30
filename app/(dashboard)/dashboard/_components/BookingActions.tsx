"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Booking } from "../_types/booking";
import PayNowButton from "./PayNowButton";

type Props = {
    booking: Booking;
};

export default function BookingActions({
    booking,
}: Props) {

    if (booking.status === "Pending") {
        return (
            <div className="flex justify-end gap-2">
                <Button
                    size="sm"
                    variant="secondary"
                    disabled
                >
                    Waiting Approval
                </Button>

                <Button
                    size="sm"
                    variant="outline"
                >
                    <Link
                        href={`/dashboard/my-bookings/${booking.id}`}
                    >
                        Details
                    </Link>
                </Button>
            </div>
        );
    }

    // Rejected
    if (booking.status === "Rejected") {
        return (
            <div className="flex justify-end gap-2">
                <Button
                    size="sm"
                    variant="destructive"
                    disabled
                >
                    Rejected
                </Button>

                <Button
                    size="sm"
                    variant="outline"
                >
                    <Link
                        href={`/dashboard/my-bookings/${booking.id}`}
                    >
                        Details
                    </Link>
                </Button>
            </div>
        );
    }

    if (
        booking.status === "Accepted" &&
        !booking.payment
    ) {
        return (
            <div className="flex justify-end gap-2">
                <PayNowButton
                    bookingId={booking.id}
                    size="sm"
                />

                <Button
                    size="sm"
                    variant="outline"
                >
                    <Link
                        href={`/dashboard/my-bookings/${booking.id}`}
                    >
                        Details
                    </Link>
                </Button>
            </div>
        );
    }

    if (
        booking.status === "Accepted" &&
        booking.payment
    ) {
        return (
            <div className="flex justify-end gap-2">
                <Button
                    size="sm"
                    variant="success"
                    disabled
                >
                    Payment Completed
                </Button>

                <Button
                    size="sm"
                    variant="outline"
                >
                    <Link
                        href={`/dashboard/my-bookings/${booking.id}`}
                    >
                        Details
                    </Link>
                </Button>
            </div>
        );
    }

    return (
        <div className="flex justify-end gap-2">
            <Button
                size="sm"
                variant="success"
                disabled
            >
                Completed
            </Button>

            <Button
                size="sm"
                variant="outline"
            >
                <Link
                    href={`/dashboard/my-bookings/${booking.id}`}
                >
                    Details
                </Link>
            </Button>
        </div>
    );
}