import { useState } from "react";
import { useNavigate } from "react-router";
import { Search, ArrowLeft, AlertCircle } from "lucide-react";
import BottomNavBar from "../components/BottomNavBar";
import svgPaths from "./svg-sjqaz49g1f";
import imgImage from "figma:asset/2648f019cf8cfdd331c2b9472eb047ef873c8b34.png";
import imgImage1 from "figma:asset/871b43b026d3b6120421a14464f282f4c433995d.png";
import imgImage2 from "figma:asset/4f7a8fd890bcc4b24fd03b76009b7cb04a517cc8.png";
import imgImage3 from "figma:asset/4783a73d94faa65c498173443f9028b83c78b71c.png";
import imgImage4 from "figma:asset/bd167a953c90532827351a76dd731b7af44438f0.png";
import imgImage5 from "figma:asset/67078ac03fd606d32b59076f9899c60d63631bc0.png";

function ServiceCard({ 
  image, 
  title, 
  gridArea, 
  onClick, 
  isHighlighted 
}: { 
  image: string; 
  title: string; 
  gridArea: string; 
  onClick: () => void; 
  isHighlighted?: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative h-[165px] w-full cursor-pointer transition-all duration-300 hover:scale-105 rounded-[16px] overflow-hidden ${
        isHighlighted ? 'ring-4 ring-[#1F75BE] scale-105' : ''
      }`}
      style={{ gridArea }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <img alt="" className="absolute inset-0 w-full h-full object-cover" src={image} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent from-40% to-black/45 to-100%" />
      <div 
        className={`absolute bottom-[12px] left-0 right-0 text-center font-['Roboto:Medium',sans-serif] text-[14px] transition-colors duration-300 ${
          isHovered || isHighlighted ? 'text-[#1F75BE]' : 'text-white'
        }`}
      >
        {title}
      </div>
      {(isHovered || isHighlighted) && (
        <div className="absolute inset-0 rounded-[16px] border-2 border-[#1F75BE] pointer-events-none" />
      )}
    </div>
  );
}

export default function OtherServicesScreen() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const services = [
    { name: 'doctors', title: 'Doctors', image: imgImage, route: '/doctors' },
    { name: 'mental well-being', title: 'Mental Well-being', image: imgImage1, route: '/mental-wellbeing' },
    { name: 'medicines', title: 'Medicines', image: imgImage2, route: '/medicine' },
    { name: 'care taker', title: 'Care Taker', image: imgImage3, route: '/caretakers' },
    { name: 'physiotherapy', title: 'Physiotherapy', image: imgImage4, route: '/physiotherapists' },
    { name: 'ambulance', title: 'Ambulance', image: imgImage5, route: '/ambulance-booking' },
  ];

  return (
    <div className="bg-white h-screen w-screen overflow-hidden max-w-[393px] mx-auto flex flex-col">
      {/* Header Section */}
      <div className="px-[16px] pt-[20px] pb-[16px]">
        {/* Title with Back Button */}
        <div className="flex items-center justify-center mb-[20px] relative">
          <button 
            className="absolute left-0 flex items-center justify-center size-[40px] cursor-pointer hover:bg-[#1F75BE]/10 rounded-full transition-all active:scale-95 border border-gray-200 hover:border-[#1F75BE]"
            onClick={() => navigate("/home")}
          >
            <ArrowLeft className="size-[20px] text-[#1F75BE]" />
          </button>
          <div className="flex items-center gap-[8px]">
            <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#1F75BE"/>
            </svg>
            <p className="font-['Poppins:SemiBold',sans-serif] text-[20px] text-[#1F75BE]">Our Services</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="bg-white h-[40px] rounded-[20px] border border-black flex items-center px-[12px] gap-[8px]">
          <Search className="h-[18px] w-[18px] text-[#49454F]" />
          <input
            type="text"
            placeholder="Search services..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-[14px] font-['Roboto:Regular',sans-serif] text-[#121314] placeholder:text-[#49454F]"
          />
        </div>
      </div>

      {/* Emergency SOS Banner */}
      <div className="px-[16px] pb-[16px]">
        <button
          onClick={() => navigate("/emergency-sos")}
          className="w-full bg-gradient-to-r from-[#FF5252] to-[#E53935] rounded-[16px] p-[16px] shadow-xl hover:shadow-2xl transition-all active:scale-98 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
          
          <div className="relative flex items-center justify-center gap-[12px]">
            <div className="bg-white rounded-full p-[10px] animate-pulse">
              <AlertCircle className="size-[28px] text-[#FF5252]" />
            </div>
            <div className="text-left">
              <p className="font-['Poppins:Bold',sans-serif] text-[20px] text-white leading-none mb-[2px]">
                EMERGENCY SOS
              </p>
              <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-white/90">
                Instant ambulance • Tap for help
              </p>
            </div>
          </div>

          <div className="absolute inset-0 rounded-[16px] ring-2 ring-white/30 animate-ping"></div>
        </button>
      </div>

      {/* Services Grid */}
      <div className="flex-1 px-[16px] pb-[120px] overflow-y-auto">
        <div className="grid grid-cols-2 gap-[10px]">
          {services.map((service, index) => {
            const isHighlighted = searchTerm.length > 0 && service.name.toLowerCase().includes(searchTerm.toLowerCase());
            const gridArea = `${Math.floor(index / 2) + 1} / ${(index % 2) + 1}`;
            
            return (
              <ServiceCard
                key={index}
                image={service.image}
                title={service.title}
                gridArea={gridArea}
                onClick={() => service.route !== '#' && navigate(service.route)}
                isHighlighted={isHighlighted}
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
