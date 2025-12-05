import { useState } from "react";
import { useNavigate } from "react-router";
import BottomNavBar from "../components/BottomNavBar";
import svgPaths from "./svg-48yuse76hq";
import imgAvatars3DAvatar13 from "figma:asset/acdade26ec8c30dbfc71bfcd81a210fc9231eb9a.png";
import imgAvatars3DAvatar14 from "figma:asset/e194ee7dbf007daf2ccb230f9dc0d1d72b84f188.png";
import imgRectangle832 from "figma:asset/5f9c6a325c11227889f93af7a043cec9d0ea62ee.png";
import imgRectangle833 from "figma:asset/295766ef3bb06e9a0f321862fe859933be163c63.png";
import imgRectangle834 from "figma:asset/b20c9f23f43e6cf7991a6051ea2f10dfa4549932.png";
import imgDoctor1 from "figma:asset/7124e0cbe8bab3dc4113a933a56d5fd538ade894.png";
import imgDoctor2 from "figma:asset/11590f2cddf2f74d953a11a31144be63d01f5201.png";
import imgDoctor3 from "figma:asset/11818f93ca3f4cc39a460a97a6f40eb5c2c26ce7.png";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

function Component3DAvatars1() {
  return (
    <div className="relative shrink-0 size-[40px]">
      <div className="absolute inset-0 pointer-events-none rounded-[50px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[50px] size-full" src={imgAvatars3DAvatar13} />
        <div aria-hidden="true" className="absolute border border-[#252222] border-solid inset-0 rounded-[50px]" />
      </div>
    </div>
  );
}

function Component3DAvatars() {
  return (
    <div className="relative shrink-0 size-[40px]">
      <div className="absolute inset-0 pointer-events-none rounded-[50px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[50px] size-full" src={imgAvatars3DAvatar14} />
        <div aria-hidden="true" className="absolute border border-[#252222] border-solid inset-0 rounded-[50px]" />
      </div>
    </div>
  );
}

function DoctorCard({ 
  name, 
  specialty, 
  experience, 
  patients, 
  bgColor, 
  image,
  isHighlighted,
  onClick,
  isUnsplash 
}: { 
  name: string; 
  specialty: string; 
  experience: string; 
  patients: string; 
  bgColor: string; 
  image: string;
  isHighlighted?: boolean;
  onClick?: () => void;
  isUnsplash?: boolean;
}) {
  const isWhiteBg = bgColor === 'bg-[#9CC6DB]';
  
  return (
    <div 
      onClick={onClick}
      className={`content-stretch flex h-[140px] items-end overflow-clip relative rounded-[12px] shrink-0 w-full shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)] transition-all duration-300 cursor-pointer hover:scale-[1.05] hover:shadow-[0px_8px_24px_0px_rgba(31,117,190,0.3)] ${
      isHighlighted ? 'ring-4 ring-white scale-[1.02]' : ''
    }`}>
      <div className={`basis-0 ${bgColor} grow h-[140px] min-h-px min-w-px relative shrink-0`}>
        <div className="size-full">
          <div className="box-border content-stretch flex flex-col gap-[16px] h-[140px] items-start p-[16px] relative w-full">
            <div className="content-stretch flex flex-col gap-[6px] items-start leading-[normal] not-italic relative shrink-0 w-full">
              <p className={`font-['Poppins:ExtraBold',sans-serif] relative shrink-0 text-[16px] w-full ${isWhiteBg ? 'text-black' : 'text-white'}`}>{name}</p>
              <p className={`font-['Poppins:Regular',sans-serif] relative shrink-0 text-[12px] w-full ${isWhiteBg ? 'text-[rgba(0,0,0,0.7)]' : 'text-[rgba(255,255,255,0.7)]'}`}>{specialty}</p>
            </div>
            <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
              <div className={`basis-0 content-stretch flex flex-col gap-[4px] grow items-start leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[12px] ${isWhiteBg ? 'text-black' : 'text-white'}`}>
                <div className="flex items-center gap-[4px]">
                  <svg className="size-[14px]" fill="none" viewBox="0 0 24 24">
                    <path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4h4v2h-4V4zm10 16H4V8h16v12z" fill={isWhiteBg ? 'black' : 'white'} opacity="0.8"/>
                  </svg>
                  <p className="font-['Poppins:ExtraBold',sans-serif] relative shrink-0">Experience</p>
                </div>
                <p className="font-['Poppins:Medium',sans-serif] relative shrink-0 w-full">{experience}</p>
              </div>
              <div className={`basis-0 content-stretch flex flex-col gap-[4px] grow items-start leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[12px] ${isWhiteBg ? 'text-black' : 'text-white'}`}>
                <div className="flex items-center gap-[4px]">
                  <svg className="size-[14px]" fill="none" viewBox="0 0 24 24">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" fill={isWhiteBg ? 'black' : 'white'} opacity="0.8"/>
                  </svg>
                  <p className="font-['Poppins:ExtraBold',sans-serif] relative shrink-0">Patients</p>
                </div>
                <p className="font-['Poppins:Medium',sans-serif] relative shrink-0 w-full">{patients}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[140px] relative shrink-0 w-[120px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-white inset-0" />
          {isUnsplash ? (
            <ImageWithFallback alt="" className="absolute object-cover size-full" style={{ objectPosition: '50% 20%' }} src={image} />
          ) : (
            <img alt="" className="absolute object-cover size-full" style={{ objectPosition: '50% 20%' }} src={image} />
          )}
        </div>
      </div>
      <div className="absolute bg-gradient-to-b from-[52.404%] from-[rgba(0,0,0,0)] h-[140px] left-0 overflow-clip rounded-[12px] to-[rgba(0,0,0,0.4)] top-0 w-full pointer-events-none" />
    </div>
  );
}

function IcRoundHome() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="ic:round-home">
          <path d={svgPaths.p22846f80} fill="var(--fill-0, #747474)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function GrommetIconsServices() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_3_4740)" id="grommet-icons:services">
          <path d={svgPaths.p599f500} id="Vector" stroke="var(--stroke-0, #1F75BE)" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_3_4740">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function MaterialSymbolsPackageOutlineSharp() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="material-symbols:package-outline-sharp">
          <path d={svgPaths.p3781a680} fill="var(--fill-0, #747474)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function GgProfile() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]">
      <div className="absolute inset-[4.17%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
          <g id="Group">
            <path clipRule="evenodd" d={svgPaths.p313dc900} fill="var(--fill-0, #747474)" fillRule="evenodd" id="Vector" />
            <path clipRule="evenodd" d={svgPaths.p819fa00} fill="var(--fill-0, #747474)" fillRule="evenodd" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function DoctorsScreen() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  // Doctor cards with alternating colors: #234C6A (dark teal) and #9CC6DB (light blue)
  const doctors = [
    {
      name: "Dr. Mary Lawson",
      specialty: "General Specialist",
      experience: "5 Years",
      patients: "503K",
      bgColor: "bg-[#234C6A]",
      image: imgRectangle832,
      isUnsplash: false
    },
    {
      name: "Dr. John Harry",
      specialty: "Cardiologist Specialist",
      experience: "3 Years",
      patients: "2.5K",
      bgColor: "bg-[#9CC6DB]",
      image: imgRectangle833,
      isUnsplash: false
    },
    {
      name: "Dr. Eddy Munson",
      specialty: "Neurologist Specialist",
      experience: "13 Years",
      patients: "350K",
      bgColor: "bg-[#234C6A]",
      image: imgRectangle834,
      isUnsplash: false
    },
    {
      name: "Dr. Priya Sharma",
      specialty: "Pediatrician Specialist",
      experience: "8 Years",
      patients: "425K",
      bgColor: "bg-[#9CC6DB]",
      image: imgDoctor1,
      isUnsplash: false
    },
    {
      name: "Dr. Arjun Patel",
      specialty: "Orthopedic Specialist",
      experience: "12 Years",
      patients: "560K",
      bgColor: "bg-[#234C6A]",
      image: imgDoctor2,
      isUnsplash: false
    },
    {
      name: "Dr. Rajesh Kumar",
      specialty: "ENT Specialist",
      experience: "18 Years",
      patients: "720K",
      bgColor: "bg-[#9CC6DB]",
      image: imgDoctor3,
      isUnsplash: false
    }
  ];

  const filteredDoctors = doctors.filter(doctor => 
    doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white relative w-full h-screen max-w-[393px] mx-auto flex flex-col">
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
            <path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" fill="#1F75BE"/>
          </svg>
          <h1 className="font-['Poppins:SemiBold',sans-serif] text-[20px] text-[#1F75BE]">
            Doctors
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
            className="w-full h-[44px] bg-white rounded-[22px] px-[20px] pr-[48px] font-['Roboto:SemiBold',sans-serif] text-[14px] text-[#121314] placeholder:text-[#121314] border border-black focus:outline-none focus:ring-2 focus:ring-[#1F75BE]"
          />
          <div className="absolute right-[12px] top-1/2 -translate-y-1/2">
            <svg className="size-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <path d={svgPaths.pc423380} fill="#121314" />
            </svg>
          </div>
        </div>
      </div>

      {/* Doctors List - Scrollable */}
      <div className="flex-1 overflow-y-auto px-[16px] pb-[120px]">
        <div className="flex flex-col gap-[20px]">
          {filteredDoctors.map((doctor, index) => {
            const doctorSlug = doctor.name.toLowerCase().replace('dr. ', 'dr-').replace(/ /g, '-');
            return (
              <DoctorCard 
                key={index} 
                {...doctor} 
                isHighlighted={searchQuery.length > 0 && (
                  doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase())
                )}
                onClick={() => navigate(`/doctor/${doctorSlug}`)}
              />
            );
          })}
        </div>
      </div>
      
      {/* Bottom Navigation */}
      <BottomNavBar />
    </div>
  );
}
