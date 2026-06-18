import LoginForm from "@/components/admin/LoginForm";

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">

      <div className="absolute left-0 top-0 h-72 w-full bg-primary" />

      <div className="relative z-10 w-full max-w-md">

        <div className="mb-8 text-center text-white">

          <h1 className="text-4xl font-bold">
            Aaruhi Travels
          </h1>

          <p className="mt-2 text-white/80">
            Admin CRM Login
          </p>

        </div>

        <LoginForm />

      </div>

    </div>
  );
}