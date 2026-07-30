"use client";

import {
    CalendarDays,
    Clock,
    Loader2,
    Lock,
    Mail,
    User
} from "lucide-react";

import Link from "next/link";
import { useSearchParams } from "next/navigation"; // 👈 ১. useSearchParams ইম্পোর্ট করুন
import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { registerAction } from "../_actions/registerAction";

export default function RegisterForm() {
    const searchParams = useSearchParams();
    
    const initialRole = searchParams.get("role") === "Technician" ? "Technician" : "Customer";

    const [role, setRole] = useState(initialRole);

    const [state, action, pending] = useActionState(
        registerAction,
        null
    );

    useEffect(() => {
        if (!state) return;

        if (!state.success) {
            toast.error(state.message);
        }
    }, [state]);

    return (
        <form
            action={action}
            className="space-y-6"
        >
            {/* Name */}
            <div className="space-y-2">
                <label className="text-sm font-semibold">
                    Full Name
                </label>
                <div className="relative">
                    <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                    <Input
                        name="name"
                        required
                        placeholder="Enter your name"
                        className="h-12 rounded-xl pl-12"
                    />
                </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
                <label className="text-sm font-semibold">
                    Email Address
                </label>
                <div className="relative">
                    <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                    <Input
                        name="email"
                        type="email"
                        required
                        placeholder="Enter your email"
                        className="h-12 rounded-xl pl-12"
                    />
                </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
                <label className="text-sm font-semibold">
                    Password
                </label>
                <div className="relative">
                    <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                    <Input
                        name="password"
                        type="password"
                        required
                        placeholder="Create password"
                        className="h-12 rounded-xl pl-12"
                    />
                </div>
            </div>

            {/* Role */}
            <div className="space-y-3">
                <label className="text-sm font-semibold">
                    Role
                </label>

                <div className="flex gap-4">
                    <label
                        className={`flex flex-1 cursor-pointer items-center justify-center gap-3 rounded-xl border px-4 py-3 transition ${role === "Customer"
                            ? "border-primary bg-primary/10"
                            : "border-border"
                            }`}
                    >
                        <input
                            type="radio"
                            name="role"
                            value="Customer"
                            checked={role === "Customer"}
                            onChange={(e) => setRole(e.target.value)}
                            className="h-4 w-4 accent-primary"
                        />
                        <span className="font-medium">
                            Customer
                        </span>
                    </label>

                    <label
                        className={`flex flex-1 cursor-pointer items-center justify-center gap-3 rounded-xl border px-4 py-3 transition ${role === "Technician"
                            ? "border-primary bg-primary/10"
                            : "border-border"
                            }`}
                    >
                        <input
                            type="radio"
                            name="role"
                            value="Technician"
                            checked={role === "Technician"}
                            onChange={(e) => setRole(e.target.value)}
                            className="h-4 w-4 accent-primary"
                        />
                        <span className="font-medium">
                            Technician
                        </span>
                    </label>
                </div>
            </div>

            {
                role === "Technician" && (
                    <div className="space-y-5 rounded-2xl border bg-muted/30 p-5">
                        <h3 className="font-semibold text-slate-900">
                            Technician Information
                        </h3>

                        {/* Experience */}
                        <Input
                            name="experience"
                            required
                            placeholder="Experience (example: 5 years)"
                            className="h-12 rounded-xl"
                        />

                        {/* Bio */}
                        <textarea
                            name="bio"
                            placeholder="Short bio (optional)"
                            className="min-h-24 w-full rounded-xl border bg-background p-3 text-sm outline-none focus:ring-2 focus:ring-primary"
                        />

                        {/* Working Days */}
                        <div className="space-y-1.5">
                            <Label className="text-xs font-semibold text-muted-foreground">Working Days</Label>
                            <div className="relative">
                                <CalendarDays className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                                <Input
                                    name="workingDays"
                                    required
                                    placeholder="Saturday, Sunday, Monday"
                                    className="h-12 rounded-xl pl-12"
                                />
                            </div>
                        </div>

                        {/* Working Hours Grid */}
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {/* Start Time */}
                            <div className="space-y-1.5">
                                <Label className="text-xs font-semibold text-muted-foreground">Start Time</Label>
                                <div className="relative">
                                    <Clock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                                    <Input
                                        name="startTime"
                                        required
                                        placeholder="09:00 AM"
                                        className="h-12 rounded-xl pl-12"
                                    />
                                </div>
                            </div>

                            {/* End Time */}
                            <div className="space-y-1.5">
                                <Label className="text-xs font-semibold text-muted-foreground">End Time</Label>
                                <div className="relative">
                                    <Clock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                                    <Input
                                        name="endTime"
                                        required
                                        placeholder="05:00 PM"
                                        className="h-12 rounded-xl pl-12"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

            <Button
                type="submit"
                disabled={pending}
                className="h-12 w-full rounded-xl bg-linear-to-r from-primary to-secondary text-base font-semibold text-white shadow-lg transition hover:scale-[1.01]"
            >
                {
                    pending ? (
                        <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Creating Account...
                        </>
                    )
                        :
                        "Create Account"
                }
            </Button>

            <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-border" />
                <span className="text-sm text-muted-foreground">
                    or
                </span>
                <div className="h-px flex-1 bg-border" />
            </div>

            <p className="text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link
                    href="/login"
                    className="font-semibold text-primary hover:underline"
                >
                    Sign In
                </Link>
            </p>
        </form>
    );
}