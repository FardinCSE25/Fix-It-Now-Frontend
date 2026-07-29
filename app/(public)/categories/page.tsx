import { getMe } from "@/services/getMe";

import { getAllCategories } from "./_actions/getAllCategories";
import CategoryGrid from "./_components/CategoryGrid";
import CategoryHeader from "./_components/CategoryHeader";

export default async function CategoriesPage() {

    const categories = await getAllCategories()
    const user = await getMe()

    const isAdmin = user?.data?.role === "Admin";

    return (
       <div className="bg-gray-100">
         <section className="space-y-8 py-12 container mx-auto">

            <CategoryHeader isAdmin={isAdmin} />

            {/* Categories */}
            <CategoryGrid
                categories={categories.data}
            />
        </section>
       </div>
    );
}