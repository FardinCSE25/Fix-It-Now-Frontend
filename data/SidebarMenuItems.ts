import { SidebarItem } from "@/lib/types/SidebarItems";
import {
    CalendarClock,
    CalendarDays,
    CreditCard,
    FolderKanban,
    UserCheck2,
    Users,
} from "lucide-react";

const CUSTOMER_SIDEBAR_ITEMS: SidebarItem[] = [
    {
        label: "My Payments",
        href: "/dashboard/my-payments",
        icon: CreditCard,
    },
    {
        label: "My Bookings",
        href: "/dashboard/my-bookings",
        icon: CalendarDays,
    }
];

const TECHNICIAN_SIDEBAR_ITEMS: SidebarItem[] = [
    {
        label: "My Profile",
        href: "/technician-dashboard/my-profile",
        icon: UserCheck2,
    },
    {
        label: "My Availability Schedule",
        href: "/technician-dashboard/availability",
        icon: CalendarClock,
    },
    {
        label: "My Bookings",
        href: "/technician-dashboard/my-bookings",
        icon: CalendarDays,
    },
];

const ADMIN_SIDEBAR_ITEMS: SidebarItem[] = [
    {
        label: "Users",
        href: "/admin-dashboard/users",
        icon: Users,
    },
    {
        label: "All Reviews",
        href: "/admin-dashboard/reviews",
        icon: FolderKanban,
    },
];

export const sidebarMenuItems = {
    Customer: CUSTOMER_SIDEBAR_ITEMS,
    Technician: TECHNICIAN_SIDEBAR_ITEMS,
    Admin: ADMIN_SIDEBAR_ITEMS,
};