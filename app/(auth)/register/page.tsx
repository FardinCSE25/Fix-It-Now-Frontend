import RegisterForm from "../login/_components/RegisterForm";


export default function RegisterPage() {
    return (
        <section className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-linear-to-br from-primary/5 via-background to-secondary/5 px-4 py-10">

            <div className="w-full max-w-lg rounded-3xl border bg-card/95 p-10 shadow-2xl backdrop-blur">

                <div className="mb-8 text-center">
                    <h1 className="bg-linear-to-r from-primary to-secondary bg-clip-text text-4xl font-bold text-transparent">
                        Create Account
                    </h1>

                    <p className="mt-3 text-muted-foreground">
                        Join FixItNow and get started today.
                    </p>
                </div>

                <RegisterForm />

            </div>

        </section>
    );
}