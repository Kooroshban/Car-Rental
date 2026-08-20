import { Link, useNavigate } from "react-router";
import { IoSearchOutline } from "react-icons/io5";
import { GoX } from "react-icons/go";

import type { Dispatch, SetStateAction } from "react";

const Navbar = () => {

  return (
    <>
      <ul className="hidden md:flex gap-8 text-gray-500 text-m font-medium items-center">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cars">Cars</Link>
        </li>
        <li>
          <Link to="/my-bookings">My Bookings</Link>
        </li>
        <li className="hidden  mx-1 lg:flex items-center px-3 rounded-full border-2 border-gray-500">
          <input
            placeholder="Search cars"
            type="text"
            className="bg-bg-searche py-1.5 placeholder:text-gray-500 "
          />{" "}
          <IoSearchOutline className="text-gray-500" />
        </li>
        <li className="flex gap-6 items-center">
          <Link to="/list-cars">List cars</Link>
          <button className="rounded-xl bg-btn-logIn text-white  py-2 px-8">
            login
          </button>
        </li>
      </ul>
    </>
  );
};





interface navbarOpenProps {
  setNavbarOpen: Dispatch<SetStateAction<boolean>>;
}
export const NavbarPhone = ({ setNavbarOpen }: navbarOpenProps) => {
  const navigate = useNavigate();
  return (
    <menu className="fixed z-50 bg-white flex flex-col inset-0">
      <section className="flex justify-between border-b-2 border-gray-200 py-4 px-6 ">
        {/* FIXME / proble we have a problem for go to home page */}
        <Link to="/" className="h-8">
          <img src="/logo.svg" alt="" className="h-8 " />
        </Link>
        <button
          onClick={() => {
            setNavbarOpen((prev) => !prev);
          }}
        >
          <GoX className="text-2xl"/>
        </button>
      </section>

      <ul className="flex flex-col md:hidden gap-5 text-gray-500 text-m p-4 font-medium">
        <li>
          <button onClick={() => {
            setNavbarOpen((prev) => !prev);
            navigate("/");
          }}>Home</button>
        </li>
        <li>
          <Link to="/cars">Cars</Link>
        </li>
        <li>
          <Link to="/my-bookings">My Bookings</Link>
        </li>
        <li>
          <Link to="/list-cars">List cars</Link>
        </li>
        <button className="rounded-xl bg-btn-logIn text-white max-w-26  py-2 px-8">
          login
        </button>
      </ul>
    </menu>
  );
};

export default Navbar;
