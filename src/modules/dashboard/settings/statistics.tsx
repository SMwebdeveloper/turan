
const Statistics = () => {
  return (
    <div className="max-w-[1220px] w-full mx-auto px-14 pt-11">
      <div className="w-full mx-auto mb-8 h-[137px] flex flex-col items-center justify-center rounded-2xl bg-yellowColor">
        <h2 className="text-5xl font-bold text-colorDark">
          BIZNING STATISTIKA
        </h2>
        <h6 className="text-[40px] text-colorDark/80">
          biz sizga eng yaxshi natijalarga erishishingizga
        </h6>
      </div>

      <div className="w-full flex flex-wrap items-center justify-between mb-12">
        <div className="w-[199px] h-[193px] rounded-[30px] bg-white flex flex-col items-center justify-center">
          <h4 className="text-5xl font-bold text-colorDark">1000+</h4>
          <h6 className="text-2xl font-bold text-colorDark/50 ">o'quvchilar</h6>
        </div>
        <div className="w-[199px] h-[193px] rounded-[30px] bg-white flex flex-col items-center justify-center">
          <h4 className="text-5xl font-bold text-colorDark">1000+</h4>
          <h6 className="text-2xl font-bold text-colorDark/50 ">o'quvchilar</h6>
        </div>
        <div className="w-[199px] h-[193px] rounded-[30px] bg-white flex flex-col items-center justify-center">
          <h4 className="text-5xl font-bold text-colorDark">1000+</h4>
          <h6 className="text-2xl font-bold text-colorDark/50 ">o'quvchilar</h6>
        </div>
        <div className="w-[199px] h-[193px] rounded-[30px] bg-white flex flex-col items-center justify-center">
          <h4 className="text-5xl font-bold text-colorDark">1000+</h4>
          <h6 className="text-2xl font-bold text-colorDark/50 ">o'quvchilar</h6>
        </div>
        <div className="w-[199px] h-[193px] rounded-[30px] bg-white flex flex-col items-center justify-center">
          <h4 className="text-5xl font-bold text-colorDark">1000+</h4>
          <h6 className="text-2xl font-bold text-colorDark/50 ">o'quvchilar</h6>
        </div>
      </div>

      <form className="mx-auto w-[462px] py-[71px] px-[67px] flex flex-col justify-center gap-y-[35px] bg-yellowColor rounded-3xl">
        <label className="w-full ">
          <h4 className="text-base text-white/50 font-bold mb-2">Raqam</h4>
          <input
            type="text"
            className="w-full py-[13px] text-center bg-white/50 rounded-2xl text-[40px] text-colorDark outline-none border-none"
          />
        </label>
        <label className="w-full ">
          <h4 className="text-base text-white/50 font-bold mb-2">Nomi</h4>
          <input
            type="text"
            className="w-full py-[13px] text-center bg-white/50 rounded-2xl text-[40px] text-colorDark outline-none border-none"
          />
        </label>
        <button className="w-full py-[13px]  bg-colorDark text-yellowColor text-center text-[40px] rounded-2xl">Saqlash</button>
      </form>
    </div>
  );
}

export default Statistics