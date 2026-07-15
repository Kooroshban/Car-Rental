const Banner = () => {
  return (
    <div className="flex flex-col gap-14 items-center">
      <h1 className="text-4xl font-semibold">Luxury cars on Rent</h1>
      <div className="flex flex-col gap-10 bg-white p-6 rounded-lg shadow-md">
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
          <input type="date" className="" id="Pickup-Date" />
        </section>
      </div>
    </div>
  );
};

export default Banner;
