import Link from "next/link";
import { getCurrentUser } from "@/lib/current-user";
import LogoutButton from "./LogoutButton";
import LanguageDropdown from "./LanguageDropdown";
import { getLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";

const Navbar = async () => {
  const user = await getCurrentUser();
  const locale = await getLocale();
  const t = await getTranslations("navigation");

  return (
    <nav className="bg-white border-b border-gray-200 px-24 py-4 flex justify-between items-center">
      <div>
        <Link href={`/${locale}`} className="text-xl font-bold text-blue-600">
          QuickTicket
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        {user ? (
          <>
            <Link
              href={`/${locale}/tickets/new`}
              className="hover:underline text-gray-700 transition"
            >
              {t("newTicket")}
            </Link>
            <Link
              href={`/${locale}/tickets`}
              className="hover:underline text-gray-700 transition"
            >
              {t("myTickets")}
            </Link>
            <LogoutButton />
            <LanguageDropdown />
          </>
        ) : (
          <>
            <Link
              href={`/${locale}/login`}
              className="text-blue-600 hover:underline transition"
            >
              {t("login")}
            </Link>
            <Link
              href={`/${locale}/register`}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              {t("register")}
            </Link>
            <LanguageDropdown />
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
