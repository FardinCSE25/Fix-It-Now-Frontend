export type UserProfileResponse = {
    success: boolean;
    statusCode: number;
    message: string;
    data: User;
};

export type User = {
    id: string;
    name: string;
    email: string;
    role: 'Customer' | 'Technician' | 'Admin';
    status: "Active" | "Blocked";
    createdAt: string;
    updatedAt: string;
    technicianProfile?: TechnicianProfile | null;
    availability?: Availability | null;
};

export type TechnicianProfile = {
    id: string;
    userId: string;
    bio?: string;
    experience: string;
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