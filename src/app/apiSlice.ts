import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export interface IApiCar {
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
  
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://freetestapi.com/api/v1/' }),
  endpoints: (builder) => ({
    getCars: builder.query<IApiCar[], void>({
      query: () => 'cars',
    }),
  }),
});

export const { useGetCarsQuery } = apiSlice;
