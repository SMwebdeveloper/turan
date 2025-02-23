import ArrowYellow from "../../../assets/arrow-yellow.png";
const Paginations = () => {
  return (
    <div className="w-full flex items-center justify-center gap-x-2">
      <button className="flex items-center justify-center gap-x-1 opacity-45 text-yellowColor">
        <img src={ArrowYellow} alt="arrow yellow" className="-rotate-180" />
        Previous
      </button>
      <button className="w-[32px] h-[32px] rounded-md text-white bg-yellowColor">
        1
      </button>
      <button className="w-[32px] h-[32px] rounded-md text-white ">2</button>
      <button className="w-[32px] h-[32px] rounded-md text-white ">3</button>
      <button className="w-[32px] h-[32px] rounded-md text-white ">
        ...
      </button>
      <button className="w-[32px] h-[32px] rounded-md text-white ">
        67
      </button>
      <button className="w-[32px] h-[32px] rounded-md text-white ">
        68
      </button>
      <button className="flex items-center justify-center gap-x-1  text-yellowColor">
        Next
        <img src={ArrowYellow} alt="arrow yellow" />
      </button>
    </div>
  );
};

export default Paginations;
