"use client";

import { useState } from "react";

import { Service } from "../_types/service";
import ServiceCard from "./ServiceCard";
import ServiceDetailModal from "./ServiceDetailModal";

type Props = {
  services: Service[];
};

export default function ServiceGrid({
  services,
}: Props) {
  const [selectedService, setSelectedService] =
    useState<Service | null>(null);

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
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