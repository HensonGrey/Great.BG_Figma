import Card from "./components/Card";
import ColorPicker from "./components/ColorPicker";
import {
  Star,
  MessageSquareMore,
  Minus,
  Plus,
  Truck,
  Handbag,
  ChevronLeft,
  ChevronRight,
  HeartHandshake,
  Lightbulb,
  Award,
} from "lucide-react";
import earringsImage from "./assets/images/Rectangle 662.png";

import alternativeEarringImage1 from "./assets/images/Rectangle 666.png";
import alternativeEarringImage2 from "./assets/images/Rectangle 667.png";
import alternativeEarringImage3 from "./assets/images/Rectangle 668.png";
import alternativeEarringImage4 from "./assets/images/Rectangle 669.png";
import similarProduct1 from "./assets/images/IMAGE.png";
import similarProduct2 from "./assets/images/IMAGE1.png";
import similarProduct3 from "./assets/images/IMAGE2.png";
import similarProduct4 from "./assets/images/IMAGE3.png";
import greatBg from "./assets/images/Great.bg.png";
import vectorArrow from "./assets/images/Vector.png";
import Header from "./components/Header";
import SizePicker from "./components/SizePicker";

function App() {
  const sizes = ["S", "M", "L", "XL", "XXL"];

  const alternativeImages = [
    { src: alternativeEarringImage1 },
    { src: alternativeEarringImage2 },
    { src: alternativeEarringImage3 },
    { src: alternativeEarringImage4 },
  ];

  const similarProducts = [
    {
      src: similarProduct1,
      title: "Smart Watch With\nBracelet - Black",
      price: "25,00 лв.",
    },
    {
      src: similarProduct2,
      title: `Ароматна свещ\nFlower bouquet`,
      price: "25,00 лв.",
    },
    {
      src: similarProduct3,
      title: `Илюстрация\nЛястовица`,
      price: "25,00 лв.",
    },
    {
      src: similarProduct4,
      title: `Книга с илюстрации\nМалкият принц`,
      price: "$29.25",
    },
  ];

  const colors = [
    { bgColor: "#ECDECC" },
    { bgColor: "#BBD278" },
    { bgColor: "#BBC1F8" },
    { bgColor: "#FFD3F8" },
    { gradient: "#FFB6B6 50%, #98C185 50%" },
  ];

  return (
    <div className="bg-[#FFFEF4]">
      <Header />

      <main>
        <article className="container mx-auto mt-10 space-y-12">
          {/* Current product */}
          <div className="flex flex-col lg:flex-row gap-8 gap-x-20 items-stretch">
            {/* Left column: images */}
            <section className="flex-1 max-w-[550px] px-4 sm:px-0 flex flex-col gap-8">
              <img
                src={earringsImage}
                alt="Image of a pair of earrings"
                className="w-full h-auto object-cover rounded"
              />
              <div className="w-full flex justify-center flex-wrap lg:grid lg:grid-cols-4 gap-3">
                {alternativeImages.map((item, index) => (
                  <img
                    key={index}
                    src={item.src}
                    alt={`Image ${
                      index + 1
                    } of the earrings from another angle`}
                    className="w-1/3 sm:w-1/4 md:w-1/5 lg:w-full h-auto object-cover aspect-square rounded-sm
                 hover:scale-105 hover:shadow-lg transition-all duration-200 ease-in-out cursor-pointer"
                  />
                ))}
              </div>
            </section>

            {/* Right column: product info */}
            <section className="flex-1 flex flex-col gap-6 mt-4 pr-[15%]">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 md:gap-0">
                <h2 className="font-nexa font-extrabold text-[32px] md:text-[40px] leading-[36px] md:leading-[45px] tracking-[-1%] text-black text-center md:text-left">
                  Обеци Гъбки
                </h2>
                <div className="flex gap-2 justify-center md:justify-end">
                  <button className="flex items-center gap-2 rounded-lg bg-[#FFBD59]/25 py-1 px-2.5 hover:scale-105 hover:bg-[#FFBD59]/40 transition">
                    <Star className="w-4 h-4 text-[#FFBD59]" />
                    <span className="font-inter font-semibold text-sm text-[#FFBD59]">
                      4.8
                    </span>
                  </button>
                  <button className="flex items-center gap-2 rounded-lg bg-[#EFE1F0] py-1 px-2.5 hover:scale-105 hover:bg-[#E0D1E6] transition">
                    <MessageSquareMore className="w-4 h-4 text-[#7B0AD1]" />
                    <span className="font-inter font-semibold text-sm text-[#7B0AD1]">
                      67 Отзива
                    </span>
                  </button>
                </div>
              </div>

              {/* Product details */}
              <div className="flex flex-col gap-2 text-lg text-[#5F6D7E] items-center md:items-start">
                <div className="flex gap-2">
                  <span className="font-bold">Кат. номер:</span>
                  <span className="font-semibold text-black">8418</span>
                </div>

                <div className="flex gap-2">
                  <span className="font-bold">Производител:</span>
                  <span className="font-semibold text-black">
                    Epoque Candle
                  </span>
                </div>

                <p className="text-black leading-7 max-w-md text-center md:text-left">
                  Висящи ефектни обеци гъбки, боядисани с черна матова боя,
                  закачени за кръгчета от моделин. Красив и артистичен акцент
                  във визията на дамите.
                </p>

                <div className="flex gap-2">
                  <span className="font-bold">Материал:</span>
                  <span>месинг, матова черна боя, стоманени щифтове</span>
                </div>

                <div className="flex gap-2">
                  <span className="font-bold">Размер:</span>
                  <span>дължина - 7.5 см</span>
                </div>
              </div>

              {/* Color and size */}
              <div className="flex flex-col gap-6">
                <hr className="border-black/20" />
                <ColorPicker colors={colors} />
                <hr className="border-black/20" />
                <SizePicker sizes={sizes} />
              </div>

              {/* Price and quantity */}
              <div className="flex flex-col items-center lg:items-start gap-4 mt-6">
                {/* Price + quantity */}
                <div className="flex items-center gap-3">
                  <p className="font-inter font-bold text-4xl">30.00лв</p>
                  <div className="flex items-center gap-3">
                    <button className="border-2 border-[#7B0AD1] rounded h-7 w-7 flex items-center justify-center hover:bg-[#7B0AD1]/20 transition cursor-pointer">
                      <Minus color="#7B0AD1" />
                    </button>
                    <span className="font-inter font-medium text-xl text-[#4F4F4F]">
                      2
                    </span>
                    <button className="border-2 border-[#7B0AD1] rounded h-7 w-7 flex items-center justify-center hover:bg-[#7B0AD1]/20 transition cursor-pointer">
                      <Plus color="#7B0AD1" />
                    </button>
                  </div>
                </div>

                {/* Purchase button */}
                <button
                  className="w-fit rounded-lg px-4 py-2 bg-[#7B0AD1] text-white font-semibold
                             mt-4 cursor-pointer transition-all duration-200 ease-in-out 
                           hover:bg-[#8C14E0] hover:scale-105 hover:shadow-lg"
                >
                  Поръчай сега
                </button>
              </div>

              {/* Order/Return */}
              <div className="flex flex-col gap-4 p-4 border border-[#00000033] rounded-lg mt-6 mx-4 lg:mx-0 lg:self-start">
                <div className="flex gap-2 items-start">
                  <Truck color="#7B0AD1" />
                  <div className="flex flex-col">
                    <span className="font-bold text-[#1D364D]">
                      Безплатна доставка над 50лв
                    </span>
                    <a className="text-sm underline text-[#7B0AD1]">
                      Подробности за доставка
                    </a>
                  </div>
                </div>

                <hr className="border-black/20 w-full" />

                <div className="flex gap-2 items-start">
                  <Handbag color="#7B0AD1" />
                  <div className="flex flex-col">
                    <span className="font-bold text-[#1D364D]">
                      Връщане на доставка
                    </span>
                    <p className="text-sm text-[#726C6C]">
                      Безплатна 30-дневна доставка Връщане.
                      <a className="underline text-[#7B0AD1] ml-1">
                        Подробности
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Similar products */}
          <section className="space-y-4 w-full">
            <div className="flex justify-between items-center">
              <h2 className="font-bold">Подобни продукти</h2>
              <div className="flex gap-2">
                <button>
                  <ChevronLeft />
                </button>
                <button>
                  <ChevronRight />
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center justify-content lg:flex-row space-x-28">
              {similarProducts.map((item, index) => (
                <Card
                  key={index}
                  image={item.src}
                  title={item.title}
                  price={item.price}
                />
              ))}
            </div>
          </section>

          {/* How we are different */}
          <section className="space-y-6">
            <div className="flex flex-col items-center">
              <h2 className="font-bold text-xl">С КАКВО СЕ РАЗЛИЧАВА</h2>
              <button>
                <img src={greatBg} alt="GreatBg" />
              </button>
              <img
                src={vectorArrow}
                alt="Downwards/Curved arrow"
                className="mt-2"
              />
            </div>

            <div className="grid grid-cols-3 gap-8 text-center">
              <div className="flex flex-col gap-2 items-center">
                <HeartHandshake className="w-8 h-8" />
                <h3 className="font-semibold">Подкрепа на Занаятчии</h3>
                <p>
                  Ние сме ангажирани с подкрепата на занаятчии, които създават
                  своите произведения с любов и изключително майсторство.
                </p>
              </div>

              <div className="flex flex-col gap-2 items-center">
                <Lightbulb className="w-8 h-8" />
                <h3 className="font-semibold">Уникалност и Креативност</h3>
                <p>
                  Всеки артикул е ръчно изработен, което гарантира, че няма два
                  напълно еднакви продукта. Това прави ПОДАРЪКА уникален.
                </p>
              </div>

              <div className="flex flex-col gap-2 items-center">
                <Award className="w-8 h-8" />
                <h3 className="font-semibold">Високо Качество</h3>
                <p>
                  Ние се ангажираме с предлагането на продукти, които не само
                  изглеждат страхотно, но и са изработени с грижа.
                </p>
              </div>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}

export default App;
