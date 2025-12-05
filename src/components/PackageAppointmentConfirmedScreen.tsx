import { useNavigate, useLocation } from "react-router";
import { CheckCircle2, Calendar, Clock, User, Phone, MapPin } from "lucide-react";
import BottomNavBar from "./BottomNavBar";

export default function PackageAppointmentConfirmedScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const packageData = location.state?.package;
  const appointmentData = location.state?.appointment;

  // Mock nurse data
  const nurseData = {
    name: "Nurse Priya Sharma",
    phone: "+91 98765 43210",
    experience: "8 years experience",
    specialization: "Home Healthcare Specialist",
    avatar: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&h=200&fit=crop"
  };

  const calculateEndTime = () => {
    if (!appointmentData?.time || !appointmentData?.duration) return "";
    
    const [time, period] = appointmentData.time.split(" ");
    let [hours, minutes] = time.split(":").map(Number);
    
    if (period === "PM" && hours !== 12) hours += 12;
    if (period === "AM" && hours === 12) hours = 0;
    
    const endHours = hours + parseInt(appointmentData.duration);
    const endPeriod = endHours >= 12 ? "PM" : "AM";
    const displayHours = endHours > 12 ? endHours - 12 : endHours === 0 ? 12 : endHours;
    
    return `${displayHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${endPeriod}`;
  };

  return (
    <div className="bg-white h-screen w-screen overflow-hidden max-w-[393px] mx-auto flex flex-col">
      {/* Content */}
      <div className="flex-1 overflow-y-auto px-[20px] py-[40px]">
        {/* Success Icon */}
        <div className="flex flex-col items-center mb-[32px]">
          <div className="relative mb-[20px]">
            <div className="size-[120px] rounded-full bg-gradient-to-br from-[#4CAF50] to-[#45A049] flex items-center justify-center animate-scale-in">
              <CheckCircle2 className="size-[60px] text-white" />
            </div>
            <div className="absolute inset-0 size-[120px] rounded-full bg-[#4CAF50]/20 animate-ping" />
          </div>
          <h1 className="font-['Poppins:Bold',sans-serif] text-[24px] text-[#121314] mb-[8px] text-center">
            Appointment Confirmed!
          </h1>
          <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#606060] text-center max-w-[280px]">
            Your healthcare appointment has been successfully scheduled
          </p>
        </div>

        {/* Package Details */}
        {packageData && (
          <div className="bg-gradient-to-br from-[#E3F2FD] to-white rounded-[16px] p-[16px] mb-[16px] border border-[#1F75BE]/20">
            <h2 className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-[#1F75BE] mb-[4px]">
              {packageData.title}
            </h2>
            <p className="font-['Poppins:Bold',sans-serif] text-[20px] text-[#121314]">
              {packageData.price}
            </p>
          </div>
        )}

        {/* Appointment Details */}
        {appointmentData && (
          <div className="bg-white rounded-[16px] p-[16px] mb-[16px] border border-gray-200">
            <h3 className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-[#121314] mb-[16px]">
              Appointment Details
            </h3>
            
            <div className="space-y-[12px]">
              <div className="flex items-start gap-[12px]">
                <div className="size-[40px] rounded-[10px] bg-[#E3F2FD] flex items-center justify-center shrink-0">
                  <Calendar className="size-[20px] text-[#1F75BE]" />
                </div>
                <div className="flex-1">
                  <p className="font-['Roboto:Medium',sans-serif] text-[13px] text-[#606060] mb-[2px]">
                    Date
                  </p>
                  <p className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-[#121314]">
                    {new Date(appointmentData.date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-[12px]">
                <div className="size-[40px] rounded-[10px] bg-[#E3F2FD] flex items-center justify-center shrink-0">
                  <Clock className="size-[20px] text-[#1F75BE]" />
                </div>
                <div className="flex-1">
                  <p className="font-['Roboto:Medium',sans-serif] text-[13px] text-[#606060] mb-[2px]">
                    Time & Duration
                  </p>
                  <p className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-[#121314]">
                    {appointmentData.time} - {calculateEndTime()}
                  </p>
                  <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#606060]">
                    ({appointmentData.duration} hours service)
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Nurse Details */}
        <div className="bg-white rounded-[16px] p-[16px] mb-[16px] border border-gray-200">
          <h3 className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-[#121314] mb-[16px]">
            Your Assigned Nurse
          </h3>
          
          <div className="flex items-center gap-[12px] mb-[16px]">
            <img
              src={nurseData.avatar}
              alt={nurseData.name}
              className="size-[60px] rounded-full object-cover border-2 border-[#1F75BE]"
            />
            <div className="flex-1">
              <p className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-[#121314] mb-[2px]">
                {nurseData.name}
              </p>
              <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#606060] mb-[2px]">
                {nurseData.specialization}
              </p>
              <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#1F75BE]">
                {nurseData.experience}
              </p>
            </div>
          </div>

          <div className="space-y-[8px]">
            <div className="flex items-center gap-[12px] p-[12px] bg-[#F5F5F5] rounded-[10px]">
              <Phone className="size-[18px] text-[#1F75BE]" />
              <p className="font-['Roboto:Medium',sans-serif] text-[14px] text-[#121314]">
                {nurseData.phone}
              </p>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-gradient-to-br from-[#FFF3E0] to-white rounded-[16px] p-[16px] border border-[#FF9800]/20">
          <h3 className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-[#121314] mb-[12px]">
            What's Next?
          </h3>
          <ul className="space-y-[8px]">
            <li className="flex items-start gap-[8px]">
              <div className="size-[6px] rounded-full bg-[#FF9800] mt-[6px] shrink-0" />
              <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#606060]">
                Our nurse will arrive at your location at the scheduled time
              </p>
            </li>
            <li className="flex items-start gap-[8px]">
              <div className="size-[6px] rounded-full bg-[#FF9800] mt-[6px] shrink-0" />
              <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#606060]">
                You'll receive a confirmation call 1 hour before the appointment
              </p>
            </li>
            <li className="flex items-start gap-[8px]">
              <div className="size-[6px] rounded-full bg-[#FF9800] mt-[6px] shrink-0" />
              <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#606060]">
                Keep your medical records ready for the nurse's visit
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Buttons */}
      <div className="bg-white border-t border-[#E0E0E0] px-[20px] py-[16px] space-y-[12px]">
        <button
          onClick={() => navigate("/home")}
          className="w-full py-[14px] rounded-[12px] bg-[#1F75BE] text-white font-['Poppins:SemiBold',sans-serif] text-[16px] hover:bg-[#1A5F9E] active:scale-98 transition-all"
        >
          Back to Home
        </button>
        <button
          onClick={() => navigate("/packages")}
          className="w-full py-[14px] rounded-[12px] bg-white text-[#1F75BE] border-2 border-[#1F75BE] font-['Poppins:SemiBold',sans-serif] text-[16px] hover:bg-[#E3F2FD] active:scale-98 transition-all"
        >
          View More Packages
        </button>
      </div>

      <style>{`
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
        .active\\:scale-98:active {
          transform: scale(0.98);
        }
      `}</style>

      {/* Bottom Navigation */}
      <BottomNavBar />
    </div>
  );
}
