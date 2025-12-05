import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { Loader2, CreditCard, Wallet, Banknote } from "lucide-react";
import { useCart } from "../utils/CartContext";
import BottomNavBar from "./BottomNavBar";

export default function PaymentProcessingScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const { clearCart } = useCart();
  const paymentMode = location.state?.paymentMode || "upi";
  const totalAmount = location.state?.totalAmount || location.state?.amount || 0;
  const requestType = location.state?.requestType || null; // "prescription", "request", or "appointment"
  const medicineName = location.state?.medicineName || "";
  const requestId = location.state?.requestId || "";
  const deliveryAddress = location.state?.deliveryAddress || "";
  const formData = location.state?.formData || null;
  
  // Appointment details
  const appointmentDetails = (location.state?.doctorName || location.state?.careTakerName || location.state?.physiotherapistName) ? {
    doctorName: location.state.doctorName,
    careTakerName: location.state.careTakerName,
    physiotherapistName: location.state.physiotherapistName,
    specialty: location.state.specialty,
    date: location.state.date,
    time: location.state.time,
    appointmentType: location.state.appointmentType,
    serviceType: location.state.serviceType,
    location: location.state.location,
    amount: location.state.amount
  } : null;

  const getPaymentIcon = () => {
    switch (paymentMode) {
      case "upi":
        return <Wallet className="size-[60px] text-[#1F75BE]" />;
      case "card":
        return <CreditCard className="size-[60px] text-[#1F75BE]" />;
      case "cash":
        return <Banknote className="size-[60px] text-[#1F75BE]" />;
      case "netbanking":
        return <Wallet className="size-[60px] text-[#1F75BE]" />;
      default:
        return <Wallet className="size-[60px] text-[#1F75BE]" />;
    }
  };

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

  useEffect(() => {
    const timer = setTimeout(() => {
      // Check if this is an appointment payment
      if (requestType === "appointment" && appointmentDetails) {
        navigate("/doctor-appointment-success", { 
          state: appointmentDetails,
          replace: true 
        });
      } else if (requestType === "prescription" || requestType === "request") {
        // Navigate to prescription success screen
        navigate("/prescription-success", { 
          state: { 
            paymentMode,
            requestType,
            medicineName,
            requestId,
            deliveryAddress,
            formData
          },
          replace: true 
        });
      } else {
        // Clear cart before navigating to order success screen (regular medicine order)
        clearCart();
        navigate("/order-success", { 
          state: { 
            paymentMode,
            totalAmount 
          },
          replace: true 
        });
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate, paymentMode, totalAmount, clearCart, requestType, medicineName, requestId, deliveryAddress, formData, appointmentDetails]);

  return (
    <div className="bg-gradient-to-b from-[#1F75BE] to-[#1a64a3] min-h-screen w-full max-w-[393px] mx-auto relative flex flex-col items-center justify-center px-[32px] pb-[120px]">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] left-[10%] size-[100px] bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-[30%] right-[15%] size-[80px] bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-[50%] left-[70%] size-[60px] bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Payment Icon */}
        <div className="bg-white/20 backdrop-blur-sm rounded-full p-[24px] mb-[24px] border-4 border-white/30">
          {getPaymentIcon()}
        </div>

        {/* Loading Spinner */}
        <div className="relative mb-[24px]">
          <Loader2 className="size-[80px] text-white animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="size-[40px] bg-white/30 rounded-full"></div>
          </div>
        </div>

        {/* Text */}
        <h1 className="font-['Poppins:SemiBold',sans-serif] text-[24px] text-white mb-[12px] text-center">
          Processing Payment
        </h1>
        <p className="font-['Poppins:Regular',sans-serif] text-[16px] text-white/90 mb-[8px] text-center">
          {getPaymentName()}
        </p>
        {totalAmount > 0 && (
          <p className="font-['Poppins:Medium',sans-serif] text-[20px] text-white mb-[24px] text-center">
            ₹{totalAmount}
          </p>
        )}
        {requestType === "appointment" && appointmentDetails && (
          <p className="font-['Poppins:Regular',sans-serif] text-[15px] text-white/90 mb-[24px] text-center">
            Booking appointment with {appointmentDetails.doctorName || appointmentDetails.careTakerName || appointmentDetails.physiotherapistName}
          </p>
        )}
        {(requestType === "prescription" || requestType === "request") && medicineName && (
          <p className="font-['Poppins:Regular',sans-serif] text-[15px] text-white/90 mb-[24px] text-center">
            {medicineName}
          </p>
        )}
        
        {/* Progress Indicator */}
        <div className="w-full max-w-[200px] h-[4px] bg-white/30 rounded-full overflow-hidden">
          <div className="h-full bg-white rounded-full animate-[progress_5s_ease-in-out]"></div>
        </div>
        
        <p className="font-['Poppins:Regular',sans-serif] text-[14px] text-white/80 mt-[16px] text-center">
          Please wait while we process your payment...
        </p>
      </div>

      <style>{`
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>

      {/* Bottom Navigation */}
      <BottomNavBar />
    </div>
  );
}
