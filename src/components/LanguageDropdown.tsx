"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";

const localeToKey = {
  en: "english",
  zh: "chinese",
  kh: "khmer",
  ja: "japanese",
  ko: "korean",
  th: "thai",
};
const keyToLocale = {
  english: "en",
  chinese: "zh",
  khmer: "kh",
  japanese: "ja",
  korean: "ko",
  thai: "th",
  ko: "ko",
};

const LanguageDropdown = () => {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("language");
  const locale = useLocale();

  const [selectedKey, setSelectedKey] = useState(
    localeToKey[locale as keyof typeof localeToKey] || "english"
  );
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setSelectedKey(
      localeToKey[locale as keyof typeof localeToKey] || "english"
    );
  }, [locale]);

  const handleLanguageSelect = (languageKey: string) => {
    setSelectedKey(languageKey);
    setIsOpen(false);

    const newLocale = keyToLocale[languageKey as keyof typeof keyToLocale];
    // If on root path, go to /<locale> (use defaultLocale for root)
    if (pathname === "/") {
      router.push(`/${newLocale}`);
      return;
    }
    // Replace the first segment (locale) with the new locale for subpages
    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/") || `/${newLocale}`;
    router.push(newPath);
  };

  return (
    <div className="flex items-center space-x-2 relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-md hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center shadow-md hover:shadow-lg"
      >
        <span className="mr-2">{t(selectedKey)}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        } absolute top-full mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-xl transition-all duration-200 transform`}
      >
        <button
          onClick={() => handleLanguageSelect("english")}
          className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg flex items-center space-x-2"
        >
          <span className="text-blue-600">en</span>
          <span>{t("english")}</span>
        </button>
        <button
          onClick={() => handleLanguageSelect("chinese")}
          className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors duration-200 flex items-center space-x-2"
        >
          <span className="text-blue-600">zh</span>
          <span>{t("chinese")}</span>
        </button>
        <button
          onClick={() => handleLanguageSelect("khmer")}
          className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors duration-200 flex items-center space-x-2"
        >
          <span className="text-blue-600">kh</span>
          <span>{t("khmer")}</span>
        </button>
        <button
          onClick={() => handleLanguageSelect("japanese")}
          className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors duration-200 flex items-center space-x-2"
        >
          <span className="text-blue-600">ja</span>
          <span>{t("japanese")}</span>
        </button>
        <button
          onClick={() => handleLanguageSelect("korean")}
          className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors duration-200 flex items-center space-x-2"
        >
          <span className="text-blue-600">ko</span>
          <span>{t("korean")}</span>
        </button>
        <button
          onClick={() => handleLanguageSelect("thai")}
          className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors duration-200 flex items-center space-x-2"
        >
          <span className="text-blue-600">th</span>
          <span>{t("thai")}</span>
        </button>
        <button
          onClick={() => handleLanguageSelect("ko")}
          className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors duration-200 flex items-center space-x-2"
        >
          <span className="text-blue-600">ko</span>
          <span>{t("ko")}</span>
        </button>
      </div>
    </div>
  );
};

export default LanguageDropdown;
