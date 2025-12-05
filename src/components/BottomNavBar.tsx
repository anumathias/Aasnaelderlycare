import { useNavigate, useLocation } from "react-router";
import { Home, Package, Grid3x3, User } from "lucide-react";
import { useState, useEffect } from "react";

export default function BottomNavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Get profile photo from localStorage
  const [profilePhoto, setProfilePhoto] = useState(() => {
    const saved = localStorage.getItem('profilePhoto');
    return saved || "https://images.unsplash.com/photo-1532272278764-53cd1fe53f72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDM5MjIwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  });

  // Listen for profile photo changes
  useEffect(() => {
    const handleStorageChange = () => {
      const saved = localStorage.getItem('profilePhoto');
      if (saved) {
        setProfilePhoto(saved);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    // Also listen for custom event for same-page updates
    window.addEventListener('profilePhotoChanged', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('profilePhotoChanged', handleStorageChange);
    };
  }, []);

  const navItems = [
    { id: "home", label: "Home", icon: Home, path: "/home" },
    { id: "services", label: "Services", icon: Grid3x3, path: "/services" },
    { id: "packages", label: "Packages", icon: Package, path: "/packages" },
    { id: "profile", label: "Profile", icon: User, path: "/profile", isProfilePhoto: true }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 box-border flex items-center justify-between pb-[24px] pt-[16px] px-[16px] w-full max-w-[393px] mx-auto z-50">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;
        
        return (
          <div
            key={item.id}
            className="flex flex-col gap-[6px] items-center relative shrink-0 min-w-[50px] cursor-pointer transition-transform duration-300 hover:scale-105"
            onClick={() => navigate(item.path)}
          >
            <div className="relative shrink-0 size-[24px]">
              {item.isProfilePhoto ? (
                <div className={`size-full rounded-full overflow-hidden border-2 transition-all duration-300 ${
                  isActive ? 'border-[#1F75BE]' : 'border-[#747474]'
                }`}>
                  <img 
                    src={profilePhoto}
                    alt="Profile"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to User icon if image fails
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        parent.innerHTML = '';
                        parent.style.border = 'none';
                        parent.style.background = 'transparent';
                      }
                      // Create a div to hold the icon
                      const iconDiv = document.createElement('div');
                      iconDiv.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${isActive ? '#1F75BE' : '#747474'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`;
                      if (parent) parent.appendChild(iconDiv);
                    }}
                  />
                </div>
              ) : (
                <Icon 
                  className="size-full transition-colors duration-300" 
                  color={isActive ? "#1F75BE" : "#747474"}
                  strokeWidth={2}
                />
              )}
            </div>
            <div className={`font-['Roboto:Medium',sans-serif] font-medium text-[12px] text-center transition-colors duration-300 ${
              isActive ? 'text-[#1F75BE]' : 'text-[#747474]'
            }`}>
              <p className="leading-[12px] whitespace-nowrap">{item.label}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
