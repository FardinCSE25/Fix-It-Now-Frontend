import { Skeleton } from "@/components/ui/skeleton";

export default function MyProfileLoading() {
  return (
    <section className="min-h-screen bg-gray-100 py-12">
      <div className="mx-auto max-w-350 space-y-6 p-2">
        {/* Page Header */}
        <div className="space-y-2">
          <Skeleton className="h-9 w-56" />
          <Skeleton className="h-4 w-80" />
        </div>

        {/* Profile Card */}
        <div className="rounded-2xl border bg-background shadow-sm">
          <div className="flex flex-col items-center gap-5 px-8 py-8 md:flex-row">
            <Skeleton className="size-24 rounded-full" />

            <div className="space-y-3">
              <Skeleton className="h-8 w-56" />

              <div className="flex gap-2">
                <Skeleton className="h-6 w-24 rounded-full" />
                <Skeleton className="h-6 w-20 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Information Cards */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Basic Information */}
          <div className="rounded-2xl border bg-background p-6 shadow-sm">
            <Skeleton className="mb-6 h-7 w-44" />

            <div className="space-y-6">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Skeleton className="size-5 rounded" />

                  <div className="space-y-2">
                    <Skeleton className="h-3 w-24" />
                    <Skeleton className="h-5 w-48" />
                  </div>
                </div>
              ))}

              <div className="grid grid-cols-2 gap-3 pt-4">
                <Skeleton className="h-10 rounded-lg" />
                <Skeleton className="h-10 rounded-lg" />
              </div>
            </div>
          </div>

          {/* Technician Information */}
          <div className="rounded-2xl border bg-background p-6 shadow-sm">
            <Skeleton className="mb-6 h-7 w-52" />

            <div className="space-y-6">
              <div className="space-y-2">
                <Skeleton className="h-3 w-24" />
                <Skeleton className="h-5 w-24" />
              </div>

              <div className="space-y-2">
                <Skeleton className="h-3 w-16" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-11/12" />
                <Skeleton className="h-4 w-9/12" />
              </div>

              <div className="flex items-start gap-3">
                <Skeleton className="mt-1 size-5 rounded" />

                <div className="space-y-2">
                  <Skeleton className="h-3 w-28" />
                  <Skeleton className="h-5 w-64" />
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Skeleton className="mt-1 size-5 rounded" />

                <div className="space-y-2">
                  <Skeleton className="h-3 w-28" />
                  <Skeleton className="h-5 w-40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}