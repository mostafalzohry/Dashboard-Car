import HeroCard from "@/Components/HeroCard";
import Navbar from "@/Components/NavBar";
import RecommendedCar from "@/Components/RecommendedCar";
import SideNavbar from "@/Components/SideNavBar";
import React from "react";

interface AchievementCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  color: string;
}

interface CarRecommendationProps {
  image: string;
  name: string;
  stats: string[];
  recommendPercent: number;
}

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
    imgCarPath:
      "./Porsche.png",
    text: "Porsche 911 Carrera",
    kiloMeter: "130K",
    kiloMeterByHour: "$28/h",
  },
  {
    backgroundColor: "#F4E3E5",
    title: "74% Recommend",
    imgCarPath:
      "./Porsche2.png",
    text: "Porsche 911 Carrera",
    kiloMeter: "130K",
    kiloMeterByHour: "$28/h",
  },
];

const CarLoanBanner: React.FC = () => (
  <div className="bg-yellow-100 p-6 rounded-lg flex justify-between items-center">
    <div>
      <h3 className="text-xl font-bold">Apply for a car loan!</h3>
      <p>This is a sample of a generated text</p>
      <button className="mt-4 px-4 py-2 bg-blue-900 text-white rounded">
        Discover More
      </button>
    </div>
    <img src="/desk-illustration.svg" alt="Desk" className="w-1/3" />
  </div>
);

const AchievementCard: React.FC<AchievementCardProps> = ({
  title,
  value,
  icon,
  color,
}) => (
  <div className={`p-6 rounded-lg ${color} text-white`}>
    <h3>{title}</h3>
    <div className="text-3xl font-bold mt-2">{value}</div>
    <div className="mt-4">{icon}</div>
  </div>
);

const CarRecommendation: React.FC<CarRecommendationProps> = ({
  image,
  name,
  stats,
  recommendPercent,
}) => (
  <div className="bg-gray-100 p-4 rounded-lg">
    <div className="mb-2">{recommendPercent}% Recommend</div>
    <img src={image} alt={name} className="w-full mb-4" />
    <h3 className="font-bold">{name}</h3>
    <div className="flex justify-between mt-2 text-sm text-gray-600">
      {stats.map((stat, index) => (
        <span key={index}>{stat}</span>
      ))}
    </div>
  </div>
);

const Home: React.FC = () => (

  <>
        <section className="grid grid-cols-4 gap-6 mb-8">
          {HeroCards.map((card) => (
            <HeroCard {...card} />
          ))}
        </section>
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="col-span-2">
            <CarLoanBanner />
          </div>
          <AchievementCard
            title="You have earned"
            value="20 Badges!"
            color="bg-blue-900"
            icon={<span>🏅</span>}
          />
          <AchievementCard
            title="You have earned"
            value="1500 Points!"
            color="bg-purple-900"
            icon={<span>⏱</span>}
          />
        </div>
        <div className="grid grid-cols-3 gap-6">
       
            {RecommendedCars.map((card) => (
            <RecommendedCar {...card} />
          ))}
        </div>
        </>

);

export default Home;
