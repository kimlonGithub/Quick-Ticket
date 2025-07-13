"use client";

import { createTicket } from "@/actions/ticket.actions";
import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { useLocale, useTranslations } from "next-intl";

const NewTicketPage = () => {
  const [loading, setLoading] = useState(false);
  const t = useTranslations("tickets");
  const locale = useLocale();
  const [state, formActions] = useActionState(
    async (
      prevState: { success: boolean; message: string },
      formData: FormData
    ) => {
      setLoading(true);
      const result = await createTicket(prevState, formData);
      setLoading(false);
      toast[result.success ? "success" : "error"](result.message);
      return result;
    },
    {
      success: false,
      message: "",
    }
  );

  const router = useRouter();

  useEffect(() => {
    if (state.success) {
      // Redirect to the tickets list page after successful submission
      router.push("/tickets");
    }
  }, [state.success, router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8 border border-gray-200">
        <Link
          href={`/${locale}`}
          className="inline-block mb-6 text-blue-600 hover:underline transition"
        >
          &larr; {t("backToHome")}
        </Link>
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
          {t("submitTicket")}
        </h1>
        {state.success && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 border border-green-200 rounded">
            {state.message}
          </div>
        )}
        {state.message && !state.success && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 border border-red-200 rounded">
            {state.message}
          </div>
        )}

        <form action={formActions} className="space-y-4 text-gray-700">
          <input
            className="w-full border border-gray-200 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            name="subject"
            placeholder={t("subject")}
          />
          <textarea
            className="w-full border border-gray-200 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            name="description"
            placeholder={t("description")}
            rows={4}
          />
          <select
            className="w-full border border-gray-200 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
            name="priority"
            defaultValue="Low"
          >
            <option value="Low">{t("priority.low")}</option>
            <option value="Medium">{t("priority.medium")}</option>
            <option value="High">{t("priority.high")}</option>
          </select>
          <button
            className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition disabled:opacity-50 cursor-pointer flex items-center justify-center"
            type="submit"
            onClick={() => setLoading(true)}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full cursor-none"></span>
                {t("submitTicketLoading")}
              </span>
            ) : (
              t("submitTicketButton")
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewTicketPage;
