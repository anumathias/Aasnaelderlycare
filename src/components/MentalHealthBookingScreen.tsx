import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  MapPin, 
  Home, 
  Building2, 
  Navigation, 
  Plus,
  Check
} from "lucide-react";
import BottomNavBar from "./BottomNavBar";

// Generate dates for the next 7 days
const generateDates = () => {
  const dates = [];
  const today = new Date();
  
  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    dates.push({
      day: date.toLocaleDateString('en-US', { weekday: 'short' }),
      date: date.getDate(),
      month: date.toLocaleDateString('en-US', { month: 'short' }),
      fullDate: date.toISOString().split('T')[0]
    });
  }
  
  return dates;
};

// Time slots
const timeSlots = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
  "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
  "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM"
];

export function MentalHealthBookingScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const doctor = location.state?.doctor;

  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [appointmentType, setAppointmentType] = useState<"in-person" | "home" | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<"current" | "home" | "secondary" | null>(null);
  const [newLocation, setNewLocation] = useState("");
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [locationForm, setLocationForm] = useState({
    houseNo: "",
    apartment: "",
    directions: ""
  });

  const dates = generateDates();

  if (!doctor) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Mental Health Doctor not found</p>
      </div>
    );
  }

  const handleProceedToPayment = () => {
    if (!selectedDate || !selectedTime || !appointmentType) {
      alert("Please select date, time, and appointment type");
      return;
    }
    
    if (appointmentType === "home" && !selectedLocation && !newLocation) {
      alert("Please select or add a location for home appointment");
      return;
    }
    
    // Get location details
    let locationDetails = "";
    if (appointmentType === "in-person") {
      locationDetails = doctor.location;
    } else if (appointmentType === "home") {
      if (selectedLocation === "current") {
        locationDetails = "Current Location (GPS-based)";
      } else if (selectedLocation === "home") {
        locationDetails = "Plot No. 45, Jubilee Hills, Hyderabad - 500033";
      } else if (selectedLocation === "secondary") {
        locationDetails = "Office: Cyber Towers, HITEC City, Hyderabad - 500081";
      } else if (newLocation) {
        locationDetails = newLocation;
      }
    }
    
    // Navigate to payment screen with appointment details
    navigate("/mental-health-appointment-payment", {
      state: {
        doctorName: doctor.name,
        specialty: doctor.specialization,
        date: selectedDate,
        time: selectedTime,
        appointmentType: appointmentType,
        location: locationDetails,
        amount: appointmentType === "home" ? doctor.homeCost : doctor.inClinicCost
      }
    });
  };

  return (
    <div className="relative flex flex-col items-center min-h-screen w-full max-w-[393px] mx-auto bg-white overflow-y-auto">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white w-full border-b border-[#e5e7eb]">
        <div className="flex items-center justify-between px-[16px] py-[14px]">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center w-[32px] h-[32px] rounded-full hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft className="size-[20px] text-[#1F75BE]" />
          </button>
          <h1 className="font-['Poppins:SemiBold',sans-serif] text-[17px] text-[#121314]">
            Book Mental Health Session
          </h1>
          <div className="w-[32px]" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 w-full px-[16px] py-[20px] pb-[200px]">
        {/* Doctor Info */}
        <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-[12px] p-[14px] mb-[24px] flex items-center gap-[12px]">
          <div className="size-[60px] rounded-full overflow-hidden flex-shrink-0">
            {doctor.image ? (
              <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
            ) : (
              <div className="size-full bg-[#1F75BE]/10 flex items-center justify-center">
                <p className="font-['Poppins:SemiBold',sans-serif] text-[20px] text-[#1F75BE]">
                  {doctor.name?.charAt(0) || "D"}
                </p>
              </div>
            )}
          </div>
          <div>
            <h3 className="font-['Poppins:SemiBold',sans-serif] text-[15px] text-[#121314] mb-[2px]">
              {doctor.name}
            </h3>
            <p className="font-['Poppins:Regular',sans-serif] text-[13px] text-[#5f6368]">
              {doctor.specialization}
            </p>
          </div>
        </div>

        {/* Date Selection */}
        <div className="mb-[24px]">
          <div className="flex items-center gap-[8px] mb-[12px]">
            <Calendar className="size-[18px] text-[#1F75BE]" />
            <h2 className="font-['Poppins:SemiBold',sans-serif] text-[15px] text-[#121314]">
              Select Date
            </h2>
          </div>
          <div className="flex gap-[8px] overflow-x-auto pb-[8px]" style={{ scrollbarWidth: 'none' }}>
            {dates.map((dateItem) => (
              <button
                key={dateItem.fullDate}
                onClick={() => setSelectedDate(dateItem.fullDate)}
                className={`flex flex-col items-center justify-center min-w-[70px] p-[10px] rounded-[10px] border-2 transition-all ${
                  selectedDate === dateItem.fullDate
                    ? "border-[#1F75BE] bg-[#e8f4fd]"
                    : "border-[#e5e7eb] bg-white hover:border-[#1F75BE]/40"
                }`}
              >
                <p className={`font-['Poppins:Regular',sans-serif] text-[11px] mb-[2px] ${
                  selectedDate === dateItem.fullDate ? "text-[#1F75BE]" : "text-[#5f6368]"
                }`}>
                  {dateItem.day}
                </p>
                <p className={`font-['Poppins:SemiBold',sans-serif] text-[16px] ${
                  selectedDate === dateItem.fullDate ? "text-[#1F75BE]" : "text-[#121314]"
                }`}>
                  {dateItem.date}
                </p>
                <p className={`font-['Poppins:Regular',sans-serif] text-[11px] ${
                  selectedDate === dateItem.fullDate ? "text-[#1F75BE]" : "text-[#5f6368]"
                }`}>
                  {dateItem.month}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Time Selection */}
        <div className="mb-[24px]">
          <div className="flex items-center gap-[8px] mb-[12px]">
            <Clock className="size-[18px] text-[#1F75BE]" />
            <h2 className="font-['Poppins:SemiBold',sans-serif] text-[15px] text-[#121314]">
              Select Time
            </h2>
          </div>
          <div className="grid grid-cols-4 gap-[8px]">
            {timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`p-[10px] rounded-[8px] border-2 transition-all ${
                  selectedTime === time
                    ? "border-[#1F75BE] bg-[#e8f4fd]"
                    : "border-[#e5e7eb] bg-white hover:border-[#1F75BE]/40"
                }`}
              >
                <p className={`font-['Poppins:SemiBold',sans-serif] text-[11px] ${
                  selectedTime === time ? "text-[#1F75BE]" : "text-[#121314]"
                }`}>
                  {time}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Appointment Type Selection */}
        <div className="mb-[24px]">
          <h2 className="font-['Poppins:SemiBold',sans-serif] text-[15px] text-[#121314] mb-[12px]">
            Session Type
          </h2>
          <div className="grid grid-cols-2 gap-[12px]">
            <button
              onClick={() => {
                setAppointmentType("in-person");
                setSelectedLocation(null);
                setNewLocation("");
              }}
              className={`p-[16px] rounded-[12px] border-2 transition-all ${
                appointmentType === "in-person"
                  ? "border-[#1F75BE] bg-[#e8f4fd]"
                  : "border-[#e5e7eb] bg-white hover:border-[#1F75BE]/40"
              }`}
            >
              <Building2 className={`size-[24px] mx-auto mb-[8px] ${
                appointmentType === "in-person" ? "text-[#1F75BE]" : "text-[#5f6368]"
              }`} />
              <p className={`font-['Poppins:SemiBold',sans-serif] text-[14px] mb-[4px] ${
                appointmentType === "in-person" ? "text-[#1F75BE]" : "text-[#121314]"
              }`}>
                In-Person
              </p>
              <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#5f6368]">
                Visit clinic
              </p>
            </button>
            <button
              onClick={() => setAppointmentType("home")}
              className={`p-[16px] rounded-[12px] border-2 transition-all ${
                appointmentType === "home"
                  ? "border-[#1F75BE] bg-[#e8f4fd]"
                  : "border-[#e5e7eb] bg-white hover:border-[#1F75BE]/40"
              }`}
            >
              <Home className={`size-[24px] mx-auto mb-[8px] ${
                appointmentType === "home" ? "text-[#1F75BE]" : "text-[#5f6368]"
              }`} />
              <p className={`font-['Poppins:SemiBold',sans-serif] text-[14px] mb-[4px] ${
                appointmentType === "home" ? "text-[#1F75BE]" : "text-[#121314]"
              }`}>
                Home Visit
              </p>
              <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#5f6368]">
                At your location
              </p>
            </button>
          </div>
        </div>

        {/* Location Selection for Home Visit */}
        {appointmentType === "home" && (
          <div className="mb-[24px]">
            <div className="flex items-center gap-[8px] mb-[12px]">
              <MapPin className="size-[18px] text-[#1F75BE]" />
              <h2 className="font-['Poppins:SemiBold',sans-serif] text-[15px] text-[#121314]">
                Select Location
              </h2>
            </div>

            <div className="space-y-[12px]">
              <button
                onClick={() => {
                  setSelectedLocation("current");
                  setNewLocation("");
                }}
                className={`w-full flex items-center justify-between p-[14px] rounded-[12px] border-2 transition-all ${
                  selectedLocation === "current"
                    ? "border-[#1F75BE] bg-[#e8f4fd]"
                    : "border-[#e5e7eb] bg-white hover:border-[#1F75BE]/40"
                }`}
              >
                <div className="flex items-start gap-[12px]">
                  <Navigation className={`size-[18px] mt-[2px] ${
                    selectedLocation === "current" ? "text-[#1F75BE]" : "text-[#5f6368]"
                  }`} />
                  <div className="text-left">
                    <p className="font-['Poppins:SemiBold',sans-serif] text-[13px] text-[#121314] mb-[2px]">
                      Current Location
                    </p>
                    <p className="font-['Poppins:Regular',sans-serif] text-[11px] text-[#5f6368]">
                      Use GPS to detect my location
                    </p>
                  </div>
                </div>
                {selectedLocation === "current" && (
                  <Check className="size-[20px] text-[#1F75BE]" />
                )}
              </button>

              <button
                onClick={() => {
                  setSelectedLocation("home");
                  setNewLocation("");
                }}
                className={`w-full flex items-center justify-between p-[14px] rounded-[12px] border-2 transition-all ${
                  selectedLocation === "home"
                    ? "border-[#1F75BE] bg-[#e8f4fd]"
                    : "border-[#e5e7eb] bg-white hover:border-[#1F75BE]/40"
                }`}
              >
                <div className="flex items-start gap-[12px]">
                  <Home className={`size-[18px] mt-[2px] ${
                    selectedLocation === "home" ? "text-[#1F75BE]" : "text-[#5f6368]"
                  }`} />
                  <div className="text-left">
                    <p className="font-['Poppins:SemiBold',sans-serif] text-[13px] text-[#121314] mb-[2px]">
                      Home
                    </p>
                    <p className="font-['Poppins:Regular',sans-serif] text-[11px] text-[#5f6368]">
                      Plot No. 45, Jubilee Hills, Hyderabad - 500033
                    </p>
                  </div>
                </div>
                {selectedLocation === "home" && (
                  <Check className="size-[20px] text-[#1F75BE]" />
                )}
              </button>

              <button
                onClick={() => {
                  setSelectedLocation("secondary");
                  setNewLocation("");
                }}
                className={`w-full flex items-center justify-between p-[14px] rounded-[12px] border-2 transition-all ${
                  selectedLocation === "secondary"
                    ? "border-[#1F75BE] bg-[#e8f4fd]"
                    : "border-[#e5e7eb] bg-white hover:border-[#1F75BE]/40"
                }`}
              >
                <div className="flex items-start gap-[12px]">
                  <MapPin className={`size-[18px] mt-[2px] ${
                    selectedLocation === "secondary" ? "text-[#1F75BE]" : "text-[#5f6368]"
                  }`} />
                  <div className="text-left">
                    <p className="font-['Poppins:SemiBold',sans-serif] text-[13px] text-[#121314] mb-[2px]">
                      Secondary Location
                    </p>
                    <p className="font-['Poppins:Regular',sans-serif] text-[11px] text-[#5f6368]">
                      Office: Cyber Towers, HITEC City, Hyderabad - 500081
                    </p>
                  </div>
                </div>
                {selectedLocation === "secondary" && (
                  <Check className="size-[20px] text-[#1F75BE]" />
                )}
              </button>

              <button
                onClick={() => setShowLocationModal(true)}
                className="w-full flex items-center justify-center gap-[8px] p-[14px] rounded-[12px] border-2 border-dashed border-[#1F75BE] bg-white hover:bg-[#e8f4fd] transition-all"
              >
                <Plus className="size-[18px] text-[#1F75BE]" />
                <p className="font-['Poppins:SemiBold',sans-serif] text-[13px] text-[#1F75BE]">
                  Add New Location
                </p>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Fixed Button */}
      <div className="fixed bottom-[80px] left-0 right-0 bg-white border-t border-[#e5e7eb] px-[16px] py-[14px] max-w-[393px] mx-auto w-full z-50">
        <div className="flex items-center justify-between mb-[10px]">
          <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#5f6368]">
            Total Session Fee
          </p>
          <p className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-[#1F75BE]">
            ₹{appointmentType === "home" ? doctor.homeCost : doctor.inClinicCost}
          </p>
        </div>
        <button
          onClick={handleProceedToPayment}
          className="w-full bg-[#1F75BE] hover:bg-[#1a64a3] text-white rounded-[10px] py-[14px] font-['Poppins:SemiBold',sans-serif] text-[15px] transition-all active:scale-[0.98] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!selectedDate || !selectedTime || !appointmentType || (appointmentType === "home" && !selectedLocation && !newLocation)}
        >
          Proceed to Payment
        </button>
      </div>

      {/* Add Location Modal */}
      {showLocationModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white w-full max-w-[393px] h-full overflow-y-auto">
            <div className="bg-[rgba(91,151,249,0.4)] rounded-bl-[16px] rounded-br-[16px] pb-[40px] pt-[20px] px-[16px] relative">
              <button
                onClick={() => {
                  setShowLocationModal(false);
                  setLocationForm({ houseNo: "", apartment: "", directions: "" });
                }}
                className="absolute left-[16px] top-[20px] flex items-center justify-center w-[32px] h-[32px]"
              >
                <ArrowLeft className="size-[20px] text-black" />
              </button>
              <h1 className="font-['Poppins:SemiBold',sans-serif] text-[28px] text-[#066abf] text-center mt-[60px]">
                New Location
              </h1>
            </div>

            <div className="mx-[16px] mt-[-20px] mb-[20px] border border-[rgba(116,116,116,0.5)] shadow-lg rounded-[12px] overflow-hidden bg-white">
              <div className="relative h-[120px] bg-[#e5e7eb] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="size-[40px] text-[#1F75BE] mx-auto mb-[8px]" />
                    <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#5f6368]">
                      Map View
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-[12px] p-[16px] border-b border-[rgba(116,116,116,0.5)]">
                <MapPin className="size-[24px] text-[#48A2E8] mt-[2px] flex-shrink-0" />
                <div>
                  <p className="font-['Poppins:SemiBold',sans-serif] text-[15px] text-[#121314] mb-[4px]">
                    Nagireddy Colony
                  </p>
                  <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#5f6368]">
                    NagiReddy, Alwal, Secunderabad, Telangana, India
                  </p>
                </div>
              </div>

              <div className="p-[16px] space-y-[12px]">
                <div className="border border-[rgba(116,116,116,0.5)] rounded-[8px] p-[12px]">
                  <label className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-[#121314] mb-[6px] block">
                    House /Flat No
                  </label>
                  <input
                    type="text"
                    value={locationForm.houseNo}
                    onChange={(e) => setLocationForm({...locationForm, houseNo: e.target.value})}
                    placeholder="Enter your Address"
                    className="w-full font-['Poppins:Regular',sans-serif] text-[13px] text-[#121314] focus:outline-none"
                  />
                </div>

                <div className="border border-[rgba(116,116,116,0.5)] rounded-[8px] p-[12px]">
                  <label className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-[#121314] mb-[6px] block">
                    Apartment/Road/Area (Recommended)
                  </label>
                  <input
                    type="text"
                    value={locationForm.apartment}
                    onChange={(e) => setLocationForm({...locationForm, apartment: e.target.value})}
                    placeholder="Enter your Address"
                    className="w-full font-['Poppins:Regular',sans-serif] text-[13px] text-[#121314] focus:outline-none"
                  />
                </div>

                <div className="border border-[rgba(116,116,116,0.5)] rounded-[8px] p-[12px]">
                  <label className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-[#121314] mb-[6px] block">
                    Direction to Reach (Optional)
                  </label>
                  <input
                    type="text"
                    value={locationForm.directions}
                    onChange={(e) => setLocationForm({...locationForm, directions: e.target.value})}
                    placeholder="Help us Reach you Fast"
                    className="w-full font-['Poppins:Regular',sans-serif] text-[13px] text-[#121314] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="px-[16px] pb-[20px]">
              <button
                onClick={() => {
                  if (locationForm.houseNo && locationForm.apartment) {
                    const fullAddress = `${locationForm.houseNo}, ${locationForm.apartment}, Nagireddy Colony, Alwal, Secunderabad`;
                    setNewLocation(fullAddress);
                    setShowLocationModal(false);
                    setSelectedLocation(null);
                  } else {
                    alert("Please fill in House No and Apartment/Road/Area fields");
                  }
                }}
                className="w-full bg-[#48a2e8] hover:bg-[#3a8ec9] text-white rounded-[8px] py-[16px] font-['Poppins:SemiBold',sans-serif] text-[16px] transition-all active:scale-[0.98] border border-[#0d2334]"
              >
                Confirm Address
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
