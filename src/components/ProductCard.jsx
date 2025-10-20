export default function ProductCard({ name, price, image, onAddToCart }) {
  return (
    <div className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="p-5 flex flex-col items-center text-center">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{name}</h2>
        <p className="text-blue-600 dark:text-blue-400 font-bold mt-2">${price}</p>
        <button
          onClick={() => onAddToCart({ name, price, image })}
          className="mt-4 px-5 py-2 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-all"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
