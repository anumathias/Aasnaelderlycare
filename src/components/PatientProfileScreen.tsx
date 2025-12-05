import { useNavigate, useLocation } from "react-router";
import { ArrowLeft, Mail, Phone, Calendar, MapPin, Globe, Heart, Activity } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner@2.0.3";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import BottomNavBar from "./BottomNavBar";

export default function PatientProfileScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get patient data from navigation state
  const passedPatient = location.state?.patient;
  const patientId = passedPatient?.id;

  // Get patient from localStorage with latest data
  const [patient, setPatient] = useState(() => {
    if (patientId) {
      const savedPatients = localStorage.getItem('linkedPatients');
      if (savedPatients) {
        const patients = JSON.parse(savedPatients);
        const foundPatient = patients.find((p: any) => p.id === patientId);
        if (foundPatient) return foundPatient;
      }
    }
    return passedPatient || {
      id: 1,
      name: "Mrs. Neelam Roy",
      age: 75,
      gender: "Female",
      email: "william230@example.com",
      phone: "+91 6756758985",
      birthday: "15/01/2000",
      address: "Flat no : 400 5th floor, Neem Hills Appartments, Hyderabad Telengana",
      language: "English",
      avatar: "https://images.unsplash.com/photo-1547199315-ddabe87428ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjQ0MjY2Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      condition: "Good"
    };
  });

  const showSuccessMessage = location.state?.showSuccessMessage;

  // Update patient data when coming back from edit screen
  useEffect(() => {
    const updatedPatient = location.state?.patient;
    
    if (updatedPatient && patientId) {
      // Update the patient in state
      setPatient(updatedPatient);
      
      // Also update in localStorage
      const savedPatients = localStorage.getItem('linkedPatients');
      if (savedPatients) {
        const patients = JSON.parse(savedPatients);
        const updatedPatients = patients.map((p: any) => 
          p.id === patientId ? updatedPatient : p
        );
        localStorage.setItem('linkedPatients', JSON.stringify(updatedPatients));
      }
    } else if (patientId) {
      // Load latest data from localStorage
      const savedPatients = localStorage.getItem('linkedPatients');
      if (savedPatients) {
        const patients = JSON.parse(savedPatients);
        const foundPatient = patients.find((p: any) => p.id === patientId);
        if (foundPatient) {
          setPatient(foundPatient);
        }
      }
    }
  }, [location.state?.patient, patientId]);

  // Show success toast when changes are saved
  useEffect(() => {
    if (showSuccessMessage) {
      toast.success("Patient profile updated successfully!", {
        description: "Your changes have been saved.",
        duration: 3000,
      });
      // Clear the state to prevent toast showing again on re-render
      window.history.replaceState({}, document.title);
    }
  }, [showSuccessMessage]);

  return (
    <div className="bg-white h-screen w-screen overflow-hidden max-w-[393px] mx-auto flex flex-col">
      {/* Header with Back Button */}
      <div className="bg-white px-[20px] pt-[20px] pb-[16px] border-b border-[#E0E0E0]">
        <button
          className="flex items-center justify-center size-[40px] cursor-pointer hover:bg-[#1F75BE]/10 rounded-full transition-all active:scale-95 border border-gray-200 hover:border-[#1F75BE] bg-white"
          onClick={() => navigate("/profile", { state: { updatedPatient: patient } })}
        >
          <ArrowLeft className="size-[20px] text-[#1F75BE]" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-[20px]">
        {/* Patient Header */}
        <div className="px-[20px] pt-[24px] pb-[20px]">
          <div className="flex items-center gap-[16px] mb-[20px]">
            <div className="size-[100px] rounded-[24px] overflow-hidden border-2 border-[#1F75BE] shrink-0 bg-gradient-to-br from-[#E3F2FD] to-[#BBDEFB] flex items-center justify-center">
              {patient.avatar ? (
                <ImageWithFallback
                  src={patient.avatar}
                  alt={patient.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-[40px] text-[#1F75BE]">
                  {patient.name.charAt(0)}
                </span>
              )}
            </div>
            <div className="flex-1">
              <h1 className="font-['Poppins:SemiBold',sans-serif] text-[22px] text-[#121314] mb-[4px]">
                {patient.name}
              </h1>
              <p className="font-['Roboto:Regular',sans-serif] text-[16px] text-[#606060]">
                {patient.age} y | {patient.gender}
              </p>
              {patient.condition && (
                <div className={`inline-flex items-center gap-[4px] px-[12px] py-[6px] rounded-[8px] text-[13px] mt-[8px] ${
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
          </div>

          {/* Edit Profile and View More Buttons */}
          <div className="flex gap-[12px] mb-[24px]">
            <button 
              onClick={() => navigate("/edit-patient-profile", { state: { patient } })}
              className="flex-1 py-[12px] bg-white border border-[#1F75BE] rounded-[24px] hover:bg-[#F7FBFF] transition-all active:scale-[0.98]"
            >
              <span className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#1F75BE]">
                Edit Profile
              </span>
            </button>
            <button 
              onClick={() => navigate("/patient-health-details", { state: { patient } })}
              className="flex-1 py-[12px] bg-[#1F75BE] rounded-[24px] hover:bg-[#1a5d9a] transition-all active:scale-[0.98]"
            >
              <span className="font-['Poppins:Medium',sans-serif] text-[14px] text-white">
                View More
              </span>
            </button>
          </div>
        </div>

        {/* Health Metrics */}
        <div className="px-[20px] pb-[24px]">
          <div className="bg-white rounded-[12px] border border-[#E0E0E0] shadow-sm p-[16px]">
            <div className="grid grid-cols-3 gap-[12px]">
              {/* Heart Rate */}
              <div className="flex flex-col items-center p-[12px] bg-gradient-to-b from-[#F7FBFF] to-[rgba(211,224,244,0.4)] rounded-[12px] border border-[#E0E0E0]">
                <Heart className="size-[20px] text-[#E540C7] mb-[8px]" />
                <p className="font-['Roboto:Light',sans-serif] text-[12px] text-[#606060] mb-[4px]">
                  Heart Rate
                </p>
                <p className="font-['Roboto:Medium',sans-serif] text-[16px] text-[#121314]">
                  70bpm
                </p>
              </div>

              {/* Blood Pressure */}
              <div className="flex flex-col items-center p-[12px] bg-gradient-to-b from-[#F7FBFF] to-[rgba(211,224,244,0.12)] rounded-[12px] border border-[#E0E0E0]">
                <Activity className="size-[20px] text-[#3DAB51] mb-[8px]" />
                <p className="font-['Roboto:Light',sans-serif] text-[12px] text-[#606060] mb-[4px]">
                  BP
                </p>
                <p className="font-['Roboto:Medium',sans-serif] text-[16px] text-[#121314]">
                  120/70
                </p>
              </div>

              {/* Last Reviewed */}
              <div className="flex flex-col items-center p-[12px] bg-gradient-to-b from-[#F7FBFF] to-[rgba(211,224,244,0.4)] rounded-[12px] border border-[#E0E0E0]">
                <Calendar className="size-[20px] text-[#48A2E8] mb-[8px]" />
                <p className="font-['Roboto:Light',sans-serif] text-[12px] text-[#606060] mb-[4px] text-center">
                  Last Review
                </p>
                <p className="font-['Roboto:Medium',sans-serif] text-[14px] text-[#121314]">
                  14/10/25
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="px-[20px] pb-[24px]">
          <h2 className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-[#121314] mb-[12px]">
            Contact Information
          </h2>
          <div className="bg-white rounded-[12px] border border-[#E0E0E0] shadow-sm overflow-hidden">
            {/* Email */}
            <div className="flex items-center gap-[12px] p-[16px] border-b border-[#E0E0E0]">
              <div className="size-[40px] rounded-[10px] bg-[#E3F2FD] flex items-center justify-center shrink-0">
                <Mail className="size-[20px] text-[#48A2E8]" />
              </div>
              <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#121314] flex-1">
                {patient.email}
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-[12px] p-[16px] border-b border-[#E0E0E0]">
              <div className="size-[40px] rounded-[10px] bg-[#E8F5E9] flex items-center justify-center shrink-0">
                <Phone className="size-[20px] text-[#3DAB51]" />
              </div>
              <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#121314]">
                {patient.phone}
              </p>
            </div>

            {/* Birthday */}
            <div className="flex items-center gap-[12px] p-[16px] border-b border-[#E0E0E0]">
              <div className="size-[40px] rounded-[10px] bg-[#FCE4EC] flex items-center justify-center shrink-0">
                <Calendar className="size-[20px] text-[#E540C7]" />
              </div>
              <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#121314]">
                {patient.birthday}
              </p>
            </div>

            {/* Address */}
            <div className="flex items-start gap-[12px] p-[16px] border-b border-[#E0E0E0]">
              <div className="size-[40px] rounded-[10px] bg-[#E3F2FD] flex items-center justify-center shrink-0">
                <MapPin className="size-[20px] text-[#48A2E8]" />
              </div>
              <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#121314] flex-1 leading-[1.5]">
                {patient.address}
              </p>
            </div>

            {/* Language */}
            <div className="flex items-center gap-[12px] p-[16px]">
              <div className="size-[40px] rounded-[10px] bg-[#F3E5F5] flex items-center justify-center shrink-0">
                <Globe className="size-[20px] text-[#9C27B0]" />
              </div>
              <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#121314]">
                {patient.language}
              </p>
            </div>
          </div>
        </div>

        {/* Ongoing Medications and Treatment */}
        <div className="px-[20px] pb-[24px]">
          <div className="grid grid-cols-1 gap-[16px]">
            {/* Ongoing Medications */}
            <div className="bg-white rounded-[12px] border border-[#E0E0E0] shadow-sm p-[16px]">
              <h2 className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-[#121314] mb-[12px]">
                Ongoing Medications
              </h2>
              <div className="space-y-[8px]">
                <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#606060]">
                  💊 Pain Relief: Tramadol
                </p>
                <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#606060]">
                  💧 Stone Expulsion Therapy: Alpha-blocker
                </p>
                <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#606060]">
                  🧪 Preventing Stone Formation: Hydrochlorothiazide
                </p>
              </div>
            </div>

            {/* Ongoing Treatment */}
            <div className="bg-white rounded-[12px] border border-[#E0E0E0] shadow-sm p-[16px]">
              <h2 className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-[#121314] mb-[12px]">
                Ongoing Treatment
              </h2>
              <div className="flex flex-wrap gap-[8px] mb-[12px]">
                <span className="px-[16px] py-[8px] bg-white border border-[#E0E0E0] rounded-[16px] font-['Roboto:Regular',sans-serif] text-[14px] text-[#121314]">
                  Kidney Stones
                </span>
                <span className="px-[16px] py-[8px] bg-white border border-[#E0E0E0] rounded-[16px] font-['Roboto:Regular',sans-serif] text-[14px] text-[#121314]">
                  High BP
                </span>
              </div>
              <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#606060]">
                Check up in 3 months, And Diet Management
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavBar />
    </div>
  );
}
