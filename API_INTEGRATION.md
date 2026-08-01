# API Integration

This document maps the frontend pages/components to the backend REST API endpoints.

| Component / Frontend Pages      | Method | Backend Endpoint               | Purpose                             |
| --------------------------------| -------| -------------------------------| ------------------------------------|
| LoginForm                       | POST   | /api/auth/login                | Login a user (Auth)                 |
| RegisterForm                    | POST   | /api/auth/register             | Register a new user (Auth)          |
| Navbar                          | GET    | /api/auth/me                   | Get logged-in user (Auth)           |
| CreateCategoryModal             | POST   | /api/categories                | Create category (Admin)             |
| categories (Page.tsx)           | GET    | /api/categories                | Display all categories (Public)     |
| CreateServiceModal              | POST   | /api/services                  | Create service (Technician)         |
| services (Page.tsx)             | GET    | /api/services                  | Display all services (Public)       |
| technicians (Page.tsx)          | GET    | /api/technicians               | Display all technicians (Public)    |
| [technicianId] (Page.tsx)       | GET    | /api/technicians/:id           | View technician's details (Public)  |
| ServiceCard                     | POST   | /api/bookings                  | Create booking (Customer)           |
| my-bookings (Page.tsx)          | GET    | /api/bookings/my-bookings      | View customer's bookings            |
| [bookingId] (Page.tsx)          | GET    | /api/bookings/my-bookings/:id  | View customer's booking details     |
| BookingActions                  | GET    | /api/bookings/technician/:id   | View technician's booking status    |
| PayNowButton                    | POST   | /api/payments/create           | Create payment (Customer)           |
| my-payments (Page.tsx)          | GET    | /api/payments/history          | View customer's payment history     |
| [paymentId] (Page.tsx)          | GET    | /api/payments/:id              | View customer's payment details     |
| reviews (Page.tsx)              | GET    | /api/reviews                   | Get all reviews (Admin)             |
| users (Page.tsx)                | GET    | /api/auth/users                | View all users (Admin)              |
| BanUserModal                    | PATCH  | /api/auth/users/:id            | Ban/Activate users (Admin)          |
| ReviewModal                     | POST   | /api/reviews                   | Submit review (Customer)            |
| UpdateProfileModal              | PUT    | /api/technicians/profile       | Update technician's profile         |
| UpdateAvailabilityModal         | PUT    | /api/technicians/availability  | Update technician's availability    |
| my-bookings (Page.tsx)          | GET    | /api/bookings/technician       | View technician's bookings          |
