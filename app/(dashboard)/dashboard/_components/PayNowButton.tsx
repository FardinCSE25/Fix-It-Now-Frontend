"use client";

import { CreditCard, Loader2 } from "lucide-react";
import { useTransition } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { createCheckoutSessionAction } from "../_actions/createCheckoutSessionAction";

type Props = {
    bookingId: string;
    size?: "sm" | "default" | "lg";
    className?: string;
};

export default function PayNowButton({
    bookingId,
    size = "default",
    className,
}: Props) {
    const [isPending, startTransition] =
        useTransition();

    const handlePayment = () => {
        startTransition(async () => {
            const result =
                await createCheckoutSessionAction(
                    bookingId
                );

            if (!result.success) {
                toast.error(result.message);
                return;
            }

            window.location.href = result.paymentUrl;
        });
    };

    return (
        <Button
            size={size}
            className={className}
            disabled={isPending}
            onClick={handlePayment}
        >
            {isPending ? (
                <Loader2 className="size-5 animate-spin" />
            ) : (
                <>
                    <CreditCard className="mr-1 size-4" />
                    Pay Now
                </>
            )}
        </Button>
    );
}