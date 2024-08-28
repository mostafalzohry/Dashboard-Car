import React from "react";

export interface Icar {
  title: string;
  isAtCart: boolean;
  drive: string;
  type: string;
  imgCarPath: string;
  numOfUser: string;
  price: string;
  status?: string;
}
const CarCard: React.FC<Icar> = ({
  title,
  isAtCart,
  drive,
  type,
  imgCarPath,
  numOfUser,
  price,
}) => {
  return (
    <div
      className={`h-[267px] w-[325px] rounded-[16px] bg-[#FFFFFF]   p-[24px] gap-[10px] `}
    >
      <div className="flex justify-between">
        <span className="text-[18px] text-[#242731] font-[700]">{title}</span>

        <img
          src={` ${isAtCart ? "./atcarticon.svg" : "./love.svg"}`}
          alt="wish list"
          className={`w-[24px] h-[love.svg]`}
        />
      </div>
      <span className="text-[16px] text-[#72767C]">{drive}</span>
      <img
        src={imgCarPath}
        alt="car"
        className="w-[233pxpx] h-[105px] my-4 m-auto"
      />

      <footer className="flex justify-between text-[#72767C] mt-1">
        <div className="flex gap-3 items-center">
          <div className="flex gap-1">
            <img
              src="carcardicon.svg"
              alt="icon for card "
              className="h-[20px] w-[20px]"
            />
            <span className="text-[14px] font-[200]">{numOfUser}</span>
          </div>
          <div className="flex gap-1">
            <img
              src="./reloadicon.svg"
              alt="icon for card"
              className="h-[20px] w-[20px]"
            />
            <span className="text-[14px] font-[200]">{type}</span>
          </div>
        </div>
        <span className="text-[18px] font-[500]">
          <span className="text-[#242731] "> {price}</span>
          /d
        </span>
      </footer>
    </div>
  );
};

export default CarCard;
