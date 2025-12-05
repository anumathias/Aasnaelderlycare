import { MapPin, Navigation, Plus, Minus, Maximize2 } from "lucide-react";

type MapMarker = {
  id: string;
  type: "pickup" | "destination";
  label: string;
  position: { top: string; left: string };
};

type FakeMapComponentProps = {
  pickupLocation?: string;
  destinationLocation?: string;
  showRoute?: boolean;
  height?: string;
};

export default function FakeMapComponent({
  pickupLocation,
  destinationLocation,
  showRoute = true,
  height = "300px"
}: FakeMapComponentProps) {
  const markers: MapMarker[] = [
    {
      id: "pickup",
      type: "pickup",
      label: pickupLocation || "Pickup Location",
      position: { top: "60%", left: "35%" }
    },
    {
      id: "destination",
      type: "destination",
      label: destinationLocation || "Rush Hospital",
      position: { top: "25%", left: "65%" }
    }
  ];

  return (
    <div 
      className="relative bg-gradient-to-br from-[#E8F4F8] via-[#F0F8E8] to-[#E8F4F8] rounded-[12px] overflow-hidden border border-[#E0E0E0]"
      style={{ height }}
    >
      {/* Map Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#999" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Fake Roads/Paths */}
      <svg className="absolute inset-0 w-full h-full">
        {/* Horizontal roads */}
        <line x1="0" y1="30%" x2="100%" y2="30%" stroke="#D0D0D0" strokeWidth="3" />
        <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#D0D0D0" strokeWidth="4" />
        <line x1="0" y1="70%" x2="100%" y2="70%" stroke="#D0D0D0" strokeWidth="3" />
        
        {/* Vertical roads */}
        <line x1="25%" y1="0" x2="25%" y2="100%" stroke="#D0D0D0" strokeWidth="3" />
        <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#D0D0D0" strokeWidth="4" />
        <line x1="75%" y1="0" x2="75%" y2="100%" stroke="#D0D0D0" strokeWidth="3" />

        {/* Route line if enabled */}
        {showRoute && (
          <>
            {/* Dotted route path */}
            <path
              d="M 35% 60% Q 45% 45%, 65% 25%"
              stroke="#1F75BE"
              strokeWidth="4"
              strokeDasharray="8,8"
              fill="none"
              opacity="0.8"
            />
            {/* Route direction indicators */}
            <circle cx="40%" cy="50%" r="3" fill="#1F75BE" opacity="0.6" />
            <circle cx="50%" cy="38%" r="3" fill="#1F75BE" opacity="0.6" />
            <circle cx="60%" cy="30%" r="3" fill="#1F75BE" opacity="0.6" />
          </>
        )}
      </svg>

      {/* Map Buildings/Areas */}
      <div className="absolute top-[15%] left-[15%] w-[60px] h-[60px] bg-[#C8E6C9] rounded-[4px] opacity-30"></div>
      <div className="absolute top-[40%] left-[60%] w-[80px] h-[50px] bg-[#BBDEFB] rounded-[4px] opacity-30"></div>
      <div className="absolute top-[65%] left-[70%] w-[50px] h-[50px] bg-[#FFE0B2] rounded-[4px] opacity-30"></div>
      <div className="absolute top-[20%] left-[80%] w-[40px] h-[40px] bg-[#F8BBD0] rounded-[4px] opacity-30"></div>

      {/* Location Markers */}
      {markers.map((marker) => (
        <div
          key={marker.id}
          className="absolute transform -translate-x-1/2 -translate-y-full cursor-pointer group"
          style={{ top: marker.position.top, left: marker.position.left }}
        >
          {/* Marker Pin */}
          <div className="relative flex flex-col items-center">
            {/* Animated Pulse */}
            <div className={`absolute -bottom-[8px] w-[40px] h-[40px] rounded-full animate-ping ${
              marker.type === "pickup" ? "bg-[#1F75BE]" : "bg-[#3DAB51]"
            } opacity-20`}></div>
            
            {/* Main Marker */}
            <div className={`relative z-10 rounded-full p-[8px] shadow-lg ${
              marker.type === "pickup" 
                ? "bg-[#1F75BE]" 
                : "bg-[#3DAB51]"
            }`}>
              {marker.type === "pickup" ? (
                <MapPin className="size-[24px] text-white" fill="white" />
              ) : (
                <Navigation className="size-[24px] text-white" fill="white" />
              )}
            </div>

            {/* Label Tooltip */}
            <div className={`absolute top-[-50px] min-w-[120px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
              marker.type === "pickup" ? "bg-[#1F75BE]" : "bg-[#3DAB51]"
            } text-white px-[12px] py-[6px] rounded-[8px] shadow-lg whitespace-nowrap`}>
              <p className="font-['Roboto:SemiBold',sans-serif] text-[12px] text-center">
                {marker.label}
              </p>
              {/* Arrow */}
              <div className={`absolute bottom-[-4px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent ${
                marker.type === "pickup" ? "border-t-[4px] border-t-[#1F75BE]" : "border-t-[4px] border-t-[#3DAB51]"
              }`}></div>
            </div>
          </div>
        </div>
      ))}

      {/* Map Controls */}
      <div className="absolute top-[12px] right-[12px] flex flex-col gap-[8px]">
        <button className="bg-white rounded-[8px] p-[8px] shadow-md hover:bg-gray-50 transition-colors border border-[#E0E0E0]">
          <Plus className="size-[16px] text-[#606060]" />
        </button>
        <button className="bg-white rounded-[8px] p-[8px] shadow-md hover:bg-gray-50 transition-colors border border-[#E0E0E0]">
          <Minus className="size-[16px] text-[#606060]" />
        </button>
        <button className="bg-white rounded-[8px] p-[8px] shadow-md hover:bg-gray-50 transition-colors border border-[#E0E0E0]">
          <Maximize2 className="size-[16px] text-[#606060]" />
        </button>
      </div>

      {/* Distance Badge */}
      {showRoute && (
        <div className="absolute bottom-[12px] left-[12px] bg-white rounded-[8px] px-[12px] py-[8px] shadow-md border border-[#E0E0E0]">
          <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#606060]">
            Distance
          </p>
          <p className="font-['Roboto:SemiBold',sans-serif] text-[16px] text-[#121314]">
            1.1 km
          </p>
        </div>
      )}

      {/* ETA Badge */}
      {showRoute && (
        <div className="absolute bottom-[12px] right-[12px] bg-[#1F75BE] rounded-[8px] px-[12px] py-[8px] shadow-md">
          <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-white/80">
            ETA
          </p>
          <p className="font-['Roboto:SemiBold',sans-serif] text-[16px] text-white">
            30 min
          </p>
        </div>
      )}

      {/* Google Maps-like watermark */}
      <div className="absolute bottom-[12px] left-1/2 transform -translate-x-1/2">
        <p className="font-['Roboto:Regular',sans-serif] text-[10px] text-[#999] bg-white/80 px-[8px] py-[2px] rounded-[4px]">
          Map Data ©2024
        </p>
      </div>
    </div>
  );
}
