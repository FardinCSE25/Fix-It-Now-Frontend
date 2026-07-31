"use client";

import { useState } from "react";

import { User } from "@/lib/types/userProfile";
import { Service } from "../_types/service";
import ServiceCard from "./ServiceCard";
import ServiceDetailModal from "./ServiceDetailModal";

type Props = {
  isTechnician: boolean;
  user: User;
  services: Service[];
};

export default function ServiceGrid({
  isTechnician,
  user,
  services,
}: Props) {
  const [selectedService, setSelectedService] =
    useState<Service | null>(null);
console.log(services);

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            isTechnician={isTechnician}
            user={user}
            service={service}
            onView={setSelectedService}
          />
        ))}
      </div>

      <ServiceDetailModal
        service={selectedService}
        open={!!selectedService}
        onOpenChange={(open) => {
          if (!open) setSelectedService(null);
        }}
      />
    </>
  );
}