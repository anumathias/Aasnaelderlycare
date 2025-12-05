import { useNavigate, useSearchParams } from "react-router";
import { ArrowLeft, Navigation, MapPin, Clock, Car, Phone, Star } from "lucide-react";
import BottomNavBar from "./BottomNavBar";

export default function HospitalDirectionsScreen() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  const hospitalName = searchParams.get("name") || "Rush Hospital";
  const hospitalLocation = searchParams.get("location") || "Suchitra circle";
  const hospitalDistance = searchParams.get("distance") || "1.1 km";

  const routeSteps = [
    {
      instruction: "Head north on Neem Hills Road",
      distance: "0.2 km",
      duration: "2 min"
    },
    {
      instruction: "Turn right onto Main Road",
      distance: "0.5 km",
      duration: "5 min"
    },
    {
      instruction: "Continue straight through Suchitra Circle",
      distance: "0.3 km",
      duration: "3 min"
    },
    {
      instruction: "Turn left at Hospital Junction",
      distance: "0.1 km",
      duration: "1 min"
    },
    {
      instruction: `Arrive at ${hospitalName}`,
      distance: "0 km",
      duration: "Destination"
    }
  ];

  return (
    <div className="bg-white h-screen w-screen overflow-hidden max-w-[393px] mx-auto flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#E3F2FD] to-white px-[16px] pt-[20px] pb-[24px]">
        <div className="flex items-center justify-center mb-[8px] relative">
          <button 
            className="absolute left-0 flex items-center justify-center size-[40px] cursor-pointer hover:bg-[#1F75BE]/10 rounded-full transition-all active:scale-95 border border-gray-200 hover:border-[#1F75BE] bg-white"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="size-[20px] text-[#1F75BE]" />
          </button>
          <h1 className="font-['Poppins:SemiBold',sans-serif] text-[24px] text-[#1F75BE]">
            Directions
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-[80px]">
        {/* Map Preview */}
        <div className="px-[20px] pt-[20px] pb-[16px]">
          <div className="relative bg-gradient-to-br from-[#E8F4F8] via-[#F0F8E8] to-[#E8F4F8] rounded-[16px] h-[220px] overflow-hidden border border-[#E0E0E0]">
            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%">
                <defs>
                  <pattern id="dir-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#999" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dir-grid)" />
              </svg>
            </div>

            {/* Roads */}
            <svg className="absolute inset-0 w-full h-full">
              <line x1="0" y1="40%" x2="100%" y2="40%" stroke="#D0D0D0" strokeWidth="4" />
              <line x1="0" y1="70%" x2="100%" y2="70%" stroke="#D0D0D0" strokeWidth="3" />
              <line x1="30%" y1="0" x2="30%" y2="100%" stroke="#D0D0D0" strokeWidth="4" />
              <line x1="70%" y1="0" x2="70%" y2="100%" stroke="#D0D0D0" strokeWidth="3" />

              {/* Route path with animation */}
              <path
                d="M 30% 75% L 30% 40% L 70% 40% L 70% 20%"
                stroke="#1F75BE"
                strokeWidth="4"
                strokeDasharray="8,6"
                fill="none"
                opacity="0.9"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="14"
                  to="0"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </path>

              {/* Turn indicators */}
              <circle cx="30%" cy="40%" r="5" fill="#1F75BE" opacity="0.7" />
              <circle cx="70%" cy="40%" r="5" fill="#1F75BE" opacity="0.7" />
            </svg>

            {/* Start Marker */}
            <div className="absolute bottom-[25%] left-[30%] transform -translate-x-1/2 -translate-y-full">
              <div className="bg-[#1F75BE] rounded-full p-[8px] shadow-lg">
                <MapPin className="size-[20px] text-white" fill="white" />
              </div>
            </div>

            {/* End Marker */}
            <div className="absolute top-[20%] left-[70%] transform -translate-x-1/2 -translate-y-full">
              <div className="bg-[#3DAB51] rounded-full p-[8px] shadow-lg">
                <Navigation className="size-[20px] text-white" fill="white" />
              </div>
            </div>

            {/* Distance Badge */}
            <div className="absolute bottom-[12px] left-[12px] bg-white rounded-[8px] px-[12px] py-[6px] shadow-md">
              <p className="font-['Roboto:SemiBold',sans-serif] text-[14px] text-[#121314]">
                {hospitalDistance}
              </p>
            </div>

            {/* ETA Badge */}
            <div className="absolute bottom-[12px] right-[12px] bg-[#1F75BE] rounded-[8px] px-[12px] py-[6px] shadow-md">
              <p className="font-['Roboto:SemiBold',sans-serif] text-[14px] text-white">
                ~11 min
              </p>
            </div>
          </div>
        </div>

        {/* Hospital Info Card */}
        <div className="px-[20px] pb-[16px]">
          <div className="bg-[#F8F8F8] rounded-[16px] p-[16px]">
            <div className="flex items-center justify-between mb-[12px]">
              <div className="flex-1">
                <h3 className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-[#121314] mb-[4px]">
                  {hospitalName}
                </h3>
                <div className="flex items-center gap-[8px] mb-[8px]">
                  <MapPin className="size-[14px] text-[#606060]" />
                  <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#606060]">
                    {hospitalLocation}
                  </p>
                </div>
                <div className="flex items-center gap-[8px]">
                  <Star className="size-[14px] text-[#FFB60B] fill-[#FFB60B]" />
                  <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#606060]">
                    4.5 Rating • Open 24/7
                  </p>
                </div>
              </div>
              <button className="bg-[#3DAB51] rounded-full p-[12px] hover:bg-[#2E8B40] transition-colors shadow-md">
                <Phone className="size-[20px] text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Trip Summary */}
        <div className="px-[20px] pb-[16px]">
          <div className="bg-[#E3F2FD] rounded-[16px] p-[16px]">
            <div className="grid grid-cols-3 gap-[12px]">
              <div className="text-center">
                <Car className="size-[24px] text-[#1F75BE] mx-auto mb-[4px]" />
                <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#606060] mb-[2px]">
                  Distance
                </p>
                <p className="font-['Roboto:SemiBold',sans-serif] text-[16px] text-[#121314]">
                  {hospitalDistance}
                </p>
              </div>
              <div className="text-center border-l border-r border-[#1F75BE]/20">
                <Clock className="size-[24px] text-[#1F75BE] mx-auto mb-[4px]" />
                <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#606060] mb-[2px]">
                  Time
                </p>
                <p className="font-['Roboto:SemiBold',sans-serif] text-[16px] text-[#121314]">
                  11 min
                </p>
              </div>
              <div className="text-center">
                <Navigation className="size-[24px] text-[#1F75BE] mx-auto mb-[4px]" />
                <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#606060] mb-[2px]">
                  Route
                </p>
                <p className="font-['Roboto:SemiBold',sans-serif] text-[16px] text-[#121314]">
                  Fastest
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Step by Step Directions */}
        <div className="px-[20px] pb-[24px]">
          <h3 className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-[#121314] mb-[16px]">
            Step-by-Step Directions
          </h3>

          <div className="space-y-[12px]">
            {routeSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white border-2 border-[#E0E0E0] rounded-[12px] p-[16px] hover:border-[#1F75BE] transition-colors"
              >
                <div className="flex items-start gap-[12px]">
                  <div className={`rounded-full p-[8px] mt-[2px] flex-shrink-0 ${
                    index === routeSteps.length - 1
                      ? "bg-[#3DAB51]"
                      : "bg-[#E3F2FD]"
                  }`}>
                    {index === routeSteps.length - 1 ? (
                      <Navigation className="size-[20px] text-white" />
                    ) : (
                      <span className="font-['Roboto:SemiBold',sans-serif] text-[14px] text-[#1F75BE]">
                        {index + 1}
                      </span>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-['Roboto:SemiBold',sans-serif] text-[15px] text-[#121314] mb-[4px]">
                      {step.instruction}
                    </p>
                    <div className="flex items-center gap-[12px]">
                      <span className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#606060]">
                        {step.distance}
                      </span>
                      {step.duration !== "Destination" && (
                        <>
                          <span className="text-[#E0E0E0]">•</span>
                          <span className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#606060]">
                            {step.duration}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="p-[20px] border-t border-[#E0E0E0]">
        <button className="w-full bg-[#1F75BE] rounded-[12px] py-[16px] hover:bg-[#1A5F9A] transition-colors active:scale-98 shadow-lg flex items-center justify-center gap-[8px]">
          <Navigation className="size-[20px] text-white" />
          <span className="font-['Roboto:SemiBold',sans-serif] text-[18px] text-white">
            Start Navigation
          </span>
        </button>
      </div>

      {/* Bottom Navigation */}
      <BottomNavBar />
    </div>
  );
}
