import { Link } from "react-router";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="px-16 mt-12">
      <footer className="flex flex-wrap justify-between gap-8 text-gray-400 text-[14px] pb-6 border-b border-gray-600">
        <section className="flex flex-col gap-3">
          <Link to="/">
            <img src="/logo.svg" alt="" className="h-8 " />
          </Link>
          <p className="w-80">
            Premium car rental service with a wide selection of luxury and
            everyday vehicles for all your driving needs.
          </p>
          <div className="mt-3 flex gap-3 items-center ">
            <FaFacebookF className="w-5 h-5" />
            <FaInstagram className="w-5 h-5" />
            <FaTwitter className="w-5 h-5" />
            <MdOutlineEmail className="w-5 h-5" />
          </div>
        </section>
        <section className="flex flex-col gap-3">
          <p className="text-m text-gray-800">Quick Links</p>
          <div className="flex flex-col gap-1.5">
            <Link to="/">Home</Link>
            <Link to="/">Browse Cars</Link>
            <Link to="/">About Us</Link>
          </div>
        </section>
        <section className="flex flex-col gap-3">
          <p className="text-m text-gray-800">Resources</p>
          <div className="flex flex-col gap-1.5">
            <Link to="/">Help Center</Link>
            <Link to="/">Terms of Service</Link>
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Insurance</Link>
          </div>
        </section>
        <section className="flex flex-col gap-3">
          <p className="text-m text-gray-800">Resources</p>
          <div className="flex flex-col gap-1.5">
            <p>1234 Luxury Drive</p>
            <p>San Francisco, CA 94107</p>
            <p>+1 234 567890</p>
            <p>info@example.com</p>
          </div>
        </section>
      </footer>
      <div className="flex flex-col items-center md:flex-row justify-between text-gray-500 py-5">
        <p>© 2026 Brand. All rights reserved.</p>
        <ul className="flex gap-4 items-center">
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>|</li>
          <li>
            <a href="#">Terms</a>
          </li>
          <li>|</li>
          <li>
            <a href="#">Cookies</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
