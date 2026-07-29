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

export interface Category {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  services: Service[];
}

export interface CategoriesResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: Category[];
}