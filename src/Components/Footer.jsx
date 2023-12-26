import { Link, NavLink } from "react-router-dom";

import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="dark:bg-gray-800 dark:text-white shadow-lg shadow-inner">
      <nav>
        <div className="flex justify-center">
          <NavLink
            to="/"
            className="text-2xl   hover:text-red-right transition duration-300 ease-in-out font-bold mt-4"
          >
            Cinemate
          </NavLink>
        </div>
        <div className="flex justify-center gap-12 mt-4 mb-4 font-mono text-xl">
          <Link
            to="https://www.instagram.com"
            target="_blank"
            className=" hover:text-red-right transition duration-300 ease-in-out"
          >
            <FaInstagram />
          </Link>
          <Link
            to="https://twitter.com/"
            target="_blank"
            className=" hover:text-red-right transition duration-300 ease-in-out"
          >
            <FaXTwitter />
          </Link>
          <Link
            to="https://www.facebook.com/"
            target="_blank"
            className=" hover:text-red-right transition duration-300 ease-in-out"
          >
            <FiFacebook />
          </Link>
          <Link
            to="https://github.com/"
            target="_blank"
            className=" hover:text-red-right transition duration-300 ease-in-out"
          >
            <FaGithub />
          </Link>
        </div>
        {/* <hr className="my-2" /> */}
        <center className="pb-3"> &copy; cinemate. All rights reserved.</center>
      </nav>
    </footer>
  );
};
