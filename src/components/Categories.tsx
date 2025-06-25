
import { Card } from "@/components/ui/card";

const categories = [
  {
    name: "VR Headsets",
    image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=400&h=300&fit=crop",
    count: "12 Products"
  },
  {
    name: "Gaming Mice",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=300&fit=crop",
    count: "8 Products"
  },
  {
    name: "Keyboards",
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
    count: "15 Products"
  },
  {
    name: "Audio Headsets",
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=300&fit=crop",
    count: "20 Products"
  }
];

const Categories = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Shop by Category</h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card key={category.name} className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 cursor-pointer group">
              <div className="p-4">
                <div className="aspect-square bg-gray-700/30 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-white font-semibold text-center">{category.name}</h3>
                <p className="text-gray-400 text-sm text-center mt-1">{category.count}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
