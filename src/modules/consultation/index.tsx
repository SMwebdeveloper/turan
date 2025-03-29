/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useRef, useState } from "react";
import DarkModeContext from "../../context/darkmodeContext";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";
import Img from "../../assets/konsultationImg.png";
import { useCreateRequestMutation } from "../../service/user";

const Index = () => {
  const [requestData, setRequestData] = useState({
    full_name: "",
    phone: "+998",
  });
  const [alert, setAlert] = useState(false);
  const [validate, setValidate] = useState(false);
  const { darkMode } = useContext<any>(DarkModeContext);
  const phoneInputRef = useRef<HTMLInputElement>(null);

  const [createRequest, { isLoading }] = useCreateRequestMutation();

   const handleChange = (e:any) => {
     let value = e.target.value.replace(/\D/g, ""); // Faqat raqamlarni olish
     if (!value.startsWith("998")) {
       value = "998"; // +998 dan oldin boshqa raqam kiritishning oldini olish
     }

     // Formatlash (+998 XX XXX XX XX)
     if (value.length > 12) {
       return;
     }

     setRequestData((prev: any) => ({ ...prev, phone: "+" + value }));
   };
  const handleCreate = async (e: any) => {
    e.preventDefault();
    if (!requestData.full_name || !requestData.phone) {
      setValidate(true);
      setTimeout(() => setValidate(false), 3000)
      return;
    }


    try {
      await createRequest(requestData)      
      setAlert(true)
      setTimeout(() => setAlert(false), 3000)
      setRequestData({
        full_name: "",
        phone: "+998"
      })
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    if (phoneInputRef.current) {
      intlTelInput(phoneInputRef.current, {
        initialCountry: "uz",
        separateDialCode: true,
      });
    }
  }, []);

  return (
    <div className="w-[90%] relative m-auto mt-[30px] lg:mt-[50px] pb-[30px]">
      {/* <div
        className={`absolute left-[30%] bg-green-600 w-[500px] h-[60px] shadow-2xl rounded-xl flex items-center justify-center text-2xl transition-all duration-300 text-white ${
          alert ? "top-[-5%]" : "top-[-150%]"
        }`}
      >
        <h4>So‘rov muvaffaqiyatli qabul qilindi!</h4>
      </div> */}
      <div className="grid gap-4 sm:grid-cols-2 lg:gap-[26px] xl:gap-[30px]">
        <div
          className={`${
            darkMode ? "bg-[#CDCDCD]" : "bg-[white]"
          } rounded-[30px] lg:gap-[26px] xl:gap-[30px] px-[18px] lg:px-[30px] py-[40px] flex flex-col gap-[10px] justify-center`}
        >
          <h1 className="text-[#1E063A] text-[28px]  font-bold text-center sm:text-[24px] lg:text-[38px] xl:text-[46px]">
            Bepul konsultatsiya
          </h1>
          <p className="text-[#1E063A80] sm:text-[12px] lg:text-[18px] xl:text-[20px]">
            Telefon raqamingizni yozib bizga yuboring va biz sizga aloqaga
            chiqamiz har qanday savolingizga javob beramiz.
          </p>
          <form onSubmit={handleCreate} className="mt-4 space-y-3">
            <input
              type="text"
              value={requestData.full_name}
              onChange={(e: any) =>
                setRequestData((prev: any) => ({
                  ...prev,
                  full_name: e.target.value,
                }))
              }
              placeholder="Ismingiz"
              className="block w-full p-3 sm:p-2 lg:p-4 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F8B300]"
            />
            <input
              id="phone"
              type="tel"
              value={requestData.phone}
              onChange={handleChange}
              maxLength={17}
              placeholder="+998 XX XXX XX XX"
              className="block w-full p-3 sm:p-2 lg:p-4 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F8B300]"
            />
            {validate && (
              <h4 className="text-xl text-red-500 text-semibold text-center">
                Iltimos malumotlarni kiriting
              </h4>
            )}
            <button
              type="submit"
              className={`mt-4 px-5 py-2 block w-full rounded-[10px] sm:text-[12px] lg:text-[18px] lg:py-3 xl:py-4 font-medium ${
                darkMode ? "text-[#1E063A]" : "text-white"
              } bg-[#F8B300]`}
            >
              {isLoading ? "YUBORILMOQDA..." : "SO’ROV YUBORING"}
            </button>
          </form>
        </div>

        <div className="rounded-[30px] overflow-hidden">
          <img src={Img} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Index;
