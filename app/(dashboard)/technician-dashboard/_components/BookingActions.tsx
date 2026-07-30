"use client";

import { Loader2 } from "lucide-react";
import { useState, useTransition } from "react";

import { Button } from "@/components/ui/button";

import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { updateBookingStatusAction } from "../_actions/updateBookingStatusAction";
import { Booking } from "../_types/booking";

type Props = {
    booking: Booking;
};

export default function BookingActions({
    booking,
}: Props) {
    const router = useRouter()

    const [loadingStatus, setLoadingStatus] = useState<
        "Accepted" | "Rejected" | "Completed" | null
    >(null);

    const [isPending, startTransition] =
        useTransition();

    const handleUpdate = (
        status: "Accepted" | "Rejected" | "Completed"
    ) => {
        setLoadingStatus(status);

        startTransition(async () => {
            const result = await updateBookingStatusAction(
                booking.id,
                status
            );

            if (result.success) {
                toast.success(result.message);

                router.refresh();
            } else {
                toast.error(result.message);
            }

            setLoadingStatus(null);
        });
    };

    if (booking.status === "Pending") {
        return (
            <div className="flex justify-end gap-2">
                <Button
                    size="sm"
                    variant="success"
                    disabled={isPending}
                    onClick={() => handleUpdate("Accepted")}
                >
                    {loadingStatus === "Accepted" ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                        "Accept"
                    )}
                </Button>

                <Button
                    size="sm"
                    variant="destructive"
                    disabled={isPending}
                    onClick={() => handleUpdate("Rejected")}
                >
                    {loadingStatus === "Rejected" ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                        "Reject"
                    )}
                </Button>

            </div>
        );
    }

    if (booking.status === "Accepted" && booking.payment?.status === "Paid") {
        return (
            <Button
                size="sm"
                disabled={isPending}
                onClick={() => handleUpdate("Completed")}
            >
                {loadingStatus === "Completed" ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                    "Complete"
                )}
            </Button>
        );
    }

    if (booking.status === "Completed") {
        return (
            <Button
                size="sm"
                disabled
                variant="secondary"
                className="text-white"
            >
                Completed
            </Button>
        );
    }

    if (booking.status === "Accepted") {
        return (
            <Button
                size="sm"
                disabled
                variant="secondary"
                className="text-white"
            >
                Waiting for Payment
            </Button>
        );
    }
    else {
        return (
            <Button
                size="sm"
                disabled
                variant="destructive"
            >
                Rejected
            </Button>
        )
    }
}