"use server";

import { CategoriesResponse } from "../_types/categories";


export async function getAllCategories(): Promise<CategoriesResponse> {
    const res = await fetch(
        `${process.env.BACKEND_API_URL}/api/categories`,
        {
            method: "GET",
            cache: "no-store",
        }
    );

    const result: CategoriesResponse = await res.json();

    return result;
}