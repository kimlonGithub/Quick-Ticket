"use client";

import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { loginUser } from "@/actions/auth.actions";
import { Eye, EyeOff } from 'lucide-react';

const LoginForm = () => {
  const router = useRouter();


  const initialState = {
    success: false,
    message: "",
  };

  const [state, formAction] = useActionState(loginUser, initialState);

  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (state.success) {
      toast.success("Login successful!");
      router.push("/tickets");
    } else if (state.message && state.message !== "") {
      toast.error(state.message);
    }
  }, [state.success, state.message, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8 border border-gray-200">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
          Login
        </h1>

        <form action={formAction} className="space-y-4 text-gray-700">
          <input
            className="w-full border border-gray-200 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="email"
            name="email"
            placeholder="Your Email"
            autoComplete="email"
            required
          />
          <div className="relative">
            <input
              className="w-full border border-gray-200 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 pr-12"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              autoComplete="new-password"
              required
            />
            <button
              type="button"
              tabIndex={-1}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <button
            className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition disabled:opacity-50"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
