import svgPaths from "./svg-7fya4dvz7r";
import imgAvatars3DAvatar13 from "figma:asset/9b9cd8f18109509a8dc50d19c1287a7f6dd49d2f.png";

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
    <div className="absolute content-stretch flex items-center justify-center left-[19px] size-[40px] top-[50px]" data-name="State-layer">
      <Icon />
    </div>
  );
}

function Component3DAvatars() {
  return (
    <div className="relative shrink-0 size-[150px]" data-name="3D Avatars / 15">
      <div className="absolute inset-0 pointer-events-none rounded-[50px]" data-name="Avatars / 3d_avatar_13">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[50px] size-full" src={imgAvatars3DAvatar13} />
        <div aria-hidden="true" className="absolute border border-[#252222] border-solid inset-0 rounded-[50px]" />
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] relative shrink-0 text-[#2e2e2e] tracking-[0.1px] w-[149px]">
      <div className="flex flex-col font-['Roboto:ExtraBold',sans-serif] font-extrabold justify-center relative shrink-0 text-[24px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Patient Name</p>
      </div>
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">56 y | Female</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0">
      <Component3DAvatars />
      <Frame16 />
    </div>
  );
}

function UilCalender() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="uil:calender">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="uil:calender">
          <path d={svgPaths.p1c3b9bf0} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-[#3dab51] box-border content-stretch flex gap-[16px] items-center p-[16px] relative rounded-[16px] shrink-0">
      <UilCalender />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[0.1px] w-[163px]">
        <p className="leading-[20px]">Next Appointment</p>
      </div>
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[0.1px] w-[292px]">
        <p className="leading-[20px]">{`: 10/11/25 (3 days) `}</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-3.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
          <g id="Group">
            <g id="Vector">
              <path d={svgPaths.p3b937e80} fill="var(--fill-0, #D52828)" />
              <path d={svgPaths.p3b937e80} stroke="var(--stroke-0, #CD3F3F)" strokeLinecap="round" strokeWidth="1.5" />
            </g>
            <path d={svgPaths.p3d5a2980} fill="var(--fill-0, #D52828)" id="Vector_2" stroke="var(--stroke-0, #CD3F3F)" strokeWidth="1.5" />
            <g id="Vector_3">
              <path d={svgPaths.p30634200} fill="var(--fill-0, #D52828)" />
              <path d={svgPaths.p345c4c00} stroke="var(--stroke-0, #CD3F3F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function HugeiconsBlood() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="hugeicons:blood">
      <Group />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <HugeiconsBlood />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black tracking-[0.1px] w-[163px]">
        <p className="leading-[20px]">Ongoing Condition</p>
      </div>
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black tracking-[0.1px] w-[292px]">
        <p className="leading-[20px]">{`: Low Blood Pressure `}</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-center justify-center px-[16px] py-0 relative w-full">
          <Frame />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 519 1">
                <line id="Line 145" stroke="var(--stroke-0, #BDD5FD)" x2="519" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LucideMilestone() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="lucide:milestone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="lucide:milestone">
          <g id="Vector">
            <path d={svgPaths.p5e0bef0} fill="var(--fill-0, #066ABF)" />
            <path d={svgPaths.p39188a00} stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <LucideMilestone />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black tracking-[0.1px] w-[163px]">
        <p className="leading-[20px]">Ongoing Condition</p>
      </div>
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black tracking-[0.1px] w-[292px]">
        <p className="leading-[20px]">{`: Medical Checkup for Kidney stones `}</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-center justify-center px-[16px] py-0 relative w-full">
          <Frame1 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 519 1">
                <line id="Line 145" stroke="var(--stroke-0, #BDD5FD)" x2="519" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function UilCalender1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="uil:calender">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="uil:calender">
          <path d={svgPaths.p1c3b9bf0} fill="var(--fill-0, #066ABF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <UilCalender1 />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black tracking-[0.1px] w-[163px]">
        <p className="leading-[20px]">Last Checkup</p>
      </div>
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black tracking-[0.1px] w-[292px]">
        <p className="leading-[20px]">: 14/10/25</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-center justify-center px-[16px] py-0 relative w-full">
          <Frame5 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 519 1">
                <line id="Line 145" stroke="var(--stroke-0, #BDD5FD)" x2="519" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MdiDoctor() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="mdi:doctor">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="mdi:doctor">
          <path d={svgPaths.p3a73a300} fill="var(--fill-0, #066ABF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <MdiDoctor />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black tracking-[0.1px] w-[163px]">
        <p className="leading-[20px]">{`Consult Doctor `}</p>
      </div>
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black tracking-[0.1px] w-[292px]">
        <p className="leading-[20px]">{`: Dr Martin Son `}</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-center justify-center px-[16px] py-0 relative w-full">
          <Frame10 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 519 1">
                <line id="Line 145" stroke="var(--stroke-0, #BDD5FD)" x2="519" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function UilCalender2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="uil:calender">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="uil:calender">
          <path d={svgPaths.p1c3b9bf0} fill="var(--fill-0, #066ABF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <UilCalender2 />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black tracking-[0.1px] w-[163px]">
        <p className="leading-[20px]">Next Appointment</p>
      </div>
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black tracking-[0.1px] w-[292px]">
        <p className="leading-[20px]">{`: 10/11/25 `}</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-center justify-center px-[16px] py-0 relative w-full">
          <Frame11 />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[16px] items-start px-0 py-[16px] relative rounded-[16px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#bdd5fd] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame2 />
      <Frame6 />
      <Frame7 />
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2e2e2e] text-[20px] tracking-[0.1px] w-full">
        <p className="leading-[20px]">{`Health Condition `}</p>
      </div>
      <Frame3 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[2.08%_10.42%_2.08%_6.25%]" data-name="Group">
      <div className="absolute inset-[-2.17%_-2.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 24">
          <g id="Group">
            <g id="Vector">
              <path d={svgPaths.p23f13900} fill="var(--fill-0, #BDD5FD)" />
              <path d={svgPaths.p140c153e} stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
            </g>
            <path d={svgPaths.p25efa00} fill="var(--fill-0, #BDD5FD)" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
            <path d={svgPaths.p2dc9e000} fill="var(--fill-0, #BDD5FD)" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
            <path d={svgPaths.p17734a80} fill="var(--fill-0, #BDD5FD)" id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function StreamlineCyberDoctor() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="streamline-cyber:doctor">
      <Group1 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <StreamlineCyberDoctor />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black tracking-[0.1px] w-[163px]">
        <p className="leading-[20px]">Past Surgeries</p>
      </div>
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black tracking-[0.1px] w-[292px]">
        <p className="leading-[20px]">{`: Knee injury `}</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-center justify-center px-[16px] py-0 relative w-full">
          <Frame12 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 519 1">
                <line id="Line 145" stroke="var(--stroke-0, #BDD5FD)" x2="519" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MdiHeart() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="mdi:heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="mdi:heart">
          <path d={svgPaths.p18ccc940} fill="var(--fill-0, #D42B2B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <MdiHeart />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black tracking-[0.1px] w-[163px]">
        <p className="leading-[20px]">Family History</p>
      </div>
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black tracking-[0.1px] w-[292px]">
        <p className="leading-[20px]">{`: Heart Disease `}</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-center justify-center px-[16px] py-0 relative w-full">
          <Frame14 />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[16px] items-start px-0 py-[16px] relative rounded-[16px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#bdd5fd] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame13 />
      <Frame15 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2e2e2e] text-[20px] tracking-[0.1px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">{`Medical  History  `}</p>
      </div>
      <Frame4 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[16px] top-[139px] w-[551px]">
      <Frame19 />
      <Frame20 />
      <Frame18 />
      <Frame17 />
    </div>
  );
}

function IcRoundHome() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="ic:round-home">
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
    <div className="relative shrink-0 size-[32px]" data-name="grommet-icons:services">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_3_3216)" id="grommet-icons:services">
          <path d={svgPaths.p599f500} id="Vector" stroke="var(--stroke-0, #747474)" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_3_3216">
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
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#747474] text-[20px] text-center tracking-[0.1px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">{`Services `}</p>
      </div>
    </div>
  );
}

function MaterialSymbolsPackageOutlineSharp() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="material-symbols:package-outline-sharp">
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
          <path clipRule="evenodd" d={svgPaths.p313dc900} fill="var(--fill-0, #1F75BE)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p819fa00} fill="var(--fill-0, #1F75BE)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function GgProfile() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="gg:profile">
      <Group2 />
    </div>
  );
}

function Profile() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[60px]" data-name="Profile">
      <GgProfile />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1f75be] text-[20px] text-center text-nowrap tracking-[0.1px]" style={{ fontVariationSettings: "'wdth' 100" }}>
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

export default function MoreDetailsPatientsProfile() {
  return (
    <div className="bg-white relative size-full" data-name="More details - patients profile">
      <div className="absolute left-[54px] size-[100px] top-[139px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Rectangle 854"></g>
        </svg>
      </div>
      <StateLayer />
      <Frame21 />
      <NavBar />
      <div className="absolute bg-[#131111] h-[11px] left-[163px] top-[1201px] w-[261px]" />
    </div>
  );
}