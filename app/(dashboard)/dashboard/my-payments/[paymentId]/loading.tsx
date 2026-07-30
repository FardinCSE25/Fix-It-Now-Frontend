import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen bg-slate-100">
      <section className="container mx-auto py-14">
        <div className="rounded-3xl border bg-white shadow-sm">

          {/* Header */}
          <div className="flex items-center justify-between border-b p-8">
            <div className="space-y-3">
              <Skeleton className="h-9 w-64" />
              <Skeleton className="h-5 w-80" />
            </div>

            <Skeleton className="h-8 w-28 rounded-full" />
          </div>

          <div className="grid gap-8 p-8 lg:grid-cols-3">

            {/* Left */}
            <div className="space-y-8 lg:col-span-2">

              {/* Payment Information */}
              <div>
                <Skeleton className="mb-6 h-7 w-56" />

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-8 w-36" />
                  </div>

                  <div className="space-y-2">
                    <Skeleton className="h-4 w-28" />
                    <Skeleton className="h-6 w-40" />
                  </div>

                  <div className="space-y-2 sm:col-span-2">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-6 w-full" />
                  </div>
                </div>
              </div>

              <Skeleton className="h-px w-full" />

              {/* Service */}
              <div>
                <Skeleton className="mb-6 h-7 w-56" />

                <div className="space-y-5">
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-6 w-72" />
                  </div>

                  <div className="space-y-2">
                    <Skeleton className="h-4 w-28" />
                    <Skeleton className="h-20 w-full" />
                  </div>

                  <div className="space-y-2">
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-8 w-36" />
                  </div>
                </div>
              </div>

              <Skeleton className="h-px w-full" />

              {/* Technician */}
              <div>
                <Skeleton className="mb-6 h-7 w-40" />

                <div className="flex gap-5">
                  <Skeleton className="h-16 w-16 rounded-full" />

                  <div className="flex-1 space-y-3">
                    <Skeleton className="h-7 w-56" />
                    <Skeleton className="h-5 w-64" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right */}
            <div>
              <div className="rounded-2xl border bg-slate-50 p-6">

                <Skeleton className="mb-6 h-7 w-44" />

                <div className="space-y-5">

                  <div className="flex justify-between">
                    <Skeleton className="h-5 w-28" />
                    <Skeleton className="h-7 w-24 rounded-full" />
                  </div>

                  <Skeleton className="h-px w-full" />

                  <div className="flex justify-between">
                    <Skeleton className="h-5 w-28" />
                    <Skeleton className="h-6 w-24" />
                  </div>

                  <Skeleton className="h-px w-full" />

                  <div className="flex justify-between">
                    <Skeleton className="h-5 w-32" />
                    <Skeleton className="h-7 w-20 rounded-full" />
                  </div>

                  <Skeleton className="h-px w-full" />

                  <Skeleton className="h-24 w-full rounded-xl" />

                  <Skeleton className="h-5 w-40" />
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}