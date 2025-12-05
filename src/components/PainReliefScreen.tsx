import { useNavigate, useLocation } from "react-router";
import { useState } from "react";
import { useCart } from "../utils/CartContext";
import { ArrowLeft, Search, ShoppingCart } from "lucide-react";
import { toast } from "sonner@2.0.3";
import BottomNavBar from "./BottomNavBar";

export default function PainReliefScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const initialSearchTerm = location.state?.searchTerm || "";
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const { cartCount, addToCart } = useCart();

  const medicines = [
    {
      id: 1,
      name: "Paracetamol 500mg",
      manufacturer: "Generic Pharma",
      price: "₹45",
      description: "Effective for fever and mild to moderate pain relief",
      uses: "Headache, Fever, Body ache, Dental pain",
      dosage: "1-2 tablets every 4-6 hours",
      prescription: "Not Required"
    },
    {
      id: 2,
      name: "Ibuprofen 400mg",
      manufacturer: "Health Plus",
      price: "₹68",
      description: "Anti-inflammatory pain reliever for various conditions",
      uses: "Inflammation, Arthritis, Muscle pain, Menstrual cramps",
      dosage: "1 tablet every 6-8 hours",
      prescription: "Not Required"
    },
    {
      id: 3,
      name: "Aspirin 75mg",
      manufacturer: "Cardio Care",
      price: "₹35",
      description: "Low-dose aspirin for pain and cardiovascular protection",
      uses: "Mild pain, Fever, Heart health support",
      dosage: "1 tablet daily",
      prescription: "Consult Doctor"
    },
    {
      id: 4,
      name: "Diclofenac Gel",
      manufacturer: "TopicalMeds",
      price: "₹120",
      description: "Topical pain relief gel for localized pain",
      uses: "Joint pain, Muscle strains, Sports injuries",
      dosage: "Apply 3-4 times daily",
      prescription: "Not Required"
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
              <path d="M19 3H5c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 6c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm6 12H7v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1z" fill="#1F75BE" />
            </svg>
            <h1 className="font-['Poppins:SemiBold',sans-serif] text-[20px] text-[#121314]">
              Pain Relief
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
        <div className="bg-gradient-to-r from-[#2F88FF] to-[#5E87DF] rounded-[16px] p-[20px] mb-[20px] shadow-md">
          <div className="flex items-center gap-[16px]">
            <div className="size-[60px] bg-white rounded-full flex items-center justify-center shadow-lg">
              <svg className="size-[36px]" fill="none" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 6c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm6 12H7v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1z" fill="#2F88FF" />
              </svg>
            </div>
            <div>
              <p className="font-['Poppins:SemiBold',sans-serif] text-[22px] text-white leading-tight mb-[4px]">
                Pain Relief
              </p>
              <p className="font-['Poppins:Regular',sans-serif] text-[13px] text-white/90 leading-snug">
                Quick relief for common aches and discomfort
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
                  <div className="shrink-0 size-[50px] bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center border border-blue-200">
                    <svg className="size-[28px]" fill="none" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 6c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm6 12H7v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1z" fill="#2F88FF" />
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
                  <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#555] leading-relaxed">
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
                    category: "Pain Relief"
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
