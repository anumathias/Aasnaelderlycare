interface FakePrescriptionProps {
  medicineName: string;
}

export default function FakePrescription({ medicineName }: FakePrescriptionProps) {
  const today = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="bg-white p-[24px] rounded-[12px] border-2 border-gray-300 shadow-lg max-w-full">
      {/* Header */}
      <div className="border-b-2 border-[#1F75BE] pb-[16px] mb-[20px]">
        <div className="flex items-center justify-between mb-[8px]">
          <div>
            <h1 className="font-['Poppins:Bold',sans-serif] text-[20px] text-[#1F75BE]">
              Dr. Rajesh Kumar
            </h1>
            <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#5f6368]">
              MBBS, MD (General Medicine)
            </p>
            <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#5f6368]">
              Reg. No: MCI-12345
            </p>
          </div>
          <div className="size-[60px] bg-[#1F75BE] rounded-full flex items-center justify-center">
            <span className="font-['Poppins:Bold',sans-serif] text-[24px] text-white">
              Rx
            </span>
          </div>
        </div>
        <p className="font-['Poppins:Regular',sans-serif] text-[11px] text-[#5f6368]">
          Apollo Clinic, Secunderabad | Ph: +91 9876543210
        </p>
      </div>

      {/* Patient Details */}
      <div className="mb-[20px] bg-[#f8f9fa] rounded-[8px] p-[12px]">
        <div className="grid grid-cols-2 gap-[8px]">
          <div>
            <p className="font-['Poppins:SemiBold',sans-serif] text-[11px] text-[#5f6368]">
              Patient Name
            </p>
            <p className="font-['Poppins:Medium',sans-serif] text-[13px] text-[#121314]">
              John Doe
            </p>
          </div>
          <div>
            <p className="font-['Poppins:SemiBold',sans-serif] text-[11px] text-[#5f6368]">
              Age/Gender
            </p>
            <p className="font-['Poppins:Medium',sans-serif] text-[13px] text-[#121314]">
              32 Years / Male
            </p>
          </div>
          <div>
            <p className="font-['Poppins:SemiBold',sans-serif] text-[11px] text-[#5f6368]">
              Date
            </p>
            <p className="font-['Poppins:Medium',sans-serif] text-[13px] text-[#121314]">
              {today}
            </p>
          </div>
          <div>
            <p className="font-['Poppins:SemiBold',sans-serif] text-[11px] text-[#5f6368]">
              Patient ID
            </p>
            <p className="font-['Poppins:Medium',sans-serif] text-[13px] text-[#121314]">
              PT-2024-0892
            </p>
          </div>
        </div>
      </div>

      {/* Diagnosis */}
      <div className="mb-[16px]">
        <p className="font-['Poppins:SemiBold',sans-serif] text-[12px] text-[#1F75BE] mb-[6px]">
          DIAGNOSIS:
        </p>
        <p className="font-['Poppins:Regular',sans-serif] text-[13px] text-[#121314]">
          Acute Pain Management
        </p>
      </div>

      {/* Prescription */}
      <div className="mb-[20px] border-2 border-dashed border-[#1F75BE] rounded-[8px] p-[16px] bg-[#f8fbff]">
        <p className="font-['Poppins:Bold',sans-serif] text-[14px] text-[#1F75BE] mb-[12px]">
          ℞ PRESCRIPTION
        </p>
        
        <div className="space-y-[12px]">
          <div className="bg-white rounded-[6px] p-[12px] border border-gray-200">
            <div className="flex items-start justify-between mb-[6px]">
              <p className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-[#121314]">
                1. {medicineName}
              </p>
              <span className="bg-[#1F75BE] text-white px-[8px] py-[2px] rounded-[4px] font-['Poppins:SemiBold',sans-serif] text-[10px]">
                PRIMARY
              </span>
            </div>
            <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#5f6368] mb-[4px]">
              Dosage: 500mg
            </p>
            <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#5f6368]">
              Frequency: Twice daily after meals
            </p>
            <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#5f6368]">
              Duration: 7 days
            </p>
          </div>

          <div className="bg-white rounded-[6px] p-[12px] border border-gray-200">
            <p className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-[#121314] mb-[6px]">
              2. Vitamin D3 Supplements
            </p>
            <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#5f6368] mb-[4px]">
              Dosage: 60,000 IU
            </p>
            <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#5f6368]">
              Frequency: Once weekly
            </p>
            <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#5f6368]">
              Duration: 8 weeks
            </p>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="mb-[20px] bg-[#fff9e6] rounded-[8px] p-[12px] border border-[#ffd700]/30">
        <p className="font-['Poppins:SemiBold',sans-serif] text-[12px] text-[#121314] mb-[8px]">
          📋 Instructions:
        </p>
        <ul className="space-y-[4px] ml-[16px]">
          <li className="font-['Poppins:Regular',sans-serif] text-[11px] text-[#5f6368]">
            • Take medicines as prescribed
          </li>
          <li className="font-['Poppins:Regular',sans-serif] text-[11px] text-[#5f6368]">
            • Drink plenty of water
          </li>
          <li className="font-['Poppins:Regular',sans-serif] text-[11px] text-[#5f6368]">
            • Avoid alcohol during medication
          </li>
          <li className="font-['Poppins:Regular',sans-serif] text-[11px] text-[#5f6368]">
            • Contact if symptoms persist
          </li>
        </ul>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-300 pt-[16px] flex items-end justify-between">
        <div>
          <p className="font-['Poppins:Regular',sans-serif] text-[10px] text-[#5f6368] mb-[8px]">
            Next Follow-up: {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US')}
          </p>
        </div>
        <div className="text-right">
          <div className="w-[120px] border-t-2 border-[#121314] mb-[4px]"></div>
          <p className="font-['Pacifico',cursive] text-[16px] text-[#121314]">
            Dr. R. Kumar
          </p>
          <p className="font-['Poppins:Regular',sans-serif] text-[10px] text-[#5f6368]">
            Doctor's Signature
          </p>
        </div>
      </div>

      {/* Watermark */}
      <div className="mt-[16px] text-center">
        <p className="font-['Poppins:Regular',sans-serif] text-[9px] text-[#5f6368]">
          This is a valid prescription | Keep this document safe | Do not self-medicate
        </p>
      </div>
    </div>
  );
}
