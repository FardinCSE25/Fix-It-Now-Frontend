# 🔧 FixItNow Frontend

> **Your Trusted Home Service Platform**

A modern and responsive home service marketplace built with **Next.js**, where customers can book trusted technicians, technicians can manage their services and bookings, and admins can manage the entire platform.

---

## 🌐 Live Demo

🚀 **Frontend:** https://fixitnow-frontend-nine.vercel.app

🔗 **Backend API:** https://fix-it-now-rho.vercel.app

---

## 📖 Project Overview

FixItNow is a full-featured home service platform that connects **Customers**, **Technicians**, and **Admins** in a single application.

This frontend is built using **Next.js App Router** and consumes the FixItNow backend REST API developed previously.

---

## ✨ Features

### 👤 Authentication

- User Registration
- Secure Login
- JWT Authentication
- Protected Routes
- Role-Based Access Control
- Middleware Route Protection

---

### 🏠 Public Features

- Browse Available Services
- Search & Filter Services
- View Technician Profiles
- Responsive Home Page
- Service Details Page

---

### 👨‍🔧 Customer

- Book Services
- View Booking History
- Online Payment (Stripe)
- View Payment History
- Leave Reviews

---

### 🛠 Technician

- Dashboard Overview
- Manage Services
- Update Profile
- Manage Availability
- Accept / Reject Bookings
- Update Booking Status

---

### 🛡 Admin

- Dashboard Overview
- Manage Users
- Ban / Activate Users
- Manage Categories
- View All Bookings

---

## 🛠 Tech Stack

### Frontend

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Shadcn/UI
- Zod
- JWT Authentication
- Stripe
- Sonner
- Lucide React

---

## 📁 Folder Structure

```text
app
│
├── (publicGroup)
├── (authGroup)
├── (dashboardGroup)
│
├── components
├── hooks
├── lib
├── service
└── utils
```

---

## 🚀 Installation

Clone the repository

```bash
git clone https://github.com/FardinCSE25/fixitnow-frontend.git
```

Move into the project

```bash
cd fixitnow-frontend
```

Install dependencies

```bash
bun install
```

Create an environment file

```env
BACKEND_API_URL=http://localhost:7000/api
```

Run the development server

```bash
bun dev
```

---

## 🔐 Roles

### Customer

- Browse Services
- Book Services
- Payment
- Reviews

### Technician

- Manage Services
- Manage Availability
- Booking Management

### Admin

- Manage Users
- Manage Categories
- Platform Monitoring

---

## 🔄 Booking Workflow

```text
Browse Services
      │
      ▼
Book Service
      │
      ▼
Technician Accepts
      │
      ▼
Stripe Payment
      │
      ▼
Job In Progress
      │
      ▼
Completed
      │
      ▼
Leave Review
```

---

## 📡 Backend API

This frontend consumes the REST API developed in Assignment 4.

Backend Repository:

https://github.com/FardinCSE25/Fix-It-Now

Backend API:

https://fix-it-now-rho.vercel.app

---

## 👨‍💻 Developer

**Fardin Ahmed**

GitHub:
https://github.com/FardinCSE25

LinkedIn:
https://www.linkedin.com/in/fardin-ahmed-cse/

---