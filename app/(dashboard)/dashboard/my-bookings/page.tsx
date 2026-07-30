import { getMyBookings } from "../_actions/getMyBookings";
import BookingTable from "../_components/BookingTable";

export default async function MyBookingsPage() {
    const bookings = await getMyBookings();

    return (
        <div className="min-h-screen bg-gray-100">
            <section className="container mx-auto space-y-8 py-14">
                <div className="space-y-2">
                    <h1 className="bg-linear-to-r from-primary to-secondary bg-clip-text text-4xl font-bold text-transparent">
                        My Bookings
                    </h1>

                    <p className="max-w-2xl text-muted-foreground">
                        Track your service bookings, complete payments and view booking
                        details.
                    </p>
                </div>

                <BookingTable bookings={bookings.data} />
            </section>
        </div>
    );
}