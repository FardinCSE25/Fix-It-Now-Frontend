"use client";

import { ArrowRight, Layers3 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Category } from "../_types/categories";

type CategoryCardProps = {
  category: Category;
  onView: (category: Category) => void;
};

export default function CategoryCard({
  category,
  onView,
}: CategoryCardProps) {
  return (
    <div className="group flex h-full flex-col rounded-2xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl">
      {/* Icon */}

      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-r from-primary to-secondary text-white shadow-lg">
        <Layers3 className="h-7 w-7" />
      </div>

      {/* Title */}

      <h2 className="mb-3 text-xl font-bold transition-colors group-hover:text-primary">
        {category.title}
      </h2>

      {/* Description */}

      <p className="line-clamp-3 flex-1 text-sm leading-6 text-muted-foreground">
        {category.description}
      </p>

      {/* Footer */}

      <div className="mt-6 flex items-center justify-between">
        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          {category.services.length}{" "}
          {category.services.length === 1 ? "Service" : "Services"}
        </span>

        <Button
          variant="ghost"
          onClick={() => onView(category)}
          className="group/button p-0 text-primary hover:bg-transparent hover:text-primary"
        >
          View

          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
        </Button>
      </div>
    </div>
  );
}