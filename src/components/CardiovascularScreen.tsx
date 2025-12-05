import { useNavigate, useLocation } from "react-router";
import { useState } from "react";
import { useCart } from "../utils/CartContext";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { toast } from "sonner@2.0.3";
import BottomNavBar from "./BottomNavBar";

export default function CardiovascularScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const initialSearchTerm = location.state?.searchTerm || "";
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const { cartCount, addToCart } = useCart();

  const medicines = [
    {
      id: 1,
      name: "Atorvastatin 10mg",
      manufacturer: "CardioHealth Pharma",
      price: "₹85",
      description: "Cholesterol-lowering medication to reduce heart disease risk",
      uses: "High cholesterol, Heart disease prevention, Stroke prevention",
      dosage: "1 tablet daily at bedtime",
      prescription: "Required"
    },
    {
      id: 2,
      name: "Metoprolol 50mg",
      manufacturer: "Beta Blockers Inc",
      price: "₹92",
      description: "Beta-blocker for blood pressure and heart rate control",
      uses: "Hypertension, Angina, Heart rhythm disorders",
      dosage: "1 tablet twice daily",
      prescription: "Required"
    },
    {
      id: 3,
      name: "Aspirin 75mg (Cardio)",
      manufacturer: "HeartCare",
      price: "₹40",
      description: "Low-dose aspirin for cardiovascular protection",
      uses: "Heart attack prevention, Stroke prevention, Blood thinning",
      dosage: "1 tablet daily",
      prescription: "Consult Doctor"
    },
    {
      id: 4,
      name: "Ramipril 5mg",
      manufacturer: "ACE Pharma",
      price: "₹78",
      description: "ACE inhibitor for blood pressure and heart failure management",
      uses: "High blood pressure, Heart failure, Post-heart attack care",
      dosage: "1 tablet daily",
      prescription: "Required"
    },
    {
      id: 5,
      name: "Clopidogrel 75mg",
      manufacturer: "Antiplatelet Labs",
      price: "₹110",
      description: "Prevents blood clots in heart and blood vessels",
      uses: "Heart attack prevention, Stroke prevention, Peripheral artery disease",
      dosage: "1 tablet daily",
      prescription: "Required"
    }
  ];

  const filteredMedicines = medicines.filter(medicine =>
    medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    medicine.uses.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Show unavailable screen if search term is entered and no results found
  if (searchTerm.trim() !== "" && filteredMedicines.length === 0) {
    navigate("/medicine-unavailable", { state: { medicineName: searchTerm } });
    return null;
  }

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
        {/* Back Button and Title */}
        <div className="flex items-center justify-between mb-[20px]">
          <button 
            onClick={() => navigate("/medicine")}
            className="flex items-center justify-center size-[40px] rounded-full hover:bg-[#1F75BE]/10 transition-all active:scale-95 border border-gray-200 hover:border-[#1F75BE]"
          >
            <ArrowLeft className="size-[24px] text-[#1F75BE]" />
          </button>
          <div className="flex items-center gap-[12px]">
            <svg className="size-[28px]" fill="none" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#D02727" />
            </svg>
            <h1 className="font-['Poppins:SemiBold',sans-serif] text-[20px] text-[#121314]">
              Cardiovascular
            </h1>
          </div>
          {/* Cart Icon */}
          <button 
            onClick={() => navigate("/cart")}
            className="relative size-[40px] flex items-center justify-center hover:bg-[#1F75BE]/10 rounded-full transition-all active:scale-95"
          >
            <ShoppingCart className="size-[24px] text-[#1F75BE]" />
            {cartCount > 0 && (
              <div className="absolute -top-1 -right-1 bg-[#F50C0C] size-[20px] rounded-full border-2 border-white flex items-center justify-center shadow-md">
                <span className="font-['Poppins:SemiBold',sans-serif] text-[10px] text-white">
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
            placeholder="Search medicines..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full h-full bg-transparent px-[20px] pr-[52px] font-['Roboto:SemiBold',sans-serif] text-[14px] text-[#121314] placeholder:text-[#666] outline-none"
          />
          <button className="absolute right-[4px] top-1/2 -translate-y-1/2 size-[28px] flex items-center justify-center">
            <svg className="size-[20px]" fill="none" viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="#121314" />
            </svg>
          </button>
        </div>

        {/* Category Header */}
        <div className="bg-gradient-to-r from-[#D02727] to-[#ff4444] rounded-[16px] p-[20px] mb-[20px] shadow-md">
          <div className="flex items-center gap-[16px]">
            <div className="size-[60px] bg-white rounded-full flex items-center justify-center shadow-lg">
              <svg className="size-[36px]" fill="none" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#D02727" />
              </svg>
            </div>
            <div>
              <p className="font-['Poppins:SemiBold',sans-serif] text-[22px] text-white leading-tight mb-[4px]">
                Cardiovascular
              </p>
              <p className="font-['Poppins:Regular',sans-serif] text-[13px] text-white/90 leading-snug">
                Support heart health with essential medications
              </p>
            </div>
          </div>
        </div>

        {/* Medicine Cards */}
        <div className="flex flex-col gap-[16px]">
          {filteredMedicines.map((medicine) => (
            <div
              key={medicine.id}
              className="bg-white rounded-[16px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.1)] p-[16px] border border-gray-100 hover:shadow-[0px_6px_16px_0px_rgba(0,0,0,0.15)] transition-all"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-[12px]">
                <div className="flex items-start gap-[12px] flex-1">
                  {/* Medicine Icon */}
                  <div className="shrink-0 size-[50px] bg-gradient-to-br from-red-50 to-red-100 rounded-full flex items-center justify-center border border-red-200">
                    <svg className="size-[28px]" fill="none" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#D02727" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-[#121314] leading-tight mb-[4px]">
                      {medicine.name}
                    </p>
                    <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#666] leading-tight">
                      by {medicine.manufacturer}
                    </p>
                  </div>
                </div>
                <div className="bg-[#10b981] rounded-[8px] px-[12px] py-[6px]">
                  <p className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-white">
                    {medicine.price}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="font-['Poppins:Regular',sans-serif] text-[13px] text-[#555] leading-snug mb-[12px]">
                {medicine.description}
              </p>

              {/* Details Grid */}
              <div className="space-y-[8px] mb-[12px]">
                <div className="flex items-start gap-[8px]">
                  <p className="font-['Poppins:Medium',sans-serif] text-[12px] text-[#1F75BE] min-w-[80px]">
                    Uses:
                  </p>
                  <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#555] leading-relaxed">
                    {medicine.uses}
                  </p>
                </div>
                <div className="flex items-start gap-[8px]">
                  <p className="font-['Poppins:Medium',sans-serif] text-[12px] text-[#1F75BE] min-w-[80px]">
                    Dosage:
                  </p>
                  <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#555] leading-relaxed">
                    {medicine.dosage}
                  </p>
                </div>
                <div className="flex items-start gap-[8px]">
                  <p className="font-['Poppins:Medium',sans-serif] text-[12px] text-[#1F75BE] min-w-[80px]">
                    Prescription:
                  </p>
                  <p className={`font-['Poppins:Medium',sans-serif] text-[12px] leading-relaxed ${
                    medicine.prescription === "Required" ? "text-[#ef4444]" : "text-[#10b981]"
                  }`}>
                    {medicine.prescription}
                  </p>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button 
                onClick={() => {
                  addToCart({
                    id: medicine.id.toString(),
                    name: medicine.name,
                    manufacturer: medicine.manufacturer,
                    price: medicine.price,
                    description: medicine.description,
                    category: "Cardiovascular"
                  });
                  toast.success(`${medicine.name} added to cart!`);
                }}
                className="w-full bg-[#1F75BE] hover:bg-[#1a64a3] text-white rounded-[8px] py-[10px] font-['Poppins:Medium',sans-serif] text-[14px] transition-all active:scale-[0.98]"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavBar />
    </div>
  );
}
