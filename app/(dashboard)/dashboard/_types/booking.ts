export type BookingStatus =
    "Pending"
    | "Accepted"
    | "Rejected"
    | "Completed";

export type PaymentStatus =
    "Pending"
    | "Paid"
    | "Failed";

export interface Booking {
    id: string;
    customerId: string;
    technicianId: string;
    serviceId: string;

    status: BookingStatus;

    createdAt: string;
    updatedAt: string;

    service: Service;

    technician: Technician;

    payment: Payment | null;
    hasReviewed: boolean
}

export interface Service {
    id: string;
    technicianId: string;
    categoryId: string;

    title: string;
    description: string;
    price: string;

    createdAt: string;
    updatedAt: string;
}

export interface Technician {
    id: string;
    name: string;
    email: string;

    technicianProfile: TechnicianProfile;
}

export interface TechnicianProfile {
    bio: string;
    experience: string;
}

export interface Payment {
    id: string;

    bookingId: string;

    amount: string;

    status: PaymentStatus;

    transactionId: string;

    createdAt: string;
    updatedAt: string;
}