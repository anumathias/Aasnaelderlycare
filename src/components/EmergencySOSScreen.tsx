import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Phone, MapPin, Navigation, Clock, User, AlertCircle, CheckCircle, Activity } from "lucide-react";
import BottomNavBar from "./BottomNavBar";

type SOSStep = 'processing' | 'allocated' | 'tracking';

export default function EmergencySOSScreen() {
  const navigate = useNavigate();
  const [step, setStep] = useState<SOSStep>('processing');
  const [countdown, setCountdown] = useState(3);
  const [ambulanceETA, setAmbulanceETA] = useState(8);

  const allocatedAmbulance = {
    id: "AMB-2408",
    driver: "Rajesh Kumar",
    phone: "+91 98765 43220",
    vehicleNumber: "TS 09 AB 1234",
    currentLocation: "Near Suchitra Circle",
    eta: "8 minutes"
  };

  const destinationHospital = {
    name: "Rush Hospital",
    location: "Suchitra circle, Hyderabad",
    distance: "1.1 km",
    phone: "+91 98765 43210",
    speciality: "Emergency & Trauma Care"
  };

  const yourLocation = {
    address: "Flat no : 400, 5th floor, Neem Hills Apartments",
    coordinates: "17.5449° N, 78.5718° E"
  };

  // Auto-progress from processing to allocated
  useEffect(() => {
    if (step === 'processing') {
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setStep('allocated');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [step]);

  // Simulate ETA countdown
  useEffect(() => {
    if (step === 'tracking') {
      const timer = setInterval(() => {
        setAmbulanceETA((prev) => Math.max(prev - 1, 0));
      }, 60000); // Update every minute

      return () => clearInterval(timer);
    }
  }, [step]);

  // Processing Screen
  if (step === 'processing') {
    return (
      <div className="bg-gradient-to-b from-[#FF5252] to-[#E53935] h-screen w-screen overflow-hidden max-w-[393px] mx-auto flex flex-col items-center justify-center p-[20px]">
        {/* Pulsing Alert Icon */}
        <div className="relative mb-[32px]">
          <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-30"></div>
          <div className="relative bg-white rounded-full p-[32px]">
            <AlertCircle className="size-[80px] text-[#FF5252]" />
          </div>
        </div>

        {/* Status Text */}
        <div className="text-center mb-[40px]">
          <h1 className="font-['Poppins:Bold',sans-serif] text-[32px] text-white mb-[12px]">
            Emergency SOS
          </h1>
          <p className="font-['Roboto:Regular',sans-serif] text-[18px] text-white/90 mb-[8px]">
            Processing your emergency request...
          </p>
          <p className="font-['Roboto:SemiBold',sans-serif] text-[24px] text-white">
            {countdown}
          </p>
        </div>

        {/* Loading Animation */}
        <div className="flex gap-[12px] mb-[40px]">
          <div className="w-[12px] h-[12px] bg-white rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-[12px] h-[12px] bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-[12px] h-[12px] bg-white rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>

        {/* Info Card */}
        <div className="bg-white/20 backdrop-blur-sm rounded-[16px] p-[20px] border border-white/30">
          <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-white text-center leading-[1.5]">
            Finding nearest available ambulance and hospital. Emergency contacts are being notified.
          </p>
        </div>
      </div>
    );
  }

  // Allocated Screen
  if (step === 'allocated') {
    return (
      <div className="bg-white h-screen w-screen overflow-hidden max-w-[393px] mx-auto flex flex-col">
        {/* Header with Success */}
        <div className="bg-gradient-to-b from-[#E8F5E9] to-white px-[20px] pt-[24px] pb-[32px]">
          <div className="flex flex-col items-center">
            <div className="bg-[#3DAB51] rounded-full p-[20px] mb-[16px]">
              <CheckCircle className="size-[48px] text-white" />
            </div>
            <h1 className="font-['Poppins:Bold',sans-serif] text-[28px] text-[#3DAB51] mb-[8px] text-center">
              Ambulance Allocated!
            </h1>
            <p className="font-['Roboto:Regular',sans-serif] text-[16px] text-[#606060] text-center">
              Help is on the way
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-[20px] pb-[24px]">
          {/* ETA Card */}
          <div className="bg-gradient-to-br from-[#FF5252] to-[#E53935] rounded-[20px] p-[24px] mb-[20px] shadow-lg">
            <div className="text-center text-white">
              <p className="font-['Roboto:Regular',sans-serif] text-[16px] mb-[8px] opacity-90">
                Ambulance arriving in
              </p>
              <p className="font-['Poppins:Bold',sans-serif] text-[56px] leading-none mb-[8px]">
                8
              </p>
              <p className="font-['Roboto:SemiBold',sans-serif] text-[20px]">
                minutes
              </p>
            </div>
          </div>

          {/* Ambulance Details */}
          <div className="bg-[#E3F2FD] rounded-[16px] p-[20px] mb-[20px]">
            <h3 className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-[#121314] mb-[16px]">
              Ambulance Details
            </h3>

            <div className="space-y-[12px]">
              <div className="flex items-center gap-[12px]">
                <div className="bg-[#1F75BE] rounded-full p-[8px]">
                  <Activity className="size-[20px] text-white" />
                </div>
                <div>
                  <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#606060]">
                    Vehicle ID
                  </p>
                  <p className="font-['Roboto:SemiBold',sans-serif] text-[16px] text-[#121314]">
                    {allocatedAmbulance.id}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-[12px]">
                <div className="bg-[#1F75BE] rounded-full p-[8px]">
                  <User className="size-[20px] text-white" />
                </div>
                <div>
                  <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#606060]">
                    Driver Name
                  </p>
                  <p className="font-['Roboto:SemiBold',sans-serif] text-[16px] text-[#121314]">
                    {allocatedAmbulance.driver}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-[12px]">
                <div className="bg-[#1F75BE] rounded-full p-[8px]">
                  <MapPin className="size-[20px] text-white" />
                </div>
                <div>
                  <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#606060]">
                    Current Location
                  </p>
                  <p className="font-['Roboto:SemiBold',sans-serif] text-[16px] text-[#121314]">
                    {allocatedAmbulance.currentLocation}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Your Location */}
          <div className="bg-[#FFF9E6] rounded-[16px] p-[20px] mb-[20px] border-l-4 border-[#FFB60B]">
            <h3 className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-[#121314] mb-[12px]">
              Your Location
            </h3>
            <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#606060] leading-[1.5]">
              {yourLocation.address}
            </p>
          </div>

          {/* Destination Hospital */}
          <div className="bg-[#F8F8F8] rounded-[16px] p-[20px] mb-[20px]">
            <h3 className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-[#121314] mb-[16px] flex items-center gap-[8px]">
              <Navigation className="size-[20px] text-[#3DAB51]" />
              Destination Hospital
            </h3>

            <div className="bg-white rounded-[12px] p-[16px] border border-[#E0E0E0]">
              <h4 className="font-['Poppins:SemiBold',sans-serif] text-[20px] text-[#121314] mb-[8px]">
                {destinationHospital.name}
              </h4>
              
              <div className="space-y-[8px] mb-[16px]">
                <div className="flex items-center gap-[8px]">
                  <MapPin className="size-[16px] text-[#606060]" />
                  <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#606060]">
                    {destinationHospital.location}
                  </p>
                </div>

                <div className="flex items-center gap-[8px]">
                  <Clock className="size-[16px] text-[#606060]" />
                  <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#606060]">
                    {destinationHospital.distance} from your location
                  </p>
                </div>

                <div className="bg-[#E8F5E9] rounded-[8px] px-[12px] py-[8px] inline-block">
                  <p className="font-['Roboto:SemiBold',sans-serif] text-[13px] text-[#3DAB51]">
                    {destinationHospital.speciality}
                  </p>
                </div>
              </div>

              <button 
                onClick={() => {
                  window.alert(`Calling ${destinationHospital.name} at ${destinationHospital.phone}`);
                }}
                className="w-full bg-[#3DAB51] rounded-[10px] py-[12px] flex items-center justify-center gap-[8px] hover:bg-[#2E8B40] transition-colors active:scale-95"
              >
                <Phone className="size-[20px] text-white" />
                <span className="font-['Roboto:SemiBold',sans-serif] text-[16px] text-white">
                  Call Hospital
                </span>
              </button>
            </div>
          </div>

          {/* Emergency Note */}
          <div className="bg-[#FFEBEE] rounded-[16px] p-[16px] border-l-4 border-[#FF5252]">
            <p className="font-['Roboto:SemiBold',sans-serif] text-[14px] text-[#121314] mb-[4px]">
              Emergency Alert
            </p>
            <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#606060] leading-[1.5]">
              Your emergency contacts have been notified. Stay calm and keep your phone nearby.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-[20px] border-t border-[#E0E0E0] space-y-[12px]">
          <button
            onClick={() => setStep('tracking')}
            className="w-full bg-[#1F75BE] rounded-[12px] py-[16px] hover:bg-[#1A5F9A] transition-colors active:scale-98 shadow-lg flex items-center justify-center gap-[8px]"
          >
            <MapPin className="size-[20px] text-white" />
            <span className="font-['Roboto:SemiBold',sans-serif] text-[18px] text-white">
              Track Ambulance Live
            </span>
          </button>

          <button
            onClick={() => {
              window.alert(`Calling ambulance driver at ${allocatedAmbulance.phone}`);
            }}
            className="w-full bg-white border-2 border-[#3DAB51] rounded-[12px] py-[14px] hover:bg-[#E8F5E9] transition-colors active:scale-98 flex items-center justify-center gap-[8px]"
          >
            <Phone className="size-[20px] text-[#3DAB51]" />
            <span className="font-['Roboto:SemiBold',sans-serif] text-[18px] text-[#3DAB51]">
              Call Driver
            </span>
          </button>
        </div>
      </div>
    );
  }

  // Live Tracking Screen
  if (step === 'tracking') {
    return (
      <div className="bg-white h-screen w-screen overflow-hidden max-w-[393px] mx-auto flex flex-col relative">
        {/* Full Screen Map */}
        <div className="flex-1 relative overflow-hidden">
          {/* Background Map */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#E8F4F8] via-[#F0F8E8] to-[#E8F4F8]">
            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%">
                <defs>
                  <pattern id="sos-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#999" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#sos-grid)" />
              </svg>
            </div>

            {/* Roads */}
            <svg className="absolute inset-0 w-full h-full">
              <line x1="0" y1="30%" x2="100%" y2="30%" stroke="#D0D0D0" strokeWidth="4" />
              <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#D0D0D0" strokeWidth="5" />
              <line x1="0" y1="70%" x2="100%" y2="70%" stroke="#D0D0D0" strokeWidth="3" />
              
              <line x1="25%" y1="0" x2="25%" y2="100%" stroke="#D0D0D0" strokeWidth="3" />
              <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#D0D0D0" strokeWidth="5" />
              <line x1="75%" y1="0" x2="75%" y2="100%" stroke="#D0D0D0" strokeWidth="3" />

              {/* Animated Route */}
              <path
                d="M 50% 75% L 50% 50% L 65% 50% L 65% 25%"
                stroke="#FF5252"
                strokeWidth="6"
                strokeDasharray="10,8"
                fill="none"
                opacity="0.9"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="18"
                  to="0"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </path>

              {/* Route waypoints */}
              <circle cx="50%" cy="60%" r="4" fill="#FF5252" opacity="0.7">
                <animate attributeName="r" values="4;6;4" dur="1.5s" repeatCount="indefinite"/>
              </circle>
              <circle cx="55%" cy="50%" r="4" fill="#FF5252" opacity="0.7">
                <animate attributeName="r" values="4;6;4" dur="1.5s" begin="0.3s" repeatCount="indefinite"/>
              </circle>
              <circle cx="65%" cy="35%" r="4" fill="#FF5252" opacity="0.7">
                <animate attributeName="r" values="4;6;4" dur="1.5s" begin="0.6s" repeatCount="indefinite"/>
              </circle>
            </svg>

            {/* Buildings */}
            <div className="absolute top-[15%] left-[15%] w-[70px] h-[60px] bg-[#C8E6C9] rounded-[6px] opacity-35"></div>
            <div className="absolute top-[40%] left-[70%] w-[80px] h-[70px] bg-[#BBDEFB] rounded-[6px] opacity-35"></div>
            <div className="absolute top-[60%] left-[15%] w-[60px] h-[55px] bg-[#FFE0B2] rounded-[6px] opacity-35"></div>

            {/* Your Location Marker */}
            <div className="absolute top-[75%] left-[50%] transform -translate-x-1/2 -translate-y-full">
              <div className="relative flex flex-col items-center">
                <div className="absolute -bottom-[8px] w-[50px] h-[50px] rounded-full bg-[#1F75BE] opacity-20 animate-ping"></div>
                <div className="relative z-10 bg-[#1F75BE] rounded-full p-[10px] shadow-xl">
                  <MapPin className="size-[28px] text-white" fill="white" />
                </div>
                <div className="mt-[8px] bg-[#1F75BE] text-white px-[12px] py-[6px] rounded-[8px] shadow-lg">
                  <p className="font-['Roboto:SemiBold',sans-serif] text-[12px]">You</p>
                </div>
              </div>
            </div>

            {/* Hospital Marker */}
            <div className="absolute top-[25%] left-[65%] transform -translate-x-1/2 -translate-y-full">
              <div className="relative flex flex-col items-center">
                <div className="absolute -bottom-[8px] w-[50px] h-[50px] rounded-full bg-[#3DAB51] opacity-20 animate-ping"></div>
                <div className="relative z-10 bg-[#3DAB51] rounded-full p-[10px] shadow-xl">
                  <Navigation className="size-[28px] text-white" fill="white" />
                </div>
                <div className="mt-[8px] bg-[#3DAB51] text-white px-[12px] py-[6px] rounded-[8px] shadow-lg">
                  <p className="font-['Roboto:SemiBold',sans-serif] text-[12px]">Hospital</p>
                </div>
              </div>
            </div>

            {/* Ambulance Icon (Moving) */}
            <div className="absolute top-[60%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                {/* Direction indicator */}
                <div className="absolute -top-[20px] left-1/2 transform -translate-x-1/2 bg-[#FF5252] text-white px-[8px] py-[2px] rounded-[6px] text-[11px] font-['Roboto:SemiBold',sans-serif] shadow-lg whitespace-nowrap">
                  Moving to you
                </div>
                
                <div className="bg-white rounded-full p-[14px] shadow-2xl border-4 border-[#FF5252] animate-bounce">
                  <svg className="size-[36px]" viewBox="0 0 24 24" fill="none">
                    <path d="M4 16V8C4 6.895 4.895 6 6 6H13L15 9H19C20.105 9 21 9.895 21 11V16C21 17.105 20.105 18 19 18H18.5M4 16C4 17.105 4.895 18 6 18H6.5M4 16H2M18.5 18C18.5 19.105 17.605 20 16.5 20C15.395 20 14.5 19.105 14.5 18C14.5 16.895 15.395 16 16.5 16C17.605 16 18.5 16.895 18.5 18ZM6.5 18C6.5 19.105 7.395 20 8.5 20C9.605 20 10.5 19.105 10.5 18C10.5 16.895 9.605 16 8.5 16C7.395 16 6.5 16.895 6.5 18Z" stroke="#FF5252" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M7 9H9M11 9H13" stroke="#FF5252" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Top Status Bar */}
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-white via-white to-transparent p-[16px]">
          <div className="bg-[#FF5252] rounded-[16px] px-[20px] py-[12px] shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[12px]">
                <div className="bg-white rounded-full p-[8px]">
                  <AlertCircle className="size-[20px] text-[#FF5252]" />
                </div>
                <div>
                  <p className="font-['Roboto:SemiBold',sans-serif] text-[14px] text-white">
                    Emergency Active
                  </p>
                  <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-white/90">
                    ID: {allocatedAmbulance.id}
                  </p>
                </div>
              </div>
              <button
                onClick={() => navigate("/services")}
                className="bg-white/20 backdrop-blur-sm text-white px-[16px] py-[8px] rounded-[8px] font-['Roboto:SemiBold',sans-serif] text-[13px] hover:bg-white/30 transition-colors"
              >
                Exit
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Info Card */}
        <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[24px] shadow-2xl p-[20px]">
          <div className="flex items-center justify-between mb-[16px]">
            <div>
              <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#606060] mb-[2px]">
                Ambulance arriving in
              </p>
              <p className="font-['Poppins:Bold',sans-serif] text-[32px] text-[#FF5252] leading-none">
                {ambulanceETA} min
              </p>
            </div>
            <div className="text-right">
              <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#606060] mb-[4px]">
                Distance
              </p>
              <p className="font-['Roboto:SemiBold',sans-serif] text-[20px] text-[#121314]">
                0.6 km
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-[16px]">
            <div className="h-[8px] bg-[#E0E0E0] rounded-full overflow-hidden">
              <div className="h-full bg-[#FF5252] rounded-full w-[60%] transition-all duration-1000"></div>
            </div>
          </div>

          {/* Driver Info */}
          <div className="bg-[#F5F5F5] rounded-[12px] p-[12px] mb-[16px] flex items-center justify-between">
            <div className="flex items-center gap-[12px]">
              <div className="bg-[#1F75BE] rounded-full p-[8px]">
                <User className="size-[20px] text-white" />
              </div>
              <div>
                <p className="font-['Roboto:SemiBold',sans-serif] text-[14px] text-[#121314]">
                  {allocatedAmbulance.driver}
                </p>
                <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#606060]">
                  {allocatedAmbulance.vehicleNumber}
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                window.alert(`Calling ${allocatedAmbulance.driver} at ${allocatedAmbulance.phone}`);
              }}
              className="bg-[#3DAB51] rounded-full p-[10px] hover:bg-[#2E8B40] transition-colors active:scale-95"
            >
              <Phone className="size-[20px] text-white" />
            </button>
          </div>

          {/* Hospital Info */}
          <div className="bg-[#E8F5E9] rounded-[12px] p-[12px] flex items-center gap-[12px]">
            <Navigation className="size-[20px] text-[#3DAB51]" />
            <div className="flex-1">
              <p className="font-['Roboto:SemiBold',sans-serif] text-[14px] text-[#121314]">
                Taking you to {destinationHospital.name}
              </p>
              <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#606060]">
                {destinationHospital.distance} away
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <BottomNavBar />
      </div>
    );
  }

  return null;
}
