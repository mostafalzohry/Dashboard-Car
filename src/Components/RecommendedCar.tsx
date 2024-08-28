import React from 'react';
interface IRecommendedCar {
  backgroundColor: string,
  title: string
  imgCarPath: string
  text: string
  kiloMeter: string
  kiloMeterByHour: string
}
const RecommendedCar: React.FC<
IRecommendedCar
    > = ({
 backgroundColor,
  title,
  imgCarPath,
  text,
  kiloMeter,
  kiloMeterByHour,
}) => {
        return (
          <div
            className={`h-[236px] w-[318px] rounded-md bg-[${backgroundColor}] my-7 px-7 py-4`}
            style={{ backgroundColor: `${backgroundColor}` }}
          >
            <div className="flex gap-2 items-center">
              <img
                src="./icon section card.svg"
                alt="icon for card at section3 dashbrd"
                className="h-[20.2px] w-[20.1px]"
              />
              <span className="text-[#242731] text-[16px] font-[500] ">
                {title}
              </span>
            </div>
            <img
              src={imgCarPath}
              alt="cars"
              className="w-[257px] h-[106px] my-2"
            />
            <p className="font-[500] text-[20px]">{text}</p>
            <footer className="flex justify-between text-[#72767C] mt-1">
              <div className="flex gap-3 items-center">
                <img
                  src="./reloadicon.svg"
                  alt="icon for card "
                  className="h-[16.67px] w-[16.67px]"
                />
                <span className="text-[14px] font-[200]">{kiloMeter}</span>
                <img
                  src="./settingcardicon.svg"
                  alt="icon for card"
                  className="h-[13.34px] w-[13.36px]"
                />
                <img
                  src="./speedicon.svg"
                  alt="icon for card"
                  className="h-[13.33px] w-[10.63px]"
                />
              </div>
              <span className="text-[14px] font-[200]">{kiloMeterByHour}</span>
            </footer>
          </div>
        );
};

export default RecommendedCar;