import { getMyPaymentHistory } from "../_actions/getMyPaymentHistory";
import PaymentTable from "../_components/PaymentTable";

export default async function PaymentHistoryPage() {
    const payments = await getMyPaymentHistory();

    return (
        <div className="min-h-screen bg-slate-100">
            <section className="container mx-auto space-y-8 py-14">
                {/* Header */}
                <div className="space-y-2">
                    <h1 className="bg-linear-to-r from-primary to-secondary bg-clip-text text-4xl font-bold text-transparent">
                        Payment History
                    </h1>

                    <p className="max-w-2xl text-muted-foreground">
                        View all your completed payments, transaction history, and payment
                        details for every booked service.
                    </p>
                </div>

                {/* Table */}
                <PaymentTable
                    payments={payments.data}
                />
            </section>
        </div>
    );
}