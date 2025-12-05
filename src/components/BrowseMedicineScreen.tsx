import { useNavigate } from "react-router";
import { useState } from "react";
import svgPaths from "../imports/svg-sau85v1a4y";
import { useCart } from "../utils/CartContext";
import { ShoppingCart } from "lucide-react";
import BottomNavBar from "./BottomNavBar";

export default function BrowseMedicineScreen() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const { cartCount } = useCart();

  // All medicines from all categories
  const allMedicines = [
    // Pain Relief
    { name: "Paracetamol 500mg", category: "pain-relief" },
    { name: "Ibuprofen 400mg", category: "pain-relief" },
    { name: "Aspirin 75mg", category: "pain-relief" },
    { name: "Diclofenac Gel", category: "pain-relief" },
    // Cardiovascular
    { name: "Atorvastatin 10mg", category: "cardiovascular" },
    { name: "Metoprolol 50mg", category: "cardiovascular" },
    { name: "Aspirin 75mg (Cardio)", category: "cardiovascular" },
    { name: "Ramipril 5mg", category: "cardiovascular" },
    { name: "Clopidogrel 75mg", category: "cardiovascular" },
    // Vitamins
    { name: "Multivitamin Complex", category: "vitamins" },
    { name: "Vitamin D3 2000 IU", category: "vitamins" },
    { name: "Omega-3 Fish Oil", category: "vitamins" },
    { name: "Vitamin B-Complex", category: "vitamins" },
    { name: "Calcium + Vitamin D", category: "vitamins" },
    { name: "Vitamin C 1000mg", category: "vitamins" },
    // Diabetes Care
    { name: "Metformin 500mg", category: "diabetes" },
    { name: "Glimepiride 2mg", category: "diabetes" },
    { name: "Insulin Glargine 100U/ml", category: "diabetes" },
    { name: "Blood Glucose Test Strips", category: "diabetes" },
    { name: "Sitagliptin 50mg", category: "diabetes" },
    { name: "Glucose Monitoring System", category: "diabetes" }
  ];

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      return;
    }

    // Search for medicine across all categories
    const foundMedicine = allMedicines.find(medicine =>
      medicine.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (foundMedicine) {
      // Navigate to the category with pre-filled search term
      navigate(`/medicine/${foundMedicine.category}`, { 
        state: { searchTerm } 
      });
    } else {
      // Medicine not found - navigate to unavailable screen
      navigate("/medicine-unavailable", { 
        state: { medicineName: searchTerm } 
      });
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const categories = [
    {
      id: 1,
      title: "Pain Relief",
      description: "Quick find Pain relief for common aches and discomfort",
      route: "/medicine/pain-relief",
      icon: "medicine-bottle"
    },
    {
      id: 2,
      title: "Cardiovascular",
      description: "Support heart health with essential medications and advice.",
      route: "/medicine/cardiovascular",
      icon: "heart"
    },
    {
      id: 3,
      title: "Vitamins",
      description: "Boost your well-being with daily essentials and health aids.",
      route: "/medicine/vitamins",
      icon: "pill"
    },
    {
      id: 4,
      title: "Diabetes Care",
      description: "Manage blood sugar levels effectively with specialized products.",
      route: "/medicine/diabetes",
      icon: "blood-sugar"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-[#f8f9fa] to-white min-h-screen w-full max-w-[393px] mx-auto relative pb-[120px] overflow-y-auto">
      <style>{`
        .overflow-y-auto::-webkit-scrollbar {
          width: 8px;
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

      <div className="px-[16px] pt-[16px]">
        {/* Header with Cart */}
        <div className="flex items-center justify-end mb-[20px]">
          {/* Cart Icon */}
          <button 
            onClick={() => navigate("/cart")}
            className="relative size-[48px] flex items-center justify-center hover:bg-[#1F75BE]/10 rounded-full transition-all active:scale-95"
          >
            <ShoppingCart className="size-[32px] text-[#1F75BE]" />
            {cartCount > 0 && (
              <div className="absolute -top-1 -right-1 bg-[#F50C0C] size-[24px] rounded-full border-2 border-white flex items-center justify-center shadow-md">
                <span className="font-['Poppins:SemiBold',sans-serif] text-[12px] text-white">
                  {cartCount}
                </span>
              </div>
            )}
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative w-full h-[36px] bg-white rounded-[18px] mb-[20px] border border-gray-300 shadow-sm">
          <input
            type="text"
            placeholder="Search for Medicines"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full h-full bg-transparent px-[20px] pr-[52px] font-['Roboto:SemiBold',sans-serif] text-[14px] text-[#121314] placeholder:text-[#666] outline-none"
          />
          <button 
            onClick={handleSearch}
            className="absolute right-[4px] top-1/2 -translate-y-1/2 size-[28px] flex items-center justify-center hover:bg-[#1F75BE]/10 rounded-full transition-all active:scale-95"
          >
            <svg className="size-[20px]" fill="none" viewBox="0 0 24 24">
              <path d={svgPaths.pc423380} fill="#121314" />
            </svg>
          </button>
        </div>

        {/* Back Button and Title */}
        <div className="flex items-center justify-center mb-[20px] relative">
          <button 
            onClick={() => navigate("/services")}
            className="absolute left-0 flex items-center justify-center size-[40px] rounded-full hover:bg-[#1F75BE]/10 transition-all active:scale-95 border border-gray-200 hover:border-[#1F75BE]"
          >
            <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="#1F75BE" />
            </svg>
          </button>
          <div className="flex items-center gap-[12px]">
            <svg className="size-[28px]" fill="none" viewBox="0 0 24 24">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" fill="#1F75BE" />
            </svg>
            <h1 className="font-['Poppins:SemiBold',sans-serif] text-[20px] text-[#121314]">
              Browse Medicine
            </h1>
          </div>
        </div>

        {/* Main Title */}
        <p className="font-['Poppins:Medium',sans-serif] text-[28px] text-[#066ABF] text-center leading-tight mb-[28px]">
          Browse your Medicine
        </p>

        {/* Medicine Categories */}
        <div className="flex flex-col gap-[20px]">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => navigate(category.route)}
              className="bg-white rounded-[16px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.12)] p-[16px] flex items-center gap-[16px] cursor-pointer hover:shadow-[0px_6px_16px_0px_rgba(0,0,0,0.18)] transition-all active:scale-[0.98] border border-gray-100"
            >
              {/* Icon Container */}
              <div className="shrink-0 size-[100px] bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center shadow-[0px_2px_8px_0px_rgba(31,117,190,0.25)] border-2 border-blue-200">
                {category.icon === "medicine-bottle" && (
                  <div className="relative w-[45px] h-[70px]">
                    <svg className="absolute inset-0 w-full h-full" fill="none" viewBox="0 0 37 60">
                      <path d={svgPaths.p1a97f800} fill="#2F88FF" stroke="black" strokeLinejoin="round" strokeWidth="2" />
                      <path d="M1 21.0582H35.3856" stroke="white" strokeLinecap="round" strokeWidth="2" />
                      <path d="M1 16.76V25.3564" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d="M35.3856 16.76V25.3564" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d={svgPaths.p4058b80} fill="#2F88FF" stroke="black" strokeLinejoin="round" strokeWidth="2" />
                      <path d="M12.4619 39.6838H23.9237" stroke="white" strokeLinecap="round" strokeWidth="2" />
                      <path d="M18.1928 33.9528V45.4147" stroke="white" strokeLinecap="round" strokeWidth="2" />
                    </svg>
                    <div className="absolute -top-1 -right-1 size-[32px]">
                      <svg fill="none" viewBox="0 0 50 49">
                        <path clipRule="evenodd" d={svgPaths.p2d3a9f40} fill="#5E87DF" fillRule="evenodd" />
                        <path clipRule="evenodd" d={svgPaths.p9b03600} fill="#5E87DF" fillRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                )}
                {category.icon === "heart" && (
                  <div className="relative size-[60px]">
                    <svg fill="none" viewBox="0 0 52 63">
                      <path d={svgPaths.p6648800} fill="#D02727" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d={svgPaths.p133e7b30} fill="#D02727" stroke="black" strokeLinecap="round" strokeWidth="2" />
                      <path d={svgPaths.p3d5ff380} fill="#D02727" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d={svgPaths.p3e5afd00} fill="#D02727" stroke="black" strokeWidth="2" />
                      <path d={svgPaths.p7861400} fill="#D02727" />
                      <path d={svgPaths.p2bd964c0} stroke="black" strokeLinecap="round" strokeWidth="2" />
                    </svg>
                  </div>
                )}
                {category.icon === "pill" && (
                  <div className="relative size-[60px]">
                    <svg fill="none" viewBox="0 0 69 69">
                      <path d={svgPaths.p1d7ebe80} fill="black" />
                      <path d={svgPaths.p290d7800} fill="#48A2E8" />
                      <path d={svgPaths.p3699c380} fill="black" />
                    </svg>
                  </div>
                )}
                {category.icon === "blood-sugar" && (
                  <div className="relative size-[60px]">
                    <svg fill="none" viewBox="0 0 69 69">
                      <path d={svgPaths.p2dada2f0} fill="#066ABF" />
                      <path d={svgPaths.p295b3500} fill="black" />
                    </svg>
                    <div className="absolute bottom-0 right-0 size-[32px]">
                      <svg fill="none" viewBox="0 0 41 25">
                        <path clipRule="evenodd" d={svgPaths.p1b76ae40} fill="black" fillRule="evenodd" />
                        <path clipRule="evenodd" d={svgPaths.p443b100} fill="black" fillRule="evenodd" />
                        <path clipRule="evenodd" d={svgPaths.p23ba8580} fill="black" fillRule="evenodd" />
                        <path clipRule="evenodd" d={svgPaths.p3d314880} fill="black" fillRule="evenodd" />
                        <path clipRule="evenodd" d={svgPaths.p15bca000} fill="black" fillRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>

              {/* Text Content */}
              <div className="flex-1 flex flex-col gap-[8px]">
                <p className="font-['Poppins:Medium',sans-serif] text-[18px] text-[#2a2525] leading-tight">
                  {category.title}
                </p>
                <p className="font-['Poppins:Light',sans-serif] text-[13px] text-[#555] leading-snug">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavBar />
    </div>
  );
}
