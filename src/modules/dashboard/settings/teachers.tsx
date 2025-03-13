import PenCircle from "../../../assets/pen-circle.png";
import { Link } from "react-router-dom";
import { Loader, Paginations } from "../../../components";
import { useGetTeachersQuery } from "../../../service";

const Teachers = () => {
  const {data:teachers, isLoading} = useGetTeachersQuery(null)
  
  console.log(teachers)
  if(isLoading) return (
    <div className="flex items-center justify-center h-[80vh] w-full">
      {" "}
      <Loader />
    </div>
  );
  return (
    <div className="max-w-[1220px] w-full mx-auto pt-8 pb-5">
      <Link
        to={"/admin/settings/add-teachers"}
        className="w-[205px] h-[49px] bg-yellowColor text-colorDark text-[20px] font-bold rounded-[10px] ml-auto flex items-center justify-center mb-[17px]"
      >
        Qo'shish
      </Link>
      <div className="w-[90%] mx-auto flex flex-wrap items-center justify-center gap-x-[90px] gap-y-[50px] mb-9">
        
        {teachers?.map((item:any) => (
          <div key={item.id} className="w-[300px] h-[300px] relative  border-8 border-yellowColor rounded-xl">
            <img
              src={item.profile_image}
              alt="teacher image"
              className="w-full h-[85%] object-contain"
            />
            <button className="absolute w-[65px] h-[65px] bg-colorDark rounded-full flex items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
              <img
                src={PenCircle}
                alt="pen circle"
                className="w-[49px] h-[49px]"
              />
            </button>
            <button className="bg-yellowColor w-[287px] h-[15%]  text-center text-xl font-bold">
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
