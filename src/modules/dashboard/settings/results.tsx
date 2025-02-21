import Ielts from "../../../assets/ielts.png"
import PenCircle from "../../../assets/pen-circle.png"
const Results = () => {
  return (
    <div className='container mx-auto pt-8 px-14'>
      <button className='w-[205px] h-[49px] bg-yellowColor text-colorDark text-[20px] font-bold rounded-[10px] ml-auto flex items-center justify-center'>Qo'shish</button>
      <div className="grid grid-cols-4">
        <div>
          <img src={Ielts} alt="ielts image" />
        </div>
      </div>
    </div>
  )
}

export default Results