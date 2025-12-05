import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { ArrowLeft, Navigation, Phone, Star, X } from "lucide-react";
import BottomNavBar from "./BottomNavBar";

export default function FakeGoogleMapsScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const pharmacyData = location.state?.pharmacy;
  const [showPhoneModal, setShowPhoneModal] = useState(false);

  if (!pharmacyData) {
    navigate(-1);
    return null;
  }

  return (
    <div className="bg-white min-h-screen w-full max-w-[393px] mx-auto relative flex flex-col pb-[80px]">
      {/* Fake Google Maps Header */}
      <div className="bg-white shadow-md px-[16px] py-[12px] flex items-center gap-[12px] relative z-10">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center justify-center size-[40px] rounded-full hover:bg-gray-100 transition-all active:scale-95"
        >
          <ArrowLeft className="size-[24px] text-[#5f6368]" />
        </button>
        <div className="flex-1">
          <input
            type="text"
            value={pharmacyData.name}
            readOnly
            className="w-full bg-[#f1f3f4] rounded-[8px] px-[16px] py-[10px] font-['Roboto',sans-serif] text-[16px] text-[#202124] outline-none"
          />
        </div>
      </div>

      {/* Fake Map Area */}
      <div className="flex-1 relative bg-[#e5e3df] overflow-hidden">
        {/* Map Background Pattern */}
        <div className="absolute inset-0">
          {/* Grid lines to simulate map */}
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#d4d2ce" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
          
          {/* Fake Roads */}
          <div className="absolute top-[20%] left-0 right-0 h-[8px] bg-[#fef8e3] border-y border-[#f5c842]"></div>
          <div className="absolute top-[60%] left-0 right-0 h-[12px] bg-[#fef8e3] border-y-2 border-[#f5c842]"></div>
          <div className="absolute top-0 bottom-0 left-[30%] w-[6px] bg-[#fef8e3] border-x border-[#f5c842]"></div>
          <div className="absolute top-0 bottom-0 left-[70%] w-[10px] bg-[#fef8e3] border-x-2 border-[#f5c842]"></div>
          
          {/* Fake Buildings/Areas */}
          <div className="absolute top-[10%] left-[10%] w-[60px] h-[60px] bg-[#c5e7c4] rounded-[4px] opacity-60"></div>
          <div className="absolute top-[40%] right-[15%] w-[80px] h-[50px] bg-[#d5d5d5] rounded-[4px] opacity-50"></div>
          <div className="absolute bottom-[20%] left-[40%] w-[50px] h-[50px] bg-[#c5e7c4] rounded-[4px] opacity-60"></div>
          
          {/* Pharmacy Location Pin */}
          <div className="absolute top-[45%] left-[50%] -translate-x-1/2 -translate-y-full z-10">
            <div className="relative">
              {/* Pin Shadow */}
              <div className="absolute top-[52px] left-1/2 -translate-x-1/2 w-[30px] h-[8px] bg-black/20 rounded-full blur-[4px]"></div>
              
              {/* Pin */}
              <svg width="44" height="60" viewBox="0 0 44 60" fill="none">
                <path d="M22 0C9.85 0 0 9.85 0 22c0 16.5 22 38 22 38s22-21.5 22-38C44 9.85 34.15 0 22 0z" fill="#EA4335"/>
                <circle cx="22" cy="22" r="10" fill="white"/>
                <circle cx="22" cy="22" r="7" fill="#EA4335"/>
              </svg>
              
              {/* Ripple Effect */}
              <div className="absolute top-[18px] left-1/2 -translate-x-1/2 size-[60px] bg-[#EA4335]/20 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>

        {/* Your Location Pin (Blue) */}
        <div className="absolute top-[70%] left-[25%] z-10">
          <div className="size-[20px] bg-[#4285F4] rounded-full border-4 border-white shadow-lg relative">
            <div className="absolute inset-0 bg-[#4285F4]/30 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Distance Line */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
          <line 
            x1="25%" 
            y1="70%" 
            x2="50%" 
            y2="45%" 
            stroke="#4285F4" 
            strokeWidth="3" 
            strokeDasharray="10,5"
            opacity="0.6"
          />
        </svg>

        {/* Zoom Controls */}
        <div className="absolute bottom-[180px] right-[16px] flex flex-col gap-[1px] shadow-lg rounded-[4px] overflow-hidden z-10">
          <button className="bg-white size-[40px] flex items-center justify-center hover:bg-gray-50 active:bg-gray-100 border-b border-gray-200">
            <span className="text-[24px] text-[#5f6368] font-light">+</span>
          </button>
          <button className="bg-white size-[40px] flex items-center justify-center hover:bg-gray-50 active:bg-gray-100">
            <span className="text-[24px] text-[#5f6368] font-light">−</span>
          </button>
        </div>

        {/* Current Location Button */}
        <div className="absolute bottom-[240px] right-[16px] z-10">
          <button className="bg-white size-[40px] rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 active:bg-gray-100">
            <Navigation className="size-[20px] text-[#5f6368]" fill="#5f6368" />
          </button>
        </div>
      </div>

      {/* Bottom Info Card */}
      <div className="bg-white rounded-t-[16px] shadow-[0_-2px_10px_rgba(0,0,0,0.1)] p-[20px] relative z-20">
        {/* Handle Bar */}
        <div className="w-[40px] h-[4px] bg-gray-300 rounded-full mx-auto mb-[16px]"></div>
        
        <div className="space-y-[16px]">
          {/* Pharmacy Name and Rating */}
          <div>
            <h2 className="font-['Roboto:Medium',sans-serif] text-[20px] text-[#202124] mb-[4px]">
              {pharmacyData.name}
            </h2>
            <div className="flex items-center gap-[8px]">
              <div className="flex items-center gap-[4px]">
                <Star className="size-[16px] text-[#fbbc04] fill-[#fbbc04]" />
                <span className="font-['Roboto:Medium',sans-serif] text-[14px] text-[#202124]">
                  {pharmacyData.rating}
                </span>
              </div>
              {pharmacyData.isOpen && (
                <span className="text-[#188038] font-['Roboto:Medium',sans-serif] text-[14px]">
                  • Open now
                </span>
              )}
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-[12px]">
            <Navigation className="size-[20px] text-[#5f6368] mt-[2px] flex-shrink-0" />
            <div>
              <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#5f6368] mb-[4px]">
                {pharmacyData.address}
              </p>
              <p className="font-['Roboto:Medium',sans-serif] text-[14px] text-[#1a73e8]">
                {pharmacyData.distance} • 7 min drive
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-[12px] pt-[8px]">
            <button 
              onClick={() => navigate(-1)}
              className="flex-1 bg-[#1a73e8] hover:bg-[#1765cc] text-white rounded-[8px] py-[12px] font-['Roboto:Medium',sans-serif] text-[15px] transition-all active:scale-[0.98] shadow-md flex items-center justify-center gap-[8px]"
            >
              <Navigation className="size-[18px]" />
              Start
            </button>
            <button 
              onClick={() => setShowPhoneModal(true)}
              className="flex-1 border-2 border-[#1a73e8] hover:bg-[#e8f0fe] text-[#1a73e8] rounded-[8px] py-[12px] font-['Roboto:Medium',sans-serif] text-[15px] transition-all active:scale-[0.98] flex items-center justify-center gap-[8px]"
            >
              <Phone className="size-[18px]" />
              Call
            </button>
          </div>
        </div>
      </div>

      {/* Phone Number Modal */}
      {showPhoneModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-[20px]">
          <div className="bg-white rounded-[16px] p-[24px] w-full max-w-[320px] shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between mb-[20px]">
              <h3 className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-[#121314]">
                Contact Information
              </h3>
              <button 
                onClick={() => setShowPhoneModal(false)}
                className="size-[32px] flex items-center justify-center rounded-full hover:bg-gray-100 transition-all"
              >
                <X className="size-[20px] text-[#5f6368]" />
              </button>
            </div>
            
            <div className="space-y-[16px]">
              <div className="bg-[#f1f3f4] rounded-[12px] p-[16px]">
                <p className="font-['Poppins:Medium',sans-serif] text-[13px] text-[#5f6368] mb-[8px]">
                  {pharmacyData.name}
                </p>
                <div className="flex items-center gap-[12px]">
                  <Phone className="size-[20px] text-[#1a73e8]" />
                  <a 
                    href={`tel:${pharmacyData.phone}`}
                    className="font-['Roboto:Medium',sans-serif] text-[18px] text-[#1a73e8] hover:underline"
                  >
                    {pharmacyData.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={() => {
                  window.location.href = `tel:${pharmacyData.phone}`;
                  setShowPhoneModal(false);
                }}
                className="w-full bg-[#1a73e8] hover:bg-[#1765cc] text-white rounded-[8px] py-[12px] font-['Poppins:SemiBold',sans-serif] text-[15px] transition-all active:scale-[0.98]"
              >
                Make Call
              </button>
              
              <button
                onClick={() => setShowPhoneModal(false)}
                className="w-full border border-gray-300 hover:bg-gray-50 text-[#5f6368] rounded-[8px] py-[12px] font-['Poppins:Medium',sans-serif] text-[15px] transition-all active:scale-[0.98]"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <BottomNavBar />
    </div>
  );
}
