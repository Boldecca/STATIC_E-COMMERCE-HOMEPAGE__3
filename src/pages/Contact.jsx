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
    <div className="p-6 text-gray-700 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p>Email: info@shopease.com</p>
      <p>Phone: +250 788 123 456</p>
      <p>Address: Kigali, Rwanda</p>

      <form onSubmit={handleSubmit} className="mt-5 max-w-md space-y-3">
        <input type="text" name="name" placeholder="Your Name" className="w-full p-2 border rounded" required />
        <input type="email" name="email" placeholder="Your Email" className="w-full p-2 border rounded" required />
        <textarea name="message" placeholder="Your Message" className="w-full p-2 border rounded" required />
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}
