import { Technician } from "../_types/technician";
import TechnicianCard from "./TechnicianCard";

type Props = {
    technicians: Technician[];
};

export default function TechnicianGrid({
    technicians,
}: Props) {
    return (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {technicians.map((technician) => (
                <TechnicianCard
                    key={technician.id}
                    technician={technician}
                />
            ))}
        </div>
    );
}