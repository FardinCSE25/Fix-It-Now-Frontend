import LoginForm from "../_components/LoginForm";


export default function LoginPage() {
  return (
    <section className="relative overflow-hidden flex min-h-screen items-center justify-center px-4 py-10">
   
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-primary/10 via-background to-secondary/10" />

      <div className="w-full max-w-lg rounded-3xl border bg-card/95 p-10 shadow-2xl backdrop-blur-md">
        <div className="mb-8 text-center">
          <h1 className="bg-linear-to-r from-primary to-secondary bg-clip-text text-4xl font-bold text-transparent">
            Welcome Back
          </h1>

          <p className="mt-3 text-muted-foreground">
            Sign in to continue to your Fix It Now account.
          </p>
        </div>

        <LoginForm />
      </div>
    </section>
  );
}