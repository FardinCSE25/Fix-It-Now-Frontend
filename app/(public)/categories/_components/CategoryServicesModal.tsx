"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

import { BadgeDollarSign, Wrench } from "lucide-react";
import { Category } from "../_types/categories";

type CategoryServicesModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  category: Category | null;
};

export default function CategoryServicesModal({
  open,
  onOpenChange,
  category,
}: CategoryServicesModalProps) {
  if (!category) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[85vh] max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            {category.title}
          </DialogTitle>

          <DialogDescription>
            {category.description}
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="mt-4 max-h-[60vh] pr-3">
          {category.services.length === 0 ? (
            <div className="flex h-40 items-center justify-center rounded-xl border border-dashed">
              <div className="space-y-2 text-center">
                <Wrench className="mx-auto h-10 w-10 text-muted-foreground" />

                <p className="font-medium">
                  No services available
                </p>

                <p className="text-sm text-muted-foreground">
                  This category doesn&apos;t have any services yet.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {category.services.map((service) => (
                <div
                  key={service.id}
                  className="rounded-xl border bg-card p-5 transition hover:border-primary/40 hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold">
                        {service.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {service.description}
                      </p>
                    </div>

                    <Badge className="bg-primary">
                      <BadgeDollarSign className="mr-1 h-3 w-3" />
                      ৳ {service.price}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}