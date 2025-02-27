import React from "react";
import Teacher from "../../../assets/teacher.png";
import PenCircle from "../../../assets/pen-circle.png";
import { Link } from "react-router-dom";
import { Paginations } from "../../../components";

const Teachers = () => {
  return (
    <div className="max-w-[1220px] w-full mx-auto pt-8 pb-5">
      <Link
        to={"/admin/settings/add-teachers"}
        className="w-[205px] h-[49px] bg-yellowColor text-colorDark text-[20px] font-bold rounded-[10px] ml-auto flex items-center justify-center mb-[17px]"
      >
        Qo'shish
      </Link>
      <div className="w-[90%] mx-auto flex flex-wrap items-center justify-center gap-x-[90px] gap-y-[50px] mb-9">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <div key={item} className="w-[262px] h-[473px] relative">
            <img
              src={Teacher}
              alt="teacher image"
              className="w-full h-full "
            />
            <button className="absolute w-[65px] h-[65px] bg-colorDark rounded-full flex items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
              <img
                src={PenCircle}
                alt="pen circle"
                className="w-[49px] h-[49px]"
              />
            </button>
            <button className="absolute bottom-[10%] -left-[4%] bg-yellowColor w-[287px] h-[49px] shadow-md text-center text-xl rounded-full font-bold">
              Muhriddin Ismoilov
            </button>
          </div>
        ))}
      </div>
      <Paginations />
    </div>
  );
};

export default Teachers;
