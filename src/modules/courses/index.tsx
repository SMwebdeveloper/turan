/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import DarkModeContext from "../../context/darkmodeContext";

import card4 from "../../assets/kurs4.png";
import { useGetCoursesQuery } from "../../service/user";
import { Loader } from "../../components";
import { Link } from "react-router-dom";
const Index = () => {
  const {data:courses, isLoading} = useGetCoursesQuery(null)

  if(isLoading) return <Loader/>
  const { darkMode } = useContext<any>(DarkModeContext);
  return (
    <div className="w-[90%] m-auto mt-[30px] md:mt-[50px] pb-[30px] lg:mt-[60px]">
      {!courses.length && (
        <h2 className="text-4xl font-bold text-white text-center">
          Kurslar topilmadi
        </h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 px-[15%] sm:px-0 md:grid-cols-3 lg:grid-cols-4 mb-4">
        {courses?.map((item: any) => (
          <div
            key={item?.id}
            className={`bg-[#F8B300] w-full  rounded-[30px] shadow-lg flex flex-col items-center p-6 overflow-hidden text-center`}
          >
            <div
              className={`w-[200px] h-[200px] rounded-full ${
                darkMode ? "bg-[#1E063A]" : "bg-[white]"
              } flex items-end justify-center -mt-[120px]`}
            >
              <img src={card4} alt="img" className="py-[20px]" />
            </div>
            <h2
              className={`${
                darkMode ? "text-[white]" : "text-[#1E063A]"
              } mt-6 text-[20px] font-bold`}
            >
              {item?.title}
            </h2>
            <p
              className={`${
                darkMode ? "text-[#FFFFFF80]" : "text-[#1E063A80]"
              } lg:text-[18px] mt-6`}
            >
              {item?.description}
            </p>
            <button
              className={`w-full ${
                darkMode
                  ? "bg-[#1E063A] text-[#F8B300]"
                  : "bg-[white] text-[#1E063A]"
              } rounded-[10px] lg:text-[18px] font-bold  mt-6 py-[5px]`}
            >
              {item?.price}
            </button>
          </div>
        ))}
      </div>
      {courses.length !== 0 && (
        <Link
          to={"/request"}
          className="bg-[#F8B300] py-[7px] block mx-auto rounded-[10px] text-[Yantramanav] text-[#1E063A] lg:text-[18px] xl:text-[24px] lg:w-[478px] lg:py-[8px] hover:scale-110 transition duration-500  ease-in-out text-center"
        >
          Kursga yozilish
        </Link>
      )}
    </div>
  );
};

export default Index;
