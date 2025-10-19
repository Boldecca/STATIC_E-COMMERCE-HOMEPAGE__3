export default function ProductCard({ image, name, price }) {
  const handleAddToCart = () => {
    console.log(`Added ${name} to cart`);
    alert(`Added ${name} to cart`);
  };

  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition bg-white dark:bg-gray-800">
      <img src={image} alt={name} className="rounded-md mb-3 w-full h-40 object-cover" />
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{name}</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-2">${price}</p>
      <button
        onClick={handleAddToCart}
        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md"
      >
        Add to Cart
      </button>
    </div>
  );
}
