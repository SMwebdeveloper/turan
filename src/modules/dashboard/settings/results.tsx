import { Link } from "react-router-dom";
import PenCircle from "../../../assets/pen-circle.png";
import {
  useDeleteResultsMutation,
  useGetResultsQuery,
} from "../../../service/admin";
import { Loader } from "../../../components";
import DeleteIcon from "../../../assets/delete-icon.png";
const Results = () => {
  const { data: results, isLoading } = useGetResultsQuery(null);
  const [deleteResults, { isLoading: deleteLoading }] =
    useDeleteResultsMutation();
  const handleDeleteResult = async (id: any) => {
    try {
      await deleteResults(id);
    } catch (error) {
      console.log(error);
    }
  };
  if (isLoading || deleteLoading) return <Loader />;
  return (
    <div className="admin-container pt-8 pb-5">
      <Link
        to={"/admin/settings/add-results"}
        className="w-[205px] h-[49px] bg-yellowColor text-colorDark text-[20px] font-bold rounded-[10px] ml-auto flex items-center justify-center mb-14"
      >
        Qo'shish
      </Link>
      <div className="w-full flex flex-wrap items-center justify-center gap-x-[30px] gap-y-[54px] mb-9">
        {results?.length == 0 && (
          <h2 className="text-4xl font-bold text-white">Natijalar topilmadi</h2>
        )}
        {results &&
          results.map((item: any) => (
            <div key={item.id} className=" w-[205px]">
              <div className="relative w-full mb-[3px]">
                <img
                  src={item?.sertificate}
                  alt="ielts image"
                  className="w-full h-[284px] "
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-x-2">
                  <Link
                    to={`/admin/settings/edit-result/${item.id}`}
                    className="w-[65px] h-[65px] bg-colorDark rounded-full flex items-center justify-center"
                  >
                    <img
                      src={PenCircle}
                      alt="pen circle"
                      className="w-[49px] h-[49px]"
                    />
                  </Link>
                  <button
                    onClick={() => handleDeleteResult(item.id)}
                    className="w-[65px] h-[65px] bg-colorDark rounded-full flex items-center justify-center"
                  >
                    <span className="flex items-center justify-center bg-yellowColor w-[50px] h-[50px] rounded-full">
                      <img
                        src={DeleteIcon}
                        alt="delete icon"
                        className="w-[40px] h-[40px]"
                      />
                    </span>
                  </button>
                </div>
              </div>
              <button className="bg-yellowColor w-full h-[49px] text-center rounded-md font-bold">
                {item?.full_name}
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Results;
