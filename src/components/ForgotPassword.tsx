import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner@2.0.3";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleResetPassword = () => {
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    if (!email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    // Check if email is registered
    if (email !== "williamroy@example.com") {
      toast.error("This email is not registered. Please sign up first!", {
        style: {
          background: '#DC2626',
          color: 'white',
          border: '1px solid #B91C1C'
        },
        duration: 4000
      });
      return;
    }

    // Email is valid, proceed to reset password screen
    toast.success("Email verified! You can now reset your password.");
    setTimeout(() => {
      navigate("/reset-password", { state: { email } });
    }, 1000);
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back Button */}
        <button
          onClick={() => navigate("/login")}
          className="flex items-center gap-2 mb-8 text-[#1F75BE] hover:text-[#165a94] transition-colors"
        >
          <ArrowLeft className="size-5" />
          <span>Back to Login</span>
        </button>

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-[#1F75BE] text-[28px] mb-2">Forgot Password?</h1>
          <p className="text-gray-600 text-[14px]">
            Enter your email address and we'll help you reset your password
          </p>
        </div>

        {/* Email Field */}
        <div className="mb-6">
          <div className="bg-white h-14 relative rounded-2xl shrink-0 w-full group">
            <div className="content-stretch flex flex-col h-14 items-start overflow-clip relative rounded-[inherit] w-full">
              <div className="basis-0 bg-[#e6e0e9] content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-t-xl shrink-0 w-full">
                <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-t-xl shrink-0 w-full">
                  <div className="size-full">
                    <div className="box-border content-stretch flex gap-2 items-center px-4 py-3 relative size-full">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="basis-0 grow min-h-px min-w-px bg-transparent border-none outline-none text-[#121314] placeholder:text-[#121314] placeholder:opacity-60"
                        onKeyPress={(e) => e.key === 'Enter' && handleResetPassword()}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 514 1">
                    <line stroke="#49454F" x2="514" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[rgba(116,116,116,0.5)] border-solid inset-[-0.5px] pointer-events-none rounded-2xl group-focus-within:border-[#48a2e8] group-focus-within:border-2 transition-all" />
          </div>
        </div>

        {/* Reset Password Button */}
        <button
          onClick={handleResetPassword}
          className="w-full bg-[#1F75BE] hover:bg-[#165a94] transition-colors rounded-lg h-12 flex items-center justify-center text-white mb-6"
        >
          Continue
        </button>

        {/* Additional Help Text */}
        <div className="text-center">
          <p className="text-gray-600 text-[14px]">
            Remember your password?{" "}
            <span
              className="text-[#1F75BE] cursor-pointer hover:underline"
              onClick={() => navigate("/login")}
            >
              Sign In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
