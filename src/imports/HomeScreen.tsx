import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ChevronRight } from "lucide-react";
import BottomNavBar from "../components/BottomNavBar";
import svgPaths from "./svg-386h4l17ev";
import imgCarousel1 from "figma:asset/a8555cc9dd2324e7cc4e830fc856a60c0f12dbab.png";
import imgCarousel2 from "figma:asset/12cdcb7114350e9e044f33ed90cbdc71814d36d8.png";
import imgCarousel3 from "figma:asset/ea8e8383c50627ebaab1acdae18451b4d260322e.png";
import imgCarousel4 from "figma:asset/f425ba276779256a050116d2f50a6b4551025f81.png";
import imgCarousel5 from "figma:asset/39d92c6b971d39e0b7ac94970610aea9a3266f64.png";
import imgCarousel6 from "figma:asset/fa41df544f0aa82e9036c4f177ec0406bebfab94.png";
import imgImage from "figma:asset/2648f019cf8cfdd331c2b9472eb047ef873c8b34.png";
import imgAvatars3DAvatar13 from "figma:asset/acdade26ec8c30dbfc71bfcd81a210fc9231eb9a.png";
import imgAvatars3DAvatar14 from "figma:asset/e194ee7dbf007daf2ccb230f9dc0d1d72b84f188.png";
import imgAvatars3DAvatar15 from "figma:asset/c778a73f52d89ce9495899635c0e445f9c3c89e9.png";
import imgAvatars3DAvatar16 from "figma:asset/53740fdcd6cea738192b97c671682d0bc6388c0a.png";
import imgImage1 from "figma:asset/a923939c607202e77168d0570ddbff4428b003ef.png";
import imgOthersCard from "figma:asset/87e0ff7373aa8102607ad9ad250cc5549b9500ba.png";
import imgEllipse1133 from "figma:asset/4ecc9cd0fda8c368a90e752bca859166e34c26a7.png";

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselImages = [imgCarousel1, imgCarousel2, imgCarousel3, imgCarousel4, imgCarousel5, imgCarousel6];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute left-[16px] top-[160px] w-[361px] h-[200px] rounded-[16px] overflow-hidden" data-name="Carousel">
      {/* Carousel Images */}
      <div className="relative w-full h-full">
        {carouselImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              alt={`Healthcare slide ${index + 1}`} 
              className="w-full h-full object-cover rounded-[16px]" 
              src={img} 
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 rounded-[16px]" />
          </div>
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-[12px] left-1/2 transform -translate-x-1/2 flex gap-[8px] z-10">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-[8px] h-[8px] rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white w-[24px]' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function ShapeSet() {
  return <div className="absolute bg-gradient-to-b from-[59.615%] from-[rgba(0,0,0,0)] h-[188px] left-[16px] overflow-clip rounded-[16px] to-[94.712%] to-[rgba(0,0,0,0.4)] top-[168px] w-[270px]" data-name="Shape Set" />;
}

function ShapeSet1() {
  return <div className="absolute bg-gradient-to-b from-[59.615%] from-[rgba(0,0,0,0)] h-[188px] left-[calc(50%+90px)] overflow-clip rounded-[16px] to-[94.712%] to-[rgba(0,0,0,0.4)] top-[168px] w-[91px]" data-name="Shape Set" />;
}

function Image() {
  return (
    <div className="absolute inset-0 rounded-[16px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] size-full" src={imgImage} />
      <div className="overflow-clip rounded-[inherit] size-full" />
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Gradent() {
  return <div className="absolute bg-gradient-to-b bottom-0 from-[39.904%] from-[rgba(0,0,0,0)] left-0 right-0 rounded-[16px] to-[rgba(0,0,0,0.45)] top-[37.89%]" data-name="Gradent" />;
}

function CardV1() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  
  return (
    <div 
      className="absolute h-[150px] left-[16px] top-[440px] w-[172px] cursor-pointer transition-transform duration-300 hover:scale-105" 
      data-name="Card V02"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate('/doctors')}
    >
      <Image />
      <Gradent />
      <div 
        className={`absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium inset-[83.26%_34.08%_7.93%_34.08%] justify-center leading-[0] text-[16px] text-center text-nowrap transition-colors duration-300 tracking-[0.1px] ${
          isHovered ? 'text-[#1F75BE]' : 'text-white'
        }`} 
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[18px] whitespace-pre">{`Doctors `}</p>
      </div>
      {isHovered && (
        <div className="absolute inset-0 rounded-[16px] border-2 border-[#1F75BE] pointer-events-none" />
      )}
    </div>
  );
}

function Component3DAvatars1() {
  // Aasna logo/icon - keep it static and consistent
  return (
    <div className="relative shrink-0 size-[40px]" data-name="3D Avatars / 14">
      <div className="absolute inset-0 pointer-events-none rounded-[50px]" data-name="Avatars / 3d_avatar_13">
        <img alt="Aasna" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[50px] size-full" src={imgAvatars3DAvatar13} />
        <div aria-hidden="true" className="absolute border border-[#252222] border-solid inset-0 rounded-[50px]" />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] items-center right-[16px] p-[8px] top-[32px] w-[120px]">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121314] text-[16px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[16px] whitespace-pre">Aasna</p>
      </div>
      <Component3DAvatars1 />
    </div>
  );
}

function Component3DAvatars() {
  // Hi William section - use user's profile photo
  const [profilePhoto, setProfilePhoto] = useState(() => {
    const saved = localStorage.getItem('profilePhoto');
    return saved || "https://images.unsplash.com/photo-1532272278764-53cd1fe53f72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDM5MjIwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  });

  useEffect(() => {
    const handleStorageChange = () => {
      const saved = localStorage.getItem('profilePhoto');
      if (saved) {
        setProfilePhoto(saved);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('profilePhotoChanged', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('profilePhotoChanged', handleStorageChange);
    };
  }, []);

  return (
    <div className="relative shrink-0 size-[40px]" data-name="3D Avatars / 13">
      <div className="absolute inset-0 pointer-events-none rounded-[50px]" data-name="Avatars / 3d_avatar_13">
        <img 
          alt="User Profile" 
          className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[50px] size-full" 
          src={profilePhoto}
          onError={(e) => {
            // Fallback to original avatar if custom photo fails
            e.currentTarget.src = imgAvatars3DAvatar14;
          }}
        />
        <div aria-hidden="true" className="absolute border border-[#252222] border-solid inset-0 rounded-[50px]" />
      </div>
    </div>
  );
}

function Group1() {
  // Get user's first name from localStorage
  const [userName, setUserName] = useState(() => {
    const savedUserInfo = localStorage.getItem('userInfo');
    if (savedUserInfo) {
      try {
        const userInfo = JSON.parse(savedUserInfo);
        // Extract first name from full name
        return userInfo.name?.split(' ')[0] || 'William';
      } catch {
        return 'William';
      }
    }
    return 'William';
  });

  useEffect(() => {
    const handleStorageChange = () => {
      const savedUserInfo = localStorage.getItem('userInfo');
      if (savedUserInfo) {
        try {
          const userInfo = JSON.parse(savedUserInfo);
          setUserName(userInfo.name?.split(' ')[0] || 'William');
        } catch {
          setUserName('William');
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('profilePhotoChanged', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('profilePhotoChanged', handleStorageChange);
    };
  }, []);

  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 text-[14px] text-nowrap tracking-[0.1px]">
      <div className="[grid-area:1_/_1] flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center ml-0 mt-[7px] relative text-[#066abf] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="font-['Poppins:Regular',sans-serif] leading-[14px] not-italic text-nowrap tracking-[0.1px] whitespace-pre">
          <span className="text-[#121314]">Hi</span>{" "}
        </p>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col font-['Poppins:Regular',sans-serif] justify-center ml-0 mt-[27px] not-italic relative text-[#121314] translate-y-[-50%]">
        <p className="leading-[14px] text-nowrap whitespace-pre">{userName}</p>
      </div>
    </div>
  );
}

function NameComponent() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] items-center left-[16px] p-[8px] top-[32px] w-[120px]" data-name="Name Component">
      <Component3DAvatars />
      <Group1 />
    </div>
  );
}

function Image1() {
  return (
    <div className="absolute inset-0 rounded-[16px]" data-name="Image">
      <img 
        alt="Caregiver with elderly person in wheelchair" 
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] size-full" 
        src={imgOthersCard}
      />
      <div className="overflow-clip rounded-[inherit] size-full" />
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Gradent1() {
  return <div className="absolute bg-gradient-to-b bottom-0 from-[39.904%] from-[rgba(0,0,0,0)] left-0 right-0 rounded-[16px] to-[rgba(0,0,0,0.45)] top-[37.89%]" data-name="Gradent" />;
}

function CardV() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  
  return (
    <div 
      className="absolute h-[150px] left-[calc(50%+9px)] top-[440px] w-[172px] cursor-pointer transition-transform duration-300 hover:scale-105" 
      data-name="Card V02"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate('/services')}
    >
      <Image1 />
      <Gradent1 />
      <div 
        className={`absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium inset-[83.26%_36.33%_7.93%_36.33%] justify-center leading-[0] text-[14px] text-center text-nowrap transition-colors duration-300 tracking-[0.1px] ${
          isHovered ? 'text-[#1F75BE]' : 'text-white'
        }`} 
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[16px] whitespace-pre">Others</p>
      </div>
      {isHovered && (
        <div className="absolute inset-0 rounded-[16px] border-2 border-[#1F75BE] pointer-events-none" />
      )}
    </div>
  );
}

function IcRoundHome() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ic:round-home">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="ic:round-home">
          <path d={svgPaths.p22846f80} fill="var(--fill-0, #1F75BE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Home() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center relative shrink-0 min-w-[50px]" data-name="Home">
      <div className="relative shrink-0 size-[24px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="ic:round-home">
            <path d={svgPaths.p22846f80} fill="#1F75BE" id="Vector" />
          </g>
        </svg>
      </div>
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1F75BE] text-[12px] text-center text-nowrap tracking-[0.1px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[12px] whitespace-pre">{`Home`}</p>
      </div>
    </div>
  );
}

function GrommetIconsServices() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="grommet-icons:services">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_3_3216)" id="grommet-icons:services">
          <path d={svgPaths.p599f500} id="Vector" stroke="var(--stroke-0, #747474)" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_3_3216">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Services() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  
  return (
    <div 
      className="content-stretch flex flex-col gap-[6px] items-center relative shrink-0 min-w-[50px] cursor-pointer transition-transform duration-300 hover:scale-105" 
      data-name="Services"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate('/services')}
    >
      <div className="relative shrink-0 size-[24px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g clipPath="url(#clip0_3_3216)">
            <path 
              d={svgPaths.p599f500} 
              stroke={isHovered ? "#1F75BE" : "#747474"} 
              strokeWidth="2" 
              className="transition-colors duration-300"
            />
          </g>
          <defs>
            <clipPath id="clip0_3_3216">
              <rect fill="white" height="32" width="32" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div 
        className={`flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-center tracking-[0.1px] transition-colors duration-300 ${
          isHovered ? 'text-[#1F75BE]' : 'text-[#747474]'
        }`} 
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[12px]">{`Services`}</p>
      </div>
    </div>
  );
}

function MaterialSymbolsPackageOutlineSharp() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="material-symbols:package-outline-sharp">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="material-symbols:package-outline-sharp">
          <path d={svgPaths.p3781a680} fill="var(--fill-0, #747474)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Packages() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  
  return (
    <div 
      className="content-stretch flex flex-col gap-[6px] items-center relative shrink-0 min-w-[50px] cursor-pointer transition-transform duration-300 hover:scale-105" 
      data-name="Packages"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate('/packages')}
    >
      <div className="relative shrink-0 size-[24px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g>
            <path 
              d={svgPaths.p3781a680} 
              fill={isHovered ? "#1F75BE" : "#747474"} 
              className="transition-colors duration-300"
            />
          </g>
        </svg>
      </div>
      <div 
        className={`flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-center text-nowrap tracking-[0.1px] transition-colors duration-300 ${
          isHovered ? 'text-[#1F75BE]' : 'text-[#747474]'
        }`} 
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[12px] whitespace-pre">Packages</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[4.17%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p313dc900} fill="var(--fill-0, #747474)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p819fa00} fill="var(--fill-0, #747474)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function GgProfile() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="gg:profile">
      <Group />
    </div>
  );
}

function Profile() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  
  return (
    <div 
      className="content-stretch flex flex-col gap-[6px] items-center relative shrink-0 min-w-[50px] cursor-pointer transition-transform duration-300 hover:scale-105" 
      data-name="Profile"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate("/profile")}
    >
      <div className="relative shrink-0 size-[24px]">
        <div className="absolute inset-[4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
            <g>
              <path 
                clipRule="evenodd" 
                d={svgPaths.p313dc900} 
                fill={isHovered ? "#1F75BE" : "#747474"} 
                fillRule="evenodd" 
                className="transition-colors duration-300"
              />
              <path 
                clipRule="evenodd" 
                d={svgPaths.p819fa00} 
                fill={isHovered ? "#1F75BE" : "#747474"} 
                fillRule="evenodd" 
                className="transition-colors duration-300"
              />
            </g>
          </svg>
        </div>
      </div>
      <div 
        className={`flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-center text-nowrap tracking-[0.1px] transition-colors duration-300 ${
          isHovered ? 'text-[#1F75BE]' : 'text-[#747474]'
        }`} 
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[12px] whitespace-pre">{`Profile`}</p>
      </div>
    </div>
  );
}

function NavBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 box-border content-stretch flex items-center justify-between pb-[24px] pt-[16px] px-[16px] w-full max-w-[393px] mx-auto z-50" data-name="Nav Bar">
      <Home />
      <Services />
      <Packages />
      <Profile />
    </div>
  );
}

export default function HomeScreen() {
  const navigate = useNavigate();
  
  // Default patients data
  const defaultPatients = [
    {
      id: 1,
      name: "Mrs. Neelam Roy",
      age: 75,
      gender: "Female",
      email: "neelam.roy@example.com",
      phone: "+91 6756758985",
      birthday: "15/01/1949",
      address: "Flat no : 400 5th floor, Neem Hills Appartments, Hyderabad Telengana",
      language: "English",
      avatar: "https://images.unsplash.com/photo-1547199315-ddabe87428ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjQ0MjY2Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      condition: "Good"
    },
    {
      id: 2,
      name: "Mr. Sammy Roy",
      age: 78,
      gender: "Male",
      email: "sammy.roy@example.com",
      phone: "+91 6756758986",
      birthday: "22/08/1946",
      address: "Flat no : 400 5th floor, Neem Hills Appartments, Hyderabad Telengana",
      language: "English",
      avatar: "https://images.unsplash.com/photo-1690237387955-14c31c80305c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY0MzkwNDQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      condition: "Need Immediate Assistance"
    }
  ];
  
  // Initialize patients from localStorage or use default
  const [linkedPatients, setLinkedPatients] = useState(() => {
    const savedPatients = localStorage.getItem('linkedPatients');
    const dataVersion = localStorage.getItem('linkedPatientsVersion');
    
    // Force update to version 4 with BOTH patient conditions
    if (savedPatients && dataVersion !== '4') {
      const patients = JSON.parse(savedPatients);
      // Update BOTH patients' conditions
      const updatedPatients = patients.map((p: any) => {
        if (p.id === 1 && p.name === "Mrs. Neelam Roy") {
          return { ...p, condition: "Good" };
        }
        if (p.id === 2 && p.name === "Mr. Sammy Roy") {
          return { ...p, condition: "Need Immediate Assistance" };
        }
        return p;
      });
      localStorage.setItem('linkedPatients', JSON.stringify(updatedPatients));
      localStorage.setItem('linkedPatientsVersion', '4');
      return updatedPatients;
    }
    
    if (savedPatients) {
      return JSON.parse(savedPatients);
    }
    
    // Set initial version
    localStorage.setItem('linkedPatientsVersion', '4');
    return defaultPatients;
  });

  // Update linkedPatients from localStorage when component mounts or storage changes
  useEffect(() => {
    const handleStorageChange = () => {
      const savedPatients = localStorage.getItem('linkedPatients');
      if (savedPatients) {
        setLinkedPatients(JSON.parse(savedPatients));
      }
    };

    // Listen for storage changes
    window.addEventListener('storage', handleStorageChange);
    
    // Also check on mount
    handleStorageChange();

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <div className="bg-white h-screen w-screen overflow-y-auto overflow-x-hidden max-w-[393px] mx-auto" data-name="Home screen">
      <div className="relative min-h-[1100px] pb-[120px]">
        <Carousel />
        <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] left-[calc(50%+95px)] text-[16px] text-center text-nowrap text-white top-[575px] tracking-[0.1px] translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[16px] whitespace-pre">Care Taker</p>
        </div>
        <ShapeSet />
        <ShapeSet1 />
        <div className="absolute flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] left-[50%] not-italic text-[#066abf] text-[20px] text-center text-nowrap top-[130px] tracking-[0.1px] translate-x-[-50%] translate-y-[-50%]">
          <p className="leading-[18px] whitespace-pre">Welcome User!!</p>
        </div>
        <CardV1 />
        <Frame4 />
        <NameComponent />
        <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] left-[16px] not-italic text-[#1F75BE] text-[18px] text-nowrap top-[420px] tracking-[0.1px] translate-y-[-50%]">
          <p className="leading-[18px] whitespace-pre">Services</p>
        </div>
        <CardV />
        
        {/* Family Members Section */}
        {linkedPatients && linkedPatients.length > 0 && (
          <div className="absolute top-[620px] left-0 right-0 px-[20px] pb-[24px]">
            <div className="flex items-center justify-between mb-[16px]">
              <h2 className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-[#1F75BE]">
                Family Members
              </h2>
            </div>

            {/* Linked Patients List */}
            <div className="space-y-[12px]">
              {linkedPatients.map((patient) => (
                <div
                  key={patient.id}
                  onClick={() => navigate("/patient-profile", { 
                    state: { 
                      patient: {
                        id: patient.id,
                        name: patient.name,
                        age: patient.age,
                        gender: patient.gender,
                        email: patient.email,
                        phone: patient.phone,
                        birthday: patient.birthday,
                        address: patient.address,
                        language: patient.language,
                        avatar: patient.avatar,
                        condition: patient.condition
                      }
                    } 
                  })}
                  className="bg-white rounded-[16px] p-[16px] flex items-center gap-[16px] border-2 border-[#1F75BE] hover:border-[#1F75BE] hover:shadow-lg transition-all duration-300 cursor-pointer active:scale-[0.98]"
                >
                  <div className="size-[80px] rounded-[16px] overflow-hidden border-2 border-[#E0E0E0] shrink-0">
                    <ImageWithFallback
                      src={patient.avatar}
                      alt={patient.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-[#2e2e2e] mb-[6px]">
                      {patient.name}
                    </p>
                    <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#2e2e2e] mb-[8px]">
                      {patient.age} y | {patient.gender}
                    </p>
                    {patient.condition && (
                      <div className={`inline-flex items-center gap-[4px] px-[12px] py-[4px] rounded-[8px] text-[12px] ${
                        patient.condition === "Good" 
                          ? "bg-[#4CAF50] text-white" 
                          : patient.condition === "Need Immediate Assistance"
                          ? "bg-[#F44336] text-white"
                          : patient.condition === "Need Attention"
                          ? "bg-[#FF9800] text-white"
                          : patient.condition === "Critical"
                          ? "bg-[#F44336] text-white"
                          : "bg-[#9E9E9E] text-white"
                      }`}>
                        <span className="font-['Roboto:Light',sans-serif]">Condition</span>
                        <span className="font-['Roboto:Bold',sans-serif]">: {patient.condition}</span>
                      </div>
                    )}
                  </div>
                  <ChevronRight className="size-[24px] text-[#1F75BE]" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <BottomNavBar />
    </div>
  );
}
