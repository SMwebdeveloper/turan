import React from "react";
import Upload from "../../../assets/upload.png"
import { useUploadImageMutation } from "../../../service/admin";

const AddEvents = ({ addEvent, visibleModal, setEvent, event, loading, closeModal }: any) => {
  const [uplodaImgFn, { isLoading: uploadLoading }] = useUploadImageMutation();
  
  const uploadImage = async (e: any) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const formData = new FormData();
        formData.append("image", file);
        const { data } = await uplodaImgFn(formData);
        setEvent((prev: any) => ({
          ...prev,
          image: data?.image_url,
        }));
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <form
      onSubmit={addEvent}
      className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[462px] py-[30px] px-[67px] z-50 flex flex-col justify-center gap-y-[35px] bg-yellowColor rounded-3xl transition-all duration-300 delay-75 ease-out ${
        visibleModal ? "visible top-1/2" : "invisible -top-1/2"
      }`}
    >
      <button
      type="button"
        className="absolute top-3 right-5 text-4xl text-white"
        onClick={closeModal}
      >
        &times;
      </button>
      <label className="w-full ">
        <h4 className="text-base text-white/50 font-bold mb-2">Rasm</h4>
        <div className="w-full h-[200px] relative py-[13px] text-center bg-white/50 rounded-2xl text-[40px] text-colorDark outline-none border-none placeholder:text-colorDark placeholder:text-[40px]">
          <input
            type="file"
            accept="image/png, image/jpg, image/gif"
            placeholder="Rasm yuklash"
            className="hidden"
            onChange={uploadImage}
          />

          {event?.image && (
            <img
              src={event?.image}
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
            <div className="absolute w-[60px] h-[60px] cursor-pointer bg-colorDark/80 flex items-center justify-center rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <img
                src={Upload}
                alt="upload icon"
                className="w-[40px] h-[40px]"
              />
            </div>
          )}
        </div>
      </label>
      <label className="w-full ">
        <h4 className="text-base text-white/50 font-bold mb-2">Nomi</h4>
        <input
          type="text"
          placeholder="Nomi"
          value={event?.title}
          onChange={(e) =>
            setEvent((prev: any) => ({ ...prev, title: e.target.value }))
          }
          className="w-full py-[13px] text-center bg-white/50 rounded-2xl text-[40px] text-colorDark outline-none border-none placeholder:text-colorDark placeholder:text-[40px]"
        />
      </label>
      <button
        type="submit"
        className="w-full py-[13px]  bg-colorDark text-yellowColor text-center text-[40px] rounded-2xl"
      >
        {loading ? "Loading..." : "Qo'shish"}
      </button>
    </form>
  );
};

export default AddEvents;
