import { useNavigate, useParams } from "react-router";
import BottomNavBar from "./BottomNavBar";
import imgRectangle832 from "figma:asset/c62a4c595c8d9c20876330a215d0fe1afb2a0d74.png";
import imgRectangle833 from "figma:asset/abb9465868a664d313711edf0a5f961b6f30442d.png";
import imgRectangle834 from "figma:asset/f6456d407f23405b156e847d2c68319c2e080d33.png";
import imgPriyaSharma from "figma:asset/de598919651e3c6c1b614d7e58648239c50fb23e.png";
import imgDoctor2 from "figma:asset/bd9efb220d3a907a1ab9de3a1a2cbee74bf4bfb2.png";
import imgDoctor3 from "figma:asset/90c5ab61bbb9ea153d0c9f2e8e34942284bd7547.png";

interface DoctorData {
  name: string;
  specialization: string;
  experience: string;
  patients: string;
  image: string;
  location: string;
  weekdaysTime: string;
  weekendsTime: string;
  inClinicCost: string;
  homeCost: string;
  homeRadius: string;
  rating: number;
  about: string;
  education: string;
  specializations: string;
  languages: string;
  registration: string;
}

const doctorsData: Record<string, DoctorData> = {
  "dr-evelyn-reed": {
    name: "Dr. Evelyn Reed",
    specialization: "Geriatric Psychiatrist",
    experience: "7 Years",
    patients: "120k",
    image: imgRectangle832,
    location: "Himayath Nagar, Hyderabad",
    weekdaysTime: "10 AM - 6 PM",
    weekendsTime: "11 AM - 3 PM",
    inClinicCost: "400",
    homeCost: "550",
    homeRadius: "12",
    rating: 5,
    about: "Dr. Evelyn Reed is a compassionate Geriatric Psychiatrist with 7 years of specialized experience in mental health care for elderly patients. She focuses on depression, anxiety, and cognitive health in older adults.",
    education: "MBBS, MD - Psychiatry, Fellowship in Geriatric Psychiatry",
    specializations: "Geriatric Depression, Anxiety Disorders, Dementia Care, Cognitive Assessment",
    languages: "English, Telugu, Hindi",
    registration: "78901"
  },
  "dr-arthur-miller": {
    name: "Dr. Arthur Miller",
    specialization: "Clinical Psychologist",
    experience: "20 Years",
    patients: "5000k",
    image: imgRectangle833,
    location: "Jubilee Hills, Hyderabad",
    weekdaysTime: "9 AM - 7 PM",
    weekendsTime: "10 AM - 4 PM",
    inClinicCost: "500",
    homeCost: "700",
    homeRadius: "15",
    rating: 5,
    about: "Dr. Arthur Miller is a highly experienced Clinical Psychologist with over 20 years of practice. He specializes in cognitive behavioral therapy and provides comprehensive mental health support for seniors.",
    education: "MA Psychology, PhD - Clinical Psychology",
    specializations: "Cognitive Behavioral Therapy, Trauma Counseling, Family Therapy, Stress Management",
    languages: "English, Hindi, Telugu, Urdu",
    registration: "89012"
  },
  "dr-louis-chang": {
    name: "Dr. Louis Chang",
    specialization: "Cognitive Behavioral Therapist",
    experience: "15 Years",
    patients: "4000K",
    image: imgRectangle834,
    location: "Banjara Hills, Hyderabad",
    weekdaysTime: "8 AM - 6 PM",
    weekendsTime: "9 AM - 2 PM",
    inClinicCost: "450",
    homeCost: "600",
    homeRadius: "10",
    rating: 5,
    about: "Dr. Louis Chang is a dedicated Cognitive Behavioral Therapist with 15 years of experience. He specializes in helping elderly patients manage anxiety, depression, and behavioral changes through evidence-based therapy.",
    education: "MBBS, MD - Psychiatry, Certification in CBT",
    specializations: "Cognitive Behavioral Therapy, Anxiety Management, Depression Treatment, Sleep Disorders",
    languages: "English, Telugu, Hindi, Tamil",
    registration: "90123"
  },
  "dr-priya-sharma": {
    name: "Dr. Priya Sharma",
    specialization: "Geriatric Mental Health Specialist",
    experience: "18 Years",
    patients: "3500K",
    image: imgPriyaSharma,
    location: "Gachibowli, Hyderabad",
    weekdaysTime: "9 AM - 5 PM",
    weekendsTime: "10 AM - 3 PM",
    inClinicCost: "550",
    homeCost: "750",
    homeRadius: "15",
    rating: 5,
    about: "Dr. Priya Sharma is a renowned Geriatric Mental Health Specialist with 18 years of extensive experience. She provides holistic mental health care for elderly patients, focusing on age-related mental health challenges.",
    education: "MBBS, MD - Psychiatry, DM - Geriatric Psychiatry",
    specializations: "Geriatric Mental Health, Mood Disorders, Memory Problems, Behavioral Management",
    languages: "English, Hindi, Telugu, Kannada",
    registration: "01234"
  },
  "dr-rajesh-kumar": {
    name: "Dr. Rajesh Kumar",
    specialization: "Neuropsychologist",
    experience: "12 Years",
    patients: "2800K",
    image: imgDoctor2,
    location: "Madhapur, Hyderabad",
    weekdaysTime: "10 AM - 7 PM",
    weekendsTime: "11 AM - 4 PM",
    inClinicCost: "600",
    homeCost: "800",
    homeRadius: "12",
    rating: 5,
    about: "Dr. Rajesh Kumar is an expert Neuropsychologist with 12 years of experience in assessing and treating cognitive and behavioral issues in elderly patients. He specializes in brain-behavior relationships.",
    education: "MA Psychology, MPhil - Neuropsychology, PhD - Clinical Neuropsychology",
    specializations: "Cognitive Assessment, Memory Disorders, Brain Injury Rehabilitation, Dementia Evaluation",
    languages: "English, Hindi, Telugu, Tamil",
    registration: "12345"
  },
  "dr-arjun-patel": {
    name: "Dr. Arjun Patel",
    specialization: "Licensed Mental Health Counselor",
    experience: "10 Years",
    patients: "2200K",
    image: imgDoctor3,
    location: "Kondapur, Hyderabad",
    weekdaysTime: "9 AM - 6 PM",
    weekendsTime: "10 AM - 2 PM",
    inClinicCost: "350",
    homeCost: "500",
    homeRadius: "10",
    rating: 4,
    about: "Dr. Arjun Patel is a Licensed Mental Health Counselor with 10 years of experience providing compassionate counseling to elderly patients. He focuses on emotional well-being and life transition support.",
    education: "MA - Counseling Psychology, Licensed Mental Health Counselor",
    specializations: "Grief Counseling, Life Transitions, Emotional Support, Mindfulness Therapy",
    languages: "English, Hindi, Gujarati, Telugu",
    registration: "23456"
  }
};

export default function MentalHealthDoctorDetailScreen() {
  const navigate = useNavigate();
  const { doctorName } = useParams<{ doctorName: string }>();
  
  const doctor = doctorName ? doctorsData[doctorName] : null;

  if (!doctor) {
    return (
      <div className="bg-white relative w-full min-h-screen max-w-[393px] mx-auto flex items-center justify-center">
        <p className="font-['Poppins:Medium',sans-serif] text-[16px] text-[#555]">Doctor not found</p>
      </div>
    );
  }

  return (
    <div className="bg-white relative w-full min-h-screen max-w-[393px] mx-auto flex flex-col">
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto" style={{
        scrollbarWidth: 'thin',
        scrollbarColor: '#1F75BE #f1f1f1'
      }}>
        <style>{`
          .overflow-y-auto::-webkit-scrollbar {
            width: 6px;
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

        <div className="px-[16px] pt-[16px] pb-[120px]">
          {/* Back Button */}
          <button 
            onClick={() => navigate("/mental-wellbeing-doctors")}
            className="flex items-center justify-center size-[40px] rounded-full hover:bg-[#1F75BE]/10 transition-all active:scale-95 border border-gray-200 hover:border-[#1F75BE] mb-[16px]"
          >
            <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="#1F75BE" />
            </svg>
          </button>

          {/* Doctor Image */}
          <div className="h-[260px] relative rounded-[16px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.15)] shrink-0 w-full overflow-hidden mb-[16px]">
            <img alt={doctor.name} className="object-cover size-full" style={{ objectPosition: '50% 20%' }} src={doctor.image} />
          </div>

          {/* Doctor Info Card */}
          <div className="relative shrink-0 w-full bg-gradient-to-br from-[#1F75BE] to-[#1a64a3] rounded-[14px] shadow-[0px_4px_12px_0px_rgba(31,117,190,0.3)] mb-[14px]">
            <div className="flex flex-row items-start size-full">
              <div className="box-border content-stretch flex flex-col gap-[6px] p-[16px] relative w-full">
                <div className="flex items-start justify-between w-full gap-[10px]">
                  <div className="flex flex-col gap-[4px]">
                    <p className="font-['Poppins:Bold',sans-serif] text-[18px] text-white leading-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]">{doctor.name}</p>
                    <p className="font-['Poppins:Medium',sans-serif] text-[13px] text-white/90 leading-tight">{doctor.specialization}</p>
                  </div>
                  <div className="flex gap-[3px] items-center shrink-0 mt-[2px] bg-white/20 rounded-[8px] px-[6px] py-[4px]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className="size-[13px]" fill="none" viewBox="0 0 24 24">
                        <path 
                          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
                          fill={i < doctor.rating ? "#FFD700" : "#white"} 
                          fillOpacity={i < doctor.rating ? 1 : 0.5}
                        />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Location & Hours */}
          <div className="relative shrink-0 w-full bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe] rounded-[14px] p-[16px] shadow-[0px_4px_10px_0px_rgba(72,162,232,0.15)] border-2 border-[#bae6fd] mb-[14px]">
            <div className="flex flex-col gap-[12px]">
              {/* Location Section */}
              <div className="flex items-center gap-[10px] bg-white rounded-[10px] p-[12px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05)]">
                <div className="bg-gradient-to-br from-[#48A2E8] to-[#3b8bc7] rounded-[8px] p-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]">
                  <svg className="size-[16px]" fill="none" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="white" />
                  </svg>
                </div>
                <div className="flex flex-col gap-[2px]">
                  <p className="font-['Poppins:SemiBold',sans-serif] text-[11px] text-[#48A2E8] leading-tight">Location</p>
                  <p className="font-['Poppins:Medium',sans-serif] text-[13px] text-[#121314] leading-tight">{doctor.location}</p>
                </div>
              </div>

              {/* Timing Section */}
              <div className="flex flex-col gap-[8px] bg-white rounded-[10px] p-[12px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05)]">
                <div className="flex items-center gap-[8px] mb-[4px]">
                  <div className="bg-gradient-to-br from-[#10b981] to-[#059669] rounded-[6px] p-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]">
                    <svg className="size-[14px]" fill="none" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" fill="none"/>
                      <path d="M12 6v6l4 2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <p className="font-['Poppins:SemiBold',sans-serif] text-[11px] text-[#10b981] leading-tight">Working Hours</p>
                </div>
                
                <div className="flex items-center justify-between bg-gradient-to-r from-[#f0fdf4] to-[#dcfce7] rounded-[8px] px-[12px] py-[8px] border border-[#86efac]">
                  <div className="flex items-center gap-[6px]">
                    <div className="size-[6px] rounded-full bg-[#10b981]"></div>
                    <p className="font-['Poppins:SemiBold',sans-serif] text-[12px] text-[#065f46] leading-tight">{`Weekdays`}</p>
                  </div>
                  <p className="font-['Poppins:Bold',sans-serif] text-[12px] text-[#10b981] leading-tight">{doctor.weekdaysTime}</p>
                </div>
                
                <div className="flex items-center justify-between bg-gradient-to-r from-[#fef3c7] to-[#fde68a] rounded-[8px] px-[12px] py-[8px] border border-[#fcd34d]">
                  <div className="flex items-center gap-[6px]">
                    <div className="size-[6px] rounded-full bg-[#f59e0b]"></div>
                    <p className="font-['Poppins:SemiBold',sans-serif] text-[12px] text-[#92400e] leading-tight">{`Weekends`}</p>
                  </div>
                  <p className="font-['Poppins:Bold',sans-serif] text-[12px] text-[#f59e0b] leading-tight">{doctor.weekendsTime}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience & Patients Cards */}
          <div className="content-stretch flex gap-[10px] items-center leading-[0] relative shrink-0 w-full px-[0px] mb-[14px]">
            <div className="flex-1 bg-gradient-to-br from-[#5379df] to-[#4268ce] h-[54px] rounded-[12px] flex items-center justify-center px-[8px] shadow-[0px_4px_10px_0px_rgba(83,121,223,0.4)] border-2 border-white/20">
              <div className="flex flex-col items-center gap-[2px]">
                <p className="font-['Poppins:ExtraBold',sans-serif] text-[16px] text-center text-white leading-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]">{doctor.experience}</p>
                <p className="font-['Poppins:Medium',sans-serif] text-[10px] text-center text-white/90 leading-tight">{`Experience`}</p>
              </div>
            </div>
            <div className="flex-1 bg-gradient-to-br from-[#74c4f7] to-[#5ab3e6] h-[54px] rounded-[12px] flex items-center justify-center px-[8px] shadow-[0px_4px_10px_0px_rgba(116,196,247,0.4)] border-2 border-white/20">
              <div className="flex flex-col items-center gap-[2px]">
                <p className="font-['Poppins:ExtraBold',sans-serif] text-[16px] text-center text-white leading-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]">{doctor.patients}</p>
                <p className="font-['Poppins:Medium',sans-serif] text-[10px] text-center text-white/90 leading-tight">{`Patients`}</p>
              </div>
            </div>
          </div>

          {/* Consultation Cost */}
          <div className="flex flex-col gap-[10px] relative shrink-0 w-full px-[0px] bg-gradient-to-br from-[#fff5f5] to-[#ffe8e8] rounded-[14px] p-[16px] shadow-[0px_4px_10px_0px_rgba(148,62,61,0.15)] border-2 border-[#ffdddd] mb-[12px]">
            <div className="flex items-center gap-[8px]">
              <div className="bg-white rounded-[10px] p-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]">
                <svg className="size-[20px]" fill="none" viewBox="0 0 24 24">
                  <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" fill="#943E3D" />
                </svg>
              </div>
              <p className="font-['Poppins:Bold',sans-serif] text-[15px] text-[#943E3D] leading-tight">{`Consultation Cost`}</p>
            </div>
            <div className="bg-white rounded-[10px] p-[12px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05)] flex flex-col gap-[6px]">
              <div className="flex items-center justify-between">
                <p className="font-['Poppins:Medium',sans-serif] text-[13px] text-[#555] leading-tight">{`In-Clinic Consult:`}</p>
                <div className="flex items-center gap-[4px]">
                  <svg className="size-[16px]" fill="none" viewBox="0 0 24 24">
                    <path d="M7 15h2c0 1.08 1.37 2 3 2s3-.92 3-2c0-1.1-1.04-1.5-3.24-2.03C9.64 12.44 7 11.78 7 9c0-1.79 1.47-3.31 3.5-3.82V3h3v2.18C15.53 5.69 17 7.21 17 9h-2c0-1.08-1.37-2-3-2s-3 .92-3 2c0 1.1 1.04 1.5 3.24 2.03C14.36 11.56 17 12.22 17 15c0 1.79-1.47 3.31-3.5 3.82V21h-3v-2.18C8.47 18.31 7 16.79 7 15z" fill="#943E3D" />
                  </svg>
                  <p className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-black leading-tight">{doctor.inClinicCost}</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-['Poppins:Medium',sans-serif] text-[13px] text-[#555] leading-tight">{`Home Consult:`}</p>
                <div className="flex items-center gap-[4px]">
                  <svg className="size-[16px]" fill="none" viewBox="0 0 24 24">
                    <path d="M7 15h2c0 1.08 1.37 2 3 2s3-.92 3-2c0-1.1-1.04-1.5-3.24-2.03C9.64 12.44 7 11.78 7 9c0-1.79 1.47-3.31 3.5-3.82V3h3v2.18C15.53 5.69 17 7.21 17 9h-2c0-1.08-1.37-2-3-2s-3 .92-3 2c0 1.1 1.04 1.5 3.24 2.03C14.36 11.56 17 12.22 17 15c0 1.79-1.47 3.31-3.5 3.82V21h-3v-2.18C8.47 18.31 7 16.79 7 15z" fill="#943E3D" />
                  </svg>
                  <p className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-black leading-tight">{doctor.homeCost}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Door Step Services */}
          <div className="flex flex-col gap-[10px] relative shrink-0 w-full px-[0px] bg-gradient-to-br from-[#fff8f5] to-[#ffeee5] rounded-[14px] p-[16px] shadow-[0px_4px_10px_0px_rgba(179,38,30,0.15)] border-2 border-[#ffe5dd] mb-[12px]">
            <div className="flex items-center gap-[8px]">
              <div className="bg-white rounded-[10px] p-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]">
                <svg className="size-[20px]" fill="none" viewBox="0 0 24 24">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="#B3261E" />
                </svg>
              </div>
              <p className="font-['Poppins:Bold',sans-serif] text-[15px] text-[#B3261E] leading-tight">{`Door Step Services`}</p>
            </div>
            <div className="bg-white rounded-[10px] p-[12px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05)]">
              <p className="font-['Poppins:Medium',sans-serif] text-[12px] text-[#555] pl-[0px] leading-relaxed">{`Home consults available within ${doctor.homeRadius} Km Radius`}</p>
            </div>
          </div>

          {/* About Doctor */}
          <div className="flex flex-col gap-[10px] relative shrink-0 w-full px-[0px] bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7] rounded-[14px] p-[16px] shadow-[0px_4px_10px_0px_rgba(16,185,129,0.15)] border-2 border-[#86efac] mb-[12px]">
            <div className="flex items-center gap-[8px]">
              <div className="bg-white rounded-[10px] p-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]">
                <svg className="size-[20px]" fill="none" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" fill="#10b981"/>
                </svg>
              </div>
              <p className="font-['Poppins:Bold',sans-serif] text-[15px] text-[#10b981] leading-tight">{`About Doctor`}</p>
            </div>
            
            <div className="bg-white rounded-[10px] p-[14px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05)] flex flex-col gap-[10px]">
              <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#555] leading-relaxed">
                {doctor.about}
              </p>
              
              <div className="h-[1px] bg-gray-200"></div>
              
              <div className="flex flex-col gap-[8px]">
                <div className="flex items-start gap-[8px]">
                  <div className="size-[5px] rounded-full bg-[#10b981] mt-[6px] shrink-0"></div>
                  <div className="flex-1">
                    <p className="font-['Poppins:SemiBold',sans-serif] text-[11px] text-[#10b981] leading-tight mb-[2px]">Education</p>
                    <p className="font-['Poppins:Regular',sans-serif] text-[11px] text-[#555] leading-relaxed">{doctor.education}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-[8px]">
                  <div className="size-[5px] rounded-full bg-[#10b981] mt-[6px] shrink-0"></div>
                  <div className="flex-1">
                    <p className="font-['Poppins:SemiBold',sans-serif] text-[11px] text-[#10b981] leading-tight mb-[2px]">Specializations</p>
                    <p className="font-['Poppins:Regular',sans-serif] text-[11px] text-[#555] leading-relaxed">{doctor.specializations}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-[8px]">
                  <div className="size-[5px] rounded-full bg-[#10b981] mt-[6px] shrink-0"></div>
                  <div className="flex-1">
                    <p className="font-['Poppins:SemiBold',sans-serif] text-[11px] text-[#10b981] leading-tight mb-[2px]">Languages</p>
                    <p className="font-['Poppins:Regular',sans-serif] text-[11px] text-[#555] leading-relaxed">{doctor.languages}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-[8px]">
                  <div className="size-[5px] rounded-full bg-[#10b981] mt-[6px] shrink-0"></div>
                  <div className="flex-1">
                    <p className="font-['Poppins:SemiBold',sans-serif] text-[11px] text-[#10b981] leading-tight mb-[2px]">Registration</p>
                    <p className="font-['Poppins:Regular',sans-serif] text-[11px] text-[#555] leading-relaxed">Medical Council Registration No: {doctor.registration}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Book Now Button */}
          <button
            onClick={() => navigate(`/mental-health-doctors/${doctorName}/book`, { state: { doctor } })}
            className="bg-[#1F75BE] h-[50px] min-w-[48px] relative rounded-[12px] shrink-0 w-full mx-[0px] mt-[6px] hover:bg-[#1a64a3] transition-all shadow-[0px_4px_12px_0px_rgba(31,117,190,0.4)] active:scale-[0.98] cursor-pointer"
          >
            <div className="content-stretch flex flex-col gap-[2px] h-[50px] items-center justify-center min-w-inherit overflow-clip relative rounded-[inherit] w-full">
              <div className="flex items-center justify-center">
                <p className="font-['Poppins:SemiBold',sans-serif] text-[15px] text-white leading-tight">Book Now</p>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavBar />
    </div>
  );
}
