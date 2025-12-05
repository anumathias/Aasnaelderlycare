import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { ArrowLeft, Mail, Phone, Calendar, MapPin, Globe, User, Save } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import BottomNavBar from "./BottomNavBar";
import imgProfile1 from "figma:asset/a0297565d8b9774aa5e9c49dc872a1b15743a39b.png";
import imgProfile2 from "figma:asset/e3d941e79c12c35332dfabb2ae719624289d8a6b.png";
import imgProfile3 from "figma:asset/d150e50737b8d0a7ca19495a18c48242efb49e1e.png";

export default function EditProfileScreen() {
  const navigate = useNavigate();
  const location = useLocation();

  // Get current profile data from navigation state if available
  const currentProfile = location.state?.currentProfile;

  // Default profile photo URL - matches ProfileScreen
  const defaultPhotoUrl = "https://images.unsplash.com/photo-1532272278764-53cd1fe53f72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDM5MjIwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  // Available profile photos - younger people
  const availablePhotos = [
    defaultPhotoUrl,
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3MzMwNTcyNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTczMzA1NzI3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3MzMwNTcyNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHx3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTczMzA1NzI3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3MzMwNTcyNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  ];

  // Current profile photo state
  const [currentPhoto, setCurrentPhoto] = useState(
    currentProfile?.profilePhoto || defaultPhotoUrl
  );

  // Initial user data
  const [formData, setFormData] = useState({
    name: currentProfile?.name || "William Roy",
    age: currentProfile?.age || "24",
    gender: currentProfile?.gender || "Male",
    email: currentProfile?.email || "william230@example.com",
    phone: currentProfile?.phone || "+91 6756758985",
    birthday: currentProfile?.birthday || "15/01/2000",
    address: currentProfile?.address || "Flat no : 400 5th floor, Neem Hills Appartments, Hyderabad Telengana",
    language: currentProfile?.language || "English"
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const [showPhotoSelector, setShowPhotoSelector] = useState(false);

  // Function to change profile photo randomly
  const handleChangePhoto = () => {
    setShowPhotoSelector(!showPhotoSelector);
  };

  const selectPhoto = (photoUrl: string) => {
    setCurrentPhoto(photoUrl);
    setShowPhotoSelector(false);
    // Immediately save to localStorage and notify all components
    localStorage.setItem('profilePhoto', photoUrl);
    window.dispatchEvent(new Event('profilePhotoChanged'));
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ""
      }));
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
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validateForm()) {
      // Save profile photo to localStorage
      localStorage.setItem('profilePhoto', currentPhoto);
      // Dispatch custom event so all components update
      window.dispatchEvent(new Event('profilePhotoChanged'));
      
      // Save the updated data and navigate back to profile with state
      navigate("/profile", { 
        state: { 
          updatedProfile: {
            ...formData,
            profilePhoto: currentPhoto
          },
          showSuccessMessage: true
        } 
      });
    }
  };

  return (
    <div className="bg-white h-screen w-screen overflow-hidden max-w-[393px] mx-auto flex flex-col">
      {/* Header with Back Button */}
      <div className="bg-white px-[20px] pt-[20px] pb-[16px] border-b border-[#E0E0E0]">
        <button
          className="flex items-center justify-center size-[40px] cursor-pointer hover:bg-[#1F75BE]/10 rounded-full transition-all active:scale-95 border border-gray-200 hover:border-[#1F75BE] bg-white"
          onClick={() => navigate("/profile")}
        >
          <ArrowLeft className="size-[20px] text-[#1F75BE]" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-[200px]">
        {/* Profile Header */}
        <div className="px-[20px] pt-[24px] pb-[20px]">
          <div className="flex flex-col items-center mb-[20px]">
            <div className="size-[100px] rounded-[24px] overflow-hidden border-2 border-[#1F75BE] shrink-0 mb-[12px]">
              <ImageWithFallback
                src={currentPhoto}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <button
              onClick={handleChangePhoto}
              className="px-[20px] py-[8px] bg-[#1F75BE] text-white rounded-[12px] hover:bg-[#1A5F9A] transition-all active:scale-95 mb-[16px]"
            >
              <span className="font-['Roboto:Medium',sans-serif] text-[14px]">
                {showPhotoSelector ? "Hide Photos" : "Change Photo"}
              </span>
            </button>

            {/* Photo Selector */}
            {showPhotoSelector && (
              <div className="w-full mb-[16px] bg-[#F7FBFF] rounded-[16px] p-[16px]">
                <p className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#121314] mb-[12px] text-center">
                  Select a photo:
                </p>
                <div className="grid grid-cols-3 gap-[12px]">
                  {availablePhotos.map((photo, index) => (
                    <button
                      key={index}
                      onClick={() => selectPhoto(photo)}
                      className={`size-[80px] rounded-[12px] overflow-hidden border-2 transition-all ${
                        currentPhoto === photo 
                          ? 'border-[#1F75BE] scale-95' 
                          : 'border-[#E0E0E0] hover:border-[#1F75BE]'
                      }`}
                    >
                      <ImageWithFallback
                        src={photo}
                        alt={`Option ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="text-center mb-[16px]">
              <h1 className="font-['Poppins:SemiBold',sans-serif] text-[22px] text-[#121314] mb-[4px]">
                Edit Profile
              </h1>
              <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#606060]">
                Update your information
              </p>
            </div>
          </div>

          {/* View/Edit Profile Tabs */}
          <div className="flex gap-[12px] mb-[24px]">
            <button
              onClick={() => navigate("/profile")}
              className="flex-1 py-[12px] bg-white border border-[#E0E0E0] shadow-sm rounded-t-[8px] hover:bg-[#F5F5F5] transition-all"
            >
              <span className="font-['Roboto:Medium',sans-serif] text-[16px] text-[#121314]">
                View Profile
              </span>
            </button>
            <button className="flex-1 py-[12px] bg-[#F7FBFF] border-t-4 border-[#1F75BE] shadow-sm rounded-t-[8px]">
              <span className="font-['Poppins:Medium',sans-serif] text-[16px] text-[#121314]">
                EDIT Profile
              </span>
            </button>
          </div>
        </div>

        {/* Edit Form */}
        <div className="px-[20px] pb-[24px]">
          <div className="bg-white rounded-[12px] border border-[#E0E0E0] shadow-sm overflow-hidden">
            {/* Name */}
            <div className="p-[16px] border-b border-[#E0E0E0]">
              <div className="flex items-center gap-[12px] mb-[8px]">
                <div className="size-[40px] rounded-[10px] bg-[#E3F2FD] flex items-center justify-center shrink-0">
                  <User className="size-[20px] text-[#48A2E8]" />
                </div>
                <label className="font-['Roboto:Medium',sans-serif] text-[14px] text-[#606060]">
                  Full Name
                </label>
              </div>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="w-full px-[12px] py-[10px] border border-[#E0E0E0] rounded-[8px] font-['Roboto:Regular',sans-serif] text-[14px] text-[#121314] focus:border-[#1F75BE] focus:outline-none transition-all"
                placeholder="Enter your full name"
              />
              {errors.name && (
                <p className="mt-[4px] font-['Roboto:Regular',sans-serif] text-[12px] text-red-500">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Age & Gender */}
            <div className="p-[16px] border-b border-[#E0E0E0]">
              <div className="flex gap-[12px]">
                <div className="flex-1">
                  <label className="font-['Roboto:Medium',sans-serif] text-[14px] text-[#606060] mb-[8px] block">
                    Age
                  </label>
                  <input
                    type="number"
                    value={formData.age}
                    onChange={(e) => handleInputChange("age", e.target.value)}
                    className="w-full px-[12px] py-[10px] border border-[#E0E0E0] rounded-[8px] font-['Roboto:Regular',sans-serif] text-[14px] text-[#121314] focus:border-[#1F75BE] focus:outline-none transition-all"
                    placeholder="Age"
                  />
                  {errors.age && (
                    <p className="mt-[4px] font-['Roboto:Regular',sans-serif] text-[12px] text-red-500">
                      {errors.age}
                    </p>
                  )}
                </div>
                <div className="flex-1">
                  <label className="font-['Roboto:Medium',sans-serif] text-[14px] text-[#606060] mb-[8px] block">
                    Gender
                  </label>
                  <select
                    value={formData.gender}
                    onChange={(e) => handleInputChange("gender", e.target.value)}
                    className="w-full px-[12px] py-[10px] border border-[#E0E0E0] rounded-[8px] font-['Roboto:Regular',sans-serif] text-[14px] text-[#121314] focus:border-[#1F75BE] focus:outline-none transition-all bg-white"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="p-[16px] border-b border-[#E0E0E0]">
              <div className="flex items-center gap-[12px] mb-[8px]">
                <div className="size-[40px] rounded-[10px] bg-[#E3F2FD] flex items-center justify-center shrink-0">
                  <Mail className="size-[20px] text-[#48A2E8]" />
                </div>
                <label className="font-['Roboto:Medium',sans-serif] text-[14px] text-[#606060]">
                  Email Address
                </label>
              </div>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full px-[12px] py-[10px] border border-[#E0E0E0] rounded-[8px] font-['Roboto:Regular',sans-serif] text-[14px] text-[#121314] focus:border-[#1F75BE] focus:outline-none transition-all"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="mt-[4px] font-['Roboto:Regular',sans-serif] text-[12px] text-red-500">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Phone */}
            <div className="p-[16px] border-b border-[#E0E0E0]">
              <div className="flex items-center gap-[12px] mb-[8px]">
                <div className="size-[40px] rounded-[10px] bg-[#E8F5E9] flex items-center justify-center shrink-0">
                  <Phone className="size-[20px] text-[#3DAB51]" />
                </div>
                <label className="font-['Roboto:Medium',sans-serif] text-[14px] text-[#606060]">
                  Phone Number
                </label>
              </div>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="w-full px-[12px] py-[10px] border border-[#E0E0E0] rounded-[8px] font-['Roboto:Regular',sans-serif] text-[14px] text-[#121314] focus:border-[#1F75BE] focus:outline-none transition-all"
                placeholder="Enter your phone number"
              />
              {errors.phone && (
                <p className="mt-[4px] font-['Roboto:Regular',sans-serif] text-[12px] text-red-500">
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Birthday */}
            <div className="p-[16px] border-b border-[#E0E0E0]">
              <div className="flex items-center gap-[12px] mb-[8px]">
                <div className="size-[40px] rounded-[10px] bg-[#FCE4EC] flex items-center justify-center shrink-0">
                  <Calendar className="size-[20px] text-[#E540C7]" />
                </div>
                <label className="font-['Roboto:Medium',sans-serif] text-[14px] text-[#606060]">
                  Date of Birth
                </label>
              </div>
              <input
                type="text"
                value={formData.birthday}
                onChange={(e) => handleInputChange("birthday", e.target.value)}
                className="w-full px-[12px] py-[10px] border border-[#E0E0E0] rounded-[8px] font-['Roboto:Regular',sans-serif] text-[14px] text-[#121314] focus:border-[#1F75BE] focus:outline-none transition-all"
                placeholder="DD/MM/YYYY"
              />
            </div>

            {/* Address */}
            <div className="p-[16px] border-b border-[#E0E0E0]">
              <div className="flex items-start gap-[12px] mb-[8px]">
                <div className="size-[40px] rounded-[10px] bg-[#E3F2FD] flex items-center justify-center shrink-0">
                  <MapPin className="size-[20px] text-[#48A2E8]" />
                </div>
                <label className="font-['Roboto:Medium',sans-serif] text-[14px] text-[#606060]">
                  Address
                </label>
              </div>
              <textarea
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                rows={3}
                className="w-full px-[12px] py-[10px] border border-[#E0E0E0] rounded-[8px] font-['Roboto:Regular',sans-serif] text-[14px] text-[#121314] focus:border-[#1F75BE] focus:outline-none transition-all resize-none"
                placeholder="Enter your full address"
              />
              {errors.address && (
                <p className="mt-[4px] font-['Roboto:Regular',sans-serif] text-[12px] text-red-500">
                  {errors.address}
                </p>
              )}
            </div>

            {/* Language */}
            <div className="p-[16px]">
              <div className="flex items-center gap-[12px] mb-[8px]">
                <div className="size-[40px] rounded-[10px] bg-[#F3E5F5] flex items-center justify-center shrink-0">
                  <Globe className="size-[20px] text-[#9C27B0]" />
                </div>
                <label className="font-['Roboto:Medium',sans-serif] text-[14px] text-[#606060]">
                  Preferred Language
                </label>
              </div>
              <select
                value={formData.language}
                onChange={(e) => handleInputChange("language", e.target.value)}
                className="w-full px-[12px] py-[10px] border border-[#E0E0E0] rounded-[8px] font-['Roboto:Regular',sans-serif] text-[14px] text-[#121314] focus:border-[#1F75BE] focus:outline-none transition-all bg-white"
              >
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                <option value="Telugu">Telugu</option>
                <option value="Tamil">Tamil</option>
                <option value="Kannada">Kannada</option>
                <option value="Malayalam">Malayalam</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Save Button - positioned above BottomNavBar */}
      <div className="absolute bottom-[80px] left-0 right-0 bg-white border-t border-[#E0E0E0] px-[20px] py-[16px] z-40">
        <button
          onClick={handleSave}
          className="w-full bg-[#1F75BE] rounded-[12px] py-[14px] hover:bg-[#1A5F9A] transition-all active:scale-95 flex items-center justify-center gap-[8px]"
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
