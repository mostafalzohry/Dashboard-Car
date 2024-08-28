import HeroCard from "@/Components/HeroCard";
import RecommendedCar from "@/Components/RecommendedCar";
import SecondSectionCardAtDashbord from "@/Components/EarnCards";
import React from "react";

const HeroCards = [
  {
    progressColor: "#FFFFFF",
    textColor: "#FFFFFF",
    title: "Energy",
    iconPath: "energyicon.svg",
    percent: 70,
    backgroundColor:
      "linear-gradient(#A162F7, #A162F7), linear-gradient(80deg, white 40%, lightgrey 30%)",
  },
  {
    progressColor: "#FF7E86",
    textColor: "#242731",
    title: "Range",
    iconPath: "rangicon.svg",
    percent: 15,
    backgroundColor: "#FFFFFF",
  },
  {
    progressColor: "#A162F7",
    textColor: "#242731",
    title: "Break fluid",
    iconPath: "breakicon.svg",
    percent: 9,
    backgroundColor: "#FFFFFF",
  },
  {
    progressColor: "#F6CC0D",
    textColor: "#242731",
    title: "Tire Wear",
    iconPath: "tiericon.svg",
    percent: 25,
    backgroundColor: "#FFFFFF",
  },
];
const RecommendedCars = [
  {
    backgroundColor: "#E1DFA4",
    title: "64% Recommend",
    imgCarPath: "./MiniCooper.png",
    text: "Mini Cooper",
    kiloMeter: "132K",
    kiloMeterByHour: "$32/h",
  },
  {
    backgroundColor: "#E3ECF1",
    title: "74% Recommend",
    imgCarPath: "./Porsche.png",
    text: "Porsche 911 Carrera",
    kiloMeter: "130K",
    kiloMeterByHour: "$28/h",
  },
  {
    backgroundColor: "#F4E3E5",
    title: "74% Recommend",
    imgCarPath: "./Porsche2.png",
    text: "Porsche 911 Carrera",
    kiloMeter: "130K",
    kiloMeterByHour: "$28/h",
  },
];


const EarnCards = [
  {
    backgroundColor: "#0F2837",
    message: "You have earned",
    highlightText: "Badges!",
    highlightNumber: "20",
    secondaryText: "Redeem and claim your rewards!",
    footerText: "Hooray! Way to go Mohammed!",
    imagePath: "peopleRushing.png",
  },
  {
    backgroundColor: "#6E1946",
    message: "You have earned",
    highlightText: "Points!",
    highlightNumber: "1500",
    secondaryText: "Redeem and claim your rewards!",
    footerText: "Redeem and claim your rewards!",
    imagePath: "oldMan.png",
  },
];


const Home: React.FC = () => (
  <>
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {HeroCards.map((card) => (
        <HeroCard key={card.title} {...card} />
      ))}
    </section>

    <section className="flex flex-col lg:flex-row justify-center gap-4 p-2 lg:p-4">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:w-[540px] lg:h-[222px] p-4 bg-[#FFE0BA] rounded-md">
        <div className="text-center lg:text-left mb-4 lg:mb-0">
          <h4 className="text-[20px] lg:text-[24px] text-[#0F2837] font-[ABeeZee]">
            Apply for a car loan!
          </h4>
          <span className="text-[14px] lg:text-[16px] text-[#0F2837]">
            This is a sample of a generated text
          </span>
          <button className="bg-[#0F2837] h-[38px] w-[126px] mt-2 rounded-md text-[12px] lg:text-[14px] text-[#FFFFFF] flex justify-center items-center">
            Discover More
          </button>
        </div>
        <div>
          <img
            className="h-[150px] lg:h-[185.83px] w-[auto] lg:w-[226.11px]"
            src="./desk.png"
            alt="desk"
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center lg:justify-start gap-4 lg:mx-2">
        {EarnCards.map((card) => (
          <SecondSectionCardAtDashbord key={card.highlightText} {...card} />
        ))}
      </div>
    </section>

    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {RecommendedCars.map((card) => (
        <RecommendedCar key={card.text} {...card} />
      ))}
    </section>
  </>
);


export default Home;
