"use client";

import { Eye, EyeOff, Loader2 } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";

import { loginAction } from "../_actions/loginAction";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const LoginForm = () => {
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
      toast.success(state.message || "Login successful");
      return;
    }

    toast.error(state.message || "Login failed");
  }, [state]);

  return (
    <form action={action}>
      <Card className="space-y-5 border-0 p-0 shadow-none">
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Email Address
          </label>

          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">
            Password
          </label>

          <div className="relative">
            <Input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              required
            />

            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary"
            >
              {showPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>
          </div>
        </div>

        <div className="flex justify-end">
          <Link
            href="/forgot-password"
            className="text-sm text-primary hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        <Button
          type="submit"
          disabled={pending}
          className="w-full bg-gradient-to-r from-primary to-secondary"
        >
          {pending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Signing In...
            </>
          ) : (
            "Sign In"
          )}
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-primary hover:underline"
          >
            Create Account
          </Link>
        </p>
      </Card>
    </form>
  );
};

export default LoginForm;