"use client";

import { Button } from "@/components/ui/button";

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <html>
            <body className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
                <div className="max-w-md rounded-2xl bg-white p-8 text-center shadow-lg">
                    <h1 className="text-3xl font-bold text-red-600">
                        Something Went Wrong
                    </h1>

                    <p className="mt-3 text-muted-foreground">
                        An unexpected error occurred. Please try again.
                    </p>

                    {process.env.NODE_ENV === "development" && (
                        <pre className="mt-4 overflow-auto rounded bg-gray-100 p-3 text-left text-xs">
                            {error.message}
                        </pre>
                    )}

                    <Button
                        className="mt-6"
                        onClick={() => reset()}
                    >
                        Try Again
                    </Button>
                </div>
            </body>
        </html>
    );
}