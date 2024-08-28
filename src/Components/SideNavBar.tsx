
"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const SideNavbar: React.FC = () => {
  const currentPath = usePathname();

  return (
    <div className="fixed inset-y-0 left-0 z-10 w-16 sm:w-64 bg-white border-r overflow-y-auto transition-all duration-300 ease-in-out">
      <div className="h-full flex flex-col">
        <header className="flex items-center justify-center py-4">
          <img src="./logo.svg" className="h-8 sm:h-10" alt="logo" />
          <span className="hidden sm:inline text-2xl text-[#1F2128] mx-1">mobix.</span>
        </header>

        <nav className="flex flex-col justify-between flex-grow mb-3 px-2 sm:px-4">
          <div>
            <Link href="/">
              <div className={`flex items-center mt-11 p-2 rounded-md cursor-pointer ${
                currentPath === "/" ? "bg-[#F3F5F8]" : ""
              }`}>
                <img className="h-6 w-6" src="./dashboard icon.svg" alt="dashboard icon" />
                <span className="hidden sm:inline text-[#5F6165] text-base font-medium ml-2">dashboard</span>
              </div>
            </Link>

            <Link href="/cars">
              <div className={`flex items-center mt-2 p-2 rounded-md cursor-pointer ${
                currentPath === "/cars" ? "bg-[#F3F5F8]" : ""
              }`}>
                <img className="h-6 w-6" src="./cars icon.svg" alt="cars icon" />
                <span className="hidden sm:inline text-[#5F6165] text-base font-medium ml-2">cars</span>
              </div>
            </Link>
          </div>

          <div>
            <div className="flex items-center mt-11 p-2 rounded-md cursor-pointer">
              <img className="h-6 w-6" src="./settingicon.svg" alt="setting icon" />
              <span className="hidden sm:inline text-[#5F6165] text-base font-medium ml-2">settings</span>
            </div>

            <div className="flex items-center mt-2 p-2 rounded-md cursor-pointer">
              <img className="h-6 w-6" src="./logouticon.svg" alt="log out icon" />
              <span className="hidden sm:inline text-[#5F6165] text-base font-medium ml-2">log out</span>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SideNavbar;