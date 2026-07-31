"use server";

import { cookies } from "next/headers";

type GetServicesParams = {
  searchTerm?: string;
  type?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
};

export async function getAllServices(
  params?: GetServicesParams
) {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;

  const searchParams = new URLSearchParams();

  if (params?.searchTerm) {
    searchParams.set("searchTerm", params.searchTerm);
  }

  if (params?.type) {
    searchParams.set("type", params.type);
  }

  if (params?.sortBy) {
    searchParams.set("sortBy", params.sortBy);
  }

  if (params?.sortOrder) {
    searchParams.set("sortOrder", params.sortOrder);
  }

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/services?${searchParams.toString()}`,
    {
      headers: token
        ? {
          Authorization: `Bearer ${token}`,
        }
        : {},

      next: {
        tags: ["services"],
      },
    }
  );

  return res.json();
}