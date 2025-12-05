import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { ArrowLeft, FileText, Phone, Mail, User, Pill } from "lucide-react";
import { toast } from "sonner@2.0.3";
import BottomNavBar from "./BottomNavBar";

export default function MedicineRequestFormScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const medicineName = location.state?.medicineName || "";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    medicineName: medicineName,
    quantity: "",
    additionalNotes: ""
  });
  
  // Generate request reference ID
  const requestId = `REQ${Date.now().toString().slice(-8)}`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim()) {
      toast.error("Please enter your name");
      return;
    }
    if (!formData.phone.trim()) {
      toast.error("Please enter your phone number");
      return;
    }
    if (!formData.medicineName.trim()) {
      toast.error("Please enter medicine name");
      return;
    }

    // Navigate to payment screen
    navigate("/prescription-payment", {
      state: {
        medicineName: formData.medicineName,
        requestType: "request",
        requestId: requestId,
        formData: formData
      }
    });
  };

  return (
    <div className="bg-gradient-to-b from-[#f8f9fa] to-white min-h-screen w-full max-w-[393px] mx-auto relative flex flex-col pb-[80px]">
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
              Medicine Request
            </h1>
          </div>
          <div className="size-[40px]"></div>
        </div>

        {/* Info Box */}
        <div className="bg-[#e3f2fd] border border-[#1F75BE]/30 rounded-[12px] p-[16px] mb-[24px]">
          <p className="font-['Poppins:Medium',sans-serif] text-[13px] text-[#1e3678] leading-[20px]">
            Fill out this form and we'll help you find the medicine or notify you when it's available.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-[16px]">
          {/* Name Field */}
          <div>
            <label className="flex items-center gap-[8px] font-['Poppins:Medium',sans-serif] text-[14px] text-[#121314] mb-[8px]">
              <User className="size-[16px] text-[#1F75BE]" />
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-[8px] px-[16px] py-[12px] font-['Poppins:Regular',sans-serif] text-[14px] text-[#121314] focus:outline-none focus:border-[#1F75BE] focus:ring-2 focus:ring-[#1F75BE]/20"
            />
          </div>

          {/* Phone Field */}
          <div>
            <label className="flex items-center gap-[8px] font-['Poppins:Medium',sans-serif] text-[14px] text-[#121314] mb-[8px]">
              <Phone className="size-[16px] text-[#1F75BE]" />
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 rounded-[8px] px-[16px] py-[12px] font-['Poppins:Regular',sans-serif] text-[14px] text-[#121314] focus:outline-none focus:border-[#1F75BE] focus:ring-2 focus:ring-[#1F75BE]/20"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="flex items-center gap-[8px] font-['Poppins:Medium',sans-serif] text-[14px] text-[#121314] mb-[8px]">
              <Mail className="size-[16px] text-[#1F75BE]" />
              Email (Optional)
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-[8px] px-[16px] py-[12px] font-['Poppins:Regular',sans-serif] text-[14px] text-[#121314] focus:outline-none focus:border-[#1F75BE] focus:ring-2 focus:ring-[#1F75BE]/20"
            />
          </div>

          {/* Medicine Name Field */}
          <div>
            <label className="flex items-center gap-[8px] font-['Poppins:Medium',sans-serif] text-[14px] text-[#121314] mb-[8px]">
              <Pill className="size-[16px] text-[#1F75BE]" />
              Medicine Name *
            </label>
            <input
              type="text"
              name="medicineName"
              value={formData.medicineName}
              onChange={handleChange}
              placeholder="Enter medicine name"
              className="w-full border border-gray-300 rounded-[8px] px-[16px] py-[12px] font-['Poppins:Regular',sans-serif] text-[14px] text-[#121314] focus:outline-none focus:border-[#1F75BE] focus:ring-2 focus:ring-[#1F75BE]/20"
            />
          </div>

          {/* Quantity Field */}
          <div>
            <label className="flex items-center gap-[8px] font-['Poppins:Medium',sans-serif] text-[14px] text-[#121314] mb-[8px]">
              <FileText className="size-[16px] text-[#1F75BE]" />
              Quantity (Optional)
            </label>
            <input
              type="text"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="e.g., 1 strip, 10 tablets"
              className="w-full border border-gray-300 rounded-[8px] px-[16px] py-[12px] font-['Poppins:Regular',sans-serif] text-[14px] text-[#121314] focus:outline-none focus:border-[#1F75BE] focus:ring-2 focus:ring-[#1F75BE]/20"
            />
          </div>

          {/* Additional Notes Field */}
          <div>
            <label className="flex items-center gap-[8px] font-['Poppins:Medium',sans-serif] text-[14px] text-[#121314] mb-[8px]">
              <FileText className="size-[16px] text-[#1F75BE]" />
              Additional Notes (Optional)
            </label>
            <textarea
              name="additionalNotes"
              value={formData.additionalNotes}
              onChange={handleChange}
              placeholder="Any specific requirements or notes..."
              rows={4}
              className="w-full border border-gray-300 rounded-[8px] px-[16px] py-[12px] font-['Poppins:Regular',sans-serif] text-[14px] text-[#121314] focus:outline-none focus:border-[#1F75BE] focus:ring-2 focus:ring-[#1F75BE]/20 resize-none"
            />
          </div>
        </form>
      </div>

      {/* Bottom Action - Fixed */}
      <div className="fixed bottom-[80px] left-0 right-0 bg-white border-t-2 border-gray-200 shadow-lg max-w-[393px] mx-auto z-50">
        <div className="px-[16px] py-[16px]">
          <button
            onClick={handleSubmit}
            className="w-full bg-[#1F75BE] hover:bg-[#1a64a3] text-white rounded-[8px] py-[14px] font-['Poppins:SemiBold',sans-serif] text-[16px] transition-all active:scale-[0.98] shadow-md"
          >
            Continue to Payment
          </button>
          <p className="text-center font-['Poppins:Regular',sans-serif] text-[11px] text-gray-500 mt-[8px]">
            Payment required to confirm your request
          </p>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavBar />
    </div>
  );
}
