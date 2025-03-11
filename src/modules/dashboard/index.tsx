import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
const navigate = useNavigate()

useEffect(() => {
  if(!sessionStorage.getItem("token")) {
    navigate("/admin/auth/login")
  }
},[])
  return (
    <div className="admin-container mx-auto pt-6 px-14">
      <h1 className="text-[32px] font-bold text-yellowColor text-center mb-9">
        Bir oylik ko'rsatish
      </h1>
      <h1 className="text-[32px] font-bold text-yellowColor text-center mb-9">
        Tez tugmalar
      </h1>

      <div className="grid grid-cols-2 gap-x-[35px] gap-y-[31px]">
        <button className="bg-white/25 border border-yellowColor rounded-xl h-[114px] flex items-center justify-center text-yellowColor text-[26px] font-bold cursor-pointer">
          O'quvchini natijasini qo'shish
        </button>
        <button className="bg-white/25 border border-yellowColor rounded-xl h-[114px] flex items-center justify-center text-yellowColor text-[26px] font-bold cursor-pointer">
          Lavhalar qo'shish
        </button>
        <button className="bg-white/25 border border-yellowColor rounded-xl h-[114px] flex items-center justify-center text-yellowColor text-[26px] font-bold cursor-pointer">
          O'qituvchini natijasini qo'shish
        </button>
        <button className="bg-white/25 border border-yellowColor rounded-xl h-[114px] flex items-center justify-center text-yellowColor text-[26px] font-bold cursor-pointer">
          Statistikani qo'shish
        </button>
      </div>
    </div>
  );
}

export default Dashboard