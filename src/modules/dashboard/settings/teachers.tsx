import PenCircle from "../../../assets/pen-circle.png";
import { Link } from "react-router-dom";
import { Loader } from "../../../components";
import { useDeleteTeacherMutation, useGetTeachersQuery } from "../../../service/admin";
import DeleteIcon from "../../../assets/delete-icon.png";

const Teachers = () => {
  const { data: teachers, isLoading } = useGetTeachersQuery(null);
  const [deleteTeacher, {isLoading:deleteLoading}] = useDeleteTeacherMutation()

  const handleDeleteTeacher = async (id:any) => {
    try {
      await deleteTeacher(id)
    } catch (error) {
      console.log(error)
    }
  }
  if (isLoading || deleteLoading)
    return (
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
        {teachers.length == 0 && <h2 className="text-4xl font-bold text-white">O'qituvchilar topilmadi</h2>}
        {teachers && teachers?.map((item: any) => (
          <div
            key={item.id}
            className="w-[300px] h-[300px] relative  border-8 border-yellowColor rounded-xl"
          >
            <img
              src={item.profile_image}
              alt="teacher image"
              className="w-full h-[85%] object-contain"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-x-2">
              <Link
                to={`/admin/settings/edit-teacher/${item.id}`}
                className="w-[65px] h-[65px] bg-colorDark rounded-full flex items-center justify-center"
              >
                <img
                  src={PenCircle}
                  alt="pen circle"
                  className="w-[49px] h-[49px]"
                />
              </Link>
              <button onClick={() => handleDeleteTeacher(item.id)} className="w-[65px] h-[65px] bg-colorDark rounded-full flex items-center justify-center">
                <span className="flex items-center justify-center bg-yellowColor w-[50px] h-[50px] rounded-full">
                  <img
                    src={DeleteIcon}
                    alt="delete icon"
                    className="w-[40px] h-[40px]"
                  />
                </span>
              </button>
            </div>

            <button className="bg-yellowColor w-[287px] h-[15%]  text-center text-xl font-bold">
              {item.full_name}
            </button>
          </div>
        ))}
      </div>
      {/* <Paginations /> */}
    </div>
  );
};

export default Teachers;
