/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useRef } from "react";
import DarkModeContext from "../../context/darkmodeContext"
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";
import { useNavigate } from "react-router-dom";
const Index = () => {
  const { darkMode } = useContext<any>(DarkModeContext);
  const phoneInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate()

  useEffect(() => {
    if (phoneInputRef.current) {
      intlTelInput(phoneInputRef.current, {
        initialCountry: "uz", 
        separateDialCode: true, 
      });
    }
  }, []);

  const handleSubmit = () =>{
    navigate("/register")
  }

  return (
    <div className={`${darkMode ? "bg-[#CDCDCD]" : "bg-[#1E063A]"} w-full`}>
      <div className={`w-[90%] md:w-[60%] lg:w-[60%] xl:w-[45%] m-auto lg:gap-[26px] xl:gap-[30px] px-[18px] lg:px-[30px] py-[40px] flex flex-col gap-[10px] justify-center`}>
          <h1 className={`${darkMode ? 'text-[#1E063A]' : "text-[white]"} text-[28px]  font-bold text-center  lg:text-[38px] xl:text-[46px]`}>Ro’yhatdan o’ting</h1>
         
          <form className="mt-4 space-y-3">
            <input 
              type="text"
              placeholder="Ismingiz"
              className={`block w-full p-3 sm:p-3 lg:p-4 border-2  rounded-md shadow-sm border-[#F8B300] ${darkMode ? "bg-[#FFFFFF80]" : "bg-[#D9D9D933] text-white" }`}
            />
            <input
              id="phone"
              type="tel"
              ref={phoneInputRef}
              className={`block w-full p-3 sm:p-3 lg:p-4 border-2 rounded-md shadow-sm border-[#F8B300]  ${darkMode ? "bg-[#FFFFFF80]" : "bg-[#D9D9D933] text-white" } `}
            />
            <input 
              type="text"
              placeholder="Qisqacha izoh"
              className={`block w-full p-3 sm:p-3 lg:p-4 border-2  rounded-md shadow-sm border-[#F8B300] ${darkMode ? "bg-[#FFFFFF80]" : "bg-[#D9D9D933] text-white" }`}
            />
          </form>
          <button
          onClick={handleSubmit}
            className={`mt-4 px-5 py-2 rounded-[10px] sm:text-[18px] lg:text-[24px] lg:py-3 xl:py-4 font-medium ${darkMode ? "text-[#1E063A]" : "text-white"} bg-[#F8B300]`}
          >
            SO’ROV YUBORING
          </button>
        </div>
    </div>
  )
}

export default Index
