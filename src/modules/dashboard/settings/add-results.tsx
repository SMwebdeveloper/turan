import Ielts from "../../../assets/ielts.png"
import Upload from "../../../assets/upload.png"
const AddResults = () => {
  return (
    <div className="max-w-[1220px] w-full mx-auto pt-8 pb-5 px-10">
      <form className="mx-auto w-[650px] py-[40px] flex flex-col items-center justify-center bg-yellowColor rounded-xl">
        <label htmlFor="uploadeImage" className="mb-[42px]">
          <div className="w-[300px] relative h-[325px] object-cover border-[10px] border-[rgba(255,255,255,.5)] rounded-[10px]">
            <input
              id="uloadImage"
              type="file"
              accept="image/png, image/jpg, image/gif"
              className="hidden"
            />
            <img
              src={Ielts}
              alt="ielts image"
              className="w-full h-full object-cover "
            />

            <button className="absolute w-[93px] h-[93px] bg-colorDark/80 flex items-center justify-center rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <img
                src={Upload}
                alt="upload icon"
                className="w-[60px] h-[60px]"
              />
            </button>
          </div>
        </label>
        <label className="w-[447px] mb-4">
          <h4 className="text-xl text-colorDark/50">To'liq Ism</h4>
          <input
            type="text"
            className="w-full bg-white/50 h-[73px] text-[28px] text-colorDark font-bold rounded-xl outline-none border-none px-4"
          />
        </label>

        <label className="w-[447px] flex items-start justify-between mb-[41px]">
          <div>
            <h4 className="text-xl text-colorDark/50">Listening</h4>
            <input
              type="text"
              className="w-[174px] bg-white/50 h-[73px] text-[28px] text-colorDark font-bold rounded-xl outline-none border-none px-4"
            />
          </div>
          <div>
            <h4 className="text-xl text-colorDark/50">Writing</h4>
            <input
              type="text"
              className="w-[174px] bg-white/50 h-[73px] text-[28px] text-colorDark font-bold rounded-xl outline-none border-none px-4"
            />
          </div>
        </label>
        <label className="w-[447px] flex items-start justify-between mb-[41px]">
          <div>
            <h4 className="text-xl text-colorDark/50">Reading</h4>
            <input
              type="text"
              className="w-[174px] bg-white/50 h-[73px] text-[28px] text-colorDark font-bold rounded-xl outline-none border-none px-4"
            />
          </div>
          <div>
            <h4 className="text-xl text-colorDark/50">Speaking</h4>
            <input
              type="text"
              className="w-[174px] bg-white/50 h-[73px] text-[28px] text-colorDark font-bold rounded-xl outline-none border-none px-4"
            />
          </div>
        </label>
        <button className="w-[299px] mx-auto bg-white/50 h-[73px] text-[28px] text-colorDark font-bold rounded-xl outline-none border-none px-4">
          Saqlash
        </button>
      </form>
    </div>
  );
};

export default AddResults;
