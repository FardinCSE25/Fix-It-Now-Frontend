"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import {
  Calendar,
  CreditCard,
  Mail,
  ReceiptText,
  UserRound,
  Wrench,
} from "lucide-react";

import { Payment } from "../_types/payment";

type Props = {
  payment: Payment;
};

export default function PaymentDetailsCard({
  payment,
}: Props) {
  const booking = payment.booking;

  const initials = booking.technician.name
    .split(" ")
    .map((item) => item[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="rounded-3xl border bg-white shadow-sm">

      {/* Header */}

      <div className="flex items-center justify-between border-b p-8">
        <div>
          <h1 className="text-3xl font-bold">
            Payment Details
          </h1>

          <p className="mt-2 text-muted-foreground">
            Payment ID : {payment.id}
          </p>
        </div>

        <Badge className="bg-emerald-50 text-emerald-700 border border-emerald-200">
          {payment.status}
        </Badge>
      </div>

      <div className="grid gap-8 p-8 lg:grid-cols-3">

        {/* Left */}

        <div className="space-y-8 lg:col-span-2">

          {/* Payment */}

          <div>
            <h2 className="mb-5 flex items-center gap-2 text-lg font-semibold">
              <CreditCard className="size-5 text-primary" />
              Payment Information
            </h2>

            <div className="grid gap-6 sm:grid-cols-2">

              <div>
                <p className="text-sm text-muted-foreground">
                  Amount
                </p>

                <p className="text-2xl font-bold text-primary">
                  ৳{Number(payment.amount).toLocaleString()}
                </p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Payment Date
                </p>

                <p className="font-medium">
                  {new Date(payment.createdAt).toLocaleDateString()}
                </p>
              </div>

              <div className="sm:col-span-2">
                <p className="text-sm text-muted-foreground">
                  Transaction ID
                </p>

                <p className="break-all font-medium">
                  {payment.transactionId}
                </p>
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
                  ৳{Number(
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
                  Booking Status
                </span>

                <Badge>
                  {booking.status === "Completed"
                    ? "Service Provided"
                    : booking.status}
                </Badge>
              </div>

              <Separator />

              <div className="flex justify-between">
                <span className="text-muted-foreground">
                  Paid Amount
                </span>

                <span className="font-semibold">
                  ৳{Number(
                    payment.amount
                  ).toLocaleString()}
                </span>
              </div>

              <Separator />

              <div className="flex justify-between">
                <span className="text-muted-foreground">
                  Payment Status
                </span>

                <Badge className="bg-emerald-600">
                  Paid
                </Badge>
              </div>

              <Separator />

              <div className="flex items-start gap-2 rounded-xl bg-white p-4 text-sm text-slate-600">
                <ReceiptText className="mt-0.5 size-5 text-primary" />

                <p>
                  This payment has been completed successfully and
                  has been recorded in your payment history.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="size-4" />
                {new Date(
                  payment.createdAt
                ).toLocaleString()}
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}