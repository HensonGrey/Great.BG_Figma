import { Search, ShoppingBag, User, Menu } from 'lucide-react';
import { useState } from 'react';
import logo from '../assets/images/Isolation_Mode.png';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { text: 'Продукти', bold: true },
    { text: 'Блог' },
    { text: 'Специален допир' },
    { text: 'Партньори' },
    { text: 'Корпоративни клиенти' },
    { text: 'Контакти' }
  ];

  return (
    <div className="w-full px-4 md:px-6">
      <header className="flex items-center justify-between lg:justify-center w-full mt-4 md:mt-[25px]">
        {/* Company name and logo */}
        <div className="flex items-center gap-3 md:gap-5 lg:mr-12 shrink-0">
          <img
            src={logo}
            alt="Company Logo"
            className="h-9 w-6 md:h-[44px] md:w-[34px] transition-transform duration-200 hover:scale-110 cursor-pointer"
          />
          <p className="font-bold font-nexa text-xl md:text-[35px] text-[#2E3646] hover:text-blue-500 cursor-pointer transition-colors duration-200 tracking-[-0.1%]">
            Great.bg
          </p>
        </div>

        {/* Desktop Navbar */}
        <nav className="hidden lg:block lg:mr-11">
          <ul className="flex gap-6">
            {navItems.map((item, index) => (
              <li
                key={index}
                className={`font-inter text-[15px] tracking-[-0.1%] cursor-pointer hover:text-blue-500 transition-colors ${
                  item.bold ? 'text-[#000000] font-semibold' : ''
                }`}
              >
                {item.text}
              </li>
            ))}
          </ul>
        </nav>

        {/* Search bar - Hidden on mobile */}
        <div className="hidden md:flex items-center rounded-full h-10 w-48 lg:w-64 lg:mr-14 border border-[#D9D9D9] shrink-0">
          <Search className="w-6 h-6 ml-3 mr-2 flex-shrink-0 font-extralight" />
          <input
            type="text"
            placeholder="Търси тук..."
            className="flex-1 h-full text-sm tracking-[-0.1%] font-inter outline-none bg-transparent"
          />
        </div>

        {/* Cart and profile icons */}
        <div className="flex gap-4 md:gap-7 items-center shrink-0">
          <button className="relative transition-transform duration-200 hover:scale-110">
            <ShoppingBag className="w-6 h-6 text-gray-800" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full">
              1
            </span>
          </button>

          <button className="transition-transform duration-200 hover:scale-110">
            <User className="w-6 h-6 text-gray-800" />
          </button>

          {/* Mobile menu button */}
          <button
            className="lg:hidden transition-transform duration-200 hover:scale-110"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="w-6 h-6 text-gray-800" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden mt-4 pb-4 border-t border-gray-200">
          <ul className="flex flex-col gap-3 pt-4">
            {navItems.map((item, index) => (
              <li
                key={index}
                className={`text-[15px] tracking-[-0.1%] cursor-pointer hover:text-blue-500 transition-colors px-4 py-2 ${
                  item.bold ? 'text-[#000000] font-semibold' : ''
                }`}
              >
                {item.text}
              </li>
            ))}
          </ul>
          {/* Mobile search bar */}
          <div className="flex md:hidden items-center rounded-full h-10 mx-4 mt-3 border border-[#D9D9D9]">
            <Search className="w-6 h-6 ml-3 mr-2 flex-shrink-0" />
            <input
              type="text"
              placeholder="Търси тук..."
              className="flex-1 h-full text-sm outline-none bg-transparent"
            />
          </div>
        </nav>
      )}
    </div>
  );
}