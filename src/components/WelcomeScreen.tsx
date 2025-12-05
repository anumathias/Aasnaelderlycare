import { useEffect } from "react";
import { useNavigate } from "react-router";
import imgEllipse1122 from "figma:asset/95cdd3e1f4b98d8c0f4dc231ad657c15d7224f24.png";

export default function WelcomeScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to home after 3 seconds
    const timer = setTimeout(() => {
      navigate("/home");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="bg-white min-h-screen flex items-center justify-center p-4">
      <div className="flex flex-col items-center animate-fadeIn">
        {/* Logo with animation */}
        <div className="size-32 rounded-full overflow-hidden mb-8 animate-scaleIn">
          <img 
            alt="Aasna Logo" 
            className="size-full object-cover" 
            src={imgEllipse1122} 
          />
        </div>

        {/* Welcome Text */}
        <div className="text-center space-y-2">
          <h1 className="text-[#1F75BE] text-[32px] animate-slideUp">
            Welcome to Aasna
          </h1>
          <div className="flex items-center justify-center gap-2">
            <div className="size-2 bg-[#1F75BE] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
            <div className="size-2 bg-[#1F75BE] rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
            <div className="size-2 bg-[#1F75BE] rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.8s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out 0.2s both;
        }
      `}</style>
    </div>
  );
}
