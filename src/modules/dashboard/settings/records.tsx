import { useState } from "react";
import Img1 from "../../../assets/card4.png";
import Img2 from "../../../assets/card7.png";
import Upload from "../../../assets/upload.png";
const Records = () => {
  const [visibleModal, setVisibleModal] = useState(false)
  return (
    <div className="relative">
      <div className="max-w-[1220px] w-full mx-auto pt-8 pb-5 relative">
        <button
          onClick={() => setVisibleModal(true)}
          className="w-[205px] h-[49px] bg-yellowColor text-colorDark text-[20px] font-bold rounded-[10px] ml-auto flex items-center justify-center mb-[17px]"
        >
          Qo'shish
        </button>
      </div>
      <div
        className={`fixed top-0 left-0 w-full h-full z-40 ${
          visibleModal ? "block" : "hidden"
        }`}
        onClick={() => setVisibleModal(false)}
      ></div>
      <form
        className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[462px] py-[71px] px-[67px] z-50 flex flex-col justify-center gap-y-[35px] bg-yellowColor rounded-3xl transition-all duration-300 delay-75 ease-out ${
          visibleModal ? "visible top-1/2" : "invisible -top-1/2"
        }`}
      >
        <label className="w-full ">
          <h4 className="text-base text-white/50 font-bold mb-2">Rasm</h4>
          <input
            type="text"
            placeholder="Rasm yuklash"
            className="w-full py-[13px] text-center bg-white/50 rounded-2xl text-[40px] text-colorDark outline-none border-none placeholder:text-colorDark placeholder:text-[40px]"
          />
        </label>
        <label className="w-full ">
          <h4 className="text-base text-white/50 font-bold mb-2">Video</h4>
          <input
            type="text"
            placeholder="Video yuklash"
            className="w-full py-[13px] text-center bg-white/50 rounded-2xl text-[40px] text-colorDark outline-none border-none placeholder:text-colorDark placeholder:text-[40px]"
          />
        </label>
        <button className="w-full py-[13px]  bg-colorDark text-yellowColor text-center text-[40px] rounded-2xl">
          Saqlash
        </button>
      </form>
      <div>
        <div className="w-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide px-3 mb-10">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div
              className="relative w-[291px] h-[369px] inline-block mr-6 last:mr-0"
              key={item}
            >
              <img src={Img1} alt="image" className="w-full h-full" />
              <button className="absolute w-[93px] h-[93px] bg-colorDark/80 flex items-center justify-center rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <img
                  src={Upload}
                  alt="upload icon"
                  className="w-[60px] h-[60px]"
                />
              </button>
            </div>
          ))}
        </div>
        <div className="w-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide px-3 mb-10">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div
              className="relative w-[505px] h-[286px] inline-block mr-6 last:mr-0"
              key={item}
            >
              <img src={Img2} alt="image" className="w-full h-full" />
              <button className="absolute w-[93px] h-[93px] bg-colorDark/80 flex items-center justify-center rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <img
                  src={Upload}
                  alt="upload icon"
                  className="w-[60px] h-[60px]"
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Records;
