/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import DarkModeContext from "../../context/darkmodeContext";

const Index = () => {
  const { darkMode } = useContext<any>(DarkModeContext);
  return (
    <div className="w-[90%] m-auto h-[100px] md:h-[200px] lg:h-[200px] xl:h-[400px] flex justify-center items-center">
      <h1 className={`${darkMode ? "text-[#1E063A80]" : "text-[#FFFFFF80]"} text-[20px] md:text-[24px] lg:text-[30px] xl:text-[36px] font-bold`}>Hozircha hech narsa topilmadi</h1>
    </div>
  )
}

export default Index
