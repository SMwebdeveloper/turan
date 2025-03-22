import { useState } from "react";
import Img1 from "../../../assets/card4.png";
import Upload from "../../../assets/upload.png";
import { useGetEventsQuery } from "../../../service/admin";
import { Loader } from "../../../components";
const Records = () => {
  const [visibleModal, setVisibleModal] = useState(false);

  const { data: events, isLoading } = useGetEventsQuery(null);

  if (isLoading) return <Loader />;
  return (
    <div className="relative">
      <div className="admin-container pt-8 pb-5 relative">
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
        className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[462px] py-[30px] px-[67px] z-50 flex flex-col justify-center gap-y-[35px] bg-yellowColor rounded-3xl transition-all duration-300 delay-75 ease-out ${
          visibleModal ? "visible top-1/2" : "invisible -top-1/2"
        }`}
      >
        <label className="w-full ">
          <h4 className="text-base text-white/50 font-bold mb-2">Rasm</h4>
          <div className="w-full h-[200px] py-[13px] text-center bg-white/50 rounded-2xl text-[40px] text-colorDark outline-none border-none placeholder:text-colorDark placeholder:text-[40px]">
            <input
              type="file"
              accept="image/png, image/jpg, image/gif"
              placeholder="Rasm yuklash"
              className="hidden"
            />
          </div>
        </label>
        <label className="w-full ">
          <h4 className="text-base text-white/50 font-bold mb-2">Nomi</h4>
          <input
            type="text"
            placeholder="Nomi"
            className="w-full py-[13px] text-center bg-white/50 rounded-2xl text-[40px] text-colorDark outline-none border-none placeholder:text-colorDark placeholder:text-[40px]"
          />
        </label>
        <button className="w-full py-[13px]  bg-colorDark text-yellowColor text-center text-[40px] rounded-2xl">
          Saqlash
        </button>
      </form>
      <div>
        <div className="w-full flex flex-wrap items-center justify-between gap-x-3 px-3 mb-10">
          {events?.length == 0 && (
            <h2 className="text-4xl mx-auto font-bold text-white">
              Lavhalar topilmadi
            </h2>
          )}
          {events?.map((item: any) => (
            <div
              className="relative w-[291px] h-[369px] inline-block mr-6 last:mr-0"
              key={item.id}
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
      </div>
    </div>
  );
};

export default Records;
