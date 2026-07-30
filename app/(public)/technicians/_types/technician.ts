export type TechnicianReview = {
    id: string;
    customerId: string;
    rating: number;
    comment: string;
    createdAt: string;
    updatedAt: string;
};

export type Availability = {
    id: string;
    technicianId: string;
    workingDays: string[];
    startTime: string;
    endTime: string;
    createdAt: string;
    updatedAt: string;
};

export type TechnicianProfile = {
    id: string;
    bio: string;
    experience: string;
    updatedAt: string;
};

export type Technician = {
    id: string;
    name: string;
    email: string;
    role: "Technician";
    status: "Active" | "Inactive";

    createdAt: string;
    updatedAt: string;

    availability: Availability;
    technicianProfile: TechnicianProfile;
    technicianReviews: TechnicianReview[];
};