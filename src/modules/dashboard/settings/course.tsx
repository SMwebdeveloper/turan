import { Link } from "react-router-dom";
import { Loader } from "../../../components";
import {
  useDeleteCourseMutation,
  useGetCoursesQuery,
} from "../../../service/admin";
import DeleteIcon from "../../../assets/delete-icon.png";
import PenCircle from "../../../assets/edit-icon.png";
import { useState } from "react";

const Course = () => {
  const [courseId, setCourseId] = useState(0);
  const { data: courses, isLoading } = useGetCoursesQuery(null);
  const [deleteCourse, { isLoading: deleteLoading }] =
    useDeleteCourseMutation();
  console.log(courses);
  const handleDelete = async (id: any) => {
    try {
      await deleteCourse(id);
    } catch (error) {
      console.log(error);
    }
  };
  if (isLoading || deleteLoading) return <Loader />;
  return (
    <div className="admin-container">
      <Link
        to={"/admin/settings/add-course"}
        className="w-[205px] h-[49px] bg-yellowColor text-colorDark text-[20px] font-bold rounded-[10px] ml-auto flex items-center justify-center mb-[17px]"
      >
        Qo'shish
      </Link>
      <div className="flex flex-wrap items-center justify-center gap-x-[2%] gap-y-[15px]">
        {!courses.length && (
          <h2 className="text-4xl font-bold text-white">Kurslar topilmadi</h2>
        )}
        {courses?.map((item: any) => (
          <div
            key={item?.id}
            className="w-[250px] cursor-pointer flex flex-col items-center justify-center relative lg:w-[22%] min-h-[250px] px-[5px] py-5 gap-y-3 rounded-md bg-yellowColor"
          >
            <div className="absolute top-2 right-2 flex items-center justify-center">
              <Link to={`/admin/settings/edit-course/${item?.id}`} className="rounded-full w-[30px] h-[30px]">
                <img src={PenCircle} alt="delete icon" />
              </Link>
              <button onClick={() => handleDelete(item?.id)}>
                <img src={DeleteIcon} alt="delete icon" className="w-[30px]" />
              </button>
            </div>
            <h4 className="text-3xl text-colorDark font-bold">{item?.title}</h4>
            <p className="text-colorDark/80 text-center w-[200px]">
              {item?.description}
            </p>
            <span className="block bg-white px-6 text-lg font-medium text-colorDark rounded-md">
              {item?.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;
