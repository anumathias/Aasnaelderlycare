import { useNavigate } from "react-router";
import BottomNavBar from "./BottomNavBar";
import imgRectangle832 from "figma:asset/c62a4c595c8d9c20876330a215d0fe1afb2a0d74.png";
import imgRectangle833 from "figma:asset/abb9465868a664d313711edf0a5f961b6f30442d.png";
import imgRectangle834 from "figma:asset/f6456d407f23405b156e847d2c68319c2e080d33.png";
import imgPriyaSharma from "figma:asset/de598919651e3c6c1b614d7e58648239c50fb23e.png";
import imgDoctor2 from "figma:asset/bd9efb220d3a907a1ab9de3a1a2cbee74bf4bfb2.png";
import imgDoctor3 from "figma:asset/90c5ab61bbb9ea153d0c9f2e8e34942284bd7547.png";

interface Doctor {
  id: number;
  name: string;
  specialization: string;
  experience: string;
  patients: string;
  image: string;
  color: string;
  imageScale?: string;
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

const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Evelyn Reed",
    specialization: "Geriatric Psychiatrist",
    experience: "7 Years",
    patients: "120k",
    image: imgRectangle832,
    color: "#696fc7",
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
  {
    id: 2,
    name: "Dr. Arthur Miller",
    specialization: "Clinical Psychologist",
    experience: "20 Years",
    patients: "5000k",
    image: imgRectangle833,
    color: "#a7aae1",
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
  {
    id: 3,
    name: "Dr. Louis Chang",
    specialization: "Cognitive Behavioral Therapist",
    experience: "15 Years",
    patients: "4000K",
    image: imgRectangle834,
    color: "#d59fd2",
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
  {
    id: 4,
    name: "Dr. Priya Sharma",
    specialization: "Geriatric Mental Health Specialist",
    experience: "18 Years",
    patients: "3500K",
    image: imgPriyaSharma,
    color: "#8b9dc3",
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
  {
    id: 5,
    name: "Dr. Rajesh Kumar",
    specialization: "Neuropsychologist",
    experience: "12 Years",
    patients: "2800K",
    image: imgDoctor2,
    color: "#b088c4",
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
  {
    id: 6,
    name: "Dr. Arjun Patel",
    specialization: "Licensed Mental Health Counselor",
    experience: "10 Years",
    patients: "2200K",
    image: imgDoctor3,
    color: "#e89eb8",
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
];

export default function MentalWellBeingDoctorsScreen() {
  const navigate = useNavigate();

  return (
    <div className="bg-white relative w-full min-h-screen max-w-[393px] mx-auto flex flex-col">
      {/* Scrollable Content */}
      <div 
        className="flex-1 overflow-y-auto" 
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#1F75BE #f1f1f1'
        }}
      >
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
          {/* Back Button and Title */}
          <div className="flex items-center justify-center mb-[20px] relative">
            <button 
              onClick={() => navigate("/mental-wellbeing")}
              className="absolute left-0 flex items-center justify-center size-[40px] rounded-full hover:bg-[#1F75BE]/10 transition-all active:scale-95 border border-gray-200 hover:border-[#1F75BE]"
            >
              <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="#1F75BE" />
              </svg>
            </button>
            <p className="font-['Poppins:SemiBold',sans-serif] text-[20px] text-[#1F75BE] leading-tight text-center">Mental Health Specialists</p>
          </div>

          {/* Search Bar */}
          <div className="bg-[#f5f5f5] h-[36px] relative rounded-[18px] shrink-0 w-full mb-[20px] border border-gray-200">
            <div className="flex items-center h-full px-[16px] gap-[8px]">
              <svg className="size-[18px] shrink-0" fill="none" viewBox="0 0 24 24">
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="#666"/>
              </svg>
              <input 
                type="text" 
                placeholder="Search specialists..." 
                className="flex-1 bg-transparent outline-none font-['Poppins:Regular',sans-serif] text-[13px] text-[#121314] placeholder:text-[#999]"
              />
            </div>
          </div>

          {/* Subtitle */}
          <p className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-[#1F75BE] leading-tight mb-[16px] text-center">
            Psychiatrists
          </p>

          {/* Doctors List */}
          <div className="flex flex-col gap-[16px]">
            {doctors.map((doctor) => {
              const doctorSlug = doctor.name.toLowerCase().replace('dr. ', 'dr-').replace(/ /g, '-');
              return (
              <div
                key={doctor.id}
                onClick={() => navigate(`/mental-health-doctor/${doctorSlug}`)}
                className="relative h-[160px] rounded-[16px] overflow-hidden shadow-[0px_4px_10px_0px_rgba(0,0,0,0.1)] cursor-pointer hover:shadow-[0px_6px_16px_0px_rgba(0,0,0,0.15)] transition-all active:scale-[0.98]"
              >
                {/* Background with gradient overlay */}
                <div className="absolute inset-0 flex">
                  {/* Info Section with colored background */}
                  <div 
                    className="flex-1 p-[16px] flex flex-col justify-between"
                    style={{ backgroundColor: doctor.color }}
                  >
                    <div>
                      <p className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-white leading-tight mb-[6px]">
                        {doctor.name}
                      </p>
                      <p className="font-['Poppins:Regular',sans-serif] text-[14px] text-white/95 leading-tight">
                        {doctor.specialization}
                      </p>
                    </div>
                    
                    <div className="flex gap-[40px]">
                      <div>
                        <p className="font-['Poppins:SemiBold',sans-serif] text-[12px] text-white/90 leading-tight mb-[4px]">
                          Experience
                        </p>
                        <p className="font-['Poppins:Medium',sans-serif] text-[13px] text-white leading-tight">
                          {doctor.experience}
                        </p>
                      </div>
                      <div>
                        <p className="font-['Poppins:SemiBold',sans-serif] text-[12px] text-white/90 leading-tight mb-[4px]">
                          Patients
                        </p>
                        <p className="font-['Poppins:Medium',sans-serif] text-[13px] text-white leading-tight">
                          {doctor.patients}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Image Section */}
                  <div className="w-[140px] relative overflow-hidden">
                    <img 
                      src={doctor.image} 
                      alt={doctor.name}
                      className={`absolute inset-0 size-full object-cover ${doctor.imageScale || ''}`}
                    />
                    {/* Gradient overlay on image */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
                  </div>
                </div>
              </div>
            );
            })}
          </div>

          {/* Info Section */}
          <div className="mt-[20px] bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe] rounded-[16px] p-[16px] shadow-[0px_4px_10px_0px_rgba(31,117,190,0.15)] border border-[#bae6fd]">
            <div className="flex items-start gap-[12px]">
              <div className="bg-white rounded-[10px] p-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0">
                <svg className="size-[20px]" fill="none" viewBox="0 0 24 24">
                  <path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z" fill="#1F75BE"/>
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-['Poppins:SemiBold',sans-serif] text-[13px] text-[#121314] leading-tight mb-[6px]">
                  Professional Mental Health Support
                </p>
                <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#555] leading-relaxed">
                  Our specialists provide compassionate care for elders dealing with anxiety, depression, cognitive changes, and other mental health concerns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavBar />
    </div>
  );
}
