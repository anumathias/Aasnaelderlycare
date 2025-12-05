import { useState } from "react";
import { useNavigate } from "react-router";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import imgImage274 from "figma:asset/dead436823039beb2e176129f164ba7674d71cdc.png";
import { toast } from "sonner@2.0.3";

export default function GoogleSignIn() {
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

    toast.success("Signed in with Google successfully!");
    setTimeout(() => {
      navigate("/home");
    }, 1000);
  };

  return (
    <div className="bg-[#f0f2f5] min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center justify-center size-[40px] rounded-full hover:bg-[#1F75BE]/10 transition-all active:scale-95 border border-gray-200 hover:border-[#1F75BE] mb-6"
        >
          <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="#1F75BE" />
          </svg>
        </button>

        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Google Logo */}
          <div className="flex justify-center mb-6">
            <div className="size-16">
              <img alt="Google" className="size-full object-contain" src={imgImage274} />
            </div>
          </div>

          <div className="text-center mb-6">
            <h1 className="text-2xl mb-2">Sign in with Google</h1>
            <p className="text-gray-600">Use your Google Account</p>
          </div>

          {/* Input Fields */}
          <div className="space-y-4 mb-4">
            {/* Email Field */}
            <div className="bg-white h-14 relative rounded-lg shrink-0 w-full group">
              <div className="content-stretch flex flex-col h-14 items-start overflow-clip relative rounded-[inherit] w-full">
                <div className="basis-0 bg-[#f5f6f7] content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-lg shrink-0 w-full">
                  <div className="basis-0 bg-[#f5f6f7] grow min-h-px min-w-px relative rounded-lg shrink-0 w-full">
                    <div className="size-full">
                      <div className="box-border content-stretch flex gap-2 items-center px-4 py-3 relative size-full">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email or phone"
                          className="basis-0 grow min-h-px min-w-px bg-transparent border-none outline-none text-[#121314] placeholder:text-gray-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-gray-300 border-solid inset-[-0.5px] pointer-events-none rounded-lg group-focus-within:border-[#4285F4] group-focus-within:border-2 transition-all" />
            </div>

            {/* Password Field */}
            <div className="content-stretch flex flex-col h-14 items-start relative rounded-lg shrink-0 w-full group">
              <div aria-hidden="true" className="absolute border border-gray-300 border-solid inset-[-0.5px] pointer-events-none rounded-lg group-focus-within:border-[#4285F4] group-focus-within:border-2 transition-all" />
              <div className="basis-0 bg-[#f5f6f7] content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-lg shrink-0 w-full">
                <div className="basis-0 bg-[#f5f6f7] grow min-h-px min-w-px relative rounded-lg shrink-0 w-full">
                  <div className="size-full">
                    <div className="box-border content-stretch flex gap-2 items-center px-4 py-3 relative size-full">
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="basis-0 grow min-h-px min-w-px bg-transparent border-none outline-none text-[#121314] placeholder:text-gray-500"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="flex items-center justify-center shrink-0 size-10 hover:bg-gray-200 rounded-full transition-colors"
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
            </div>
          </div>

          {/* Sign In Button */}
          <button
            onClick={handleSignIn}
            className="w-full bg-[#4285F4] hover:bg-[#357ae8] transition-colors rounded-lg h-12 flex items-center justify-center text-white mb-4"
          >
            Sign in
          </button>

          {/* Forgot Password */}
          <div className="text-center mb-4">
            <span 
              onClick={() => navigate("/forgot-password/google")}
              className="text-[#4285F4] text-sm cursor-pointer hover:underline"
            >
              Forgot password?
            </span>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-300 my-6" />

          {/* Footer */}
          <div className="text-center text-sm text-gray-600">
            <p>
              Not your computer? Use Guest mode to sign in privately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
