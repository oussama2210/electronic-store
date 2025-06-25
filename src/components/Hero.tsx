
import { Button } from "@/components/ui/button";
import { Play, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                FLAT 20% OFF
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  VIRTUAL REALITY
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-lg">
                Experience the future with our cutting-edge VR headsets and immersive gaming technology.
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                Shop Now
              </Button>
              <Button variant="outline" size="lg" className="border-gray-600 text-white hover:bg-gray-800">
                <Play className="w-4 h-4 mr-2" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-gray-400">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span>4.9/5 Rating</span>
              </div>
              <div>50k+ Happy Customers</div>
              <div>Free Shipping</div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img 
                src="/lovable-uploads/22309153-c041-42ed-a0f2-96e8cdd9a9e5.png" 
                alt="VR Headset" 
                className="w-full max-w-md mx-auto"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
