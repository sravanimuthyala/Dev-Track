import logoWhite from "../assets/logo-white.png";
import logodark from "../assets/logo-dark.png"
import { useTheme } from "../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";
const Navbar = () => {
  const { darkmode, togglemode } = useTheme();
  return (
    <>
      <nav
        className={` flex justify-between h-16 shadow-md w-full ${
          darkmode ? "dark" : ""
        } dark:bg-black`}
      >
        <img width={160} height={100} src={darkmode ? logodark : logoWhite} />
        <div className="mr-4 dark:text-black text-white flex items-center gap-5">
          <button
            className="hover:bg-cyan-200 hover:cursor-pointer bg-cyan-600 p-2 rounded-md"
            onClick={togglemode}
          >
            {darkmode ? <FaSun/> : <FaMoon/>}
          </button>
          <button className="hover:bg-cyan-200 hover:cursor-pointer  bg-cyan-600  p-2 rounded-md">
            sign in
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
