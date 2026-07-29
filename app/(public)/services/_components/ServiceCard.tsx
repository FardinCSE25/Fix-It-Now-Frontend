"use client";

import { ArrowRight, Wrench } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Service } from "../_types/service";

type Props = {
  service: Service;
  onView: (service: Service) => void;
};

export default function ServiceCard({
  service,
  onView,
}: Props) {
  return (
    <div className="group flex h-full flex-col rounded-2xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-r from-primary to-secondary text-white shadow-lg">
        <Wrench className="h-7 w-7" />
      </div>

      <h2 className="mb-2 text-xl font-bold transition-colors group-hover:text-primary">
        {service.title}
      </h2>

      <p className="line-clamp-3 flex-1 text-sm leading-6 text-muted-foreground">
        {service.description}
      </p>

      <div className="mt-5 flex items-center justify-between">
        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          {service.category.title}
        </span>

        <span className="flex items-center gap-1 font-bold text-primary">
          ৳ {Number(service.price).toLocaleString()}
        </span>
      </div>

      <Button
        variant="outline"
        className="mt-6 w-full"
        onClick={() => onView(service)}
      >
        View Details
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}