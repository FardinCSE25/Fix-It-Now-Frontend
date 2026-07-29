
import { getMe } from "@/services/getMe";

import { getAllCategories } from "./_actions/getAllCategories";
import CategoryGrid from "./_components/CategoryGrid";
import CategoryHeader from "./_components/CategoryHeader";

export default async function CategoriesPage() {
    const [categories, user] = await Promise.all([
        getAllCategories(),
        getMe(),
    ]);

    const isAdmin = user?.data?.role === "Admin";

    return (
        <section className="space-y-8 my-12 container mx-auto">

            <CategoryHeader isAdmin={isAdmin} />


            {/* Categories */}
            <CategoryGrid
                categories={categories.data}
            />
        </section>
    );
}