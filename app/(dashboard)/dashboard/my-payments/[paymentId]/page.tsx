import { notFound } from "next/navigation";
import { getPaymentDetailsAction } from "../../_actions/getPaymentDetailsAction";
import PaymentDetailsCard from "../../_components/PaymentDetailsCard";


type Props = {
  params: Promise<{
    paymentId: string;
  }>;
};

export default async function PaymentDetailsPage({
  params,
}: Props) {
  const { paymentId } = await params;

  const payment = await getPaymentDetailsAction(paymentId);

  if (!payment.success) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <section className="container mx-auto py-14">
        <PaymentDetailsCard
          payment={payment.data}
        />
      </section>
    </div>
  );
}