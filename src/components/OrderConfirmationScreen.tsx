import { useState } from "react";
import { useNavigate } from "react-router";
import { useCart } from "../utils/CartContext";
import { ArrowLeft, MapPin, CreditCard, Wallet, Banknote, Home, Package } from "lucide-react";
import { toast } from "sonner@2.0.3";
import BottomNavBar from "./BottomNavBar";

export default function OrderConfirmationScreen() {
  const navigate = useNavigate();
  const { cartItems, clearCart } = useCart();
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [selectedPayment, setSelectedPayment] = useState("");

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseInt(item.price.replace('₹', ''));
      return total + price;
    }, 0);
  };

  const paymentModes = [
    { id: "upi", name: "UPI Payment", icon: Wallet, description: "Google Pay, PhonePe, Paytm" },
    { id: "card", name: "Credit/Debit Card", icon: CreditCard, description: "Visa, Mastercard, RuPay" },
    { id: "cash", name: "Cash on Delivery", icon: Banknote, description: "Pay when you receive" },
    { id: "netbanking", name: "Net Banking", icon: Wallet, description: "Direct bank transfer" },
  ];

  const handlePlaceOrder = () => {
    if (!deliveryAddress.trim()) {
      toast.error("Please enter your delivery address");
      return;
    }
    if (!selectedPayment) {
      toast.error("Please select a payment mode");
      return;
    }

    // Navigate to payment processing screen
    navigate("/payment-processing", {
      state: {
        paymentMode: selectedPayment,
        totalAmount: calculateTotal()
      }
    });
  };

  return (
    <div className="bg-gradient-to-b from-[#f8f9fa] to-white min-h-screen w-full max-w-[393px] mx-auto relative flex flex-col">
      <style>{`
        .overflow-y-auto::-webkit-scrollbar {
          width: 8px;
        }
        .overflow-y-auto::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: #1F75BE;
          border-radius: 10px;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: #1a64a3;
        }
      `}</style>

      <div className="px-[16px] pt-[16px] pb-[200px] flex-1 overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-[20px]">
          <button 
            onClick={() => navigate("/cart")}
            className="flex items-center justify-center size-[40px] rounded-full hover:bg-[#1F75BE]/10 transition-all active:scale-95 border border-gray-200 hover:border-[#1F75BE]"
          >
            <ArrowLeft className="size-[24px] text-[#1F75BE]" />
          </button>
          <div className="flex items-center gap-[12px]">
            <Package className="size-[28px] text-[#1F75BE]" />
            <h1 className="font-['Poppins:SemiBold',sans-serif] text-[20px] text-[#121314]">
              Confirm Order
            </h1>
          </div>
          <div className="size-[40px]"></div>
        </div>

        {/* Delivery Address Section */}
        <div className="bg-white rounded-[12px] p-[16px] shadow-sm border border-gray-200 mb-[16px]">
          <div className="flex items-center gap-[8px] mb-[12px]">
            <MapPin className="size-[20px] text-[#1F75BE]" />
            <h2 className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-[#121314]">
              Delivery Location
            </h2>
          </div>
          <textarea
            value={deliveryAddress}
            onChange={(e) => setDeliveryAddress(e.target.value)}
            placeholder="Enter your complete delivery address..."
            className="w-full border border-gray-300 rounded-[8px] p-[12px] font-['Poppins:Regular',sans-serif] text-[14px] text-[#121314] focus:outline-none focus:border-[#1F75BE] focus:ring-2 focus:ring-[#1F75BE]/20 min-h-[100px] resize-none"
          />
          <button 
            onClick={() => {
              setDeliveryAddress("123 Main Street, Apartment 4B, Mumbai, Maharashtra 400001");
              toast.success("Current location detected!");
            }}
            className="mt-[12px] flex items-center gap-[8px] text-[#1F75BE] hover:text-[#1a64a3] font-['Poppins:Medium',sans-serif] text-[14px] transition-all"
          >
            <Home className="size-[16px]" />
            Use Current Location
          </button>
        </div>

        {/* Payment Mode Section */}
        <div className="bg-white rounded-[12px] p-[16px] shadow-sm border border-gray-200 mb-[16px]">
          <div className="flex items-center gap-[8px] mb-[12px]">
            <CreditCard className="size-[20px] text-[#1F75BE]" />
            <h2 className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-[#121314]">
              Payment Mode
            </h2>
          </div>
          <div className="space-y-[12px]">
            {paymentModes.map((mode) => {
              const Icon = mode.icon;
              return (
                <button
                  key={mode.id}
                  onClick={() => setSelectedPayment(mode.id)}
                  className={`w-full p-[14px] rounded-[8px] border-2 transition-all ${
                    selectedPayment === mode.id
                      ? "border-[#1F75BE] bg-[#1F75BE]/5"
                      : "border-gray-200 hover:border-[#1F75BE]/50"
                  }`}
                >
                  <div className="flex items-center gap-[12px]">
                    <div className={`size-[40px] rounded-full flex items-center justify-center ${
                      selectedPayment === mode.id ? "bg-[#1F75BE]" : "bg-gray-100"
                    }`}>
                      <Icon className={`size-[20px] ${
                        selectedPayment === mode.id ? "text-white" : "text-gray-600"
                      }`} />
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-[#121314]">
                        {mode.name}
                      </h3>
                      <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-gray-600">
                        {mode.description}
                      </p>
                    </div>
                    <div className={`size-[20px] rounded-full border-2 flex items-center justify-center ${
                      selectedPayment === mode.id
                        ? "border-[#1F75BE] bg-[#1F75BE]"
                        : "border-gray-300"
                    }`}>
                      {selectedPayment === mode.id && (
                        <div className="size-[10px] rounded-full bg-white"></div>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Order Summary Section */}
        <div className="bg-white rounded-[12px] p-[16px] shadow-sm border border-gray-200">
          <h2 className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-[#121314] mb-[12px]">
            Order Summary
          </h2>
          <div className="space-y-[8px]">
            {cartItems.map((item, index) => (
              <div key={item.id} className="flex justify-between items-start py-[8px] border-b border-gray-100 last:border-0">
                <div className="flex-1">
                  <p className="font-['Poppins:Medium',sans-serif] text-[13px] text-[#121314]">
                    {item.name}
                  </p>
                  <p className="font-['Poppins:Regular',sans-serif] text-[11px] text-gray-600">
                    {item.manufacturer}
                  </p>
                </div>
                <span className="font-['Poppins:SemiBold',sans-serif] text-[13px] text-[#1F75BE]">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
          <div className="h-[1px] bg-gray-200 my-[12px]"></div>
          <div className="space-y-[6px]">
            <div className="flex justify-between items-center">
              <span className="font-['Poppins:Medium',sans-serif] text-[13px] text-gray-600">
                Subtotal ({cartItems.length} items)
              </span>
              <span className="font-['Poppins:Medium',sans-serif] text-[13px] text-gray-800">
                ₹{calculateTotal()}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-['Poppins:Medium',sans-serif] text-[13px] text-gray-600">
                Delivery Fee
              </span>
              <span className="font-['Poppins:Medium',sans-serif] text-[13px] text-green-600">
                FREE
              </span>
            </div>
            <div className="flex justify-between items-center pt-[8px]">
              <span className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-[#121314]">
                Total Amount
              </span>
              <span className="font-['Poppins:Bold',sans-serif] text-[18px] text-[#1F75BE]">
                ₹{calculateTotal()}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action - Fixed */}
      <div className="fixed bottom-[80px] left-0 right-0 bg-white border-t-2 border-gray-200 shadow-lg max-w-[393px] mx-auto z-50">
        <div className="px-[16px] py-[16px]">
          <button
            onClick={handlePlaceOrder}
            className="w-full bg-[#1F75BE] hover:bg-[#1a64a3] text-white rounded-[8px] py-[14px] font-['Poppins:SemiBold',sans-serif] text-[16px] transition-all active:scale-[0.98] shadow-md"
          >
            Place Order - ₹{calculateTotal()}
          </button>
          <p className="text-center font-['Poppins:Regular',sans-serif] text-[11px] text-gray-500 mt-[8px]">
            By placing this order, you agree to our terms and conditions
          </p>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavBar />
    </div>
  );
}
