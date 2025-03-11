import React, { useState } from "react";
import { useCreateStatisticsMutation, useGetStatisticsQuery } from "../../../service";
import { Loader } from "../../../components";

const Statistics = () => {
  const [addData, setAddData] = useState({
    counter: 0,
    name: ""
  })

  const [validate, setValidate] = useState(false)
  const {data:statistics, isLoading} = useGetStatisticsQuery(null)
  const [addStatistics, {isLoading: createLoading}] = useCreateStatisticsMutation()

  const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault()
    if(!addData.counter && !addData.name) {
      setValidate(true)
      setTimeout(() => setValidate(false), 3000)
    } else {
      try {
        const response = await addStatistics(addData).unwrap()
      } catch (error) {
        console.log(error)
      }
    }
  }
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

      <div className="w-full flex flex-wrap items-center gap-y-4 justify-between mb-12">
        {isLoading && <Loader />}
        {statistics?.map((item: any) => (
          <div
            key={item?.id}
            className="w-[199px] h-[193px] rounded-[30px] bg-white flex flex-col items-center justify-center"
          >
            <h4 className="text-5xl font-bold text-colorDark">
              {item.counter}
            </h4>
            <h6 className="text-2xl font-bold text-center text-colorDark/50 ">
              {item.name}
            </h6>
          </div>
        ))}
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
}

export default Statistics