import React from 'react';
interface IRecommendedCar {
  backgroundColor: string,
  title: string
  imgCarPath: string
  text: string
  kiloMeter: string
  kiloMeterByHour: string
}
const RecommendedCar: React.FC<IRecommendedCar> = ({
  backgroundColor,
  title,
  imgCarPath,
  text,
  kiloMeter,
  kiloMeterByHour,
}) => {
  return (
    <div
      className={`h-[236px] w-full sm:w-[318px] rounded-md my-7 px-4 lg:px-7 py-4`}
      style={{ backgroundColor }}
    >
      <div className="flex gap-2 items-center">
        <img
          src="./icon section card.svg"
          alt="icon for card at section3 dashbrd"
          className="h-[16px] lg:h-[20.2px] w-[16px] lg:w-[20.1px]"
        />
        <span className="text-[#242731] text-[14px] lg:text-[16px] font-[500]">
          {title}
        </span>
      </div>
      <img
        src={imgCarPath}
        alt="cars"
        className="w-full lg:w-[257px] h-auto lg:h-[106px] my-2"
      />
      <p className="font-[500] text-[18px] lg:text-[20px]">{text}</p>
      <footer className="flex justify-between text-[#72767C] mt-1">
        <div className="flex gap-2 lg:gap-3 items-center">
          <img
            src="./reloadicon.svg"
            alt="icon for card"
            className="h-[14px] lg:h-[16.67px] w-[14px] lg:w-[16.67px]"
          />
          <span className="text-[12px] lg:text-[14px] font-[200]">{kiloMeter}</span>
          <img
            src="./settingcardicon.svg"
            alt="icon for card"
            className="h-[11px] lg:h-[13.34px] w-[11px] lg:w-[13.36px]"
          />
          <img
            src="./speedicon.svg"
            alt="icon for card"
            className="h-[11px] lg:h-[13.33px] w-[8px] lg:w-[10.63px]"
          />
        </div>
        <span className="text-[12px] lg:text-[14px] font-[200]">{kiloMeterByHour}</span>
      </footer>
    </div>
  );
};

export default RecommendedCar;