"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

import { Category } from "../_types/service";
import CreateServiceModal from "./CreateServiceModal";
import ServiceFilters from "./ServiceFilters";

type Props = {
    isTechnician: boolean;
    categories: Category[];
};

export default function ServicesHeader({
    isTechnician,
    categories
}: Props) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="mb-10 flex flex-col gap-6">
                {/* Top */}
                <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <h1 className="bg-linear-to-r from-primary to-secondary bg-clip-text text-4xl font-bold text-transparent">
                            Services
                        </h1>

                        <p className="mt-2 max-w-2xl text-muted-foreground">
                            Browse professional services offered by verified technicians.
                            Search, filter and find the right service for your needs.
                        </p>
                    </div>

                    {isTechnician && (
                        <Button onClick={() => setOpen(true)}>
                            <Plus className="mr-2 h-4 w-4" />
                            Create Service
                        </Button>
                    )}
                </div>

                {/* Search & Filter */}
                <ServiceFilters
                    categories={categories}
                />
            </div>

            {
                isTechnician && (
                    <CreateServiceModal
                        open={open}
                        onOpenChange={setOpen}
                        categories={categories}
                    />
                )
            }
        </>
    );
}