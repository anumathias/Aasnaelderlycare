import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { CheckCircle, Calendar, MapPin, Home, Clock, Navigation, Phone, Share2 } from "lucide-react";
import BottomNavBar from "./BottomNavBar";

export default function AmbulanceConfirmationScreen() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  const bookingDetails = {
    referenceId: `AMB${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`,
    estimatedTime: "30 minutes",
    pickupLocation: "Flat no : 400 5th floor, Neem Hills Appartments, Hyderabad Telangana",
    destination: "Rush Hospital - Suchitra circle",
    distance: "1.1 km",
    emergencyContact: "+91 98765 43210"
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate("/services");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="bg-white h-screen w-screen overflow-hidden max-w-[393px] mx-auto flex flex-col">
      {/* Success Header */}
      <div className="bg-gradient-to-b from-[#E8F5E9] to-white pt-[40px] pb-[32px] px-[20px]">
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-full p-[16px] shadow-lg mb-[16px]">
            <CheckCircle className="size-[80px] text-[#3DAB51]" strokeWidth={2} />
          </div>
          <h1 className="font-['Poppins:SemiBold',sans-serif] text-[28px] text-[#3DAB51] text-center mb-[8px]">
            Booking Confirmed!
          </h1>
          <p className="font-['Roboto:Regular',sans-serif] text-[16px] text-[#606060] text-center">
            Your ambulance has been scheduled successfully
          </p>
        </div>
      </div>

      {/* Booking Details */}
      <div className="flex-1 overflow-y-auto px-[20px] py-[24px] pb-[100px]">
        {/* Reference Card */}
        <div className="bg-[#1F75BE] rounded-[16px] p-[20px] mb-[20px] shadow-lg">
          <div className="flex items-center justify-between mb-[12px]">
            <div>
              <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-white/80 mb-[4px]">
                Booking Reference
              </p>
              <p className="font-['Poppins:SemiBold',sans-serif] text-[32px] text-white">
                {bookingDetails.referenceId}
              </p>
            </div>
            <button className="bg-white/20 rounded-[8px] p-[10px] hover:bg-white/30 transition-colors">
              <Share2 className="size-[20px] text-white" />
            </button>
          </div>
          <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-white/80">
            Show this to the ambulance staff
          </p>
        </div>

        {/* Details Cards */}
        <div className="space-y-[12px] mb-[24px]">
          {/* Estimated Arrival */}
          <div className="bg-[#FFF9E6] border border-[#FFB60B] rounded-[12px] p-[16px]">
            <div className="flex items-center gap-[12px]">
              <div className="bg-white rounded-full p-[10px]">
                <Clock className="size-[24px] text-[#FFB60B]" />
              </div>
              <div className="flex-1">
                <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#606060] mb-[2px]">
                  Estimated Arrival
                </p>
                <p className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-[#121314]">
                  {bookingDetails.estimatedTime}
                </p>
              </div>
            </div>
          </div>

          {/* Pickup Location */}
          <div className="bg-[#F5F5F5] rounded-[12px] p-[16px]">
            <div className="flex items-start gap-[12px]">
              <div className="bg-white rounded-full p-[10px] mt-[2px]">
                <Home className="size-[24px] text-[#1F75BE]" />
              </div>
              <div className="flex-1">
                <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#606060] mb-[4px]">
                  Pickup Location
                </p>
                <p className="font-['Roboto:SemiBold',sans-serif] text-[15px] text-[#121314] leading-[1.4]">
                  {bookingDetails.pickupLocation}
                </p>
              </div>
            </div>
          </div>

          {/* Destination */}
          <div className="bg-[#F5F5F5] rounded-[12px] p-[16px]">
            <div className="flex items-start gap-[12px]">
              <div className="bg-white rounded-full p-[10px] mt-[2px]">
                <Navigation className="size-[24px] text-[#3DAB51]" />
              </div>
              <div className="flex-1">
                <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#606060] mb-[4px]">
                  Destination Hospital
                </p>
                <p className="font-['Roboto:SemiBold',sans-serif] text-[15px] text-[#121314] mb-[4px]">
                  {bookingDetails.destination}
                </p>
                <div className="flex items-center gap-[4px]">
                  <MapPin className="size-[14px] text-[#606060]" />
                  <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#606060]">
                    {bookingDetails.distance} away
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="bg-[#E8F5E9] border border-[#3DAB51] rounded-[12px] p-[16px]">
            <div className="flex items-center gap-[12px]">
              <div className="bg-white rounded-full p-[10px]">
                <Phone className="size-[24px] text-[#3DAB51]" />
              </div>
              <div className="flex-1">
                <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#606060] mb-[2px]">
                  Emergency Contact Notified
                </p>
                <p className="font-['Roboto:SemiBold',sans-serif] text-[16px] text-[#121314]">
                  {bookingDetails.emergencyContact}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Important Information */}
        <div className="bg-[#E3F2FD] rounded-[12px] p-[16px] mb-[20px]">
          <p className="font-['Roboto:SemiBold',sans-serif] text-[14px] text-[#121314] mb-[8px]">
            What Happens Next?
          </p>
          <ul className="space-y-[8px]">
            <li className="flex items-start gap-[8px]">
              <div className="bg-[#1F75BE] rounded-full size-[6px] mt-[7px] flex-shrink-0"></div>
              <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#606060] leading-[1.5]">
                Ambulance team will call you shortly to confirm details
              </p>
            </li>
            <li className="flex items-start gap-[8px]">
              <div className="bg-[#1F75BE] rounded-full size-[6px] mt-[7px] flex-shrink-0"></div>
              <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#606060] leading-[1.5]">
                Keep your phone accessible for ambulance staff contact
              </p>
            </li>
            <li className="flex items-start gap-[8px]">
              <div className="bg-[#1F75BE] rounded-full size-[6px] mt-[7px] flex-shrink-0"></div>
              <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#606060] leading-[1.5]">
                Emergency contact has been notified automatically
              </p>
            </li>
            <li className="flex items-start gap-[8px]">
              <div className="bg-[#1F75BE] rounded-full size-[6px] mt-[7px] flex-shrink-0"></div>
              <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#606060] leading-[1.5]">
                Track ambulance location in real-time (SMS will be sent)
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-[20px] border-t border-[#E0E0E0] space-y-[12px]">
        <button
          onClick={() => navigate("/ambulance-tracking")}
          className="w-full bg-[#3DAB51] rounded-[12px] py-[14px] hover:bg-[#2E8B40] transition-colors active:scale-98 shadow-lg flex items-center justify-center gap-[8px]"
        >
          <MapPin className="size-[20px] text-white" />
          <span className="font-['Roboto:SemiBold',sans-serif] text-[18px] text-white">
            Track Ambulance Live
          </span>
        </button>

        <button
          onClick={() => navigate("/services")}
          className="w-full bg-[#1F75BE] rounded-[12px] py-[14px] hover:bg-[#1A5F9A] transition-colors active:scale-98 shadow-lg"
        >
          <span className="font-['Roboto:SemiBold',sans-serif] text-[18px] text-white">
            Back to Services
          </span>
        </button>

        <button
          onClick={() => navigate("/home")}
          className="w-full bg-white border-2 border-[#E0E0E0] rounded-[12px] py-[14px] hover:bg-gray-50 transition-colors active:scale-98"
        >
          <span className="font-['Roboto:SemiBold',sans-serif] text-[18px] text-[#606060]">
            Go to Home
          </span>
        </button>

        {/* Auto-redirect message */}
        <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#606060] text-center pt-[8px]">
          Redirecting to services in {countdown} seconds...
        </p>
      </div>

      {/* Bottom Navigation */}
      <BottomNavBar />
    </div>
  );
}
