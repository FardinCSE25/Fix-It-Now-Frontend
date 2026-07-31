import { Home, SearchX } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <section className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
            <div className="max-w-xl text-center">
                <div className="mx-auto mb-6 flex size-24 items-center justify-center rounded-full bg-red-100">
                    <SearchX className="size-12 text-red-500" />
                </div>

                <h1 className="text-7xl font-extrabold tracking-tight text-primary">
                    404
                </h1>

                <h2 className="mt-4 text-3xl font-bold">
                    Page Not Found
                </h2>

                <p className="mt-3 text-muted-foreground">
                    Sorry, the page you&apos;re looking for doesn&apos;t exist or may have
                    been moved.
                </p>

                <div className="mt-8 flex justify-center">
                    <Link href="/">
                        <Button size="lg">

                            <Home className="mr-2 size-4" />
                            Back to Home

                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}