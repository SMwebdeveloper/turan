import { useState } from "react";
import Upload from "../../../assets/upload.png";
import DeleteIcon from "../../../assets/delete-icon.png";
import {
  useCreateEventsMutation,
  useDeleteEventMutation,
  useGetEventByIdQuery,
  useGetEventsQuery,
  useUpdateEventsMutation,
  useUploadImageMutation,
} from "../../../service/admin";
import { Loader } from "../../../components";
const Records = () => {
  const [visibleModal, setVisibleModal] = useState(false);
  const [recordId, setRecordId] = useState(0);
  const [record, setRecord] = useState({
    id: 0,
    title: "",
    image: "",
  });

  const { data: events, isLoading } = useGetEventsQuery(null);
  const { data: event, isLoading: singleLoading } = useGetEventByIdQuery(
    recordId,
    { skip: !recordId }
  );
  const [createRecord, { isLoading: createLoading }] =
    useCreateEventsMutation();
  const [updateRecord, { isLoading: updateLoading }] =
    useUpdateEventsMutation();
  const [uplodaImgFn, { isLoading: uploadLoading }] = useUploadImageMutation();
  const [deleteRec, {isLoading: deleteLoading}] = useDeleteEventMutation()
  const uploadImage = async (e: any) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const formData = new FormData();
        formData.append("image", file);
        const { data } = await uplodaImgFn(formData);
        setRecord((prev: any) => ({
          ...prev,
          image: data?.image_url,
        }));
      } catch (error) {
        console.log(error);
      }
    }
  };
  const addAndEditRecordFn = async (e: any) => {
    e.preventDefault();
    if (recordId) {
    } else {
      const newRecord = {
        title: record.title,
        image: record.image,
        about: "asd",
      };
      try {
        const response = await createRecord(newRecord);
        console.log(response);
        setVisibleModal(false);
        setRecord({
          id: 0,
          title: "",
          image: "",
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const deleteRecord = async (id:any) => {
    try {
      await deleteRec(id).unwrap()
    } catch (error) {
      console.log(error)
    }
  }
  if (isLoading || deleteLoading) return <Loader />;
  return (
    <div className="relative">
      <div className="admin-container pt-8 pb-5 relative">
        <button
          onClick={() => setVisibleModal(true)}
          className="w-[205px] h-[49px] bg-yellowColor text-colorDark text-[20px] font-bold rounded-[10px] ml-auto flex items-center justify-center mb-[17px]"
        >
          Qo'shish
        </button>
      </div>
      <div
        className={`fixed top-0 left-0 w-full h-full z-40 ${
          visibleModal ? "block" : "hidden"
        }`}
        onClick={() => setVisibleModal(false)}
      ></div>
      <form
        onSubmit={addAndEditRecordFn}
        className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[462px] py-[30px] px-[67px] z-50 flex flex-col justify-center gap-y-[35px] bg-yellowColor rounded-3xl transition-all duration-300 delay-75 ease-out ${
          visibleModal ? "visible top-1/2" : "invisible -top-1/2"
        }`}
      >
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

            {record.image && (
              <img
                src={record?.image}
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
            value={record.title}
            onChange={(e) =>
              setRecord((prev) => ({ ...prev, title: e.target.value }))
            }
            className="w-full py-[13px] text-center bg-white/50 rounded-2xl text-[40px] text-colorDark outline-none border-none placeholder:text-colorDark placeholder:text-[40px]"
          />
        </label>
        <button
          type="submit"
          className="w-full py-[13px]  bg-colorDark text-yellowColor text-center text-[40px] rounded-2xl"
        >
          Saqlash
        </button>
      </form>
      <div>
        <div className="w-full flex flex-wrap items-center justify-center gap-x-3 px-3 mb-10">
          {events?.length == 0 && (
            <h2 className="text-4xl mx-auto font-bold text-white">
              Lavhalar topilmadi
            </h2>
          )}
          {events?.map((item: any) => (
            <div
              className="relative w-[250px] h-[250px] border border-yellowColor rounded-3xl inline-block mr-6 last:mr-0"
              key={item.id}
            >
              <img
                src={item?.image}
                alt="image"
                className="w-full h-full object-cover rounded-3xl"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-x-2 justify-center">
                <button
                  onClick={() => setRecordId(item?.id)}
                  className=" w-[60px] h-[60px] bg-colorDark/80 flex items-center justify-center rounded-full "
                >
                  <img
                    src={Upload}
                    alt="upload icon"
                    className="w-[40px] h-[40px]"
                  />
                </button>
                <button onClick={() => deleteRecord(item?.id)} className="w-[60px] h-[60px] bg-yellowColor flex items-center justify-center rounded-full ">
                  <img
                    src={DeleteIcon}
                    alt="upload icon"
                    className="w-[40px] h-[40px]"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Records;
