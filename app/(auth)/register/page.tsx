import RegisterForm from "../_components/RegisterForm";

type Props = {
    searchParams: Promise<{
        role?: string;
    }>;
};

export default async function RegisterPage({
    searchParams,
}: Props) {
    const { role = "Customer" } = await searchParams;

    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-10">
            <div className="absolute inset-0 -z-10 bg-linear-to-br from-primary/10 via-background to-secondary/10" />

            <div className="w-full max-w-175 rounded-3xl border bg-card/95 p-6 shadow-2xl backdrop-blur-md sm:p-10">
                <div className="mb-8 text-center">
                    <h1 className="bg-linear-to-r from-primary to-secondary bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
                        Create Account
                    </h1>

                    <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                        Join Fix It Now and get started today.
                    </p>
                </div>

                <RegisterForm role={role} />
            </div>
        </section>
    );
}