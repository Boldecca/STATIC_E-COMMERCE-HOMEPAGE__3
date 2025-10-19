import ProductCard from "../components/ProductCard";

const products = [
  { id: 1, name: "Laptop", price: 799, image: "https://via.placeholder.com/150" },
  { id: 2, name: "T-Shirt", price: 25, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Watch", price: 99, image: "https://via.placeholder.com/150" },
  { id: 4, name: "Headphones", price: 59, image: "https://via.placeholder.com/150" },
  { id: 5, name: "Shoes", price: 45, image: "https://via.placeholder.com/150" },
  { id: 6, name: "Bag", price: 30, image: "https://via.placeholder.com/150" },
];

export default function Products() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">Our Products</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>
    </div>
  );
}
