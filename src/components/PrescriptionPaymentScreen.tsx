import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { ArrowLeft, MapPin, CreditCard, Wallet, Banknote, Home, FileText } from "lucide-react";
import { toast } from "sonner@2.0.3";
import BottomNavBar from "./BottomNavBar";

export default function PrescriptionPaymentScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const medicineName = location.state?.medicineName || "Medicine";
  const requestType = location.state?.requestType || "prescription"; // "prescription" or "request"
  const requestId = location.state?.requestId || "";
  const formData = location.state?.formData || null;

  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [selectedPayment, setSelectedPayment] = useState("");

  const paymentModes = [
    { id: "upi", name: "UPI Payment", icon: Wallet, description: "Google Pay, PhonePe, Paytm" },
    { id: "card", name: "Credit/Debit Card", icon: CreditCard, description: "Visa, Mastercard, RuPay" },
    { id: "cash", name: "Cash on Delivery", icon: Banknote, description: "Pay when you receive" },
    { id: "netbanking", name: "Net Banking", icon: Wallet, description: "Direct bank transfer" },
  ];

  const handleProceedToPayment = () => {
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
        requestType,
        medicineName,
        requestId,
        deliveryAddress,
        formData
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
            onClick={() => navigate(-1)}
            className="flex items-center justify-center size-[40px] rounded-full hover:bg-[#1F75BE]/10 transition-all active:scale-95 border border-gray-200 hover:border-[#1F75BE]"
          >
            <ArrowLeft className="size-[24px] text-[#1F75BE]" />
          </button>
          <div className="flex items-center gap-[12px]">
            <FileText className="size-[28px] text-[#1F75BE]" />
            <h1 className="font-['Poppins:SemiBold',sans-serif] text-[20px] text-[#121314]">
              {requestType === "prescription" ? "Prescription Payment" : "Request Payment"}
            </h1>
          </div>
          <div className="size-[40px]"></div>
        </div>

        {/* Info Box */}
        <div className="bg-[#e3f2fd] border border-[#1F75BE]/30 rounded-[12px] p-[16px] mb-[16px]">
          <p className="font-['Poppins:Medium',sans-serif] text-[13px] text-[#1e3678] leading-[20px]">
            {requestType === "prescription" 
              ? "Complete payment to confirm your prescription order"
              : "Complete payment to confirm your medicine request"}
          </p>
          <p className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-[#1F75BE] mt-[8px]">
            Medicine: {medicineName}
          </p>
          {requestId && (
            <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#5f6368] mt-[4px]">
              Reference ID: {requestId}
            </p>
          )}
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

        {/* Note */}
        <div className="bg-[#fff9e6] rounded-[10px] p-[12px] border border-[#ffd700]/30">
          <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#5f6368] text-center">
            💊 Payment confirms your order. You'll receive delivery updates via SMS.
          </p>
        </div>
      </div>

      {/* Bottom Action - Fixed above BottomNavBar */}
      <div className="fixed bottom-[80px] left-0 right-0 bg-white border-t-2 border-gray-200 shadow-lg max-w-[393px] mx-auto">
        <div className="px-[16px] py-[16px]">
          <button
            onClick={handleProceedToPayment}
            className="w-full bg-[#1F75BE] hover:bg-[#1a64a3] text-white rounded-[8px] py-[14px] font-['Poppins:SemiBold',sans-serif] text-[16px] transition-all active:scale-[0.98] shadow-md"
          >
            Proceed to Payment
          </button>
          <p className="text-center font-['Poppins:Regular',sans-serif] text-[11px] text-gray-500 mt-[8px]">
            Secure payment powered by Aasna
          </p>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavBar />
    </div>
  );
}
