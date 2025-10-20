import { Mail, Phone, MapPin, Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    console.log({ name, email, message });
    alert("Feedback submitted! Check console for details.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 flex items-center justify-center py-16 px-4">
      <div className="max-w-6xl w-full bg-white dark:bg-gray-800 shadow-2xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        {/* Left Info Section */}
        <div className="p-10 bg-blue-600 dark:bg-gray-900 text-white flex flex-col justify-center space-y-6">
          <h2 className="text-4xl font-bold">Get in Touch</h2>
          <p className="text-blue-100 dark:text-gray-300">
            We're here to answer your questions, provide support, or discuss your feedback. Reach out and we'll get back to you promptly.
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5" />
              <span>info@shopease.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5" />
              <span>+250 788 123 456</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5" />
              <span>Kigali, Rwanda</span>
            </div>
          </div>

          {/* Follow Us Section */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-200 transition">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-blue-200 transition">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-blue-200 transition">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-blue-200 transition">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="p-10">
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Send Us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-gray-100 transition"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-gray-100 transition"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                placeholder="Write your message..."
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-gray-100 transition"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              Submit Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
