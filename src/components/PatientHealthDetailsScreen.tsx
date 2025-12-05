import { useNavigate, useLocation } from "react-router";
import { 
  ArrowLeft, 
  Calendar, 
  Activity, 
  Heart, 
  Droplet, 
  Stethoscope, 
  ClipboardList, 
  User,
  Pill,
  AlertCircle,
  TrendingUp,
  Weight,
  Ruler
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import BottomNavBar from "./BottomNavBar";

export default function PatientHealthDetailsScreen() {
  const navigate = useNavigate();
  const location = useLocation();

  // Get patient data from navigation state
  const patient = location.state?.patient || {
    id: 1,
    name: "Mrs. Neelam Roy",
    age: 75,
    gender: "Female",
    email: "william230@example.com",
    phone: "+91 6756758985",
    birthday: "15/01/2000",
    address: "Flat no : 400 5th floor, Neem Hills Appartments, Hyderabad Telengana",
    language: "English",
    avatar: ""
  };

  return (
    <div className="bg-white h-screen w-screen overflow-hidden max-w-[393px] mx-auto flex flex-col">
      {/* Header with Back Button */}
      <div className="bg-white px-[20px] pt-[20px] pb-[16px] border-b border-[#E0E0E0]">
        <button
          className="flex items-center justify-center size-[40px] cursor-pointer hover:bg-[#1F75BE]/10 rounded-full transition-all active:scale-95 border border-gray-200 hover:border-[#1F75BE] bg-white"
          onClick={() => navigate("/patient-profile", { state: { patient } })}
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
            </div>
          </div>

          {/* Next Appointment Banner */}
          <div className="bg-gradient-to-r from-[#3DAB51] to-[#2E8B3E] rounded-[16px] p-[16px] flex items-center gap-[12px] shadow-sm">
            <div className="size-[40px] rounded-[12px] bg-white/20 flex items-center justify-center shrink-0">
              <Calendar className="size-[20px] text-white" />
            </div>
            <div className="flex-1">
              <p className="font-['Poppins:Medium',sans-serif] text-[14px] text-white/90 mb-[2px]">
                Next Appointment
              </p>
              <p className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-white">
                10/11/25 (3 days)
              </p>
            </div>
          </div>
        </div>

        {/* Health Condition Section */}
        <div className="px-[20px] pb-[24px]">
          <h2 className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-[#121314] mb-[16px]">
            Health Condition
          </h2>
          
          <div className="bg-white border border-[#E0E0E0] rounded-[16px] overflow-hidden">
            {/* Ongoing Condition */}
            <div className="p-[16px] flex items-start gap-[12px] border-b border-[#F0F0F0]">
              <div className="size-[40px] rounded-[12px] bg-[#FFEBEE] flex items-center justify-center shrink-0">
                <Droplet className="size-[20px] text-[#D32F2F]" />
              </div>
              <div className="flex-1">
                <p className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#606060] mb-[4px]">
                  Ongoing Condition
                </p>
                <p className="font-['Roboto:Regular',sans-serif] text-[15px] text-[#121314]">
                  Low Blood Pressure
                </p>
              </div>
            </div>

            {/* Treatment Plan */}
            <div className="p-[16px] flex items-start gap-[12px] border-b border-[#F0F0F0]">
              <div className="size-[40px] rounded-[12px] bg-[#E3F2FD] flex items-center justify-center shrink-0">
                <ClipboardList className="size-[20px] text-[#1F75BE]" />
              </div>
              <div className="flex-1">
                <p className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#606060] mb-[4px]">
                  Current Treatment
                </p>
                <p className="font-['Roboto:Regular',sans-serif] text-[15px] text-[#121314]">
                  Medical Checkup for Kidney stones
                </p>
              </div>
            </div>

            {/* Last Checkup */}
            <div className="p-[16px] flex items-start gap-[12px] border-b border-[#F0F0F0]">
              <div className="size-[40px] rounded-[12px] bg-[#F3E5F5] flex items-center justify-center shrink-0">
                <Calendar className="size-[20px] text-[#7B1FA2]" />
              </div>
              <div className="flex-1">
                <p className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#606060] mb-[4px]">
                  Last Checkup
                </p>
                <p className="font-['Roboto:Regular',sans-serif] text-[15px] text-[#121314]">
                  14/10/25
                </p>
              </div>
            </div>

            {/* Consult Doctor */}
            <div className="p-[16px] flex items-start gap-[12px] border-b border-[#F0F0F0]">
              <div className="size-[40px] rounded-[12px] bg-[#E8F5E9] flex items-center justify-center shrink-0">
                <Stethoscope className="size-[20px] text-[#388E3C]" />
              </div>
              <div className="flex-1">
                <p className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#606060] mb-[4px]">
                  Consulting Doctor
                </p>
                <p className="font-['Roboto:Regular',sans-serif] text-[15px] text-[#121314]">
                  Dr. Martin Son
                </p>
              </div>
            </div>

            {/* Next Appointment Date */}
            <div className="p-[16px] flex items-start gap-[12px]">
              <div className="size-[40px] rounded-[12px] bg-[#FFF3E0] flex items-center justify-center shrink-0">
                <Calendar className="size-[20px] text-[#F57C00]" />
              </div>
              <div className="flex-1">
                <p className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#606060] mb-[4px]">
                  Next Appointment
                </p>
                <p className="font-['Roboto:Regular',sans-serif] text-[15px] text-[#121314]">
                  10/11/25
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Medical History Section */}
        <div className="px-[20px] pb-[24px]">
          <h2 className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-[#121314] mb-[16px]">
            Medical History
          </h2>
          
          <div className="bg-white border border-[#E0E0E0] rounded-[16px] overflow-hidden">
            {/* Past Surgeries */}
            <div className="p-[16px] flex items-start gap-[12px] border-b border-[#F0F0F0]">
              <div className="size-[40px] rounded-[12px] bg-[#E1F5FE] flex items-center justify-center shrink-0">
                <Activity className="size-[20px] text-[#0277BD]" />
              </div>
              <div className="flex-1">
                <p className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#606060] mb-[4px]">
                  Past Surgeries
                </p>
                <p className="font-['Roboto:Regular',sans-serif] text-[15px] text-[#121314]">
                  Knee injury surgery (2018)
                </p>
              </div>
            </div>

            {/* Family History */}
            <div className="p-[16px] flex items-start gap-[12px]">
              <div className="size-[40px] rounded-[12px] bg-[#FCE4EC] flex items-center justify-center shrink-0">
                <Heart className="size-[20px] text-[#C2185B]" />
              </div>
              <div className="flex-1">
                <p className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#606060] mb-[4px]">
                  Family History
                </p>
                <p className="font-['Roboto:Regular',sans-serif] text-[15px] text-[#121314]">
                  Heart Disease
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Health Metrics Section */}
        <div className="px-[20px] pb-[24px]">
          <h2 className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-[#121314] mb-[16px]">
            Health Metrics
          </h2>
          
          <div className="grid grid-cols-2 gap-[12px]">
            {/* Blood Pressure */}
            <div className="bg-gradient-to-br from-[#FFEBEE] to-[#FFCDD2] rounded-[16px] p-[16px] border border-[#FFCDD2]">
              <div className="size-[40px] rounded-[12px] bg-white flex items-center justify-center mb-[12px]">
                <Activity className="size-[20px] text-[#D32F2F]" />
              </div>
              <p className="font-['Poppins:Medium',sans-serif] text-[12px] text-[#D32F2F] mb-[4px]">
                Blood Pressure
              </p>
              <p className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-[#121314]">
                110/70
              </p>
              <p className="font-['Roboto:Regular',sans-serif] text-[11px] text-[#606060] mt-[4px]">
                mmHg
              </p>
            </div>

            {/* Heart Rate */}
            <div className="bg-gradient-to-br from-[#F3E5F5] to-[#E1BEE7] rounded-[16px] p-[16px] border border-[#E1BEE7]">
              <div className="size-[40px] rounded-[12px] bg-white flex items-center justify-center mb-[12px]">
                <Heart className="size-[20px] text-[#7B1FA2]" />
              </div>
              <p className="font-['Poppins:Medium',sans-serif] text-[12px] text-[#7B1FA2] mb-[4px]">
                Heart Rate
              </p>
              <p className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-[#121314]">
                72
              </p>
              <p className="font-['Roboto:Regular',sans-serif] text-[11px] text-[#606060] mt-[4px]">
                bpm
              </p>
            </div>

            {/* Weight */}
            <div className="bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] rounded-[16px] p-[16px] border border-[#C8E6C9]">
              <div className="size-[40px] rounded-[12px] bg-white flex items-center justify-center mb-[12px]">
                <Weight className="size-[20px] text-[#388E3C]" />
              </div>
              <p className="font-['Poppins:Medium',sans-serif] text-[12px] text-[#388E3C] mb-[4px]">
                Weight
              </p>
              <p className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-[#121314]">
                65
              </p>
              <p className="font-['Roboto:Regular',sans-serif] text-[11px] text-[#606060] mt-[4px]">
                kg
              </p>
            </div>

            {/* Height */}
            <div className="bg-gradient-to-br from-[#E3F2FD] to-[#BBDEFB] rounded-[16px] p-[16px] border border-[#BBDEFB]">
              <div className="size-[40px] rounded-[12px] bg-white flex items-center justify-center mb-[12px]">
                <Ruler className="size-[20px] text-[#1976D2]" />
              </div>
              <p className="font-['Poppins:Medium',sans-serif] text-[12px] text-[#1976D2] mb-[4px]">
                Height
              </p>
              <p className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-[#121314]">
                162
              </p>
              <p className="font-['Roboto:Regular',sans-serif] text-[11px] text-[#606060] mt-[4px]">
                cm
              </p>
            </div>
          </div>
        </div>

        {/* Current Medications Section */}
        <div className="px-[20px] pb-[24px]">
          <h2 className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-[#121314] mb-[16px]">
            Current Medications
          </h2>
          
          <div className="bg-white border border-[#E0E0E0] rounded-[16px] overflow-hidden">
            {/* Medication 1 */}
            <div className="p-[16px] flex items-start gap-[12px] border-b border-[#F0F0F0]">
              <div className="size-[40px] rounded-[12px] bg-[#FFF3E0] flex items-center justify-center shrink-0">
                <Pill className="size-[20px] text-[#F57C00]" />
              </div>
              <div className="flex-1">
                <p className="font-['Poppins:Medium',sans-serif] text-[15px] text-[#121314] mb-[4px]">
                  Amlodipine 5mg
                </p>
                <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#606060]">
                  Once daily • Morning
                </p>
              </div>
            </div>

            {/* Medication 2 */}
            <div className="p-[16px] flex items-start gap-[12px] border-b border-[#F0F0F0]">
              <div className="size-[40px] rounded-[12px] bg-[#E8F5E9] flex items-center justify-center shrink-0">
                <Pill className="size-[20px] text-[#388E3C]" />
              </div>
              <div className="flex-1">
                <p className="font-['Poppins:Medium',sans-serif] text-[15px] text-[#121314] mb-[4px]">
                  Metformin 500mg
                </p>
                <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#606060]">
                  Twice daily • After meals
                </p>
              </div>
            </div>

            {/* Medication 3 */}
            <div className="p-[16px] flex items-start gap-[12px]">
              <div className="size-[40px] rounded-[12px] bg-[#F3E5F5] flex items-center justify-center shrink-0">
                <Pill className="size-[20px] text-[#7B1FA2]" />
              </div>
              <div className="flex-1">
                <p className="font-['Poppins:Medium',sans-serif] text-[15px] text-[#121314] mb-[4px]">
                  Vitamin D3 1000 IU
                </p>
                <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#606060]">
                  Once daily • Morning
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Allergies Section */}
        <div className="px-[20px] pb-[24px]">
          <h2 className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-[#121314] mb-[16px]">
            Allergies & Precautions
          </h2>
          
          <div className="bg-white border border-[#E0E0E0] rounded-[16px] overflow-hidden">
            {/* Allergy 1 */}
            <div className="p-[16px] flex items-start gap-[12px] border-b border-[#F0F0F0]">
              <div className="size-[40px] rounded-[12px] bg-[#FFEBEE] flex items-center justify-center shrink-0">
                <AlertCircle className="size-[20px] text-[#D32F2F]" />
              </div>
              <div className="flex-1">
                <p className="font-['Poppins:Medium',sans-serif] text-[15px] text-[#121314] mb-[4px]">
                  Penicillin
                </p>
                <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#606060]">
                  Severe allergic reaction
                </p>
              </div>
            </div>

            {/* Allergy 2 */}
            <div className="p-[16px] flex items-start gap-[12px]">
              <div className="size-[40px] rounded-[12px] bg-[#FFF3E0] flex items-center justify-center shrink-0">
                <AlertCircle className="size-[20px] text-[#F57C00]" />
              </div>
              <div className="flex-1">
                <p className="font-['Poppins:Medium',sans-serif] text-[15px] text-[#121314] mb-[4px]">
                  Peanuts
                </p>
                <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#606060]">
                  Moderate allergic reaction
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Notes Section */}
        <div className="px-[20px] pb-[24px]">
          <h2 className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-[#121314] mb-[16px]">
            Doctor's Notes
          </h2>
          
          <div className="bg-[#F7FBFF] border border-[#E3F2FD] rounded-[16px] p-[16px]">
            <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#121314] leading-[22px]">
              Patient shows improvement in blood pressure management. Continue current medication regimen. 
              Recommended follow-up in 3 weeks for kidney stone monitoring. Advised to increase water intake 
              to 2-3 liters daily and maintain low-sodium diet.
            </p>
            <div className="mt-[12px] pt-[12px] border-t border-[#E3F2FD]">
              <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#606060]">
                Last updated: 14/10/25 by Dr. Martin Son
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
