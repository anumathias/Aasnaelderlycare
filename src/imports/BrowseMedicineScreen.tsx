import svgPaths from "./svg-sau85v1a4y";
import imgAvatars3DAvatar13 from "figma:asset/e194ee7dbf007daf2ccb230f9dc0d1d72b84f188.png";

function Group6() {
  return (
    <div className="absolute contents left-[calc(50%+115px)] top-[680px]">
      <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] left-[calc(50%+173px)] text-[24px] text-center text-nowrap text-white top-[690px] tracking-[0.1px] translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre">Care Taker</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px mr-[-16px] relative shrink-0" data-name="Content">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[20px] py-0 relative size-full">
          <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#121314] text-[16px] text-nowrap tracking-[0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[24px] whitespace-pre">{`Search for Medicines `}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pc423380} fill="var(--fill-0, #121314)" id="icon" />
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

function Content1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
      <StateLayer />
    </div>
  );
}

function Component1stTrailingIcon() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="1st trailing-icon">
      <Content1 />
    </div>
  );
}

function TrailingElements() {
  return (
    <div className="absolute content-stretch flex items-center justify-end right-[4px] top-1/2 translate-y-[-50%]" data-name="Trailing-Elements">
      <Component1stTrailingIcon />
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center pl-[4px] pr-[20px] py-[4px] relative size-full">
          <Content />
          <TrailingElements />
        </div>
      </div>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="absolute bg-[#ece6f0] h-[56px] left-[16px] max-w-[720px] rounded-[28px] top-[154px] w-[553px]" data-name="Search bar">
      <div className="content-stretch flex gap-[4px] h-[56px] items-center max-w-inherit overflow-clip relative rounded-[inherit] w-[553px]">
        <StateLayer1 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-[-0.5px] pointer-events-none rounded-[28.5px]" />
    </div>
  );
}

function Group() {
  return (
    <div className="[grid-area:1_/_1] h-[48.26px] ml-0 mt-0 relative w-[50px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 49">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p2d3a9f40} fill="var(--fill-0, #5E87DF)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p9b03600} fill="var(--fill-0, #5E87DF)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[48.45%] mt-[21.05%] place-items-start relative" data-name="Group">
      <Group />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute bottom-[8.33%] left-1/4 right-1/4 top-[8.33%]" data-name="Group">
      <div className="absolute inset-[-1.74%_-2.91%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 60">
          <g id="Group">
            <path d={svgPaths.p1a97f800} fill="var(--fill-0, #2F88FF)" id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="2" />
            <path d="M1 21.0582H35.3856" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
            <path d="M1 16.76V25.3564" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M35.3856 16.76V25.3564" id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p4058b80} fill="var(--fill-0, #2F88FF)" id="Vector_5" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="2" />
            <path d="M12.4619 39.6838H23.9237" id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
            <path d="M18.1928 33.9528V45.4147" id="Vector_7" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconParkMedicineBottle() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 overflow-clip relative size-[68.771px]" data-name="icon-park:medicine-bottle">
      <Group2 />
    </div>
  );
}

function Group7() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[11px] mt-[23.82px] place-items-start relative">
      <Group1 />
      <IconParkMedicineBottle />
    </div>
  );
}

function Group8() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] h-[115.824px] ml-0 mt-0 relative w-[120px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 116">
          <ellipse cx="60" cy="57.9118" fill="var(--fill-0, white)" id="Ellipse 1131" rx="60" ry="57.9118" />
        </svg>
      </div>
      <Group7 />
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[13px] grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#2a2525] tracking-[0.1px]">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center relative shrink-0 text-[20px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">{`Pain Relief   `}</p>
      </div>
      <div className="flex flex-col font-['Poppins:Light',sans-serif] justify-center relative shrink-0 text-[16px] w-full">
        <p className="leading-[20px]">{`Quick find Pain relief for common aches and discomfort `}</p>
      </div>
    </div>
  );
}

function PainKillerMainCoponent() {
  return (
    <div className="bg-white relative rounded-[16px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.19)] shrink-0 w-full" data-name="Pain Killer Main Coponent">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[18px] items-center p-[10px] relative w-full">
          <Group8 />
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Group10() {
  return (
    <div className="h-[115.82px] relative shrink-0 w-[120px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 116">
        <g id="Group 427322536">
          <ellipse cx="60" cy="57.91" fill="var(--fill-0, white)" id="Ellipse 1132" rx="60" ry="57.91" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[13px] grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#2a2525] tracking-[0.1px]">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center relative shrink-0 text-[20px] w-full">
        <p className="leading-[20px]">Cardiovascular</p>
      </div>
      <div className="flex flex-col font-['Poppins:Light',sans-serif] justify-center relative shrink-0 text-[16px] w-full">
        <p className="leading-[20px]">Support heart health with essential medications and advice.</p>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[6.17%_14.24%_6.24%_13.9%]" data-name="Group">
      <div className="absolute inset-[-1.66%_-2.02%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 63">
          <g id="Group">
            <g id="Vector">
              <path d={svgPaths.p6648800} fill="var(--fill-0, #D02727)" />
              <path d={svgPaths.p6648800} stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </g>
            <g id="Vector_2">
              <path d={svgPaths.p133e7b30} fill="var(--fill-0, #D02727)" />
              <path d={svgPaths.p133e7b30} stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" />
            </g>
            <g id="Vector_3">
              <path d={svgPaths.p3d5ff380} fill="var(--fill-0, #D02727)" />
              <path d={svgPaths.p3d5ff380} stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </g>
            <path d={svgPaths.p3e5afd00} fill="var(--fill-0, #D02727)" id="Vector_4" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <g id="Vector_5">
              <path d={svgPaths.p7861400} fill="var(--fill-0, #D02727)" />
              <path d={svgPaths.p2bd964c0} stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconParkOutlineHeart() {
  return (
    <div className="absolute left-[42px] overflow-clip size-[68.77px] top-[36px]" data-name="icon-park-outline:heart">
      <Group3 />
    </div>
  );
}

function CardiovascularMainComponent() {
  return (
    <div className="bg-white relative rounded-[16px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.19)] shrink-0 w-full" data-name="cardiovascular main component">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[18px] items-center p-[16px] relative w-full">
          <Group10 />
          <Frame1 />
          <IconParkOutlineHeart />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[13px] grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#2a2525] tracking-[0.1px]">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center relative shrink-0 text-[20px] w-full">
        <p className="leading-[20px]">{`Vitamins & Supplements`}</p>
      </div>
      <div className="flex flex-col font-['Poppins:Light',sans-serif] justify-center relative shrink-0 text-[16px] w-full">
        <p className="leading-[20px]">Boost your well-being with daily essentials and health aids.</p>
      </div>
    </div>
  );
}

function StreamlinePixelHealthDrugsPill() {
  return (
    <div className="absolute left-[42px] size-[68.77px] top-[37px]" data-name="streamline-pixel:health-drugs-pill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69 69">
        <g clipPath="url(#clip0_6_11966)" id="streamline-pixel:health-drugs-pill">
          <path d={svgPaths.p1d7ebe80} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p290d7800} fill="var(--fill-0, #48A2E8)" id="Vector_2" />
          <path d={svgPaths.p3699c380} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_6_11966">
            <rect fill="white" height="68.77" width="68.77" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function VitaminMainComponent() {
  return (
    <div className="bg-white relative rounded-[16px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.19)] shrink-0 w-full" data-name="vitamin main component">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[18px] items-center p-[16px] relative w-full">
          <div className="h-[115.82px] relative shrink-0 w-[120px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 116">
              <ellipse cx="60" cy="57.91" fill="var(--fill-0, white)" id="Ellipse 1132" rx="60" ry="57.91" />
            </svg>
          </div>
          <Frame2 />
          <StreamlinePixelHealthDrugsPill />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[13px] grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#2a2525] tracking-[0.1px]">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center relative shrink-0 text-[20px] w-full">
        <p className="leading-[20px]">Diabetes Care</p>
      </div>
      <div className="flex flex-col font-['Poppins:Light',sans-serif] justify-center relative shrink-0 text-[16px] w-full">
        <p className="leading-[20px]">Manage blood sugar levels effectively with specialized products.</p>
      </div>
    </div>
  );
}

function StreamlinePixelHealthLaboratoryTestBloodSugar() {
  return (
    <div className="absolute left-[36px] size-[68.77px] top-[32px]" data-name="streamline-pixel:health-laboratory-test-blood-sugar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69 69">
        <g clipPath="url(#clip0_6_11941)" id="streamline-pixel:health-laboratory-test-blood-sugar">
          <path d={svgPaths.p2dada2f0} fill="var(--fill-0, #066ABF)" id="Vector" />
          <path d={svgPaths.p295b3500} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_6_11941">
            <rect fill="white" height="68.77" width="68.77" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[20.83%_8.33%_29.17%_8.31%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41 25">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p1b76ae40} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p443b100} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p23ba8580} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p3d314880} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_4" />
          <path clipRule="evenodd" d={svgPaths.p15bca000} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function HealthiconsSugar() {
  return (
    <div className="absolute left-[79px] overflow-clip size-[48.26px] top-[68px]" data-name="healthicons:sugar">
      <Group4 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents left-[36px] top-[32px]">
      <StreamlinePixelHealthLaboratoryTestBloodSugar />
      <HealthiconsSugar />
    </div>
  );
}

function DiabetiesMainComponent() {
  return (
    <div className="bg-white relative rounded-[16px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.19)] shrink-0 w-full" data-name="diabeties main component">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[18px] items-center p-[16px] relative w-full">
          <div className="h-[115.82px] relative shrink-0 w-[120px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 116">
              <ellipse cx="60" cy="57.91" fill="var(--fill-0, white)" id="Ellipse 1132" rx="60" ry="57.91" />
            </svg>
          </div>
          <Frame3 />
          <Group9 />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-center left-[16px] top-[237px] w-[553px]">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#066abf] text-[32px] text-center tracking-[0.1px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">{` Browse your Medicine   `}</p>
      </div>
      <PainKillerMainCoponent />
      <CardiovascularMainComponent />
      <VitaminMainComponent />
      <DiabetiesMainComponent />
    </div>
  );
}

function Component3DAvatars() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="3D Avatars / 13">
      <div className="absolute inset-0 pointer-events-none rounded-[50px]" data-name="Avatars / 3d_avatar_13">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[50px] size-full" src={imgAvatars3DAvatar13} />
        <div aria-hidden="true" className="absolute border border-[#252222] border-solid inset-0 rounded-[50px]" />
      </div>
    </div>
  );
}

function NameComponent() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] items-center left-[18px] p-[16px] top-[34px] w-[95px]" data-name="Name Component">
      <Component3DAvatars />
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 size-[25px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="Frame 427322644">
          <rect fill="var(--fill-0, white)" height="24" rx="12" width="24" x="0.5" y="0.5" />
          <rect height="24" rx="12" stroke="var(--stroke-0, #FF9090)" width="24" x="0.5" y="0.5" />
          <path d={svgPaths.p2b14f780} fill="var(--fill-0, #F50C0C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[6px] h-[59px] items-start justify-end relative shrink-0">
      <Frame4 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] h-[60px] items-center left-[calc(50%+182px)] p-[16px] top-[50px]">
      <div className="relative shrink-0 size-[32px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <path d={svgPaths.pff11500} fill="var(--fill-0, #066ABF)" id="Vector" />
        </svg>
      </div>
      <Frame5 />
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

function Group5() {
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
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="gg:profile">
      <Group5 />
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

export default function BrowseMedicineScreen() {
  return (
    <div className="bg-white relative size-full" data-name="browse medicine screen">
      <Group6 />
      <SearchBar />
      <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] left-[142.5px] text-[24px] text-center text-nowrap text-white top-[942px] tracking-[0.1px] translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre">{`Physiotherapy `}</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] left-[calc(50%+157px)] text-[24px] text-center text-nowrap text-white top-[952px] tracking-[0.1px] translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre">{`Medicines `}</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] left-[150.5px] text-[24px] text-center text-nowrap text-white top-[623px] tracking-[0.1px] translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre">{`Doctors `}</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] left-[calc(50%+154.5px)] text-[24px] text-center text-nowrap text-white top-[623px] tracking-[0.1px] translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre">{`Care Takers `}</p>
      </div>
      <Frame7 />
      <NameComponent />
      <Frame6 />
      <NavBar />
    </div>
  );
}