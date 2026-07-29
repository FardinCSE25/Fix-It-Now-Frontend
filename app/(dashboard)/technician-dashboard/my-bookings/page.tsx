import { getMe } from "@/services/getMe";
import { getMyBookings } from "../_actions/getMyBookings";
import BookingTable from "../_components/BookingTable";

export default async function MyBookingsPage() {
    const bookings = await getMyBookings()
    const user = await getMe()


    const isTechnician =
        user?.data?.role === "Technician";

    return (
        <div className="bg-gray-100 min-h-screen">
            <section className="container mx-auto space-y-8 py-14">
                {/* Header */}

                <div className="space-y-2">
                    <h1 className="bg-linear-to-r from-primary to-secondary bg-clip-text text-4xl font-bold text-transparent">
                        My Bookings
                    </h1>

                    <p className="max-w-2xl text-muted-foreground">
                        Manage all booking requests for your services. Accept,
                        reject or complete bookings based on the job progress.
                    </p>
                </div>

                {/* Table */}

                <BookingTable
                    bookings={bookings.data}
                    isTechnician={isTechnician}
                />
            </section>
        </div>
    );
}