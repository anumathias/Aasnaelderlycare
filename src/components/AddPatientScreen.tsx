import { useNavigate } from "react-router";
import { ArrowLeft, User, Mail, Phone, Calendar, MapPin, Globe, Upload, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner@2.0.3";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import BottomNavBar from "./BottomNavBar";

export default function AddPatientScreen() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "Male",
    email: "",
    phone: "",
    birthday: "",
    address: "",
    language: "English",
    condition: "Good"
  });

  const [currentPhoto, setCurrentPhoto] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loadingPhoto, setLoadingPhoto] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }
  };

  const handlePhotoUpload = async () => {
    setLoadingPhoto(true);
    try {
      // Array of verified Unsplash URLs for elderly person photos
      const elderlyPhotos = [
        "https://images.unsplash.com/photo-1608128441391-a5f606a0013f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwcGVyc29uJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY0NDMzNDc5fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1619165915846-43d3b9445823?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjBjaXRpemVuJTIwc21pbGluZ3xlbnwxfHx8fDE3NjQ0MzM1NDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1547199315-ddabe87428ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjQ0MjY2Njl8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1690237387955-14c31c80305c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY0MzkwNDQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1729758812522-c14c6f64392a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGRlciUyMGFkdWx0JTIwc21pbGluZ3xlbnwxfHx8fDE3NjQ0MzM1NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
      ];
      
      // Select a random photo from the array
      const randomPhoto = elderlyPhotos[Math.floor(Math.random() * elderlyPhotos.length)];
      
      setCurrentPhoto(randomPhoto);
      toast.success("Photo added!", {
        description: "Random elderly person photo loaded",
        duration: 2000,
      });
    } catch (error) {
      toast.error("Failed to load photo", {
        description: "Please try again",
        duration: 2000,
      });
    } finally {
      setLoadingPhoto(false);
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.age.trim()) {
      newErrors.age = "Age is required";
    } else if (isNaN(Number(formData.age)) || Number(formData.age) <= 0) {
      newErrors.age = "Please enter a valid age";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    if (!formData.birthday.trim()) {
      newErrors.birthday = "Birthday is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (!validateForm()) {
      toast.error("Please fill in all required fields", {
        description: "Some fields are missing or invalid",
        duration: 3000,
      });
      return;
    }

    // Create new patient data with a unique ID
    const newPatient = {
      id: Date.now(), // Use timestamp as unique ID
      ...formData,
      age: Number(formData.age),
      avatar: currentPhoto
    };

    // Navigate back to profile screen with new patient data
    navigate("/profile", {
      state: { 
        newPatient,
        showPatientAddedMessage: true 
      },
      replace: true
    });
  };

  return (
    <div className="bg-white h-screen w-screen overflow-hidden max-w-[393px] mx-auto flex flex-col">
      {/* Header with Back Button */}
      <div className="bg-white px-[20px] pt-[20px] pb-[16px] border-b border-[#E0E0E0]">
        <div className="flex items-center gap-[16px]">
          <button
            className="flex items-center justify-center size-[40px] cursor-pointer hover:bg-[#1F75BE]/10 rounded-full transition-all active:scale-95 border border-gray-200 hover:border-[#1F75BE] bg-white"
            onClick={() => navigate("/profile")}
          >
            <ArrowLeft className="size-[20px] text-[#1F75BE]" />
          </button>
          <h1 className="font-['Poppins:SemiBold',sans-serif] text-[20px] text-[#121314]">
            Add New Patient
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="px-[20px] pt-[24px] pb-[100px]">
          {/* Profile Photo Section */}
          <div className="flex flex-col items-center mb-[32px]">
            <div className="size-[120px] rounded-[24px] overflow-hidden border-2 border-[#1F75BE] mb-[16px] bg-gradient-to-br from-[#E3F2FD] to-[#BBDEFB] flex items-center justify-center">
              {currentPhoto ? (
                <ImageWithFallback
                  src={currentPhoto}
                  alt="Patient photo"
                  className="w-full h-full object-cover"
                />
              ) : (
                <User className="size-[50px] text-[#1F75BE]" />
              )}
            </div>
            <button 
              onClick={handlePhotoUpload}
              disabled={loadingPhoto}
              className="flex items-center gap-[8px] px-[20px] py-[10px] bg-white border-2 border-[#1F75BE] rounded-[24px] cursor-pointer hover:bg-[#E3F2FD] transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loadingPhoto ? (
                <Loader2 className="size-[18px] text-[#1F75BE] animate-spin" />
              ) : (
                <Upload className="size-[18px] text-[#1F75BE]" />
              )}
              <span className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#1F75BE]">
                {loadingPhoto ? "Loading..." : "Upload Photo"}
              </span>
            </button>
          </div>

          {/* Form Fields */}
          <div className="space-y-[20px]">
            {/* Name */}
            <div>
              <label className="block font-['Poppins:Medium',sans-serif] text-[14px] text-[#121314] mb-[8px]">
                Full Name *
              </label>
              <div className="relative">
                <User className="absolute left-[16px] top-1/2 -translate-y-1/2 size-[20px] text-[#606060]" />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Enter full name"
                  className={`w-full pl-[48px] pr-[16px] py-[14px] border ${
                    errors.name ? "border-red-500" : "border-[#E0E0E0]"
                  } rounded-[12px] font-['Roboto:Regular',sans-serif] text-[15px] text-[#121314] placeholder:text-[#A0A0A0] focus:outline-none focus:border-[#1F75BE] transition-all`}
                />
              </div>
              {errors.name && (
                <p className="mt-[4px] text-[12px] text-red-500">{errors.name}</p>
              )}
            </div>

            {/* Age and Gender Row */}
            <div className="grid grid-cols-2 gap-[12px]">
              {/* Age */}
              <div>
                <label className="block font-['Poppins:Medium',sans-serif] text-[14px] text-[#121314] mb-[8px]">
                  Age *
                </label>
                <input
                  type="number"
                  value={formData.age}
                  onChange={(e) => handleInputChange("age", e.target.value)}
                  placeholder="Age"
                  className={`w-full px-[16px] py-[14px] border ${
                    errors.age ? "border-red-500" : "border-[#E0E0E0]"
                  } rounded-[12px] font-['Roboto:Regular',sans-serif] text-[15px] text-[#121314] placeholder:text-[#A0A0A0] focus:outline-none focus:border-[#1F75BE] transition-all`}
                />
                {errors.age && (
                  <p className="mt-[4px] text-[12px] text-red-500">{errors.age}</p>
                )}
              </div>

              {/* Gender */}
              <div>
                <label className="block font-['Poppins:Medium',sans-serif] text-[14px] text-[#121314] mb-[8px]">
                  Gender
                </label>
                <select
                  value={formData.gender}
                  onChange={(e) => handleInputChange("gender", e.target.value)}
                  className="w-full px-[16px] py-[14px] border border-[#E0E0E0] rounded-[12px] font-['Roboto:Regular',sans-serif] text-[15px] text-[#121314] focus:outline-none focus:border-[#1F75BE] transition-all appearance-none bg-white cursor-pointer"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block font-['Poppins:Medium',sans-serif] text-[14px] text-[#121314] mb-[8px]">
                Email *
              </label>
              <div className="relative">
                <Mail className="absolute left-[16px] top-1/2 -translate-y-1/2 size-[20px] text-[#606060]" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="Enter email address"
                  className={`w-full pl-[48px] pr-[16px] py-[14px] border ${
                    errors.email ? "border-red-500" : "border-[#E0E0E0]"
                  } rounded-[12px] font-['Roboto:Regular',sans-serif] text-[15px] text-[#121314] placeholder:text-[#A0A0A0] focus:outline-none focus:border-[#1F75BE] transition-all`}
                />
              </div>
              {errors.email && (
                <p className="mt-[4px] text-[12px] text-red-500">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block font-['Poppins:Medium',sans-serif] text-[14px] text-[#121314] mb-[8px]">
                Phone Number *
              </label>
              <div className="relative">
                <Phone className="absolute left-[16px] top-1/2 -translate-y-1/2 size-[20px] text-[#606060]" />
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="Enter phone number"
                  className={`w-full pl-[48px] pr-[16px] py-[14px] border ${
                    errors.phone ? "border-red-500" : "border-[#E0E0E0]"
                  } rounded-[12px] font-['Roboto:Regular',sans-serif] text-[15px] text-[#121314] placeholder:text-[#A0A0A0] focus:outline-none focus:border-[#1F75BE] transition-all`}
                />
              </div>
              {errors.phone && (
                <p className="mt-[4px] text-[12px] text-red-500">{errors.phone}</p>
              )}
            </div>

            {/* Birthday */}
            <div>
              <label className="block font-['Poppins:Medium',sans-serif] text-[14px] text-[#121314] mb-[8px]">
                Birthday *
              </label>
              <div className="relative">
                <Calendar className="absolute left-[16px] top-1/2 -translate-y-1/2 size-[20px] text-[#606060]" />
                <input
                  type="text"
                  value={formData.birthday}
                  onChange={(e) => handleInputChange("birthday", e.target.value)}
                  placeholder="DD/MM/YYYY"
                  className={`w-full pl-[48px] pr-[16px] py-[14px] border ${
                    errors.birthday ? "border-red-500" : "border-[#E0E0E0]"
                  } rounded-[12px] font-['Roboto:Regular',sans-serif] text-[15px] text-[#121314] placeholder:text-[#A0A0A0] focus:outline-none focus:border-[#1F75BE] transition-all`}
                />
              </div>
              {errors.birthday && (
                <p className="mt-[4px] text-[12px] text-red-500">{errors.birthday}</p>
              )}
            </div>

            {/* Address */}
            <div>
              <label className="block font-['Poppins:Medium',sans-serif] text-[14px] text-[#121314] mb-[8px]">
                Address
              </label>
              <div className="relative">
                <MapPin className="absolute left-[16px] top-[16px] size-[20px] text-[#606060]" />
                <textarea
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  placeholder="Enter full address"
                  rows={3}
                  className="w-full pl-[48px] pr-[16px] py-[14px] border border-[#E0E0E0] rounded-[12px] font-['Roboto:Regular',sans-serif] text-[15px] text-[#121314] placeholder:text-[#A0A0A0] focus:outline-none focus:border-[#1F75BE] transition-all resize-none"
                />
              </div>
            </div>

            {/* Language */}
            <div>
              <label className="block font-['Poppins:Medium',sans-serif] text-[14px] text-[#121314] mb-[8px]">
                Preferred Language
              </label>
              <div className="relative">
                <Globe className="absolute left-[16px] top-1/2 -translate-y-1/2 size-[20px] text-[#606060]" />
                <select
                  value={formData.language}
                  onChange={(e) => handleInputChange("language", e.target.value)}
                  className="w-full pl-[48px] pr-[16px] py-[14px] border border-[#E0E0E0] rounded-[12px] font-['Roboto:Regular',sans-serif] text-[15px] text-[#121314] focus:outline-none focus:border-[#1F75BE] transition-all appearance-none bg-white cursor-pointer"
                >
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                  <option value="Telugu">Telugu</option>
                  <option value="Tamil">Tamil</option>
                  <option value="Bengali">Bengali</option>
                  <option value="Marathi">Marathi</option>
                </select>
              </div>
            </div>

            {/* Condition */}
            <div>
              <label className="block font-['Poppins:Medium',sans-serif] text-[14px] text-[#121314] mb-[8px]">
                Health Condition
              </label>
              <div className="relative">
                <select
                  value={formData.condition}
                  onChange={(e) => handleInputChange("condition", e.target.value)}
                  className="w-full px-[16px] py-[14px] border border-[#E0E0E0] rounded-[12px] font-['Roboto:Regular',sans-serif] text-[15px] text-[#121314] focus:outline-none focus:border-[#1F75BE] transition-all appearance-none bg-white cursor-pointer"
                >
                  <option value="Good">Good</option>
                  <option value="Need Attention">Need Attention</option>
                  <option value="Need Immediate Assistance">Need Immediate Assistance</option>
                  <option value="Critical">Critical</option>
                </select>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <button
            onClick={handleSave}
            className="w-full mt-[32px] mb-[20px] py-[16px] bg-[#1F75BE] rounded-[24px] hover:bg-[#1a5d9a] transition-all active:scale-[0.98] shadow-md"
          >
            <span className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-white">
              Add Patient
            </span>
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavBar />
    </div>
  );
}
