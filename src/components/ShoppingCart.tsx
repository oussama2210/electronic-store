
import { useState } from "react";
import { ShoppingCart, X, Plus, Minus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import CustomerInfoForm from "./CustomerInfoForm";

const ShoppingCartComponent = () => {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice, getTotalItems, clearCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [showCustomerForm, setShowCustomerForm] = useState(false);
  const { toast } = useToast();

  const handleProceedToCheckout = () => {
    if (cartItems.length === 0) {
      toast({
        title: "Cart is empty",
        description: "Add some items to your cart before checkout",
        variant: "destructive"
      });
      return;
    }
    setShowCustomerForm(true);
  };

  const handleCustomerInfoSubmit = (customerInfo: any) => {
    // Process the order with customer information
    const order = {
      id: Date.now(),
      items: cartItems,
      total: getTotalPrice(),
      customerInfo,
      status: "pending",
      date: new Date().toISOString()
    };

    // Store order in localStorage (in a real app, this would go to a backend)
    const existingOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    localStorage.setItem("orders", JSON.stringify([...existingOrders, order]));

    toast({
      title: "Order placed successfully!",
      description: `Your order for $${getTotalPrice().toFixed(2)} has been confirmed.`
    });

    clearCart();
    setShowCustomerForm(false);
    setIsOpen(false);
  };

  const handleCancelCustomerForm = () => {
    setShowCustomerForm(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-gray-800 relative">
          <ShoppingCart className="w-5 h-5" />
          {getTotalItems() > 0 && (
            <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              {getTotalItems()}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-gray-900 border-gray-800 text-white w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="text-white">Shopping Cart</SheetTitle>
          <SheetDescription className="text-gray-400">
            {getTotalItems()} items in your cart
          </SheetDescription>
        </SheetHeader>
        
        <div className="mt-6 space-y-4">
          {showCustomerForm ? (
            <CustomerInfoForm
              onSubmit={handleCustomerInfoSubmit}
              onCancel={handleCancelCustomerForm}
            />
          ) : (
            <>
              {cartItems.length === 0 ? (
                <p className="text-gray-400 text-center py-8">Your cart is empty</p>
              ) : (
                <>
                  <div className="space-y-4 max-h-96 overflow-y-auto">
                    {cartItems.map((item) => (
                      <Card key={item.id} className="bg-gray-800/50 border-gray-700 p-4">
                        <div className="flex items-center space-x-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded"
                          />
                          <div className="flex-1">
                            <h3 className="text-white font-medium">{item.name}</h3>
                            <p className="text-gray-400">${item.price}</p>
                            <div className="flex items-center space-x-2 mt-2">
                              <Button
                                size="sm"
                                variant="outline"
                                className="border-gray-600 text-gray-300 hover:bg-gray-700 h-8 w-8 p-0"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                <Minus className="w-3 h-3" />
                              </Button>
                              <span className="text-white w-8 text-center">{item.quantity}</span>
                              <Button
                                size="sm"
                                variant="outline"
                                className="border-gray-600 text-gray-300 hover:bg-gray-700 h-8 w-8 p-0"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                <Plus className="w-3 h-3" />
                              </Button>
                              <Button
                                size="sm"
                                variant="destructive"
                                className="h-8 w-8 p-0 ml-2"
                                onClick={() => removeFromCart(item.id)}
                              >
                                <Trash2 className="w-3 h-3" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                  
                  <div className="border-t border-gray-700 pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-semibold text-white">Total:</span>
                      <span className="text-lg font-bold text-white">${getTotalPrice().toFixed(2)}</span>
                    </div>
                    <Button 
                      className="w-full bg-blue-600 hover:bg-blue-700"
                      onClick={handleProceedToCheckout}
                    >
                      Proceed to Checkout
                    </Button>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCartComponent;
