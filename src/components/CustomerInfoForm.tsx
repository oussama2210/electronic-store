
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Phone, CreditCard } from "lucide-react";

interface CustomerInfo {
  name: string;
  phone: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

interface CustomerInfoFormProps {
  onSubmit: (info: CustomerInfo) => void;
  onCancel: () => void;
}

const CustomerInfoForm = ({ onSubmit, onCancel }: CustomerInfoFormProps) => {
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    name: "",
    phone: "",
    cardNumber: "",
    expiryDate: "",
    cvv: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerInfo.name || !customerInfo.phone || !customerInfo.cardNumber || !customerInfo.expiryDate || !customerInfo.cvv) {
      alert("Please fill in all fields");
      return;
    }
    onSubmit(customerInfo);
  };

  const handleInputChange = (field: keyof CustomerInfo, value: string) => {
    setCustomerInfo(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <User className="w-5 h-5" />
          Customer Information
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-300">Full Name</Label>
            <Input
              id="name"
              type="text"
              value={customerInfo.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className="bg-gray-700 border-gray-600 text-white"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-gray-300 flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Phone Number
            </Label>
            <Input
              id="phone"
              type="tel"
              value={customerInfo.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              className="bg-gray-700 border-gray-600 text-white"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="space-y-4">
            <Label className="text-gray-300 flex items-center gap-2">
              <CreditCard className="w-4 h-4" />
              Payment Information
            </Label>
            
            <div className="space-y-2">
              <Input
                type="text"
                value={customerInfo.cardNumber}
                onChange={(e) => handleInputChange("cardNumber", e.target.value)}
                className="bg-gray-700 border-gray-600 text-white"
                placeholder="Card Number (1234 5678 9012 3456)"
                maxLength={19}
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <Input
                type="text"
                value={customerInfo.expiryDate}
                onChange={(e) => handleInputChange("expiryDate", e.target.value)}
                className="bg-gray-700 border-gray-600 text-white"
                placeholder="MM/YY"
                maxLength={5}
                required
              />
              <Input
                type="text"
                value={customerInfo.cvv}
                onChange={(e) => handleInputChange("cvv", e.target.value)}
                className="bg-gray-700 border-gray-600 text-white"
                placeholder="CVV"
                maxLength={3}
                required
              />
            </div>
          </div>

          <div className="flex gap-2 pt-4">
            <Button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700"
            >
              Complete Purchase
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onCancel}
              className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700"
            >
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default CustomerInfoForm;
