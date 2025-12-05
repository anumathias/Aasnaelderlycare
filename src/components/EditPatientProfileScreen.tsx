import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { ArrowLeft, Mail, Phone, Calendar, MapPin, Globe, User, Save } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { toast } from "sonner@2.0.3";
import BottomNavBar from "./BottomNavBar";

export default function EditPatientProfileScreen() {
  const navigate = useNavigate();
  const location = useLocation();

  // Get current patient data from navigation state if available
  const currentPatient = location.state?.patient;

  // Available profile photos - elderly people
  const availablePhotos = [
    "https://images.unsplash.com/photo-1547199315-ddabe87428ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjQ0MjY2Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1664813495783-a7b19be83624?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjB3b21hbiUyMHNtaWxpbmd8ZW58MXx8fHwxNzY0MzI0Njk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1690237387955-14c31c80305c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY0MzkwNDQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1758686253859-8ef7e940096e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjBtYW4lMjBzbWlsaW5nfGVufDF8fHx8MTc2NDM1Njc1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1577897113051-1a0395bfc3e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGRlciUyMHdvbWFuJTIwaGFwcHl8ZW58MXx8fHwxNzY0NDMyNzExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1707854881046-ece47011d695?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGRlciUyMG1hbiUyMGhhcHB5fGVufDF8fHx8MTc2NDQzMjcxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  ];

  // Current profile photo state
  const [currentPhoto, setCurrentPhoto] = useState(
    currentPatient?.avatar || availablePhotos[0]
  );
  const [showPhotoSelector, setShowPhotoSelector] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: currentPatient?.name || "Mrs. Neelam Roy",
    age: currentPatient?.age || 75,
    gender: currentPatient?.gender || "Female",
    email: currentPatient?.email || "william230@example.com",
    phone: currentPatient?.phone || "+91 6756758985",
    birthday: currentPatient?.birthday || "15/01/2000",
    address: currentPatient?.address || "Flat no : 400 5th floor, Neem Hills Appartments, Hyderabad Telengana",
    language: currentPatient?.language || "English",
    condition: currentPatient?.condition || "Good"
  });

  // Update form when current patient changes
  useEffect(() => {
    if (currentPatient) {
      setFormData({
        name: currentPatient.name || "Mrs. Neelam Roy",
        age: currentPatient.age || 75,
        gender: currentPatient.gender || "Female",
        email: currentPatient.email || "william230@example.com",
        phone: currentPatient.phone || "+91 6756758985",
        birthday: currentPatient.birthday || "15/01/2000",
        address: currentPatient.address || "Flat no : 400 5th floor, Neem Hills Appartments, Hyderabad Telengana",
        language: currentPatient.language || "English",
        condition: currentPatient.condition || "Good"
      });
      setCurrentPhoto(currentPatient.avatar || availablePhotos[0]);
    }
  }, [currentPatient]);

  const handleInputChange = (field: string, value: string | number) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSaveChanges = () => {
    // Validate form data
    if (!formData.name.trim()) {
      toast.error("Please enter a name");
      return;
    }
    if (!formData.email.trim()) {
      toast.error("Please enter an email");
      return;
    }
    if (!formData.phone.trim()) {
      toast.error("Please enter a phone number");
      return;
    }

    // Create updated patient data (include the ID to match the patient in the list)
    const updatedPatient = {
      id: currentPatient?.id || 1,
      ...formData,
      avatar: currentPhoto
    };

    // Navigate back to patient profile screen with updated patient data
    navigate("/patient-profile", {
      state: { 
        patient: updatedPatient,
        showSuccessMessage: true 
      },
      replace: true
    });
  };

  return (
    <div className="bg-white h-screen w-screen overflow-hidden max-w-[393px] mx-auto flex flex-col">
      {/* Header with Back Button */}
      <div className="bg-white px-[20px] pt-[20px] pb-[16px] border-b border-[#E0E0E0] flex items-center justify-between">
        <button
          className="flex items-center justify-center size-[40px] cursor-pointer hover:bg-[#1F75BE]/10 rounded-full transition-all active:scale-95 border border-gray-200 hover:border-[#1F75BE] bg-white"
          onClick={() => navigate("/patient-profile", { state: { patient: currentPatient } })}
        >
          <ArrowLeft className="size-[20px] text-[#1F75BE]" />
        </button>
        <h1 className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-[#121314] absolute left-1/2 transform -translate-x-1/2">
          Edit Patient Profile
        </h1>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-[180px]">
        {/* Profile Photo Section */}
        <div className="px-[20px] pt-[24px] pb-[20px] border-b border-[#E0E0E0]">
          <div className="flex flex-col items-center">
            <div className="size-[120px] rounded-[24px] overflow-hidden border-2 border-[#1F75BE] mb-[16px] bg-gradient-to-br from-[#E3F2FD] to-[#BBDEFB] flex items-center justify-center">
              {currentPhoto ? (
                <ImageWithFallback
                  src={currentPhoto}
                  alt="Patient profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <User className="size-[60px] text-[#1F75BE]" />
              )}
            </div>
            <button
              onClick={() => setShowPhotoSelector(!showPhotoSelector)}
              className="px-[24px] py-[10px] bg-white border-2 border-[#1F75BE] rounded-[24px] hover:bg-[#E3F2FD] transition-all"
            >
              <span className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#1F75BE]">
                Change Photo
              </span>
            </button>
          </div>

          {/* Photo Selector */}
          {showPhotoSelector && (
            <div className="mt-[20px] bg-[#F7FBFF] rounded-[16px] p-[16px]">
              <p className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#121314] mb-[12px]">
                Select a photo:
              </p>
              <div className="grid grid-cols-3 gap-[12px]">
                {availablePhotos.map((photo, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentPhoto(photo);
                      setShowPhotoSelector(false);
                    }}
                    className={`size-[90px] rounded-[16px] overflow-hidden border-2 transition-all hover:scale-105 ${
                      currentPhoto === photo
                        ? "border-[#1F75BE] shadow-lg"
                        : "border-gray-200"
                    }`}
                  >
                    <ImageWithFallback
                      src={photo}
                      alt={`Photo option ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Form Fields */}
        <div className="px-[20px] pt-[24px] pb-[24px] space-y-[20px]">
          {/* Name */}
          <div>
            <label className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#121314] mb-[8px] block">
              Full Name
            </label>
            <div className="flex items-center gap-[12px] p-[16px] border border-[#E0E0E0] rounded-[12px] bg-white focus-within:border-[#1F75BE] transition-all">
              <User className="size-[20px] text-[#606060]" />
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="flex-1 font-['Roboto:Regular',sans-serif] text-[14px] text-[#121314] outline-none bg-transparent"
                placeholder="Enter full name"
              />
            </div>
          </div>

          {/* Age and Gender */}
          <div className="grid grid-cols-2 gap-[12px]">
            <div>
              <label className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#121314] mb-[8px] block">
                Age
              </label>
              <div className="flex items-center gap-[12px] p-[16px] border border-[#E0E0E0] rounded-[12px] bg-white focus-within:border-[#1F75BE] transition-all">
                <input
                  type="number"
                  value={formData.age}
                  onChange={(e) => handleInputChange("age", parseInt(e.target.value) || 0)}
                  className="flex-1 font-['Roboto:Regular',sans-serif] text-[14px] text-[#121314] outline-none bg-transparent"
                  placeholder="Age"
                />
              </div>
            </div>

            <div>
              <label className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#121314] mb-[8px] block">
                Gender
              </label>
              <div className="flex items-center gap-[12px] p-[16px] border border-[#E0E0E0] rounded-[12px] bg-white focus-within:border-[#1F75BE] transition-all">
                <select
                  value={formData.gender}
                  onChange={(e) => handleInputChange("gender", e.target.value)}
                  className="flex-1 font-['Roboto:Regular',sans-serif] text-[14px] text-[#121314] outline-none bg-transparent"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#121314] mb-[8px] block">
              Email
            </label>
            <div className="flex items-center gap-[12px] p-[16px] border border-[#E0E0E0] rounded-[12px] bg-white focus-within:border-[#1F75BE] transition-all">
              <Mail className="size-[20px] text-[#606060]" />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="flex-1 font-['Roboto:Regular',sans-serif] text-[14px] text-[#121314] outline-none bg-transparent"
                placeholder="Enter email"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#121314] mb-[8px] block">
              Phone
            </label>
            <div className="flex items-center gap-[12px] p-[16px] border border-[#E0E0E0] rounded-[12px] bg-white focus-within:border-[#1F75BE] transition-all">
              <Phone className="size-[20px] text-[#606060]" />
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="flex-1 font-['Roboto:Regular',sans-serif] text-[14px] text-[#121314] outline-none bg-transparent"
                placeholder="Enter phone number"
              />
            </div>
          </div>

          {/* Birthday */}
          <div>
            <label className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#121314] mb-[8px] block">
              Birthday
            </label>
            <div className="flex items-center gap-[12px] p-[16px] border border-[#E0E0E0] rounded-[12px] bg-white focus-within:border-[#1F75BE] transition-all">
              <Calendar className="size-[20px] text-[#606060]" />
              <input
                type="text"
                value={formData.birthday}
                onChange={(e) => handleInputChange("birthday", e.target.value)}
                className="flex-1 font-['Roboto:Regular',sans-serif] text-[14px] text-[#121314] outline-none bg-transparent"
                placeholder="DD/MM/YYYY"
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#121314] mb-[8px] block">
              Address
            </label>
            <div className="flex items-start gap-[12px] p-[16px] border border-[#E0E0E0] rounded-[12px] bg-white focus-within:border-[#1F75BE] transition-all">
              <MapPin className="size-[20px] text-[#606060] mt-[2px]" />
              <textarea
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                className="flex-1 font-['Roboto:Regular',sans-serif] text-[14px] text-[#121314] outline-none bg-transparent resize-none min-h-[80px]"
                placeholder="Enter address"
              />
            </div>
          </div>

          {/* Language */}
          <div>
            <label className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#121314] mb-[8px] block">
              Language
            </label>
            <div className="flex items-center gap-[12px] p-[16px] border border-[#E0E0E0] rounded-[12px] bg-white focus-within:border-[#1F75BE] transition-all">
              <Globe className="size-[20px] text-[#606060]" />
              <input
                type="text"
                value={formData.language}
                onChange={(e) => handleInputChange("language", e.target.value)}
                className="flex-1 font-['Roboto:Regular',sans-serif] text-[14px] text-[#121314] outline-none bg-transparent"
                placeholder="Enter language"
              />
            </div>
          </div>

          {/* Condition */}
          <div>
            <label className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#121314] mb-[8px] block">
              Health Condition
            </label>
            <select
              value={formData.condition}
              onChange={(e) => handleInputChange("condition", e.target.value)}
              className="w-full px-[16px] py-[16px] border border-[#E0E0E0] rounded-[12px] font-['Roboto:Regular',sans-serif] text-[14px] text-[#121314] focus:border-[#1F75BE] focus:outline-none transition-all bg-white"
            >
              <option value="Good">Good</option>
              <option value="Need Attention">Need Attention</option>
              <option value="Critical">Critical</option>
              <option value="Stable">Stable</option>
            </select>
          </div>
        </div>
      </div>

      {/* Fixed Save Button - Above Bottom Navigation */}
      <div className="fixed bottom-[80px] left-0 right-0 bg-white border-t border-[#E0E0E0] px-[20px] py-[16px] max-w-[393px] mx-auto z-40">
        <button
          onClick={handleSaveChanges}
          className="w-full py-[16px] bg-[#1F75BE] rounded-[24px] hover:bg-[#1a5d9a] transition-all active:scale-[0.98] flex items-center justify-center gap-[12px] shadow-lg"
        >
          <Save className="size-[20px] text-white" />
          <span className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-white">
            Save Changes
          </span>
        </button>
      </div>

      {/* Bottom Navigation */}
      <BottomNavBar />
    </div>
  );
}
