import React from "react";

interface StatCardProps {
  title: string;
  value: string;
  color: string;
  icon: React.ReactNode;
}

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

const Sidebar: React.FC = () => (
  <div className="w-64 h-screen bg-white border-r">
    <div className="p-4">
      <h1 className="text-2xl font-bold text-purple-600">Motiv.</h1>
    </div>
    <nav className="mt-8">
      <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
        Dashboard
      </a>
      <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
        Cars
      </a>
    </nav>
    <div className="absolute bottom-0 w-64 p-4">
      <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
        Settings
      </a>
      <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
        Log out
      </a>
    </div>
  </div>
);

const Header: React.FC = () => (
  <header className="flex justify-between items-center p-4 bg-white border-b">
    <div className="flex-1">
      <input
        type="text"
        placeholder="Search or type"
        className="w-full px-4 py-2 rounded-full bg-gray-100"
      />
    </div>
    <div className="flex items-center">
      <button className="mx-2">
        <img src="/bell-icon.svg" alt="Notifications" />
      </button>
      <img src="/avatar.jpg" alt="User" className="w-10 h-10 rounded-full" />
    </div>
  </header>
);

const StatCard: React.FC<StatCardProps> = ({ title, value, color, icon }) => (
  <div className={`p-6 rounded-lg ${color}`}>
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-bold">{title}</h3>
    <div className="mt-4 text-3xl font-bold">{value}</div>
  </div>
);

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
  <div className="flex">
    <Sidebar />
    <div className="flex-1">
      <Header />
      <main className="p-8">
        <div className="grid grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Energy"
            value="45%"
            color="bg-purple-500"
            icon={<span>⚡</span>}
          />
          <StatCard
            title="Range"
            value="157k%"
            color="bg-red-100"
            icon={<span>🚗</span>}
          />
          <StatCard
            title="Break fluid"
            value="9%"
            color="bg-blue-100"
            icon={<span>💧</span>}
          />
          <StatCard
            title="Tire Wear"
            value="25%"
            color="bg-yellow-100"
            icon={<span>🔧</span>}
          />
        </div>
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
          <CarRecommendation
            image="/mini-cooper.jpg"
            name="Mini Cooper"
            stats={["132K ", "Manual", "$32/h"]}
            recommendPercent={64}
          />
          <CarRecommendation
            image="/porsche-911.jpg"
            name="Porsche 911 Carrera"
            stats={["130K ", "Manual", "$28/h"]}
            recommendPercent={74}
          />
          <CarRecommendation
            image="/porsche-911-red.jpg"
            name="Porsche 911 Carrera"
            stats={["130K ", "Manual", "$28/h"]}
            recommendPercent={74}
          />
        </div>
      </main>
    </div>
  </div>
);

export default Home;
