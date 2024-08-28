
interface IHeroCard {
    iconPath: string;
   title: string;
   percent: number;
   progressColor: string;
   textColor: string;
   backgroundColor: string;
 }
 
 const HeroCard: React.FC<IHeroCard> = ({
  textColor,
  progressColor,
  percent,
  title,
  iconPath,
  backgroundColor,
}) => {
  const circleRadius = 60;
  const circleCircumference = 2 * Math.PI * circleRadius;
  const progressOffset = circleCircumference - (percent / 100) * circleCircumference;

  return (
    <div
      className="mx-auto px-[20px] h-[300px] w-full sm:w-[232px] rounded-md flex flex-col items-center justify-center"
      style={{ color: textColor, background: backgroundColor }}
    >
      <img className="w-[38px] h-[38px] mb-4" alt={`${title}`} src={`./${iconPath}`} />
      <h3 className="text-[20px] lg:text-[24px] mb-6">{title}</h3>
      <div className="relative flex justify-center items-center w-[140px] h-[140px]">
        <svg className="w-full h-full">
          <circle
            cx="70"
            cy="70"
            r={circleRadius}
            stroke="#E6E6E6"
            strokeWidth="12"
            fill="none"
          />
          <circle
            cx="70"
            cy="70"
            r={circleRadius}
            stroke={progressColor}
            strokeWidth="12"
            fill="none"
            strokeDasharray={circleCircumference}
            strokeDashoffset={progressOffset}
            style={{ transition: "stroke-dashoffset 0.5s ease-in-out" }}
          />
        </svg>
        <span className="absolute text-[28px] lg:text-[32px] font-bold">{`${percent}%`}</span>
      </div>
    </div>
  );
};

 
 export default HeroCard;
 
 