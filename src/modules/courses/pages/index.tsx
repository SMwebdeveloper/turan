/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import DarkModeContext from "../../../context/darkmodeContext";
import card1 from "../../../assets/kurs1.png";
import card2 from "../../../assets/kurs2.png";
import card3 from "../../../assets/kurs3.png";
import card4 from "../../../assets/kurs4.png";
const Index = () => {
  const { darkMode } = useContext<any>(DarkModeContext);
  return (
    <div className="w-[90%] m-auto mt-[30px] md:mt-[50px] lg:mt-[60px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 px-[15%] sm:px-0 md:grid-cols-3 lg:grid-cols-4">
    
        <div className={`${darkMode ? 'bg-[#1E063A]' : 'bg-white' } w-full  rounded-[30px] shadow-lg flex flex-col items-center p-6 overflow-hidden text-center`}>
          <div className={`w-[200px] h-[200px] bg-[#F8B300] rounded-full  flex items-end justify-center -mt-[120px]`}>
            <img src={card1} alt="img" className="py-[20px]" />
          </div>
          <h2 className={`${darkMode ?  'text-[white]' : 'text-[#1E063A]' } mt-6 text-[20px] font-bold`}>BEGINNER</h2>
          <p className={`${darkMode ? 'text-[#FFFFFF80]' : "text-[#1E063A80]"} lg:text-[18px] mt-6`}>
            Ingliz tilini 0 dan boshlab Intermediate darajada o‘rganmoqchilar
            uchun
          </p>
          <button className="bg-[#F8B300] w-full rounded-[10px] lg:text-[18px] font-bold  mt-6 py-[5px]">350 Ming</button>
        </div>

        <div className={`bg-[#F8B300] w-full  rounded-[30px] shadow-lg flex flex-col items-center p-6 overflow-hidden text-center`}>
          <div className={`w-[200px] h-[200px] rounded-full ${darkMode ? 'bg-[#1E063A]' : 'bg-[white]'} flex items-end justify-center -mt-[120px]`}>
            <img src={card2} alt="img" className="py-[20px]" />
          </div>
          <h2 className={`${darkMode ?  'text-[white]' : 'text-[#1E063A]' } mt-6 text-[20px] font-bold`}>BEGINNER</h2>
          <p className={`${darkMode ? 'text-[#FFFFFF80]' : "text-[#1E063A80]"} lg:text-[18px] mt-6`}>
            Ingliz tilini 0 dan boshlab Intermediate darajada o‘rganmoqchilar
            uchun
          </p>
          <button className={`w-full ${darkMode ? "bg-[#1E063A] text-[#F8B300]" : "bg-[white] text-[#1E063A]"} rounded-[10px] lg:text-[18px] font-bold  mt-6 py-[5px]`}>350 Ming</button>
        </div>

        <div className={`${darkMode ? 'bg-[#1E063A]' : 'bg-white' } w-full  rounded-[30px] shadow-lg flex flex-col items-center p-6 overflow-hidden text-center`}>
          <div className="w-[200px] h-[200px] rounded-full bg-yellow-500 flex items-end justify-center -mt-[120px]">
            <img src={card3} alt="img" className="py-[20px]" />
          </div>
          <h2 className={`${darkMode ?  'text-[white]' : 'text-[#1E063A]' } mt-6 text-[20px] font-bold`}>BEGINNER</h2>
          <p className={`${darkMode ? 'text-[#FFFFFF80]' : "text-[#1E063A80]"} lg:text-[18px] mt-6`}>
            Ingliz tilini 0 dan boshlab Intermediate darajada o‘rganmoqchilar
            uchun
          </p>
          <button className="bg-[#F8B300] w-full rounded-[10px] lg:text-[18px] font-bold  mt-6 py-[5px]">350 Ming</button>
        </div>


        <div className={`bg-[#F8B300] w-full  rounded-[30px] shadow-lg flex flex-col items-center p-6 overflow-hidden text-center`}>
          <div className={`w-[200px] h-[200px] rounded-full ${darkMode ? 'bg-[#1E063A]' : 'bg-[white]'} flex items-end justify-center -mt-[120px]`}>
            <img src={card4} alt="img" className="py-[20px]" />
          </div>
          <h2 className={`${darkMode ?  'text-[white]' : 'text-[#1E063A]' } mt-6 text-[20px] font-bold`}>BEGINNER</h2>
          <p className={`${darkMode ? 'text-[#FFFFFF80]' : "text-[#1E063A80]"} lg:text-[18px] mt-6`}>
            Ingliz tilini 0 dan boshlab Intermediate darajada o‘rganmoqchilar
            uchun
          </p>
          <button className={`w-full ${darkMode ? "bg-[#1E063A] text-[#F8B300]" : "bg-[white] text-[#1E063A]"} rounded-[10px] lg:text-[18px] font-bold  mt-6 py-[5px]`}>350 Ming</button>
        </div>


      </div>
    </div>
  );
};

export default Index;
