import React, { useState } from "react";
import {
  useCreateStatisticsMutation,
  useDeleteStatisticsMutation,
  useGetStatisticsQuery,
} from "../../../service/admin";
import DeleteIcon from "../../../assets/delete-icon.png"
import { Loader } from "../../../components";

const Statistics = () => {
  const [addData, setAddData] = useState({
    counter: "",
    name: "",
  });

  const [validate, setValidate] = useState(false);
  const { data: statistics, isLoading } = useGetStatisticsQuery(null);
  const [addStatistics, { isLoading: createLoading }] =
    useCreateStatisticsMutation();
  const [deleteStatistics, {isLoading: deleteLoading}]= useDeleteStatisticsMutation()

  const handleDelete = async (id:any) => {
    try {
      await deleteStatistics(id)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!addData.counter && !addData.name) {
      setValidate(true);
      setTimeout(() => setValidate(false), 3000);
    } else {
      try {
        const newData = {
          counter: Number(addData.counter),
          name: addData.name,
        };
        await addStatistics(newData).unwrap();
        setAddData(() => ({ counter: "", name: "" }));
      } catch (error) {
        console.log(error);
      }
    }
  };
  if(isLoading || deleteLoading) return <Loader />
  return (
    <div className="admin-container pt-11">
      <div className="w-full mx-auto mb-8 h-[137px] flex flex-col items-center justify-center rounded-2xl bg-yellowColor">
        <h2 className="text-5xl font-bold text-colorDark">
          BIZNING STATISTIKA
        </h2>
        <h6 className="text-[40px] text-colorDark/80">
          biz sizga eng yaxshi natijalarga erishishingizga
        </h6>
      </div>

      <div className="w-full flex flex-wrap items-center gap-y-8 gap-x-[4%] mb-12">
        {statistics?.map((item: any) => (
          <div
            key={item?.id}
            className="w-[199px] h-[193px] relative rounded-[30px] bg-white flex flex-col items-center justify-center"
          >
            <button onClick={() => handleDelete(item?.id)} className="absolute top-3 right-3">
              <img src={DeleteIcon} alt="delete icon" className="w-7"/>
            </button>
            <h4 className="text-5xl font-bold text-colorDark">
              {item.counter}
            </h4>
            <h6 className="text-2xl font-bold text-center text-colorDark/50 ">
              {item.name}
            </h6>
          </div>
        )) }
      </div>

      <form
        onSubmit={handleSubmit}
        className="mx-auto w-[462px] py-[71px] px-[67px] flex flex-col justify-center gap-y-[35px] bg-yellowColor rounded-3xl"
      >
        <label className="w-full ">
          <h4 className="text-base text-white/50 font-bold mb-2">Raqam</h4>
          <input
            type="number"
            value={addData.counter}
            onChange={(e) =>
              setAddData((prev: any) => ({ ...prev, counter: e.target.value }))
            }
            className="w-full py-[13px] text-center bg-white/50 rounded-2xl text-[40px] text-colorDark outline-none border-none"
          />
        </label>
        <label className="w-full ">
          <h4 className="text-base text-white/50 font-bold mb-2">Nomi</h4>
          <input
            type="text"
            value={addData.name}
            onChange={(e) =>
              setAddData((prev: any) => ({ ...prev, name: e.target.value }))
            }
            className="w-full py-[13px] text-center bg-white/50 rounded-2xl text-[40px] text-colorDark outline-none border-none"
          />
        </label>
        {validate && (
          <p className="text-center  text-red-600 text-xl font-medium">
            Iltimos malumotlarni kiriting
          </p>
        )}
        <button className="w-full py-[13px]  bg-colorDark text-yellowColor text-center text-[40px] rounded-2xl">
          {createLoading ? "Loading..." : "Saqlash"}
        </button>
      </form>
    </div>
  );
};

export default Statistics;
