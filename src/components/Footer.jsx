import { Mail, MapPin, Phone } from "lucide-react";
import logo from "../assets/images/Isolation_Mode.png";

const Footer = () => {
  return (
    <footer className="px-4 sm:px-[5%] py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* logo and socials */}
      <div className="flex flex-col gap-6 items-center sm:items-start text-center sm:text-left">
        <div className="flex items-center gap-4 justify-center sm:justify-start">
          <img src={logo} alt="Logo of the website" className="w-12 sm:w-16" />
          <h2 className="font-nexa font-extrabold text-3xl sm:text-4xl leading-[22px] text-[#2E3646]">
            Great.bg
          </h2>
        </div>

        <p className="font-inter text-base sm:text-lg leading-6 sm:leading-8 text-[#5F6D7E]">
          Generate outside the box thinking with the possibility to targtet the
          low.
        </p>

        {/* social icons */}
        <div className="flex gap-4 sm:gap-8 justify-center sm:justify-start">
          <img
            src="https://cdn.simpleicons.org/facebook"
            alt="Facebook"
            className="w-6 h-6 sm:w-8 sm:h-8"
          />
          <img
            src="https://cdn.simpleicons.org/instagram"
            alt="Instagram"
            className="w-6 h-6 sm:w-8 sm:h-8"
          />
          <img
            src="https://cdn.simpleicons.org/linux"
            alt="Linux"
            className="w-6 h-6 sm:w-8 sm:h-8"
          />
          <img
            src="https://cdn.simpleicons.org/youtube"
            alt="YouTube"
            className="w-6 h-6 sm:w-8 sm:h-8"
          />
        </div>
      </div>

      {/* heart shaped links across the website */}
      <div className="col-span-1 sm:col-span-2 w-full flex flex-col sm:flex-row gap-8 sm:gap-16 justify-center text-center sm:text-left">
        <div className="flex flex-col gap-4 sm:gap-6">
          <strong className="font-inter font-extrabold text-xl sm:text-2xl leading-[30px] text-[#2E3646]">
            Продукти
          </strong>
          <p className="font-inter text-base sm:text-xl text-[#5F6D7E]">
            Картички
          </p>
          <p className="font-inter text-base sm:text-xl text-[#5F6D7E]">Чаши</p>
          <p className="font-inter text-base sm:text-xl text-[#5F6D7E]">
            Картини
          </p>
          <p className="font-inter text-base sm:text-xl text-[#5F6D7E]">
            Играчки
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:gap-6">
          <p className="font-inter text-base sm:text-xl text-[#5F6D7E]">
            Бижута
          </p>
          <p className="font-inter text-base sm:text-xl text-[#5F6D7E]">
            Текстили
          </p>
          <p className="font-inter text-base sm:text-xl text-[#5F6D7E]">
            Декорации
          </p>
          <p className="font-inter text-base sm:text-xl text-[#5F6D7E]">
            Други
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:gap-6">
          <strong className="font-inter font-extrabold text-xl sm:text-2xl leading-[30px] text-[#2E3646]">
            Полезни линкове
          </strong>
          <p className="font-inter text-base sm:text-xl text-[#5F6D7E]">
            Доставка
          </p>
          <p className="font-inter text-base sm:text-xl text-[#5F6D7E]">
            Моят профил
          </p>
          <p className="font-inter text-base sm:text-xl text-[#5F6D7E]">
            Срокове
          </p>
          <p className="font-inter text-base sm:text-xl text-[#5F6D7E]">
            Общи условия
          </p>
        </div>
      </div>

      {/* contacts */}
      <div className="flex flex-col gap-4 sm:gap-6 items-center sm:items-start text-center sm:text-left">
        <p className="font-inter font-extrabold text-xl sm:text-2xl text-[#2E3646]">
          Контакти
        </p>
        <div className="flex gap-2 sm:gap-4 items-center">
          <MapPin />
          <p className="font-inter text-base sm:text-xl text-[#5F6D7E]">
            Poligona, bl.43, ent.1-Offices, Office 5Sofia 1750, Bulgaria
          </p>
        </div>
        <div className="flex gap-2 sm:gap-4 items-center">
          <Mail />
          <p className="font-inter text-base sm:text-xl text-[#5F6D7E]">
            +359 886 299 300
          </p>
        </div>
        <div className="flex gap-2 sm:gap-4 items-center">
          <Phone />
          <p className="font-inter text-base sm:text-xl text-[#5F6D7E]">
            office@ada-soft.bg
          </p>
        </div>
      </div>

      {/* Subfooter */}
      <div className="col-span-1 sm:col-span-4 mt-6 border-t border-gray-300 pt-4 flex flex-col sm:flex-row justify-between text-center sm:text-left text-gray-500 text-sm gap-2">
        <p className="font-inter text-base sm:text-lg">
          © 2023 Great.bg. All rights reserved.
        </p>
        <p className="font-inter text-base sm:text-lg">
          Made with love and code by{" "}
          <span className="font-inter font-semibold">Fundamental Studio</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
