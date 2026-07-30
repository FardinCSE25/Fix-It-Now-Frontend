import RegisterForm from "../_components/RegisterForm";


export default function RegisterPage() {
    return (
        <section className="relative overflow-hidden flex min-h-screen items-center justify-center px-4 py-10">
            {/* Background Purplish Blur Shade */}
            <div className="absolute inset-0 -z-10 bg-linear-to-br from-primary/10 via-background to-secondary/10" />

            <div className="w-full max-w-175 rounded-3xl border bg-card/95 p-6 sm:p-10 shadow-2xl backdrop-blur-md">

                <div className="mb-8 text-center">
                    <h1 className="bg-linear-to-r from-primary to-secondary bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
                        Create Account
                    </h1>

                    <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                        Join Fix It Now and get started today.
                    </p>
                </div>

                <RegisterForm />

            </div>

        </section>
    );
}