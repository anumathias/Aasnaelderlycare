import { useNavigate, useLocation } from "react-router";
import { useEffect } from "react";
import BottomNavBar from "./BottomNavBar";

export default function CareTakerDetailScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const careTaker = location.state?.careTaker;

  useEffect(() => {
    if (!careTaker) {
      navigate("/caretakers");
    }
  }, [careTaker, navigate]);

  if (!careTaker) {
    return null;
  }

  return (
    <div className="bg-white relative w-full min-h-screen max-w-[393px] mx-auto flex flex-col">
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto" style={{
        scrollbarWidth: 'thin',
        scrollbarColor: '#1F75BE #f1f1f1'
      }}>
        <style>{`
          .overflow-y-auto::-webkit-scrollbar {
            width: 6px;
          }
          .overflow-y-auto::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 10px;
          }
          .overflow-y-auto::-webkit-scrollbar-thumb {
            background: #1F75BE;
            border-radius: 10px;
          }
          .overflow-y-auto::-webkit-scrollbar-thumb:hover {
            background: #1a64a3;
          }
        `}</style>

        <div className="px-[16px] pt-[16px] pb-[120px]">
          {/* Back Button */}
          <button 
            onClick={() => navigate("/caretakers")}
            className="flex items-center justify-center size-[40px] rounded-full hover:bg-[#1F75BE]/10 transition-all active:scale-95 border border-gray-200 hover:border-[#1F75BE] mb-[16px]"
          >
            <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="#1F75BE" />
            </svg>
          </button>

          {/* Care Taker Image */}
          <div className="h-[260px] relative rounded-[16px] shrink-0 w-full overflow-hidden mb-[16px]">
            <img 
              alt={careTaker.name} 
              className="object-cover size-full"
              style={{ 
                objectPosition: '50% 20%' 
              }} 
              src={careTaker.image} 
            />
          </div>

          {/* Care Taker Info Card */}
          <div className="relative shrink-0 w-full bg-gradient-to-br from-[#1F75BE] to-[#1a64a3] rounded-[14px] shadow-[0px_4px_12px_0px_rgba(31,117,190,0.3)] mb-[14px]">
            <div className="flex flex-row items-start size-full">
              <div className="box-border content-stretch flex flex-col gap-[6px] p-[16px] relative w-full">
                <div className="flex items-start justify-between w-full gap-[10px]">
                  <div className="flex flex-col gap-[4px]">
                    <p className="font-['Poppins:Bold',sans-serif] text-[18px] text-white leading-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]">{careTaker.name}</p>
                    <p className="font-['Poppins:Medium',sans-serif] text-[13px] text-white/90 leading-tight">Professional Care Taker</p>
                  </div>
                  <div className="flex gap-[3px] items-center shrink-0 mt-[2px] bg-white/20 rounded-[8px] px-[6px] py-[4px]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className="size-[13px]" fill="none" viewBox="0 0 24 24">
                        <path 
                          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
                          fill={i < careTaker.rating ? "#FFD700" : "#white"} 
                          fillOpacity={i < careTaker.rating ? 1 : 0.5}
                        />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Location & Availability */}
          <div className="relative shrink-0 w-full bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe] rounded-[14px] p-[16px] shadow-[0px_4px_10px_0px_rgba(72,162,232,0.15)] border-2 border-[#bae6fd] mb-[14px]">
            <div className="flex flex-col gap-[12px]">
              {/* Location Section */}
              <div className="flex items-center gap-[10px] bg-white rounded-[10px] p-[12px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05)]">
                <div className="bg-gradient-to-br from-[#48A2E8] to-[#3b8bc7] rounded-[8px] p-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]">
                  <svg className="size-[16px]" fill="none" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="white" />
                  </svg>
                </div>
                <div className="flex flex-col gap-[2px]">
                  <p className="font-['Poppins:SemiBold',sans-serif] text-[11px] text-[#48A2E8] leading-tight">Location</p>
                  <p className="font-['Poppins:Medium',sans-serif] text-[13px] text-[#121314] leading-tight">Alwal, Hyderabad</p>
                  <p className="font-['Poppins:Regular',sans-serif] text-[11px] text-[#757575] leading-tight">20 min away from your location</p>
                </div>
              </div>

              {/* Availability Section */}
              <div className="flex items-center gap-[10px] bg-white rounded-[10px] p-[12px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05)]">
                <div className="bg-gradient-to-br from-[#10b981] to-[#059669] rounded-[8px] p-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]">
                  <svg className="size-[16px]" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" fill="none"/>
                    <path d="M12 6v6l4 2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="flex flex-col gap-[2px]">
                  <p className="font-['Poppins:SemiBold',sans-serif] text-[11px] text-[#10b981] leading-tight">Availability</p>
                  <p className="font-['Poppins:Medium',sans-serif] text-[13px] text-[#121314] leading-tight">Full Time / Part Time</p>
                  <p className="font-['Poppins:Regular',sans-serif] text-[11px] text-[#757575] leading-tight">Assist: Male & Female</p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience & Patients Cards */}
          <div className="content-stretch flex gap-[10px] items-center leading-[0] relative shrink-0 w-full px-[0px] mb-[14px]">
            <div className="flex-1 bg-gradient-to-br from-[#5379df] to-[#4268ce] h-[54px] rounded-[12px] flex items-center justify-center px-[8px] shadow-[0px_4px_10px_0px_rgba(83,121,223,0.4)] border-2 border-white/20">
              <div className="flex flex-col items-center gap-[2px]">
                <p className="font-['Poppins:ExtraBold',sans-serif] text-[16px] text-center text-white leading-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]">{careTaker.experience}</p>
                <p className="font-['Poppins:Medium',sans-serif] text-[10px] text-center text-white/90 leading-tight">Experience</p>
              </div>
            </div>
            <div className="flex-1 bg-gradient-to-br from-[#74c4f7] to-[#5ab3e6] h-[54px] rounded-[12px] flex items-center justify-center px-[8px] shadow-[0px_4px_10px_0px_rgba(116,196,247,0.4)] border-2 border-white/20">
              <div className="flex flex-col items-center gap-[2px]">
                <p className="font-['Poppins:ExtraBold',sans-serif] text-[16px] text-center text-white leading-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]">4.5k</p>
                <p className="font-['Poppins:Medium',sans-serif] text-[10px] text-center text-white/90 leading-tight">Patients</p>
              </div>
            </div>
          </div>

          {/* Service Cost */}
          <div className="flex flex-col gap-[10px] relative shrink-0 w-full px-[0px] bg-gradient-to-br from-[#fff5f5] to-[#ffe8e8] rounded-[14px] p-[16px] shadow-[0px_4px_10px_0px_rgba(148,62,61,0.15)] border-2 border-[#ffdddd] mb-[12px]">
            <div className="flex items-center gap-[8px]">
              <div className="bg-white rounded-[10px] p-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]">
                <svg className="size-[20px]" fill="none" viewBox="0 0 24 24">
                  <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" fill="#943E3D" />
                </svg>
              </div>
              <p className="font-['Poppins:Bold',sans-serif] text-[15px] text-[#943E3D] leading-tight">Service Cost</p>
            </div>
            <div className="bg-white rounded-[10px] p-[12px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05)] flex flex-col gap-[6px]">
              <div className="flex items-center justify-between">
                <p className="font-['Poppins:Medium',sans-serif] text-[13px] text-[#555] leading-tight">Per Hour:</p>
                <div className="flex items-center gap-[4px]">
                  <svg className="size-[16px]" fill="none" viewBox="0 0 24 24">
                    <path d="M7 15h2c0 1.08 1.37 2 3 2s3-.92 3-2c0-1.1-1.04-1.5-3.24-2.03C9.64 12.44 7 11.78 7 9c0-1.79 1.47-3.31 3.5-3.82V3h3v2.18C15.53 5.69 17 7.21 17 9h-2c0-1.08-1.37-2-3-2s-3 .92-3 2c0 1.1 1.04 1.5 3.24 2.03C14.36 11.56 17 12.22 17 15c0 1.79-1.47 3.31-3.5 3.82V21h-3v-2.18C8.47 18.31 7 16.79 7 15z" fill="#943E3D" />
                  </svg>
                  <p className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-black leading-tight">350</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-['Poppins:Medium',sans-serif] text-[13px] text-[#555] leading-tight">Per Day:</p>
                <div className="flex items-center gap-[4px]">
                  <svg className="size-[16px]" fill="none" viewBox="0 0 24 24">
                    <path d="M7 15h2c0 1.08 1.37 2 3 2s3-.92 3-2c0-1.1-1.04-1.5-3.24-2.03C9.64 12.44 7 11.78 7 9c0-1.79 1.47-3.31 3.5-3.82V3h3v2.18C15.53 5.69 17 7.21 17 9h-2c0-1.08-1.37-2-3-2s-3 .92-3 2c0 1.1 1.04 1.5 3.24 2.03C14.36 11.56 17 12.22 17 15c0 1.79-1.47 3.31-3.5 3.82V21h-3v-2.18C8.47 18.31 7 16.79 7 15z" fill="#943E3D" />
                  </svg>
                  <p className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-black leading-tight">1800</p>
                </div>
              </div>
            </div>
          </div>

          {/* Assistance Section */}
          <div className="flex flex-col gap-[10px] relative shrink-0 w-full px-[0px] bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7] rounded-[14px] p-[16px] shadow-[0px_4px_10px_0px_rgba(16,185,129,0.15)] border-2 border-[#86efac] mb-[12px]">
            <div className="flex items-center gap-[8px]">
              <div className="bg-white rounded-[10px] p-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]">
                <svg className="size-[20px]" fill="none" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" fill="#10b981"/>
                </svg>
              </div>
              <p className="font-['Poppins:Bold',sans-serif] text-[15px] text-[#10b981] leading-tight">Assistance Provided</p>
            </div>
            
            <div className="bg-white rounded-[10px] p-[14px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05)] flex flex-col gap-[10px]">
              <div className="flex flex-col gap-[8px]">
                <div className="flex items-start gap-[8px]">
                  <div className="size-[5px] rounded-full bg-[#10b981] mt-[6px] shrink-0"></div>
                  <p className="font-['Poppins:Regular',sans-serif] text-[11px] text-[#555] leading-relaxed">Medical Attention</p>
                </div>
                
                <div className="flex items-start gap-[8px]">
                  <div className="size-[5px] rounded-full bg-[#10b981] mt-[6px] shrink-0"></div>
                  <p className="font-['Poppins:Regular',sans-serif] text-[11px] text-[#555] leading-relaxed">Cleaning & HouseKeeping Support</p>
                </div>
                
                <div className="flex items-start gap-[8px]">
                  <div className="size-[5px] rounded-full bg-[#10b981] mt-[6px] shrink-0"></div>
                  <p className="font-['Poppins:Regular',sans-serif] text-[11px] text-[#555] leading-relaxed">Feeding & meal Preparing</p>
                </div>
                
                <div className="flex items-start gap-[8px]">
                  <div className="size-[5px] rounded-full bg-[#10b981] mt-[6px] shrink-0"></div>
                  <p className="font-['Poppins:Regular',sans-serif] text-[11px] text-[#555] leading-relaxed">Grooming</p>
                </div>
                
                <div className="flex items-start gap-[8px]">
                  <div className="size-[5px] rounded-full bg-[#10b981] mt-[6px] shrink-0"></div>
                  <p className="font-['Poppins:Regular',sans-serif] text-[11px] text-[#555] leading-relaxed">Mobility Support</p>
                </div>
                
                <div className="flex items-start gap-[8px]">
                  <div className="size-[5px] rounded-full bg-[#10b981] mt-[6px] shrink-0"></div>
                  <p className="font-['Poppins:Regular',sans-serif] text-[11px] text-[#555] leading-relaxed">Companionship & emotional support</p>
                </div>
                
                <div className="flex items-start gap-[8px]">
                  <div className="size-[5px] rounded-full bg-[#10b981] mt-[6px] shrink-0"></div>
                  <p className="font-['Poppins:Regular',sans-serif] text-[11px] text-[#555] leading-relaxed">Assistance with medical appointments and Records keeping</p>
                </div>
              </div>
            </div>
          </div>

          {/* Book Now Button */}
          <button
            onClick={() => navigate(`/caretakers/${careTaker.id}/book`, { state: { careTaker } })}
            className="bg-[#1F75BE] h-[50px] min-w-[48px] relative rounded-[12px] shrink-0 w-full mx-[0px] mt-[6px] hover:bg-[#1a64a3] transition-all shadow-[0px_4px_12px_0px_rgba(31,117,190,0.4)] active:scale-[0.98] cursor-pointer"
          >
            <div className="content-stretch flex flex-col gap-[2px] h-[50px] items-center justify-center min-w-inherit overflow-clip relative rounded-[inherit] w-full">
              <div className="flex items-center justify-center">
                <p className="font-['Poppins:SemiBold',sans-serif] text-[15px] text-white leading-tight">Book Now</p>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavBar />
    </div>
  );
}
