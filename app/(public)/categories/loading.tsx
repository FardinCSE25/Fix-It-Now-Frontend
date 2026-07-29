import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <section className="space-y-8 my-12 container mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-3">
          <Skeleton className="h-10 w-72 rounded-lg" />
          <Skeleton className="h-4 w-120 max-w-full" />
        </div>

        <Skeleton className="h-10 w-40 rounded-lg" />
      </div>

      {/* Categories Grid */}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="rounded-2xl border p-6"
          >
            {/* Icon */}
            <Skeleton className="mb-5 h-14 w-14 rounded-2xl" />

            {/* Title */}
            <Skeleton className="mb-4 h-6 w-40" />

            {/* Description */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-[90%]" />
              <Skeleton className="h-4 w-[70%]" />
            </div>

            {/* Footer */}
            <div className="mt-8 flex items-center justify-between">
              <Skeleton className="h-8 w-24 rounded-full" />
              <Skeleton className="h-8 w-20 rounded-md" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}