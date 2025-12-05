import { useNavigate, useParams } from "react-router";
import { ArrowLeft, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import BottomNavBar from "./BottomNavBar";
import imgComprehensiveWellness from "figma:asset/a5bc846c7ceefa23f6e8721683185dd48c065f37.png";
import imgBasicCare from "figma:asset/15202966dea34a4caefe3be115636fe683aef802.png";

type Review = {
  name: string;
  avatar: string;
  rating: number;
  text: string;
};

type PackageDetail = {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  rating: number;
  reviewCount: number;
  reviews: Review[];
};

export default function PackageDetailScreen() {
  const navigate = useNavigate();
  const { id } = useParams();

  const packages: Record<string, PackageDetail> = {
    "1": {
      id: "1",
      title: "Comprehensive Wellness Plan",
      description: "A comprehensive health package designed to boost your immunity and overall well-being with essential medicines and services.",
      price: "₹2,500/month",
      image: imgComprehensiveWellness,
      rating: 4.8,
      reviewCount: 124,
      reviews: [
        {
          name: "Rossana",
          avatar: "https://images.unsplash.com/photo-1762522921456-cdfe882d36c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY0NDI5OTc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
          rating: 5,
          text: "This health package is incredible! The services were top-notch, and the doctor consultation was very insightful. I feel much healthier and informed about my well-being. Highly recommend for anyone looking for comprehensive health care."
        },
        {
          name: "Migale",
          avatar: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG1hbiUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2NDQyOTk3NHww&ixlib=rb-4.1.0&q=80&w=1080",
          rating: 5,
          text: "This elderly health care service has been a blessing for my parents. The nurses are kind, patient, and professional. They remind my mother to take her medicines on time and keep me updated about her health regularly."
        }
      ]
    },
    "2": {
      id: "2",
      title: "Advanced Chronic Disease Management",
      description: "Tailored for seniors managing chronic conditions, offering specialized care and continuous support.",
      price: "₹3,200/month",
      image: "https://images.unsplash.com/photo-1708461859488-2a0c081ff826?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwcGF0aWVudCUyMGNhcmUlMjBudXJzZXxlbnwxfHx8fDE3NjQ0Mjk3ODh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.8,
      reviewCount: 114,
      reviews: [
        {
          name: "Susmitha",
          avatar: "https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc2NDQxNjE4M3ww&ixlib=rb-4.1.0&q=80&w=1080",
          rating: 5,
          text: "The service is good overall, and the caregivers are caring. However, the app sometimes lags during video calls. Once that's fixed, it'll be perfect."
        },
        {
          name: "Pooja",
          avatar: "https://images.unsplash.com/photo-1762522921456-cdfe882d36c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY0NDI5OTc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
          rating: 5,
          text: "As a caregiver, I find this platform extremely helpful. It allows me to monitor multiple patients' vitals and medicine schedules in one place. It's user-friendly and senior-friendly too!"
        }
      ]
    },
    "3": {
      id: "3",
      title: "Rehabilitation and Recovery",
      description: "Comprehensive rehabilitation services with expert physiotherapy support to aid your recovery and restore mobility.",
      price: "₹2,200/month",
      image: "https://images.unsplash.com/photo-1545463913-5083aa7359a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaW90aGVyYXB5JTIwcmVoYWJpbGl0YXRpb24lMjB0aGVyYXB5fGVufDF8fHx8MTc2NDQyOTc4OXww&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.7,
      reviewCount: 98,
      reviews: [
        {
          name: "Rajesh",
          avatar: "https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NjQzMjE2Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
          rating: 5,
          text: "After my knee surgery, the physiotherapy sessions were incredibly helpful. The therapist was professional and patient, guiding me through each exercise. I've regained most of my mobility thanks to this program!"
        },
        {
          name: "Meera",
          avatar: "https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc2NDQxNjE4M3ww&ixlib=rb-4.1.0&q=80&w=1080",
          rating: 5,
          text: "Excellent rehabilitation support! The equipment rental discounts made recovery affordable, and the post-operative care was outstanding. Highly recommend for anyone recovering from surgery."
        }
      ]
    },
    "4": {
      id: "4",
      title: "Basic Care and Support",
      description: "A foundational package focusing on essential care and immediate support for peace of mind.",
      price: "₹1,800/month",
      image: imgBasicCare,
      rating: 4.8,
      reviewCount: 104,
      reviews: [
        {
          name: "Sumanth",
          avatar: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG1hbiUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2NDQyOTk3NHww&ixlib=rb-4.1.0&q=80&w=1080",
          rating: 5,
          text: "Very reliable and easy to use. The app helps track medication schedules, doctor visits, and vitals efficiently. Just wish there was a 24/7 chat support option."
        },
        {
          name: "Jame",
          avatar: "https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NjQzMjE2Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
          rating: 5,
          text: "We've been using this elderly care app for 6 months now. It has made managing my father's diabetes and heart medications so much easier."
        }
      ]
    }
  };

  const pkg = packages[id || "1"];

  if (!pkg) {
    return (
      <div className="bg-white h-screen w-screen flex items-center justify-center max-w-[393px] mx-auto">
        <p className="font-['Roboto:Regular',sans-serif] text-[16px] text-[#606060]">
          Package not found
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white h-screen w-screen overflow-hidden max-w-[393px] mx-auto flex flex-col">
      {/* Header */}
      <div className="bg-white px-[20px] pt-[20px] pb-[16px] border-b border-[#E0E0E0]">
        <div className="flex items-center justify-between">
          <button 
            className="flex items-center justify-center size-[40px] cursor-pointer hover:bg-[#1F75BE]/10 rounded-full transition-all active:scale-95 border border-gray-200 hover:border-[#1F75BE] bg-white"
            onClick={() => navigate("/packages")}
          >
            <ArrowLeft className="size-[20px] text-[#1F75BE]" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-[120px]">
        {/* Package Info Card */}
        <div className="bg-[#E5F3FD] mx-[16px] mt-[16px] rounded-[16px] overflow-hidden">
          {/* Package Image */}
          <div className="h-[188px] relative overflow-hidden">
            <ImageWithFallback
              src={pkg.image}
              alt={pkg.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Package Details */}
          <div className="p-[16px]">
            <h2 className="font-['Poppins:Regular',sans-serif] text-[20px] text-[#1D1B20] mb-[12px] leading-[1.2]">
              {pkg.title}
            </h2>

            <p className="font-['Poppins:Regular',sans-serif] text-[16px] text-[#757575] mb-[16px] leading-[1.25]">
              {pkg.description}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-[8px] mb-[16px]">
              <div className="flex gap-[4px]">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="size-[18px]"
                    fill="#48A2E8"
                    stroke="none"
                  />
                ))}
              </div>
              <span className="font-['Poppins:Regular',sans-serif] text-[16px] text-black">
                {pkg.rating}
              </span>
              <span className="font-['Poppins:Regular',sans-serif] text-[16px] text-black">
                ({pkg.reviewCount} Reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center justify-between">
              <p className="font-['Poppins:Regular',sans-serif] text-[16px] text-black">
                Starting From
              </p>
              <p className="font-['Poppins:Regular',sans-serif] text-[14px] text-[#49454F]">
                {pkg.price}
              </p>
            </div>
          </div>
        </div>

        {/* User Reviews Section */}
        <div className="mt-[24px] mb-[24px]">
          <h3 className="font-['Poppins:SemiBold',sans-serif] text-[24px] text-[#066ABF] text-center mb-[20px]">
            User Reviews
          </h3>

          <div className="px-[16px] space-y-[16px]">
            {pkg.reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-[12px] p-[16px] border border-[#E0E0E0]"
              >
                {/* User Info */}
                <div className="flex flex-col items-center mb-[12px]">
                  <div className="size-[80px] rounded-full overflow-hidden mb-[12px]">
                    <ImageWithFallback
                      src={review.avatar}
                      alt={review.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <p className="font-['Poppins:SemiBold',sans-serif] text-[20px] text-[#121314] mb-[8px]">
                    {review.name}
                  </p>

                  {/* Underline */}
                  <div className="w-full h-[2px] bg-[#066ABF] mb-[8px]"></div>

                  {/* Stars */}
                  <div className="flex gap-[4px] mb-[12px]">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="size-[20px]"
                        fill="#FFB60B"
                        stroke="none"
                      />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="font-['Poppins:Regular',sans-serif] text-[14px] text-black leading-[1.5] text-center">
                  {review.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Spacing */}
        <div className="h-[100px]"></div>
      </div>

      {/* Book Now Button - Fixed at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-[#E0E0E0] px-[20px] py-[16px]">
        <button
          onClick={() => navigate("/package-schedule-appointment", {
            state: { package: pkg }
          })}
          className="w-full py-[14px] rounded-[12px] bg-[#1F75BE] text-white font-['Poppins:SemiBold',sans-serif] text-[16px] hover:bg-[#1A5F9E] active:scale-98 transition-all"
        >
          Book Now - {pkg.price}
        </button>
      </div>

      {/* Bottom Navigation */}
      <BottomNavBar />
    </div>
  );
}
