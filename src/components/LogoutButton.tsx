"use client";

import { useActionState, useEffect, useState } from "react";
import { logoutUser } from "@/actions/auth.actions";
import { toast } from "sonner";
import { useLocale, useTranslations } from "next-intl";

const LogoutButton = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const locale = useLocale();
  const t = useTranslations("auth.logout");
  const initialState = {
    success: false,
    message: "",
  };

  const [state, formAction] = useActionState(logoutUser, initialState);

  useEffect(() => {
    if (state.success) {
      window.location.href = `/${locale}/login`;
    } else if (state.message && state.message !== "") {
      toast.error(state.message);
    }
  }, [state.success, state.message, locale]);

  return (
    <>
      <button
        onClick={() => setShowConfirm(true)}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        type="button"
      >
        {t("logoutButton")}
      </button>

      {showConfirm && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl text-center max-w-sm mx-auto">
            <h2 className="text-xl font-bold mb-4">{t("confirmTitle")}</h2>
            <p className="mb-6 text-gray-600">{t("confirmMessage")}</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowConfirm(false)}
                className="px-6 py-2 rounded bg-gray-200 text-gray-800 hover:bg-gray-300 transition"
                type="button"
              >
                {t("cancelButton")}
              </button>
              <form action={formAction} className="inline">
                <button
                  type="submit"
                  className="px-6 py-2 rounded bg-red-500 text-white hover:bg-red-600 transition"
                >
                  {t("logoutButton")}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LogoutButton;
