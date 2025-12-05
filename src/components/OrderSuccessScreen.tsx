import { useNavigate, useLocation } from "react-router";
import { CheckCircle2, Package, MapPin, Calendar, Clock } from "lucide-react";
import BottomNavBar from "./BottomNavBar";

export default function OrderSuccessScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const paymentMode = location.state?.paymentMode || "upi";
  const totalAmount = location.state?.totalAmount || 0;

  // Generate order ID
  const orderId = `ORD${Date.now().toString().slice(-8)}`;
  
  // Calculate delivery date (3 days from now)
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 3);
  const formattedDeliveryDate = deliveryDate.toLocaleDateString('en-US', { 
    weekday: 'long', 
    month: 'long', 
    day: 'numeric' 
  });

  // Estimated delivery time
  const deliveryTime = "10:00 AM - 2:00 PM";

  const getPaymentName = () => {
    switch (paymentMode) {
      case "upi":
        return "UPI Payment";
      case "card":
        return "Card Payment";
      case "cash":
        return "Cash on Delivery";
      case "netbanking":
        return "Net Banking";
      default:
        return "Payment";
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#f8f9fa] to-white min-h-screen w-full max-w-[393px] mx-auto relative flex flex-col">
      <div className="px-[16px] pt-[40px] pb-[200px] flex-1 overflow-y-auto">
        {/* Success Animation */}
        <div className="flex flex-col items-center mb-[32px]">
          <div className="relative">
            <div className="absolute inset-0 bg-green-500/20 rounded-full animate-ping"></div>
            <div className="relative bg-green-500 rounded-full p-[20px]">
              <CheckCircle2 className="size-[60px] text-white" />
            </div>
          </div>
          <h1 className="font-['Poppins:Bold',sans-serif] text-[28px] text-[#121314] mt-[24px] text-center">
            Order Placed Successfully!
          </h1>
          <p className="font-['Poppins:Regular',sans-serif] text-[14px] text-gray-600 mt-[8px] text-center">
            Thank you for your order
          </p>
        </div>

        {/* Order Details Card */}
        <div className="bg-white rounded-[16px] p-[20px] shadow-md border border-gray-200 mb-[16px]">
          <div className="flex items-center justify-between mb-[16px] pb-[16px] border-b border-gray-200">
            <div>
              <p className="font-['Poppins:Medium',sans-serif] text-[12px] text-gray-600 mb-[4px]">
                Order ID
              </p>
              <p className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-[#121314]">
                {orderId}
              </p>
            </div>
            <div className="text-right">
              <p className="font-['Poppins:Medium',sans-serif] text-[12px] text-gray-600 mb-[4px]">
                Total Amount
              </p>
              <p className="font-['Poppins:Bold',sans-serif] text-[18px] text-[#1F75BE]">
                ₹{totalAmount}
              </p>
            </div>
          </div>

          <div className="space-y-[12px]">
            <div className="flex items-start gap-[12px]">
              <div className="size-[40px] rounded-full bg-[#1F75BE]/10 flex items-center justify-center flex-shrink-0">
                <Package className="size-[20px] text-[#1F75BE]" />
              </div>
              <div className="flex-1">
                <p className="font-['Poppins:Medium',sans-serif] text-[12px] text-gray-600 mb-[2px]">
                  Payment Method
                </p>
                <p className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-[#121314]">
                  {getPaymentName()}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Delivery Information Card */}
        <div className="bg-gradient-to-br from-[#1F75BE] to-[#1a64a3] rounded-[16px] p-[20px] shadow-md mb-[16px]">
          <div className="flex items-center gap-[12px] mb-[16px]">
            <MapPin className="size-[24px] text-white" />
            <h2 className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-white">
              Delivery Information
            </h2>
          </div>

          <div className="space-y-[16px]">
            {/* Delivery Date */}
            <div className="bg-white/20 backdrop-blur-sm rounded-[12px] p-[14px] border border-white/30">
              <div className="flex items-center gap-[12px]">
                <div className="size-[40px] rounded-full bg-white/30 flex items-center justify-center">
                  <Calendar className="size-[20px] text-white" />
                </div>
                <div>
                  <p className="font-['Poppins:Medium',sans-serif] text-[12px] text-white/80 mb-[2px]">
                    Expected Delivery Date
                  </p>
                  <p className="font-['Poppins:SemiBold',sans-serif] text-[15px] text-white">
                    {formattedDeliveryDate}
                  </p>
                </div>
              </div>
            </div>

            {/* Delivery Time */}
            <div className="bg-white/20 backdrop-blur-sm rounded-[12px] p-[14px] border border-white/30">
              <div className="flex items-center gap-[12px]">
                <div className="size-[40px] rounded-full bg-white/30 flex items-center justify-center">
                  <Clock className="size-[20px] text-white" />
                </div>
                <div>
                  <p className="font-['Poppins:Medium',sans-serif] text-[12px] text-white/80 mb-[2px]">
                    Expected Delivery Time
                  </p>
                  <p className="font-['Poppins:SemiBold',sans-serif] text-[15px] text-white">
                    {deliveryTime}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-[16px] bg-white/10 rounded-[8px] p-[12px]">
            <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-white/90 text-center">
              You will receive updates about your order via notifications
            </p>
          </div>
        </div>

        {/* Order Status Steps */}
        <div className="bg-white rounded-[16px] p-[20px] shadow-md border border-gray-200 mb-[16px]">
          <h3 className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-[#121314] mb-[16px]">
            Order Tracking
          </h3>
          <div className="space-y-[16px]">
            {/* Step 1 - Completed */}
            <div className="flex items-center gap-[12px]">
              <div className="size-[32px] rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="size-[18px] text-white" />
              </div>
              <div className="flex-1">
                <p className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-[#121314]">
                  Order Placed
                </p>
                <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-gray-600">
                  Your order has been confirmed
                </p>
              </div>
            </div>

            {/* Connector Line */}
            <div className="ml-[16px] h-[24px] w-[2px] bg-gray-300"></div>

            {/* Step 2 - Pending */}
            <div className="flex items-center gap-[12px]">
              <div className="size-[32px] rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                <div className="size-[12px] rounded-full bg-white"></div>
              </div>
              <div className="flex-1">
                <p className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-gray-500">
                  Processing
                </p>
                <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-gray-500">
                  We're preparing your order
                </p>
              </div>
            </div>

            {/* Connector Line */}
            <div className="ml-[16px] h-[24px] w-[2px] bg-gray-300"></div>

            {/* Step 3 - Pending */}
            <div className="flex items-center gap-[12px]">
              <div className="size-[32px] rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                <div className="size-[12px] rounded-full bg-white"></div>
              </div>
              <div className="flex-1">
                <p className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-gray-500">
                  Out for Delivery
                </p>
                <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-gray-500">
                  On the way to you
                </p>
              </div>
            </div>

            {/* Connector Line */}
            <div className="ml-[16px] h-[24px] w-[2px] bg-gray-300"></div>

            {/* Step 4 - Pending */}
            <div className="flex items-center gap-[12px]">
              <div className="size-[32px] rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                <div className="size-[12px] rounded-full bg-white"></div>
              </div>
              <div className="flex-1">
                <p className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-gray-500">
                  Delivered
                </p>
                <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-gray-500">
                  Package delivered
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action - Fixed */}
      <div className="fixed bottom-[80px] left-0 right-0 bg-white border-t-2 border-gray-200 shadow-lg max-w-[393px] mx-auto z-50">
        <div className="px-[16px] py-[16px]">
          <button
            onClick={() => navigate("/home")}
            className="w-full bg-[#1F75BE] hover:bg-[#1a64a3] text-white rounded-[8px] py-[14px] font-['Poppins:SemiBold',sans-serif] text-[16px] transition-all active:scale-[0.98] shadow-md"
          >
            Continue Shopping
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavBar />
    </div>
  );
}
