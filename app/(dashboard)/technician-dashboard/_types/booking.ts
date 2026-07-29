export type BookingStatus =
  | "Pending"
  | "Accepted"
  | "Rejected"
  | "Completed";

export type Customer = {
  id: string;
  name: string;
  email: string;
};

export type Service = {
  id: string;
  technicianId: string;
  categoryId: string;

  title: string;
  description: string;
  price: string;

  createdAt: string;
  updatedAt: string;
};

export type Payment = {
  id: string;
  status: string;
  amount: string;
} | null;

export type Booking = {
  id: string;

  customerId: string;
  technicianId: string;
  serviceId: string;

  status: BookingStatus;

  createdAt: string;
  updatedAt: string;

  payment: Payment;

  customer: Customer;
  service: Service;
};

export type BookingsResponse = {
  success: boolean;
  statusCode: number;
  message: string;
  data: Booking[];
};