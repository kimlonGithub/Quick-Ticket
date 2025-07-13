"use client";

import { getTickets } from "@/actions/ticket.actions";
import Link from "next/link";
import { FaTicketAlt } from "react-icons/fa";
import { priorityColor } from "@/utils/priorityColor";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";

interface Ticket {
  id: string;
  subject: string;
  description: string;
  priority: string;
  createdAt: string;
}

const TicketsPage = () => {
  const t = useTranslations("tickets");
  const locale = useLocale();
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    const fetchTickets = async () => {
      const tickets = await getTickets();
      setTickets(tickets as unknown as Ticket[]);
    };
    fetchTickets();
  }, []);

  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <div className="flex items-center gap-3 mb-8">
        <FaTicketAlt className="text-blue-600" size={32} />
        <h1 className="text-3xl font-extrabold text-blue-700 tracking-tight">
          {t("allTickets")}
        </h1>
      </div>
      <Link
        href={`/${locale}`}
        className="inline-block mb-8 text-blue-600 hover:underline transition"
      >
        &larr; {t("backToHome")}
      </Link>
      {tickets.length === 0 ? (
        <div className="flex flex-col items-center mt-16">
          <FaTicketAlt className="text-gray-300 mb-2" size={48} />
          <p className="text-gray-500 text-lg">{t("noTicketsFound")}</p>
        </div>
      ) : (
        <ul className="space-y-6">
          {tickets.map((ticket) => (
            <li
              key={ticket.id}
              className="border rounded-lg p-6 shadow-sm hover:shadow-md transition bg-white flex flex-col gap-2"
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-blue-700 text-lg">
                  {ticket.subject}
                </span>
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full border ${priorityColor(
                    ticket.priority
                  )}`}
                >
                  {ticket.priority}
                </span>
              </div>
              <div className="text-gray-600">{ticket.description}</div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-xs text-gray-400">
                  {t("created")}: {new Date(ticket.createdAt).toLocaleString()}
                </span>
                <span className="text-xs text-gray-400">
                  {t("id")}: {ticket.id}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default TicketsPage;
