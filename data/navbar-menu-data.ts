import { LayoutDashboard, Settings, User } from "lucide-react";

export const navItems = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Services",
        href: "/services",
    },
    {
        label: "Technicians",
        href: "/technicians",
    },
    {
        label: "About",
        href: "/about",
    },
    {
        label: "Contact",
        href: "/contact",
    },
];


export const userMenuItems = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        action: "dashboard",
    },
    {
        label: "Profile",
        icon: User,
        action: "profile",
    },
    {
        label: "Settings",
        icon: Settings,
        action: "settings",
    },
];