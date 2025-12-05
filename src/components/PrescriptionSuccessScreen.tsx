import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { CheckCircle, Package, Clock, MapPin, FileText, Phone } from "lucide-react";
import BottomNavBar from "./BottomNavBar";

export default function PrescriptionSuccessScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const paymentMode = location.state?.paymentMode || "upi";
  const requestType = location.state?.requestType || "prescription";
  const medicineName = location.state?.medicineName || "Medicine";
  const requestId = location.state?.requestId || "";
  const deliveryAddress = location.state?.deliveryAddress || "Your Address";
  const formData = location.state?.formData || null;

  // Calculate delivery date based on request type
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + (requestType === "prescription" ? 2 : 3));
  const formattedDeliveryDate = deliveryDate.toLocaleDateString('en-US', { 
    weekday: 'long',
    month: 'long', 
    day: 'numeric',
    year: 'numeric'
  });

  const getPaymentName = () => {
    switch (paymentMode) {
      case "upi": return "UPI Payment";
      case "card": return "Card Payment";
      case "cash": return "Cash on Delivery";
      case "netbanking": return "Net Banking";
      default: return "Payment";
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/medicine");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="bg-gradient-to-b from-[#f8f9fa] to-white min-h-screen w-full max-w-[393px] mx-auto relative flex flex-col items-center justify-center px-[20px]">
      {/* Success Icon */}
      <div className="size-[100px] bg-[#3DAB51]/10 rounded-full flex items-center justify-center mb-[24px] animate-bounce">
        <CheckCircle className="size-[60px] text-[#3DAB51]" />
      </div>

      {/* Title */}
      <h1 className="font-['Poppins:Bold',sans-serif] text-[26px] text-[#121314] mb-[8px] text-center">
        {requestType === "prescription" ? "Prescription Submitted!" : "Request Submitted!"}
      </h1>
      <p className="font-['Poppins:Regular',sans-serif] text-[14px] text-[#5f6368] text-center mb-[24px]">
        Your {requestType === "prescription" ? "prescription" : "medicine request"} has been confirmed
      </p>

      {/* Order Details Card */}
      <div className="w-full bg-white rounded-[16px] p-[20px] shadow-lg border border-gray-200 mb-[20px]">
        {/* Reference ID */}
        <div className="bg-[#f8fbff] rounded-[12px] p-[12px] mb-[16px] border border-[#1F75BE]/20">
          <p className="font-['Poppins:Regular',sans-serif] text-[11px] text-[#5f6368] mb-[4px]">
            {requestType === "prescription" ? "Prescription Reference ID" : "Request Reference ID"}
          </p>
          <p className="font-['Poppins:Bold',sans-serif] text-[16px] text-[#1F75BE]">
            {requestId}
          </p>
        </div>

        {/* Medicine Name */}
        <div className="flex items-start gap-[12px] mb-[16px] pb-[16px] border-b border-gray-100">
          <FileText className="size-[20px] text-[#1F75BE] mt-[2px] flex-shrink-0" />
          <div className="flex-1">
            <p className="font-['Poppins:Regular',sans-serif] text-[11px] text-[#5f6368]">
              Medicine
            </p>
            <p className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-[#121314]">
              {medicineName}
            </p>
          </div>
        </div>

        {/* Payment Method */}
        <div className="flex items-start gap-[12px] mb-[16px] pb-[16px] border-b border-gray-100">
          <Package className="size-[20px] text-[#3DAB51] mt-[2px] flex-shrink-0" />
          <div className="flex-1">
            <p className="font-['Poppins:Regular',sans-serif] text-[11px] text-[#5f6368]">
              Payment Method
            </p>
            <p className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-[#121314]">
              {getPaymentName()}
            </p>
            <p className="font-['Poppins:Regular',sans-serif] text-[11px] text-[#3DAB51]">
              ✓ Payment Confirmed
            </p>
          </div>
        </div>

        {/* Delivery Information */}
        <div className="bg-[#e3f9e8] rounded-[12px] p-[14px] border border-[#3DAB51]/20">
          <div className="flex items-center gap-[8px] mb-[12px]">
            <Package className="size-[20px] text-[#3DAB51]" />
            <p className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-[#121314]">
              Delivery Details
            </p>
          </div>
          
          <div className="space-y-[10px]">
            {/* Expected Delivery Date */}
            <div className="flex items-start gap-[10px]">
              <Clock className="size-[16px] text-[#1F75BE] mt-[2px] flex-shrink-0" />
              <div>
                <p className="font-['Poppins:Regular',sans-serif] text-[11px] text-[#5f6368]">
                  Expected Delivery
                </p>
                <p className="font-['Poppins:SemiBold',sans-serif] text-[13px] text-[#121314]">
                  {formattedDeliveryDate}
                </p>
                <p className="font-['Poppins:Regular',sans-serif] text-[11px] text-[#3DAB51]">
                  Between 10:00 AM - 6:00 PM
                </p>
              </div>
            </div>

            {/* Delivery Location */}
            <div className="flex items-start gap-[10px]">
              <MapPin className="size-[16px] text-[#1F75BE] mt-[2px] flex-shrink-0" />
              <div>
                <p className="font-['Poppins:Regular',sans-serif] text-[11px] text-[#5f6368]">
                  Delivery Location
                </p>
                <p className="font-['Poppins:SemiBold',sans-serif] text-[13px] text-[#121314]">
                  {deliveryAddress.substring(0, 50)}{deliveryAddress.length > 50 ? "..." : ""}
                </p>
              </div>
            </div>

            {/* Contact Info (if from manual form) */}
            {formData && formData.phone && (
              <div className="flex items-start gap-[10px]">
                <Phone className="size-[16px] text-[#1F75BE] mt-[2px] flex-shrink-0" />
                <div>
                  <p className="font-['Poppins:Regular',sans-serif] text-[11px] text-[#5f6368]">
                    Contact Number
                  </p>
                  <p className="font-['Poppins:SemiBold',sans-serif] text-[13px] text-[#121314]">
                    {formData.phone}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="w-full bg-[#fff9e6] rounded-[12px] p-[14px] mb-[20px] border border-[#ffd700]/30">
        <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#5f6368] text-center">
          {requestType === "prescription" 
            ? "💊 Your prescription has been verified. We'll deliver the medicines to your doorstep."
            : "💊 We're sourcing the medicine for you. You'll receive updates via SMS and call."}
        </p>
      </div>

      {/* Redirect Message */}
      <p className="font-['Poppins:SemiBold',sans-serif] text-[13px] text-[#1F75BE] text-center animate-pulse">
        Redirecting in 5 seconds...
      </p>

      {/* Bottom Navigation */}
      <BottomNavBar />
    </div>
  );
}
