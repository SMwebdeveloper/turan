import Upload from "../../../assets/upload.png";
import ArrowLeft from "../../../assets/arrow-left.png";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateResultMutation,
  useUploadImageMutation,
} from "../../../service/admin";
import { useState } from "react";

const AddResults = () => {
  const [resultData, setResultData] = useState({
    full_name: "",
    listening: "",
    over_all: "",
    reading: "",
    sertificate: "",
    speaking: "",
    writing: "",
  });
  const [validate, setValidate] = useState(false);
  const navigate = useNavigate();

  const [createResult, { isLoading }] = useCreateResultMutation();
  const [uplodaImgFn, { isLoading: uploadLoading }] = useUploadImageMutation();

  const uploadImage = async (e: any) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const formData = new FormData();
        formData.append("image", file);
        const { data } = await uplodaImgFn(formData);
        setResultData((prev: any) => ({
          ...prev,
          sertificate: data?.image_url,
        }));
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (
      resultData.full_name == "" &&
      resultData.listening == "" &&
      resultData.over_all == "" &&
      resultData.reading == "" &&
      resultData.sertificate == "" &&
      resultData.writing == "" &&
      resultData.speaking == ""
    ) {
      setValidate(true);
      setTimeout(() => {
        setValidate(false);
      }, 3000);
    } else {
      try {
        await createResult(resultData).unwrap();
        navigate("/admin/settings/results")
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="admin-container pt-8 pb-5">
      <Link
        to={"/admin/settings/results"}
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
            {resultData?.sertificate && (
              <img
                src={resultData?.sertificate}
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
            value={resultData.full_name}
            onChange={(e) =>
              setResultData((prev: any) => ({
                ...prev,
                full_name: e.target.value,
              }))
            }
            className="w-full bg-white/50 h-[73px] text-[28px] text-colorDark font-bold rounded-xl outline-none border-none px-4"
          />
        </label>

        <label className="w-[447px] flex items-start justify-between mb-[41px]">
          <div>
            <h4 className="text-xl text-colorDark/50">Listening</h4>
            <input
              type="text"
              value={resultData.listening}
              onChange={(e) =>
                setResultData((prev: any) => ({
                  ...prev,
                  listening: e.target.value,
                }))
              }
              className="w-[174px] bg-white/50 h-[73px] text-[28px] text-colorDark font-bold rounded-xl outline-none border-none px-4"
            />
          </div>
          <div>
            <h4 className="text-xl text-colorDark/50">Writing</h4>
            <input
              type="text"
              value={resultData.writing}
              onChange={(e) =>
                setResultData((prev: any) => ({
                  ...prev,
                  writing: e.target.value,
                }))
              }
              className="w-[174px] bg-white/50 h-[73px] text-[28px] text-colorDark font-bold rounded-xl outline-none border-none px-4"
            />
          </div>
        </label>
        <label className="w-[447px] flex items-start justify-between mb-[41px]">
          <div>
            <h4 className="text-xl text-colorDark/50">Reading</h4>
            <input
              type="text"
              value={resultData.reading}
              onChange={(e) =>
                setResultData((prev: any) => ({
                  ...prev,
                  reading: e.target.value,
                }))
              }
              className="w-[174px] bg-white/50 h-[73px] text-[28px] text-colorDark font-bold rounded-xl outline-none border-none px-4"
            />
          </div>
          <div>
            <h4 className="text-xl text-colorDark/50">Speaking</h4>
            <input
              type="text"
              value={resultData.speaking}
              onChange={(e) =>
                setResultData((prev: any) => ({
                  ...prev,
                  speaking: e.target.value,
                }))
              }
              className="w-[174px] bg-white/50 h-[73px] text-[28px] text-colorDark font-bold rounded-xl outline-none border-none px-4"
            />
          </div>
        </label>
        <label className="w-[447px] flex items-center justify-center mb-[41px]">
          <div>
            <h4 className="text-xl text-colorDark/50 text-center">
              Umumiy bal
            </h4>
            <input
              type="text"
              value={resultData.over_all}
              onChange={(e) =>
                setResultData((prev: any) => ({
                  ...prev,
                  over_all: e.target.value,
                }))
              }
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

export default AddResults;
