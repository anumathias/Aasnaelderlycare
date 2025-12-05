import { useNavigate } from "react-router";
import { useCart } from "../utils/CartContext";
import { ArrowLeft, Trash2, ShoppingBag } from "lucide-react";
import { toast } from "sonner@2.0.3";
import BottomNavBar from "./BottomNavBar";

export default function ViewCartScreen() {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, clearCart } = useCart();

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseInt(item.price.replace('₹', ''));
      return total + price;
    }, 0);
  };

  const handleProceedToOrder = () => {
    if (cartItems.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }
    navigate("/order-confirmation");
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
            onClick={() => navigate(-1)}
            className="flex items-center justify-center size-[40px] rounded-full hover:bg-[#1F75BE]/10 transition-all active:scale-95 border border-gray-200 hover:border-[#1F75BE]"
          >
            <ArrowLeft className="size-[24px] text-[#1F75BE]" />
          </button>
          <div className="flex items-center gap-[12px]">
            <ShoppingBag className="size-[28px] text-[#1F75BE]" />
            <h1 className="font-['Poppins:SemiBold',sans-serif] text-[20px] text-[#121314]">
              My Cart
            </h1>
          </div>
          <div className="size-[40px]"></div>
        </div>

        {/* Cart Items */}
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-[60px]">
            <ShoppingBag className="size-[80px] text-gray-300 mb-[20px]" />
            <h2 className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-gray-600 mb-[8px]">
              Your cart is empty
            </h2>
            <p className="font-['Poppins:Regular',sans-serif] text-[14px] text-gray-500 mb-[24px]">
              Add medicines to get started
            </p>
            <button
              onClick={() => navigate("/medicine")}
              className="bg-[#1F75BE] hover:bg-[#1a64a3] text-white rounded-[8px] px-[24px] py-[12px] font-['Poppins:Medium',sans-serif] text-[14px] transition-all active:scale-[0.98]"
            >
              Browse Medicines
            </button>
          </div>
        ) : (
          <div className="space-y-[12px]">
            {cartItems.map((item) => (
              <div 
                key={item.id}
                className="bg-white rounded-[12px] p-[16px] shadow-sm border border-gray-200"
              >
                <div className="flex justify-between items-start mb-[12px]">
                  <div className="flex-1">
                    <h3 className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-[#121314] mb-[4px]">
                      {item.name}
                    </h3>
                    <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-gray-600 mb-[4px]">
                      {item.manufacturer}
                    </p>
                    <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-gray-500 mb-[8px]">
                      {item.description}
                    </p>
                    <div className="inline-block bg-[#1F75BE]/10 px-[8px] py-[4px] rounded-[6px]">
                      <span className="font-['Poppins:Medium',sans-serif] text-[11px] text-[#1F75BE]">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-[8px] ml-[12px]">
                    <span className="font-['Poppins:Bold',sans-serif] text-[18px] text-[#1F75BE]">
                      {item.price}
                    </span>
                    <button
                      onClick={() => {
                        removeFromCart(item.id);
                        toast.success("Item removed from cart");
                      }}
                      className="flex items-center justify-center size-[32px] rounded-full hover:bg-red-50 transition-all active:scale-95 border border-red-200 hover:border-red-400"
                    >
                      <Trash2 className="size-[16px] text-red-500" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Summary - Fixed */}
      {cartItems.length > 0 && (
        <div className="fixed bottom-[80px] left-0 right-0 bg-white border-t-2 border-gray-200 shadow-lg max-w-[393px] mx-auto z-50">
          <div className="px-[16px] py-[16px]">
            {/* Summary */}
            <div className="mb-[16px]">
              <div className="flex justify-between items-center mb-[8px]">
                <span className="font-['Poppins:Medium',sans-serif] text-[14px] text-gray-600">
                  Items ({cartItems.length})
                </span>
                <span className="font-['Poppins:Medium',sans-serif] text-[14px] text-gray-800">
                  ₹{calculateTotal()}
                </span>
              </div>
              <div className="flex justify-between items-center mb-[8px]">
                <span className="font-['Poppins:Medium',sans-serif] text-[14px] text-gray-600">
                  Delivery Fee
                </span>
                <span className="font-['Poppins:Medium',sans-serif] text-[14px] text-green-600">
                  FREE
                </span>
              </div>
              <div className="h-[1px] bg-gray-200 my-[12px]"></div>
              <div className="flex justify-between items-center">
                <span className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-[#121314]">
                  Total Amount
                </span>
                <span className="font-['Poppins:Bold',sans-serif] text-[20px] text-[#1F75BE]">
                  ₹{calculateTotal()}
                </span>
              </div>
            </div>

            {/* Proceed to Order Button */}
            <button
              onClick={handleProceedToOrder}
              className="w-full bg-[#1F75BE] hover:bg-[#1a64a3] text-white rounded-[8px] py-[14px] font-['Poppins:SemiBold',sans-serif] text-[16px] transition-all active:scale-[0.98] shadow-md"
            >
              Proceed to Order
            </button>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <BottomNavBar />
    </div>
  );
}
