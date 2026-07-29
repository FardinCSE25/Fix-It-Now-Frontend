import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <section className="space-y-8 my-14 container mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-3">
          <Skeleton className="h-10 w-72" />
          <Skeleton className="h-4 w-105 max-w-full" />
        </div>

        <Skeleton className="h-10 w-40 rounded-lg" />
      </div>

      {/* Search + Filter */}
      <div className="flex flex-col gap-4 rounded-xl border p-5 md:flex-row">
        <Skeleton className="h-11 flex-1" />
        <Skeleton className="h-11 w-full md:w-64" />
      </div>

      {/* Services */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="rounded-2xl border p-6"
          >
            <Skeleton className="mb-5 h-12 w-12 rounded-xl" />

            <Skeleton className="mb-3 h-6 w-2/3" />

            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-[90%]" />
              <Skeleton className="h-4 w-[70%]" />
            </div>

            <div className="mt-5 flex items-center justify-between">
              <Skeleton className="h-8 w-24 rounded-full" />
              <Skeleton className="h-8 w-20 rounded-md" />
            </div>

            <Skeleton className="mt-6 h-10 w-full rounded-lg" />
          </div>
        ))}
      </div>
    </section>
  );
}