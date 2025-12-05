import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, Check } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import BottomNavBar from "./BottomNavBar";
import imgComprehensiveWellness from "figma:asset/a5bc846c7ceefa23f6e8721683185dd48c065f37.png";
import imgBasicCare from "figma:asset/15202966dea34a4caefe3be115636fe683aef802.png";

type Package = {
  id: string;
  title: string;
  price: string;
  features: string[];
  image: string;
};

export default function PackagesScreen() {
  const navigate = useNavigate();
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const packages: Package[] = [
    {
      id: "1",
      title: "Comprehensive Wellness Plan",
      price: "₹2,500/month",
      features: [
        "Annual full-body check-up",
        "Medicine delivery service",
        "24/7 Tele-consultation"
      ],
      image: imgComprehensiveWellness
    },
    {
      id: "2",
      title: "Advanced Chronic Disease Management",
      price: "₹3,200/month",
      features: [
        "Specialist consultations (2/year)",
        "Personalized medication reminders",
        "Dietary and lifestyle coaching"
      ],
      image: "https://images.unsplash.com/photo-1708461859488-2a0c081ff826?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwcGF0aWVudCUyMGNhcmUlMjBudXJzZXxlbnwxfHx8fDE3NjQ0Mjk3ODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: "3",
      title: "Rehabilitation and Recovery",
      price: "₹2,200/month",
      features: [
        "Physiotherapy sessions (4/month)",
        "Post-operative care support",
        "Rehab equipment rental discounts"
      ],
      image: "https://images.unsplash.com/photo-1545463913-5083aa7359a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaW90aGVyYXB5JTIwcmVoYWJpbGl0YXRpb24lMjB0aGVyYXB5fGVufDF8fHx8MTc2NDQyOTc4OXww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: "4",
      title: "Basic Care and Support",
      price: "₹1,800/month",
      features: [
        "Bi-annual health assessment",
        "Monthly home nurse visit",
        "Emergency response coordination"
      ],
      image: imgBasicCare
    }
  ];

  const handleViewMore = (packageId: string) => {
    setSelectedPackage(packageId);
    navigate(`/packages/${packageId}`);
  };

  const handleBookNow = (pkg: Package) => {
    navigate("/package-schedule-appointment", {
      state: { package: pkg }
    });
  };

  return (
    <div className="bg-white h-screen w-screen overflow-hidden max-w-[393px] mx-auto flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#E3F2FD] to-white px-[20px] pt-[20px] pb-[24px]">
        <div className="flex items-center justify-between mb-[16px]">
          <button 
            className="flex items-center justify-center size-[40px] cursor-pointer hover:bg-[#1F75BE]/10 rounded-full transition-all active:scale-95 border border-gray-200 hover:border-[#1F75BE] bg-white"
            onClick={() => navigate("/home")}
          >
            <ArrowLeft className="size-[20px] text-[#1F75BE]" />
          </button>
        </div>

        {/* Title */}
        <div className="text-center">
          <h1 className="font-['Poppins:Bold',sans-serif] text-[28px] text-[#1F75BE] mb-[4px]">
            Healthcare Packages
          </h1>
          <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#606060]">
            Choose the perfect plan for your needs
          </p>
        </div>
      </div>

      {/* Packages Grid */}
      <div className="flex-1 overflow-y-auto px-[20px] py-[20px] pb-[120px]">
        <div className="grid grid-cols-1 gap-[20px]">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-[16px] overflow-hidden border-2 border-[#E0E0E0] hover:border-[#1F75BE] transition-all shadow-sm hover:shadow-lg"
            >
              {/* Package Image */}
              <div className="h-[160px] bg-gradient-to-br from-[#E3F2FD] to-[#E8F5E9] relative overflow-hidden">
                <ImageWithFallback
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
              </div>

              {/* Package Details */}
              <div className="p-[16px]">
                <h3 className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-[#121314] mb-[8px] leading-[1.3]">
                  {pkg.title}
                </h3>

                <p className="font-['Poppins:SemiBold',sans-serif] text-[20px] text-[#1F75BE] mb-[12px]">
                  {pkg.price}
                </p>

                {/* Features List */}
                <ul className="space-y-[6px] mb-[16px]">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-[8px]">
                      <Check className="size-[16px] text-[#3DAB51] mt-[2px] flex-shrink-0" />
                      <span className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#606060] leading-[1.5]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Action Buttons */}
                <div className="flex gap-[8px]">
                  <button
                    onClick={() => handleViewMore(pkg.id)}
                    className="flex-1 bg-white border-2 border-[#E0E0E0] rounded-[10px] py-[10px] hover:bg-gray-50 hover:border-[#1F75BE] transition-all active:scale-95"
                  >
                    <span className="font-['Roboto:SemiBold',sans-serif] text-[14px] text-[#606060]">
                      View More
                    </span>
                  </button>

                  <button
                    onClick={() => handleBookNow(pkg)}
                    className="flex-1 bg-[#1F75BE] rounded-[10px] py-[10px] hover:bg-[#1A5F9A] transition-all active:scale-95"
                  >
                    <span className="font-['Roboto:SemiBold',sans-serif] text-[14px] text-white">
                      Book Now
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Spacing */}
        <div className="h-[20px]"></div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavBar />
    </div>
  );
}
