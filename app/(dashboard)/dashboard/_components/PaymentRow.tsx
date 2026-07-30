"use client";

import Link from "next/link";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";

import { Calendar, CreditCard } from "lucide-react";
import { Payment } from "../_types/payment";

type Props = {
    payment: Payment;
};

export default function PaymentRow({ payment }: Props) {
    const initials = payment.booking.technician.name
        .split(" ")
        .map((item) => item[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

    return (
        <TableRow className="group transition-colors hover:bg-slate-50/80">
            {/* Technician */}
            <TableCell className="py-4 pl-6 pr-3">
                <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9 border border-purple-200 bg-purple-50 text-xs font-bold text-purple-700">
                        <AvatarFallback>{initials}</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                        <span className="text-sm font-semibold text-slate-900">
                            {payment.booking.technician.name}
                        </span>

                        <span className="text-xs text-slate-500">
                            {payment.booking.technician.email}
                        </span>
                    </div>
                </div>
            </TableCell>

            {/* Service */}
            <TableCell className="max-w-72 px-3 py-4">
                <div className="flex flex-col">
                    <span className="line-clamp-1 text-sm font-medium text-slate-900">
                        {payment.booking.service.title}
                    </span>

                    <span className="mt-0.5 line-clamp-1 text-xs text-slate-500">
                        {payment.booking.service.description}
                    </span>
                </div>
            </TableCell>

            {/* Amount */}
            <TableCell className="px-3 py-4 text-right text-sm font-semibold text-slate-900">
                ৳{Number(payment.amount).toLocaleString()}
            </TableCell>

            {/* Status */}
            <TableCell className="px-3 py-4">
                <Badge className="border border-emerald-200 bg-emerald-50 text-emerald-700 shadow-none hover:bg-emerald-50">
                    Paid
                </Badge>
            </TableCell>

            {/* Transaction */}
            <TableCell className="px-3 py-4">
                <div className="flex items-center gap-2 text-xs text-slate-600">
                    <CreditCard className="h-4 w-4 text-slate-400" />

                    <span className="max-w-40 truncate">
                        {payment.transactionId}
                    </span>
                </div>
            </TableCell>

            {/* Date */}
            <TableCell className="whitespace-nowrap px-3 py-4 text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-slate-400" />

                    {new Date(payment.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                    })}
                </div>
            </TableCell>

            {/* Details */}
            <TableCell className="py-4 pl-3 pr-6 text-right">
                <Button
                    size="sm"
                    variant="outline"
                >
                    <Link href={`/dashboard/my-payments/${payment.id}`}>
                        Details
                    </Link>
                </Button>
            </TableCell>
        </TableRow>
    );
}