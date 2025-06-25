
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Meta Quest 3 VR Headset",
    price: 499,
    originalPrice: 599,
    rating: 4.8,
    reviews: 1250,
    image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=400&h=400&fit=crop",
    badge: "BESTSELLER"
  },
  {
    id: 2,
    name: "Gaming Mechanical Keyboard RGB",
    price: 129,
    originalPrice: 159,
    rating: 4.6,
    reviews: 890,
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop",
    badge: "NEW"
  },
  {
    id: 3,
    name: "Wireless Gaming Mouse Pro",
    price: 89,
    rating: 4.7,
    reviews: 456,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop"
  },
  {
    id: 4,
    name: "Premium Gaming Headset",
    price: 199,
    originalPrice: 249,
    rating: 4.9,
    reviews: 2100,
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop",
    badge: "HOT"
  },
  {
    id: 5,
    name: "4K Gaming Monitor 27''",
    price: 399,
    rating: 4.5,
    reviews: 780,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop"
  },
  {
    id: 6,
    name: "Gaming Chair Pro Max",
    price: 299,
    originalPrice: 399,
    rating: 4.4,
    reviews: 320,
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop"
  }
];

const ProductGrid = () => {
  return (
    <section className="py-16 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-white">Featured Products</h2>
          <button className="text-blue-400 hover:text-blue-300 transition-colors">View All →</button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
