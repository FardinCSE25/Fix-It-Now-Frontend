export type UserStatus = "Active" | "Banned";

export type UserRole =
  | "Admin"
  | "Customer"
  | "Technician";

export interface TechnicianProfile {
  id: string;
  userId: string;
  bio: string;
  experience: string;
  updatedAt: string;
}

export interface Availability {
  id: string;
  technicianId: string;
  workingDays: string[];
  startTime: string;
  endTime: string;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  createdAt: string;
  updatedAt: string;
  technicianProfile: TechnicianProfile | null;
  availability: Availability | null;
}

export interface GetAllUsersResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: User[];
}