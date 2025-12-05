import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { ArrowLeft, CreditCard, Smartphone, Wallet, Building2 } from "lucide-react";
import BottomNavBar from "./BottomNavBar";

type PaymentMethod = "card" | "upi" | "wallet" | "netbanking";

export default function PackagePaymentScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const packageData = location.state?.package;
  const appointmentData = location.state?.appointment;

  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod | null>(null);
  const [processing, setProcessing] = useState(false);

  const paymentMethods = [
    {
      id: "card" as PaymentMethod,
      icon: CreditCard,
      title: "Credit / Debit Card",
      description: "Pay securely with your card"
    },
    {
      id: "upi" as PaymentMethod,
      icon: Smartphone,
      title: "UPI",
      description: "Google Pay, PhonePe, Paytm"
    },
    {
      id: "wallet" as PaymentMethod,
      icon: Wallet,
      title: "Wallet",
      description: "Paytm, PhonePe, Amazon Pay"
    },
    {
      id: "netbanking" as PaymentMethod,
      icon: Building2,
      title: "Net Banking",
      description: "Pay via your bank account"
    }
  ];

  const handlePayment = () => {
    if (!selectedMethod) return;

    setProcessing(true);
    
    // Navigate to processing screen
    setTimeout(() => {
      navigate("/package-payment-processing", {
        state: {
          package: packageData,
          appointment: appointmentData,
          paymentMethod: selectedMethod
        }
      });
    }, 800);
  };

  return (
    <div className="bg-white h-screen w-screen overflow-hidden max-w-[393px] mx-auto flex flex-col">
      {/* Header */}
      <div className="bg-white px-[20px] pt-[20px] pb-[16px] border-b border-[#E0E0E0]">
        <div className="flex items-center justify-between">
          <button
            className="flex items-center justify-center size-[40px] cursor-pointer hover:bg-[#1F75BE]/10 rounded-full transition-all active:scale-95 border border-gray-200 hover:border-[#1F75BE] bg-white"
            onClick={() => navigate(-1)}
            disabled={processing}
          >
            <ArrowLeft className="size-[20px] text-[#1F75BE]" />
          </button>
          <h1 className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-[#1F75BE]">
            Payment Method
          </h1>
          <div className="w-[40px]" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-[20px] py-[24px] pb-[180px]">
        {/* Order Summary */}
        <div className="bg-gradient-to-br from-[#E3F2FD] to-white rounded-[16px] p-[16px] mb-[24px] border border-[#1F75BE]/20">
          <h2 className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-[#121314] mb-[12px]">
            Booking Summary
          </h2>
          {packageData && (
            <>
              <div className="flex justify-between items-center mb-[8px]">
                <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#606060]">
                  {packageData.title}
                </p>
                <p className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-[#1F75BE]">
                  {packageData.price}
                </p>
              </div>
              {appointmentData && (
                <>
                  <div className="h-[1px] bg-gray-200 my-[12px]" />
                  <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#606060] mb-[4px]">
                    <span className="font-['Roboto:Medium',sans-serif]">Date:</span>{" "}
                    {new Date(appointmentData.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </p>
                  <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#606060] mb-[4px]">
                    <span className="font-['Roboto:Medium',sans-serif]">Time:</span> {appointmentData.time}
                  </p>
                  <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#606060]">
                    <span className="font-['Roboto:Medium',sans-serif]">Duration:</span> {appointmentData.duration} Hours
                  </p>
                </>
              )}
            </>
          )}
        </div>

        {/* Payment Methods */}
        <h3 className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-[#121314] mb-[16px]">
          Select Payment Method
        </h3>
        <div className="space-y-[12px]">
          {paymentMethods.map((method) => {
            const Icon = method.icon;
            return (
              <button
                key={method.id}
                onClick={() => setSelectedMethod(method.id)}
                disabled={processing}
                className={`w-full flex items-center gap-[16px] p-[16px] rounded-[12px] border-2 transition-all ${
                  selectedMethod === method.id
                    ? "bg-[#E3F2FD] border-[#1F75BE]"
                    : "bg-white border-gray-200 hover:border-[#1F75BE]"
                } ${processing ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                <div className={`flex items-center justify-center size-[48px] rounded-[12px] ${
                  selectedMethod === method.id ? "bg-[#1F75BE]" : "bg-[#F5F5F5]"
                }`}>
                  <Icon className={`size-[24px] ${
                    selectedMethod === method.id ? "text-white" : "text-[#1F75BE]"
                  }`} />
                </div>
                <div className="flex-1 text-left">
                  <p className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-[#121314] mb-[2px]">
                    {method.title}
                  </p>
                  <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#606060]">
                    {method.description}
                  </p>
                </div>
                <div className={`size-[20px] rounded-full border-2 flex items-center justify-center ${
                  selectedMethod === method.id
                    ? "border-[#1F75BE] bg-[#1F75BE]"
                    : "border-gray-300"
                }`}>
                  {selectedMethod === method.id && (
                    <div className="size-[10px] bg-white rounded-full" />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Pay Button */}
      <div className="bg-white border-t border-[#E0E0E0] px-[20px] py-[16px]">
        <button
          onClick={handlePayment}
          disabled={!selectedMethod || processing}
          className={`w-full py-[14px] rounded-[12px] font-['Poppins:SemiBold',sans-serif] text-[16px] transition-all ${
            selectedMethod && !processing
              ? "bg-[#1F75BE] text-white hover:bg-[#1A5F9E] active:scale-98"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          {processing ? "Processing Payment..." : `Pay ${packageData?.price || ""}`}
        </button>
      </div>

      {/* Bottom Navigation */}
      <BottomNavBar />
    </div>
  );
}
