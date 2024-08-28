"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import CarCard, { Icar } from "@/Components/CarCard";

interface IApiCar {
  id: number;
  make: string;
  model: string;
  year: number;
  color: string;
  mileage: number;
  price: number;
  fuelType: string;
  transmission: string;
  engine: string;
  horsepower: number;
  features: string[];
  owners: number;
  image: string;
}

const Cars = () => {
  const [cars, setCars] = useState<Icar[]>([]);
  const [originalCars, setOriginalCars] = useState<Icar[]>([]);
  const [makes, setMakes] = useState<string[]>([]);
  const [transmissions, setTransmissions] = useState<string[]>([]);
  const [selectedMake, setSelectedMake] = useState<string>("");
  const [selectedTransmission, setSelectedTransmission] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [carsPerPage] = useState<number>(9);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCars = async () => {
    try {
      const response = await axios.get<IApiCar[]>(
        "https://freetestapi.com/api/v1/cars"
      );
      const carsData: Icar[] = response.data.map((car) => ({
        title: `${car.make} ${car.model}`,
        isAtCart: false,
        drive: car.transmission,
        type: car.fuelType,
        imgCarPath: car.image,
        numOfUser: car.owners.toString(),
        price: `$${car.price}`,
        status: car.year > 2020 ? "new" : "old",
      }));

      setCars(carsData);
      setOriginalCars(carsData);

      const uniqueMakes = Array.from(
        new Set(response.data.map((car) => car.make))
      );
      setMakes(uniqueMakes);

      const uniqueTransmissions = Array.from(
        new Set(response.data.map((car) => car.transmission))
      );
      setTransmissions(uniqueTransmissions);
    } catch (error) {
      setError("Failed to fetch cars");
    } finally {
      setLoading(false);
    }
  };

  const filterCarsByMake = (make: string) => {
    if (make === "") {
      setCars(originalCars);
    } else {
      const filteredArray = originalCars.filter((car) =>
        car.title.includes(make)
      );
      setCars(filteredArray);
    }
    setSelectedMake(make);
    setCurrentPage(1);
  };

  const filterCarsByTransmission = (transmission: string) => {
    if (transmission === "") {
      setCars(originalCars);
    } else {
      const filteredArray = originalCars.filter(
        (car) => car.drive === transmission
      );
      setCars(filteredArray);
    }
    setSelectedTransmission(transmission);
    setCurrentPage(1);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchTerm(searchValue);
    const filteredCars = originalCars.filter(
      (car) =>
        car.title.toLowerCase().includes(searchValue) ||
        car.type.toLowerCase().includes(searchValue)
    );
    setCars(filteredCars);
    setCurrentPage(1);
  };

  const clearFilter = () => {
    setSelectedMake("");
    setSelectedTransmission("");
    setSearchTerm("");
    setCars(originalCars);
    setCurrentPage(1);
  };

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);
  const totalPages = Math.ceil(cars.length / carsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  useEffect(() => {
    fetchCars();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="ml-10">
      <header>
        <h1 className="my-4 text-[#242731] text-[30px] font-[700]">Booking</h1>
      </header>

  

      <nav className="mt-10 flex flex-col lg:flex-row justify-between items-center">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-[23px]">
          <div className="relative">
            <select
              value={selectedMake}
              onChange={(e) => filterCarsByMake(e.target.value)}
              className="bg-white cursor-pointer w-[220px] h-[48px] rounded-full px-4 py-2 appearance-none border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
            >
              <option value="">Select Make</option>
              {makes.map((make) => (
                <option key={make} value={make}>
                  {make}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
      
          <div className="relative">
            <select
              value={selectedTransmission}
              onChange={(e) => filterCarsByTransmission(e.target.value)}
              className="bg-white cursor-pointer w-[220px] h-[48px] rounded-full px-4 py-2 appearance-none border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
            >
              <option value="">Select Transmission</option>
              {transmissions.map((transmission) => (
                <option key={transmission} value={transmission}>
                  {transmission}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          <input
            type="text"
            placeholder="Search by Make or Model"
            value={searchTerm}
            onChange={handleSearch}
            className="bg-white cursor-pointer w-[230px] h-[48px] rounded-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            className="bg-white cursor-pointer w-[220px] h-[48px] rounded-full px-4 py-2 border border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={clearFilter}
          >
            Clear Filter
          </button>
        </div>

        <div className="flex gap-[16px] items-center mt-4 lg:mt-0">
          <div className="bg-[#FFFFFF] w-[44px] h-[44px] rounded-full flex justify-center items-center">
            <img
              src="./filter2 icon.svg"
              alt="icon filter 1"
              className="rounded-full mt-1"
            />
          </div>
          <img
            src="./filter.svg"
            alt="icon filter 1"
            className="w-[44px] h-[44px] rounded-full flex justify-center items-center"
          />
        </div>
      </nav>
      <section className="flex flex-col lg:flex-row lg:flex-wrap gap-4 lg:gap-6 mt-16">
        {currentCars.length > 0 ? (
          <>
            {currentCars.map((car) => (
              <CarCard key={car.title} {...car} />
            ))}
          </>
        ) : (
          "No car found"
        )}
      </section>

      <div className="flex justify-center mt-5">
        <nav className="flex gap-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`bg-[#FFFFFF] border border-[#DDDDDD] rounded-full px-4 py-2 ${
                currentPage === index + 1
                  ? "bg-black text-white"
                  : "text-[#007BFF]"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Cars;
