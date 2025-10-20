import { Link } from "react-router-dom";
import heroImage from "../assets/hero-image.png"; // replace with your image path

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-8">
        
        {/* Text Content */}
        <div className="text-center md:text-left md:flex-1">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 dark:text-white leading-tight">
            Welcome to ShopEase
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-4 text-lg md:text-xl">
            Your one-stop shop for amazing products! Find the best deals and quality items all in one place.
          </p>
          <Link to="/products">
            <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              Shop Now
            </button>
          </Link>
        </div>

        {/* Hero Image */}
        <div className="md:flex-1 flex justify-center">
          <img 
            src={heroImage} 
            alt="ShopEase hero" 
            className="w-full max-w-md rounded-xl shadow-xl"
          />
        </div>

      </div>
    </section>
  );
}
