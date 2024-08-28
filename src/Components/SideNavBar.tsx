"use client";
import { usePathname } from "next/navigation";

const SideNavbar: React.FC = () => {
  const currentPath = usePathname();

  return (
    <div className="fixed w-64 lg:w-72 h-screen bg-white border-r">
      <div className="min-w-[248px] lg:min-w-[288px] border-r-2">
        <div className="w-[174px] lg:w-[200px] m-auto h-screen flex flex-col">
          <header className="flex items-center justify-center py-4">
            <img src="./logo.svg" className="h-8 lg:h-10" alt="logo" />
            <span className="text-[24px] text-[#1F2128] mx-1">mobix.</span>
          </header>

          <nav className="flex flex-col justify-between flex-grow mb-3">
            <div>
              <div
                className={`flex mt-11 p-1 rounded-md cursor-pointer ${
                  currentPath === "/" ? "bg-[#F3F5F8]" : ""
                }`}
              >
                <img
                  className="h-[20px] w-[20px] lg:h-[24px] lg:w-[24px]"
                  src="./dashboard icon.svg"
                  alt="dashboard icon"
                />
                <span className="text-[#5F6165] text-[14px] lg:text-[16px] font-[500] mx-1">
                  dashboard
                </span>
              </div>

              <div
                className={`flex mt-2 p-1 rounded-md cursor-pointer ${
                  currentPath === "/cars" ? "bg-[#F3F5F8]" : ""
                }`}
              >
                <img
                  className="h-[20px] w-[20px] lg:h-[24px] lg:w-[24px]"
                  src="./cars icon.svg"
                  alt="cars icon"
                />
                <span className="text-[#5F6165] text-[14px] lg:text-[16px] font-[500] mx-1">
                  cars
                </span>
              </div>

              <div
                className={`flex mt-2 p-1 rounded-md cursor-pointer ${
                  currentPath === "/test" ? "bg-[#F3F5F8]" : ""
                }`}
              >
                <img
                  className="h-[20px] w-[20px] lg:h-[24px] lg:w-[24px]"
                  src="./cars icon.svg"
                  alt="test icon"
                />
                <span className="text-[#5F6165] text-[14px] lg:text-[16px] font-[500] mx-1">
                  test
                </span>
              </div>
            </div>

            <div>
              <div className="flex mt-11 p-1 rounded-md cursor-pointer">
                <img
                  className="h-[20px] w-[20px] lg:h-[24px] lg:w-[24px]"
                  src="./settingicon.svg"
                  alt="setting icon"
                />
                <span className="text-[#5F6165] text-[14px] lg:text-[16px] font-[500] mx-1">
                  setting
                </span>
              </div>

              <div className="flex mt-2 p-1 rounded-md cursor-pointer">
                <img
                  className="h-[20px] w-[20px] lg:h-[24px] lg:w-[24px]"
                  src="./logouticon.svg"
                  alt="log out icon"
                />
                <span className="text-[#5F6165] text-[14px] lg:text-[16px] font-[500] mx-1">
                  log out
                </span>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
