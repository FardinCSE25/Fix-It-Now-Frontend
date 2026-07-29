export type TechnicianProfile = {
  id: string;
  userId: string;
  experience: number;
  bio: string | null;
};

export type Technician = {
  id: string;
  name: string;
  email: string;
  technicianProfile: TechnicianProfile;
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

  category: Category;
  technician: Technician;
};

export type ServicesResponse = {
  success: boolean;
  statusCode: number;
  message: string;
  data: Service[];
};