import { Loader } from "../../components"
import { useGetResultsQuery } from "../../service/user"


const Index = () => {
  const {data, isLoading} = useGetResultsQuery(null)

  if(isLoading) return <Loader/>
  return (
    <div className="py-[30px] lg:py-[50px]">
      {!data?.results?.length && !isLoading ? (
        <h2 className="text-4xl text-white text-center font-medium">
          Natijalar topilmadi
        </h2>
      ) : (
        ""
      )}
      <div className="flex flex-wrap gap-[30px] justify-center grid-cols-2 w-[90%] m-auto">
        {data?.results?.map((item: any) => (
          <div key={item.id}>
            <div className="flex flex-col gap-[5px] w-[154px] lg:w-[240px]">
              <img src={item?.sertificate} alt="img" className="w-[300px] h-[250px] object-cover"/>
              <div className="bg-[#F8B300] flex justify-center items-center rounded-[7px] text-[24px] text-[#1E063A]">
                {item?.full_name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Index
