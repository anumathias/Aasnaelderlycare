import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, MapPin, Navigation, Minus, Plus, Maximize2, Phone, MessageCircle } from "lucide-react";
import BottomNavBar from "./BottomNavBar";

export default function AmbulanceFullMapScreen() {
  const navigate = useNavigate();
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.2, 2));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.2, 0.6));
  };

  return (
    <div className="bg-white h-screen w-screen overflow-hidden max-w-[393px] mx-auto flex flex-col relative pb-[80px]">
      {/* Map Container */}
      <div className="flex-1 relative overflow-hidden">
        {/* Background Map */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-[#E8F4F8] via-[#F0F8E8] to-[#E8F4F8] transition-transform duration-300"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="fullmap-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#999" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#fullmap-grid)" />
            </svg>
          </div>

          {/* Roads */}
          <svg className="absolute inset-0 w-full h-full">
            <line x1="0" y1="20%" x2="100%" y2="20%" stroke="#D0D0D0" strokeWidth="3" />
            <line x1="0" y1="35%" x2="100%" y2="35%" stroke="#D0D0D0" strokeWidth="5" />
            <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#D0D0D0" strokeWidth="4" />
            <line x1="0" y1="65%" x2="100%" y2="65%" stroke="#D0D0D0" strokeWidth="3" />
            <line x1="0" y1="80%" x2="100%" y2="80%" stroke="#D0D0D0" strokeWidth="4" />
            
            <line x1="20%" y1="0" x2="20%" y2="100%" stroke="#D0D0D0" strokeWidth="3" />
            <line x1="35%" y1="0" x2="35%" y2="100%" stroke="#D0D0D0" strokeWidth="4" />
            <line x1="55%" y1="0" x2="55%" y2="100%" stroke="#D0D0D0" strokeWidth="5" />
            <line x1="75%" y1="0" x2="75%" y2="100%" stroke="#D0D0D0" strokeWidth="3" />

            {/* Animated Route */}
            <path
              d="M 35% 60% L 40% 55% L 48% 48% L 55% 40% L 62% 32% L 65% 25%"
              stroke="#1F75BE"
              strokeWidth="5"
              strokeDasharray="12,8"
              fill="none"
              opacity="0.9"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="20"
                to="0"
                dur="1s"
                repeatCount="indefinite"
              />
            </path>

            {/* Route waypoints */}
            <circle cx="40%" cy="55%" r="4" fill="#1F75BE" opacity="0.7">
              <animate attributeName="r" values="4;6;4" dur="1.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="48%" cy="48%" r="4" fill="#1F75BE" opacity="0.7">
              <animate attributeName="r" values="4;6;4" dur="1.5s" begin="0.3s" repeatCount="indefinite"/>
            </circle>
            <circle cx="55%" cy="40%" r="4" fill="#1F75BE" opacity="0.7">
              <animate attributeName="r" values="4;6;4" dur="1.5s" begin="0.6s" repeatCount="indefinite"/>
            </circle>
            <circle cx="62%" cy="32%" r="4" fill="#1F75BE" opacity="0.7">
              <animate attributeName="r" values="4;6;4" dur="1.5s" begin="0.9s" repeatCount="indefinite"/>
            </circle>
          </svg>

          {/* Buildings/Areas */}
          <div className="absolute top-[10%] left-[10%] w-[80px] h-[60px] bg-[#C8E6C9] rounded-[6px] opacity-40"></div>
          <div className="absolute top-[25%] left-[70%] w-[70px] h-[70px] bg-[#BBDEFB] rounded-[6px] opacity-40"></div>
          <div className="absolute top-[55%] left-[15%] w-[60px] h-[50px] bg-[#FFE0B2] rounded-[6px] opacity-40"></div>
          <div className="absolute top-[70%] left-[75%] w-[65px] h-[55px] bg-[#F8BBD0] rounded-[6px] opacity-40"></div>
          <div className="absolute top-[15%] left-[85%] w-[50px] h-[50px] bg-[#D1C4E9] rounded-[6px] opacity-40"></div>

          {/* Pickup Location Marker */}
          <div className="absolute top-[60%] left-[35%] transform -translate-x-1/2 -translate-y-full">
            <div className="relative flex flex-col items-center">
              {/* Animated pulse */}
              <div className="absolute -bottom-[8px] w-[50px] h-[50px] rounded-full bg-[#1F75BE] opacity-20 animate-ping"></div>
              
              {/* Main marker */}
              <div className="relative z-10 bg-[#1F75BE] rounded-full p-[10px] shadow-xl">
                <MapPin className="size-[28px] text-white" fill="white" />
              </div>

              {/* Label */}
              <div className="mt-[8px] bg-[#1F75BE] text-white px-[12px] py-[6px] rounded-[8px] shadow-lg whitespace-nowrap">
                <p className="font-['Roboto:SemiBold',sans-serif] text-[13px]">
                  Your Location
                </p>
              </div>
            </div>
          </div>

          {/* Destination (Hospital) Marker */}
          <div className="absolute top-[25%] left-[65%] transform -translate-x-1/2 -translate-y-full">
            <div className="relative flex flex-col items-center">
              {/* Animated pulse */}
              <div className="absolute -bottom-[8px] w-[50px] h-[50px] rounded-full bg-[#3DAB51] opacity-20 animate-ping"></div>
              
              {/* Main marker */}
              <div className="relative z-10 bg-[#3DAB51] rounded-full p-[10px] shadow-xl">
                <Navigation className="size-[28px] text-white" fill="white" />
              </div>

              {/* Label */}
              <div className="mt-[8px] bg-[#3DAB51] text-white px-[12px] py-[6px] rounded-[8px] shadow-lg whitespace-nowrap">
                <p className="font-['Roboto:SemiBold',sans-serif] text-[13px]">
                  Rush Hospital
                </p>
              </div>
            </div>
          </div>

          {/* Ambulance Icon (moving along route) */}
          <div className="absolute top-[40%] left-[55%] transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-white rounded-full p-[12px] shadow-2xl border-4 border-[#FF5252] animate-bounce">
              <svg className="size-[32px]" viewBox="0 0 24 24" fill="none">
                <path d="M4 16V8C4 6.895 4.895 6 6 6H13L15 9H19C20.105 9 21 9.895 21 11V16C21 17.105 20.105 18 19 18H18.5M4 16C4 17.105 4.895 18 6 18H6.5M4 16H2M18.5 18C18.5 19.105 17.605 20 16.5 20C15.395 20 14.5 19.105 14.5 18C14.5 16.895 15.395 16 16.5 16C17.605 16 18.5 16.895 18.5 18ZM6.5 18C6.5 19.105 7.395 20 8.5 20C9.605 20 10.5 19.105 10.5 18C10.5 16.895 9.605 16 8.5 16C7.395 16 6.5 16.895 6.5 18Z" stroke="#FF5252" strokeWidth="2" strokeLinecap="round"/>
                <path d="M7 9H9M11 9H13" stroke="#FF5252" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Top Header */}
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-white via-white to-transparent p-[16px]">
        <div className="flex items-center justify-between">
          <button 
            className="flex items-center justify-center size-[40px] cursor-pointer hover:bg-[#1F75BE]/10 rounded-full transition-all active:scale-95 bg-white shadow-md border border-gray-200"
            onClick={() => navigate("/ambulance-booking")}
          >
            <ArrowLeft className="size-[20px] text-[#1F75BE]" />
          </button>

          <div className="bg-white rounded-[12px] px-[16px] py-[8px] shadow-md">
            <p className="font-['Roboto:SemiBold',sans-serif] text-[14px] text-[#121314]">
              Live Tracking
            </p>
          </div>

          <div className="size-[40px]"></div>
        </div>
      </div>

      {/* Map Controls */}
      <div className="absolute top-[80px] right-[16px] flex flex-col gap-[8px]">
        <button 
          onClick={handleZoomIn}
          className="bg-white rounded-[10px] p-[10px] shadow-lg hover:bg-gray-50 transition-colors border border-[#E0E0E0] active:scale-95"
        >
          <Plus className="size-[20px] text-[#606060]" />
        </button>
        <button 
          onClick={handleZoomOut}
          className="bg-white rounded-[10px] p-[10px] shadow-lg hover:bg-gray-50 transition-colors border border-[#E0E0E0] active:scale-95"
        >
          <Minus className="size-[20px] text-[#606060]" />
        </button>
        <button className="bg-white rounded-[10px] p-[10px] shadow-lg hover:bg-gray-50 transition-colors border border-[#E0E0E0] active:scale-95">
          <Maximize2 className="size-[20px] text-[#606060]" />
        </button>
      </div>

      {/* Bottom Info Card */}
      <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[24px] shadow-2xl p-[20px] border-t-4 border-[#1F75BE]">
        <div className="flex items-center justify-between mb-[16px]">
          <div>
            <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#606060] mb-[2px]">
              Ambulance Status
            </p>
            <p className="font-['Poppins:SemiBold',sans-serif] text-[20px] text-[#3DAB51]">
              On the way
            </p>
          </div>
          <div className="bg-[#FFF9E6] rounded-[12px] px-[16px] py-[10px]">
            <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#606060] text-center">
              ETA
            </p>
            <p className="font-['Poppins:SemiBold',sans-serif] text-[24px] text-[#FFB60B] text-center">
              25 min
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-[16px]">
          <div className="h-[6px] bg-[#E0E0E0] rounded-full overflow-hidden">
            <div className="h-full bg-[#1F75BE] rounded-full w-[45%] transition-all duration-1000"></div>
          </div>
          <div className="flex justify-between mt-[8px]">
            <p className="font-['Roboto:Regular',sans-serif] text-[11px] text-[#606060]">
              Dispatched
            </p>
            <p className="font-['Roboto:Regular',sans-serif] text-[11px] text-[#606060]">
              Arriving soon
            </p>
          </div>
        </div>

        {/* Distance Info */}
        <div className="flex items-center justify-between mb-[16px] bg-[#F5F5F5] rounded-[8px] p-[12px]">
          <div className="flex items-center gap-[8px]">
            <MapPin className="size-[18px] text-[#1F75BE]" />
            <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#606060]">
              Distance remaining
            </p>
          </div>
          <p className="font-['Roboto:SemiBold',sans-serif] text-[16px] text-[#121314]">
            0.8 km
          </p>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-[12px]">
          <button className="bg-[#3DAB51] rounded-[10px] py-[12px] flex items-center justify-center gap-[8px] hover:bg-[#2E8B40] transition-colors active:scale-95 shadow-md">
            <Phone className="size-[20px] text-white" />
            <span className="font-['Roboto:SemiBold',sans-serif] text-[16px] text-white">
              Call
            </span>
          </button>

          <button className="bg-[#1F75BE] rounded-[10px] py-[12px] flex items-center justify-center gap-[8px] hover:bg-[#1A5F9A] transition-colors active:scale-95 shadow-md">
            <MessageCircle className="size-[20px] text-white" />
            <span className="font-['Roboto:SemiBold',sans-serif] text-[16px] text-white">
              Message
            </span>
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavBar />
    </div>
  );
}
