import HeroSection from "../components/HomePage/HeroSection";
import Bestseller from "../components/HomePage/ProductShowcase";
import Testimonials from "../components/HomePage/Testimonials";

import FeatureCards from "../components/HomePage/aboutproduct";
import CustomerStats from "../components/HomePage/number";

function HomePage() {
  const mockProducts = [
    { id: 1, name: "Custom T-Shirt", price: 399, image: "/tshirt.jpg" },
    { id: 2, name: "Printed Mug", price: 249, image: "/mug.jpg" },
    { id: 3, name: "Poster A3", price: 149, image: "/poster.jpg" },
  ];

  return (
    <>
      <HeroSection />
      <FeatureCards />
      <CustomerStats />
      <Bestseller />
      <Testimonials />
    </>
  );
}

export default HomePage;
