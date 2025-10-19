import HeroSection from "../components/HeroSection";
import ProductCard from "../components/ProductCard";

const featuredProducts = [
  { id: 1, name: "Wireless Headphones", price: 59.99, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Smart Watch", price: 89.99, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Sneakers", price: 49.99, image: "https://via.placeholder.com/150" },
  { id: 4, name: "Backpack", price: 39.99, image: "https://via.placeholder.com/150" },
  { id: 5, name: "Camera", price: 199.99, image: "https://via.placeholder.com/150" },
  { id: 6, name: "Laptop Stand", price: 29.99, image: "https://via.placeholder.com/150" },
  { id: 7, name: "Bluetooth Speaker", price: 35.99, image: "https://via.placeholder.com/150" },
  { id: 8, name: "Sunglasses", price: 25.99, image: "https://via.placeholder.com/150" },
];

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-6">
        {featuredProducts.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </section>
    </>
  );
}
