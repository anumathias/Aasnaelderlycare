import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { ArrowLeft, Eye, EyeOff, Check, X } from "lucide-react";
import { toast } from "sonner@2.0.3";

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "williamroy@example.com";

  // Password validation checks
  const hasMinLength = newPassword.length >= 6;
  const hasNumber = /\d/.test(newPassword);
  const passwordsMatch = newPassword === confirmPassword && newPassword !== "";

  const handleResetPassword = () => {
    if (!newPassword || !confirmPassword) {
      toast.error("Please fill in all fields");
      return;
    }

    if (newPassword.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    if (!hasNumber) {
      toast.error("Password must contain at least one number");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    // Save the new password to localStorage
    localStorage.setItem(`userPassword_${email}`, newPassword);

    toast.success("Password reset successful! Please login with your new password.");
    setTimeout(() => {
      navigate("/login");
    }, 1500);
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back Button */}
        <button
          onClick={() => navigate("/forgot-password")}
          className="flex items-center gap-2 mb-8 text-[#1F75BE] hover:text-[#165a94] transition-colors"
        >
          <ArrowLeft className="size-5" />
          <span>Back</span>
        </button>

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-[#1F75BE] text-[28px] mb-2">Reset Password</h1>
          <p className="text-gray-600 text-[14px]">
            Create a new password for {email}
          </p>
        </div>

        {/* New Password Field */}
        <div className="mb-4">
          <div className="bg-white h-14 relative rounded-2xl shrink-0 w-full group" data-name="Text field">
            <div className="content-stretch flex flex-col h-14 items-start overflow-clip relative rounded-[inherit] w-full">
              <div className="basis-0 bg-[#e6e0e9] content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-t-xl shrink-0 w-full">
                <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-t-xl shrink-0 w-full">
                  <div className="size-full">
                    <div className="box-border content-stretch flex gap-2 items-center px-4 py-3 relative size-full">
                      <input
                        type={showNewPassword ? "text" : "password"}
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="New Password"
                        className="basis-0 grow min-h-px min-w-px bg-transparent border-none outline-none text-[#121314] placeholder:text-[#121314] placeholder:opacity-60"
                      />
                      <button
                        type="button"
                        onClick={() => setShowNewPassword(!showNewPassword)}
                        className="flex items-center justify-center shrink-0 size-10 hover:bg-gray-100 rounded-full transition-colors"
                      >
                        {showNewPassword ? (
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

        {/* Confirm Password Field */}
        <div className="mb-6">
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
                        onKeyPress={(e) => e.key === 'Enter' && handleResetPassword()}
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
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 514 1">
                    <line stroke="#49454F" x2="514" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[rgba(116,116,116,0.5)] border-solid inset-[-0.5px] pointer-events-none rounded-2xl group-focus-within:border-[#48a2e8] group-focus-within:border-2 transition-all" />
          </div>
        </div>

        {/* Password Requirements */}
        <div className="mb-6 space-y-2 bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-700 mb-2">Password requirements:</p>
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-sm">
              {hasMinLength ? (
                <Check className="size-4 text-green-600" />
              ) : (
                <X className="size-4 text-gray-400" />
              )}
              <span className={hasMinLength ? "text-green-600" : "text-gray-600"}>
                At least 6 characters
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              {hasNumber ? (
                <Check className="size-4 text-green-600" />
              ) : (
                <X className="size-4 text-gray-400" />
              )}
              <span className={hasNumber ? "text-green-600" : "text-gray-600"}>
                Contains at least one number
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              {passwordsMatch ? (
                <Check className="size-4 text-green-600" />
              ) : (
                <X className="size-4 text-gray-400" />
              )}
              <span className={passwordsMatch ? "text-green-600" : "text-gray-600"}>
                Passwords match
              </span>
            </div>
          </div>
        </div>

        {/* Reset Password Button */}
        <button
          onClick={handleResetPassword}
          className="w-full bg-[#1F75BE] hover:bg-[#165a94] transition-colors rounded-lg h-12 flex items-center justify-center text-white disabled:bg-gray-400 disabled:cursor-not-allowed"
          disabled={!hasMinLength || !hasNumber || !passwordsMatch}
        >
          Reset Password
        </button>
      </div>
    </div>
  );
}
