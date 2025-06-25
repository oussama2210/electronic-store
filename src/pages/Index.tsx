
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-950">
      <Header />
      <Hero />
      <Categories />
      <ProductGrid />
      <Footer />
    </div>
  );
};

export default Index;
