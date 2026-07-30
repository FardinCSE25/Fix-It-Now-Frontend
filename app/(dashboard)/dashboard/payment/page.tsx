import Link from "next/link";

import { Button } from "@/components/ui/button";
import { CheckCircle2, CircleX } from "lucide-react";

type Props = {
  searchParams: Promise<{
    success?: string;
  }>;
};

export default async function PaymentPage({
  searchParams,
}: Props) {
  const { success } = await searchParams;

  const isSuccess = success === "true";

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md rounded-3xl -mt-44 bg-white p-8 text-center shadow-sm">

        {isSuccess ? (
          <>
            <CheckCircle2 className="mx-auto size-16 text-green-600" />

            <h1 className="mt-5 text-3xl font-bold">
              Payment Successful
            </h1>

            <p className="mt-2 text-muted-foreground">
              Your payment has been completed successfully.
            </p>

            <Button
              className="mt-8 w-full"
            >
              <Link href="/dashboard/my-bookings">
                Go to My Bookings
              </Link>
            </Button>
          </>
        ) : (
          <>
            <CircleX className="mx-auto size-16 text-red-600" />

            <h1 className="mt-5 text-3xl font-bold">
              Payment Cancelled
            </h1>

            <p className="mt-2 text-muted-foreground">
              Your payment was cancelled. You can try again anytime.
            </p>

            <Button
              variant="outline"
              className="mt-8 w-full"
            >
              <Link href="/dashboard/my-bookings">
                Back to My Bookings
              </Link>
            </Button>
          </>
        )}
      </div>
    </div>
  );
}