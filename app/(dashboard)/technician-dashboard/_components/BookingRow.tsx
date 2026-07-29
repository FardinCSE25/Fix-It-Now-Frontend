"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { TableCell, TableRow } from "@/components/ui/table";
import { Calendar } from "lucide-react";

import { Booking } from "../_types/booking";
import BookingActions from "./BookingActions";

type Props = {
  booking: Booking;
  isTechnician: boolean;
};

export default function BookingRow({ booking, isTechnician }: Props) {
  // Soft badge styles for status
  const statusStyles: Record<Booking["status"], string> = {
    Pending:
      "bg-amber-50 text-amber-700 border-amber-200/60 hover:bg-amber-50",
    Accepted:
      "bg-blue-50 text-blue-700 border-blue-200/60 hover:bg-blue-50",
    Completed:
      "bg-emerald-50 text-emerald-700 border-emerald-200/60 hover:bg-emerald-50",
    Rejected:
      "bg-rose-50 text-rose-700 border-rose-200/60 hover:bg-rose-50",
  };

  // Avatar Initials
  const customerName = booking.customer?.name || "Customer";
  const initials = customerName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <TableRow className="group transition-colors hover:bg-slate-50/80">
      {/* Customer Info with Avatar */}
      <TableCell className="py-4 pl-6 pr-3">
        <div className="flex items-center gap-3">
          <Avatar className="h-9 w-9 border border-purple-200 bg-purple-50 text-xs font-bold text-purple-700">
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <span className="text-sm font-semibold text-slate-900">
              {customerName}
            </span>

            <span className="text-xs text-slate-500">
              {booking.customer?.email}
            </span>
          </div>
        </div>
      </TableCell>

      {/* Service Info */}
      <TableCell className="max-w-70 px-3 py-4">
        <div className="flex flex-col">
          <span className="text-sm font-medium text-slate-800 line-clamp-1">
            {booking.service.title}
          </span>

          <span className="mt-0.5 text-xs text-slate-500 line-clamp-1">
            {booking.service.description}
          </span>
        </div>
      </TableCell>

      {/* Price */}
      <TableCell className="px-3 py-4 text-right text-sm font-semibold text-slate-900">
        ৳{Number(booking.service.price).toLocaleString()}
      </TableCell>

      {/* Status Badge */}
      <TableCell className="px-3 py-4">
        <Badge
          className={`border font-medium shadow-none ${
            statusStyles[booking.status] ??
            "bg-slate-100 text-slate-700 border-slate-200"
          }`}
        >
          ● {booking.status}
        </Badge>
      </TableCell>

      {/* Payment Badge */}
      <TableCell className="px-3 py-4">
        {booking.payment ? (
          <Badge className="border border-emerald-200/60 bg-emerald-50 font-medium text-emerald-700 shadow-none hover:bg-emerald-50">
            Paid
          </Badge>
        ) : (
          <Badge className="border border-rose-200/60 bg-rose-50 font-medium text-rose-700 shadow-none hover:bg-rose-50">
            Unpaid
          </Badge>
        )}
      </TableCell>

      {/* Booked Date */}
      <TableCell className="whitespace-nowrap px-3 py-4 text-xs text-slate-500">
        <div className="flex items-center gap-1.5">
          <Calendar className="h-3.5 w-3.5 text-slate-400" />
          <span>
            {new Date(booking.createdAt).toLocaleDateString("en-US", {
              month: "numeric",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>
      </TableCell>

      {/* Actions */}
      {isTechnician && (
        <TableCell className="py-4 pl-3 pr-6 text-right whitespace-nowrap">
          <BookingActions booking={booking} />
        </TableCell>
      )}
    </TableRow>
  );
}