/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useState, useEffect } from "react"; // useEffect import qilindi
import DarkModeContext from "../../../context/darkmodeContext";
import Hero from "../../../assets/hero.png";
import Hero2 from "../../../assets/hero2.png";
import BizHaqimizda from "../../../assets/biz haqimizda.png";
import BizHaqimizda2 from "../../../assets/biz haqimizda2.png";
import Teacher from "../../../assets/teacher.png";
import Ielts from "../../../assets/ielts.png"

const teacherList = [
  { id: 1, ieltsBall: 9.1, cefrBall: 75, img: Teacher, name: "Muhriddin Ismoilov", tajriba: "5+", uquvchilar: "500+" },
  { id: 2, ieltsBall: 9, cefrBall: 70, img: Teacher, name: "Temur Hasanov", tajriba: "6+", uquvchilar: "710+" },
  { id: 3, ieltsBall: 8.5, cefrBall: 73, img: Teacher, name: "Xushnudbek Begaliev", tajriba: "4+", uquvchilar: "430+" },
  { id: 4, ieltsBall: 8, cefrBall: 72, img: Teacher, name: "Muhriddin Ismoilov", tajriba: "3+", uquvchilar: "350+" },
  { id: 5, ieltsBall: 9, cefrBall: 65, img: Teacher, name: "Temur Hasanov", tajriba: "6+", uquvchilar: "540+" },
];

const studentList = [
  { id: 1, listening: 9.0, reading: 9.0, img: Ielts, writing: 7.5 , speaking: 8.5 },
  { id: 2, listening: 9.5, reading: 9, img: Ielts, writing: 7.6 , speaking: 8.9 },
  { id: 3, listening: 9.3, reading: 8.5, img: Ielts, writing: 7.8 , speaking: 8.4 },
  { id: 4, listening: 9, reading: 8.5, img: Ielts, writing: 7.9 , speaking: 7.5 },
  { id: 5, listening: 8.5, reading: 7.3, img: Ielts, writing: 8.5 , speaking: 8.8 },
  { id: 6, listening: 7.5, reading: 7.8, img: Ielts, writing: 8.0 , speaking: 9.0 },
];

const Index = () => {
  const [currentIndex, setCurrentIndex] = useState(0); 
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teacherList.length);
    }, 3000); 

    

    return () => clearInterval(interval); 
  }, []);

  const currentTeacher = teacherList[currentIndex];
  const currentStudent = studentList[currentIndex];

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
            Biz sizga eng yaxshi natijalarga erishishingizga yordam berishuchun
            doim siz bilanmiz. Eng yuqori maqsadni qo'ying Hoziroq bepul sinov
            darsiga yoziling.
          </p>
          <button className="bg-[#F8B300] py-[7px] rounded-[10px] text-[Yantramanav] text-[#1E063A] lg:text-[18px] xl:text-[24px] lg:w-[478px] lg:py-[8px] hover:scale-110 transition duration-500  ease-in-out">
            Kursga yozilish
          </button>
        </div>
        <div>
          <div className="relative flex justify-center items-center overflow-hidden lg:justify-end">
            <img src={Hero2} alt="hero2" className="absolute z-0 w-[400px] lg:w-[500px] mt-[100px] h-auto" />
            <img src={Hero} alt="hero" className="relative z-10 w-[180px] lg:right-[120px] lg:w-[250px] " />
          </div>
        </div>
      </div>

      <h1 className={`${darkMode ? "text-[#1E063A]" : "text-[white]"} "font-[Yantramanav] py-[50px] text-center text-[24px] font-medium"`}>
        BIZ HAQIMIZDA
      </h1>

      <div className="w-full flex flex-col gap-[40px] ">
        <div className="flex flex-col gap-[25px] lg:gap-[50px] xl:gap-[60px] sm:flex-row  justify-between">
          <div className="flex items-center sm:w-[76%] lg:w-[65%]">
            <p
              className={`${darkMode ? "text-[#1E063AB2]" : "text-[#FFFFFFA6]"} font-[Yantramanav] md:text-[24px] lg:text-[28px]  xl:text-[34px]`}
            >
              Biz sizga eng yaxshi natijalarga erishishingizga yordam berishuchun doim siz bilanmiz. Eng yuqori maqsadni qo'yiHoziroq bepul sinov darsiga yoziling.Biz sizga eng yaxshi natijalarga erishishingizga yordam berishuchun doim siz bilanmizizga Hoziroq bepul sinov darsiga yozing
            </p>
          </div>
          <div className="w-[280px] lg:w-[30%] m-auto ">
            <img src={BizHaqimizda} alt="biz haqimizda" />
          </div>
        </div>

        <div className="flex flex-col gap-[25px] lg:gap-[50px] xl:gap-[60px] sm:flex-row  justify-between">
          <div className="w-[280px] lg:w-[30%] m-auto">
            <img src={BizHaqimizda2} alt="biz haqimizda" />
          </div>
          <div className="flex items-center sm:w-[76%] lg:w-[65%]">
            <p
              className={`${darkMode ? "text-[#1E063AB2]" : "text-[#FFFFFFA6]"} font-[Yantramanav] md:text-[24px] lg:text-[28px]  xl:text-[34px] `}
            >
              Biz sizga eng yaxshi natijalarga erishishingizga yordam berishuchun doim siz bilanmiz. Eng yuqori maqsadni qo'yiHoziroq bepul sinov darsiga yoziling.Biz sizga eng yaxshi natijalarga erishishingizga yordam berishuchun doim siz bilanmizizga Hoziroq bepul sinov darsiga yozing
            </p>
          </div>
        </div>
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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6 justify-center">
          <div className="bg-white rounded-[15px] shadow-md flex flex-col items-center py-6">
            <h2 className="text-[#1E063A] font-medium text-lg lg:text-2xl">1000+</h2>
            <p className="text-[#1E063A80] text-sm lg:text-lg">o’quvchilar</p>
          </div>
          <div className="bg-white rounded-[15px] shadow-md flex flex-col items-center py-6">
            <h2 className="text-[#1E063A] font-medium text-lg lg:text-2xl">150+</h2>
            <p className="text-[#1E063A80] text-sm lg:text-lg">o’qituvchilar</p>
          </div>
          <div className="bg-white rounded-[15px] shadow-md flex flex-col items-center py-6">
            <h2 className="text-[#1E063A] font-medium text-lg lg:text-2xl">500+</h2>
            <p className="text-[#1E063A80] text-sm lg:text-lg">bitiruvchilar</p>
          </div>
          <div className="bg-white rounded-[15px] shadow-md flex flex-col items-center py-6">
            <h2 className="text-[#1E063A] font-medium text-lg lg:text-2xl">150+</h2>
            <p className="text-[#1E063A80] text-sm lg:text-lg text-center">o’qituvchilar sertifikat</p>
          </div>
          <div className="bg-white rounded-[15px] shadow-md flex flex-col items-center py-6">
            <h2 className="text-[#1E063A] font-medium text-lg lg:text-2xl">400+</h2>
            <p className="text-[#1E063A80] text-sm lg:text-lg text-center">o’quvchilar sertifikat</p>
          </div>
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

        <div className="grid grid-cols-1 gap-5 lg:gap-[60px] xl:gap-[80px] sm:grid-cols-3" key={currentTeacher.id}>
          <div className="flex justify-evenly sm:flex-col gap-[30px]">
            <div className="border-[3px] border-[#F8B300] rounded-[16px] md:rounded-[22px] py-4 lg:py-5 px-5 flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out opacity-100">
              <h1 className="text-[#F8B300] text-[24px] md:text-[30px] lg:text-[36px] xl:text-[48px] font-bold">
                {currentTeacher.ieltsBall}
              </h1>
              <p className="text-[#F8B300] text-[18px] font-bold lg:text-[28px] xl:text-[34px] text-[Yantramanav]">
                <span className="font-bold">IELTS </span> bal
              </p>
            </div>
            <div className="border-[3px] border-[#F8B300] rounded-[16px] md:rounded-[22px] py-4 lg:py-5 px-5 flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out opacity-100">
              <h1 className="text-[#F8B300] text-[24px] md:text-[30px] lg:text-[36px] xl:text-[48px] font-bold">
                {currentTeacher.cefrBall}
              </h1>
              <p className="text-[#F8B300] text-[18px] font-bold lg:text-[28px] xl:text-[34px] text-[Yantramanav]">
                <span className="font-bold">CEFR </span> bal
              </p>
            </div>
          </div>

          <div className="w-[80%] m-auto flex flex-col justify-end items-center relative transition-opacity duration-500 ease-in-out opacity-100">
            <img src={currentTeacher.img} alt="teacher" className="w-[80%]" />
            <div className="flex justify-center w-full items-center rounded-[26px] bg-[#F8B300] py-3 absolute mb-[25%]">
              <h1 className="text-[#1E063A] text-[18px] font-bold lg:text-[24px]">
                {currentTeacher.name}
              </h1>
            </div>
          </div>

          <div className="flex justify-evenly sm:flex-col gap-[30px]">
            <div className="border-[3px] border-[#F8B300] rounded-[16px] md:rounded-[22px] py-3 px-5 flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out opacity-100">
              <h1 className="text-[#F8B300] text-[24px] md:text-[30px] lg:text-[36px] xl:text-[48px] font-bold">
                {currentTeacher.tajriba}
              </h1>
              <p className="text-[#F8B300] text-[18px] font-bold lg:text-[28px] xl:text-[34px] text-[Yantramanav]">
                <span className="font-bold">YIL </span> tajriba
              </p>
            </div>
            <div className="border-[3px] border-[#F8B300] rounded-[24px] md:rounded-[22px] py-3 px-5 flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out opacity-100">
              <h1 className="text-[#F8B300] text-[24px] md:text-[30px] lg:text-[36px] xl:text-[48px] font-bold">
                {currentTeacher.uquvchilar}
              </h1>
              <p className="text-[#F8B300] text-[18px] font-bold lg:text-[28px] xl:text-[34px] text-[Yantramanav]">
                O’quvchilar
              </p>
            </div>
          </div>
        </div>
      </div>


      


    </div>

    <div className="mt-[50px] lg:mt-[70px] xl:mt-[90px] flex flex-col w-full">
      <div className="bg-[#F8B300] rounded-t-lg lg:rounded-t-[20px] w-[70%] lg:w-[50%] m-auto py-2 lg:py-4 ">
        <h1
          className={`uppercase font-[Yantramanav] font-medium text-center md:text-[24px] lg:text-[28px] xl:text-[34px]`}
        >
          bizning o’quvchilar NATIJALARI
        </h1>
      </div>

      <div className="w-full bg-[#F8B300] py-[50px]">
        {showAll ? (
           <div className="flex flex-col gap-[50px] lg:gap-[80px] duration-300 ">
            {studentList.map((item)=>(
              <div className="grid grid-cols-1 gap-5 lg:gap-[60px] xl:gap-[80px] sm:grid-cols-3 w-[90%] m-auto">
              <div className="flex justify-evenly sm:flex-col gap-[30px]">
                <div className="border-[3px] border-[white] rounded-[16px] md:rounded-[22px] py-4 lg:py-5 px-5 flex flex-col items-center justify-center">
                  <h1 className="text-[white] text-[24px] md:text-[30px] lg:text-[36px] xl:text-[48px] font-bold">
                    {item.listening}
                  </h1>
                  <p className="text-[white] text-[18px] font-bold lg:text-[28px] xl:text-[34px]">
                    listening
                  </p>
                </div>
                <div className="border-[3px] border-[white] rounded-[16px] md:rounded-[22px] py-4 lg:py-5 px-5 flex flex-col items-center justify-center">
                  <h1 className="text-[white] text-[24px] md:text-[30px] lg:text-[36px] xl:text-[48px] font-bold">
                    {item.reading}
                  </h1>
                  <p className="text-[white] text-[18px] font-bold lg:text-[28px] xl:text-[34px]">
                    reading
                  </p>
                </div>
              </div>
   
              <div className="w-[80%] m-auto flex flex-col justify-end items-center ">
                <img src={item.img} alt="student" className="w-[80%]" />
              </div>
   
              <div className="flex justify-evenly sm:flex-col gap-[30px]">
                <div className="border-[3px] border-[white] rounded-[16px] md:rounded-[22px] py-3 px-5 flex flex-col items-center justify-center">
                  <h1 className="text-[white] text-[24px] md:text-[30px] lg:text-[36px] xl:text-[48px] font-bold">
                    {item.writing}
                  </h1>
                  <p className="text-[white] text-[18px] font-bold lg:text-[28px] xl:text-[34px]">
                    writing
                  </p>
                </div>
                <div className="border-[3px] border-[white] rounded-[24px] md:rounded-[22px] py-3 px-5 flex flex-col items-center justify-center">
                  <h1 className="text-[white] text-[24px] md:text-[30px] lg:text-[36px] xl:text-[48px] font-bold">
                    {item.speaking}
                  </h1>
                  <p className="text-[white] text-[18px] font-bold lg:text-[28px] xl:text-[34px]">
                    speaking
                  </p>
                </div>
              </div>
            </div>
            ))}
           </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 lg:gap-[60px] xl:gap-[80px] sm:grid-cols-3 w-[90%] m-auto">
            <div className="flex justify-evenly sm:flex-col gap-[30px]">
              <div className="border-[3px] border-[white] rounded-[16px] md:rounded-[22px] py-4 lg:py-5 px-5 flex flex-col items-center justify-center">
                <h1 className="text-[white] text-[24px] md:text-[30px] lg:text-[36px] xl:text-[48px] font-bold">
                  {currentStudent.listening}
                </h1>
                <p className="text-[white] text-[18px] font-bold lg:text-[28px] xl:text-[34px]">
                  listening
                </p>
              </div>
              <div className="border-[3px] border-[white] rounded-[16px] md:rounded-[22px] py-4 lg:py-5 px-5 flex flex-col items-center justify-center">
                <h1 className="text-[white] text-[24px] md:text-[30px] lg:text-[36px] xl:text-[48px] font-bold">
                  {currentStudent.reading}
                </h1>
                <p className="text-[white] text-[18px] font-bold lg:text-[28px] xl:text-[34px]">
                  reading
                </p>
              </div>
            </div>

            <div className="w-[80%] m-auto flex flex-col justify-end items-center ">
              <img src={currentStudent.img} alt="student" className="w-[80%]" />
            </div>

            <div className="flex justify-evenly sm:flex-col gap-[30px]">
              <div className="border-[3px] border-[white] rounded-[16px] md:rounded-[22px] py-3 px-5 flex flex-col items-center justify-center">
                <h1 className="text-[white] text-[24px] md:text-[30px] lg:text-[36px] xl:text-[48px] font-bold">
                  {currentStudent.writing}
                </h1>
                <p className="text-[white] text-[18px] font-bold lg:text-[28px] xl:text-[34px]">
                  writing
                </p>
              </div>
              <div className="border-[3px] border-[white] rounded-[24px] md:rounded-[22px] py-3 px-5 flex flex-col items-center justify-center">
                <h1 className="text-[white] text-[24px] md:text-[30px] lg:text-[36px] xl:text-[48px] font-bold">
                  {currentStudent.speaking}
                </h1>
                <p className="text-[white] text-[18px] font-bold lg:text-[28px] xl:text-[34px]">
                  speaking
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <button
        className="bg-[#F8B300] rounded-b-lg lg:rounded-b-[20px] w-[40%] lg:w-[20%] m-auto py-1 lg:py-2"
        onClick={() => setShowAll(!showAll)}
      >
        <h1
          className={`text-white font-[Yantramanav] font-medium text-center md:text-[18px] lg:text-[22px] xl:text-[28px]`}
        >
          {showAll ? "Kamroq ko'rsat" : "Hammasi"}
        </h1>
      </button>
    </div>


    </div>
    
  );
};

export default Index;
