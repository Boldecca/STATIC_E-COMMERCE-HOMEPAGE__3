import ProductCard from "../components/ProductCard";

const products = [
  { id: 1, name: "Laptop", price: 799, image: "https://imgs.search.brave.com/K1s02YZ7KKVvfVFguHVzx6zaRQxpn1_BO1vGfLM8HZI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2ZlL2I2/LzM4L2ZlYjYzOGE4/ZDVjZDZiYWE4MWUy/YjVkYWQ2MDIwNTg2/LmpwZw" },
  { id: 2, name: "T-Shirt", price: 25, image: "https://imgs.search.brave.com/0fOSSX-o6cPCW-DTI_XBmymHWcO59qV5mJHpwBDmWe0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyNC8w/NC8yOS8wNC8yMS90/c2hpcnQtODcyNjcx/Nl82NDAuanBn" },
  { id: 3, name: "Watch", price: 99, image: "https://imgs.search.brave.com/wxWRHGTLahxYF6XhBarX8rwTI_ta74bWmUIYU0YA5sQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/d2F0Y2hnYW5nLmNv/bS93ZWJmbG93X2Fz/c2V0cy93Zy1scC01/MG9mZi1mdy1ibGs2/LTEwLTIwMjMvaW1h/Z2VzL3Rlc3RpbW9u/aWFsLWltZy0xLnBu/Zw" },
  { id: 4, name: "Headphones", price: 59, image: "https://imgs.search.brave.com/FVXCFbAWgrotrMthcVJ-f1seP2va24RXWG5dN4W2lII/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/Y3JlYXRlLnZpc3Rh/LmNvbS9hcGkvbWVk/aWEvc21hbGwvMzg1/MDg5NjcwL3N0b2Nr/LXBob3RvLW1vZGVy/bi1sYXB0b3BzLWJs/dWUtd29ya3BsYWNl/LWdyZWVuLXBsYW50" },
  { id: 5, name: "Shoes", price: 45, image: "https://imgs.search.brave.com/nD94Y2lRmjTTtkNzTNpq1qLwCLgUuVGOKg7oamNtk-E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQw/NzEyNzg0MS9waG90/by93aGl0ZS1zbmVh/a2VyLXdpdGgtY29s/b3JlZC1hY2NlbnRz/LW9uLWEtZ3JlZW4t/Z3JhZGllbnQtYmFj/a2dyb3VuZC1tZW5z/LWZhc2hpb24tc3Bv/cnQtc2hvZS1haXIu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PWg0UFlRUFQwdnp2/M1FPZ0FIcWw0ZVNk/Ym5mSGRtZ201ZXdV/UktkenFrNmM9" },
  { id: 6, name: "Bag", price: 30, image: "https://imgs.search.brave.com/1ebvhL7i-f0yT9wYTbbZnRzXOUYPvvXTwVKuw6hL17Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIx/MDA3MTc3MS9waG90/by9jbGFzc3ktaGFu/ZC1iYWctd2l0aC1h/LXNsZWVrLWZpbmlz/aGVkLWxvb2suanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVJ0/OXdOY3J4SUpmMHVn/X2hDWHZxWlZwZTk2/Y0RTamw2X0lzdmc5/b2s4MkU9" },
  { id: 7, name: "Sunglasses", price: 20, image: "https://imgs.search.brave.com/K9fC9WnTNFIWqz0VW02-P3BFfls62vQ43Agxh6jiz4M/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jbG9zZS11cC1z/dW5nbGFzc2VzLXNh/bmRfMTA0ODk0NC05/MTgwMjI3LmpwZz9z/ZW10PWFpc19oeWJy/aWQmdz03NDAmcT04/MA" },
  { id: 8, name: "Camera", price: 150, image: "https://imgs.search.brave.com/efY4uWDef3-n_HmIPmEEUr5wD2QpWIMKh7hLIN6putE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDkw/OTI0NzgzL3Bob3Rv/L2ZpbG0tbGVucy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/ZUZmMk1hbk5GTUpf/MVZnM0NIRFR2VU5U/Q1hMbUltTWZZNmRr/eWZZWVFXcz0" },
];

export default function Products() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 py-20 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-gray-800 dark:text-white mb-6">
          Our <span className="text-blue-600 dark:text-blue-400">Products</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-14 max-w-2xl mx-auto">
          Explore our collection of high-quality and stylish products, crafted to make your life easier and better.
        </p>

        {/* Grid */}
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((p) => (
            <div
              key={p.id}
              className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="p-5 text-left">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white group-hover:text-blue-600">
                  {p.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-1 mb-3">${p.price}</p>
                <button className="w-full py-2 mt-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
