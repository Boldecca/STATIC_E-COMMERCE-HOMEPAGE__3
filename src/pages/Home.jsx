import HeroSection from "../components/HeroSection";
import ProductCard from "../components/ProductCard";

const featuredProducts = [
  { id: 1, name: "Wireless Headphones", price: 59.99, image: "https://imgs.search.brave.com/PUUIQfpUF2eXHBg0hFzKx6HqMroq9ol7B-5Yyvg_KSs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFKWU9XNFNMNUwu/anBn" },
  { id: 2, name: "Smart Watch", price: 89.99, image: "https://imgs.search.brave.com/UcySVfmRW7eBqaaUPTxC7nGihookl795XWdM7MU6fE8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTM5/MjE1OTM5L3Bob3Rv/L3NtYXJ0LXdhdGNo/LWRpc3BsYXlpbmct/YXBwcy1pY29ucy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/VUR6c2oycTNsR1BZ/cFlHc1BXS2FoUXAw/OUFvQWhYMjFDSVY1/XzhMQ3RsMD0" },
  { id: 3, name: "Sneakers", price: 49.99, image: "https://imgs.search.brave.com/RUGoD_ZWRklVKemqNJX6YwIHPM58flWh-jVKtjKCwxg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ydWtt/aW5pbTIuZmxpeGNh/cnQuY29tL2ltYWdl/LzMwMC8zMDAveGlm/MHEvc2hvZS9yL3gv/ZC8tb3JpZ2luYWwt/aW1haGFuNDl6bXp4/OWZ4bi5qcGVnP3E9/OTA" },
  { id: 4, name: "Backpack", price: 39.99, image: "https://imgs.search.brave.com/Gz6WbLmySia2PbenWVadFPhVjVFBVbJwuhR0PrcBzEk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zbGlt/YWdlcy5tYWN5c2Fz/c2V0cy5jb20vaXMv/aW1hZ2UvTUNZL3By/b2R1Y3RzLzkvb3B0/aW1pemVkLzI3NzU5/MjE5X2ZweC50aWY_/cWx0PTgwLDAmcmVz/TW9kZT1zaGFycDIm/b3BfdXNtPTEuNzUs/MC4zLDIsMCZmbXQ9/anBlZyZ3aWQ9MzQy/JmhlaT00MTc" },
  { id: 5, name: "Camera", price: 199.99, image: "https://imgs.search.brave.com/efY4uWDef3-n_HmIPmEEUr5wD2QpWIMKh7hLIN6putE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDkw/OTI0NzgzL3Bob3Rv/L2ZpbG0tbGVucy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/ZUZmMk1hbk5GTUpf/MVZnM0NIRFR2VU5U/Q1hMbUltTWZZNmRr/eWZZWVFXcz0" },
  { id: 6, name: "Laptop Stand", price: 29.99, image: "https://imgs.search.brave.com/LbZFeP_DmBRzCf98KYVhZaA701Zyiw9Lk5mGhED3PNc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ydWtt/aW5pbTIuZmxpeGNh/cnQuY29tL2ltYWdl/LzMwMC8zMDAveGlm/MHEvbGFwdG9wLXN0/YW5kL2QvaC9mLzAt/NC1mb2xkYWJsZS1s/YXB0b3AtdGFibGV0/LXN0YW5kLXJpc2Vy/LXVwLXRvLTE1LTYt/aW5jaGVzLWFsaWVu/cy1vcmlnaW5hbC1p/bWFoOGNqN3pqdXk0/c2FuLmpwZWc_cT05/MA" },
  { id: 7, name: "Bluetooth Speaker", price: 35.99, image: "https://imgs.search.brave.com/1WwpSvX75WOINTqswOhlYXK19dfCTsGcznqHu-lt3Ok/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by9ibHVldG9v/dGgtc3BlYWtlci1z/bWFydC1waG9uZS0y/NjBudy02NzU2NjIw/MjYuanBn" },
  { id: 8, name: "Sunglasses", price: 25.99, image: "https://imgs.search.brave.com/K9fC9WnTNFIWqz0VW02-P3BFfls62vQ43Agxh6jiz4M/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jbG9zZS11cC1z/dW5nbGFzc2VzLXNh/bmRfMTA0ODk0NC05/MTgwMjI3LmpwZz9z/ZW10PWFpc19oeWJy/aWQmdz03NDAmcT04/MA" },
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
