import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        <div className="text-white text-lg">Your Logo</div>

        {/* Hamburger menu icon for mobile */}
        <div className="cursor-pointer lg:hidden" onClick={toggleMenu}>
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </div>

        {/* Navigation items for larger screens */}
        <div className={`hidden lg:flex space-x-4`}>
          <a href="#" className="text-white">
            Home
          </a>
          <a href="#" className="text-white">
            Popular
          </a>
          <a href="#" className="text-white">
            Top Rated
          </a>
        </div>
      </div>

      {/* Hamburger menu for mobile */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4">
          <a href="#" className="block text-white py-2" onClick={toggleMenu}>
            Home
          </a>
          <a href="#" className="block text-white py-2" onClick={toggleMenu}>
            Popular
          </a>
          <a href="#" className="block text-white py-2" onClick={toggleMenu}>
            Top Rated
          </a>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
