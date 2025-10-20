export default function About() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 py-20 px-6 sm:px-10">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-gray-800 dark:text-white mb-6">
          About <span className="text-blue-600 dark:text-blue-400">ShopEase</span>
        </h1>

        {/* Intro */}
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
          At <span className="font-semibold text-blue-600 dark:text-blue-400">ShopEase</span>, we believe shopping should be 
          <span className="font-semibold"> simple, secure, and enjoyable</span>. 
          Since our founding, we’ve been committed to providing high-quality products, reliable service, and an effortless online shopping experience for customers around the world.
        </p>

        {/* Mission Section */}
        <div className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-10 mb-14 transition-all duration-300 hover:shadow-2xl">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            To empower customers through easy access to premium products at fair prices, 
            while maintaining trust, transparency, and top-tier customer care. 
            We aim to be the bridge between affordability and quality — because you deserve both.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="text-left bg-blue-50 dark:bg-gray-800 p-10 rounded-2xl shadow-md">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">
            Why Choose <span className="text-blue-600 dark:text-blue-400">Us?</span>
          </h2>
          <ul className="grid sm:grid-cols-2 gap-6 text-gray-700 dark:text-gray-300 text-lg">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-2xl">✔</span>
              <span><strong>Affordable Prices</strong> — Premium quality doesn’t have to be expensive.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-2xl">⚡</span>
              <span><strong>Fast & Reliable Delivery</strong> — Get your products when you need them.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-2xl">💬</span>
              <span><strong>24/7 Customer Support</strong> — We're always here to help you.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-2xl">🔒</span>
              <span><strong>Secure Payments</strong> — Your safety and privacy are our priority.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
