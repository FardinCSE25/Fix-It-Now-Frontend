import {
    ArrowRight,
    Calendar,
    CheckCircle2,
    Clock,
    CreditCard,
    DollarSign,
    Wrench,
} from "lucide-react";
import Link from "next/link";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { getMe } from "@/services/getMe";
import { getMyBookings } from "./_actions/getMyBookings"; // 👈 আপনার Customer Bookings Action Path
import { getMyPaymentHistory } from "./_actions/getMyPaymentHistory"; // 👈 আপনার Payments Action Path
import { Booking } from "./_types/booking";
import { Payment } from "./_types/payment";

export default async function CustomerDashboard() {
    const user = await getMe();
    const bookingsRes = await getMyBookings();
    const paymentsRes = await getMyPaymentHistory();

    const bookings = bookingsRes?.data || [];
    const payments = paymentsRes?.data || [];

    const totalBookings = bookings.length;

    const completedBookings = bookings.filter(
        (b: Booking) => b.status === "Completed"
    ).length;

    const activeBookings = bookings.filter(
        (b: Booking) => b.status === "Accepted" || b.status === "Pending"
    ).length;

    const totalSpent = payments
        .filter((p: Payment) => p.status === "Paid")
        .reduce((sum: number, p: Payment) => sum + (Number(p.amount) || 0), 0);

    const recentBookings = bookings.slice(0, 3);
    const recentPayments = payments.slice(0, 3);

    const stats = [
        {
            title: "Total Spent",
            value: `৳${totalSpent.toLocaleString()}`,
            subtitle: "Total payments made",
            icon: DollarSign,
            color: "text-emerald-600 bg-emerald-50 border-emerald-100",
        },
        {
            title: "Active Bookings",
            value: activeBookings,
            subtitle: "Pending & accepted jobs",
            icon: Clock,
            color: "text-amber-600 bg-amber-50 border-amber-100",
        },
        {
            title: "Completed Services",
            value: completedBookings,
            subtitle: "Successfully finished",
            icon: CheckCircle2,
            color: "text-blue-600 bg-blue-50 border-blue-100",
        },
        {
            title: "Total Bookings",
            value: totalBookings,
            subtitle: "All time service requests",
            icon: Wrench,
            color: "text-purple-600 bg-purple-50 border-purple-100",
        },
    ];

    return (
        <section className="bg-gray-100 py-12 min-h-screen">
            <div className="space-y-8 p-1 container mx-auto sm:p-2">
                {/* Page Header */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                            Welcome back {user?.data?.name || "Customer"} !
                        </h1>
                        <p className="mt-1 text-sm text-slate-500">
                            Track your requested services and payment history.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <Link href="/dashboard/my-payments">
                            <Button variant="outline" className="rounded-xl border-slate-200">
                                <CreditCard className="mr-2 h-4 w-4 text-purple-600" />
                                My Payments
                            </Button>
                        </Link>

                        <Link href="/dashboard/my-bookings">
                            <Button className="rounded-xl bg-purple-600 text-white hover:bg-purple-700 shadow-xs">
                                <Calendar className="mr-2 h-4 w-4" />
                                My Bookings
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Stat Cards */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat, i) => {
                        const Icon = stat.icon;
                        return (
                            <Card key={i} className="rounded-2xl border-slate-200/80 shadow-xs hover:shadow-sm transition-shadow bg-white">
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between">
                                        <div className={`flex h-12 w-12 items-center justify-center rounded-xl border ${stat.color}`}>
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        <Badge variant="secondary" className="bg-slate-100 text-xs font-medium text-slate-600">
                                            Live
                                        </Badge>
                                    </div>

                                    <div className="mt-4">
                                        <p className="text-sm font-medium text-slate-500">{stat.title}</p>
                                        <h3 className="mt-1 text-2xl font-bold text-slate-900">{stat.value}</h3>
                                        <p className="mt-1 text-xs text-slate-400">{stat.subtitle}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>

                {/* Main Content Area */}
                <div className="grid gap-6 lg:grid-cols-2">
                    {/* Recent Bookings Section */}
                    <Card className="rounded-2xl border-slate-200/80 shadow-xs bg-white">
                        <CardHeader className="flex flex-row items-center justify-between border-b border-slate-100 pb-4">
                            <div>
                                <CardTitle className="text-lg font-bold text-slate-900">
                                    Recent Bookings
                                </CardTitle>
                                <CardDescription className="text-xs text-slate-500">
                                    Your latest service requests
                                </CardDescription>
                            </div>

                            <Link href="/dashboard/my-bookings">
                                <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-700 hover:bg-purple-50">
                                    View All
                                    <ArrowRight className="ml-1.5 h-4 w-4" />
                                </Button>
                            </Link>
                        </CardHeader>

                        <CardContent className="p-0">
                            {recentBookings.length === 0 ? (
                                <div className="py-12 text-center text-sm text-slate-500">
                                    No bookings found yet.
                                </div>
                            ) : (
                                <div className="divide-y divide-slate-100">
                                    {recentBookings.map((booking: Booking) => {
                                        const techName = booking.technician?.name || "Technician";
                                        const initials = techName
                                            .split(" ")
                                            .map((n: string) => n[0])
                                            .join("")
                                            .slice(0, 2)
                                            .toUpperCase();

                                        return (
                                            <div
                                                key={booking.id}
                                                className="flex items-center justify-between p-4 sm:px-6 hover:bg-slate-50/60 transition-colors"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <Avatar className="h-10 w-10 border border-purple-200 bg-purple-50 text-xs font-bold text-purple-700">
                                                        <AvatarFallback>{initials}</AvatarFallback>
                                                    </Avatar>

                                                    <div>
                                                        <h4 className="text-sm font-semibold text-slate-900 line-clamp-1">
                                                            {booking.service?.title}
                                                        </h4>
                                                        <p className="text-xs text-slate-500">
                                                            Technician:{" "}
                                                            <span className="font-medium text-slate-700">
                                                                {techName}
                                                            </span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-4 text-right">
                                                    <div>
                                                        <p className="text-sm font-bold text-slate-900">
                                                            ৳{Number(booking.service?.price || 0).toLocaleString()}
                                                        </p>
                                                        <p className="text-xs text-slate-400">
                                                            {new Date(booking.createdAt).toLocaleDateString()}
                                                        </p>
                                                    </div>

                                                    <Badge
                                                        className={`shadow-none font-medium border ${
                                                            booking.status === "Pending"
                                                                ? "bg-amber-50 text-amber-700 border-amber-200/60"
                                                                : booking.status === "Accepted"
                                                                ? "bg-blue-50 text-blue-700 border-blue-200/60"
                                                                : booking.status === "Completed"
                                                                ? "bg-emerald-50 text-emerald-700 border-emerald-200/60"
                                                                : "bg-rose-50 text-rose-700 border-rose-200/60"
                                                        }`}
                                                    >
                                                        ● {booking.status}
                                                    </Badge>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    {/* Recent Payments Section */}
                    <Card className="rounded-2xl border-slate-200/80 shadow-xs bg-white">
                        <CardHeader className="flex flex-row items-center justify-between border-b border-slate-100 pb-4">
                            <div>
                                <CardTitle className="text-lg font-bold text-slate-900">
                                    Payment History
                                </CardTitle>
                                <CardDescription className="text-xs text-slate-500">
                                    Recent transaction breakdown
                                </CardDescription>
                            </div>

                            <Link href="/dashboard/my-payments">
                                <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-700 hover:bg-purple-50">
                                    View All
                                    <ArrowRight className="ml-1.5 h-4 w-4" />
                                </Button>
                            </Link>
                        </CardHeader>

                        <CardContent className="p-0">
                            {recentPayments.length === 0 ? (
                                <div className="py-12 text-center text-sm text-slate-500">
                                    No payment history found.
                                </div>
                            ) : (
                                <div className="divide-y divide-slate-100">
                                    {recentPayments.map((payment: Payment) => (
                                        <div
                                            key={payment.id}
                                            className="flex items-center justify-between p-4 sm:px-6 hover:bg-slate-50/60 transition-colors"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100">
                                                    <CreditCard className="h-5 w-5" />
                                                </div>

                                                <div>
                                                    <h4 className="text-sm font-semibold text-slate-900 line-clamp-1">
                                                        {payment.booking?.service?.title || "Service Payment"}
                                                    </h4>
                                                    <p className="text-xs text-slate-400 font-mono">
                                                        TXN: {payment.transactionId?.slice(0, 16)}...
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-4 text-right">
                                                <div>
                                                    <p className="text-sm font-bold text-slate-900">
                                                        ৳{Number(payment.amount || 0).toLocaleString()}
                                                    </p>
                                                    <p className="text-xs text-slate-400">
                                                        {new Date(payment.createdAt).toLocaleDateString()}
                                                    </p>
                                                </div>

                                                <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200/60 shadow-none font-medium">
                                                    ● {payment.status}
                                                </Badge>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}