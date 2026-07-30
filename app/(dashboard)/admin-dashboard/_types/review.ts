export interface Review {
    id: string;
    rating: number;
    comment: string;
    createdAt: string;
    updatedAt: string;

    customer: {
        id: string;
        name: string;
        email: string;
        role: "Customer";
        status: "Active" | "Banned";
        createdAt: string;
        updatedAt: string;
    };

    technician: {
        id: string;
        name: string;
        email: string;
        role: "Technician";
        status: "Active" | "Banned";
        createdAt: string;
        updatedAt: string;
    };
}