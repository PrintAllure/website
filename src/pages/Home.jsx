import HeroSection from "../components/HomePage/HeroSection";
import ProductShowcase from "../components/HomePage/ProductShowcase";
import Testimonials from "../components/HomePage/Testimonials";
import OperationalTimeline from "../components/HomePage/Timeline";

function HomePage() {
  const mockProducts = [
    { id: 1, name: "Custom T-Shirt", price: 399, image: "/tshirt.jpg" },
    { id: 2, name: "Printed Mug", price: 249, image: "/mug.jpg" },
    { id: 3, name: "Poster A3", price: 149, image: "/poster.jpg" },
  ];

  return (
    <>
      <HeroSection />
      <ProductShowcase products={mockProducts} />
      <OperationalTimeline />
      <Testimonials />
    </>
  );
}

export default HomePage;
