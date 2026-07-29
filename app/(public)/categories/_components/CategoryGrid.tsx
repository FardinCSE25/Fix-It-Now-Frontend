"use client";

import { useState } from "react";

import CategoryCard from "./CategoryCard";
import CategoryServicesModal from "./CategoryServicesModal";

import { Category } from "../_types/categories";

type Props = {
  categories: Category[];
};

export default function CategoryGrid({
  categories,
}: Props) {
  const [selectedCategory, setSelectedCategory] =
    useState<Category | null>(null);

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            onView={setSelectedCategory}
          />
        ))}
      </div>

      <CategoryServicesModal
        category={selectedCategory}
        open={!!selectedCategory}
        onOpenChange={(open) => {
          if (!open) setSelectedCategory(null);
        }}
      />
    </>
  );
}