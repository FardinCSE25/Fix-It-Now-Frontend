"use client";

import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { CalendarX2 } from "lucide-react";

import { Booking } from "../_types/booking";
import BookingRow from "./BookingRow";

type Props = {
    bookings: Booking[];
};

export default function BookingTable({ bookings }: Props) {
    if (!bookings.length) {
        return (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50/50 py-16 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-500">
                    <CalendarX2 className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-900">
                    No Bookings Found
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                    You don&apos;t have any booking requests yet.
                </p>
            </div>
        );
    }

    return (
        <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-xs">
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader className="bg-slate-50/80 backdrop-blur-xs border-b border-slate-200/80">
                        <TableRow className="hover:bg-transparent border-none">
                            <TableHead>Technician</TableHead>

                            <TableHead>Service</TableHead>

                            <TableHead className="text-right">
                                Price
                            </TableHead>

                            <TableHead>Status</TableHead>

                            <TableHead>Payment</TableHead>

                            <TableHead>Booked At</TableHead>

                            {/* <TableHead className="text-right">
                                Actions
                            </TableHead> */}


                            <TableHead className="py-3.5 pl-3 pr-6 text-right text-xs font-bold uppercase tracking-wider text-slate-500">
                                Actions
                            </TableHead>

                        </TableRow>
                    </TableHeader>

                    <TableBody className="divide-y divide-slate-100">
                        {bookings.map((booking) => (
                            <BookingRow
                                key={booking.id}
                                booking={booking}
                            />
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}