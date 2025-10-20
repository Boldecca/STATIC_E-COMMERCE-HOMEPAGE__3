import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, ShoppingBag } from "lucide-react";

export default function Navbar() {
  const [isDark, setIsDark] = useState(localStorage.getItem("theme") === "dark");
  const [isOpen, setIsOpen] = useState(false);

  // Dark mode handler
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2">
            <ShoppingBag className="text-blue-600 dark:text-blue-400" size={26} />
            <span className="text-2xl font-extrabold text-gray-800 dark:text-white tracking-wide">
              Shop<span className="text-blue-600 dark:text-blue-400">Ease</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-gray-700 dark:text-gray-200 font-medium">
            <li><Link to="/" className="hover:text-blue-600 transition-colors">Home</Link></li>
            <li><Link to="/products" className="hover:text-blue-600 transition-colors">Products</Link></li>
            <li><Link to="/about" className="hover:text-blue-600 transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-blue-600 transition-colors">Contact</Link></li>
          </ul>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            {/* Dark Mode Button */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              {isDark ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-800" />}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 rounded-md bg-gray-100 dark:bg-gray-700"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <ul className="flex flex-col items-center gap-4 py-4 text-gray-700 dark:text-gray-200 font-medium">
            <li><Link onClick={() => setIsOpen(false)} to="/">Home</Link></li>
            <li><Link onClick={() => setIsOpen(false)} to="/products">Products</Link></li>
            <li><Link onClick={() => setIsOpen(false)} to="/about">About</Link></li>
            <li><Link onClick={() => setIsOpen(false)} to="/contact">Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
