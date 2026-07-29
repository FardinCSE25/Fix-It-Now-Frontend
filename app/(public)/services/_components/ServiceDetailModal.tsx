"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import {
    Calendar,
    FolderOpen
} from "lucide-react";

import { Service } from "../_types/service";

type Props = {
    service: Service | null;
    open: boolean;
    onOpenChange: (open: boolean) => void;
};

export default function ServiceDetailModal({
    service,
    open,
    onOpenChange,
}: Props) {
    if (!service) return null;

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-2xl">
                <DialogHeader>
                    <DialogTitle className="text-2xl">
                        {service.title}
                    </DialogTitle>

                    <DialogDescription>
                        Complete service information.
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-6">
                    {/* Price */}

                    <div className="flex items-center justify-between rounded-xl bg-primary/10 p-5">
                        <div>
                            <p className="text-sm text-muted-foreground">
                                Service Price
                            </p>

                            <h2 className="mt-1 text-3xl font-bold text-primary">
                                ৳{Number(service.price).toLocaleString()}
                            </h2>
                        </div>

                    </div>

                    {/* Information */}

                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="rounded-xl border p-4">
                            <div className="mb-2 flex items-center gap-2">
                                <FolderOpen className="h-5 w-5 text-primary" />

                                <span className="font-semibold">
                                    Category
                                </span>
                            </div>

                            <Badge variant="default">
                                {service.category.title}
                            </Badge>
                        </div>
                    </div>

                    {/* Description */}

                    <div>
                        <h3 className="mb-2 font-semibold">
                            Description
                        </h3>

                        <Separator className="mb-4" />

                        <p className="leading-7 text-muted-foreground">
                            {service.description}
                        </p>
                    </div>

                    {/* Technician */}

                    <div className="rounded-xl border p-5">
                        <h3 className="mb-4 font-semibold">
                            Technician Profile
                        </h3>

                        <div className="space-y-3">
                            <div>
                                <span className="font-medium">
                                    Experience:
                                </span>{" "}
                                {
                                    service.technician.technicianProfile
                                        .experience
                                }
                            </div>

                            <div>
                                <span className="font-medium">Bio:</span>

                                <p className="mt-1 text-muted-foreground">
                                    {
                                        service.technician.technicianProfile
                                            .bio
                                    }
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Dates */}

                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="rounded-xl border p-4">
                            <div className="mb-2 flex items-center gap-2">
                                <Calendar className="h-5 w-5 text-primary" />

                                <span className="font-medium">
                                    Created At
                                </span>
                            </div>

                            <p className="text-sm text-muted-foreground">
                                {new Date(
                                    service.createdAt
                                ).toLocaleDateString()}
                            </p>
                        </div>

                        <div className="rounded-xl border p-4">
                            <div className="mb-2 flex items-center gap-2">
                                <Calendar className="h-5 w-5 text-primary" />

                                <span className="font-medium">
                                    Updated At
                                </span>
                            </div>

                            <p className="text-sm text-muted-foreground">
                                {new Date(
                                    service.updatedAt
                                ).toLocaleDateString()}
                            </p>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}