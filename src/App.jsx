import { useState } from "react";
import Card from "./components/Card";
import {
  Search,
  ShoppingBag,
  User,
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
import logo from "./assets/images/Isolation_Mode.png";
import alternativeEarringImage1 from "./assets/images/Rectangle 666.png";
import alternativeEarringImage2 from "./assets/images/Rectangle 667.png";
import alternativeEarringImage3 from "./assets/images/Rectangle 668.png";
import alternativeEarringImage4 from "./assets/images/Rectangle 669.png";
import similarProduct1 from "./assets/images/IMAGE.png";
import similarProduct2 from "./assets/images/IMAGE(1).png";
import similarProduct3 from "./assets/images/IMAGE(2).png";
import similarProduct4 from "./assets/images/IMAGE(3).png";
import greatBg from "./assets/images/Great.bg.png";
import vectorArrow from "./assets/images/Vector.png";

function App() {
  const sizes = ["S", "M", "L", "XL", "XXL"];

  const navbarListElements = [
    { text: "Продукти", bold: true },
    { text: "Блог" },
    { text: "Специален допир" },
    { text: "Партньори" },
    { text: "Корпоративни клиенти" },
    { text: "Контакти" },
  ];

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

  const [selected, setSelected] = useState(null);

  return (
    <div>
      <header>
        <nav className="flex">
          {/* company logo and name */}
          <div className="flex">
            <img
              src={logo}
              alt="Company Logo"
              className="h-9 w-6 md:h-[44px] md:w-[34px] transition-transform duration-200 hover:scale-110 cursor-pointer"
            />
            <p className="font-bold font-nexa text-xl md:text-[35px] text-[#2E3646] hover:text-blue-500 cursor-pointer transition-colors duration-200 tracking-[-0.1%]">
              Great.bg
            </p>
          </div>

          {/* navbar bulk */}
          <ul className="flex">
            {navbarListElements.map((item, index) => (
              <li key={index} className="">
                {item.text}
              </li>
            ))}
          </ul>

          <div>
            <Search />
            <input type="text" placeholder="Търси тук..." className="" />
          </div>

          <button className="relative transition-transform duration-200 hover:scale-110">
            <ShoppingBag className="w-6 h-6 text-gray-800 cursor-pointer" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full">
              1
            </span>
          </button>

          <button className="transition-transform duration-200 hover:scale-110">
            <User className="w-6 h-6 text-gray-800 cursor-pointer" />
          </button>
        </nav>
      </header>

      <main>
        <article>
          {/* selected product, description and price */}
          <section>
            <img src={earringsImage} />

            <div className="flex">
              {alternativeImages.map((item, index) => (
                <img
                  key={index}
                  src={item.src}
                  alt={`Image ${index + 1} of the earrings from another angle`}
                />
              ))}
            </div>
          </section>

          {/*Selected item info */}
          <section>
            <div>
              <div className="flex">
                <h1>Обеци Гъбки</h1>
                <button>
                  <Star />
                  <p>4.8</p>
                </button>
                <button>
                  <MessageSquareMore />
                  <p>67 Отзива</p>
                </button>
              </div>
              <div>
                <h2>
                  Кат. номер: <b>8418</b>
                </h2>
                <h2>
                  Производител: <b>Epoque Candle</b>
                </h2>
                <p>
                  Висящи ефектни обеци гъбки, боядисани с черна матова боя,
                  закачени за кръгчета от моделин. Красив и артистичен акцент
                  във визията на дамите.
                </p>
                <p>
                  <b>Материал:</b>
                  месинг, матова черна боя, стоманени щифтове
                </p>
                <p>
                  <b>Размер:</b>
                  дължина - 7.5 см
                </p>
              </div>
              <div>
                <b>Изберете цвят</b>
                <div className="flex space-x-3">
                  {/* Red */}
                  <label className="relative cursor-pointer">
                    <input
                      type="radio"
                      name="color"
                      value="red"
                      className="peer sr-only"
                    />
                    <span
                      className="block w-8 h-8 rounded-full bg-red-500
                       peer-checked:ring-2 peer-checked:ring-offset-2 peer-checked:ring-red-600"
                    ></span>
                  </label>
                </div>
              </div>
              <div>
                <b>Изберете размер</b>
                <div className="flex gap-4">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelected(size)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-colors duration-200
              ${
                selected === size
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white text-gray-800 border-gray-300"
              }
                        `}
                    >
                      <span
                        className={`w-4 h-4 rounded-full border transition-colors duration-200
                ${
                  selected === size
                    ? "bg-white"
                    : "bg-transparent border-gray-400"
                }
              `}
                      ></span>
                      <span className="font-semibold">{size}</span>
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <b>30.00лв</b>
                <button>
                  <Minus />
                </button>
                <p>2</p>
                <button>
                  <Plus />
                </button>
              </div>
              <button>
                <p>Поръчай сега</p>
              </button>
            </div>

            {/* Order/Return section */}
            <div>
              <div>
                <Truck />
                <b>Безплатна доставка над 50лв</b>
                <a>Подробности за доставка</a>
              </div>

              <div>
                <Handbag />
                <b>Връщане на доставка</b>
                <p>
                  Безплатна 30-дневна доставка Връщане.<a>Подробности</a>
                </p>
              </div>
            </div>
          </section>

          {/* Similar products info */}
          <section>
            <div>
              <h2>
                <b>Подобни продукти</b>
              </h2>

              <div>
                <button>
                  <ChevronLeft />
                </button>
                <button>
                  <ChevronRight />
                </button>
              </div>
            </div>

            {/* Similar products */}
            <div>
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

          {/* How we are different*/}
          <section>
            {/* Section title thingy */}
            <div>
              <div>
                <h2>С КАКВО СЕ РАЗЛИЧАВА</h2>
                <button>
                  <img src={greatBg} alt="GreatBg" />
                </button>
              </div>
              <img
                src={vectorArrow}
                alt="Downwards/Curved arrow pointing downwards"
              />
            </div>

            {/* Made up company pluses */}
            <div className="flex">
              <div className="flex flex-col">
                <HeartHandshake />
                <h2>Подкрепа на Занаятчии</h2>
                <p>
                  Ние сме ангажирани с подкрепата на занаятчии, които създават
                  своите произведения с любов и изключително майсторство.
                </p>
              </div>

              <div className="flex flex-col">
                <Lightbulb />
                <h2>Уникалност и Креативност:</h2>
                <p>
                  Всеки артикул в е ръчно изработен, което гарантира, че няма
                  два напълно еднакви продукта. Това прави ПОДАРЪКА уникален.
                </p>
              </div>

              <div className="flex flex-col">
                <Award />
                <h2>Високо Качество</h2>
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
