"use client";

import { Eye, EyeOff, Loader2, Lock, Mail } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";

import { loginAction } from "../../_actions/loginAction";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginForm() {
    const searchParams = useSearchParams();
    const redirectTo = searchParams.get("redirectTo") ?? "";

    const [showPassword, setShowPassword] = useState(false);

    const [state, action, pending] = useActionState(
        loginAction.bind(null, redirectTo),
        null
    );

    useEffect(() => {
        if (!state) return;

        if (state.success) {
            toast.success(state.message);
            return;
        }

        toast.error(state.message);
    }, [state]);

    return (
        <form action={action} className="space-y-6">
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
                        required
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="h-12 rounded-xl px-12"
                    />

                    <button
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground transition hover:text-primary"
                    >
                        {showPassword ? (
                            <EyeOff size={20} />
                        ) : (
                            <Eye size={20} />
                        )}
                    </button>
                </div>
            </div>

            {/* Submit */}

            <Button
                type="submit"
                disabled={pending}
                className="h-12 w-full rounded-xl bg-linear-to-r from-primary to-secondary text-base font-semibold text-white shadow-lg transition hover:scale-[1.02]"
            >
                {pending ? (
                    <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Signing In...
                    </>
                ) : (
                    "Sign In"
                )}
            </Button>

            {/* Divider */}

            <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-border" />
                <span className="text-sm text-muted-foreground">
                    or
                </span>
                <div className="h-px flex-1 bg-border" />
            </div>

            {/* Register */}

            <p className="text-center text-sm text-muted-foreground">
                Don&apos;t have an account?{" "}
                <Link
                    href="/register"
                    className="font-semibold text-primary transition hover:underline"
                >
                    Create Account
                </Link>
            </p>
        </form>
    );
}