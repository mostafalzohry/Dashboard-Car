interface IEarnCards {
  backgroundColor: string;
  message: string;
  highlightText: string;
  highlightNumber: string;
  footerText: string;
  secondaryText: string;
  imagePath: string;
}

const EarnCards: React.FC<IEarnCards> = ({
  backgroundColor,
  message,
  highlightText,
  highlightNumber,
  footerText,
  secondaryText,
  imagePath,
}) => {
  const messageLines = message.split(" ");

  return (
    <div
      className={`h-[222px] w-[220px] rounded-md flex p-3 mx-2`}
      style={{ backgroundColor }}
    >
      <div className="flex flex-col justify-between w-full">
        <div className="flex justify-between items-start">
          <div>
            {messageLines.map((line, index) => (
              <h6
                key={index}
                className="text-[#FFFFFF] text-[20px] leading-[23.64px]"
              >
                {line}
              </h6>
            ))}
            <div className="text-[36px] font-[italic] text-[#FF9619] leading-none mt-2">
              {highlightNumber}
            </div>
            <h6 className="text-[#FFFFFF] text-[20px] font-semibold leading-none mt-1">
              {highlightText}
            </h6>
          </div>
          <img
            src={`./${imagePath}`}
            alt="Card Illustration"
            className="h-[100px] w-auto"
          />
        </div>
        <div className="text-[12px] text-[#FF9619] mt-2">{footerText}</div>
      </div>
    </div>
  );
};

export default EarnCards;
