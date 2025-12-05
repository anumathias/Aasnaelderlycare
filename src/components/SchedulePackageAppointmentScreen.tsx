import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import BottomNavBar from "./BottomNavBar";

type TimeSlot = {
  time: string;
  available: boolean;
};

export default function SchedulePackageAppointmentScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const packageData = location.state?.package;

  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedDuration, setSelectedDuration] = useState<string>("");

  // Generate next 7 days
  const generateDates = () => {
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      dates.push({
        date: date.toISOString().split('T')[0],
        day: date.toLocaleDateString('en-US', { weekday: 'short' }),
        dayNum: date.getDate(),
        month: date.toLocaleDateString('en-US', { month: 'short' })
      });
    }
    return dates;
  };

  const dates = generateDates();

  const timeSlots: TimeSlot[] = [
    { time: "08:00 AM", available: true },
    { time: "09:00 AM", available: true },
    { time: "10:00 AM", available: true },
    { time: "11:00 AM", available: false },
    { time: "12:00 PM", available: true },
    { time: "02:00 PM", available: true },
    { time: "03:00 PM", available: true },
    { time: "04:00 PM", available: true },
    { time: "05:00 PM", available: false },
    { time: "06:00 PM", available: true }
  ];

  const durations = [
    { label: "2 Hours", value: "2" },
    { label: "4 Hours", value: "4" },
    { label: "6 Hours", value: "6" },
    { label: "8 Hours", value: "8" },
    { label: "Full Day (12 Hours)", value: "12" }
  ];

  const handleContinue = () => {
    if (selectedDate && selectedTime && selectedDuration) {
      navigate("/package-payment", {
        state: {
          package: packageData,
          appointment: {
            date: selectedDate,
            time: selectedTime,
            duration: selectedDuration
          }
        }
      });
    }
  };

  return (
    <div className="bg-white h-screen w-screen overflow-hidden max-w-[393px] mx-auto flex flex-col">
      {/* Header */}
      <div className="bg-white px-[20px] pt-[20px] pb-[16px] border-b border-[#E0E0E0]">
        <div className="flex items-center justify-between">
          <button
            className="flex items-center justify-center size-[40px] cursor-pointer hover:bg-[#1F75BE]/10 rounded-full transition-all active:scale-95 border border-gray-200 hover:border-[#1F75BE] bg-white"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="size-[20px] text-[#1F75BE]" />
          </button>
          <h1 className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-[#1F75BE]">
            Schedule Appointment
          </h1>
          <div className="w-[40px]" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-[20px] py-[24px] pb-[180px]">
        {/* Package Info */}
        {packageData && (
          <div className="bg-gradient-to-br from-[#E3F2FD] to-white rounded-[16px] p-[16px] mb-[24px] border border-[#1F75BE]/20">
            <h2 className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-[#1F75BE] mb-[4px]">
              {packageData.title}
            </h2>
            <p className="font-['Poppins:Bold',sans-serif] text-[20px] text-[#121314]">
              {packageData.price}
            </p>
          </div>
        )}

        {/* Select Date */}
        <div className="mb-[24px]">
          <div className="flex items-center gap-[8px] mb-[12px]">
            <Calendar className="size-[20px] text-[#1F75BE]" />
            <h3 className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-[#121314]">
              Select Date
            </h3>
          </div>
          <div className="flex gap-[8px] overflow-x-auto pb-[8px]">
            {dates.map((dateObj) => (
              <button
                key={dateObj.date}
                onClick={() => setSelectedDate(dateObj.date)}
                className={`min-w-[70px] flex flex-col items-center justify-center py-[12px] px-[8px] rounded-[12px] border-2 transition-all ${
                  selectedDate === dateObj.date
                    ? "bg-[#1F75BE] border-[#1F75BE] text-white"
                    : "bg-white border-gray-200 hover:border-[#1F75BE] text-[#121314]"
                }`}
              >
                <span className="font-['Poppins:Medium',sans-serif] text-[12px] mb-[4px]">
                  {dateObj.day}
                </span>
                <span className="font-['Poppins:Bold',sans-serif] text-[18px]">
                  {dateObj.dayNum}
                </span>
                <span className="font-['Poppins:Regular',sans-serif] text-[12px]">
                  {dateObj.month}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Select Time */}
        <div className="mb-[24px]">
          <div className="flex items-center gap-[8px] mb-[12px]">
            <Clock className="size-[20px] text-[#1F75BE]" />
            <h3 className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-[#121314]">
              Select Time (When Nurse Arrives)
            </h3>
          </div>
          <div className="grid grid-cols-3 gap-[12px]">
            {timeSlots.map((slot) => (
              <button
                key={slot.time}
                onClick={() => slot.available && setSelectedTime(slot.time)}
                disabled={!slot.available}
                className={`py-[12px] px-[8px] rounded-[12px] border-2 transition-all font-['Poppins:Medium',sans-serif] text-[14px] ${
                  !slot.available
                    ? "bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed"
                    : selectedTime === slot.time
                    ? "bg-[#1F75BE] border-[#1F75BE] text-white"
                    : "bg-white border-gray-200 hover:border-[#1F75BE] text-[#121314]"
                }`}
              >
                {slot.time}
              </button>
            ))}
          </div>
        </div>

        {/* Select Duration */}
        <div className="mb-[24px]">
          <div className="flex items-center gap-[8px] mb-[12px]">
            <Clock className="size-[20px] text-[#1F75BE]" />
            <h3 className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-[#121314]">
              How Long Will Nurse Stay?
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-[12px]">
            {durations.map((duration) => (
              <button
                key={duration.value}
                onClick={() => setSelectedDuration(duration.value)}
                className={`py-[14px] px-[12px] rounded-[12px] border-2 transition-all font-['Poppins:Medium',sans-serif] text-[14px] ${
                  selectedDuration === duration.value
                    ? "bg-[#1F75BE] border-[#1F75BE] text-white"
                    : "bg-white border-gray-200 hover:border-[#1F75BE] text-[#121314]"
                }`}
              >
                {duration.label}
              </button>
            ))}
          </div>
        </div>

        {/* Summary */}
        {selectedDate && selectedTime && selectedDuration && (
          <div className="bg-gradient-to-br from-[#E8F5E9] to-white rounded-[16px] p-[16px] border border-[#4CAF50]/20">
            <h3 className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-[#121314] mb-[8px]">
              Appointment Summary
            </h3>
            <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#606060]">
              <span className="font-['Roboto:Medium',sans-serif]">Date:</span>{" "}
              {new Date(selectedDate).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
            <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#606060]">
              <span className="font-['Roboto:Medium',sans-serif]">Time:</span> {selectedTime}
            </p>
            <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#606060]">
              <span className="font-['Roboto:Medium',sans-serif]">Duration:</span> {selectedDuration} Hours
            </p>
          </div>
        )}
      </div>

      {/* Continue Button */}
      <div className="bg-white border-t border-[#E0E0E0] px-[20px] py-[16px]">
        <button
          onClick={handleContinue}
          disabled={!selectedDate || !selectedTime || !selectedDuration}
          className={`w-full py-[14px] rounded-[12px] font-['Poppins:SemiBold',sans-serif] text-[16px] transition-all ${
            selectedDate && selectedTime && selectedDuration
              ? "bg-[#1F75BE] text-white hover:bg-[#1A5F9E] active:scale-98"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          Continue to Payment
        </button>
      </div>

      {/* Bottom Navigation */}
      <BottomNavBar />
    </div>
  );
}
