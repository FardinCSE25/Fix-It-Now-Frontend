import {
    ArrowRight,
    MessageSquare,
    ShieldCheck,
    Star,
    UserCheck,
    UserCog,
    Users
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
import { getAllReviews } from "./_actions/getAllReviews";
import { getAllUsers } from "./_actions/getAllUsers";
import { Review } from "./_types/review";
import { User } from "./_types/user";

export default async function AdminDashboard() {

    const loggedInUserRes = await getMe()
    const reviewsRes = await getAllReviews()
    const usersRes = await getAllUsers()

    const admin = loggedInUserRes?.data;
    const reviews = reviewsRes?.data || [];
    const users = usersRes?.data || [];

    const totalUsers = users.length;
    const totalTechnicians = users.filter((u: User) => u.role === "Technician").length;
    const totalCustomers = users.filter((u: User) => u.role === "Customer").length;
    const totalReviews = reviews.length;

    const avgRating = totalReviews > 0
        ? (reviews.reduce((acc: number, r: Review) => acc + Number(r.rating || 0), 0) / totalReviews).toFixed(1)
        : "0.0";

    const stats = [
        {
            title: "Total Users",
            value: totalUsers,
            subtitle: `${totalCustomers} Customers, ${totalTechnicians} Techs`,
            icon: Users,
            color: "text-blue-600 bg-blue-50 border-blue-100",
        },
        {
            title: "Technicians",
            value: totalTechnicians,
            subtitle: "Active service providers",
            icon: UserCog,
            color: "text-purple-600 bg-purple-50 border-purple-100",
        },
        {
            title: "Total Reviews",
            value: totalReviews,
            subtitle: "Submitted by customers",
            icon: MessageSquare,
            color: "text-emerald-600 bg-emerald-50 border-emerald-100",
        },
        {
            title: "Average Rating",
            value: `${avgRating} / 5.0`,
            subtitle: "Overall service feedback",
            icon: Star,
            color: "text-amber-600 bg-amber-50 border-amber-100",
        },
    ];

    return (
        <section className="bg-gray-100 py-12 min-h-screen">
            <div className="space-y-8 p-1 container mx-auto sm:p-2">
                {/* Page Header */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                            Welcome back, {admin?.name || "Admin"} !
                        </h1>
                        <p className="mt-1 text-sm text-slate-500">
                            Live system statistics and platform overview.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <Link href="/admin-dashboard/users">
                            <Button variant="outline" className="rounded-xl border-slate-200">
                                <UserCheck className="mr-2 h-4 w-4 text-purple-600" />
                                Manage Users
                            </Button>
                        </Link>

                        <Link href="/admin-dashboard/all-reviews">
                            <Button className="rounded-xl bg-purple-600 text-white hover:bg-purple-700 shadow-xs">
                                <MessageSquare className="mr-2 h-4 w-4" />
                                All Reviews
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
                <div className="grid gap-6 lg:grid-cols-3">
                    {/* Recent Platform Reviews */}
                    <Card className="lg:col-span-2 rounded-2xl border-slate-200/80 shadow-xs bg-white">
                        <CardHeader className="flex flex-row items-center justify-between border-b border-slate-100 pb-4">
                            <div>
                                <CardTitle className="text-lg font-bold text-slate-900">
                                    Recent Reviews
                                </CardTitle>
                                <CardDescription className="text-xs text-slate-500">
                                    Latest feedback submitted for technicians
                                </CardDescription>
                            </div>

                            <Link href="/admin-dashboard/all-reviews">
                                <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-700 hover:bg-purple-50">
                                    View All
                                    <ArrowRight className="ml-1.5 h-4 w-4" />
                                </Button>
                            </Link>
                        </CardHeader>

                        <CardContent className="p-0">
                            {reviews.length === 0 ? (
                                <div className="py-12 text-center text-sm text-slate-500">
                                    No reviews found yet.
                                </div>
                            ) : (
                                <div className="divide-y divide-slate-100">
                                    {reviews.slice(0, 4).map((review: Review) => {
                                        const customerName = review.customer?.name || "Customer";
                                        const techName = review.technician?.name || "Technician";
                                        const initials = customerName
                                            .split(" ")
                                            .map((n: string) => n[0])
                                            .join("")
                                            .slice(0, 2)
                                            .toUpperCase();

                                        return (
                                            <div
                                                key={review.id}
                                                className="flex items-center justify-between p-4 sm:px-6 hover:bg-slate-50/60 transition-colors"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <Avatar className="h-10 w-10 border border-purple-200 bg-purple-50 text-xs font-bold text-purple-700">
                                                        <AvatarFallback>{initials}</AvatarFallback>
                                                    </Avatar>

                                                    <div>
                                                        <h4 className="text-sm font-semibold text-slate-900 line-clamp-1">
                                                            {customerName}{" "}
                                                            <span className="font-normal text-slate-500">
                                                                reviewed
                                                            </span>{" "}
                                                            {techName}
                                                        </h4>
                                                        <p className="text-xs text-slate-500 line-clamp-1">
                                                            &quot;{review.comment}&quot;
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-3 text-right">
                                                    <div className="text-xs text-slate-400">
                                                        {new Date(review.createdAt).toLocaleDateString()}
                                                    </div>
                                                    <Badge className="bg-amber-50 text-amber-700 border-amber-200/60 shadow-none font-medium gap-1">
                                                        <Star className="h-3 w-3 fill-amber-500 text-amber-500" />
                                                        {review.rating}/5
                                                    </Badge>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    {/* Registered Users Preview */}
                    <Card className="rounded-2xl border-slate-200/80 shadow-xs bg-white">
                        <CardHeader className="flex flex-row items-center justify-between border-b border-slate-100 pb-4">
                            <div>
                                <CardTitle className="text-lg font-bold text-slate-900">
                                    Users Preview
                                </CardTitle>
                                <CardDescription className="text-xs text-slate-500">
                                    Registered platform users
                                </CardDescription>
                            </div>

                            <Link href="/admin-dashboard/users">
                                <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-700 hover:bg-purple-50">
                                    View All
                                    <ArrowRight className="ml-1.5 h-4 w-4" />
                                </Button>
                            </Link>
                        </CardHeader>

                        <CardContent className="p-0">
                            {users.length === 0 ? (
                                <div className="py-12 text-center text-sm text-slate-500">
                                    No users found.
                                </div>
                            ) : (
                                <div className="divide-y divide-slate-100">
                                    {users.slice(0, 4).map((u: User) => {
                                        const initials = u.name
                                            ? u.name.split(" ").map((n: string) => n[0]).join("").slice(0, 2).toUpperCase()
                                            : "U";

                                        return (
                                            <div key={u.id} className="flex items-center justify-between p-4 hover:bg-slate-50/60 transition-colors">
                                                <div className="flex items-center gap-3">
                                                    <Avatar className="h-9 w-9 border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-700">
                                                        <AvatarFallback>{initials}</AvatarFallback>
                                                    </Avatar>
                                                    <div>
                                                        <p className="text-sm font-semibold text-slate-900">{u.name}</p>
                                                        <p className="text-xs text-slate-400">{u.email}</p>
                                                    </div>
                                                </div>

                                                <Badge variant="outline" className={`text-xs ${u.role === "Technician" ? "bg-purple-50 text-purple-700 border-purple-200" : "bg-blue-50 text-blue-700 border-blue-200"}`}>
                                                    {u.role}
                                                </Badge>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}

                            <div className="p-4 border-t border-slate-100 bg-slate-50/50 rounded-b-2xl">
                                <div className="flex items-center gap-2 text-emerald-700 font-semibold text-xs">
                                    <ShieldCheck className="h-4 w-4 text-emerald-600" />
                                    <span>System Status: Healthy</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}