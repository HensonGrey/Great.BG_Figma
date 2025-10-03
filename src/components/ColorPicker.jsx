import { useState } from "react";
import { Check } from "lucide-react";

export default function ColorPicker({ colors }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <div className="flex flex-col gap-6 items-center lg:items-start">
      <p className="font-nexa font-bold text-2xl leading-[100%] tracking-[0%]">
        Изберете цвят
      </p>

      <div className="flex space-x-4">
        {colors.map((color, index) => {
          const backgroundStyle = color.gradient
            ? `linear-gradient(to bottom, ${color.gradient})`
            : color.bgColor;

          const selectedClasses =
            selectedIndex === index
              ? "ring-2 ring-offset-2 ring-[#7B0AD1] brightness-110"
              : "";

          return (
            <label key={index} className="relative cursor-pointer">
              <input
                type="radio"
                name="color"
                value={index}
                className="sr-only"
                checked={selectedIndex === index}
                onChange={() => setSelectedIndex(index)}
              />

              <span
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 ${selectedClasses}`}
                style={{ background: backgroundStyle }}
              >
                {selectedIndex === index && (
                  <Check className="w-5 h-5 text-[#7B0AD1]" />
                )}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
}
