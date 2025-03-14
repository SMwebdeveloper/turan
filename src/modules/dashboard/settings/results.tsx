import { Link } from "react-router-dom";
import Ielts from "../../../assets/ielts.png";
import PenCircle from "../../../assets/pen-circle.png";
import { Paginations } from "../../../components";
const Results = () => {
  return (
  <div className="max-w-[1220px] w-full mx-auto pt-8 pb-5">
      <Link
        to={"/admin/settings/add-results"}
        className="w-[205px] h-[49px] bg-yellowColor text-colorDark text-[20px] font-bold rounded-[10px] ml-auto flex items-center justify-center mb-[17px]"
      >
        Qo'shish
      </Link>
      <div className="w-full flex flex-wrap items-center justify-center gap-x-[30px] gap-y-[54px] mb-9">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <div key={item} className=" w-[205px]">
            <div className="relative w-full mb-[3px]">
              <img
                src={Ielts}
                alt="ielts image"
                className="w-full h-[284px] "
              />
              <button className="absolute w-[65px] h-[65px] bg-colorDark rounded-full flex items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                <img
                  src={PenCircle}
                  alt="pen circle"
                  className="w-[49px] h-[49px]"
                />
              </button>
            </div>
            <button className="bg-yellowColor w-full h-[49px] text-center rounded-md font-bold">
              Muhriddin Ismoilov
            </button>
          </div>
        ))}
      </div>
      <Paginations />
    </div>
  );
};

export default Results;
