import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

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
    <nav className="flex items-center justify-between p-4 shadow-md bg-white dark:bg-gray-900">
      <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">
        ShopEase
      </h1>
      <ul className="flex gap-6 text-gray-700 dark:text-gray-200">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <button
        onClick={() => setIsDark(!isDark)}
        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        {isDark ? <Sun /> : <Moon />}
      </button>
    </nav>
  );
}
