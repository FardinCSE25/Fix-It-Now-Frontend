"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { TableCell, TableRow } from "@/components/ui/table";
import { Calendar } from "lucide-react";


import { Booking } from "../_types/booking";
import BookingActions from "./BookingActions";

type Props = {
    booking: Booking;
};

export default function BookingRow({
    booking,
}: Props) {
    const statusStyles: Record<
        Booking["status"],
        string
    > = {
        Pending:
            "bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-50",
        Accepted:
            "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-50",
        Completed:
            "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-50",
        Rejected:
            "bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-50",
    };

    const technicianName =
        booking.technician.name;

    const initials = technicianName
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

    return (
        <TableRow className="hover:bg-slate-50">
            {/* Technician */}
            <TableCell className="py-4 pl-6">
                <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9 border border-primary/20 bg-primary/10">
                        <AvatarFallback>
                            {initials}
                        </AvatarFallback>
                    </Avatar>

                    <div>
                        <p className="font-semibold">
                            {booking.technician.name}
                        </p>

                        <p className="text-xs text-muted-foreground">
                            {booking.technician.email}
                        </p>
                    </div>
                </div>
            </TableCell>

            {/* Service */}
            <TableCell className="max-w-xs">
                <div>
                    <p className="font-medium line-clamp-1">
                        {booking.service.title}
                    </p>

                    <p className="text-xs text-muted-foreground line-clamp-1">
                        {booking.service.description}
                    </p>
                </div>
            </TableCell>

            {/* Price */}
            <TableCell className="text-right font-semibold">
                ৳
                {Number(
                    booking.service.price
                ).toLocaleString()}
            </TableCell>

            {/* Status */}
            <TableCell>
                <Badge
                    className={`border ${statusStyles[booking.status]}`}
                >
                    {booking.status}
                </Badge>
            </TableCell>

            {/* Payment */}
            <TableCell>
                {booking.payment ? (
                    <Badge className="border border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-50">
                        Paid
                    </Badge>
                ) : (
                    <Badge className="border border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-50">
                        Unpaid
                    </Badge>
                )}
            </TableCell>

            {/* Date */}
            <TableCell>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" />

                    {new Date(
                        booking.createdAt
                    ).toLocaleDateString()}
                </div>
            </TableCell>

            {/* Actions */}
            <TableCell className="text-right">
                <BookingActions booking={booking} />
            </TableCell>
        </TableRow>
    );
}