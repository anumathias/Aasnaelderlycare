import svgPaths from "./svg-mpzqim0vce";

function AddressV1Variant({ className }: { className?: string }) {
  return (
    <div className={className} data-name="ADDRESS V1/Variant3">
      <div className="relative shrink-0 size-[44px]" data-name="ic:sharp-home">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
          <g id="ic:sharp-home">
            <path d={svgPaths.p3222300} fill="var(--fill-0, #066ABF)" id="Vector" />
          </g>
        </svg>
      </div>
      <div className="content-stretch flex flex-col gap-[4px] h-[72px] items-end leading-[0] relative shrink-0 w-[464px]">
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
          <div className="[grid-area:1_/_1] bg-[#c9f0bb] h-[24px] ml-0 mt-0 rounded-[16px] w-[147.719px]" />
          <div className="[grid-area:1_/_1] flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] ml-[74.04px] mt-[11.84px] relative text-[#066abf] text-[16px] text-center text-nowrap tracking-[0.1px] translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px] whitespace-pre">Current Selected </p>
          </div>
        </div>
        <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center min-w-full relative shrink-0 text-[16px] text-black tracking-[0.1px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20px]">Home </p>
        </div>
        <div className="flex flex-col font-['Roboto:Light',sans-serif] font-light justify-center min-w-full relative shrink-0 text-[#606060] text-[14px] tracking-[0.1px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20px] whitespace-pre-wrap">Flat no : 400 5th floor,Neem Hills Appartments , Hyderabad Telengana </p>
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
          <path d={svgPaths.p38ded900} fill="var(--fill-0, #49454F)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[16px] size-[40px] top-[212px]" data-name="State-layer">
      <Icon />
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

function Frame() {
  return (
    <div className="bg-[#5baff1] relative rounded-[16px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center p-[16px] relative w-full">
          <UilCalender />
          <div className="flex flex-col font-['Poppins:Regular',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[0.1px] w-[163px]">
            <p className="leading-[20px]">{`Next Avalaibilty `}</p>
          </div>
          <div className="flex flex-col font-['Poppins:Regular',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[0.1px] w-[292px]">
            <p className="leading-[20px]">{`: 30 min `}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TablerLocation() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="tabler:location">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="tabler:location">
          <path d={svgPaths.p2c96f980} fill="var(--fill-0, #48A2E8)" id="Vector" stroke="var(--stroke-0, #48A2E8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center p-[16px] relative w-full">
          <TablerLocation />
          <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1f75be] text-[16px] text-center text-nowrap tracking-[0.1px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px] whitespace-pre">Use Current Location</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function IcBaselinePlus() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ic:baseline-plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ic:baseline-plus">
          <path d={svgPaths.p89ed1c0} fill="var(--fill-0, #48A2E8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center p-[16px] relative w-full">
          <IcBaselinePlus />
          <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1f75be] text-[16px] text-center text-nowrap tracking-[0.1px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px] whitespace-pre">Add New Location</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame2 />
      <div className="flex h-[3.033px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "557", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[359.688deg] w-full">
          <div className="h-0 relative w-full">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 557 1">
                <line id="Line 142" stroke="var(--stroke-0, #757575)" strokeOpacity="0.7" x2="557" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame3 />
      <div className="flex h-[3.033px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "557", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[359.688deg] w-full">
          <div className="h-0 relative w-full">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 557 1">
                <line id="Line 142" stroke="var(--stroke-0, #757575)" strokeOpacity="0.7" x2="557" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function IcSharpHome() {
  return (
    <div className="relative shrink-0 size-[44px]" data-name="ic:sharp-home">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g id="ic:sharp-home">
          <path d={svgPaths.p3222300} fill="var(--fill-0, #066ABF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] relative shrink-0 tracking-[0.1px] w-[464px]">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[16px] text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Secondary Address</p>
      </div>
      <div className="flex flex-col font-['Roboto:Light',sans-serif] font-light justify-center relative shrink-0 text-[#606060] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">{`Flat no : 100 3th floor, Nescon Oasis  , Hyderabad Telengana   `}</p>
      </div>
    </div>
  );
}

function AddressV() {
  return (
    <div className="bg-[#efefef] relative rounded-[8px] shrink-0 w-full" data-name="ADDRESS V1">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center p-[16px] relative w-full">
          <IcSharpHome />
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#757575] text-[20px] tracking-[0.1px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">{`Select your Location `}</p>
      </div>
      <AddressV1Variant className="bg-[#cde8ff] box-border content-stretch flex gap-[8px] items-center p-[16px] relative rounded-[8px] shrink-0 w-[554px]" />
      <AddressV />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute bg-white border border-[#d9d9d9] border-solid h-[73.272px] left-0 rounded-tl-[16px] rounded-tr-[16px] top-0 w-[547.809px]" />
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] h-[26.247px] justify-center leading-[0] left-[15px] not-italic text-[#121314] text-[20px] top-[21.12px] tracking-[0.5px] translate-y-[-50%] w-[284.861px]">
        <p className="leading-[24px]">{`Rush Hospital `}</p>
      </div>
      <div className="absolute bg-[#578f63] border border-[#d9d9d9] border-solid h-[34px] left-[378px] rounded-[16px] top-[20px] w-[120px]" />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-0 top-0">
      <Group1 />
      <div className="absolute bg-white h-[184px] left-0 rounded-bl-[16px] shadow-[0px_4px_4px_0px_#d9d9d9] top-[73px] w-[546px]" />
    </div>
  );
}

function MaterialSymbolsCall() {
  return (
    <div className="absolute left-[49.5px] size-[32.927px] top-[2.24px]" data-name="material-symbols:call">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
        <g id="material-symbols:call">
          <path d={svgPaths.p1dfa3c00} fill="var(--fill-0, #3DAB51)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[27px] top-[207.79px]">
      <div className="absolute bg-[rgba(245,245,245,0.6)] border border-black border-solid h-[37.183px] left-0 rounded-[16px] top-0 w-[235px]" />
      <MaterialSymbolsCall />
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] h-[26.247px] justify-center leading-[0] left-[103.79px] not-italic text-[20px] text-black top-[19.34px] tracking-[0.5px] translate-y-[-50%] w-[64.316px]">
        <p className="leading-[24px]">Call</p>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[287px] top-[208px]">
      <div className="absolute bg-[#d6ebf7] border border-black border-solid h-[37.183px] left-0 rounded-[16px] top-0 w-[235px]" />
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] h-[27px] justify-center leading-[0] left-[85px] not-italic text-[20px] text-black top-[19.5px] tracking-[0.5px] translate-y-[-50%] w-[135.468px]">
        <p className="leading-[24px]">Direction</p>
      </div>
    </div>
  );
}

function MdiLocation() {
  return (
    <div className="absolute left-[11px] size-[24px] top-[95px]" data-name="mdi:location">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="mdi:location">
          <path d={svgPaths.p3aac8400} fill="var(--fill-0, #066ABF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TablerLocationFilled() {
  return (
    <div className="absolute left-[6.52px] size-[24px] top-[6.19px]" data-name="tabler:location-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="tabler:location-filled">
          <path d={svgPaths.p8fcb000} fill="var(--fill-0, #FFB60B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MdiMapMarkerDistance() {
  return (
    <div className="absolute left-[2px] overflow-clip size-[37.153px] top-[123px]" data-name="mdi:map-marker-distance">
      <TablerLocationFilled />
    </div>
  );
}

function MaterialSymbolsStarOutline() {
  return (
    <div className="absolute left-[15px] size-[24px] top-[40px]" data-name="material-symbols:star-outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="material-symbols:star-outline">
          <path d={svgPaths.p12a0e900} fill="var(--fill-0, #066ABF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function StashLocationDuotone() {
  return (
    <div className="absolute left-[333px] size-[24px] top-[214px]" data-name="stash:location-duotone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="stash:location-duotone">
          <path d={svgPaths.p3142dd00} fill="var(--fill-0, black)" id="Vector" opacity="0.5" />
          <path d={svgPaths.p3fecfa00} fill="var(--fill-0, #3A55A2)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-0 top-0">
      <Group3 />
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[26.247px] justify-center leading-[0] left-[50px] not-italic text-[#757575] text-[16px] top-[106.12px] tracking-[0.5px] translate-y-[-50%] w-[230.08px]">
        <p className="leading-[24px]">{`Suchitra circle `}</p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] h-[26.247px] justify-center leading-[0] left-[27px] not-italic text-[#121314] text-[14px] top-[178.12px] tracking-[0.5px] translate-y-[-50%] w-[385.657px]">
        <p className="leading-[24px] whitespace-pre-wrap">{`Availability: 24/7  `}</p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[26.247px] justify-center leading-[0] left-[52px] not-italic text-[#757575] text-[16px] top-[142.12px] tracking-[0.5px] translate-y-[-50%] w-[102.988px]">
        <p className="leading-[24px]">{`1.1 km `}</p>
      </div>
      <Group2 />
      <Group4 />
      <MdiLocation />
      <MdiMapMarkerDistance />
      <MaterialSymbolsStarOutline />
      <StashLocationDuotone />
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] left-[398px] not-italic text-[16px] text-nowrap text-white top-[37px] tracking-[0.5px] translate-y-[-50%]">
        <p className="leading-[24px] whitespace-pre">{`Open Now `}</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[45px] py-[39px] relative w-full">
          <Group5 />
          <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[26.247px] justify-center leading-[0] left-[44px] not-italic text-[16px] text-black top-[52.12px] tracking-[0.5px] translate-y-[-50%] w-[41.633px]">
            <p className="leading-[24px]">4.5</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] isolate items-center justify-center px-[16px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[24px] text-nowrap text-right text-white tracking-[0.1px] z-[1]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px] whitespace-pre">{`Confirm Now `}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BuildingBlocksButtonGroupConnectedSegmentsSmall() {
  return (
    <div className="bg-[#48a2e8] h-[64px] min-w-[48px] relative rounded-[8px] shrink-0 w-full" data-name="Building Blocks/Button group/Connected segments/Small">
      <div className="content-stretch flex flex-col gap-[2px] h-[64px] items-center justify-center min-w-inherit overflow-clip relative rounded-[inherit] w-full">
        <StateLayer1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#0d2334] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-center left-[15px] top-[222px] w-[557px]">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#066abf] text-[32px] text-center tracking-[0.1px] w-full">
        <p className="leading-[20px]">{`Book your Ambulance now `}</p>
      </div>
      <Frame />
      <Frame1 />
      <Frame5 />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#757575] text-[20px] tracking-[0.1px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">{`Near By Hospital `}</p>
      </div>
      <Frame6 />
      <BuildingBlocksButtonGroupConnectedSegmentsSmall />
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

function Group() {
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
      <Group />
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

export default function ScheduleAmbulanceScreen() {
  return (
    <div className="bg-white relative size-full" data-name="schedule ambulance screen">
      <div className="absolute bg-[rgba(91,151,249,0.4)] h-[183px] left-0 rounded-bl-[16px] rounded-br-[16px] top-0 w-[586px]" />
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] left-[292.5px] not-italic text-[#066abf] text-[32px] text-center text-nowrap top-[142px] tracking-[0.1px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[20px] whitespace-pre">Ambulance</p>
      </div>
      <StateLayer />
      <Frame7 />
      <NavBar />
    </div>
  );
}