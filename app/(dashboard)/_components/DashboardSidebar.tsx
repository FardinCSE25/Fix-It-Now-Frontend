"use client";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { sidebarMenuItems } from "@/data/SidebarMenuItems";
import { SidebarItem } from "@/lib/types/SidebarItems";
import { UserProfileResponse } from "@/lib/types/userProfile";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavbarProps = {
  user: UserProfileResponse;
};

export default function DashboardSidebar({ user }: NavbarProps) {
  const pathname = usePathname();

  let navItems: SidebarItem[] = [];
  if (user?.data?.role === "Customer") {
    navItems = sidebarMenuItems.Customer;
  } else if (user?.data?.role === "Technician") {
    navItems = sidebarMenuItems.Technician;
  } else if (user?.data?.role === "Admin") {
    navItems = sidebarMenuItems.Admin;
  }

  return (
    <Sidebar className="border-r border-border bg-sidebar">
      {/* Header Section */}
      <SidebarHeader className="p-4 border-b border-border">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            F
          </div>
          <span className="truncate">Fix It Now</span>
        </Link>
      </SidebarHeader>

      {/* Main Navigation Items */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>

              {/* Dynamic Role Based Links */}
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton isActive={isActive}>
                      <Link
                        href={item.href}
                        className="flex items-center gap-3 px-3 py-2"
                      >
                        <Icon className="h-4 w-4" />
                        <span>{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* User Info Footer */}
      <SidebarFooter className="p-4 border-t border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-muted font-medium text-muted-foreground">
              {user?.data?.name?.[0]?.toUpperCase() || "U"}
            </div>
            <div className="flex flex-col truncate">
              <span className="text-sm font-medium truncate">
                {user?.data?.name || "User Name"}
              </span>
              <span className="text-xs text-muted-foreground truncate">
                {user?.data?.role}
              </span>
            </div>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}