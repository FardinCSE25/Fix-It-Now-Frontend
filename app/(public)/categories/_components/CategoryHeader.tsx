"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";

import CreateCategoryModal from "./CreateCategoryModal";

type CategoryHeaderProps = {
    isAdmin: boolean;
};

export default function CategoryHeader({
    isAdmin,
}: CategoryHeaderProps) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="bg-linear-to-r from-primary to-secondary bg-clip-text text-4xl font-bold text-transparent">
                        Service Categories
                    </h1>

                    <p className="mt-2 max-w-2xl text-muted-foreground">
                        Browse all available service categories and discover
                        professional solutions for your home and office needs.
                    </p>
                </div>

                <div>
                    {isAdmin && (
                    <Button onClick={() => setOpen(true)}>
                        <Plus className="mr-2 h-4 w-4" />
                        Create Category
                    </Button>
                )}
                </div>
            </div>

            <CreateCategoryModal
                open={open}
                onOpenChange={setOpen}
            />
        </>
    );
}