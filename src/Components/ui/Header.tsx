import { Link } from "react-router";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Navbar, { NavbarPhone } from "./Navbar";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <header className="flex justify-between w-full px-6 md:px-16 lg:px-32 py-4">
        <Link to="/" className="h-8 shrink-0">
          <img src="/logo.svg" alt="" className="h-8 " />
        </Link>


        <Navbar />


        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="md:hidden"
        >
          <GiHamburgerMenu />
        </button>




        
        {navbarOpen && <NavbarPhone setNavbarOpen={setNavbarOpen} />}
      </header>
    </>
  );
};

export default Header;
