import Img1 from "../../../assets/card4.png";
import Img2 from "../../../assets/card7.png";
import Upload from "../../../assets/upload.png";
const Records = () => {
  return (
    <>
      <div className="max-w-[1220px] w-full mx-auto pt-8 pb-5 px-10">
        <button className="w-[205px] h-[49px] bg-yellowColor text-colorDark text-[20px] font-bold rounded-[10px] ml-auto flex items-center justify-center mb-[17px]">
          Qo'shish
        </button>
      </div>
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
    </>
  );
};

export default Records;
