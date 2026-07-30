"use client";

import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { CreditCard } from "lucide-react";

import { Payment } from "../_types/payment";
import PaymentRow from "./PaymentRow";

type Props = {
    payments: Payment[];
};

export default function PaymentTable({
    payments,
}: Props) {
    if (!payments.length) {
        return (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50 py-16">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
                    <CreditCard className="h-6 w-6 text-slate-500" />
                </div>

                <h3 className="mt-4 text-lg font-semibold">
                    No Payments Found
                </h3>

                <p className="mt-1 text-sm text-muted-foreground">
                    You haven&apos;t made any payments yet.
                </p>
            </div>
        );
    }

    return (
        <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-xs">
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader className="border-b border-slate-200/80 bg-slate-50/80">
                        <TableRow className="hover:bg-transparent">
                            <TableHead className="py-3.5 pl-6 text-xs font-bold uppercase tracking-wider text-slate-500">
                                Service
                            </TableHead>

                            <TableHead className="py-3.5 text-xs font-bold uppercase tracking-wider text-slate-500">
                                Technician
                            </TableHead>

                            <TableHead className="py-3.5 text-right text-xs font-bold uppercase tracking-wider text-slate-500">
                                Amount
                            </TableHead>

                            <TableHead className="py-3.5 text-xs font-bold uppercase tracking-wider text-slate-500">
                                Status
                            </TableHead>

                            <TableHead className="py-3.5 pr-6 text-xs font-bold uppercase tracking-wider text-slate-500">
                                Transaction ID
                            </TableHead>

                            <TableHead className="py-3.5 pr-6 text-xs font-bold uppercase tracking-wider text-slate-500">
                                Paid At
                            </TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody className="divide-y divide-slate-100">
                        {payments.map((payment) => (
                            <PaymentRow
                                key={payment.id}
                                payment={payment}
                            />
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}