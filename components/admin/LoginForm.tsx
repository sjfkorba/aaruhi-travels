"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { loginAdmin } from "@/lib/auth";

export default function LoginForm() {
const router = useRouter();

const [email, setEmail] =
useState("");

const [password, setPassword] =
useState("");

const [loading, setLoading] =
useState(false);

const handleLogin = async () => {
try {
setLoading(true);


  await loginAdmin(
    email,
    password
  );

  router.push("/admin");
} catch (error) {
  console.error(error);

  alert(
    "Invalid email or password"
  );
} finally {
  setLoading(false);
}

};

return ( <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">

  <h1 className="mb-2 text-center text-3xl font-bold">
    Admin Login
  </h1>

  <p className="mb-6 text-center text-gray-500">
    Aaruhi Travels CRM
  </p>

  <div className="space-y-4">

    <input
      type="email"
      placeholder="Admin Email"
      value={email}
      onChange={(e) =>
        setEmail(e.target.value)
      }
      className="w-full rounded-xl border p-4"
    />

    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) =>
        setPassword(e.target.value)
      }
      className="w-full rounded-xl border p-4"
    />

    <button
      onClick={handleLogin}
      disabled={loading}
      className="w-full rounded-xl bg-primary py-4 font-bold text-white"
    >
      {loading
        ? "Logging In..."
        : "Login"}
    </button>

  </div>

</div>

);
}