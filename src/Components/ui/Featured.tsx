import { useEffect, useState } from "react";
import { getCars, type ICars } from "../../api/Products";

const Featured = () => {
  const [cars, setCars] = useState<ICars[]>([]);
  useEffect(() => {
    const getCarsData = async () => {
      const data = await getCars();
      setCars(data);
    };

    getCarsData();
  }, []);
  console.log("cars----------->", cars);
  return (
    <div className="flex flex-col items-center py-24 px-6">
      <h2 className="text-4xl font-medium">Featured Vehicles</h2>
      <p className="text-m text-gray-500 mt-2">
        Explore our selection of premium vehicles available for your next
        adventure.
      </p>
      <div className="grid grid-cols-1 gap-8 mt-18">
        {/* {cars.map((car)=>())} */}
        <div className="rounded-2xl bg-white shadow-lg/20 flex flex-col items-center">

        </div>
      </div>
    </div>
  );
};

export default Featured;
