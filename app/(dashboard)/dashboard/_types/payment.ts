export type PaymentStatus = "Paid";

export type Payment = {
    id: string;
    amount: string;
    transactionId: string;
    status: PaymentStatus;
    createdAt: string;
    updatedAt: string;

    booking: {
        id: string;
        customerId: string;
        status: "Pending" | "Accepted" | "Rejected" | "Completed";
        createdAt: string;
        updatedAt: string;

        service: {
            id: string;
            title: string;
            description: string;
            price: string;
        };

        technician: {
            id: string;
            name: string;
            email: string;
        };
    };
};