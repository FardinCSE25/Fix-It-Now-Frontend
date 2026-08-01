import { JwtPayload } from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

import { verifyToken } from "./lib/jwt";

const AUTH_ROUTES = ["/login", "/register"];

const PUBLIC_ROUTES = [
    "/",
    "/services",
    "/technicians",
    "/categories",
];

const CUSTOMER_ROUTES = [
    "/dashboard"
];

const TECHNICIAN_ROUTES = [
    "/technician-dashboard"
];

const ADMIN_ROUTES = [
    "/admin-dashboard"
];

export async function proxy(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    const isPublicRoute = PUBLIC_ROUTES.some(
        (route) =>
            pathname === route ||
            pathname.startsWith(route + "/")
    );

    const isAuthRoute = AUTH_ROUTES.some(
        (route) =>
            pathname === route ||
            pathname.startsWith(route + "/")
    );

    const accessToken =
        request.cookies.get("accessToken")?.value;

    const decodedAccessToken = accessToken ? verifyToken(accessToken, process.env.JWT_ACCESS_SECRET!) : null;

    let user;

    if (decodedAccessToken?.success && decodedAccessToken.data) {
        user = (decodedAccessToken.data as JwtPayload);
    }

    if (accessToken && !decodedAccessToken?.success) {
        const response = NextResponse.redirect(
            new URL("/login", request.url)
        );

        response.cookies.delete("accessToken");

        return response;
    }

    if (user && isAuthRoute) {
        if (user?.role === "Admin") {
            return NextResponse.redirect(
                new URL("/admin-dashboard", request.url)
            );
        } else if (user?.role === "Technician") {
            return NextResponse.redirect(
                new URL("/technician-dashboard", request.url)
            );
        } else {
            return NextResponse.redirect(
                new URL("/dashboard", request.url)
            );
        }
    }

    // Authentication 

    if (!user && !isPublicRoute && !isAuthRoute) {
        const loginUrl = new URL("/login", request.url);

        loginUrl.searchParams.set(
            "redirectTo",
            pathname
        );

        return NextResponse.redirect(loginUrl);
    }

    if (
        CUSTOMER_ROUTES.some((route) =>
            pathname.startsWith(route)
        ) &&
        user?.role !== "Customer"
    ) {
        return NextResponse.redirect(
            new URL("/", request.url)
        );
    }

    if (
        TECHNICIAN_ROUTES.some((route) =>
            pathname.startsWith(route)
        ) &&
        user?.role !== "Technician"
    ) {
        return NextResponse.redirect(
            new URL("/", request.url)
        );
    }

    if (
        ADMIN_ROUTES.some((route) =>
            pathname.startsWith(route)
        ) &&
        user?.role !== "Admin"
    ) {
        return NextResponse.redirect(
            new URL("/", request.url)
        );
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)",
    ],
};