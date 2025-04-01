import { useEffect, useState } from "react";
import { Loader } from "../../../components";
import {
  useCreateAboutMutation,
  useDeleteAboutMutation,
  useGetAboutByIdQuery,
  useGetAboutsQuery,
  useUpdateAboutMutation,
  useUploadImageMutation,
} from "../../../service/admin";

const About = () => {
  const [aboutData, setAboutData] = useState({
    id: 0,
    text: "",
    image: "",
  });
  const [validate, setValidate] = useState(false);
  const [aboutId, setAboutId] = useState(0);
  const { data: about, isLoading } = useGetAboutsQuery(null);
  const { data: aboutById, isLoading: aboutLoading } = useGetAboutByIdQuery(
    aboutId,
    { skip: !aboutId }
  );
  const [createAbout, { isLoading: createLoading }] = useCreateAboutMutation();
  const [updateAbout, { isLoading: updateLoading }] = useUpdateAboutMutation();
  const [getImgUrl, { isLoading: uploadLoading }] = useUploadImageMutation();
  const [deleteAbout, { isLoading: deleteLoading }] = useDeleteAboutMutation();

  const uploadImgFn = async (e: any) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const formData = new FormData();
        formData.append("image", file);
        const { data } = await getImgUrl(formData);
        setAboutData((prev: any) => ({
          ...prev,
          image: data?.image_url,
        }));
      } catch (error) {
        console.log(error);
      }
    }
  };
  const handleCreate = async (e: any) => {
    e.preventDefault();
    if (!aboutData.image && !aboutData.text) {
      setValidate(true);
      setTimeout(() => setValidate(false), 3000);
      return;
    }

    const newAbout = { text: aboutData.text, image: aboutData.image };
    try {
      await createAbout(newAbout);
      setAboutData({
        id: 0,
        text: "",
        image: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async () => {
    if (!aboutData.image && !aboutData.text) {
      setValidate(true);
      return;
    }
    try {
      await updateAbout(aboutData).unwrap();
      setAboutData({
        id: 0,
        text: "",
        image: "",
      });
      setAboutId(0)
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async () => {
    try {
  await deleteAbout(aboutId);
       setAboutData({
         id: 0,
         text: "",
         image: "",
       });
       setAboutId(0);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (aboutById) {
      setAboutData({
        id: aboutById?.id,
        text: aboutById?.text,
        image: aboutById?.image
      });
    }
  }, [aboutById]);
  if (isLoading || deleteLoading) return <Loader />;
  return (
    <div className="admin-container pt-8 pb-5">
      <div className="flex items-start justify-between gap-x-[20px]">
        <div className="w-1/2">
          <div className="w-full gap-x-[26px] flex items-center mb-[10px]">
            <h4 className="h-[50px] flex items-start justify-center text-[32px] font-bold text-colorDark bg-yellowColor rounded-[10px] w-full text-center">
              Yozuvlar
            </h4>
            <h4 className="h-[50px] flex items-center justify-center text-[32px] font-bold text-colorDark bg-yellowColor rounded-[10px] w-full text-center">
              Rasmlar
            </h4>
          </div>
          {!about?.length && (
            <h4 className="text-2xl font-bold text-white text-center mt-10">
              Malumotlar topilmadi
            </h4>
          )}
          {about?.map((item: any) => (
            <div
              onClick={() => setAboutId(item.id)}
              className="w-full cursor-pointer gap-x-[26px] flex items-start mb-[10px] last:mb-0"
              key={item}
            >
              <div className="w-1/2 bg-yellowColor min-h-[80px] rounded-[10px] p-7 text-white">
                <p>{item?.text}</p>
              </div>
              <img
                className="w-1/2 bg-yellowColor object-cover h-[278px] rounded-[10px]"
                src={item?.image}
                alt="image"
              />
            </div>
          ))}
        </div>
        <div className="w-1/2">
          <div className="w-full flex items-center justify-center gap-x-[26px] mb-[10px]">
            <button
              onClick={handleUpdate}
              disabled={aboutId ? false : true}
              className="h-[50px] disabled:opacity-65 flex items-center justify-center text-[32px] font-bold text-colorDark bg-yellowColor rounded-[10px] w-full text-center"
            >
              {updateLoading ? "Tahrirlanmoqda..." : "Tahrirlash"}
            </button>
            <button
              onClick={handleDelete}
              disabled={aboutId ? false : true}
              className="h-[50px] disabled:opacity-65 flex items-center justify-center text-[32px] font-bold text-colorDark bg-yellowColor rounded-[10px] w-full text-center"
            >
              O'chirish
            </button>
          </div>
          <form className="w-full h-[567px] relative bg-yellowColor rounded-[10px] flex flex-col items-center justify-center">
            {aboutId !== 0 && (
              <button
                onClick={() => {
                  setAboutId(0);
                  setAboutData({
                    id: 0,
                    text: "",
                    image: "",
                  });
                }}
                className="absolute top-1 right-3 text-[32px] font-semibold text-white"
              >
                &times;
              </button>
            )}

            {aboutLoading ? (
              <h2 className="text-4xl font-bold text-white">Yuklanmoqda...</h2>
            ) : (
              <>
                {" "}
                <textarea
                  value={aboutData?.text}
                  onChange={(e: any) =>
                    setAboutData((prev: any) => ({
                      ...prev,
                      text: e.target.value,
                    }))
                  }
                  className="max-h-[133px] min-h-[133px] w-[410px] rounded-2xl bg-white/40 px-5 py-4 outline-none border-none text-white mb-10"
                ></textarea>
                <div className="w-[410px] h-[133px] rounded-2xl bg-white/40 flex items-center justify-center mb-5">
                  <label htmlFor="uploadImage">
                    <input
                      type="file"
                      id="uploadImage"
                      accept="image/png, image/jpg, image/gif"
                      className="hidden"
                      onChange={uploadImgFn}
                    />
                    <div className="min-w-[209px] px-1 h-[45px] flex items-center justify-center rounded-xl bg-white/50  text-colorDark/50">
                      {aboutData.image ? (
                        <h5 className="text-[20px]">
                          {aboutData.image.toString().substring(0,30)}
                        </h5>
                      ) : uploadLoading ? (
                        <h5 className="text-[24px]">Yuklanmoqda...</h5>
                      ) : (
                        <h5 className="text-[24px]">rasm yuklash</h5>
                      )}
                    </div>
                  </label>
                </div>
                {validate && (
                  <h4 className="text-2xl text-red-500 font-semibold mb-3">
                    Malumotlarni to'ldiring
                  </h4>
                )}{" "}
                {!aboutId && (
                  <button
                    onClick={handleCreate}
                    className="w-[410px] h-[52px] rounded-2xl bg-colorDark text-[32px] text-yellowColor"
                  >
                    {createLoading ? "Yuklanmoqda..." : "Qo'shish"}
                  </button>
                )}
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default About;
