import { useState } from "react";
import { useNavigate } from "react-router";
import { Eye, EyeOff } from "lucide-react";
import imgEllipse1122 from "figma:asset/95cdd3e1f4b98d8c0f4dc231ad657c15d7224f24.png";
import { toast } from "sonner@2.0.3";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (!name || !email || !password || !confirmPassword) {
      toast.error("Please fill in all fields");
      return;
    }

    if (!email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    // Save user information to localStorage
    const userInfo = {
      name: name,
      email: email,
      phone: "",
      bloodGroup: "",
      gender: "",
      dateOfBirth: ""
    };
    
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    localStorage.setItem('userEmail', email);
    localStorage.setItem(`userPassword_${email}`, password);
    
    // Broadcast the change
    window.dispatchEvent(new Event('profilePhotoChanged'));

    toast.success("Account created successfully! Please sign in.");
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center p-4" data-name="Sign up">
      <div className="w-full max-w-md">
        {/* Logo Circle */}
        <div className="flex justify-center mb-8">
          <div className="size-32 rounded-full overflow-hidden">
            <img alt="Logo" className="size-full object-cover" src={imgEllipse1122} />
          </div>
        </div>

        {/* Input Fields */}
        <div className="space-y-4 mb-6">
          {/* Name Field */}
          <div className="bg-white h-14 relative rounded-2xl shrink-0 w-full group" data-name="Text field">
            <div className="content-stretch flex flex-col h-14 items-start overflow-clip relative rounded-[inherit] w-full">
              <div className="basis-0 bg-[#e6e0e9] content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-t-xl shrink-0 w-full">
                <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-t-xl shrink-0 w-full">
                  <div className="size-full">
                    <div className="box-border content-stretch flex gap-2 items-center px-4 py-3 relative size-full">
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Full Name"
                        className="basis-0 grow min-h-px min-w-px bg-transparent border-none outline-none text-[#121314] placeholder:text-[#121314] placeholder:opacity-60"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 522 1">
                    <line stroke="#49454F" x2="522" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[rgba(116,116,116,0.5)] border-solid inset-[-0.5px] pointer-events-none rounded-2xl group-focus-within:border-[#48a2e8] group-focus-within:border-2 transition-all" />
          </div>

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
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 522 1">
                    <line stroke="#49454F" x2="522" y1="0.5" y2="0.5" />
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
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 522 1">
                    <line stroke="#49454F" x2="522" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[rgba(116,116,116,0.5)] border-solid inset-[-0.5px] pointer-events-none rounded-2xl group-focus-within:border-[#48a2e8] group-focus-within:border-2 transition-all" />
          </div>

          {/* Confirm Password Field */}
          <div className="bg-white h-14 relative rounded-2xl shrink-0 w-full group" data-name="Text field">
            <div className="content-stretch flex flex-col h-14 items-start overflow-clip relative rounded-[inherit] w-full">
              <div className="basis-0 bg-[#e6e0e9] content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-t-xl shrink-0 w-full">
                <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-t-xl shrink-0 w-full">
                  <div className="size-full">
                    <div className="box-border content-stretch flex gap-2 items-center px-4 py-3 relative size-full">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm Password"
                        className="basis-0 grow min-h-px min-w-px bg-transparent border-none outline-none text-[#121314] placeholder:text-[#121314] placeholder:opacity-60"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="flex items-center justify-center shrink-0 size-10 hover:bg-gray-100 rounded-full transition-colors"
                      >
                        {showConfirmPassword ? (
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
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 522 1">
                    <line stroke="#49454F" x2="522" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[rgba(116,116,116,0.5)] border-solid inset-[-0.5px] pointer-events-none rounded-2xl group-focus-within:border-[#48a2e8] group-focus-within:border-2 transition-all" />
          </div>
        </div>

        {/* Sign Up Button */}
        <button
          onClick={handleSignUp}
          className="w-full bg-[#48a2e8] hover:bg-[#3a91d6] transition-colors rounded-lg h-12 flex items-center justify-center text-white mb-6"
        >
          Sign Up
        </button>

        {/* Back to Login Link */}
        <div className="text-center">
          <p>
            <span className="text-gray-700">Back To</span>{" "}
            <span 
              className="text-[#2472ee] cursor-pointer hover:underline"
              onClick={() => navigate("/")}
            >
              Login Page
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
