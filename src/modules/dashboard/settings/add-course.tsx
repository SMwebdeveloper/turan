import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ArrowLeft from "../../../assets/arrow-left.png";
import { useCreateCourseMutation } from "../../../service/admin";

const AddCourse = () => {
  const [courseData, setCourseData] = useState({
    title: "",
    description: "",
    price: "",
  });
  const [validate, setValidate] = useState(false);
  const navigate = useNavigate();

  const [createCourse, { isLoading }] = useCreateCourseMutation();

  const handleCreate = async (e: any) => {
    e.preventDefault();
    if (!courseData.title || !courseData.price || !courseData.description) {
      setValidate(true);
      setTimeout(() => setValidate(false), 3000);
      return false;
    }

    try {
      const response = await createCourse(courseData);
      if (!response.data) {
        setValidate(true)
        setTimeout(() => setValidate(false), 3000)
        return;
      } else {
        setCourseData({ title: "", description: "", price: "" });
        navigate("/admin/settings/courses");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="admin-container pt-8 pb-5 px-10">
      <Link
        to={"/admin/settings/courses"}
        className="bg-yellowColor w-[80px] h-[50px] rounded-3xl flex items-center justify-center mb-12"
      >
        <img src={ArrowLeft} alt="arrow image" className="w-[40px] h-[40px]" />
      </Link>
      <form
        onSubmit={handleCreate}
        className="mx-auto w-[650px] py-[40px] flex flex-col items-center justify-center bg-yellowColor rounded-xl"
      >
        <label className="w-[447px] mb-4">
          <h4 className="text-xl text-colorDark/50">Kurs nomi</h4>
          <input
            type="text"
            value={courseData.title}
            onChange={(e: any) => {
              setCourseData((prev) => ({
                ...prev,
                title: e.target.value,
              }));
            }}
            className="w-full bg-white/50 h-[73px] text-[28px] text-colorDark font-bold rounded-xl outline-none border-none px-4"
          />
        </label>

        <label className="w-[447px] mb-4">
          <h4 className="text-xl text-colorDark/50">Kurs tavsifi</h4>
          <textarea
            value={courseData.description}
            onChange={(e: any) => {
              setCourseData((prev) => ({
                ...prev,
                description: e.target.value,
              }));
            }}
            className="w-full bg-white/50 h-[73px]  text-colorDark  rounded-xl outline-none border-none px-4"
          ></textarea>
        </label>
        <label className="w-[447px] mb-4">
          <h4 className="text-xl text-colorDark/50">Kurs narxi</h4>
          <input
            type="number"
            value={courseData.price}
            onChange={(e: any) => {
              setCourseData((prev) => ({
                ...prev,
                price: e.target.value,
              }));
            }}
            className="w-full bg-white/50 h-[73px] text-[28px] text-colorDark font-bold rounded-xl outline-none border-none px-4"
          />
        </label>
        {validate && (
          <p className="text-center mb-4  text-red-600 text-xl font-medium">
            Iltimos malumotlarni kiriting
          </p>
        )}
        <button className="w-[299px] mx-auto bg-white/50 h-[73px] text-[28px] text-colorDark font-bold rounded-xl outline-none border-none px-4">
          {isLoading ? "Loading..." : "Qo'shish"}
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
