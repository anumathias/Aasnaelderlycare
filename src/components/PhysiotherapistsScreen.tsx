import { useState } from "react";
import { useNavigate } from "react-router";
import BottomNavBar from "./BottomNavBar";
import imgRectangle832 from "figma:asset/ef411a413d8878139bc7f75026dd69adc906588a.png";
import imgRectangle833 from "figma:asset/c13bd01a5239149334042672a2c72197ce1cef4c.png";
import imgRectangle834 from "figma:asset/464dde646b6cd3f72b36181e282992ed3526f91c.png";
import imgPhysio4 from "figma:asset/18a7c195262485b6a58bc09dfc49a1a49f32f13b.png";
import imgPhysio5 from "figma:asset/c7faa7cba2f609b69f761c5e10d7cc7f6125f6ab.png";

function PhysiotherapistCard({ 
  name, 
  experience, 
  patients,
  bgColor,
  textColor,
  image,
  isHighlighted,
  onClick
}: { 
  name: string; 
  experience: string; 
  patients: string;
  bgColor: string;
  textColor: string;
  image: string;
  isHighlighted?: boolean;
  onClick?: () => void;
}) {
  const isLightBg = textColor === 'text-black';
  
  return (
    <div 
      onClick={onClick}
      className={`content-stretch flex h-[140px] items-end overflow-clip relative rounded-[12px] shrink-0 w-full shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)] transition-all duration-300 cursor-pointer hover:scale-[1.05] hover:shadow-[0px_8px_24px_0px_rgba(31,117,190,0.3)] ${
        isHighlighted ? 'ring-4 ring-white scale-[1.02]' : ''
      }`}>
      {/* Content Section */}
      <div className={`basis-0 ${bgColor} grow h-[140px] min-h-px min-w-px relative shrink-0 ${isLightBg ? 'border-r-2 border-blue-200' : ''}`}>
        <div className="box-border content-stretch flex flex-col gap-[16px] h-[140px] items-start p-[16px] relative w-full">
          {/* Name and Title */}
          <div className={`content-stretch flex flex-col gap-[6px] items-start leading-[normal] not-italic relative shrink-0 w-full ${textColor}`}>
            <p className="font-['Poppins:ExtraBold',sans-serif] relative shrink-0 text-[16px] w-full">{name}</p>
            <p className={`font-['Poppins:Regular',sans-serif] relative shrink-0 text-[12px] w-full opacity-70`}>Physiotherapist</p>
          </div>
          
          {/* Stats */}
          <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
            <div className={`basis-0 content-stretch flex flex-col gap-[4px] grow items-start leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[12px] ${textColor}`}>
              <div className="flex items-center gap-[4px]">
                <svg className="size-[14px]" fill="none" viewBox="0 0 24 24">
                  <path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4h4v2h-4V4zm10 16H4V8h16v12z" fill={isLightBg ? 'black' : 'white'} opacity="0.8"/>
                </svg>
                <p className="font-['Poppins:ExtraBold',sans-serif] relative shrink-0">Experience</p>
              </div>
              <p className="font-['Poppins:Medium',sans-serif] relative shrink-0 w-full">{experience}</p>
            </div>
            <div className={`basis-0 content-stretch flex flex-col gap-[4px] grow items-start leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[12px] ${textColor}`}>
              <div className="flex items-center gap-[4px]">
                <svg className="size-[14px]" fill="none" viewBox="0 0 24 24">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" fill={isLightBg ? 'black' : 'white'} opacity="0.8"/>
                </svg>
                <p className="font-['Poppins:ExtraBold',sans-serif] relative shrink-0">Patients</p>
              </div>
              <p className="font-['Poppins:Medium',sans-serif] relative shrink-0 w-full">{patients}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="h-[140px] relative shrink-0 w-[120px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-white inset-0" />
          <img alt="" className="absolute object-cover size-full" style={{ objectPosition: '50% 20%' }} src={image} />
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bg-gradient-to-b from-[52.404%] from-[rgba(0,0,0,0)] h-[140px] left-0 overflow-clip rounded-[12px] to-[rgba(0,0,0,0.4)] top-0 w-full pointer-events-none" />
    </div>
  );
}

export default function PhysiotherapistsScreen() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const physiotherapists = [
    {
      name: "Dr. Martin Son",
      experience: "5 Years",
      patients: "500K",
      bgColor: "bg-[#E3F2FD]",
      textColor: "text-black",
      image: imgRectangle832
    },
    {
      name: "Dr. James Roy",
      experience: "3 Years",
      patients: "1.5K",
      bgColor: "bg-[#90CAF9]",
      textColor: "text-black",
      image: imgRectangle833
    },
    {
      name: "Dr. Matthew Christopher",
      experience: "2 Years",
      patients: "1.2K",
      bgColor: "bg-[#E3F2FD]",
      textColor: "text-black",
      image: imgRectangle834
    },
    {
      name: "Dr. Arun Kumar",
      experience: "7 Years",
      patients: "350K",
      bgColor: "bg-[#90CAF9]",
      textColor: "text-black",
      image: imgPhysio4
    },
    {
      name: "Dr. Vikram Singh",
      experience: "4 Years",
      patients: "180K",
      bgColor: "bg-[#E3F2FD]",
      textColor: "text-black",
      image: imgPhysio5
    }
  ];

  const filteredPhysiotherapists = physiotherapists.filter(physio =>
    physio.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen w-full max-w-[393px] mx-auto">
      {/* Back Button and Title */}
      <div className="px-[16px] py-[8px] pb-[16px] flex items-center justify-center relative">
        <button 
          onClick={() => navigate("/services")}
          className="absolute left-[16px] flex items-center justify-center size-[40px] rounded-full hover:bg-[#1F75BE]/10 transition-all active:scale-95 border border-gray-200 hover:border-[#1F75BE]"
        >
          <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="#1F75BE" />
          </svg>
        </button>
        <div className="flex items-center gap-[8px]">
          <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#1F75BE"/>
          </svg>
          <h1 className="font-['Poppins:SemiBold',sans-serif] text-[20px] text-[#1F75BE]">
            Physiotherapist
          </h1>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-[16px] pb-[16px]">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-[36px] px-[16px] pr-[48px] rounded-[28px] bg-white border border-black font-['Roboto:SemiBold',sans-serif] text-[16px] text-[#121314] placeholder:text-[#121314] focus:outline-none focus:ring-2 focus:ring-[#1F75BE]"
          />
          <svg 
            className="absolute right-[12px] top-[6px] size-[24px]" 
            fill="none" 
            viewBox="0 0 24 24"
          >
            <path d="M19.6 21L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16C7.68333 16 6.14583 15.3708 4.8875 14.1125C3.62917 12.8542 3 11.3167 3 9.5C3 7.68333 3.62917 6.14583 4.8875 4.8875C6.14583 3.62917 7.68333 3 9.5 3C11.3167 3 12.8542 3.62917 14.1125 4.8875C15.3708 6.14583 16 7.68333 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L21 19.6L19.6 21ZM9.5 14C10.75 14 11.8125 13.5625 12.6875 12.6875C13.5625 11.8125 14 10.75 14 9.5C14 8.25 13.5625 7.1875 12.6875 6.3125C11.8125 5.4375 10.75 5 9.5 5C8.25 5 7.1875 5.4375 6.3125 6.3125C5.4375 7.1875 5 8.25 5 9.5C5 10.75 5.4375 11.8125 6.3125 12.6875C7.1875 13.5625 8.25 14 9.5 14Z" fill="#121314" />
          </svg>
        </div>
      </div>

      {/* Physiotherapists List */}
      <div className="px-[16px] pb-[120px] flex flex-col gap-[20px]">
        {filteredPhysiotherapists.map((physio, index) => {
          const slugName = physio.name.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '');
          return (
            <PhysiotherapistCard
              key={index}
              name={physio.name}
              experience={physio.experience}
              patients={physio.patients}
              bgColor={physio.bgColor}
              textColor={physio.textColor}
              image={physio.image}
              isHighlighted={searchQuery.length > 0}
              onClick={() => navigate(`/physiotherapist/${slugName}`)}
            />
          );
        })}
      </div>

      {/* Bottom Navigation */}
      <BottomNavBar />
    </div>
  );
}
