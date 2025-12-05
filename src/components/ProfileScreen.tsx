import { useNavigate, useLocation } from "react-router";
import { ArrowLeft, Mail, Phone, Calendar, MapPin, Globe, Plus, ChevronRight, User, Trash2, LogOut } from "lucide-react";
import imgAvatars3DAvatar13 from "figma:asset/9cad12d796c14c26b67c6b770b814e923e0d9d91.png";
import imgEllipse1133 from "figma:asset/4ecc9cd0fda8c368a90e752bca859166e34c26a7.png";
import { useEffect, useState } from "react";
import { toast } from "sonner@2.0.3";
import BottomNavBar from "./BottomNavBar";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function ProfileScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get updated profile data from navigation state if available
  const updatedProfile = location.state?.updatedProfile;
  const showSuccessMessage = location.state?.showSuccessMessage;

  // Initialize user info from localStorage or use default
  const [userInfo, setUserInfo] = useState(() => {
    const savedUserInfo = localStorage.getItem('userInfo');
    if (savedUserInfo) {
      return JSON.parse(savedUserInfo);
    }
    return {
      name: "William Roy",
      age: "24",
      gender: "Male",
      email: "william230@example.com",
      phone: "+91 6756758985",
      birthday: "15/01/2000",
      address: "Flat no : 400 5th floor, Neem Hills Appartments, Hyderabad Telengana",
      language: "English"
    };
  });

  // Default profile photo URL
  const defaultProfilePhoto = "https://images.unsplash.com/photo-1532272278764-53cd1fe53f72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDM5MjIwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  const [profilePhoto, setProfilePhoto] = useState(() => {
    const savedProfilePhoto = localStorage.getItem('profilePhoto');
    // Check if saved photo is valid
    if (savedProfilePhoto && 
        savedProfilePhoto !== 'undefined' && 
        savedProfilePhoto !== 'null' &&
        savedProfilePhoto.startsWith('http')) {
      return savedProfilePhoto;
    }
    // If no valid photo, clear localStorage and use default
    localStorage.removeItem('profilePhoto');
    localStorage.setItem('profilePhoto', defaultProfilePhoto);
    return defaultProfilePhoto;
  });

  // Save user info to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  }, [userInfo]);

  // Save profile photo to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('profilePhoto', profilePhoto);
    // Dispatch custom event so all components update
    window.dispatchEvent(new Event('profilePhotoChanged'));
  }, [profilePhoto]);

  // Update user info when navigating back from edit with changes
  useEffect(() => {
    if (updatedProfile) {
      setUserInfo({
        name: updatedProfile.name,
        age: updatedProfile.age,
        gender: updatedProfile.gender,
        email: updatedProfile.email,
        phone: updatedProfile.phone,
        birthday: updatedProfile.birthday,
        address: updatedProfile.address,
        language: updatedProfile.language
      });
      setProfilePhoto(updatedProfile.profilePhoto);
    }
  }, [updatedProfile]);

  // Show success toast when changes are saved
  useEffect(() => {
    if (showSuccessMessage) {
      toast.success("Profile updated successfully!", {
        description: "Your changes have been saved.",
        duration: 3000,
      });
      // Clear the state to prevent toast showing again on re-render
      window.history.replaceState({}, document.title);
    }
  }, [showSuccessMessage]);

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

  // Save to localStorage whenever linkedPatients changes
  useEffect(() => {
    localStorage.setItem('linkedPatients', JSON.stringify(linkedPatients));
  }, [linkedPatients]);

  // Update patient data when coming back from edit
  const updatedPatient = location.state?.updatedPatient;
  const newPatient = location.state?.newPatient;
  const showPatientAddedMessage = location.state?.showPatientAddedMessage;
  
  useEffect(() => {
    if (updatedPatient) {
      setLinkedPatients((prevPatients) =>
        prevPatients.map((patient) =>
          patient.id === updatedPatient.id
            ? { ...patient, ...updatedPatient }
            : patient
        )
      );
      // Show success toast
      toast.success("Patient profile updated successfully!", {
        description: "Changes have been saved.",
        duration: 3000,
      });
      // Clear the state
      window.history.replaceState({}, document.title);
    }
  }, [updatedPatient]);

  // Add new patient when coming back from add screen
  useEffect(() => {
    if (newPatient) {
      setLinkedPatients((prevPatients) => [newPatient, ...prevPatients]);
      
      if (showPatientAddedMessage) {
        toast.success("Patient added successfully!", {
          description: `${newPatient.name} has been added to your linked patients.`,
          duration: 3000,
        });
      }
      // Clear the state
      window.history.replaceState({}, document.title);
    }
  }, [newPatient, showPatientAddedMessage]);

  // Handle patient deletion
  const handleDeletePatient = (e: React.MouseEvent, patientId: number, patientName: string) => {
    e.stopPropagation(); // Prevent navigation when clicking delete
    
    if (window.confirm(`Are you sure you want to remove ${patientName} from your linked patients?`)) {
      const updatedPatients = linkedPatients.filter((p) => p.id !== patientId);
      setLinkedPatients(updatedPatients);
      localStorage.setItem('linkedPatients', JSON.stringify(updatedPatients));
      
      toast.success("Patient removed successfully!", {
        description: `${patientName} has been removed from your linked patients.`,
        duration: 3000,
      });
    }
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      // Clear login status
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('userEmail');
      
      toast.success("Logged out successfully!", {
        duration: 2000
      });
      
      setTimeout(() => {
        navigate("/");
      }, 500);
    }
  };

  return (
    <div className="bg-white h-screen w-screen overflow-hidden max-w-[393px] mx-auto flex flex-col">
      {/* Header with Back Button and Logout */}
      <div className="bg-white px-[20px] pt-[20px] pb-[16px] border-b border-[#E0E0E0]">
        <div className="flex items-center justify-between">
          <button
            className="flex items-center justify-center size-[40px] cursor-pointer hover:bg-[#1F75BE]/10 rounded-full transition-all active:scale-95 border border-gray-200 hover:border-[#1F75BE] bg-white"
            onClick={() => navigate("/home")}
          >
            <ArrowLeft className="size-[20px] text-[#1F75BE]" />
          </button>
          
          <button
            className="flex items-center justify-center size-[40px] cursor-pointer hover:bg-red-50 rounded-full transition-all active:scale-95 border border-gray-200 hover:border-red-500 bg-white group"
            onClick={handleLogout}
            title="Logout"
          >
            <LogOut className="size-[20px] text-red-500 group-hover:text-red-600" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-[120px]">
        {/* Profile Header */}
        <div className="px-[20px] pt-[24px] pb-[20px]">
          <div className="flex items-center gap-[20px] mb-[20px]">
            <div className="size-[100px] rounded-[24px] overflow-hidden border-2 border-[#1F75BE] shrink-0 bg-white">
              <img
                src={profilePhoto}
                alt={userInfo.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  console.error('Image failed to load:', profilePhoto);
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    parent.style.background = 'linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%)';
                    parent.style.display = 'flex';
                    parent.style.alignItems = 'center';
                    parent.style.justifyContent = 'center';
                    parent.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#1F75BE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>';
                  }
                }}
                onLoad={() => console.log('Image loaded successfully:', profilePhoto)}
              />
            </div>
            <div>
              <h1 className="font-['Poppins:SemiBold',sans-serif] text-[22px] text-[#121314] mb-[4px]">
                {userInfo.name}
              </h1>
              <p className="font-['Roboto:Regular',sans-serif] text-[16px] text-[#606060]">
                {userInfo.age} y | {userInfo.gender}
              </p>
            </div>
          </div>

          {/* View/Edit Profile Tabs */}
          <div className="flex gap-[12px] mb-[24px]">
            <button className="flex-1 py-[12px] bg-[#F7FBFF] border-t-4 border-[#1F75BE] shadow-sm rounded-t-[8px]">
              <span className="font-['Poppins:Medium',sans-serif] text-[16px] text-[#121314]">
                View Profile
              </span>
            </button>
            <button
              onClick={() => navigate("/edit-profile", { 
                state: { 
                  currentProfile: {
                    ...userInfo,
                    profilePhoto: profilePhoto
                  }
                } 
              })}
              className="flex-1 py-[12px] bg-white border border-[#E0E0E0] shadow-sm rounded-t-[8px] hover:bg-[#F5F5F5] transition-all"
            >
              <span className="font-['Roboto:Medium',sans-serif] text-[16px] text-[#121314]">
                EDIT Profile
              </span>
            </button>
          </div>
        </div>

        {/* User Information */}
        <div className="px-[20px] pb-[24px]">
          <div className="bg-white rounded-[12px] border border-[#E0E0E0] shadow-sm overflow-hidden">
            {/* Email */}
            <div className="flex items-center gap-[12px] p-[16px] border-b border-[#E0E0E0]">
              <div className="size-[40px] rounded-[10px] bg-[#E3F2FD] flex items-center justify-center shrink-0">
                <Mail className="size-[20px] text-[#48A2E8]" />
              </div>
              <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#121314] flex-1">
                {userInfo.email}
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-[12px] p-[16px] border-b border-[#E0E0E0]">
              <div className="size-[40px] rounded-[10px] bg-[#E8F5E9] flex items-center justify-center shrink-0">
                <Phone className="size-[20px] text-[#3DAB51]" />
              </div>
              <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#121314]">
                {userInfo.phone}
              </p>
            </div>

            {/* Birthday */}
            <div className="flex items-center gap-[12px] p-[16px] border-b border-[#E0E0E0]">
              <div className="size-[40px] rounded-[10px] bg-[#FCE4EC] flex items-center justify-center shrink-0">
                <Calendar className="size-[20px] text-[#E540C7]" />
              </div>
              <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#121314]">
                {userInfo.birthday}
              </p>
            </div>

            {/* Address */}
            <div className="flex items-start gap-[12px] p-[16px] border-b border-[#E0E0E0]">
              <div className="size-[40px] rounded-[10px] bg-[#E3F2FD] flex items-center justify-center shrink-0">
                <MapPin className="size-[20px] text-[#48A2E8]" />
              </div>
              <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#121314] flex-1 leading-[1.5]">
                {userInfo.address}
              </p>
            </div>

            {/* Language */}
            <div className="flex items-center gap-[12px] p-[16px]">
              <div className="size-[40px] rounded-[10px] bg-[#F3E5F5] flex items-center justify-center shrink-0">
                <Globe className="size-[20px] text-[#9C27B0]" />
              </div>
              <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#121314]">
                {userInfo.language}
              </p>
            </div>
          </div>
        </div>

        {/* Linked Patients Section */}
        <div className="px-[20px] pb-[24px]">
          <div className="flex items-center justify-between mb-[16px]">
            <h2 className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-[#1F75BE]">
              Linked Patients
            </h2>
            <button 
              onClick={() => navigate("/add-patient")}
              className="flex items-center gap-[8px] px-[16px] py-[10px] border-2 border-[#1F75BE] rounded-[12px] hover:bg-[#E3F2FD] transition-all active:scale-[0.98]"
            >
              <Plus className="size-[18px] text-[#1F75BE]" />
              <span className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#1F75BE]">
                Add Patients
              </span>
            </button>
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
                <div className="flex items-center gap-[8px]">
                  <button
                    onClick={(e) => handleDeletePatient(e, patient.id, patient.name)}
                    className="p-[8px] hover:bg-red-50 rounded-[8px] transition-all active:scale-95 group"
                    title="Remove patient"
                  >
                    <Trash2 className="size-[20px] text-gray-400 group-hover:text-red-500 transition-colors" />
                  </button>
                  <ChevronRight className="size-[24px] text-[#1F75BE]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavBar />
    </div>
  );
}
