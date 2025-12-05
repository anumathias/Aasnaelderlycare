import { useNavigate } from "react-router";
import imgRectangle918 from "figma:asset/b639b4fda9d5edab2e20cf981666a623554ee009.png";
import BottomNavBar from "./BottomNavBar";
import { ArrowLeft } from "lucide-react";

export default function MentalWellBeingScreen() {
  const navigate = useNavigate();

  return (
    <div className="bg-white h-screen w-screen overflow-y-auto overflow-x-hidden max-w-[393px] mx-auto">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white px-[20px] pt-[20px] pb-[16px] border-b border-gray-100">
        <div className="flex items-center gap-[16px] mb-[12px]">
          <button
            onClick={() => navigate("/services")}
            className="p-[8px] rounded-[12px] bg-white hover:bg-gray-50 active:scale-95 transition-all duration-200 border-2 border-gray-200"
          >
            <ArrowLeft className="size-[24px] text-[#1F75BE]" />
          </button>
          <h1 className="font-['Poppins:SemiBold',sans-serif] text-[20px] text-[#1F75BE]">
            Mental Well-Being
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="px-[20px] pt-[20px] pb-[140px]">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-[#e3f2fd] to-[#bbdefb] rounded-[16px] p-[16px] mb-[20px]">
          <h2 className="font-['Poppins:SemiBold',sans-serif] text-[20px] text-[#121314] mb-[8px]">
            Mental Well-Being
          </h2>
          <p className="font-['Poppins:Regular',sans-serif] text-[13px] text-[#555] mb-[12px]">
            Supporting emotional and social health for a Happier, Calmer life.
          </p>
          <div className="h-[180px] rounded-[12px] overflow-hidden shadow-[0px_4px_10px_0px_rgba(0,0,0,0.1)]">
            <img alt="Mental wellness" className="object-cover size-full" src={imgRectangle918} />
          </div>
        </div>

        {/* Action Buttons - CLEARLY VISIBLE */}
        <div className="flex gap-[12px] mb-[20px]">
          <button 
            onClick={() => navigate("/mental-wellbeing/article")}
            className="flex-1 bg-[#1F75BE] h-[56px] rounded-[12px] flex items-center justify-center gap-[8px] hover:bg-[#1a64a3] transition-all shadow-[0px_4px_10px_0px_rgba(31,117,190,0.3)] active:scale-[0.98] cursor-pointer"
          >
            <svg className="size-[20px]" fill="none" viewBox="0 0 24 24">
              <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" fill="white" />
            </svg>
            <span className="font-['Poppins:Medium',sans-serif] text-[14px] text-white">Learn More</span>
          </button>
          <button 
            onClick={() => navigate("/mental-wellbeing-doctors")}
            className="flex-1 bg-white h-[56px] rounded-[12px] flex items-center justify-center gap-[8px] hover:bg-gray-50 transition-all shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)] active:scale-[0.98] cursor-pointer border-2 border-[#1F75BE]"
          >
            <svg className="size-[20px]" fill="none" viewBox="0 0 24 24">
              <path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z" fill="#1F75BE" />
            </svg>
            <span className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#1F75BE]">Talk to Specialist</span>
          </button>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-2 gap-[12px] mb-[20px]">
          {/* What is Mental Well-Being Card */}
          <div className="bg-white rounded-[16px] p-[16px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col items-center gap-[12px]">
            <div className="size-[60px] rounded-full bg-gradient-to-br from-[#E348E8] to-[#c738d0] flex items-center justify-center shadow-[0px_4px_8px_0px_rgba(227,72,232,0.3)]">
              <svg className="size-[32px]" fill="none" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.52 0 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="white"/>
              </svg>
            </div>
            <div className="flex flex-col items-center gap-[4px]">
              <p className="font-['Poppins:Medium',sans-serif] text-[13px] text-[#121314] text-center leading-tight">What is Mental Well-Being</p>
              <button 
                onClick={() => navigate("/mental-wellbeing/article")}
                className="font-['Poppins:Medium',sans-serif] text-[12px] text-[#1F75BE] text-center leading-tight cursor-pointer hover:underline transition-all"
              >
                Read More
              </button>
            </div>
          </div>

          {/* Benefits Card */}
          <div className="bg-white rounded-[16px] p-[16px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col gap-[12px]">
            <div className="size-[60px] rounded-full bg-gradient-to-br from-[#ef4444] to-[#dc2626] flex items-center justify-center shadow-[0px_4px_8px_0px_rgba(239,68,68,0.3)] mx-auto">
              <svg className="size-[32px]" fill="none" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="white"/>
              </svg>
            </div>
            <div className="flex flex-col gap-[4px]">
              <div className="flex items-center gap-[6px]">
                <div className="size-[5px] rounded-full bg-[#10b981] shrink-0"></div>
                <p className="font-['Poppins:Regular',sans-serif] text-[11px] text-[#555] leading-tight">Reduces Stress</p>
              </div>
              <div className="flex items-center gap-[6px]">
                <div className="size-[5px] rounded-full bg-[#10b981] shrink-0"></div>
                <p className="font-['Poppins:Regular',sans-serif] text-[11px] text-[#555] leading-tight">Boosts Energy</p>
              </div>
              <div className="flex items-center gap-[6px]">
                <div className="size-[5px] rounded-full bg-[#10b981] shrink-0"></div>
                <p className="font-['Poppins:Regular',sans-serif] text-[11px] text-[#555] leading-tight">Improves Sleep</p>
              </div>
            </div>
          </div>
        </div>

        {/* Inspirational Quote */}
        <div className="bg-gradient-to-br from-[#fff5e6] to-[#ffe8cc] rounded-[16px] p-[16px] shadow-[0px_4px_10px_0px_rgba(219,126,19,0.15)] border-2 border-[#ffd9a3] mb-[16px]">
          <div className="flex items-start gap-[12px]">
            <div className="bg-white rounded-[10px] p-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0">
              <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="#DB7E13" />
              </svg>
            </div>
            <p className="font-['Poppins:SemiBold',sans-serif] text-[13px] text-[#121314] leading-relaxed">
              Happiness is not out of reach - it begins with taking care of your mind
            </p>
          </div>
        </div>

        {/* Why Mental Health Matters */}
        <div className="bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7] rounded-[16px] p-[16px] shadow-[0px_4px_10px_0px_rgba(16,185,129,0.15)] border-2 border-[#86efac] mb-[16px]">
          <div className="flex items-center gap-[8px] mb-[12px]">
            <div className="bg-white rounded-[10px] p-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]">
              <svg className="size-[20px]" fill="none" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="#10b981"/>
              </svg>
            </div>
            <p className="font-['Poppins:Bold',sans-serif] text-[15px] text-[#10b981]">Why Mental Health Matters</p>
          </div>
          
          <div className="bg-white rounded-[10px] p-[14px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05)] flex flex-col gap-[10px]">
            <div className="flex items-start gap-[8px]">
              <div className="size-[6px] rounded-full bg-[#10b981] mt-[6px] shrink-0"></div>
              <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#555] leading-relaxed">
                Mental health affects how we think, feel, and act in our daily lives
              </p>
            </div>
            <div className="flex items-start gap-[8px]">
              <div className="size-[6px] rounded-full bg-[#10b981] mt-[6px] shrink-0"></div>
              <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#555] leading-relaxed">
                It influences our relationships, work performance, and overall quality of life
              </p>
            </div>
            <div className="flex items-start gap-[8px]">
              <div className="size-[6px] rounded-full bg-[#10b981] mt-[6px] shrink-0"></div>
              <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#555] leading-relaxed">
                Taking care of your mental health is just as important as physical health
              </p>
            </div>
          </div>
        </div>

        {/* Daily Self-Care Tips */}
        <div className="bg-gradient-to-br from-[#faf5ff] to-[#f3e8ff] rounded-[16px] p-[16px] shadow-[0px_4px_10px_0px_rgba(168,85,247,0.15)] border-2 border-[#e9d5ff] mb-[20px]">
          <div className="flex items-center gap-[8px] mb-[12px]">
            <div className="bg-white rounded-[10px] p-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]">
              <svg className="size-[20px]" fill="none" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#a855f7"/>
              </svg>
            </div>
            <p className="font-['Poppins:Bold',sans-serif] text-[15px] text-[#a855f7]">Daily Self-Care Tips</p>
          </div>
          
          <div className="bg-white rounded-[10px] p-[14px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05)] flex flex-col gap-[10px]">
            <div className="flex items-start gap-[8px]">
              <div className="size-[6px] rounded-full bg-[#a855f7] mt-[6px] shrink-0"></div>
              <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#555] leading-relaxed">
                Practice mindfulness and meditation for 10 minutes daily
              </p>
            </div>
            <div className="flex items-start gap-[8px]">
              <div className="size-[6px] rounded-full bg-[#a855f7] mt-[6px] shrink-0"></div>
              <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#555] leading-relaxed">
                Stay connected with friends and family for emotional support
              </p>
            </div>
            <div className="flex items-start gap-[8px]">
              <div className="size-[6px] rounded-full bg-[#a855f7] mt-[6px] shrink-0"></div>
              <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#555] leading-relaxed">
                Maintain a regular sleep schedule and exercise routine
              </p>
            </div>
            <div className="flex items-start gap-[8px]">
              <div className="size-[6px] rounded-full bg-[#a855f7] mt-[6px] shrink-0"></div>
              <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#555] leading-relaxed">
                Don't hesitate to seek professional help when needed
              </p>
            </div>
          </div>
        </div>

        {/* LARGE BOTTOM CONTACT BUTTON - CLEARLY VISIBLE */}
        <button 
          onClick={() => navigate("/mental-wellbeing-doctors")}
          className="bg-[#1F75BE] h-[56px] w-full rounded-[12px] hover:bg-[#1a64a3] transition-all shadow-[0px_4px_12px_0px_rgba(31,117,190,0.4)] active:scale-[0.98] cursor-pointer mb-[20px]"
        >
          <div className="flex items-center justify-center size-full gap-[10px]">
            <svg className="size-[22px]" fill="none" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="white" />
            </svg>
            <span className="font-['Poppins:SemiBold',sans-serif] text-[15px] text-white">Contact Mental Health Specialist</span>
          </div>
        </button>
      </div>

      {/* Bottom Navigation */}
      <BottomNavBar />
    </div>
  );
}
