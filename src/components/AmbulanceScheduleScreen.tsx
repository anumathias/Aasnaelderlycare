import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import BottomNavBar from "./BottomNavBar";

export default function AmbulanceScheduleScreen() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const today = new Date();
  const dates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    return date;
  });

  const timeSlots = [
    "Now (ASAP)",
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
  ];

  const formatDate = (date: Date) => {
    const day = date.getDate();
    const month = date.toLocaleDateString('en-US', { month: 'short' });
    const weekday = date.toLocaleDateString('en-US', { weekday: 'short' });
    return { day, month, weekday };
  };

  const handleSchedule = () => {
    if (selectedDate && selectedTime) {
      navigate("/ambulance-confirmation");
    }
  };

  return (
    <div className="bg-white h-screen w-screen overflow-hidden max-w-[393px] mx-auto flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#E3F2FD] to-white px-[16px] pt-[20px] pb-[24px]">
        <div className="flex items-center justify-center mb-[8px] relative">
          <button 
            className="absolute left-0 flex items-center justify-center size-[40px] cursor-pointer hover:bg-[#1F75BE]/10 rounded-full transition-all active:scale-95 border border-gray-200 hover:border-[#1F75BE] bg-white"
            onClick={() => navigate("/ambulance-booking")}
          >
            <ArrowLeft className="size-[20px] text-[#1F75BE]" />
          </button>
          <h1 className="font-['Poppins:SemiBold',sans-serif] text-[24px] text-[#1F75BE]">
            Schedule Ambulance
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-[20px] py-[24px] pb-[100px]">
        {/* Select Date */}
        <div className="mb-[32px]">
          <div className="flex items-center gap-[8px] mb-[16px]">
            <Calendar className="size-[20px] text-[#1F75BE]" />
            <h2 className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-[#121314]">
              Select Date
            </h2>
          </div>

          <div className="flex gap-[12px] overflow-x-auto pb-[8px] scrollbar-hide">
            {dates.map((date, index) => {
              const { day, month, weekday } = formatDate(date);
              const dateString = date.toDateString();
              const isSelected = selectedDate === dateString;
              const isToday = index === 0;

              return (
                <button
                  key={dateString}
                  onClick={() => setSelectedDate(dateString)}
                  className={`flex-shrink-0 w-[70px] rounded-[12px] p-[12px] border-2 transition-all active:scale-95 ${
                    isSelected
                      ? "bg-[#1F75BE] border-[#1F75BE]"
                      : "bg-white border-[#E0E0E0] hover:border-[#1F75BE]"
                  }`}
                >
                  <p className={`font-['Roboto:Regular',sans-serif] text-[12px] mb-[4px] ${
                    isSelected ? "text-white" : "text-[#606060]"
                  }`}>
                    {weekday}
                  </p>
                  <p className={`font-['Poppins:SemiBold',sans-serif] text-[24px] mb-[2px] ${
                    isSelected ? "text-white" : "text-[#121314]"
                  }`}>
                    {day}
                  </p>
                  <p className={`font-['Roboto:Regular',sans-serif] text-[12px] ${
                    isSelected ? "text-white" : "text-[#606060]"
                  }`}>
                    {month}
                  </p>
                  {isToday && (
                    <div className={`mt-[4px] text-[10px] font-['Roboto:SemiBold',sans-serif] ${
                      isSelected ? "text-white" : "text-[#1F75BE]"
                    }`}>
                      Today
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Select Time */}
        <div className="mb-[32px]">
          <div className="flex items-center gap-[8px] mb-[16px]">
            <Clock className="size-[20px] text-[#1F75BE]" />
            <h2 className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-[#121314]">
              Select Time
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-[12px]">
            {timeSlots.map((time) => {
              const isSelected = selectedTime === time;
              const isASAP = time === "Now (ASAP)";

              return (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`rounded-[8px] py-[12px] px-[8px] border-2 transition-all active:scale-95 ${
                    isSelected
                      ? "bg-[#1F75BE] border-[#1F75BE]"
                      : isASAP
                      ? "bg-[#FFF9E6] border-[#FFB60B] hover:border-[#FFB60B]"
                      : "bg-white border-[#E0E0E0] hover:border-[#1F75BE]"
                  } ${isASAP && "col-span-3"}`}
                >
                  <p className={`font-['Roboto:SemiBold',sans-serif] text-[14px] ${
                    isSelected ? "text-white" : isASAP ? "text-[#121314]" : "text-[#121314]"
                  }`}>
                    {time}
                  </p>
                  {isASAP && !isSelected && (
                    <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#606060] mt-[2px]">
                      Available in 30 minutes
                    </p>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Summary */}
        {selectedDate && selectedTime && (
          <div className="bg-[#E3F2FD] rounded-[12px] p-[16px] mb-[24px]">
            <p className="font-['Roboto:SemiBold',sans-serif] text-[14px] text-[#606060] mb-[8px]">
              Booking Summary
            </p>
            <div className="flex items-center gap-[12px]">
              <Calendar className="size-[20px] text-[#1F75BE]" />
              <p className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-[#121314]">
                {new Date(selectedDate).toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
            <div className="flex items-center gap-[12px] mt-[8px]">
              <Clock className="size-[20px] text-[#1F75BE]" />
              <p className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-[#121314]">
                {selectedTime}
              </p>
            </div>
          </div>
        )}

        {/* Important Note */}
        <div className="bg-[#FFF9E6] border-l-4 border-[#FFB60B] rounded-[12px] p-[16px]">
          <p className="font-['Roboto:SemiBold',sans-serif] text-[14px] text-[#121314] mb-[4px]">
            Emergency Services
          </p>
          <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#606060] leading-[1.5]">
            For immediate medical emergencies, please call emergency services directly at 108 or select "Now (ASAP)" option.
          </p>
        </div>
      </div>

      {/* Schedule Button */}
      <div className="p-[20px] border-t border-[#E0E0E0]">
        <button
          onClick={handleSchedule}
          disabled={!selectedDate || !selectedTime}
          className="w-full bg-[#1F75BE] rounded-[12px] py-[16px] hover:bg-[#1A5F9A] transition-colors active:scale-98 shadow-lg disabled:bg-[#B0BEC5] disabled:cursor-not-allowed"
        >
          <span className="font-['Roboto:SemiBold',sans-serif] text-[18px] text-white">
            Schedule Ambulance
          </span>
        </button>
      </div>

      {/* Bottom Navigation */}
      <BottomNavBar />
    </div>
  );
}
