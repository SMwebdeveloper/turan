import { useState } from "react";
import Upload from "../../../assets/upload.png";
import {
  useAddTeachersMutation,
  useUploadImageMutation,
} from "../../../service/admin";
import { Link, useNavigate } from "react-router-dom";
import ArrowLeft from "../../../assets/arrow-left.png";

const AddTeachers = () => {
  const [teacherData, setTeacherData] = useState({
    full_name: "",
    CEFR_score: "",
    TYS_score: "",
    experience: "",
    profile_image: "",
    total_students: "",
  });
  const [validate, setValidate] = useState(false);
  const navigate = useNavigate();

  const [createTeacher, { isLoading }] = useAddTeachersMutation();
  const [uplodaImgFn, { isLoading: uploadLoading }] = useUploadImageMutation();

  const uploadImage = async (e: any) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const formData = new FormData();
        formData.append("image", file);
        const { data } = await uplodaImgFn(formData);
        setTeacherData((prev: any) => ({
          ...prev,
          profile_image: data?.image_url,
        }));
      } catch (error) {
        console.log(error);
      }
    }
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (
      teacherData.CEFR_score == "" &&
      teacherData.TYS_score == "" &&
      teacherData.experience == "" &&
      teacherData.full_name == "" &&
      teacherData.profile_image == "" &&
      teacherData.total_students == ""
    ) {
      setValidate(true);
      setTimeout(() => setValidate(false), 3000);
    } else {
      try {
        await createTeacher({
          ...teacherData,
          total_students: Number(teacherData.total_students),
        }).unwrap();
        navigate("/admin/settings/teachers");
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="admin-container pt-8 pb-5 px-10">
      <Link
        to={"/admin/settings/teachers"}
        className="bg-yellowColor w-[80px] h-[50px] rounded-3xl flex items-center justify-center mb-12"
      >
        <img src={ArrowLeft} alt="arrow image" className="w-[40px] h-[40px]" />
      </Link>
      <form
        onSubmit={handleSubmit}
        className="mx-auto w-[650px] py-[40px] flex flex-col items-center justify-center bg-yellowColor rounded-xl"
      >
        <label htmlFor="uploadImage" className="mb-[42px]">
          <div className="w-[300px] relative h-[325px] object-cover border-[10px] border-[rgba(255,255,255,.5)] rounded-[10px]">
            <input
              id="uploadImage" // IDni to'g'irladim
              type="file"
              accept="image/png, image/jpg, image/gif"
              className="hidden"
              onChange={uploadImage}
            />
            {teacherData?.profile_image && (
              <img
                src={teacherData?.profile_image}
                alt="ielts image"
                className="w-full h-full object-cover "
              />
            )}

            {uploadLoading && (
              <div className="flex items-center justify-between w-full h-full">
                <p className="text-2xl text-white mx-auto font-semibold">
                  Yuklanmoqda...
                </p>
              </div>
            )}

            {!uploadLoading && (
              <div className="absolute w-[93px] h-[93px] cursor-pointer bg-colorDark/80 flex items-center justify-center rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <img
                  src={Upload}
                  alt="upload icon"
                  className="w-[60px] h-[60px]"
                />
              </div>
            )}
          </div>
        </label>
        <label className="w-[447px] mb-4">
          <h4 className="text-xl text-colorDark/50">To'liq Ism</h4>
          <input
            type="text"
            value={teacherData.full_name}
            onChange={(e: any) => {
              setTeacherData((prev) => ({
                ...prev,
                full_name: e.target.value,
              }));
            }}
            className="w-full bg-white/50 h-[73px] text-[28px] text-colorDark font-bold rounded-xl outline-none border-none px-4"
          />
        </label>

        <label className="w-[447px] flex items-start justify-between mb-[41px]">
          <div>
            <h4 className="text-xl text-colorDark/50">IELTS bal</h4>
            <input
              type="text"
              value={teacherData.TYS_score}
              onChange={(e: any) => {
                setTeacherData((prev) => ({
                  ...prev,
                  TYS_score: e.target.value,
                }));
              }}
              className="w-[174px] bg-white/50 h-[73px] text-[28px] text-colorDark font-bold rounded-xl outline-none border-none px-4"
            />
          </div>
          <div>
            <h4 className="text-xl text-colorDark/50">Yil tajriba</h4>
            <input
              type="text"
              value={teacherData.experience}
              onChange={(e: any) => {
                setTeacherData((prev) => ({
                  ...prev,
                  experience: e.target.value,
                }));
              }}
              className="w-[174px] bg-white/50 h-[73px] text-[28px] text-colorDark font-bold rounded-xl outline-none border-none px-4"
            />
          </div>
        </label>
        <label className="w-[447px] flex items-start justify-between mb-[41px]">
          <div>
            <h4 className="text-xl text-colorDark/50">CEFR bal</h4>
            <input
              type="text"
              value={teacherData.CEFR_score}
              onChange={(e: any) => {
                setTeacherData((prev) => ({
                  ...prev,
                  CEFR_score: e.target.value,
                }));
              }}
              className="w-[174px] bg-white/50 h-[73px] text-[28px] text-colorDark font-bold rounded-xl outline-none border-none px-4"
            />
          </div>
          <div>
            <h4 className="text-xl text-colorDark/50">O'quvchilar</h4>
            <input
              type="text"
              value={teacherData.total_students}
              onChange={(e: any) => {
                setTeacherData((prev) => ({
                  ...prev,
                  total_students: e.target.value,
                }));
              }}
              className="w-[174px] bg-white/50 h-[73px] text-[28px] text-colorDark font-bold rounded-xl outline-none border-none px-4"
            />
          </div>
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

export default AddTeachers;
