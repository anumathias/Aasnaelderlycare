import svgPaths from "./svg-3lxvnt1snq";
import imgAvatars3DAvatar13 from "figma:asset/e194ee7dbf007daf2ccb230f9dc0d1d72b84f188.png";

function Content() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px mr-[-16px] relative shrink-0" data-name="Content">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[20px] py-0 relative size-full">
          <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121314] text-[20px] text-nowrap tracking-[0.5px]">
            <p className="leading-[24px] whitespace-pre">Callpol</p>
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
    <div className="absolute bg-[#ece6f0] h-[56px] left-[50px] max-w-[720px] rounded-[28px] top-[183px] w-[520px]" data-name="Search bar">
      <div className="content-stretch flex gap-[4px] h-[56px] items-center max-w-inherit overflow-clip relative rounded-[inherit] w-[520px]">
        <StateLayer1 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-[-0.5px] pointer-events-none rounded-[28.5px]" />
    </div>
  );
}

function MaterialSymbolsLightArrowBackIos() {
  return (
    <div className="absolute left-[16px] size-[24px] top-[199px]" data-name="material-symbols-light:arrow-back-ios">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="material-symbols-light:arrow-back-ios">
          <path d={svgPaths.p2fc41300} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function StashLocationDuotone() {
  return (
    <div className="absolute left-[calc(50%+56px)] size-[24px] top-[1056px]" data-name="stash:location-duotone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="stash:location-duotone">
          <path d={svgPaths.p3142dd00} fill="var(--fill-0, black)" id="Vector" opacity="0.5" />
          <path d={svgPaths.p3fecfa00} fill="var(--fill-0, #3A55A2)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="[grid-area:1_/_1] bg-[#ebeff6] box-border content-stretch flex gap-[12px] h-[253px] items-center justify-center ml-0 mt-0 p-[16px] relative rounded-[16px] shadow-[0px_4px_4px_0px_#f7fbff] w-[553px]">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[0px] text-black text-center tracking-[0.5px] w-[541px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="font-['Poppins:Medium',sans-serif] leading-[24px] not-italic text-[16px] whitespace-pre-wrap">
          <span>{`The medicine you are in search is currently unavailable  Please check the `}</span>
          <span className="text-[#066abf]">near by locations</span>
          <span>{` or `}</span>
          <span className="text-[#066abf]">Fill</span>
          <span>{` the Below `}</span>
          <span className="text-[#066abf]">Form</span>{" "}
        </p>
      </div>
    </div>
  );
}

function FluentImportant20Filled() {
  return (
    <div className="[grid-area:1_/_1] ml-[11px] mt-[9px] relative size-[20px]" data-name="fluent:important-20-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="fluent:important-20-filled">
          <path d={svgPaths.pb559900} fill="var(--fill-0, #EF5252)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group9() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[14px] mt-[17px] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#f7fbff] border border-[#cd2026] border-solid h-[42px] ml-0 mt-0 rounded-[16px] w-[186px]" />
      <FluentImportant20Filled />
      <div className="[grid-area:1_/_1] flex flex-col font-['Poppins:Medium',sans-serif] justify-center ml-[39px] mt-[21px] not-italic relative text-[#f60808] text-[20px] text-nowrap tracking-[0.5px] translate-y-[-50%]">
        <p className="leading-[24px] whitespace-pre">{`Unavailable `}</p>
      </div>
    </div>
  );
}

function Group12() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame />
      <Group9 />
      <div className="[grid-area:1_/_1] bg-[#bdd5fd] h-[59px] ml-[102px] mt-[179px] rounded-[16px] w-[337px]" />
      <div className="[grid-area:1_/_1] flex flex-col font-['Poppins:Medium',sans-serif] justify-center ml-[270px] mt-[209px] not-italic relative text-[#1e3678] text-[20px] text-center text-nowrap tracking-[0.5px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[24px] whitespace-pre">{`Fill This Form `}</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute bg-white border border-[#d9d9d9] border-solid h-[73.272px] left-0 rounded-tl-[16px] rounded-tr-[16px] top-0 w-[547.809px]" />
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] h-[26.247px] justify-center leading-[0] left-[15px] not-italic text-[#121314] text-[20px] top-[21.12px] tracking-[0.5px] translate-y-[-50%] w-[284.861px]">
        <p className="leading-[24px]">Med Plus</p>
      </div>
      <div className="absolute bg-[#578f63] border border-[#d9d9d9] border-solid h-[34px] left-[378px] rounded-[16px] top-[20px] w-[120px]" />
    </div>
  );
}

function Group5() {
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

function Group6() {
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

function StashLocationDuotone1() {
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

function Group7() {
  return (
    <div className="absolute contents left-0 top-0">
      <Group5 />
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[26.247px] justify-center leading-[0] left-[50px] not-italic text-[#757575] text-[16px] top-[106.12px] tracking-[0.5px] translate-y-[-50%] w-[230.08px]">
        <p className="leading-[24px]">211 Alwal Road</p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] h-[26.247px] justify-center leading-[0] left-[27px] not-italic text-[#121314] text-[14px] top-[178.12px] tracking-[0.5px] translate-y-[-50%] w-[385.657px]">
        <p className="leading-[24px] whitespace-pre-wrap">{`Availability: Limited Stock  `}</p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[26.247px] justify-center leading-[0] left-[52px] not-italic text-[#757575] text-[16px] top-[142.12px] tracking-[0.5px] translate-y-[-50%] w-[102.988px]">
        <p className="leading-[24px]">{`2.1 km `}</p>
      </div>
      <Group2 />
      <Group6 />
      <MdiLocation />
      <MdiMapMarkerDistance />
      <MaterialSymbolsStarOutline />
      <StashLocationDuotone1 />
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] left-[398px] not-italic text-[16px] text-nowrap text-white top-[37px] tracking-[0.5px] translate-y-[-50%]">
        <p className="leading-[24px] whitespace-pre">{`Open Now `}</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-[257px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[257px] items-center px-[45px] py-[39px] relative w-full">
          <Group7 />
          <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[26.247px] justify-center leading-[0] left-[44px] not-italic text-[16px] text-black top-[52.12px] tracking-[0.5px] translate-y-[-50%] w-[41.633px]">
            <p className="leading-[24px]">4.5</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute bg-white border border-[#d9d9d9] border-solid h-[73.272px] left-0 rounded-tl-[16px] rounded-tr-[16px] top-0 w-[547.809px]" />
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] h-[26.247px] justify-center leading-[0] left-[15px] not-italic text-[#121314] text-[20px] top-[21.12px] tracking-[0.5px] translate-y-[-50%] w-[284.861px]">
        <p className="leading-[24px]">{`Apollo Pharmacy `}</p>
      </div>
      <div className="absolute bg-[#578f63] border border-[#d9d9d9] border-solid h-[34px] left-[378px] rounded-[16px] top-[20px] w-[120px]" />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents left-0 top-0">
      <Group3 />
      <div className="absolute bg-white h-[184px] left-0 rounded-bl-[16px] shadow-[0px_4px_4px_0px_#d9d9d9] top-[73px] w-[546px]" />
    </div>
  );
}

function MaterialSymbolsCall1() {
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

function Group4() {
  return (
    <div className="absolute contents left-[27px] top-[207.79px]">
      <div className="absolute bg-[rgba(245,245,245,0.6)] border border-black border-solid h-[37.183px] left-0 rounded-[16px] top-0 w-[235px]" />
      <MaterialSymbolsCall1 />
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] h-[26.247px] justify-center leading-[0] left-[103.79px] not-italic text-[20px] text-black top-[19.34px] tracking-[0.5px] translate-y-[-50%] w-[64.316px]">
        <p className="leading-[24px]">Call</p>
      </div>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents left-[287px] top-[208px]">
      <div className="absolute bg-[#d6ebf7] border border-black border-solid h-[37.183px] left-0 rounded-[16px] top-0 w-[235px]" />
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] h-[27px] justify-center leading-[0] left-[85px] not-italic text-[20px] text-black top-[19.5px] tracking-[0.5px] translate-y-[-50%] w-[135.468px]">
        <p className="leading-[24px]">Direction</p>
      </div>
    </div>
  );
}

function MdiLocation1() {
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

function TablerLocationFilled1() {
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

function MdiMapMarkerDistance1() {
  return (
    <div className="absolute left-[2px] overflow-clip size-[37.153px] top-[123px]" data-name="mdi:map-marker-distance">
      <TablerLocationFilled1 />
    </div>
  );
}

function MaterialSymbolsStarOutline1() {
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

function StashLocationDuotone2() {
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

function Group11() {
  return (
    <div className="absolute contents left-0 top-0">
      <Group8 />
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[26.247px] justify-center leading-[0] left-[50px] not-italic text-[#757575] text-[16px] top-[106.12px] tracking-[0.5px] translate-y-[-50%] w-[230.08px]">
        <p className="leading-[24px]">211 Alwal Road</p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] h-[26.247px] justify-center leading-[0] left-[27px] not-italic text-[#121314] text-[14px] top-[178.12px] tracking-[0.5px] translate-y-[-50%] w-[385.657px]">
        <p className="leading-[24px] whitespace-pre-wrap">{`Availability: Limited Stock  `}</p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[26.247px] justify-center leading-[0] left-[52px] not-italic text-[#757575] text-[16px] top-[142.12px] tracking-[0.5px] translate-y-[-50%] w-[102.988px]">
        <p className="leading-[24px]">{`2.1 km `}</p>
      </div>
      <Group4 />
      <Group10 />
      <MdiLocation1 />
      <MdiMapMarkerDistance1 />
      <MaterialSymbolsStarOutline1 />
      <StashLocationDuotone2 />
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] left-[398px] not-italic text-[16px] text-nowrap text-white top-[37px] tracking-[0.5px] translate-y-[-50%]">
        <p className="leading-[24px] whitespace-pre">{`Open Now `}</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[45px] py-[39px] relative w-full">
          <Group11 />
          <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[26.247px] justify-center leading-[0] left-[44px] not-italic text-[16px] text-black top-[52.12px] tracking-[0.5px] translate-y-[-50%] w-[41.633px]">
            <p className="leading-[24px]">4.5</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-end left-[16px] top-[284px] w-[554px]">
      <Group12 />
      <Frame3 />
      <Frame4 />
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
    <div className="absolute box-border content-stretch flex gap-[12px] items-center left-[12px] p-[16px] top-[39px] w-[95px]" data-name="Name Component">
      <Component3DAvatars />
    </div>
  );
}

function Frame1() {
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

function Frame2() {
  return (
    <div className="content-stretch flex gap-[6px] h-[59px] items-start justify-end relative shrink-0">
      <Frame1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] h-[60px] items-center left-[calc(50%+177px)] p-[16px] top-[55px] w-[97px]">
      <div className="relative shrink-0 size-[32px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <path d={svgPaths.pff11500} fill="var(--fill-0, #066ABF)" id="Vector" />
        </svg>
      </div>
      <Frame2 />
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

export default function NearByShops() {
  return (
    <div className="bg-white relative size-full" data-name="near by shops">
      <div className="absolute bg-[rgba(131,178,255,0.4)] h-[155px] left-[3px] rounded-bl-[16px] rounded-br-[16px] top-px w-[586px]" />
      <div className="absolute left-[54px] size-[100px] top-[139px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Rectangle 854"></g>
        </svg>
      </div>
      <SearchBar />
      <MaterialSymbolsLightArrowBackIos />
      <div className="absolute bg-white h-[47px] left-[22px] rounded-[16px] top-[343px] w-[255px]" />
      <div className="absolute flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[calc(50%+124px)] text-[16px] text-nowrap text-white top-[879px] tracking-[0.5px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px] whitespace-pre">{`Open Now `}</p>
      </div>
      <StashLocationDuotone />
      <Frame6 />
      <NameComponent />
      <Frame5 />
      <NavBar />
    </div>
  );
}