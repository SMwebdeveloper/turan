/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useRef } from "react";
import DarkModeContext from "../../../context/darkmodeContext";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";
import Img from "../../../assets/konsultationImg.png"

const Index = () => {
  const { darkMode } = useContext<any>(DarkModeContext);
  const phoneInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (phoneInputRef.current) {
      intlTelInput(phoneInputRef.current, {
        initialCountry: "uz", 
        separateDialCode: true, 
      });
    }
  }, []);

  return (
    <div className="w-[90%] m-auto mt-[30px] lg:mt-[50px] pb-[30px]">
      <div className="grid gap-4 sm:grid-cols-2 lg:gap-[26px] xl:gap-[30px]">
        <div className={`${darkMode ? "bg-[#CDCDCD]" : "bg-[white]"} rounded-[30px] lg:gap-[26px] xl:gap-[30px] px-[18px] lg:px-[30px] py-[40px] flex flex-col gap-[10px] justify-center`}>
          <h1 className="text-[#1E063A] text-[28px]  font-bold text-center sm:text-[24px] lg:text-[38px] xl:text-[46px]">Bepul konsultatsiya</h1>
          <p className="text-[#1E063A80] sm:text-[12px] lg:text-[18px] xl:text-[20px]">
            Telefon raqamingizni yozib bizga yuboring va biz sizga aloqaga chiqamiz har qanday savolingizga javob beramiz.
          </p>
          <form className="mt-4 space-y-3">
            <input 
              type="text"
              placeholder="Ismingiz"
              className="block w-full p-3 sm:p-2 lg:p-4 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F8B300]"
            />
            <input
              id="phone"
              type="tel"
              ref={phoneInputRef}
              className="block w-full p-3 sm:p-2 lg:p-4 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F8B300]"
            />
          </form>
          <button
            className={`mt-4 px-5 py-2 rounded-[10px] sm:text-[12px] lg:text-[18px] lg:py-3 xl:py-4 font-medium ${darkMode ? "text-[#1E063A]" : "text-white"} bg-[#F8B300]`}
          >
            SO’ROV YUBORING
          </button>
        </div>


        <div className="rounded-[30px] overflow-hidden">
          <img src={Img} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Index;
