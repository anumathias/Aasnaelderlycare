import { useState } from "react";
import { useNavigate } from "react-router";
import { Eye, EyeOff } from "lucide-react";
import svgPaths from "./svg-8wx62m7m25";
import imgImage274 from "figma:asset/dead436823039beb2e176129f164ba7674d71cdc.png";
import imgImage275 from "figma:asset/b6f418954360856b476df1766dac24ff31cd67db.png";
import imgEllipse1122 from "figma:asset/95cdd3e1f4b98d8c0f4dc231ad657c15d7224f24.png";
import { toast } from "sonner@2.0.3";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = () => {
    if (!email || !password) {
      toast.error("Please enter both email and password");
      return;
    }

    if (!email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    // Check if email is the registered one
    if (email !== "williamroy@example.com") {
      toast.error("You are not signed up. Try to sign up first!", {
        style: {
          background: '#DC2626',
          color: 'white',
          border: '1px solid #B91C1C'
        },
        duration: 4000
      });
      return;
    }

    // Check password - check localStorage first, then default
    const storedPassword = localStorage.getItem('userPassword_williamroy@example.com') || '123456';
    if (password !== storedPassword) {
      toast.error("Incorrect password. Please check your details!", {
        style: {
          background: '#DC2626',
          color: 'white',
          border: '1px solid #B91C1C'
        },
        duration: 4000
      });
      return;
    }

    // Store login status
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userEmail', email);

    // Navigate to welcome screen (which will auto-redirect to home after 3 seconds)
    navigate("/welcome");
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center p-4" data-name="Login">
      <div className="w-full max-w-md">
        {/* Logo Circle */}
        <div className="flex justify-center mb-8">
          <div className="size-32 rounded-full overflow-hidden">
            <img alt="Logo" className="size-full object-cover" src={imgEllipse1122} />
          </div>
        </div>

        {/* Input Fields */}
        <div className="space-y-4 mb-6">
          {/* Email Field */}
          <div className="bg-white h-14 relative rounded-2xl shrink-0 w-full group" data-name="Text field">
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

          {/* Password Field */}
          <div className="bg-white h-14 relative rounded-2xl shrink-0 w-full group" data-name="Text field">
            <div className="content-stretch flex flex-col h-14 items-start overflow-clip relative rounded-[inherit] w-full">
              <div className="basis-0 bg-[#e6e0e9] content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-t-xl shrink-0 w-full">
                <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-t-xl shrink-0 w-full">
                  <div className="size-full">
                    <div className="box-border content-stretch flex gap-2 items-center px-4 py-3 relative size-full">
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="basis-0 grow min-h-px min-w-px bg-transparent border-none outline-none text-[#121314] placeholder:text-[#121314] placeholder:opacity-60"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="flex items-center justify-center shrink-0 size-10 hover:bg-gray-100 rounded-full transition-colors"
                      >
                        {showPassword ? (
                          <EyeOff className="size-5" color="#121314" />
                        ) : (
                          <Eye className="size-5" color="#121314" />
                        )}
                      </button>
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

        {/* Forgot Password Link */}
        <div className="text-right mb-4">
          <button
            type="button"
            onClick={() => navigate("/forgot-password")}
            className="text-[#1F75BE] hover:underline text-sm"
          >
            Forgot Password?
          </button>
        </div>

        {/* Sign In Button */}
        <button
          onClick={handleSignIn}
          className="w-full bg-[#48a2e8] hover:bg-[#3a91d6] transition-colors rounded-lg h-12 flex items-center justify-center text-white mb-6"
        >
          Sign in
        </button>

        {/* Divider */}
        <div className="flex items-center justify-center mb-6">
          <span className="text-gray-500">(Or)</span>
        </div>

        {/* Social Login */}
        <div className="flex items-center justify-center gap-6 mb-6">
          <button 
            className="size-10 hover:opacity-80 transition-opacity cursor-pointer rounded-full overflow-hidden flex items-center justify-center"
            onClick={() => navigate("/signin/google")}
          >
            <img alt="Google" className="size-full object-cover" src={imgImage274} />
          </button>
          <button 
            className="size-10 hover:opacity-80 transition-opacity cursor-pointer rounded-full overflow-hidden flex items-center justify-center"
            onClick={() => navigate("/signin/facebook")}
          >
            <img alt="Facebook" className="size-full object-cover" src={imgImage275} />
          </button>
          <button 
            className="size-10 hover:opacity-80 transition-opacity cursor-pointer flex items-center justify-center"
            onClick={() => navigate("/signin/twitter")}
          >
            <div className="size-full">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 40">
                <g>
                  <path d={svgPaths.p2a2c9380} fill="#87C0D9" stroke="#87C0D9" />
                </g>
              </svg>
            </div>
          </button>
        </div>

        {/* Sign Up Link */}
        <div className="text-center">
          <p>
            <span className="text-gray-700">Not on Aasna yet?</span>{" "}
            <span 
              className="text-[#2472ee] cursor-pointer hover:underline"
              onClick={handleSignUp}
            >
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
