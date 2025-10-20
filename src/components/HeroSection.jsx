import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative py-24 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 dark:from-gray-900 dark:to-gray-800 overflow-hidden text-white">
      {/* Decorative background circles */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-blue-800 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-900 rounded-full opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center md:justify-between gap-10">
        {/* Left side - text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold animate-fadeIn">
            Welcome to ShopEase
          </h1>
          <p className="mt-4 text-lg sm:text-xl animate-fadeIn delay-200">
            Your one-stop shop for amazing products! Find everything you need with ease.
          </p>
          <Link to="/products">
            <button className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-fadeIn delay-400">
              Shop Now
            </button>
          </Link>
        </div>

        {/* Right side - image */}
        <div className="flex-1 flex justify-center md:justify-end animate-fadeIn delay-500">
          <img
            src="https://imgs.search.brave.com/Dp1DliT50KV8V-WJ85thlDC1hmG_tDNOK3EDd-CuYJg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/Y3JlYXRlLnZpc3Rh/LmNvbS9hcGkvbWVk/aWEvc21hbGwvMzQy/OTczODY4L3N0b2Nr/LXBob3RvLWNyb3Bw/ZWQtdmlldy1hZnJp/Y2FuLWFtZXJpY2Fu/LXdvbWFuLXNob3Bw/aW5nLWNhcnQtZnVs/bC1naWZ0cy1zaG9w/cGluZw"
            alt="Shopping illustration"
            className="w-full max-w-md rounded-lg shadow-2xl"
          />
        </div>
      </div>

      {/* Optional small animated shapes */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-yellow-400 rounded-full animate-bounce"></div>
      <div className="absolute bottom-1/3 right-20 w-6 h-6 bg-yellow-500 rounded-full animate-bounce delay-150"></div>
    </section>
  );
}
