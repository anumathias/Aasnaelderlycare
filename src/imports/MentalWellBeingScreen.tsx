import { useNavigate } from 'react-router';
import { ArrowLeft, BookOpen, Heart, AlertCircle } from 'lucide-react';
import { BottomNavBar } from '../components/BottomNavBar';
import imgRectangle918 from "figma:asset/b639b4fda9d5edab2e20cf981666a623554ee009.png";

export default function MentalWellBeingScreen() {
  const navigate = useNavigate();

  return (
    <div className="bg-white h-screen w-screen overflow-y-auto overflow-x-hidden max-w-[393px] mx-auto flex flex-col">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-gradient-to-b from-[#5B97F9]/40 to-transparent px-[20px] pt-[20px] pb-[16px]">
        <div className="flex items-center gap-[16px] mb-[16px]">
          <button
            onClick={() => navigate(-1)}
            className="p-[8px] rounded-[12px] bg-white hover:bg-gray-50 active:scale-95 transition-all duration-200 border-2 border-gray-200"
          >
            <ArrowLeft className="size-[24px] text-[#1F75BE]" />
          </button>
          <h1 className="font-['Poppins:SemiBold',sans-serif] text-[24px] text-[#121314]">
            Aasna
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-[20px] pb-[100px]">
        {/* Hero Section */}
        <div className="bg-[#CDE8FF] rounded-[16px] p-[16px] mb-[24px]">
          <h2 className="font-['Poppins:Regular',sans-serif] text-[24px] text-[#121314] mb-[8px]">
            Mental Well-Being
          </h2>
          <p className="font-['Poppins:Light',sans-serif] text-[16px] text-[#747474] mb-[16px]">
            Supporting emotional and social health for a Happier, Calmer life.
          </p>
          <div className="h-[180px] rounded-[12px] overflow-hidden mb-[16px]">
            <img 
              src={imgRectangle918} 
              alt="Mental wellbeing" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-[12px] mb-[24px]">
          <button className="flex-1 bg-[#48A2E8] text-white rounded-[12px] py-[16px] px-[12px] flex items-center justify-center gap-[8px] hover:bg-[#3B8ACF] active:scale-[0.98] transition-all">
            <BookOpen className="size-[18px]" />
            <span className="font-['Poppins:Medium',sans-serif] text-[14px]">
              Learn More
            </span>
          </button>
          <button 
            onClick={() => navigate('/doctors')}
            className="flex-1 bg-white border-2 border-[#1F75BE] text-[#1F75BE] rounded-[12px] py-[16px] px-[12px] flex items-center justify-center gap-[8px] hover:bg-[#E3F2FD] active:scale-[0.98] transition-all"
          >
            <Heart className="size-[18px]" />
            <span className="font-['Poppins:Medium',sans-serif] text-[14px]">
              Contact Doctors
            </span>
          </button>
        </div>

        {/* Info Cards */}
        <div className="space-y-[16px] mb-[24px]">
          {/* What is Mental Well-Being Card */}
          <div className="bg-white border border-gray-200 rounded-[16px] p-[20px] text-center">
            <div className="size-[60px] mx-auto mb-[12px] bg-[#E348E8] rounded-full flex items-center justify-center">
              <Heart className="size-[32px] text-white" />
            </div>
            <h3 className="font-['Poppins:Medium',sans-serif] text-[16px] text-[#121314] mb-[8px]">
              What is mental Well-Being
            </h3>
            <p className="font-['Poppins:Regular',sans-serif] text-[14px] text-[#215C8F] cursor-pointer hover:underline">
              Read More
            </p>
          </div>

          {/* Benefits Card */}
          <div className="bg-white border border-gray-200 rounded-[16px] p-[20px]">
            <div className="size-[50px] mb-[12px] flex items-center justify-center">
              <div className="size-[50px] bg-black rounded-full flex items-center justify-center relative">
                <Heart className="size-[24px] text-white" />
                <div className="absolute top-0 right-0 size-[16px] bg-[#FF2121] rounded-full"></div>
              </div>
            </div>
            <h3 className="font-['Poppins:Medium',sans-serif] text-[16px] text-[#121314] mb-[12px]">
              Benefits
            </h3>
            <ul className="space-y-[8px]">
              <li className="flex items-center gap-[8px] font-['Poppins:Regular',sans-serif] text-[14px] text-[#121314]">
                <span className="size-[6px] bg-[#121314] rounded-full"></span>
                Reduces Stress
              </li>
              <li className="flex items-center gap-[8px] font-['Poppins:Regular',sans-serif] text-[14px] text-[#121314]">
                <span className="size-[6px] bg-[#121314] rounded-full"></span>
                Boosts Energy
              </li>
              <li className="flex items-center gap-[8px] font-['Poppins:Regular',sans-serif] text-[14px] text-[#121314]">
                <span className="size-[6px] bg-[#121314] rounded-full"></span>
                Improves Sleep
              </li>
            </ul>
          </div>

          {/* Quote Card */}
          <div className="bg-[#CDE8FF] rounded-[16px] p-[16px] flex gap-[12px] items-start">
            <AlertCircle className="size-[28px] text-[#DB7E13] shrink-0 mt-[4px]" />
            <p className="font-['Roboto:SemiBold',sans-serif] text-[14px] text-black leading-[20px]">
              Happiness is not out of reach—it begins with taking care of your mind
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavBar />
    </div>
  );
}
