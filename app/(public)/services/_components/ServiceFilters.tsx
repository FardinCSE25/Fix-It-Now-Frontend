"use client";

import { RotateCcw, Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Category } from "../_types/service";

type Props = {
    categories: Category[];
    defaultCategory?: string;
    defaultSearch?: string;
    defaultSort?: "asc" | "desc";
};

export default function ServiceFilters({ categories }: Props) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [searchTerm, setSearchTerm] = useState(
        searchParams.get("searchTerm") ?? ""
    );

    const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const handleChange = (value: string) => {
        setSearchTerm(value);

        if (debounceRef.current) {
            clearTimeout(debounceRef.current);
        }

        debounceRef.current = setTimeout(() => {
            const params = new URLSearchParams(searchParams.toString());

            if (value.trim()) {
                params.set("searchTerm", value);
            } else {
                params.delete("searchTerm");
            }

            router.replace(
                params.toString() ? `${pathname}?${params.toString()}` : pathname
            );
        }, 500);
    };

    const resetFilters = () => {
        setSearchTerm("");
        router.replace(pathname);
    };

    return (
        <div className="flex flex-col gap-3 rounded-xl border bg-card p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                    value={searchTerm}
                    onChange={(e) => handleChange(e.target.value)}
                    placeholder="Search services..."
                    className="pl-9"
                />
            </div>

            {/* Filters & Actions Group */}
            <div className="flex flex-wrap items-center gap-2 sm:flex-nowrap">
                {/* Category Select */}

                <Select
                    value={searchParams.get("type") ?? ""}
                    onValueChange={(value) => {
                        const params = new URLSearchParams(searchParams.toString());

                        if (!value || value === "all") {
                            params.delete("type");
                        } else {
                            params.set("type", value);
                        }

                        router.replace(
                            params.toString() ? `${pathname}?${params.toString()}` : pathname
                        );
                    }}
                >
                    <SelectTrigger className="w-full sm:w-42.5">
                        <SelectValue placeholder="All Categories" />
                    </SelectTrigger>

                    <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        {categories.map((category) => (
                            <SelectItem key={category.id} value={category.title}>
                                {category.title}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                {/* Sort Select */}

                <Select
                    value={searchParams.get("sortOrder") ?? ""}
                    onValueChange={(value) => {
                        if (!value) return;

                        const params = new URLSearchParams(searchParams.toString());
                        params.set("sortOrder", value);

                        router.replace(
                            params.toString() ? `${pathname}?${params.toString()}` : pathname
                        );
                    }}
                >
                    <SelectTrigger className="w-full sm:w-37.5">
                        <SelectValue placeholder="Sort" />
                    </SelectTrigger>

                    <SelectContent>
                        <SelectItem value="asc">Price: Low to High</SelectItem>
                        <SelectItem value="desc">Price: High to Low</SelectItem>
                    </SelectContent>
                </Select>

                {/* Reset Button */}
                <Button
                    variant="outline"
                    size="icon"
                    onClick={resetFilters}
                    className="shrink-0"
                    title="Reset Filters"
                >
                    <RotateCcw className="h-4 w-4" />
                </Button>
            </div>
        </div>
    );
}