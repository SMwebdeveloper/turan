/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useContext } from "react";
import Logo from "../../assets/logo.png";
import Hamburger from "../../assets/burger-bar.png";
import Close from "../../assets/close.png";
import DarkModeContext from "../../context/darkmodeContext";
import Dark from "../../assets/dark.png";
import Light from "../../assets/light.png";
import Uzb from "../../assets/uzb.png";
import { Link } from "react-router-dom";

const Index = () => {
  const [open, setOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useContext<any>(DarkModeContext);

  return (
    <div
      className={`w-full h-[60px] lg:h-[80px] sticky flex items-center top-0 left-0 ${
        darkMode ? "bg-white " : "bg-[#2E004E] "
      } shadow-xl transition-colors duration-300 ease-in-out z-50`}
    >
      <div className="w-[90%] m-auto flex justify-between items-center">
        <Link to={"/"} className="w-[45px] h-[45px] lg:w-[55px] lg:h-[55px]">
          <img src={Logo} alt="Turan Logo" />
        </Link>

        <div className="hidden md:flex items-center">
          <ul className="flex gap-[40px] lg:gap-[50px] xl:gap-[65px] lg:text-[20px]">
            <li>
              <Link
                to={"/"}
                className={`${darkMode ? "text-black" : "text-white"}`}
              >
                Bosh sahifa
              </Link>
            </li>
            <li>
              <Link
                to={"/courses"}
                className={`${darkMode ? "text-black" : "text-white"}`}
              >
                Kurslar
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex items-center gap-[30px] lg:gap-[40px] xl:gap-[45px] ">
          <Link
            to={"/"}
            className="w-[35px] h-[35px] rounded-[50%] lg:w-[40px] lg:h-[40px]"
          >
            <img src={Uzb} alt="uzb flag" />
          </Link>

          <button
            onClick={toggleDarkMode}
            className="bg-[#F8B300] w-[35px] h-[35px] p-1 rounded-[50%] lg:w-[42px] lg:h-[42px]"
          >
            <img
              src={darkMode ? Light : Dark}
              alt="dark, light"
              className="transition-all duration-300 ease-in-out"
            />
          </button>

          <Link
            to={"./login"}
            className="bg-[#F8B300] font-[Yantramanav] py-[6px] px-[25px] rounded-[10px] lg:py-[8px] lg:px-[30px] lg:text-[20px] hover:scale-110 transition duration-500  ease-in-out"
          >
            Kirish
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="focus:outline-none">
            {open ? (
              <img
                src={Close}
                alt="Close button"
                className="w-[20px] h-[20px]"
              />
            ) : (
              <img
                src={Hamburger}
                alt="Hamburger"
                className="w-[30px] h-[30px]"
              />
            )}
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-[220px] ${
          darkMode ? "bg-white shadow-lg" : "bg-[#2E005E]"
        } transition-all duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="w-[auto] h-[45px] my-2 mx-6 flex items-center gap-[50px]">
          <img src={Logo} alt="Turan Logo" className="w-[45px] h-[45px]" />
          <button
            onClick={toggleDarkMode}
            className="bg-[#F8B300] w-[35px] h-[35px] p-1 rounded-[50%]"
          >
            <img
              src={darkMode ? Light : Dark}
              alt="dark, light"
              className="transition-all duration-300 ease-in-out"
            />
          </button>
        </div>

        <ul className="flex flex-col items-start p-6 space-y-4">
          <li>
            <Link
              to={"/"}
              className={`${
                darkMode ? "text-black" : "text-white"
              } font-[Yantramanav]`}
            >
              Bosh sahifa
            </Link>
          </li>
          <li>
            <Link
              to={"/courses"}
              className={`${
                darkMode ? "text-black" : "text-white"
              } font-[Yantramanav]`}
            >
              Kurslar
            </Link>
          </li>
          <li>
            <Link
              to={"/exam"}
              className={`${
                darkMode ? "text-black" : "text-white"
              } font-[Yantramanav]`}
            >
              Imtixon
            </Link>
          </li>
          <li>
            <Link
              to={"/consultation"}
              className={`${
                darkMode ? "text-black" : "text-white"
              } font-[Yantramanav]`}
            >
              Konsultatsiya
            </Link>
          </li>
        </ul>

        <div className="flex mx-6 items-center gap-[40px]">
          <Link
            to={"./login"}
            className="font-[Yantramanav] bg-[#F8B300] py-[7px] px-[22px] rounded-[10px] hover:scale-110 transition duration-500  ease-in-out"
          >
            Kirish
          </Link>
          <div
            className={`${
              darkMode ? "border-black" : "border-none"
            } w-[35px] h-[35px] rounded-[50%] border-[3px]`}
          >
            <img src={Uzb} alt="uzb flag" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
