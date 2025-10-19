import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="text-center py-16 bg-blue-50 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">
        Welcome to ShopEase
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mt-2">
        Your one-stop shop for amazing products!
      </p>
      <Link to="/products">
        <button className="mt-5 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg">
          Shop Now
        </button>
      </Link>
    </section>
  );
}
