"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import i18n from '../i18n'
const Navbar: React.FC = () => {
  const { t } = useTranslation();

  console.log("Current language:", i18n.language);
  console.log("i18n.changeLanguage:", i18n.changeLanguage);

  return (
    <header className="p-4 bg-white border-b">
      <div className="mx-auto px-2 lg:px-8">
        <div className="relative flex h-16 items-center justify-between mx-4">
          <div className="flex items-center justify-center">
            <form className="flex items-center mx-3">
              <div className="relative w-full">
                <div className="absolute inset-y-2 start-0 flex items-center ps-3 pointer-events-none">
                  <img
                    src="./icons/searchicon.svg"
                    alt="search icon"
                    className="h-[20px] w-[20px]"
                  />
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-50 border text-[16px] rounded-lg block mobile:w-[200px] lg:w-full ps-10 p-2.5"
                  placeholder={t("search")}
                  required
                />
              </div>
            </form>
          </div>
          <div className="flex items-center pr-2 sm:pr-0 gap-4">
            <select
              value={i18n.language}
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              className="border rounded-lg p-2"
            >
              <option value="en">English</option>
              <option value="ar">Arabic</option>
            </select>
            <button type="button" className="flex items-center gap-2 lg:gap-10">
              <img
                src="./icons/notification.svg"
                alt="notification icon"
                className="h-[24px] w-[19.2px]"
              />
              <div className="w-[48px] h-[48px] rounded-full overflow-hidden">
                <img
                  src="./images/profile.png"
                  alt="profile img"
                  className="w-full h-full object-cover"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
