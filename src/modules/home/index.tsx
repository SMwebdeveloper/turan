/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useState, useEffect } from "react";
import DarkModeContext from "../../context/darkmodeContext";
import Hero from "../../assets/hero.png";
import Hero2 from "../../assets/hero2.png";
import BizHaqimizda from "../../assets/biz haqimizda.png";
import BizHaqimizda2 from "../../assets/biz haqimizda2.png";
import { Link } from "react-router-dom";
import { useGetAboutQuery, useGetEventsQuery, useGetResultsQuery, useGetStatisticsQuery, useGetTeachersQuery } from "../../service/user";
import { SecondLoader } from "../../components";


const Index = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [studentCurrentIndex, setStudentCurrentIndex] = useState(0)

  const {data: about, isLoading:aboutLoading} = useGetAboutQuery(null)
  const {data: statistics, isLoading: statisticLoading} = useGetStatisticsQuery(null)
  const {data: teachers, isLoading: teacherLoading} = useGetTeachersQuery(null)
  const {data: events, isLoading: eventLoading} = useGetEventsQuery(null)
  const {data: results, isLoading: resultLoading} = useGetResultsQuery(null)

 useEffect(() => {
   // Only set interval if there are multiple items
   if (teachers?.results?.length > 1 || results?.results?.length > 1) {
     const interval = setInterval(() => {
       if (teachers?.results?.length > 1) {
         setCurrentIndex(
           (prevIndex) => (prevIndex + 1) % teachers.results.length
         );
       }
       if (results?.results?.length > 1) {
         setStudentCurrentIndex((prev) => (prev + 1) % results.results.length);
       }
     }, 3000);

     return () => clearInterval(interval);
   }
 }, [teachers?.results?.length, results?.results?.length]);

 // Get current items safely
 const currentTeacher =
   teachers?.results?.[currentIndex] || teachers?.results?.[0];
 const currentStudent =
   results?.results?.[studentCurrentIndex] || results?.results?.[0];

  const { darkMode } = useContext<any>(DarkModeContext);
  
  return (
    <div className="w-full">
      <div className="w-[90%] m-auto">
        <div className="grid gap-[30px] mt-[30px] md:mt-[50px] lg:mt-[70px] sm:grid-cols-2 md:gap-[60px] lg:gap-[80px] justify-between">
          <div className="flex flex-col gap-[20px] ">
            <h1 className="text-[#F8B300] font-[Yantramanav] font-medium text-[24px] sm:text-[28px] md:text-[36px] lg:text-[45px] xl:text-[50px] uppercase">
              turon o’quv markaziga xush kelibsiz!
            </h1>
            <p
              className={`${
                darkMode ? " text-black" : "text-[#FFFFFFA6]"
              } text-[14px] md:text-[16px] lg:text-[18px] xl:text-[24px]`}
            >
              Biz sizga eng yaxshi natijalarga erishishingizga yordam
              berishuchun doim siz bilanmiz. Eng yuqori maqsadni qo'ying Hoziroq
              bepul sinov darsiga yoziling.
            </p>
            <button className="bg-[#F8B300] py-[7px] rounded-[10px] text-[Yantramanav] text-[#1E063A] lg:text-[18px] xl:text-[24px] lg:w-[478px] lg:py-[8px] hover:scale-110 transition duration-500  ease-in-out">
              Kursga yozilish
            </button>
          </div>
          <div>
            <div className="relative flex justify-center items-center overflow-hidden lg:justify-end">
              <img
                src={Hero2}
                alt="hero2"
                className="absolute z-0 w-[400px] lg:w-[500px] mt-[100px] h-auto"
              />
              <img
                src={Hero}
                alt="hero"
                className="relative z-10 w-[180px] lg:right-[120px] lg:w-[250px] "
              />
            </div>
          </div>
        </div>

        <h1
          className={`${
            darkMode ? "text-[#1E063A]" : "text-[white]"
          } "font-[Yantramanav] py-[50px] text-center text-[24px] font-medium"`}
        >
          BIZ HAQIMIZDA
        </h1>

        <div className="w-full flex flex-col gap-[40px] ">
          {aboutLoading && (
            <div className="w-full text-center">
              <SecondLoader />
            </div>
          )}
          {about?.results?.map((item: any, index: any) => (
            <div
              key={index}
              className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} gap-[25px] lg:gap-[50px] xl:gap-[60px] sm:flex-row  justify-between`}
            >
              <div className="flex items-center sm:w-[76%] lg:w-[40%]">
                <p
                  className={`${
                    darkMode ? "text-[#1E063AB2]" : "text-[#FFFFFFA6]"
                  } font-[Yantramanav] md:text-[24px] lg:text-[28px]  xl:text-[34px]`}
                >
                  {item?.text}
                </p>
              </div>
              <div className="w-[285px] lg:w-[50%] m-auto ">
                <img src={item?.image} alt="biz haqimizda" className="w-full h-full object-cover"/>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#F8B300] rounded-[20px] py-[30px] md:py-[45px] lg:py-[60px] px-[20px] sm:px-[40px] lg:px-[60px] mt-[30px] md:mt-[40px] lg:mt-[60px] xl:mt-[80px]">
          <div className="text-center mb-6">
            <h1 className="text-[#1E063A] font-[Yantramanav] text-xl md:text-2xl lg:text-3xl font-bold">
              BIZNING STATISTIKA
            </h1>
            <p className="text-[#1E063A] text-opacity-80 font-[Yantramanav] text-sm md:text-lg lg:text-xl">
              Biz sizga eng yaxshi natijalarga erishishingizga
            </p>
          </div>

          {statisticLoading && (
            <div className="w-full text-center">
              <SecondLoader />
            </div>
          )}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6 justify-center">
            {statistics?.results?.map((item: any) => (
              <div
                key={item?.id}
                className="bg-white rounded-[15px] shadow-md flex flex-col items-center py-6"
              >
                <h2 className="text-[#1E063A] font-medium text-lg lg:text-2xl">
                  {item?.counter}
                </h2>
                <p className="text-[#1E063A80] text-sm lg:text-lg">
                  {item?.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-[30px] lg:mt-[50px] xl:mt-[70px] flex flex-col gap-[25px] lg:gap-[50px]">
          <h1
            className={`${
              darkMode ? "text-[#1E063A]" : "text-[white]"
            } uppercase font-[Yantramanav] font-medium text-center md:text-[24px] lg:text-[28px] xl:text-[34px]`}
          >
            Bizning o’qituvchilar
          </h1>
          {teacherLoading ? (
            <div className="w-full text-center">
              <SecondLoader />
            </div>
          ) : (
            <div
              className="grid grid-cols-1 gap-5 lg:gap-[60px] xl:gap-[80px] sm:grid-cols-3"
              key={currentTeacher?.id}
            >
              <div className="flex justify-evenly sm:flex-col gap-[30px]">
                <div className="border-[3px] border-[#F8B300] rounded-[16px] md:rounded-[22px] py-4 lg:py-5 px-5 flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out opacity-100">
                  <h1 className="text-[#F8B300] text-[24px] md:text-[30px] lg:text-[36px] xl:text-[48px] font-bold">
                    {currentTeacher?.TYS_score}
                  </h1>
                  <p className="text-[#F8B300] text-[18px] font-bold lg:text-[28px] xl:text-[34px] text-[Yantramanav]">
                    <span className="font-bold">IELTS </span> bal
                  </p>
                </div>
                <div className="border-[3px] border-[#F8B300] rounded-[16px] md:rounded-[22px] py-4 lg:py-5 px-5 flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out opacity-100">
                  <h1 className="text-[#F8B300] text-[24px] md:text-[30px] lg:text-[36px] xl:text-[48px] font-bold">
                    {currentTeacher?.CEFR_score}
                  </h1>
                  <p className="text-[#F8B300] text-[18px] font-bold lg:text-[28px] xl:text-[34px] text-[Yantramanav]">
                    <span className="font-bold">CEFR </span> bal
                  </p>
                </div>
              </div>

              <div className="w-[80%] m-auto flex flex-col justify-end items-center relative transition-opacity duration-500 ease-in-out opacity-100">
                <img
                  src={currentTeacher?.profile_image}
                  alt="teacher"
                  className="w-[80%]"
                />
                <div className="flex justify-center w-full items-center rounded-[26px] bg-[#F8B300] py-3 absolute ">
                  <h1 className="text-[#1E063A] text-[18px] font-bold lg:text-[24px]">
                    {currentTeacher?.full_name}
                  </h1>
                </div>
              </div>

              <div className="flex justify-evenly sm:flex-col gap-[30px]">
                <div className="border-[3px] border-[#F8B300] rounded-[16px] md:rounded-[22px] py-3 px-5 flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out opacity-100">
                  <h1 className="text-[#F8B300] text-[24px] md:text-[30px] lg:text-[36px] xl:text-[48px] font-bold">
                    {currentTeacher?.experience}
                  </h1>
                  <p className="text-[#F8B300] text-[18px] font-bold lg:text-[28px] xl:text-[34px] text-[Yantramanav]">
                    <span className="font-bold">YIL </span> tajriba
                  </p>
                </div>
                <div className="border-[3px] border-[#F8B300] rounded-[24px] md:rounded-[22px] py-3 px-5 flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out opacity-100">
                  <h1 className="text-[#F8B300] text-[24px] md:text-[30px] lg:text-[36px] xl:text-[48px] font-bold">
                    {currentTeacher?.total_students}
                  </h1>
                  <p className="text-[#F8B300] text-[18px] font-bold lg:text-[28px] xl:text-[34px] text-[Yantramanav]">
                    O’quvchilar
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-[50px] lg:mt-[70px] xl:mt-[90px] flex flex-col  w-full">
        <div className="bg-[#F8B300] rounded-t-lg lg:rounded-t-[20px] w-[70%] lg:w-[50%] m-auto py-2 lg:py-4 ">
          <h1
            className={` uppercase font-[Yantramanav] font-medium text-center md:text-[24px] lg:text-[28px] xl:text-[34px]`}
          >
            bizning o’quvchilar NATIJALARI
          </h1>
        </div>

        <div className="w-full bg-[#F8B300] py-[50px]">
          {resultLoading ? (
            <div className="w-full text-center">
              <SecondLoader />
            </div>
          ) : (
            <div
              className="grid grid-cols-1 gap-5 lg:gap-[60px] xl:gap-[80px] sm:grid-cols-3  w-[90%] m-auto "
              key={currentStudent?.id}
            >
              <div className="flex justify-evenly sm:flex-col gap-[30px]">
                <div className="border-[3px] border-[white] rounded-[16px] md:rounded-[22px] py-4 lg:py-5 px-5 flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out opacity-100">
                  <h1 className="text-[white] text-[24px] md:text-[30px] lg:text-[36px] xl:text-[48px] font-bold">
                    {currentStudent?.listening}
                  </h1>
                  <p className="text-[white] text-[18px] font-bold lg:text-[28px] xl:text-[34px] text-[Yantramanav]">
                    listening
                  </p>
                </div>
                <div className="border-[3px] border-[white] rounded-[16px] md:rounded-[22px] py-4 lg:py-5 px-5 flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out opacity-100">
                  <h1 className="text-[white] text-[24px] md:text-[30px] lg:text-[36px] xl:text-[48px] font-bold">
                    {currentStudent?.reading}
                  </h1>
                  <p className="text-[white] text-[18px] font-bold lg:text-[28px] xl:text-[34px] text-[Yantramanav]">
                    reading
                  </p>
                </div>
              </div>

              <div className="w-[80%] m-auto flex flex-col justify-end items-center ">
                <img
                  src={currentStudent?.sertificate}
                  alt="teacher"
                  className="w-[80%]"
                />
              </div>

              <div className="flex justify-evenly sm:flex-col gap-[30px]">
                <div className="border-[3px] border-[white] rounded-[16px] md:rounded-[22px] py-3 px-5 flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out opacity-100">
                  <h1 className="text-[white] text-[24px] md:text-[30px] lg:text-[36px] xl:text-[48px] font-bold">
                    {currentStudent?.writing}
                  </h1>
                  <p className="text-[white] text-[18px] font-bold lg:text-[28px] xl:text-[34px] text-[Yantramanav]">
                    writing
                  </p>
                </div>
                <div className="border-[3px] border-[white] rounded-[24px] md:rounded-[22px] py-3 px-5 flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out opacity-100">
                  <h1 className="text-[white] text-[24px] md:text-[30px] lg:text-[36px] xl:text-[48px] font-bold">
                    {currentStudent?.speaking}
                  </h1>
                  <p className="text-[white] text-[18px] font-bold lg:text-[28px] xl:text-[34px] text-[Yantramanav]">
                    speaking
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        <Link
          to={"/ielts"}
          className="bg-[#F8B300] rounded-b-lg lg:rounded-b-[20px] w-[40%] lg:w-[20%] m-auto py-1 lg:py-2 "
        >
          <h1
            className={` text-white font-[Yantramanav] font-medium text-center md:text-[18px] lg:text-[22px] xl:text-[28px]`}
          >
            Hammasi
          </h1>
        </Link>
      </div>

      <div className="flex flex-col gap-[40px]">
        <h1
          className={`${
            darkMode ? "text-[#1E063A]" : "text-white"
          } text-[20px] font-medium text-center pt-[50px] md:pt-[70px] lg:pt-[80px]`}
        >
          TADBIRLARDAN LAVHALAR
        </h1>

        <div className="w-full h-auto m-auto ">
          <div className="relative">
            <div
              id="carousel"
              className="flex gap-6 space-x-4 overflow-x-scroll scrollbar-hide scroll-smooth snap-x snap-mandatory px-3"
            >
              {eventLoading && (
                <div className="w-full text-center">
                  <SecondLoader />
                </div>
              )}
              {events?.results?.map((item: any) => (
                <div
                  key={item?.id}
                  className="w-[200px] lg:w-[280px] snap-center rounded-[5px] overflow-hidden flex-shrink-0"
                >
                  <div className=" rounded-[20px] lg:rounded-[26px] h-auto flex flex-col  gap-[5px] ">
                    <div className="flex justify-center h-[220px] lg:h-[280px] overflow-hidden ">
                      <img
                        src={item?.image}
                        alt={item?.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-auto m-auto ">
          <div className="relative">
            <div
              id="carousel"
              className="flex gap-6 space-x-4 overflow-x-scroll scrollbar-hide scroll-smooth snap-x snap-mandatory"
            >
              {/* {cardLis2.map((item) => (
                  <div
                    key={item.id}
                    className="w-[320px] rounded-[24px] lg:rounded-[30px] lg:w-[420px] snap-center overflow-hidden flex-shrink-0"
                  >
                    <div className=" rounded-[20px] lg:rounded-[26px] h-auto flex flex-col  gap-[5px] ">
                      <div className="flex justify-center h-[220px] lg:h-[280px] overflow-hidden ">
                        <img src={item.img} alt="img" className="w-full h-full" />
                      </div>
                    </div>
                  </div>
                ))} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
