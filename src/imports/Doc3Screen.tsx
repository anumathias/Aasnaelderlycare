import { useNavigate } from "react-router";
import svgPaths from "./svg-z1rfkqb296";
import imgAvatars3DAvatar13 from "figma:asset/acdade26ec8c30dbfc71bfcd81a210fc9231eb9a.png";
import imgAvatars3DAvatar14 from "figma:asset/e194ee7dbf007daf2ccb230f9dc0d1d72b84f188.png";
import imgRectangle833 from "figma:asset/5f9c6a325c11227889f93af7a043cec9d0ea62ee.png";

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p38ded900} fill="var(--fill-0, #49454F)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <Icon />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
      <StateLayer />
    </div>
  );
}

function IconButtonStandard() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[17px] size-[48px] top-[117px]" data-name="Icon button - standard">
      <Content />
    </div>
  );
}

function Component3DAvatars1() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="3D Avatars / 14">
      <div className="absolute inset-0 pointer-events-none rounded-[50px]" data-name="Avatars / 3d_avatar_13">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[50px] size-full" src={imgAvatars3DAvatar13} />
        <div aria-hidden="true" className="absolute border border-[#252222] border-solid inset-0 rounded-[50px]" />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] items-center left-[calc(50%+90px)] p-[16px] top-[37px]">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121314] text-[24px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Aasna</p>
      </div>
      <Component3DAvatars1 />
    </div>
  );
}

function Component3DAvatars() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="3D Avatars / 13">
      <div className="absolute inset-0 pointer-events-none rounded-[50px]" data-name="Avatars / 3d_avatar_13">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[50px] size-full" src={imgAvatars3DAvatar14} />
        <div aria-hidden="true" className="absolute border border-[#252222] border-solid inset-0 rounded-[50px]" />
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 text-[20px] text-nowrap tracking-[0.1px]">
      <div className="[grid-area:1_/_1] flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center ml-0 mt-[10px] relative text-[#066abf] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="font-['Poppins:Regular',sans-serif] leading-[20px] not-italic text-nowrap tracking-[0.1px] whitespace-pre">
          <span className="text-[#121314]">Hi</span>{" "}
        </p>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col font-['Poppins:Regular',sans-serif] justify-center ml-0 mt-[39px] not-italic relative text-[#121314] translate-y-[-50%]">
        <p className="leading-[20px] text-nowrap whitespace-pre">{`William `}</p>
      </div>
    </div>
  );
}

function NameComponent() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] items-center left-[22px] p-[16px] top-[37px] w-[183px]" data-name="Name Component">
      <Component3DAvatars />
      <Group3 />
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute h-[27px] left-[408px] top-[30px] w-[140px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 140 27">
        <g id="Group 427322526">
          <path d={svgPaths.p3be07480} fill="var(--fill-0, #5E87DF)" id="Star 6" />
          <path d={svgPaths.p3325c300} fill="var(--fill-0, #5E87DF)" id="Star 7" />
          <path d={svgPaths.p30aa500} fill="var(--fill-0, #5E87DF)" id="Star 8" />
          <path d={svgPaths.p3b9ad40} fill="var(--fill-0, #5E87DF)" id="Star 9" />
          <path d={svgPaths.p22c3e940} fill="var(--fill-0, #757575)" id="Star 10" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-full bg-gradient-to-br from-[#1F75BE] to-[#1a64a3] rounded-[14px] shadow-[0px_4px_12px_0px_rgba(31,117,190,0.3)]">
      <div className="flex flex-row items-start size-full">
        <div className="box-border content-stretch flex flex-col gap-[6px] p-[16px] relative w-full">
          <div className="flex items-start justify-between w-full gap-[10px]">
            <div className="flex flex-col gap-[4px]">
              <p className="font-['Poppins:Bold',sans-serif] text-[18px] text-white leading-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]">{`Dr. Mary Lawson`}</p>
              <p className="font-['Poppins:Medium',sans-serif] text-[13px] text-white/90 leading-tight">{`General Specialist`}</p>
            </div>
            <div className="flex gap-[3px] items-center shrink-0 mt-[2px] bg-white/20 rounded-[8px] px-[6px] py-[4px]">
              {[1, 2, 3, 4].map((star) => (
                <svg key={star} className="size-[13px]" fill="none" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FFD700" />
                </svg>
              ))}
              <svg className="size-[13px]" fill="none" viewBox="0 0 24 24">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#white" fillOpacity="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="h-[18px] relative shrink-0 w-[15px]" data-name="Group">
      <div className="absolute inset-[-4.17%_-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 20">
          <g id="Group">
            <path d={svgPaths.p24fdbaf2} fill="var(--fill-0, #48A2E8)" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p28466d00} fill="var(--fill-0, #48A2E8)" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center p-[16px] relative w-full">
          <Group />
          <div className="flex flex-col font-['Poppins:ExtraBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#757575] text-[16px] text-center text-nowrap tracking-[0.1px]">
            <p className="leading-[30px] whitespace-pre">{`Boyempally, Hyderabad `}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe] rounded-[14px] p-[16px] shadow-[0px_4px_10px_0px_rgba(72,162,232,0.15)] border-2 border-[#bae6fd]">
      <div className="flex flex-col gap-[12px]">
        {/* Location Section */}
        <div className="flex items-center gap-[10px] bg-white rounded-[10px] p-[12px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05)]">
          <div className="bg-gradient-to-br from-[#48A2E8] to-[#3b8bc7] rounded-[8px] p-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]">
            <svg className="size-[16px]" fill="none" viewBox="0 0 17 20">
              <path d={svgPaths.p24fdbaf2} fill="white" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d={svgPaths.p28466d00} fill="white" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
          <div className="flex flex-col gap-[2px]">
            <p className="font-['Poppins:SemiBold',sans-serif] text-[11px] text-[#48A2E8] leading-tight">Location</p>
            <p className="font-['Poppins:Medium',sans-serif] text-[13px] text-[#121314] leading-tight">{`Boyempally, Hyderabad`}</p>
          </div>
        </div>

        {/* Timing Section */}
        <div className="flex flex-col gap-[8px] bg-white rounded-[10px] p-[12px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05)]">
          <div className="flex items-center gap-[8px] mb-[4px]">
            <div className="bg-gradient-to-br from-[#10b981] to-[#059669] rounded-[6px] p-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]">
              <svg className="size-[14px]" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" fill="none"/>
                <path d="M12 6v6l4 2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <p className="font-['Poppins:SemiBold',sans-serif] text-[11px] text-[#10b981] leading-tight">Working Hours</p>
          </div>
          
          <div className="flex items-center justify-between bg-gradient-to-r from-[#f0fdf4] to-[#dcfce7] rounded-[8px] px-[12px] py-[8px] border border-[#86efac]">
            <div className="flex items-center gap-[6px]">
              <div className="size-[6px] rounded-full bg-[#10b981]"></div>
              <p className="font-['Poppins:SemiBold',sans-serif] text-[12px] text-[#065f46] leading-tight">{`Weekdays`}</p>
            </div>
            <p className="font-['Poppins:Bold',sans-serif] text-[12px] text-[#10b981] leading-tight">9 AM - 6 PM</p>
          </div>
          
          <div className="flex items-center justify-between bg-gradient-to-r from-[#fef3c7] to-[#fde68a] rounded-[8px] px-[12px] py-[8px] border border-[#fcd34d]">
            <div className="flex items-center gap-[6px]">
              <div className="size-[6px] rounded-full bg-[#f59e0b]"></div>
              <p className="font-['Poppins:SemiBold',sans-serif] text-[12px] text-[#92400e] leading-tight">{`Weekends`}</p>
            </div>
            <p className="font-['Poppins:Bold',sans-serif] text-[12px] text-[#f59e0b] leading-tight">11 AM - 4 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DoctorDetailsMainComponent() {
  return (
    <div className="relative shrink-0 w-full" data-name="Doctor Details Main Component">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start p-[4px] relative w-full">
          <Frame />
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-[#5379df] h-[62px] ml-0 mt-0 rounded-[10px] w-[267px]" />
      <div className="[grid-area:1_/_1] flex flex-col font-['Poppins:ExtraBold',sans-serif] justify-center leading-[0] ml-[132.82px] mt-[31px] not-italic relative text-[16px] text-center text-white tracking-[0.1px] translate-x-[-50%] translate-y-[-50%] w-[224.985px]">
        <p className="leading-[30px] whitespace-pre-wrap">{`Experience  : 5 years `}</p>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-[#74c4f7] h-[62px] ml-0 mt-0 rounded-[10px] w-[267px]" />
      <div className="[grid-area:1_/_1] flex flex-col font-['Poppins:ExtraBold',sans-serif] justify-center leading-[0] ml-[132.82px] mt-[31px] not-italic relative text-[16px] text-center text-white tracking-[0.1px] translate-x-[-50%] translate-y-[-50%] w-[224.985px]">
        <p className="leading-[30px]">{`Patients : 503k `}</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center leading-[0] relative shrink-0 w-full px-[0px]">
      <div className="flex-1 bg-gradient-to-br from-[#5379df] to-[#4268ce] h-[54px] rounded-[12px] flex items-center justify-center px-[8px] shadow-[0px_4px_10px_0px_rgba(83,121,223,0.4)] border-2 border-white/20">
        <div className="flex flex-col items-center gap-[2px]">
          <p className="font-['Poppins:ExtraBold',sans-serif] text-[16px] text-center text-white leading-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]">{`5 Years`}</p>
          <p className="font-['Poppins:Medium',sans-serif] text-[10px] text-center text-white/90 leading-tight">{`Experience`}</p>
        </div>
      </div>
      <div className="flex-1 bg-gradient-to-br from-[#74c4f7] to-[#5ab3e6] h-[54px] rounded-[12px] flex items-center justify-center px-[8px] shadow-[0px_4px_10px_0px_rgba(116,196,247,0.4)] border-2 border-white/20">
        <div className="flex flex-col items-center gap-[2px]">
          <p className="font-['Poppins:ExtraBold',sans-serif] text-[16px] text-center text-white leading-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]">{`503k`}</p>
          <p className="font-['Poppins:Medium',sans-serif] text-[10px] text-center text-white/90 leading-tight">{`Patients`}</p>
        </div>
      </div>
    </div>
  );
}

function MaterialSymbolsMoneyBagOutline() {
  return (
    <div className="[grid-area:1_/_1] h-[24px] ml-0 mt-[16px] relative w-[31.739px]" data-name="material-symbols:money-bag-outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 24">
        <g id="material-symbols:money-bag-outline">
          <rect fill="white" height="24" width="31.7389" />
          <path d={svgPaths.p1e101900} fill="var(--fill-0, #943E3D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MynauiRupeeSolid() {
  return (
    <div className="[grid-area:1_/_1] h-[24px] ml-0 mt-[3px] relative w-[31.739px]" data-name="mynaui:rupee-solid">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 24">
        <g id="mynaui:rupee-solid">
          <path d={svgPaths.p3d002680} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[189.11px] mt-0 place-items-start relative">
      <MynauiRupeeSolid />
      <div className="[grid-area:1_/_1] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] ml-[27.77px] mt-[15px] not-italic relative text-[16px] text-black tracking-[0.1px] translate-y-[-50%] w-[40.996px]">
        <p className="leading-[30px]">250</p>
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <div className="[grid-area:1_/_1] flex flex-col font-['Poppins:Regular',sans-serif] justify-center ml-0 mt-[15px] not-italic relative text-[16px] text-black tracking-[0.1px] translate-y-[-50%] w-[191.756px]">
        <p className="leading-[30px] whitespace-pre-wrap">{`In- Clinic  Consult : `}</p>
      </div>
      <Group7 />
    </div>
  );
}

function MynauiRupeeSolid1() {
  return (
    <div className="[grid-area:1_/_1] h-[24px] ml-0 mt-[3px] relative w-[31.739px]" data-name="mynaui:rupee-solid">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 24">
        <g id="mynaui:rupee-solid">
          <path d={svgPaths.p3d002680} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[190.71px] mt-[5px] place-items-start relative">
      <MynauiRupeeSolid1 />
      <div className="[grid-area:1_/_1] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] ml-[27.77px] mt-[15px] not-italic relative text-[16px] text-black tracking-[0.1px] translate-y-[-50%] w-[39.674px]">
        <p className="leading-[30px]">300</p>
      </div>
    </div>
  );
}

function Group9() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[30px] place-items-start relative">
      <div className="[grid-area:1_/_1] flex flex-col font-['Poppins:Regular',sans-serif] justify-center ml-0 mt-[15px] not-italic relative text-[16px] text-black tracking-[0.1px] translate-y-[-50%] w-[156.05px]">
        <p className="leading-[30px]">{`Home Consult : `}</p>
      </div>
      <Group6 />
    </div>
  );
}

function Group10() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-[302.84px] mt-0 place-items-start relative">
      <Group8 />
      <Group9 />
    </div>
  );
}

function Group11() {
  return (
    <div className="flex flex-col gap-[10px] relative shrink-0 w-full px-[0px] bg-gradient-to-br from-[#fff5f5] to-[#ffe8e8] rounded-[14px] p-[16px] shadow-[0px_4px_10px_0px_rgba(148,62,61,0.15)] border-2 border-[#ffdddd]">
      <div className="flex items-center gap-[8px]">
        <div className="bg-white rounded-[10px] p-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]">
          <svg className="size-[20px]" fill="none" viewBox="0 0 32 24">
            <path d={svgPaths.p1e101900} fill="#943E3D" />
          </svg>
        </div>
        <p className="font-['Poppins:Bold',sans-serif] text-[15px] text-[#943E3D] leading-tight">{`Consultation Cost`}</p>
      </div>
      <div className="flex flex-col gap-[8px] pl-[0px] bg-white rounded-[10px] p-[12px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05)]">
        <div className="flex items-center justify-between">
          <p className="font-['Poppins:Medium',sans-serif] text-[12px] text-[#555] leading-tight">{`In-Clinic Consult:`}</p>
          <div className="flex items-center gap-[3px] bg-[#f0f9ff] px-[8px] py-[4px] rounded-[6px]">
            <svg className="size-[13px]" fill="none" viewBox="0 0 32 24">
              <path d={svgPaths.p3d002680} fill="#1F75BE" />
            </svg>
            <p className="font-['Poppins:Bold',sans-serif] text-[13px] text-[#1F75BE] leading-tight">250</p>
          </div>
        </div>
        <div className="h-[1px] bg-gray-200"></div>
        <div className="flex items-center justify-between">
          <p className="font-['Poppins:Medium',sans-serif] text-[12px] text-[#555] leading-tight">{`Home Consult:`}</p>
          <div className="flex items-center gap-[3px] bg-[#f0f9ff] px-[8px] py-[4px] rounded-[6px]">
            <svg className="size-[13px]" fill="none" viewBox="0 0 32 24">
              <path d={svgPaths.p3d002680} fill="#1F75BE" />
            </svg>
            <p className="font-['Poppins:Bold',sans-serif] text-[13px] text-[#1F75BE] leading-tight">300</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[12.5%_12.5%_0.78%_12.5%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 21">
        <g id="Group">
          <path d={svgPaths.p2f84a900} fill="var(--fill-0, #B3261E)" id="Vector" />
          <path d={svgPaths.p1193e080} fill="var(--fill-0, #B3261E)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function MingcuteDoorLine() {
  return (
    <div className="[grid-area:1_/_1] h-[24px] ml-0 mt-[9px] overflow-clip relative w-[24.436px]" data-name="mingcute:door-line">
      <Group1 />
    </div>
  );
}

function Group12() {
  return (
    <div className="flex flex-col gap-[10px] relative shrink-0 w-full px-[0px] bg-gradient-to-br from-[#fff8f5] to-[#ffeee5] rounded-[14px] p-[16px] shadow-[0px_4px_10px_0px_rgba(179,38,30,0.15)] border-2 border-[#ffe5dd]">
      <div className="flex items-center gap-[8px]">
        <div className="bg-white rounded-[10px] p-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]">
          <svg className="size-[20px]" fill="none" viewBox="0 0 19 21">
            <path d={svgPaths.p2f84a900} fill="#B3261E" />
            <path d={svgPaths.p1193e080} fill="#B3261E" />
          </svg>
        </div>
        <p className="font-['Poppins:Bold',sans-serif] text-[15px] text-[#B3261E] leading-tight">{`Door Step Services`}</p>
      </div>
      <div className="bg-white rounded-[10px] p-[12px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05)]">
        <p className="font-['Poppins:Medium',sans-serif] text-[12px] text-[#555] pl-[0px] leading-relaxed">{`Home consults available within 10 Km Radius`}</p>
      </div>
    </div>
  );
}

function AboutDoctorSection() {
  return (
    <div className="flex flex-col gap-[10px] relative shrink-0 w-full px-[0px] bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7] rounded-[14px] p-[16px] shadow-[0px_4px_10px_0px_rgba(16,185,129,0.15)] border-2 border-[#86efac]">
      <div className="flex items-center gap-[8px]">
        <div className="bg-white rounded-[10px] p-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]">
          <svg className="size-[20px]" fill="none" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" fill="#10b981"/>
          </svg>
        </div>
        <p className="font-['Poppins:Bold',sans-serif] text-[15px] text-[#10b981] leading-tight">{`About Doctor`}</p>
      </div>
      
      <div className="bg-white rounded-[10px] p-[14px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05)] flex flex-col gap-[10px]">
        <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#555] leading-relaxed">
          Dr. Mary Lawson is a highly experienced General Specialist with over 5 years of dedicated practice. She specializes in comprehensive healthcare and preventive medicine.
        </p>
        
        <div className="h-[1px] bg-gray-200"></div>
        
        <div className="flex flex-col gap-[8px]">
          <div className="flex items-start gap-[8px]">
            <div className="size-[5px] rounded-full bg-[#10b981] mt-[6px] shrink-0"></div>
            <div className="flex-1">
              <p className="font-['Poppins:SemiBold',sans-serif] text-[11px] text-[#10b981] leading-tight mb-[2px]">Education</p>
              <p className="font-['Poppins:Regular',sans-serif] text-[11px] text-[#555] leading-relaxed">MBBS, MD - General Medicine</p>
            </div>
          </div>
          
          <div className="flex items-start gap-[8px]">
            <div className="size-[5px] rounded-full bg-[#10b981] mt-[6px] shrink-0"></div>
            <div className="flex-1">
              <p className="font-['Poppins:SemiBold',sans-serif] text-[11px] text-[#10b981] leading-tight mb-[2px]">Specializations</p>
              <p className="font-['Poppins:Regular',sans-serif] text-[11px] text-[#555] leading-relaxed">Family Medicine, Preventive Care, Chronic Disease Management</p>
            </div>
          </div>
          
          <div className="flex items-start gap-[8px]">
            <div className="size-[5px] rounded-full bg-[#10b981] mt-[6px] shrink-0"></div>
            <div className="flex-1">
              <p className="font-['Poppins:SemiBold',sans-serif] text-[11px] text-[#10b981] leading-tight mb-[2px]">Languages</p>
              <p className="font-['Poppins:Regular',sans-serif] text-[11px] text-[#555] leading-relaxed">English, Telugu, Hindi</p>
            </div>
          </div>
          
          <div className="flex items-start gap-[8px]">
            <div className="size-[5px] rounded-full bg-[#10b981] mt-[6px] shrink-0"></div>
            <div className="flex-1">
              <p className="font-['Poppins:SemiBold',sans-serif] text-[11px] text-[#10b981] leading-tight mb-[2px]">Registration</p>
              <p className="font-['Poppins:Regular',sans-serif] text-[11px] text-[#555] leading-relaxed">Medical Council Registration No: 12345</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ConsultationMainComponent() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[0] relative shrink-0 w-full" data-name="consultation main component">
      <Group11 />
      <Group12 />
      <AboutDoctorSection />
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] isolate items-center justify-center px-[16px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[24px] text-nowrap text-right text-white tracking-[0.1px] z-[1]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px] whitespace-pre">Book Now</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BuildingBlocksButtonGroupConnectedSegmentsSmall() {
  return (
    <div className="bg-[#1F75BE] h-[50px] min-w-[48px] relative rounded-[12px] shrink-0 w-full mx-[0px] mt-[6px] hover:bg-[#1a64a3] transition-all shadow-[0px_4px_12px_0px_rgba(31,117,190,0.4)] active:scale-[0.98] cursor-pointer" data-name="Building Blocks/Button group/Connected segments/Small">
      <div className="content-stretch flex flex-col gap-[2px] h-[50px] items-center justify-center min-w-inherit overflow-clip relative rounded-[inherit] w-full">
        <div className="flex items-center justify-center">
          <p className="font-['Poppins:SemiBold',sans-serif] text-[15px] text-white leading-tight">Book Now</p>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
      <DoctorDetailsMainComponent />
      <Frame4 />
      <ConsultationMainComponent />
      <BuildingBlocksButtonGroupConnectedSegmentsSmall />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center w-full">
      <div className="h-[260px] relative rounded-[16px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.15)] shrink-0 w-full overflow-hidden">
        <img alt="Dr. Mary Lawson" className="object-cover size-full" style={{ objectPosition: '50% 20%' }} src={imgRectangle833} />
      </div>
      <Frame5 />
    </div>
  );
}

function IcRoundHome() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="ic:round-home">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="ic:round-home">
          <path d={svgPaths.p22846f80} fill="var(--fill-0, #747474)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Home() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[55px]" data-name="Home">
      <IcRoundHome />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#747474] text-[20px] text-center text-nowrap tracking-[0.1px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre">{`Home `}</p>
      </div>
    </div>
  );
}

function GrommetIconsServices() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="grommet-icons:services">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_3_4740)" id="grommet-icons:services">
          <path d={svgPaths.p599f500} id="Vector" stroke="var(--stroke-0, #1F75BE)" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_3_4740">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Services() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[78px]" data-name="Services">
      <GrommetIconsServices />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#1f75be] text-[20px] text-center tracking-[0.1px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">{`Services `}</p>
      </div>
    </div>
  );
}

function MaterialSymbolsPackageOutlineSharp() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="material-symbols:package-outline-sharp">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="material-symbols:package-outline-sharp">
          <path d={svgPaths.p3781a680} fill="var(--fill-0, #747474)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Packages() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[89px]" data-name="Packages">
      <MaterialSymbolsPackageOutlineSharp />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#747474] text-[20px] text-center text-nowrap tracking-[0.1px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre">Packages</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[4.17%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p313dc900} fill="var(--fill-0, #747474)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p819fa00} fill="var(--fill-0, #747474)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function GgProfile() {
  return (
    <div className="overflow-clip relative shrink-0 size-[22px]" data-name="gg:profile">
      <Group2 />
    </div>
  );
}

function Profile() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[60px]" data-name="Profile">
      <GgProfile />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#747474] text-[20px] text-center text-nowrap tracking-[0.1px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre">{`Profile `}</p>
      </div>
    </div>
  );
}

function NavBar() {
  return (
    <div className="absolute bg-white bottom-0 box-border content-stretch flex gap-[71px] items-center justify-center left-1/2 pb-[32px] pt-[24px] px-[32px] translate-x-[-50%] w-[586px]" data-name="Nav Bar">
      <Home />
      <Services />
      <Packages />
      <Profile />
    </div>
  );
}

export default function Doc3Screen() {
  const navigate = useNavigate();
  
  return (
    <div className="bg-[#f8f9fa] relative w-full h-screen max-w-[393px] mx-auto flex flex-col" data-name="Doc 3 Screen">
      {/* Header */}
      <div className="bg-white px-[14px] py-[10px] flex items-center justify-between sticky top-0 z-20 border-b border-gray-200 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.05)]">
        <div className="flex items-center gap-[8px]">
          <Component3DAvatars />
          <div className="flex items-baseline gap-[4px]">
            <span className="font-['Poppins:Regular',sans-serif] text-[13px] text-[#121314]">Hi</span>
            <span className="font-['Poppins:Medium',sans-serif] text-[13px] text-[#121314]">William</span>
          </div>
        </div>
        <div className="flex items-center gap-[8px]">
          <span className="font-['Poppins:SemiBold',sans-serif] text-[13px] text-[#121314]">Aasna</span>
          <Component3DAvatars1 />
        </div>
      </div>

      {/* Back Button */}
      <div className="px-[14px] py-[8px] flex items-center relative">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center justify-center size-[40px] rounded-full hover:bg-[#1F75BE]/10 transition-all active:scale-95 border border-gray-200 hover:border-[#1F75BE]"
        >
          <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="#1F75BE" />
          </svg>
        </button>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-[14px] pb-[90px]">
        <Frame6 />
      </div>
    </div>
  );
}