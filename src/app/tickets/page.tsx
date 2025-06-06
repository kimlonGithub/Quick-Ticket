import { getTickets } from "@/actions/ticket.actions";
import Link from "next/link";
import { FaTicketAlt } from "react-icons/fa";

const priorityColor = (priority: string) => {
  switch (priority) {
    case "High":
      return "text-red-600 bg-red-50 border-red-200";
    case "Medium":
      return "text-yellow-600 bg-yellow-50 border-yellow-200";
    case "Low":
      return "text-green-600 bg-green-50 border-green-200";
    default:
      return "text-gray-600 bg-gray-50 border-gray-200";
  }
};

const TicketsPage = async () => {
  const tickets = await getTickets();

  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <div className="flex items-center gap-3 mb-8">
        <FaTicketAlt className="text-blue-600" size={32} />
        <h1 className="text-3xl font-extrabold text-blue-700 tracking-tight">
          All Tickets
        </h1>
      </div>
      <Link
        href="/"
        className="inline-block mb-8 text-blue-600 hover:underline transition"
      >
        &larr; Back to Home
      </Link>
      {tickets.length === 0 ? (
        <div className="flex flex-col items-center mt-16">
          <FaTicketAlt className="text-gray-300 mb-2" size={48} />
          <p className="text-gray-500 text-lg">No tickets found.</p>
        </div>
      ) : (
        <ul className="space-y-6">
          {tickets.map((ticket: any) => (
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
                  Created: {new Date(ticket.createdAt).toLocaleString()}
                </span>
                <span className="text-xs text-gray-400">ID: {ticket.id}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default TicketsPage;
