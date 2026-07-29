export type Booking = {
  id: string;
  customerId: string;
  technicianId: string;
  serviceId: string;
  status: "Pending" | "Accepted" | "Completed" | "Cancelled";
  createdAt: string;
  updatedAt: string;
};

export type Availability = {
  workingDays: string[];
  startTime: string;
  endTime: string;
};

export type TechnicianProfile = {
  id: string;
  userId: string;
  experience: string;
  bio: string | null;
};

export type Technician = {
  technicianProfile: TechnicianProfile;
  availability: Availability;
  technicianReviews: unknown[];
};

export type Category = {
  id: string;
  title: string;
  description: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  price: string;
  createdAt: string;
  updatedAt: string;

  bookings: Booking[];

  category: Category;
  technician: Technician;
};

export type ServicesResponse = {
  success: boolean;
  statusCode: number;
  message: string;
  data: Service[];
};