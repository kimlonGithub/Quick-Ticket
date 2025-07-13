"use client";

import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { registerUser } from "@/actions/auth.actions";
import { Eye, EyeOff } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

const RegisterForm = () => {
  const t = useTranslations("auth.register");
  const locale = useLocale();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const initialState = {
    success: false,
    message: "",
  };

  const [state, formAction] = useActionState(registerUser, initialState);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (state.success) {
      setIsLoading(true);
      toast.success(state.message);
      router.push(`/${locale}/login`);
    } else if (state.message && state.message !== "") {
      setIsLoading(false);
      toast.error(state.message);
    }
  }, [state.success, state.message, router, t, locale]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8 border border-gray-200">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
          {t("title")}
        </h1>

        <form action={formAction} className="space-y-4 text-gray-700">
          <input
            className="w-full border border-gray-200 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            name="name"
            placeholder={t("name")}
            autoComplete="name"
            required
          />
          <input
            className="w-full border border-gray-200 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="email"
            name="email"
            placeholder={t("email")}
            autoComplete="email"
            required
          />
          <div className="relative">
            <input
              className="w-full border border-gray-200 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 pr-12"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder={t("password")}
              autoComplete="new-password"
              required
            />
            <button
              type="button"
              tabIndex={-1}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? t("hidePassword") : t("showPassword")}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <button
            className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition disabled:opacity-50"
            type="submit"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <span className="animate-spin h-5 w-5 border-2 border-blue border-t-transparent rounded-full"></span>
                {t("registering")}
              </span>
            ) : (
              t("registerButton")
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
