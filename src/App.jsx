import Card from "./components/Card";
import ColorPicker from "./components/ColorPicker";
import {
  Star,
  MessageSquareMore,
  Minus,
  Plus,
  Truck,
  Handbag,
  HeartHandshake,
  Lightbulb,
  Award,
} from "lucide-react";
import earringsImage from "./assets/images/Rectangle 662.png";
import vectorArrow from "./assets/images/arrow.png";
import vectorCurvedArrow from "./assets/images/curvedArrow.png";
import Header from "./components/Header";
import SizePicker from "./components/SizePicker";
import LeftRightChevrons from "./components/LeftRightChevrons";
import FakeReview from "./components/FakeReview";
import { useCarousel } from "./hooks/useCarousel";

import {
  similarProducts,
  fakeReviews,
  alternativeImages,
  colors,
  sizes,
} from "./data/mainPage";

function App() {
  const productCarousel = useCarousel(similarProducts);
  const reviewCarousel = useCarousel(fakeReviews);

  return (
    <div className="bg-[#FFFEF4]">
      <Header />

      <main>
        {/* Product, details, price, similar products */}
        <article className="container mx-auto mt-10 space-y-12">
          {/* Current product */}
          <div className="flex flex-col lg:flex-row gap-8 gap-x-20 items-stretch">
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
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <h2 className="font-nexa font-extrabold text-4xl leading-[65px] tracking-[-1%] text-[#2E3646]">
                Подобни продукти
              </h2>
              <LeftRightChevrons
                className="hidden lg:flex"
                onLeftClick={productCarousel.handlePrev}
                onRightClick={productCarousel.handleNext}
                leftBg={productCarousel.isAtStart ? "#7B0AD138" : "#7B0AD1"}
                rightBg={productCarousel.isAtEnd ? "#7B0AD138" : "#7B0AD1"}
              />
            </div>

            {/* Desktop View */}
            <div className="hidden lg:flex w-full gap-10 justify-between">
              {productCarousel.items.map((item, index) => (
                <Card
                  key={index}
                  image={item.src}
                  title={item.title}
                  price={item.price}
                />
              ))}
            </div>

            {/* Mobile View */}
            <div className="lg:hidden px-4 relative">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{
                    transform: `translateX(-${
                      productCarousel.currentIndex * 100
                    }%)`,
                  }}
                >
                  {productCarousel.items.map((item, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-2">
                      <Card
                        image={item.src}
                        title={item.title}
                        price={item.price}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Dot indicators */}
              <div className="flex justify-center items-center gap-2 mt-6">
                {productCarousel.items.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => productCarousel.goToIndex(index)}
                    className={`rounded-full transition-all duration-300 ${
                      index === productCarousel.currentIndex
                        ? "bg-[#7B0AD1] w-8 h-2"
                        : "bg-gray-300 w-2 h-2 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>

              {/* Navigation */}
              <div className="flex justify-center items-center mt-4">
                <LeftRightChevrons
                  onLeftClick={productCarousel.handlePrev}
                  onRightClick={productCarousel.handleNext}
                  leftBg={productCarousel.isAtStart ? "#7B0AD138" : "#7B0AD1"}
                  rightBg={productCarousel.isAtEnd ? "#7B0AD138" : "#7B0AD1"}
                />
              </div>
            </div>
          </section>

          {/* How we are different */}
          <section className="space-y-6 mt-[5%]">
            <div className="flex flex-col items-center">
              <h2 className="font-bold text-xl">С КАКВО СЕ РАЗЛИЧАВА</h2>
              <button>
                <p>Great.bg</p>
              </button>
              <img
                src={vectorArrow}
                alt="Downwards/Curved arrow"
                className="mt-2"
              />
            </div>

            <div className="flex flex-col lg:flex-row gap-10 mb-[5%]">
              <div className="flex flex-col border-b border-[#00000033] justify-center items-center text-center pb-6 lg:pb-0 lg:items-start lg:text-start lg:border-r lg:border-b-0">
                <HeartHandshake className="w-14 h-14" color="#7B0AD1" />
                <h3 className="font-nexa font-extrabold text-[28px] leading-[72px] tracking-[-0.1%]">
                  Подкрепа на занаятчии
                </h3>
                <p className="font-inter font-extralight text-lg leading-[30px] tracking-[-0.1%]">
                  Ние сме ангажирани с подкрепата на занаятчии, които създават
                  своите произведения с любов и изключително майсторство.
                </p>
              </div>

              <div className="flex flex-col border-b border-[#00000033] justify-center items-center text-center pb-6 lg:pb-0 lg:items-start lg:text-start lg:border-r lg:border-b-0">
                <Lightbulb className="w-14 h-14" color="#7B0AD1" />
                <h3 className="font-nexa font-extrabold text-[28px] leading-[72px] tracking-[-0.1%]">
                  Уникалност и зреативност
                </h3>
                <p className="font-inter font-extralight text-lg leading-[30px] tracking-[-0.1%]">
                  Всеки артикул е ръчно изработен, което гарантира, че няма два
                  напълно еднакви продукта. Това прави подаръка уникален.
                </p>
              </div>

              <div className="flex flex-col justify-center items-center text-center lg:items-start lg:text-start">
                <Award className="w-14 h-14" color="#7B0AD1" />
                <h3 className="font-nexa font-extrabold text-[28px] leading-[72px] tracking-[-0.1%]">
                  Високо качество
                </h3>
                <p className="font-inter font-extralight text-lg leading-[30px] tracking-[-0.1%]">
                  Ние се ангажираме с предлагането на продукти, които не само
                  изглеждат страхотно, но и са изработени с грижа.
                </p>
              </div>
            </div>
          </section>
        </article>

        {/* Fake reviews */}
        <article className="w-full flex flex-col bg-[#C3B2E7] pl-[15%] py-[5%] mt-[15%] gap-12">
          {/* Header */}
          <section className="w-full flex flex-col lg:flex-row justify-center items-center gap-8">
            <div className="flex flex-col lg:flex-row w-full lg:w-1/2 text-center lg:text-start">
              <h2 className="font-nexa font-extrabold text-3xl lg:text-4xl leading-[55px] tracking-[0px]">
                Не взимай само нашето мнение под внимание
              </h2>
              <img
                src={vectorCurvedArrow}
                alt="Curved arrow pointing down"
                className="hidden lg:block"
              />
            </div>
            <LeftRightChevrons
              className="flex h-10 w-full justify-center"
              onLeftClick={reviewCarousel.handlePrev}
              onRightClick={reviewCarousel.handleNext}
              leftBg={reviewCarousel.isAtStart ? "#7B0AD138" : "#7B0AD1"}
              rightBg={reviewCarousel.isAtEnd ? "#7B0AD138" : "#7B0AD1"}
            />
          </section>

          {/* Fake reviews flex */}
          <section className="overflow-hidden">
            {/* Desktop View */}
            <div className="hidden md:flex gap-12 w-[calc(100%+50%)]">
              {reviewCarousel.items.map((item, index) => (
                <div key={index} className="flex-shrink-0 w-[25%]">
                  <FakeReview
                    title={item.title}
                    review={item.review}
                    posterPicture={item.posterPicture}
                    posterName={item.posterName}
                    posterRole={item.posterRole}
                  />
                </div>
              ))}
            </div>

            {/* Mobile View */}
            <div className="md:hidden px-4 relative">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{
                    transform: `translateX(-${
                      reviewCarousel.currentIndex * 100
                    }%)`,
                  }}
                >
                  {reviewCarousel.items.map((item, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <FakeReview
                        title={item.title}
                        review={item.review}
                        posterPicture={item.posterPicture}
                        posterName={item.posterName}
                        posterRole={item.posterRole}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Dot indicators */}
              <div className="flex justify-center items-center gap-2 mt-6">
                {reviewCarousel.items.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => reviewCarousel.goToIndex(index)}
                    className={`rounded-full transition-all duration-300 ${
                      index === reviewCarousel.currentIndex
                        ? "bg-[#7B0AD1] w-8 h-2"
                        : "bg-white/50 w-2 h-2 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}

export default App;
