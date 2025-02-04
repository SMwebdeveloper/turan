import Logo from '../../assets/logo.png'
import Fasebook from '../../assets/fasebook.png'
import Insta from '../../assets/insta.png'
import Telegram from '../../assets/tg.png'
import Tel from '../../assets/tel.png'
import Location from "../../assets/manzil.png"
const messager = [
  {id:1, img:Fasebook},
  {id:2, img:Insta},
  {id:3, img:Telegram},
  {id:4, img:Tel},
]

const Index = () => {
  return (
    <div className="py-[30px] lg:pt-[60px]">
      <div className=" w-[90%] m-auto border-t-[2px] mt-[10px] border-[white] py-[30px] grid sm:grid-cols-2 sm:gap-[50px] lg:grid-cols-3 gap-[30px]">
        <div className='flex flex-col gap-[15px] justify-between'>


          <div className='flex items-center  gap-[10px]'>
          <img src={Logo} alt="" className='w-[35px]' />
          <h1 className='text-[#F8B300] text-[26px] font-medium'>TURON</h1>
          </div>

          <p className='text-[#FFFFFF99]'>Oʻzbekistonning eng yuqori turk tili oʻqituvchilari uyi, xalqaro turk tili sertifikatiga ega oʻqituvchilar soni boʻyicha yetakchi. Biz barcha darajadagi talabalarga ilgʻor, talabaga yoʻnaltirilgan
          TYS tayyorgarligini taqdim  etamiz.</p>

         <div className='flex gap-[10px]'>
         {messager.map((item)=> (
            
            <div key={item.id} className='bg-[#F8B300] p-4 rounded-[10px]'>
              <img src={item.img} alt="" />
            </div>
          
        ))}
         </div>
        </div>


        <div className='flex flex-col gap-[30px] md:justify-between'>
          <h1 className='text-[#F8B300] text-[26px] font-medium'>BOG’LANISH</h1>
          <div className='flex flex-col gap-[10px]'>
            <div className='py-[5px] px-[10px] bg-[#F8B300] flex items-center gap-[10px] rounded-[7px]'>
              <img src={Tel} alt="" />
              <h1 className='text-[20px] text-[white]'>+998 (90) 584-12-23</h1>
            </div>
            <div className='py-[5px] px-[10px] bg-[#F8B300] flex items-center gap-[10px] rounded-[7px]'>
              <img src={Tel} alt="" />
              <h1 className='text-[20px] text-[white]'>+998 (90) 584-12-23</h1>
            </div>
            <div className='py-[5px] px-[10px] bg-[#F8B300] flex items-center gap-[10px] rounded-[7px]'>
              <img src={Telegram} alt="" />
              <h1 className='text-[20px] text-[white]'>@turon_academy</h1>
            </div>
            <div className='py-[5px] px-[10px] bg-[#F8B300] flex justify-center gap-[10px] rounded-[7px]'>
              <h1 className='text-[20px] text-[#1E063A]'>Biz bilan bog’laning</h1>
            </div>
          </div>
        </div>


        <div className='flex flex-col gap-[30px]'>
          <h1 className='text-[#F8B300] text-[26px] font-medium'>MANZIL</h1>
          <div className='flex flex-col gap-[10px]'>
            <h1 className='text-[#F8B300] text-[18px]'>Farg ‘ona sh, A.Yusupov ko’chasi 206 uy</h1>
            <img src={Location} alt="" />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Index
