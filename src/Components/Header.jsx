import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import image from "../assets/Images/cinemate.svg";
import { TfiSearch } from "react-icons/tfi";
import { FaRegMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";

export const Header = () => {
  const [hidden, setHidden] = useState(false);
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode" || false))
  );

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  const handleClick = () => {
    setHidden(!hidden);
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (e.target.search.value === null) return;
    const queryTerm = e.target.search.value;
    e.target.reset();
    return navigate(`/search?q=${queryTerm}`);
  };

  return (
    <header className="dark:bg-gray-800 dark:text-white shadow-sm  dark:shadow-sm">
      <nav className="  p-4   ">
        <div className=" flex justify-around  items-center">
          <div className="flex justify-around items-center">
            <Link to="/">
              <img className="w-14" src={image} alt="logo" />
            </Link>

            <NavLink
              to="/"
              className="
            text-2xl font-mono font-bold hover:text-red-right transition duration-300 ease-in-out"
            >
              Cinemate
            </NavLink>
          </div>
          <div className=" max-md:hidden text-xl font-mono flex justify-around w-96 ">
            <NavLink to="/" end>
              Home
            </NavLink>

            <NavLink to="/movies/popular">Popular</NavLink>
            <NavLink to="/movies/top">Top rated</NavLink>
            <NavLink to="/movies/upcoming">Upcoming</NavLink>
          </div>
          <form
            className="max-md:hidden flex justify-between items-center gap "
            onSubmit={(e) => handleSubmit(e)}
          >
            <input
              placeholder="search"
              className=" px-4 py-2 rounded-l-lg text-black focus:outline-none border-l-2 border-t-2 border-b-2 border-red-right"
              type="search"
              name="search"
              id=""
            />
            <button
              className="px-4 py-3 rounded-r-lg border-r-2 border-t-2 border-b-2 border-red-right hover:bg-red-right transition duration-300 ease-in-out"
              type="submit"
            >
              <TfiSearch />
            </button>
          </form>
          <div className="flex justify-center gap-6 items-center">
            <div
              className="md:hidden hover:cursor-pointer  text-2xl"
              onClick={() => handleClick()}
            >
              <GiHamburgerMenu />
            </div>
            <button
              className="text-2xl animate-bounce   hover:text-red-right transition duration-300 ease-in-out"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <MdOutlineWbSunny /> : <FaRegMoon />}
            </button>
          </div>
        </div>

        {hidden && (
          <div className="md:hidden mt-4 gap-4 flex flex-col items-center">
            <NavLink
              to="/"
              className="dark:text-white  "
              onClick={() => handleClick()}
              end
            >
              Home{" "}
            </NavLink>
            <NavLink
              to="/movies/popular"
              className="dark:text-white "
              onClick={() => handleClick()}
            >
              Popular
            </NavLink>
            <NavLink
              to="/movies/top"
              className="dark:text-white "
              onClick={() => handleClick()}
            >
              Top rated
            </NavLink>
            <NavLink
              to="/movies/upcoming"
              className="dark:text-white "
              onClick={() => handleClick()}
            >
              Upcoming
            </NavLink>
            <form
              className=" flex  justify-between items-center gap"
              onSubmit={(e) => handleSubmit(e)}
            >
              <input
                placeholder="search"
                className=" px-4 py-2 rounded-l-lg  focus:outline-none text-black border-l-2 border-t-2 border-b-2 border-red-right"
                type="search"
                name="search"
                id=""
              />
              <button
                className="px-4 py-3 rounded-r-lg border-r-2 border-t-2 border-b-2 border-red-right hover:bg-red-right transition duration-300 ease-in-out  "
                type="submit"
              >
                <TfiSearch />
              </button>
            </form>
          </div>
        )}
      </nav>
    </header>
  );
};
