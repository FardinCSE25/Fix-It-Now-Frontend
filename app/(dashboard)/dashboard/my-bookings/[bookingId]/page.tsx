import { notFound } from "next/navigation";

import { getBookingDetails } from "../../_actions/getBookingDetails";
import BookingDetailsCard from "../../_components/BookingDetailsCard";


type Props = {
    params: Promise<{
        bookingId: string;
    }>;
};

export default async function BookingDetailsPage({
    params,
}: Props) {
    const { bookingId } = await params;

    const booking =
        await getBookingDetails(bookingId);

    if (!booking.success) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-slate-100">
            <section className="container mx-auto py-14">
                <BookingDetailsCard
                    booking={booking.data}
                />
            </section>
        </div>
    );
}