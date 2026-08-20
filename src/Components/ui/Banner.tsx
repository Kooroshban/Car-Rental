import { IoIosSearch } from "react-icons/io";

const Banner = () => {
  return (
    <div className="flex flex-col gap-14 items-center">
      <h1 className="text-4xl font-medium">Luxury cars on Rent</h1>
      <div className="w-68 bg-white p-6 rounded-lg shadow-md">
        <form className="flex flex-col gap-10 w-fit">
          <section className="flex flex-col gap-2">
            <select name="" id="">
              <option value="Pickup Location">Pickup Location</option>
              <option value="New York">New York</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Houston">Houston</option>
              <option value="Chicago">Chicago</option>
            </select>
            <p className="text-sm text-gray-500 px-1">Please select location</p>
          </section>
          <section className="flex flex-col gap-2">
            <label htmlFor="Pickup-Date">Pick-up Date</label>
            <input type="date" className="text-gray-500" id="Pickup-Date" />
          </section>
          <section className="flex flex-col gap-2">
            <label htmlFor="Pickup-Date">Return Date</label>
            <input type="date" className="text-gray-500" id="Pickup-Date" />
          </section>
        </form>
        <button
          type="button"
          className="bg-btn-logIn rounded-full mt-4 gap-1 text-white py-3 px-9 flex items-center"
        >
          <IoIosSearch />
          Search
        </button>
      </div>
      <img src="/main_car.png" alt="Car_Rental" />
    </div>
  );
};

export default Banner;
