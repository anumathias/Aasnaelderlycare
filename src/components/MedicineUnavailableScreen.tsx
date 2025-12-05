import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { ArrowLeft, AlertCircle, MapPin, Navigation, Phone, Star, Package, X, Upload, FileText } from "lucide-react";
import BottomNavBar from "./BottomNavBar";

interface NearbyPharmacy {
  id: string;
  name: string;
  rating: number;
  address: string;
  distance: string;
  availability: string;
  isOpen: boolean;
  phone: string;
}

export default function MedicineUnavailableScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const medicineName = location.state?.medicineName || "Medicine";
  const [showPhoneModal, setShowPhoneModal] = useState(false);
  const [selectedPharmacy, setSelectedPharmacy] = useState<NearbyPharmacy | null>(null);
  const [showOptionsModal, setShowOptionsModal] = useState(false);

  const nearbyPharmacies: NearbyPharmacy[] = [
    {
      id: "1",
      name: "Med Plus Pharmacy",
      rating: 4.5,
      address: "211 Alwal Road, Secunderabad",
      distance: "2.1 km",
      availability: "Limited Stock",
      isOpen: true,
      phone: "+91 9876543210"
    },
    {
      id: "2",
      name: "Apollo Pharmacy",
      rating: 4.7,
      address: "45 MG Road, Begumpet",
      distance: "2.5 km",
      availability: "In Stock",
      isOpen: true,
      phone: "+91 9876543211"
    },
    {
      id: "3",
      name: "HealthPlus Medical Store",
      rating: 4.3,
      address: "78 Trimulgherry Road, Near Metro",
      distance: "3.2 km",
      availability: "Limited Stock",
      isOpen: true,
      phone: "+91 9876543212"
    },
    {
      id: "4",
      name: "Life Care Pharmacy",
      rating: 4.6,
      address: "156 Paradise Circle, Secunderabad",
      distance: "3.8 km",
      availability: "In Stock",
      isOpen: false,
      phone: "+91 9876543213"
    },
    {
      id: "5",
      name: "Guardian Pharmacy",
      rating: 4.4,
      address: "32 SP Road, Marredpally",
      distance: "4.0 km",
      availability: "Limited Stock",
      isOpen: true,
      phone: "+91 9876543214"
    },
    {
      id: "6",
      name: "Wellness Forever",
      rating: 4.8,
      address: "89 Sarojini Devi Road, Tarnaka",
      distance: "4.5 km",
      availability: "In Stock",
      isOpen: true,
      phone: "+91 9876543215"
    },
    {
      id: "7",
      name: "NetMeds Pharmacy",
      rating: 4.2,
      address: "23 Main Bazar, Yapral",
      distance: "5.0 km",
      availability: "Call to Check",
      isOpen: true,
      phone: "+91 9876543216"
    },
    {
      id: "8",
      name: "Cure Plus Medical",
      rating: 4.5,
      address: "67 Sainikpuri Main Road",
      distance: "5.3 km",
      availability: "In Stock",
      isOpen: false,
      phone: "+91 9876543217"
    }
  ];

  const handleCall = (pharmacy: NearbyPharmacy) => {
    setSelectedPharmacy(pharmacy);
    setShowPhoneModal(true);
  };

  const handleDirection = (pharmacy: NearbyPharmacy) => {
    navigate("/fake-google-maps", { state: { pharmacy } });
  };

  const handleFillForm = () => {
    setShowOptionsModal(true);
  };

  const handleUploadPrescription = () => {
    setShowOptionsModal(false);
    navigate("/upload-prescription", { state: { medicineName } });
  };

  const handleManualForm = () => {
    setShowOptionsModal(false);
    navigate("/medicine-request-form", { state: { medicineName } });
  };

  return (
    <div className="bg-gradient-to-b from-[#f8f9fa] to-white min-h-screen w-full max-w-[393px] mx-auto relative flex flex-col pb-[80px]">
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

      <div className="px-[16px] pt-[16px] pb-[120px] flex-1 overflow-y-auto">
        {/* Header */}
        <div className="flex items-center gap-[12px] mb-[20px]">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center justify-center size-[40px] rounded-full hover:bg-[#1F75BE]/10 transition-all active:scale-95 border border-gray-200 hover:border-[#1F75BE]"
          >
            <ArrowLeft className="size-[24px] text-[#1F75BE]" />
          </button>
          <div className="flex-1 bg-white rounded-full px-[20px] py-[10px] border border-gray-300 shadow-sm">
            <p className="font-['Poppins:Medium',sans-serif] text-[16px] text-[#121314]">
              {medicineName}
            </p>
          </div>
        </div>

        {/* Unavailable Alert */}
        <div className="bg-[#ebeff6] rounded-[16px] p-[20px] mb-[20px] shadow-sm border border-gray-200">
          {/* Unavailable Badge */}
          <div className="flex items-center gap-[8px] mb-[16px] bg-[#f7fbff] border-2 border-[#cd2026] rounded-[12px] px-[12px] py-[8px] w-fit">
            <AlertCircle className="size-[20px] text-[#f60808]" />
            <span className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-[#f60808]">
              Unavailable
            </span>
          </div>

          {/* Message */}
          <p className="font-['Poppins:Medium',sans-serif] text-[15px] text-[#121314] leading-[22px] mb-[16px]">
            <span className="font-['Poppins:SemiBold',sans-serif] text-[#066abf]">{medicineName}</span> is currently unavailable. Please check the{" "}
            <span className="text-[#066abf]">near by locations</span> or{" "}
            <span className="text-[#066abf]">Fill</span> the Below{" "}
            <span className="text-[#066abf]">Form</span>
          </p>

          {/* Fill Form Button */}
          <button
            onClick={handleFillForm}
            className="w-full bg-[#bdd5fd] hover:bg-[#a8c7f7] rounded-[12px] py-[14px] font-['Poppins:SemiBold',sans-serif] text-[16px] text-[#1e3678] transition-all active:scale-[0.98] shadow-sm"
          >
            Fill This Form
          </button>
        </div>

        {/* Nearby Pharmacies */}
        <div className="space-y-[16px]">
          {nearbyPharmacies.map((pharmacy) => (
            <div
              key={pharmacy.id}
              className="bg-white rounded-[16px] border border-gray-200 shadow-sm overflow-hidden"
            >
              {/* Pharmacy Header */}
              <div className="bg-white border-b border-gray-200 px-[16px] py-[14px] flex items-center justify-between">
                <h3 className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-[#121314]">
                  {pharmacy.name}
                </h3>
                {pharmacy.isOpen && (
                  <span className="bg-[#578f63] text-white px-[12px] py-[6px] rounded-[12px] font-['Poppins:Medium',sans-serif] text-[12px]">
                    Open Now
                  </span>
                )}
              </div>

              {/* Pharmacy Details */}
              <div className="px-[16px] py-[14px] space-y-[10px]">
                {/* Rating */}
                <div className="flex items-center gap-[6px]">
                  <Star className="size-[16px] text-[#066ABF] fill-[#066ABF]" />
                  <span className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#121314]">
                    {pharmacy.rating}
                  </span>
                </div>

                {/* Address */}
                <div className="flex items-center gap-[8px]">
                  <MapPin className="size-[16px] text-[#066ABF] flex-shrink-0" />
                  <span className="font-['Poppins:Regular',sans-serif] text-[14px] text-[#757575]">
                    {pharmacy.address}
                  </span>
                </div>

                {/* Distance */}
                <div className="flex items-center gap-[8px]">
                  <Navigation className="size-[16px] text-[#FFB60B] flex-shrink-0" />
                  <span className="font-['Poppins:Regular',sans-serif] text-[14px] text-[#757575]">
                    {pharmacy.distance}
                  </span>
                </div>

                {/* Availability */}
                <div className="flex items-center gap-[8px]">
                  <Package className="size-[16px] text-[#121314] flex-shrink-0" />
                  <span className="font-['Poppins:Medium',sans-serif] text-[13px] text-[#121314]">
                    Availability: <span className="text-[#578f63]">{pharmacy.availability}</span>
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-[12px] pt-[8px]">
                  <button
                    onClick={() => handleCall(pharmacy)}
                    className="flex-1 bg-[rgba(245,245,245,0.9)] hover:bg-[rgba(245,245,245,1)] border border-gray-300 rounded-[12px] py-[10px] flex items-center justify-center gap-[8px] transition-all active:scale-[0.98]"
                  >
                    <Phone className="size-[18px] text-[#3DAB51]" />
                    <span className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-[#121314]">
                      Call
                    </span>
                  </button>
                  <button
                    onClick={() => handleDirection(pharmacy)}
                    className="flex-1 bg-[#d6ebf7] hover:bg-[#c5e0f0] border border-gray-300 rounded-[12px] py-[10px] flex items-center justify-center gap-[8px] transition-all active:scale-[0.98]"
                  >
                    <Navigation className="size-[18px] text-[#066ABF]" />
                    <span className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-[#121314]">
                      Direction
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Options Modal */}
      {showOptionsModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-[20px]">
          <div className="bg-white rounded-[20px] p-[28px] w-full max-w-[340px] shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between mb-[24px]">
              <h3 className="font-['Poppins:SemiBold',sans-serif] text-[20px] text-[#121314]">
                Choose an Option
              </h3>
              <button 
                onClick={() => setShowOptionsModal(false)}
                className="size-[32px] flex items-center justify-center rounded-full hover:bg-gray-100 transition-all"
              >
                <X className="size-[20px] text-[#5f6368]" />
              </button>
            </div>
            
            <p className="font-['Poppins:Regular',sans-serif] text-[14px] text-[#5f6368] mb-[24px]">
              You can either upload your doctor's prescription or fill out a manual request form
            </p>

            <div className="space-y-[12px]">
              {/* Upload Prescription Option */}
              <button
                onClick={handleUploadPrescription}
                className="w-full bg-gradient-to-r from-[#1F75BE] to-[#1a64a3] hover:from-[#1a64a3] hover:to-[#155a8f] text-white rounded-[12px] p-[16px] transition-all active:scale-[0.98] shadow-md group"
              >
                <div className="flex items-center gap-[16px]">
                  <div className="size-[48px] bg-white/20 rounded-[12px] flex items-center justify-center group-hover:bg-white/30 transition-all">
                    <Upload className="size-[24px]" />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="font-['Poppins:SemiBold',sans-serif] text-[16px] mb-[2px]">
                      Upload Prescription
                    </p>
                    <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-white/80">
                      Upload doctor's prescription image
                    </p>
                  </div>
                </div>
              </button>

              {/* Fill Manual Form Option */}
              <button
                onClick={handleManualForm}
                className="w-full bg-white hover:bg-gray-50 border-2 border-[#1F75BE] text-[#1F75BE] rounded-[12px] p-[16px] transition-all active:scale-[0.98] group"
              >
                <div className="flex items-center gap-[16px]">
                  <div className="size-[48px] bg-[#1F75BE]/10 rounded-[12px] flex items-center justify-center group-hover:bg-[#1F75BE]/20 transition-all">
                    <FileText className="size-[24px]" />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="font-['Poppins:SemiBold',sans-serif] text-[16px] mb-[2px]">
                      Fill Manual Form
                    </p>
                    <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#5f6368]">
                      Enter medicine details manually
                    </p>
                  </div>
                </div>
              </button>

              {/* Cancel Button */}
              <button
                onClick={() => setShowOptionsModal(false)}
                className="w-full border border-gray-300 hover:bg-gray-50 text-[#5f6368] rounded-[12px] py-[12px] font-['Poppins:Medium',sans-serif] text-[15px] transition-all active:scale-[0.98] mt-[8px]"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Phone Number Modal */}
      {showPhoneModal && selectedPharmacy && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-[20px]">
          <div className="bg-white rounded-[16px] p-[24px] w-full max-w-[320px] shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between mb-[20px]">
              <h3 className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-[#121314]">
                Contact Information
              </h3>
              <button 
                onClick={() => setShowPhoneModal(false)}
                className="size-[32px] flex items-center justify-center rounded-full hover:bg-gray-100 transition-all"
              >
                <X className="size-[20px] text-[#5f6368]" />
              </button>
            </div>
            
            <div className="space-y-[16px]">
              <div className="bg-[#f1f3f4] rounded-[12px] p-[16px]">
                <p className="font-['Poppins:Medium',sans-serif] text-[13px] text-[#5f6368] mb-[8px]">
                  {selectedPharmacy.name}
                </p>
                <div className="flex items-center gap-[12px]">
                  <Phone className="size-[20px] text-[#3DAB51]" />
                  <a 
                    href={`tel:${selectedPharmacy.phone}`}
                    className="font-['Roboto:Medium',sans-serif] text-[18px] text-[#1F75BE] hover:underline"
                  >
                    {selectedPharmacy.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={() => {
                  window.location.href = `tel:${selectedPharmacy.phone}`;
                  setShowPhoneModal(false);
                }}
                className="w-full bg-[#1F75BE] hover:bg-[#1a64a3] text-white rounded-[8px] py-[12px] font-['Poppins:SemiBold',sans-serif] text-[15px] transition-all active:scale-[0.98]"
              >
                Make Call
              </button>
              
              <button
                onClick={() => setShowPhoneModal(false)}
                className="w-full border border-gray-300 hover:bg-gray-50 text-[#5f6368] rounded-[8px] py-[12px] font-['Poppins:Medium',sans-serif] text-[15px] transition-all active:scale-[0.98]"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <BottomNavBar />
    </div>
  );
}
