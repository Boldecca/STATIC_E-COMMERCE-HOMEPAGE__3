export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">ShopEase</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Your trusted e-commerce platform offering quality products at affordable prices. Our mission is to make shopping simple and enjoyable.
          </p>
          <div className="flex space-x-4 mt-4">
            {/* Facebook */}
            <a href="#" className="hover:text-blue-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 10-11.6 9.9v-7H8v-3h2.4V9.5c0-2.4 1.4-3.7 3.6-3.7 1 0 2 .1 2 .1v2.3h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 3h-2.4v7A10 10 0 0022 12z" />
              </svg>
            </a>
            {/* Twitter */}
            <a href="#" className="hover:text-blue-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.1.9A5.4 5.4 0 0022.4 1a10.9 10.9 0 01-3.5 1.3 5.4 5.4 0 00-9.3 4.9A15.3 15.3 0 011 2.1 5.4 5.4 0 003.5 9.7a5.3 5.3 0 01-2.5-.7v.1a5.4 5.4 0 004.3 5.3 5.4 5.4 0 01-2.4.1 5.4 5.4 0 005 3.7A10.9 10.9 0 010 19.5a15.3 15.3 0 008.3 2.4c10 0 15.5-8.3 15.5-15.5v-.7A11 11 0 0023 3z" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" className="hover:text-pink-500">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .2 2.5.4a4.9 4.9 0 011.7 1.1 4.9 4.9 0 011.1 1.7c.2.5.3 1.3.4 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 2-.4 2.5a4.9 4.9 0 01-1.1 1.7 4.9 4.9 0 01-1.7 1.1c-.5.2-1.3.3-2.5.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.2-2.5-.4a4.9 4.9 0 01-1.7-1.1 4.9 4.9 0 01-1.1-1.7c-.2-.5-.3-1.3-.4-2.5-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.2-2 .4-2.5a4.9 4.9 0 011.1-1.7 4.9 4.9 0 011.7-1.1c.5-.2 1.3-.3 2.5-.4 1.3-.1 1.7-.1 4.9-.1zm0-2.2C8.7 0 8.3 0 7 .1 5.7.2 4.6.4 3.6.7a7.1 7.1 0 00-2.5 1.5A7.1 7.1 0 00.7 4.7c-.3 1-.5 2.1-.6 3.4C0 8.3 0 8.7 0 12c0 3.3 0 3.7.1 5 .1 1.3.3 2.4.6 3.4a7.1 7.1 0 001.5 2.5 7.1 7.1 0 002.5 1.5c1 .3 2.1.5 3.4.6 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.3-.1 2.4-.3 3.4-.6a7.1 7.1 0 002.5-1.5 7.1 7.1 0 001.5-2.5c.3-1 .5-2.1.6-3.4.1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.3-.3-2.4-.6-3.4a7.1 7.1 0 00-1.5-2.5A7.1 7.1 0 0020.4.7c-1-.3-2.1-.5-3.4-.6C15.7 0 15.3 0 12 0z" />
                <circle cx="12" cy="12" r="3.2" />
                <circle cx="18.4" cy="5.6" r="1.4" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" className="hover:text-blue-700">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5a2.5 2.5 0 11-.001 5.001 2.5 2.5 0 01.001-5.001zM3 9h4v12H3V9zm7 0h3.6v1.7h.1c.5-.9 1.7-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5V21h-4v-5.8c0-1.4 0-3.2-2-3.2-2 0-2.3 1.5-2.3 3v5h-4V9z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Shipping</a></li>
            <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Returns</a></li>
            <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">FAQs</a></li>
            <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Support</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Subscribe to get the latest updates and offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input 
              type="email" 
              placeholder="Your email" 
              className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
            />
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Subscribe
            </button>
          </form>
        </div>

      </div>

      <div className="border-t border-gray-300 dark:border-gray-700 mt-8 py-4 text-center text-gray-500 dark:text-gray-400">
        © 2025 ShopEase. All rights reserved.
      </div>
    </footer>
  );
}
