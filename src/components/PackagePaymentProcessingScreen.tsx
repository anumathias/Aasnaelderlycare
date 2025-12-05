import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { Loader2, CheckCircle2 } from "lucide-react";
import BottomNavBar from "./BottomNavBar";

export default function PackagePaymentProcessingScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const packageData = location.state?.package;
  const appointmentData = location.state?.appointment;
  const paymentMethod = location.state?.paymentMethod;

  const [countdown, setCountdown] = useState(3);
  const [isProcessing, setIsProcessing] = useState(true);

  useEffect(() => {
    // Countdown timer
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      // Show success checkmark briefly
      setIsProcessing(false);
      
      // Navigate to confirmation after showing success
      const successTimer = setTimeout(() => {
        navigate("/package-appointment-confirmed", {
          state: {
            package: packageData,
            appointment: appointmentData,
            paymentMethod: paymentMethod
          }
        });
      }, 1500);
      
      return () => clearTimeout(successTimer);
    }
  }, [countdown, navigate, packageData, appointmentData, paymentMethod]);

  return (
    <div className="bg-white h-screen w-screen overflow-hidden max-w-[393px] mx-auto flex flex-col items-center justify-center p-[20px] pb-[100px]">
      <div className="flex flex-col items-center">
        {isProcessing ? (
          <>
            {/* Processing Animation */}
            <div className="relative mb-[32px]">
              <div className="size-[120px] rounded-full bg-gradient-to-br from-[#1F75BE] to-[#1A5F9E] flex items-center justify-center animate-pulse-scale">
                <Loader2 className="size-[60px] text-white animate-spin" />
              </div>
              <div className="absolute inset-0 size-[120px] rounded-full bg-[#1F75BE]/20 animate-ping" />
            </div>

            {/* Countdown */}
            <div className="mb-[24px]">
              <div className="size-[80px] rounded-full bg-gradient-to-br from-[#E3F2FD] to-white border-4 border-[#1F75BE] flex items-center justify-center">
                <span className="font-['Poppins:Bold',sans-serif] text-[36px] text-[#1F75BE]">
                  {countdown}
                </span>
              </div>
            </div>

            {/* Processing Text */}
            <h1 className="font-['Poppins:Bold',sans-serif] text-[24px] text-[#121314] mb-[12px] text-center">
              Processing Payment
            </h1>
            <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#606060] text-center max-w-[280px] mb-[8px]">
              Please wait while we confirm your payment
            </p>
            <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#1F75BE] text-center">
              This will only take a moment...
            </p>
          </>
        ) : (
          <>
            {/* Success Animation */}
            <div className="relative mb-[32px]">
              <div className="size-[120px] rounded-full bg-gradient-to-br from-[#4CAF50] to-[#45A049] flex items-center justify-center animate-scale-in">
                <CheckCircle2 className="size-[60px] text-white" />
              </div>
              <div className="absolute inset-0 size-[120px] rounded-full bg-[#4CAF50]/20 animate-ping" />
            </div>

            {/* Success Text */}
            <h1 className="font-['Poppins:Bold',sans-serif] text-[24px] text-[#121314] mb-[12px] text-center">
              Payment Successful!
            </h1>
            <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#606060] text-center max-w-[280px]">
              Redirecting to confirmation...
            </p>
          </>
        )}

        {/* Payment Details */}
        {packageData && (
          <div className="mt-[32px] w-full bg-gradient-to-br from-[#F5F5F5] to-white rounded-[16px] p-[16px] border border-gray-200">
            <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#606060] text-center mb-[4px]">
              Booking
            </p>
            <p className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-[#121314] text-center mb-[8px]">
              {packageData.title}
            </p>
            <p className="font-['Poppins:Bold',sans-serif] text-[18px] text-[#1F75BE] text-center">
              {packageData.price}
            </p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes pulse-scale {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.9;
          }
        }
        .animate-pulse-scale {
          animation: pulse-scale 2s ease-in-out infinite;
        }
        @keyframes scale-in {
          from {
            transform: scale(0);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-scale-in {
          animation: scale-in 0.5s ease-out;
        }
        @keyframes ping {
          75%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        .animate-ping {
          animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
      `}</style>

      {/* Bottom Navigation */}
      <BottomNavBar />
    </div>
  );
}
