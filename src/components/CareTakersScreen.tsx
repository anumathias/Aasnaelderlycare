import { useState } from "react";
import { useNavigate } from "react-router";
import BottomNavBar from "./BottomNavBar";
import imgAvatars3DAvatar13 from "figma:asset/acdade26ec8c30dbfc71bfcd81a210fc9231eb9a.png";
import imgAvatars3DAvatar14 from "figma:asset/e194ee7dbf007daf2ccb230f9dc0d1d72b84f188.png";
import imgSammyWilliam from "figma:asset/2a36d5ef6ed1d0bf123faaf67e6266f0c2621988.png";
import imgEllipse1124 from "figma:asset/948409b8a2abfc748ac7ce5750406ef1f27a584b.png";
import imgJerushaJasmine from "figma:asset/6f72b77682deb08b388eb5c4be70924e2ba6844a.png";
import imgEllipse1126 from "figma:asset/2f3c01d562442d9a29359403977f13ff6b1701d5.png";
import imgCareTaker1 from "figma:asset/b5eac9a1dfe93f65983f8a2083f649995ee9deef.png";
import imgCareTaker3 from "figma:asset/633a9c20b6117fca66665179bb0cea98ecdae80d.png";

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

function CareTakerCard({ 
  name, 
  experience, 
  rating,
  bgColor, 
  image,
  isHighlighted,
  onClick,
  imagePosition = "object-center"
}: { 
  name: string; 
  experience: string; 
  rating: number;
  bgColor: string; 
  image: string;
  isHighlighted?: boolean;
  onClick?: () => void;
  imagePosition?: string;
}) {
  return (
    <div 
      onClick={onClick}
      className={`content-stretch flex h-[140px] items-center overflow-clip relative rounded-[16px] shrink-0 w-full shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)] transition-all duration-300 cursor-pointer hover:scale-[1.05] hover:shadow-[0px_8px_24px_0px_rgba(31,117,190,0.3)] ${
      isHighlighted ? 'ring-4 ring-white scale-[1.02]' : ''
    } ${bgColor}`}>
      {/* Image Section */}
      <div className="flex items-center justify-center shrink-0 w-[140px] h-[140px] p-[10px]">
        <div className="relative shrink-0 size-[120px] overflow-hidden rounded-full">
          <img alt="" className={`block max-w-none size-full object-cover ${imagePosition}`} src={image} />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col justify-center px-[16px] py-[12px] gap-[8px]">
        <p className="font-['Poppins:SemiBold',sans-serif] text-[20px] text-black leading-[1.2]">{name}</p>
        <p className="font-['Poppins:Regular',sans-serif] text-[14px] text-[#1c1a1a] leading-[1.2]">Experience: {experience}</p>
        
        {/* Rating */}
        <div className="flex items-center gap-[4px]">
          <span className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#1c1a1a]">Rating:</span>
          <div className="flex gap-[4px]">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="size-[16px]" fill="none" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill={i < rating ? '#FFB60B' : '#E0E0E0'} />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CareTakersScreen() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const careTakers = [
    {
      id: "sammy-william",
      name: "Sammy William",
      experience: "4.5 yrs",
      rating: 5,
      bgColor: "bg-[#AAC4F5]",
      image: imgSammyWilliam,
      imagePosition: "object-center",
      specialty: "Elder Care Specialist",
      fullTimeCost: "800",
      partTimeCost: "400"
    },
    {
      id: "suzan-pearl",
      name: "Suzan Pearl",
      experience: "2 yrs",
      rating: 5,
      bgColor: "bg-[#8CA9FF]",
      image: imgEllipse1124,
      imagePosition: "object-center",
      specialty: "Home Care Provider",
      fullTimeCost: "700",
      partTimeCost: "350"
    },
    {
      id: "jerusha-jasmine",
      name: "Jerusha Jasmine",
      experience: "3 yrs",
      rating: 5,
      bgColor: "bg-[#AAC4F5]",
      image: imgJerushaJasmine,
      imagePosition: "object-center",
      specialty: "Patient Care Assistant",
      fullTimeCost: "750",
      partTimeCost: "375"
    },
    {
      id: "jammy-martin",
      name: "Jammy Martin",
      experience: "5 yrs",
      rating: 5,
      bgColor: "bg-[#8CA9FF]",
      image: imgEllipse1126,
      imagePosition: "object-center",
      specialty: "Senior Care Specialist",
      fullTimeCost: "850",
      partTimeCost: "425"
    },
    {
      id: "priya-menon",
      name: "Dr. Priya Menon",
      experience: "6 yrs",
      rating: 5,
      bgColor: "bg-[#AAC4F5]",
      image: imgCareTaker1,
      imagePosition: "object-center",
      specialty: "Medical Care Assistant",
      fullTimeCost: "900",
      partTimeCost: "450"
    },
    {
      id: "michael-roberts",
      name: "Michael Roberts",
      experience: "4 yrs",
      rating: 4,
      bgColor: "bg-[#8CA9FF]",
      image: imgCareTaker3,
      imagePosition: "object-center",
      specialty: "Home Health Aide",
      fullTimeCost: "750",
      partTimeCost: "375"
    }
  ];

  const filteredCareTakers = careTakers.filter(careTaker => 
    careTaker.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    careTaker.experience.toLowerCase().includes(searchQuery.toLowerCase())
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
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#1F75BE"/>
          </svg>
          <h1 className="font-['Poppins:SemiBold',sans-serif] text-[20px] text-[#1F75BE]">
            Care Takers
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
            <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="#121314" />
            </svg>
          </div>
        </div>
      </div>

      {/* Care Takers List - Scrollable */}
      <div className="flex-1 overflow-y-auto px-[16px] pb-[120px]">
        <div className="flex flex-col gap-[20px]">
          {filteredCareTakers.map((careTaker, index) => (
            <CareTakerCard 
              key={index} 
              {...careTaker} 
              isHighlighted={searchQuery.length > 0 && (
                careTaker.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                careTaker.experience.toLowerCase().includes(searchQuery.toLowerCase())
              )}
              onClick={() => {
                navigate('/caretaker-detail', { state: { careTaker } });
              }}
            />
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavBar />
    </div>
  );
}
