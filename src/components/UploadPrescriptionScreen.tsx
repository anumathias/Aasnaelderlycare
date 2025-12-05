import { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router";
import { ArrowLeft, Upload, X, Camera, Image as ImageIcon, CheckCircle } from "lucide-react";
import FakePrescription from "./FakePrescription";
import BottomNavBar from "./BottomNavBar";

export default function UploadPrescriptionScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const medicineName = location.state?.medicineName || "Medicine";
  const [uploadedPrescription, setUploadedPrescription] = useState(false);
  const [fileName, setFileName] = useState<string>("");
  const [isUploading, setIsUploading] = useState(false);
  
  // Generate prescription reference ID
  const prescriptionId = `RX${Date.now().toString().slice(-8)}`;

  const handleUploadClick = () => {
    // Simulate uploading process with fake prescription
    setIsUploading(true);
    setTimeout(() => {
      setUploadedPrescription(true);
      setFileName(`Prescription_${medicineName.replace(/\s+/g, '_')}_${Date.now()}.pdf`);
      setIsUploading(false);
    }, 1000);
  };

  const handleRemoveImage = () => {
    setUploadedPrescription(false);
    setFileName("");
  };

  const handleSubmit = () => {
    if (uploadedPrescription) {
      // Navigate to payment screen
      navigate("/prescription-payment", {
        state: {
          medicineName,
          requestType: "prescription",
          requestId: prescriptionId
        }
      });
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#f8f9fa] to-white min-h-screen w-full max-w-[393px] mx-auto relative flex flex-col">
      <div className="px-[16px] pt-[16px] pb-[120px] flex-1 flex flex-col overflow-y-auto">
        {/* Header */}
        <div className="flex items-center gap-[12px] mb-[24px]">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center justify-center size-[40px] rounded-full hover:bg-[#1F75BE]/10 transition-all active:scale-95 border border-gray-200 hover:border-[#1F75BE]"
          >
            <ArrowLeft className="size-[24px] text-[#1F75BE]" />
          </button>
          <h1 className="font-['Poppins:SemiBold',sans-serif] text-[20px] text-[#121314]">
            Upload Prescription
          </h1>
        </div>

        {/* Medicine Name Badge */}
        <div className="bg-white rounded-[16px] px-[20px] py-[12px] border border-gray-300 shadow-sm mb-[24px]">
          <p className="font-['Poppins:Regular',sans-serif] text-[13px] text-[#5f6368] mb-[4px]">
            Medicine Requested
          </p>
          <p className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-[#1F75BE]">
            {medicineName}
          </p>
        </div>

        {/* Instructions */}
        <div className="bg-[#e8f4fd] rounded-[16px] p-[16px] mb-[24px] border border-[#1F75BE]/20">
          <p className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-[#121314] mb-[8px]">
            📋 Instructions
          </p>
          <ul className="space-y-[6px]">
            <li className="font-['Poppins:Regular',sans-serif] text-[13px] text-[#5f6368] flex items-start gap-[8px]">
              <span className="text-[#1F75BE] mt-[2px]">•</span>
              <span>Upload a clear image of your doctor's prescription</span>
            </li>
            <li className="font-['Poppins:Regular',sans-serif] text-[13px] text-[#5f6368] flex items-start gap-[8px]">
              <span className="text-[#1F75BE] mt-[2px]">•</span>
              <span>Ensure all text is readable and not blurry</span>
            </li>
            <li className="font-['Poppins:Regular',sans-serif] text-[13px] text-[#5f6368] flex items-start gap-[8px]">
              <span className="text-[#1F75BE] mt-[2px]">•</span>
              <span>Accepted formats: JPG, PNG, PDF</span>
            </li>
          </ul>
        </div>

        {/* Upload Area */}
        {!uploadedPrescription ? (
          <div className="flex-1 flex flex-col">
            <button
              onClick={handleUploadClick}
              disabled={isUploading}
              className="w-full border-2 border-dashed border-[#1F75BE] rounded-[20px] bg-[#f8fbff] hover:bg-[#f0f7ff] transition-all p-[32px] flex flex-col items-center justify-center gap-[16px] active:scale-[0.98] min-h-[300px] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className={`size-[80px] bg-[#1F75BE]/10 rounded-full flex items-center justify-center ${isUploading ? 'animate-pulse' : ''}`}>
                <Upload className="size-[40px] text-[#1F75BE]" />
              </div>
              <div className="text-center">
                <p className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-[#121314] mb-[8px]">
                  {isUploading ? "Uploading..." : "Upload Prescription"}
                </p>
                <p className="font-['Poppins:Regular',sans-serif] text-[14px] text-[#5f6368]">
                  {isUploading ? "Please wait..." : "Tap to browse files"}
                </p>
              </div>
            </button>

            {/* Camera and Gallery Options */}
            <div className="grid grid-cols-2 gap-[12px] mt-[16px]">
              <button
                onClick={handleUploadClick}
                disabled={isUploading}
                className="bg-white border border-gray-300 rounded-[12px] py-[16px] flex flex-col items-center gap-[8px] hover:bg-gray-50 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Camera className="size-[28px] text-[#1F75BE]" />
                <span className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-[#121314]">
                  Take Photo
                </span>
              </button>
              <button
                onClick={handleUploadClick}
                disabled={isUploading}
                className="bg-white border border-gray-300 rounded-[12px] py-[16px] flex flex-col items-center gap-[8px] hover:bg-gray-50 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ImageIcon className="size-[28px] text-[#1F75BE]" />
                <span className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-[#121314]">
                  From Gallery
                </span>
              </button>
            </div>
          </div>
        ) : (
          <div className="flex-1 flex flex-col">
            {/* Preview */}
            <div className="bg-white rounded-[16px] border border-gray-300 shadow-sm overflow-hidden mb-[16px]">
              <div className="bg-[#f8f9fa] px-[16px] py-[12px] border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center gap-[12px]">
                  <CheckCircle className="size-[20px] text-[#3DAB51]" />
                  <span className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-[#121314]">
                    Prescription Uploaded
                  </span>
                </div>
                <button
                  onClick={handleRemoveImage}
                  className="size-[32px] flex items-center justify-center rounded-full hover:bg-gray-200 transition-all"
                >
                  <X className="size-[18px] text-[#f60808]" />
                </button>
              </div>
              <div className="p-[16px] max-h-[500px] overflow-y-auto">
                <FakePrescription medicineName={medicineName} />
              </div>
            </div>

            {/* File Name */}
            <div className="bg-[#f8f9fa] rounded-[12px] px-[16px] py-[12px] mb-[16px] border border-gray-200">
              <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#5f6368] mb-[4px]">
                File Name
              </p>
              <p className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-[#121314] truncate">
                {fileName}
              </p>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-[#1F75BE] to-[#1a64a3] hover:from-[#1a64a3] hover:to-[#155a8f] text-white rounded-[12px] py-[16px] font-['Poppins:SemiBold',sans-serif] text-[16px] transition-all active:scale-[0.98] shadow-md"
            >
              Continue to Payment
            </button>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <BottomNavBar />
    </div>
  );
}
