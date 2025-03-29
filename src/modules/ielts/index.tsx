import Img from "../../assets/ielts.png"
import { Loader } from "../../components"
import { useGetResultsQuery } from "../../service/user"
const cards = [
  {id:1, img:Img , name:'Muhriddin'},
  {id:2, img:Img , name:'Muhriddin'},
  {id:3, img:Img , name:'Muhriddin'},
  {id:4, img:Img , name:'Muhriddin'},
  {id:5, img:Img , name:'Muhriddin'},
  {id:6, img:Img , name:'Muhriddin'},
  {id:7, img:Img , name:'Muhriddin'},
  {id:8, img:Img , name:'Muhriddin'},
  {id:9, img:Img , name:'Muhriddin'},
  {id:10, img:Img, name:'Muhriddin'},
]

const Index = () => {
  const {data, isLoading} = useGetResultsQuery(null)

  if(isLoading) return <Loader/>
  return (
    <div className="py-[30px] lg:py-[50px]">
        <div className="flex flex-wrap gap-[30px] justify-center grid-cols-2 w-[90%] m-auto">
        {data?.results?.map((item:any)=>(
        <div key={item.id}>
          <div className="flex flex-col gap-[5px] w-[154px] lg:w-[240px]">
            <img src={item?.sertificate} alt="img" />
            <div className="bg-[#F8B300] flex justify-center items-center rounded-[7px] text-[24px] text-[#1E063A]">
            {item?.full_name}
            </div>
          </div>
        </div>
      ))}
        </div>
    </div>
  )
}

export default Index
