/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useRef, useState } from "react";
import DarkModeContext from "../../../context/darkmodeContext";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";

const Index = () => {
  const { darkMode } = useContext<any>(DarkModeContext);
  const phoneInputRef = useRef<HTMLInputElement>(null);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [otp, setOtp] = useState(["", "", "", ""]);

  useEffect(() => {
    if (phoneInputRef.current) {
      intlTelInput(phoneInputRef.current, {
        initialCountry: "uz", 
        separateDialCode: true, 
      });
    }
  }, []);

  const handleChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (!/^\d*$/.test(value)) return; 

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1); 
    setOtp(newOtp);

    if (value && index < 4 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus(); 
    }
  };

  const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus(); 
    }
  };

  return (
    <div className={`${darkMode ? "bg-[#CDCDCD]" : "bg-[#1E063A]"} w-full`}>
      <div className="w-[90%] md:w-[60%] lg:w-[50%] xl:w-[40%] m-auto flex flex-col gap-[15px] md:gap-[20px] lg:gap-[30px]  px-6 py-8">
        <h1 className={`${darkMode ? "text-[#1E063A]" : "text-[white]"} text-[28px] lg:text-[36px] xl:text-[48px] font-bold text-center`}>
          Ro’yhatdan o’ting
        </h1>

        
        <p className={`${darkMode ? "text-[#00000080]" : "text-[#FFFFFF80]" } text-sm font-semibold text-center lg:text-[20px] xl:text-[26px]`}>Telefoningizga borgan kodni kiriting</p>
    
          
          <div className="flex justify-center space-x-2 mt-3">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                value={digit}
                maxLength={1}
                onChange={(e) => handleChange(index, e)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 lg:w-[60px] lg:h-[60px] bg-[#EDEAF3] text-[#1E063A] text-center text-xl border-2 border-transparent focus:border-[#F8B300] rounded-md outline-none"
              />
            ))}
        </div>

        <button className={`${darkMode ? "text-[#00000080]" : "text-[#FFFFFF80]" } text-sm font-semibold text-center text-[14px] lg:text-[16px] xl:text-[22px]`}>Qayta kod jonatish</button>

        <button
          className={`mt-6 w-full py-3 text-[20px] lg:text-[26px] rounded-md font-medium ${
            darkMode ? "text-[#1E063A]" : "text-white"
          } bg-[#F8B300] hover:bg-[#e0a100] transition duration-200`}
        >
          Saqlash
        </button>
      </div>
    </div>
  );
};

export default Index;
