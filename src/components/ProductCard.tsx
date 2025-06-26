
import { Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
}

const ProductCard = ({ id, name, price, originalPrice, rating, reviews, image, badge }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart({ id, name, price, image });
    toast({
      title: "Added to cart",
      description: `${name} has been added to your cart.`,
    });
  };

  return (
    <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 group">
      <div className="relative p-4">
        {badge && (
          <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded z-10">
            {badge}
          </span>
        )}
        
        <div className="aspect-square bg-gray-700/30 rounded-lg mb-4 overflow-hidden">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        <div className="space-y-3">
          <h3 className="text-white font-semibold text-sm line-clamp-2">{name}</h3>
          
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'}`} 
              />
            ))}
            <span className="text-gray-400 text-sm ml-2">({reviews})</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-white font-bold">${price}</span>
              {originalPrice && (
                <span className="text-gray-400 line-through text-sm">${originalPrice}</span>
              )}
            </div>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700" onClick={handleAddToCart}>
              <ShoppingCart className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
