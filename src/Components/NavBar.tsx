const Navbar: React.FC = () => (
  <header className="p-4 bg-white border-b">
    <div className="mx-auto px-2 lg:px-8">
      <div className="relative flex h-16 items-center justify-between mx-4">
        <div className="flex items-center justify-center">
          <form className="flex items-center mx-3">
            <div className="relative w-full">
              <div className="absolute inset-y-2 start-0 flex items-center ps-3 pointer-events-none">
                <img
                  src="./searchicon.svg"
                  alt="search icon"
                  className="h-[20px] w-[20px]"
                />
                <span className="mx-1 mb-1 text-yellow-300 font-bold">|</span>
              </div>
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border text-[16px] rounded-lg block mobile:w-[200px] lg:w-full ps-10 p-2.5"
                placeholder="Search or type"
                required
              />
            </div>
          </form>
        </div>
        <div className="flex items-center pr-2 sm:pr-0">
          <button
            type="button"
            className="flex items-center gap-2 lg:gap-10"
          >
            <img
              src="./notification.svg"
              alt="notification icon"
              className="h-[24px] w-[19.2px]"
            />
            <div className="w-[48px] h-[48px] rounded-full overflow-hidden">
              <img
                src="./profile.png"
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

export default Navbar;
