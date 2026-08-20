const MAIN_URL = "https://carrental-server.greatstack.in/";
const CARS_API = "api/user/cars";

export interface ICars {
  _id: string;
  owner: string;
  brand: string;
  model: string;
  image: string;
  year: number;
  category: string;
  seating_capacity: number;
  fuel_type: string;
  transmission: string;
  pricePerDay: number;
  location: string;
  description: string;
  isAvaliable: boolean; // توجه: تایپوی خود API هست (باید Available باشه)
  createdAt: string;
  updatedAt: string;
  __v: number;
}
export const getCars = async () => {
  const response = await fetch(`${MAIN_URL}${CARS_API}`);
  const cars: ICars[] = await response.json();
  return cars;
};

export const car = async (id: string) => {
  const response = await fetch(`${MAIN_URL}${CARS_API}/${id}`);
  const car = await response.json();
  return car;
};
