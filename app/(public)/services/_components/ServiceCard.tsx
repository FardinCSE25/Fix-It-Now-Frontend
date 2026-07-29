"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Loader2, Wrench } from "lucide-react";
import { useTransition } from "react";
import { toast } from "sonner";
import { createBookingAction } from "../_actions/createBookingAction";
import { Service } from "../_types/service";

type Props = {
  isTechnician: boolean
  service: Service;
  onView: (service: Service) => void;
};

export default function ServiceCard({
  isTechnician,
  service,
  onView,
}: Props) {

  const [isPending, startTransition] = useTransition();

  const handleBooking = () => {
    startTransition(async () => {
      const result = await createBookingAction(service.id);

      if (result.success) {
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    });
  };

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

      <div className="mt-6 flex items-center gap-3">
        <Button
          variant="outline"
          className="flex-1"
          onClick={() => onView(service)}
        >
          View Details
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>

        {!isTechnician &&
          (service.bookings.length === 0 ? (
            <Button
              className="flex-1"
              disabled={isPending}
              onClick={handleBooking}
            >
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Booking...
                </>
              ) : (
                "Book Now"
              )}
            </Button>
          ) : (
            <Button
              disabled
              className="flex-1 cursor-default bg-green-600 text-white opacity-100 hover:bg-green-600"
            >
              Booked
            </Button>
          ))}
      </div>
    </div >
  );
}