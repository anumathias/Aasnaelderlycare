import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { ArrowLeft, CreditCard, Wallet, Building2, Smartphone, Check } from "lucide-react";
import BottomNavBar from "./BottomNavBar";

type PaymentMode = "card" | "upi" | "netbanking" | "wallet" | null;

export function DoctorAppointmentPaymentScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const appointmentDetails = location.state as {
    doctorName: string;
    specialty: string;
    date: string;
    time: string;
    appointmentType: string;
    location: string;
    amount: string;
  };

  const [selectedPaymentMode, setSelectedPaymentMode] = useState<PaymentMode>(null);

  if (!appointmentDetails) {
    navigate("/home");
    return null;
  }

  const handleProceedToPay = () => {
    if (!selectedPaymentMode) {
      alert("Please select a payment mode");
      return;
    }

    // Navigate to payment processing screen
    navigate("/payment-processing", {
      state: {
        ...appointmentDetails,
        paymentMode: selectedPaymentMode,
        requestType: "appointment"
      }
    });
  };

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  return (
    <div className="relative flex flex-col items-center min-h-screen w-full max-w-[393px] mx-auto bg-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white w-full border-b border-[#e5e7eb]">
        <div className="flex items-center justify-between px-[16px] py-[14px]">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center w-[32px] h-[32px] rounded-full hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft className="size-[20px] text-[#1F75BE]" />
          </button>
          <h1 className="font-['Poppins:SemiBold',sans-serif] text-[17px] text-[#121314]">
            Payment
          </h1>
          <div className="w-[32px]" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 w-full px-[16px] py-[20px] pb-[200px] overflow-y-auto">
        {/* Appointment Summary */}
        <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-[12px] p-[16px] mb-[24px]">
          <h2 className="font-['Poppins:SemiBold',sans-serif] text-[15px] text-[#121314] mb-[12px]">
            Appointment Summary
          </h2>
          
          <div className="space-y-[8px]">
            <div className="flex justify-between">
              <p className="font-['Poppins:Regular',sans-serif] text-[13px] text-[#5f6368]">
                Doctor
              </p>
              <p className="font-['Poppins:SemiBold',sans-serif] text-[13px] text-[#121314]">
                {appointmentDetails.doctorName}
              </p>
            </div>
            
            <div className="flex justify-between">
              <p className="font-['Poppins:Regular',sans-serif] text-[13px] text-[#5f6368]">
                Specialty
              </p>
              <p className="font-['Poppins:Regular',sans-serif] text-[13px] text-[#121314]">
                {appointmentDetails.specialty}
              </p>
            </div>
            
            <div className="flex justify-between">
              <p className="font-['Poppins:Regular',sans-serif] text-[13px] text-[#5f6368]">
                Date
              </p>
              <p className="font-['Poppins:Regular',sans-serif] text-[13px] text-[#121314]">
                {formatDate(appointmentDetails.date)}
              </p>
            </div>
            
            <div className="flex justify-between">
              <p className="font-['Poppins:Regular',sans-serif] text-[13px] text-[#5f6368]">
                Time
              </p>
              <p className="font-['Poppins:Regular',sans-serif] text-[13px] text-[#121314]">
                {appointmentDetails.time}
              </p>
            </div>
            
            <div className="flex justify-between">
              <p className="font-['Poppins:Regular',sans-serif] text-[13px] text-[#5f6368]">
                Type
              </p>
              <p className="font-['Poppins:Regular',sans-serif] text-[13px] text-[#121314]">
                {appointmentDetails.appointmentType === "in-person" ? "In-Person" : "Home Visit"}
              </p>
            </div>
            
            <div className="flex justify-between items-start">
              <p className="font-['Poppins:Regular',sans-serif] text-[13px] text-[#5f6368]">
                Location
              </p>
              <p className="font-['Poppins:Regular',sans-serif] text-[13px] text-[#121314] text-right max-w-[200px]">
                {appointmentDetails.location}
              </p>
            </div>
          </div>
        </div>

        {/* Payment Mode Selection */}
        <div className="mb-[24px]">
          <h2 className="font-['Poppins:SemiBold',sans-serif] text-[15px] text-[#121314] mb-[12px]">
            Select Payment Mode
          </h2>
          
          <div className="space-y-[12px]">
            {/* Credit/Debit Card */}
            <button
              onClick={() => setSelectedPaymentMode("card")}
              className={`w-full flex items-center justify-between p-[16px] rounded-[12px] border-2 transition-all ${
                selectedPaymentMode === "card"
                  ? "border-[#1F75BE] bg-[#e8f4fd]"
                  : "border-[#e5e7eb] bg-white hover:border-[#1F75BE]/40"
              }`}
            >
              <div className="flex items-center gap-[12px]">
                <CreditCard className={`size-[22px] ${
                  selectedPaymentMode === "card" ? "text-[#1F75BE]" : "text-[#5f6368]"
                }`} />
                <p className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-[#121314]">
                  Credit/Debit Card
                </p>
              </div>
              {selectedPaymentMode === "card" && (
                <Check className="size-[20px] text-[#1F75BE]" />
              )}
            </button>

            {/* UPI */}
            <button
              onClick={() => setSelectedPaymentMode("upi")}
              className={`w-full flex items-center justify-between p-[16px] rounded-[12px] border-2 transition-all ${
                selectedPaymentMode === "upi"
                  ? "border-[#1F75BE] bg-[#e8f4fd]"
                  : "border-[#e5e7eb] bg-white hover:border-[#1F75BE]/40"
              }`}
            >
              <div className="flex items-center gap-[12px]">
                <Smartphone className={`size-[22px] ${
                  selectedPaymentMode === "upi" ? "text-[#1F75BE]" : "text-[#5f6368]"
                }`} />
                <p className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-[#121314]">
                  UPI
                </p>
              </div>
              {selectedPaymentMode === "upi" && (
                <Check className="size-[20px] text-[#1F75BE]" />
              )}
            </button>

            {/* Net Banking */}
            <button
              onClick={() => setSelectedPaymentMode("netbanking")}
              className={`w-full flex items-center justify-between p-[16px] rounded-[12px] border-2 transition-all ${
                selectedPaymentMode === "netbanking"
                  ? "border-[#1F75BE] bg-[#e8f4fd]"
                  : "border-[#e5e7eb] bg-white hover:border-[#1F75BE]/40"
              }`}
            >
              <div className="flex items-center gap-[12px]">
                <Building2 className={`size-[22px] ${
                  selectedPaymentMode === "netbanking" ? "text-[#1F75BE]" : "text-[#5f6368]"
                }`} />
                <p className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-[#121314]">
                  Net Banking
                </p>
              </div>
              {selectedPaymentMode === "netbanking" && (
                <Check className="size-[20px] text-[#1F75BE]" />
              )}
            </button>

            {/* Wallet */}
            <button
              onClick={() => setSelectedPaymentMode("wallet")}
              className={`w-full flex items-center justify-between p-[16px] rounded-[12px] border-2 transition-all ${
                selectedPaymentMode === "wallet"
                  ? "border-[#1F75BE] bg-[#e8f4fd]"
                  : "border-[#e5e7eb] bg-white hover:border-[#1F75BE]/40"
              }`}
            >
              <div className="flex items-center gap-[12px]">
                <Wallet className={`size-[22px] ${
                  selectedPaymentMode === "wallet" ? "text-[#1F75BE]" : "text-[#5f6368]"
                }`} />
                <p className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-[#121314]">
                  Wallet
                </p>
              </div>
              {selectedPaymentMode === "wallet" && (
                <Check className="size-[20px] text-[#1F75BE]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Fixed Section */}
      <div className="fixed bottom-[80px] left-0 right-0 bg-white border-t border-[#e5e7eb] px-[16px] py-[14px] max-w-[393px] mx-auto w-full z-50">
        <div className="flex items-center justify-between mb-[10px]">
          <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#5f6368]">
            Consultation Fee
          </p>
          <p className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-[#1F75BE]">
            ₹{appointmentDetails.amount}
          </p>
        </div>
        <button
          onClick={handleProceedToPay}
          disabled={!selectedPaymentMode}
          className="w-full bg-[#1F75BE] hover:bg-[#1a64a3] text-white rounded-[10px] py-[14px] font-['Poppins:SemiBold',sans-serif] text-[15px] transition-all active:scale-[0.98] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Proceed to Pay
        </button>
      </div>

      {/* Bottom Navigation */}
      <BottomNavBar />
    </div>
  );
}
