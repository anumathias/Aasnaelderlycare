import { Phone, X, MessageCircle, Navigation } from "lucide-react";

type HospitalCallModalProps = {
  isOpen: boolean;
  onClose: () => void;
  hospitalName: string;
  hospitalPhone: string;
};

export default function HospitalCallModal({
  isOpen,
  onClose,
  hospitalName,
  hospitalPhone
}: HospitalCallModalProps) {
  if (!isOpen) return null;

  const handleCall = () => {
    // Simulate call action
    window.alert(`Calling ${hospitalName} at ${hospitalPhone}`);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-end justify-center z-50 animate-fadeIn" onClick={onClose}>
      <div className="bg-white rounded-t-[24px] w-full max-w-[393px] p-[24px] animate-slideUp relative" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-[16px] right-[16px] bg-gray-100 rounded-full p-[8px] hover:bg-gray-200 transition-colors active:scale-95"
        >
          <X className="size-[20px] text-[#606060]" />
        </button>

        {/* Hospital Icon */}
        <div className="flex justify-center mb-[20px]">
          <div className="bg-[#3DAB51] rounded-full p-[20px]">
            <Phone className="size-[40px] text-white" />
          </div>
        </div>

        {/* Hospital Info */}
        <div className="text-center mb-[24px]">
          <h2 className="font-['Poppins:SemiBold',sans-serif] text-[22px] text-[#121314] mb-[8px]">
            {hospitalName}
          </h2>
          <p className="font-['Roboto:Regular',sans-serif] text-[16px] text-[#606060] mb-[4px]">
            Emergency Contact
          </p>
          <p className="font-['Roboto:SemiBold',sans-serif] text-[28px] text-[#1F75BE]">
            {hospitalPhone}
          </p>
        </div>

        {/* Quick Info */}
        <div className="bg-[#E8F5E9] rounded-[12px] p-[16px] mb-[24px]">
          <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#606060] text-center leading-[1.5]">
            Emergency services available 24/7. Ambulance dispatch available immediately upon confirmation.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-[12px]">
          <button
            onClick={handleCall}
            className="w-full bg-[#3DAB51] rounded-[12px] py-[16px] flex items-center justify-center gap-[12px] hover:bg-[#2E8B40] transition-colors active:scale-98 shadow-lg"
          >
            <Phone className="size-[24px] text-white" />
            <span className="font-['Roboto:SemiBold',sans-serif] text-[18px] text-white">
              Call Now
            </span>
          </button>

          <div className="grid grid-cols-2 gap-[12px]">
            <button
              onClick={onClose}
              className="bg-[#E3F2FD] border border-[#1F75BE] rounded-[12px] py-[12px] flex items-center justify-center gap-[8px] hover:bg-[#BBDEFB] transition-colors active:scale-95"
            >
              <MessageCircle className="size-[20px] text-[#1F75BE]" />
              <span className="font-['Roboto:SemiBold',sans-serif] text-[14px] text-[#1F75BE]">
                Message
              </span>
            </button>

            <button
              onClick={onClose}
              className="bg-white border-2 border-[#E0E0E0] rounded-[12px] py-[12px] hover:bg-gray-50 transition-colors active:scale-95"
            >
              <span className="font-['Roboto:SemiBold',sans-serif] text-[14px] text-[#606060]">
                Cancel
              </span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
