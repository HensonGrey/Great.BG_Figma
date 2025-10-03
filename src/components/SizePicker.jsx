import { useState } from "react";

const SizePicker = ({ sizes }) => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="flex flex-col gap-6 mb-4 items-center lg:items-start">
      <p className="font-nexa font-bold text-2xl leading-[100%] tracking-[0%]">
        Изберете размер
      </p>
      <div className="flex gap-2 lg:gap-4 justify-center overflow-x-auto">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => setSelected(size)}
            className={`flex items-center gap-2 px-2 py-1.5 rounded-lg transition-colors duration-200 cursor-pointer
          ${
            selected === size
              ? "bg-[#7B0AD11F] text-[#7B0AD1]"
              : "bg-[#F3F3F3] text-[#726C6C]"
          }`}
          >
            <span
              className={`w-4 h-4 rounded-full border transition-colors duration-200 p-1
            ${
              selected === size
                ? "bg-[#7B0AD1]"
                : "bg-transparent border-[#726C6C]"
            }`}
            ></span>
            <span className="font-inter font-medium text-sm leading-[100%] tracking-[0%]">
              {size}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizePicker;
