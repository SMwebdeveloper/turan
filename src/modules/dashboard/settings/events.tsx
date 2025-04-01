import { useEffect, useState } from "react";
import Upload from "../../../assets/upload.png";
import DeleteIcon from "../../../assets/delete-icon.png";
import {
  useCreateEventsMutation,
  useDeleteEventMutation,
  useGetEventByIdQuery,
  useGetEventsQuery,
  useUpdateEventsMutation,
} from "../../../service/admin";
import { AddEvents, EditEvents, Loader } from "../../../components";
const Events = () => {
  const [visibleModal, setVisibleModal] = useState(false);
  const [visibleEditModal, setVisibleEditModal] = useState(false);
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
  const [deleteRec, { isLoading: deleteLoading }] = useDeleteEventMutation();

  const addAndEditRecordFn = async (e: any) => {
    e.preventDefault();
    if (recordId) {
      
      try {
        const updateRecordData = await updateRecord(record);
        setVisibleEditModal(false)
        setRecordId(0)
      } catch (error) {
        console.log(error);
      }
    } else {
      const newRecord = {
        title: record.title,
        image: record.image,
        about: "asd",
      };
      try {
        const response = await createRecord(newRecord);
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

  const deleteRecord = async (id: any) => {
    try {
      await deleteRec(id).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (event) {
      setRecord({
        id: event?.id,
        title: event?.title,
        image: event?.image,
      });
    }
  }, [event]);
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
          visibleModal || visibleEditModal ? "block" : "hidden"
        }`}
        onClick={() => {
          setVisibleModal(false);
          setVisibleEditModal(false);
        }}
      ></div>
      <AddEvents
        visibleModal={visibleModal}
        event={record}
        setEvent={(e:any) => setRecord(e)}
        addEvent={addAndEditRecordFn}
        loading={createLoading}
        closeModal={() => setVisibleModal(false)}
      />
      <EditEvents
        visibleModal={visibleEditModal}
        loading={updateLoading}
        eventLoading={singleLoading}
        editEvent={addAndEditRecordFn}
        event={record}
        setEvent={(e:any) => setRecord(e)}
        closeModal={() => {
          setVisibleEditModal(false);
          setRecord({ id: 0, title: "", image: "" });
        }}
      />
      <div>
        <div className="w-full flex flex-wrap items-center justify-center gap-3 px-3 mb-10">
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
                  onClick={() => {
                    setRecordId(item?.id);
                    setVisibleEditModal(true);
                  }}
                  className=" w-[60px] h-[60px] bg-colorDark/80 flex items-center justify-center rounded-full "
                >
                  <img
                    src={Upload}
                    alt="upload icon"
                    className="w-[40px] h-[40px]"
                  />
                </button>
                <button
                  onClick={() => deleteRecord(item?.id)}
                  className="w-[60px] h-[60px] bg-yellowColor flex items-center justify-center rounded-full "
                >
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

export default Events;
