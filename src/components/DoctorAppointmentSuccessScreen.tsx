import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { CheckCircle, Calendar, Clock, MapPin, User, Stethoscope } from "lucide-react";
import BottomNavBar from "./BottomNavBar";

export function DoctorAppointmentSuccessScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const appointmentDetails = location.state as {
    doctorName?: string;
    careTakerName?: string;
    physiotherapistName?: string;
    specialty: string;
    date: string;
    time: string;
    appointmentType?: string;
    serviceType?: string;
    location: string;
    amount: string;
  };
  
  const professionalName = appointmentDetails?.doctorName || appointmentDetails?.careTakerName || appointmentDetails?.physiotherapistName || "Professional";

  useEffect(() => {
    // Redirect to home after 5 seconds
    const timer = setTimeout(() => {
      navigate("/home");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  if (!appointmentDetails) {
    navigate("/home");
    return null;
  }

  // Generate a random appointment ID
  const appointmentId = `APT${Math.floor(100000 + Math.random() * 900000)}`;

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  return (
    <div className="relative flex flex-col items-center min-h-screen w-full max-w-[393px] mx-auto bg-white">
      {/* Success Header */}
      <div className="w-full bg-gradient-to-b from-[#e8f4fd] to-white pt-[40px] pb-[30px] px-[16px] text-center">
        <div className="flex justify-center mb-[16px]">
          <div className="relative">
            <CheckCircle className="size-[80px] text-[#10b981]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[60px] h-[60px] bg-white rounded-full" />
            </div>
            <CheckCircle className="absolute inset-0 size-[80px] text-[#10b981]" fill="#10b981" />
          </div>
        </div>
        
        <h1 className="font-['Poppins:SemiBold',sans-serif] text-[24px] text-[#121314] mb-[8px]">
          Appointment Booked!
        </h1>
        <p className="font-['Poppins:Regular',sans-serif] text-[14px] text-[#5f6368]">
          Your appointment has been successfully confirmed
        </p>
      </div>

      {/* Appointment Details */}
      <div className="flex-1 w-full px-[16px] py-[20px] overflow-y-auto">
        {/* Appointment ID Card */}
        <div className="bg-[#1F75BE] rounded-[12px] p-[16px] mb-[20px] shadow-lg">
          <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-white/80 mb-[4px]">
            Appointment ID
          </p>
          <p className="font-['Poppins:SemiBold',sans-serif] text-[20px] text-white">
            {appointmentId}
          </p>
        </div>

        {/* Details Card */}
        <div className="bg-white border border-[#e5e7eb] rounded-[12px] p-[16px] mb-[20px] shadow-sm">
          <h2 className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-[#121314] mb-[16px]">
            Appointment Details
          </h2>
          
          <div className="space-y-[16px]">
            {/* Professional Name */}
            <div className="flex items-start gap-[12px]">
              <User className="size-[20px] text-[#1F75BE] mt-[2px] flex-shrink-0" />
              <div>
                <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#5f6368] mb-[2px]">
                  {appointmentDetails.doctorName ? "Doctor" : appointmentDetails.careTakerName ? "CareTaker" : "Therapist"}
                </p>
                <p className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-[#121314]">
                  {professionalName}
                </p>
              </div>
            </div>

            {/* Specialty */}
            <div className="flex items-start gap-[12px]">
              <Stethoscope className="size-[20px] text-[#1F75BE] mt-[2px] flex-shrink-0" />
              <div>
                <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#5f6368] mb-[2px]">
                  Specialty
                </p>
                <p className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-[#121314]">
                  {appointmentDetails.specialty}
                </p>
              </div>
            </div>

            {/* Date */}
            <div className="flex items-start gap-[12px]">
              <Calendar className="size-[20px] text-[#1F75BE] mt-[2px] flex-shrink-0" />
              <div>
                <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#5f6368] mb-[2px]">
                  Date
                </p>
                <p className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-[#121314]">
                  {formatDate(appointmentDetails.date)}
                </p>
              </div>
            </div>

            {/* Time */}
            <div className="flex items-start gap-[12px]">
              <Clock className="size-[20px] text-[#1F75BE] mt-[2px] flex-shrink-0" />
              <div>
                <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#5f6368] mb-[2px]">
                  Time
                </p>
                <p className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-[#121314]">
                  {appointmentDetails.time}
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-[12px]">
              <MapPin className="size-[20px] text-[#1F75BE] mt-[2px] flex-shrink-0" />
              <div>
                <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#5f6368] mb-[2px]">
                  {appointmentDetails.appointmentType === "in-person" ? "Clinic Location" : 
                   appointmentDetails.appointmentType === "home" ? "Visit Location" : "Service Location"}
                </p>
                <p className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-[#121314]">
                  {appointmentDetails.location}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Info */}
        <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-[12px] p-[16px] mb-[20px]">
          <div className="flex justify-between items-center">
            <p className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-[#121314]">
              {appointmentDetails.serviceType ? "Service Fee Paid" : "Consultation Fee Paid"}
            </p>
            <p className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-[#10b981]">
              ₹{appointmentDetails.amount}
            </p>
          </div>
        </div>

        {/* Important Note */}
        <div className="bg-[#fff4e6] border border-[#ffa500]/20 rounded-[12px] p-[14px] mb-[20px]">
          <p className="font-['Poppins:SemiBold',sans-serif] text-[13px] text-[#ff8c00] mb-[6px]">
            Important Note
          </p>
          <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#5f6368]">
            {appointmentDetails.appointmentType === "in-person" && "Please arrive 10 minutes before your scheduled appointment time."}
            {(appointmentDetails.appointmentType === "home" || appointmentDetails.serviceType) && ` Our ${appointmentDetails.doctorName ? "doctor" : appointmentDetails.careTakerName ? "caretaker" : "therapist"} will reach your location at the scheduled time.`}
          </p>
        </div>

        {/* Auto Redirect Message */}
        <div className="text-center">
          <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#5f6368]">
            Redirecting to home in 5 seconds...
          </p>
        </div>
      </div>

      {/* Bottom Button */}
      <div className="w-full px-[16px] py-[14px] border-t border-[#e5e7eb]">
        <button
          onClick={() => navigate("/home")}
          className="w-full bg-[#1F75BE] hover:bg-[#1a64a3] text-white rounded-[10px] py-[14px] font-['Poppins:SemiBold',sans-serif] text-[15px] transition-all active:scale-[0.98] shadow-lg"
        >
          Go to Home
        </button>
      </div>

      {/* Bottom Navigation */}
      <BottomNavBar />
    </div>
  );
}
