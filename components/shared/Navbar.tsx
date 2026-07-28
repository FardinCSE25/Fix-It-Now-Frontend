"use client";

import { LayoutDashboard, LogOut, Menu, User } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";

import { navItems, userMenuItems } from "@/data/navbar-menu-data";
import { UserProfileResponse } from "@/lib/types/userProfile";
import { cn } from "@/lib/utils";
import { logout } from "@/services/logout";
import { toast } from "sonner";
import Logo from "./Logo";

type NavbarProps = {
    user: UserProfileResponse;
};

export default function Navbar(
    { user }: NavbarProps
) {
    const pathname = usePathname();
    const router = useRouter();

    const handleUserAction = async (action: string) => {
        if (action === "dashboard") {
            switch (user?.data?.role) {
                case "Customer":
                    router.push("/dashboard/customer");
                    break;

                case "Technician":
                    router.push("/dashboard/technician");
                    break;

                case "Admin":
                    router.push("/dashboard/admin");
                    break;
            }

            return;
        }

        if (action === "logout") {
            await logout();

            toast.success("Logged out successfully");

            router.push("/login");
        }
    };

    return (
        <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-xl supports-backdrop-filter:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between">

                {/* Logo */}

                <Logo />

                {/* Desktop Navigation */}

                <nav className="hidden items-center gap-8 lg:flex">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium transition-colors",

                                pathname === item.href
                                    ? "text-primary"
                                    : "text-muted-foreground hover:text-primary"
                            )}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
                {/* Right Side */}

                <div className="flex items-center gap-3">

                    {user?.success ? (
                        <DropdownMenu>

                            <DropdownMenuTrigger
                                render={
                                    <button className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-r from-primary to-secondary text-white shadow-lg transition hover:scale-105" />
                                }
                            >
                                <User className="h-5 w-5" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                align="end"
                                className="w-60 rounded-xl"
                            >

                                <DropdownMenuGroup>

                                    <DropdownMenuLabel>
                                        <div className="space-y-1">

                                            <p className="font-semibold">
                                                {user.data.name}
                                            </p>

                                            <p className="text-xs text-muted-foreground">
                                                {user.data.email}
                                            </p>

                                            <span className="inline-flex rounded-full bg-primary/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
                                                {user.data.role}
                                            </span>

                                        </div>
                                    </DropdownMenuLabel>

                                </DropdownMenuGroup>


                                <DropdownMenuSeparator />


                                <DropdownMenuGroup>

                                    {userMenuItems.map((item) => {
                                        const Icon = item.icon;

                                        return (
                                            <DropdownMenuItem
                                                key={item.action}
                                                onClick={() => handleUserAction(item.action)}
                                                className="cursor-pointer"
                                            >
                                                <Icon className="mr-2 h-4 w-4" />
                                                {item.label}
                                            </DropdownMenuItem>
                                        );
                                    })}

                                </DropdownMenuGroup>


                                <DropdownMenuSeparator />


                                <DropdownMenuItem
                                    className="cursor-pointer text-red-500 focus:text-red-500"
                                    onClick={() => handleUserAction("logout")}
                                >
                                    <LogOut className="mr-2 h-4 w-4" />
                                    Logout
                                </DropdownMenuItem>


                            </DropdownMenuContent>

                        </DropdownMenu>
                    ) : (
                        <>
                        <Link href="/login">
                            <Button className="bg-linear-to-r from-primary to-secondary text-white shadow-md transition hover:scale-105">
                                Login
                            </Button>
                        </Link>
                        <Link href="/register">
                            <Button className="bg-linear-to-r from-primary to-secondary text-white shadow-md transition hover:scale-105">
                                Register
                            </Button>
                        </Link>
                        </>
                    )}

                    {/* Mobile Menu */}

                    <Sheet>

                        <SheetTrigger
                            render={
                                <Button
                                    size="icon"
                                    variant="ghost"
                                    className="lg:hidden"
                                />
                            }
                        >
                            <Menu className="h-6 w-6" />
                        </SheetTrigger>

                        <SheetContent side="right" className="w-72">

                            <div className="mt-10 flex flex-col gap-6">

                                {navItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={cn(
                                            "text-lg font-medium transition-colors",
                                            pathname === item.href
                                                ? "text-primary"
                                                : "text-muted-foreground hover:text-primary"
                                        )}
                                    >
                                        {item.label}
                                    </Link>
                                ))}

                                <div className="mt-6 border-t pt-6">

                                    {user?.success ? (

                                        <div className="space-y-4">

                                            <div>
                                                <h4 className="font-semibold">
                                                    {user.data.name}
                                                </h4>

                                                <p className="text-sm text-muted-foreground">
                                                    {user.data.email}
                                                </p>
                                            </div>

                                            <Button
                                                variant="outline"
                                                className="w-full"
                                                onClick={() => handleUserAction("dashboard")}
                                            >
                                                <LayoutDashboard className="mr-2 h-4 w-4" />
                                                Dashboard
                                            </Button>

                                            <Button
                                                variant="destructive"
                                                className="w-full"
                                                onClick={() => handleUserAction("logout")}
                                            >
                                                <LogOut className="mr-2 h-4 w-4" />
                                                Logout
                                            </Button>

                                        </div>

                                    ) : (

                                        <Link href="/login">
                                            <Button className="w-full bg-linear-to-r from-primary to-secondary">
                                                Login
                                            </Button>
                                        </Link>

                                    )}

                                </div>

                            </div>

                        </SheetContent>

                    </Sheet>

                </div>

            </div>

        </header>
    );
}