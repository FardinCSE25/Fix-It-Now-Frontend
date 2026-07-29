import { Mail } from "lucide-react";
import Link from "next/link";
import {
    FaFacebook,
    FaGithub,
    FaLinkedin,
} from "react-icons/fa6";

const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Technicians", href: "/technicians" },
    { label: "Categories", href: "/categories" },
];

export default function Footer() {
    return (
        <footer className="border-t bg-muted/30">
            <div className="container mx-auto px-4 py-14">
                <div className="grid gap-10 md:grid-cols-3">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-2xl font-bold text-transparent">
                            FixItNow
                        </h2>

                        <p className="max-w-sm text-sm leading-6 text-muted-foreground">
                            Find trusted home service professionals for plumbing,
                            electrical, cleaning, painting and more — all in one place.
                        </p>

                        <div className="flex items-center gap-3">
                            <Link
                                href="#"
                                className="rounded-lg border p-2 transition hover:border-primary hover:text-primary"
                            >
                                <FaFacebook className="h-5 w-5" />
                            </Link>

                            <Link
                                href="#"
                                className="rounded-lg border p-2 transition hover:border-primary hover:text-primary"
                            >
                                <FaGithub className="h-5 w-5" />
                            </Link>

                            <Link
                                href="#"
                                className="rounded-lg border p-2 transition hover:border-primary hover:text-primary"
                            >
                                <FaLinkedin className="h-5 w-5" />
                            </Link>

                            <Link
                                href="mailto:support@fixitnow.com"
                                className="rounded-lg border p-2 transition hover:border-primary hover:text-primary"
                            >
                                <Mail className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">
                            Quick Links
                        </h3>

                        <div className="flex flex-col gap-3">
                            {quickLinks.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-muted-foreground transition hover:text-primary"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">
                            Contact
                        </h3>

                        <div className="space-y-3 text-sm text-muted-foreground">
                            <p>📍 Dhaka, Bangladesh</p>
                            <p>📧 support@fixitnow.com</p>
                            <p>📞 +880 1234-567890</p>
                        </div>
                    </div>
                </div>

                <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()}{" "}
                    <span className="font-semibold text-primary">
                        FixItNow
                    </span>
                    . All rights reserved.
                </div>
            </div>
        </footer>
    );
}