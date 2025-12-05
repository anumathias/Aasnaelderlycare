import { useState } from "react";
import { useNavigate, useParams } from "react-router";
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
import imgRectangle832 from "figma:asset/5f9c6a325c11227889f93af7a043cec9d0ea62ee.png";
import imgRectangle833 from "figma:asset/295766ef3bb06e9a0f321862fe859933be163c63.png";
import imgRectangle834 from "figma:asset/b20c9f23f43e6cf7991a6051ea2f10dfa4549932.png";
import imgDoctor1 from "figma:asset/7124e0cbe8bab3dc4113a933a56d5fd538ade894.png";
import imgDoctor2 from "figma:asset/11590f2cddf2f74d953a11a31144be63d01f5201.png";
import imgDoctor3 from "figma:asset/11818f93ca3f4cc39a460a97a6f40eb5c2c26ce7.png";

interface DoctorData {
  name: string;
  specialty: string;
  image: string;
  location: string;
  inClinicCost: string;
  homeCost: string;
}

const doctorsData: Record<string, DoctorData> = {
  "dr-mary-lawson": {
    name: "Dr. Mary Lawson",
    specialty: "General Specialist",
    image: imgRectangle832,
    location: "Boyempally, Hyderabad",
    inClinicCost: "250",
    homeCost: "300",
  },
  "dr-john-harry": {
    name: "Dr. John Harry",
    specialty: "Cardiologist Specialist",
    image: imgRectangle833,
    location: "Banjara Hills, Hyderabad",
    inClinicCost: "300",
    homeCost: "400",
  },
  "dr-eddy-munson": {
    name: "Dr. Eddy Munson",
    specialty: "Neurologist Specialist",
    image: imgRectangle834,
    location: "Jubilee Hills, Hyderabad",
    inClinicCost: "500",
    homeCost: "650",
  },
  "dr-priya-sharma": {
    name: "Dr. Priya Sharma",
    specialty: "Pediatrician Specialist",
    image: imgDoctor1,
    location: "Gachibowli, Hyderabad",
    inClinicCost: "350",
    homeCost: "450",
  },
  "dr-arjun-patel": {
    name: "Dr. Arjun Patel",
    specialty: "Orthopedic Specialist",
    image: imgDoctor2,
    location: "Kondapur, Hyderabad",
    inClinicCost: "450",
    homeCost: "600",
  },
  "dr-rajesh-kumar": {
    name: "Dr. Rajesh Kumar",
    specialty: "ENT Specialist",
    image: imgDoctor3,
    location: "Madhapur, Hyderabad",
    inClinicCost: "400",
    homeCost: "550",
  }
};

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

export function DoctorBookingScreen() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const doctor = id ? doctorsData[id] : null;

  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [appointmentType, setAppointmentType] = useState<"in-person" | "home" | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<"current" | "home" | "secondary" | null>(null);
  const [showAddLocation, setShowAddLocation] = useState(false);
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
        <p>Doctor not found</p>
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
    navigate("/doctor-appointment-payment", {
      state: {
        doctorName: doctor.name,
        specialty: doctor.specialty,
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
            Book Appointment
          </h1>
          <div className="w-[32px]" />
        </div>
      </div>

      {/* Content */}
      <div className="w-full px-[16px] py-[20px] pb-[200px]">
        {/* Doctor Info Card */}
        <div className="bg-white border border-[#e5e7eb] rounded-[12px] p-[14px] mb-[20px] shadow-sm">
          <div className="flex gap-[12px]">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-[60px] h-[60px] rounded-[10px] object-cover"
            />
            <div className="flex-1">
              <h3 className="font-['Poppins:SemiBold',sans-serif] text-[15px] text-[#121314] mb-[4px]">
                {doctor.name}
              </h3>
              <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#5f6368] mb-[2px]">
                {doctor.specialty}
              </p>
              <div className="flex items-center gap-[4px] mt-[4px]">
                <MapPin className="size-[12px] text-[#1F75BE]" />
                <p className="font-['Poppins:Regular',sans-serif] text-[11px] text-[#5f6368]">
                  {doctor.location}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Select Date */}
        <div className="mb-[24px]">
          <div className="flex items-center gap-[8px] mb-[12px]">
            <Calendar className="size-[18px] text-[#1F75BE]" />
            <h2 className="font-['Poppins:SemiBold',sans-serif] text-[15px] text-[#121314]">
              Select Date
            </h2>
          </div>
          <div className="flex gap-[10px] overflow-x-auto pb-[8px] scrollbar-hide">
            {dates.map((dateObj, index) => (
              <button
                key={index}
                onClick={() => setSelectedDate(dateObj.fullDate)}
                className={`flex-shrink-0 flex flex-col items-center justify-center w-[65px] h-[75px] rounded-[10px] border-2 transition-all ${
                  selectedDate === dateObj.fullDate
                    ? "border-[#1F75BE] bg-[#e8f4fd]"
                    : "border-[#e5e7eb] bg-white hover:border-[#1F75BE]/40"
                }`}
              >
                <p className="font-['Poppins:SemiBold',sans-serif] text-[11px] text-[#5f6368] mb-[4px]">
                  {dateObj.day}
                </p>
                <p className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-[#121314]">
                  {dateObj.date}
                </p>
                <p className="font-['Poppins:Regular',sans-serif] text-[10px] text-[#5f6368] mt-[2px]">
                  {dateObj.month}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Select Time */}
        <div className="mb-[24px]">
          <div className="flex items-center gap-[8px] mb-[12px]">
            <Clock className="size-[18px] text-[#1F75BE]" />
            <h2 className="font-['Poppins:SemiBold',sans-serif] text-[15px] text-[#121314]">
              Select Time
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-[10px]">
            {timeSlots.map((time, index) => (
              <button
                key={index}
                onClick={() => setSelectedTime(time)}
                className={`px-[12px] py-[10px] rounded-[8px] border-2 transition-all ${
                  selectedTime === time
                    ? "border-[#1F75BE] bg-[#e8f4fd] text-[#1F75BE]"
                    : "border-[#e5e7eb] bg-white text-[#5f6368] hover:border-[#1F75BE]/40"
                }`}
              >
                <p className="font-['Poppins:SemiBold',sans-serif] text-[12px]">
                  {time}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Appointment Type */}
        <div className="mb-[24px]">
          <div className="flex items-center gap-[8px] mb-[12px]">
            <Building2 className="size-[18px] text-[#1F75BE]" />
            <h2 className="font-['Poppins:SemiBold',sans-serif] text-[15px] text-[#121314]">
              Appointment Type
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-[12px]">
            <button
              onClick={() => {
                setAppointmentType("in-person");
                setSelectedLocation(null);
              }}
              className={`flex flex-col items-center justify-center p-[16px] rounded-[12px] border-2 transition-all ${
                appointmentType === "in-person"
                  ? "border-[#1F75BE] bg-[#e8f4fd]"
                  : "border-[#e5e7eb] bg-white hover:border-[#1F75BE]/40"
              }`}
            >
              <Building2 className={`size-[28px] mb-[8px] ${
                appointmentType === "in-person" ? "text-[#1F75BE]" : "text-[#5f6368]"
              }`} />
              <p className={`font-['Poppins:SemiBold',sans-serif] text-[13px] mb-[4px] ${
                appointmentType === "in-person" ? "text-[#1F75BE]" : "text-[#121314]"
              }`}>
                In-Person
              </p>
              <p className="font-['Poppins:Regular',sans-serif] text-[11px] text-[#5f6368]">
                ₹{doctor.inClinicCost}
              </p>
            </button>
            
            <button
              onClick={() => setAppointmentType("home")}
              className={`flex flex-col items-center justify-center p-[16px] rounded-[12px] border-2 transition-all ${
                appointmentType === "home"
                  ? "border-[#1F75BE] bg-[#e8f4fd]"
                  : "border-[#e5e7eb] bg-white hover:border-[#1F75BE]/40"
              }`}
            >
              <Home className={`size-[28px] mb-[8px] ${
                appointmentType === "home" ? "text-[#1F75BE]" : "text-[#5f6368]"
              }`} />
              <p className={`font-['Poppins:SemiBold',sans-serif] text-[13px] mb-[4px] ${
                appointmentType === "home" ? "text-[#1F75BE]" : "text-[#121314]"
              }`}>
                Home Visit
              </p>
              <p className="font-['Poppins:Regular',sans-serif] text-[11px] text-[#5f6368]">
                ₹{doctor.homeCost}
              </p>
            </button>
          </div>
        </div>

        {/* Clinic Location (for in-person) */}
        {appointmentType === "in-person" && (
          <div className="mb-[24px]">
            <div className="flex items-center gap-[8px] mb-[12px]">
              <MapPin className="size-[18px] text-[#1F75BE]" />
              <h2 className="font-['Poppins:SemiBold',sans-serif] text-[15px] text-[#121314]">
                Clinic Location
              </h2>
            </div>
            <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-[12px] p-[14px]">
              <div className="flex items-start gap-[10px] mb-[12px]">
                <Building2 className="size-[18px] text-[#1F75BE] mt-[2px]" />
                <div>
                  <p className="font-['Poppins:SemiBold',sans-serif] text-[13px] text-[#121314] mb-[4px]">
                    {doctor.name}'s Clinic
                  </p>
                  <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#5f6368]">
                    {doctor.location}
                  </p>
                </div>
              </div>
              
              {/* Map Placeholder */}
              <div className="w-full h-[150px] bg-[#e5e7eb] rounded-[8px] flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="size-[32px] text-[#1F75BE] mx-auto mb-[8px]" />
                  <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#5f6368]">
                    View on Map
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Home Location Selection (for home visit) */}
        {appointmentType === "home" && (
          <div className="mb-[24px]">
            <div className="flex items-center gap-[8px] mb-[12px]">
              <MapPin className="size-[18px] text-[#1F75BE]" />
              <h2 className="font-['Poppins:SemiBold',sans-serif] text-[15px] text-[#121314]">
                Select Location
              </h2>
            </div>
            
            <div className="space-y-[10px]">
              {/* Current Location */}
              <button
                onClick={() => {
                  setSelectedLocation("current");
                  setShowAddLocation(false);
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
                      Using GPS to detect location
                    </p>
                  </div>
                </div>
                {selectedLocation === "current" && (
                  <Check className="size-[20px] text-[#1F75BE]" />
                )}
              </button>

              {/* Home Location */}
              <button
                onClick={() => {
                  setSelectedLocation("home");
                  setShowAddLocation(false);
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

              {/* Secondary Location */}
              <button
                onClick={() => {
                  setSelectedLocation("secondary");
                  setShowAddLocation(false);
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

              {/* Add New Location */}
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
            Total Consultation Fee
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
            {/* Header */}
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

            {/* Map and Location Info */}
            <div className="mx-[16px] mt-[-20px] mb-[20px] border border-[rgba(116,116,116,0.5)] shadow-lg rounded-[12px] overflow-hidden bg-white">
              {/* Map Placeholder */}
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

              {/* Location Name */}
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

              {/* Input Fields */}
              <div className="p-[16px] space-y-[12px]">
                {/* House/Flat No */}
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

                {/* Apartment/Road/Area */}
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

                {/* Direction to Reach */}
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

            {/* Confirm Button */}
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
