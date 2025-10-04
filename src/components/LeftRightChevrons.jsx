import { ChevronLeft, ChevronRight } from "lucide-react";

const LeftRightChevrons = ({
  className = "",
  onLeftClick = () => {},
  onRightClick = () => {},
  leftBg = "#7B0AD138",
  rightBg = "#7B0AD1",
}) => {
  return (
    <div className={`flex gap-2 ${className}`}>
      <button
        onClick={onLeftClick}
        className={`flex justify-center items-center bg-[${leftBg}] shadow-[0px_4.8px_4.8px_0px_#0C046633] p-2.5 rounded-full cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out`}
      >
        <ChevronLeft color="#FFFFFF" />
      </button>

      <button
        onClick={onRightClick}
        className={`flex justify-center items-center bg-[${rightBg}] p-2.5 rounded-full cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out`}
      >
        <ChevronRight color="#FFFFFF" />
      </button>
    </div>
  );
};

export default LeftRightChevrons;
