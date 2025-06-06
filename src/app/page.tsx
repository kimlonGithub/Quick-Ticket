"use client";

import Link from "next/link";
import { FaTicketAlt } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [loadingView, setLoadingView] = useState(false);

  const router = useRouter();

  const handleNewTicketClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setLoading(true);
    router.push("/tickets/new");
  };

  const handleViewTrickets = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setLoadingView(true);
    router.push("/tickets");
  };

  return (
    <main className="flex flex-col text-center items-center justify-center min-h-screen px-4">
      <FaTicketAlt className="mx-auto mb-4 text-red-600" size={60} />
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-600">
        Welcome to Quick Ticket
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Fast and simple support ticket management system.
      </p>

      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <Link
          href="/tickets/new"
          className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition flex items-center justify-center min-w-[160px]"
          onClick={handleNewTicketClick}
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
              Loading...
            </span>
          ) : (
            "Submit a Ticket"
          )}
        </Link>
        <Link
          href="/tickets"
          className="bg-blue-100 text-gray-700 px-6 py-3 rounded shadow hover:bg-blue-200 transition"
          onClick={handleViewTrickets}
        >
          {loadingView ? (
            <span className="flex items-center gap-2">
              <span className="animate-spin h-5 w-5 border-2 border-blue border-t-transparent rounded-full"></span>
              Loading...
            </span>
          ) : (
            "View Tickets"
          )}
        </Link>
      </div>
    </main>
  );
};

export default HomePage;
