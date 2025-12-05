import svgPaths from "./svg-bkmrwk0fi6";
import imgAvatars3DAvatar13 from "figma:asset/acdade26ec8c30dbfc71bfcd81a210fc9231eb9a.png";
import imgAvatars3DAvatar14 from "figma:asset/e194ee7dbf007daf2ccb230f9dc0d1d72b84f188.png";
import imgEllipse1123 from "figma:asset/da7d54036c5377670f77582c1fc28ba994f92a67.png";
import imgEllipse1124 from "figma:asset/948409b8a2abfc748ac7ce5750406ef1f27a584b.png";
import imgEllipse1125 from "figma:asset/3f15c39cf1ddd60cf975da92acaad01f351bd942.png";
import imgEllipse1126 from "figma:asset/2f3c01d562442d9a29359403977f13ff6b1701d5.png";

function Group2() {
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
            <p className="leading-[24px] whitespace-pre">Search</p>
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
    <div className="absolute bg-[#ece6f0] h-[56px] left-[13px] max-w-[720px] rounded-[28px] top-[188px] w-[553px]" data-name="Search bar">
      <div className="content-stretch flex gap-[4px] h-[56px] items-center max-w-inherit overflow-clip relative rounded-[inherit] w-[553px]">
        <StateLayer1 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-[-0.5px] pointer-events-none rounded-[28.5px]" />
    </div>
  );
}

function Component3DAvatars1() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="3D Avatars / 14">
      <div className="absolute inset-0 pointer-events-none rounded-[50px]" data-name="Avatars / 3d_avatar_13">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[50px] size-full" src={imgAvatars3DAvatar13} />
        <div aria-hidden="true" className="absolute border border-[#252222] border-solid inset-0 rounded-[50px]" />
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] items-center left-[calc(50%+83px)] p-[16px] top-[39px]">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121314] text-[24px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Aasna</p>
      </div>
      <Component3DAvatars1 />
    </div>
  );
}

function Component3DAvatars() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="3D Avatars / 13">
      <div className="absolute inset-0 pointer-events-none rounded-[50px]" data-name="Avatars / 3d_avatar_13">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[50px] size-full" src={imgAvatars3DAvatar14} />
        <div aria-hidden="true" className="absolute border border-[#252222] border-solid inset-0 rounded-[50px]" />
      </div>
    </div>
  );
}

function Group1() {
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
    <div className="absolute box-border content-stretch flex gap-[12px] items-center left-[15px] p-[16px] top-[39px] w-[183px]" data-name="Name Component">
      <Component3DAvatars />
      <Group1 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0 w-[173.5px]">
      <div className="relative shrink-0 size-[120px]">
        <img alt="" className="block max-w-none size-full" height="120" src={imgEllipse1123} width="120" />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full">
      <p className="basis-0 font-['Poppins:SemiBold',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[24px] text-black">{`Sammy William `}</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-0 py-[6px] relative shrink-0 w-full">
      <p className="basis-0 font-['Poppins:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#1c1a1a] text-[16px]">{`Experience : 4.5 yrs `}</p>
    </div>
  );
}

function ShapeSet() {
  return (
    <div className="absolute h-[140px] left-[-186.5px] top-[-16px] w-[554px]" data-name="Shape Set">
      <div className="absolute inset-[-7.14%_-2.89%_-15.71%_-2.89%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 586 172">
          <g filter="url(#filter0_d_6_9677)" id="Shape Set" style={{ mixBlendMode: "plus-darker" }}>
            <rect fill="url(#paint0_linear_6_9677)" height="140" rx="16" shapeRendering="crispEdges" width="554" x="16" y="10" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="172" id="filter0_d_6_9677" width="586" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="6" />
              <feGaussianBlur stdDeviation="8" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_6_9677" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_6_9677" mode="normal" result="shape" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_6_9677" x1="293" x2="293" y1="10" y2="150">
              <stop offset="0.524038" stopOpacity="0" />
              <stop offset="1" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="box-border content-stretch flex flex-col items-start mb-[-22px] relative shrink-0 w-full">
      <Frame />
      <Frame1 />
      <ShapeSet />
    </div>
  );
}

function Frame2() {
  return (
    <div className="basis-0 box-border content-stretch flex grow items-start min-h-px min-w-px overflow-clip px-0 py-[5px] relative shrink-0">
      <p className="basis-0 font-['Inter:Extra_Bold',sans-serif] font-['Poppins:Medium',sans-serif] font-extrabold grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#1c1a1a] text-[0px]">
        <span className="text-[16px]">Rating</span>
        <span className="text-[32px]"> </span>
        <span className="text-[16px]">:</span>
        <span className="text-[32px]"> </span>
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="box-border content-stretch flex h-[58px] items-center mb-[-22px] relative shrink-0 w-full">
      <Frame2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute h-[26px] left-[55.5px] top-[72px] w-[178px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 178 26">
        <g id="Frame 2608550">
          <path d={svgPaths.p2d846680} fill="var(--fill-0, #FFB60B)" id="Star 1" />
          <path d={svgPaths.p27e3a580} fill="var(--fill-0, #FFB60B)" id="Star 2" />
          <path d={svgPaths.p2e22b800} fill="var(--fill-0, #FFB60B)" id="Star 3" />
          <path d={svgPaths.p2e62b680} fill="var(--fill-0, #FFB60B)" id="Star 4" />
          <path d={svgPaths.p1a54cc0} fill="var(--fill-0, #FFB60B)" id="Star 5" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col items-center pb-[22px] pt-0 px-[10px] relative w-full">
          <Frame4 />
          <Frame5 />
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute bg-[#dccbff] content-stretch flex gap-[4px] items-center left-0 right-0 rounded-[16px] top-1/2 translate-y-[-50%]">
      <Frame7 />
      <Frame6 />
    </div>
  );
}

function NurseCareTakerMainComponent() {
  return (
    <div className="h-[140px] relative shrink-0 w-full" data-name="Nurse/care taker main component">
      <Frame8 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0 w-[173.5px]">
      <div className="relative shrink-0 size-[120px]">
        <img alt="" className="block max-w-none size-full" height="120" src={imgEllipse1124} width="120" />
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full">
      <p className="basis-0 font-['Poppins:SemiBold',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[24px] text-black">Suzan Pearl</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-0 py-[6px] relative shrink-0 w-full">
      <p className="basis-0 font-['Poppins:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#1c1a1a] text-[16px]">{`Experience : 2 yrs `}</p>
    </div>
  );
}

function ShapeSet1() {
  return (
    <div className="absolute h-[140px] left-[-186.5px] top-[-16px] w-[554px]" data-name="Shape Set">
      <div className="absolute inset-[-7.14%_-2.89%_-15.71%_-2.89%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 586 172">
          <g filter="url(#filter0_d_6_9677)" id="Shape Set" style={{ mixBlendMode: "plus-darker" }}>
            <rect fill="url(#paint0_linear_6_9677)" height="140" rx="16" shapeRendering="crispEdges" width="554" x="16" y="10" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="172" id="filter0_d_6_9677" width="586" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="6" />
              <feGaussianBlur stdDeviation="8" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_6_9677" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_6_9677" mode="normal" result="shape" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_6_9677" x1="293" x2="293" y1="10" y2="150">
              <stop offset="0.524038" stopOpacity="0" />
              <stop offset="1" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="box-border content-stretch flex flex-col items-start mb-[-22px] relative shrink-0 w-full">
      <Frame10 />
      <Frame11 />
      <ShapeSet1 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="basis-0 box-border content-stretch flex grow items-start min-h-px min-w-px overflow-clip px-0 py-[5px] relative shrink-0">
      <p className="basis-0 font-['Inter:Extra_Bold',sans-serif] font-['Poppins:Medium',sans-serif] font-extrabold grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#1c1a1a] text-[0px]">
        <span className="text-[16px]">Rating</span>
        <span className="text-[32px]"> </span>
        <span className="text-[16px]">:</span>
        <span className="text-[32px]"> </span>
      </p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="box-border content-stretch flex h-[58px] items-center mb-[-22px] relative shrink-0 w-full">
      <Frame13 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute h-[26px] left-[55.5px] top-[72px] w-[178px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 178 26">
        <g id="Frame 2608550">
          <path d={svgPaths.p2d846680} fill="var(--fill-0, #FFB60B)" id="Star 1" />
          <path d={svgPaths.p27e3a580} fill="var(--fill-0, #FFB60B)" id="Star 2" />
          <path d={svgPaths.p2e22b800} fill="var(--fill-0, #FFB60B)" id="Star 3" />
          <path d={svgPaths.p2e62b680} fill="var(--fill-0, #FFB60B)" id="Star 4" />
          <path d={svgPaths.p1a54cc0} fill="var(--fill-0, #FFB60B)" id="Star 5" />
        </g>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col items-center pb-[22px] pt-0 px-[10px] relative w-full">
          <Frame12 />
          <Frame14 />
          <Frame15 />
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute bg-[#f8daff] content-stretch flex gap-[4px] items-center left-0 right-0 rounded-[16px] top-1/2 translate-y-[-50%]">
      <Frame9 />
      <Frame16 />
    </div>
  );
}

function NurseCareTakerMainComponent1() {
  return (
    <div className="h-[140px] relative shrink-0 w-full" data-name="Nurse/care taker main component">
      <Frame17 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0 w-[173.5px]">
      <div className="relative shrink-0 size-[120px]">
        <img alt="" className="block max-w-none size-full" height="120" src={imgEllipse1125} width="120" />
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full">
      <p className="basis-0 font-['Poppins:SemiBold',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[24px] text-black">Jerusha Jasmine</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-0 py-[6px] relative shrink-0 w-full">
      <p className="basis-0 font-['Poppins:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#1c1a1a] text-[16px]">{`Experience : 3 yrs `}</p>
    </div>
  );
}

function ShapeSet2() {
  return (
    <div className="absolute h-[140px] left-[-186.5px] top-[-16px] w-[554px]" data-name="Shape Set">
      <div className="absolute inset-[-7.14%_-2.89%_-15.71%_-2.89%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 586 172">
          <g filter="url(#filter0_d_6_9677)" id="Shape Set" style={{ mixBlendMode: "plus-darker" }}>
            <rect fill="url(#paint0_linear_6_9677)" height="140" rx="16" shapeRendering="crispEdges" width="554" x="16" y="10" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="172" id="filter0_d_6_9677" width="586" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="6" />
              <feGaussianBlur stdDeviation="8" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_6_9677" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_6_9677" mode="normal" result="shape" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_6_9677" x1="293" x2="293" y1="10" y2="150">
              <stop offset="0.524038" stopOpacity="0" />
              <stop offset="1" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="box-border content-stretch flex flex-col items-start mb-[-22px] relative shrink-0 w-full">
      <Frame19 />
      <Frame20 />
      <ShapeSet2 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="basis-0 box-border content-stretch flex grow items-start min-h-px min-w-px overflow-clip px-0 py-[5px] relative shrink-0">
      <p className="basis-0 font-['Inter:Extra_Bold',sans-serif] font-['Poppins:Medium',sans-serif] font-extrabold grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#1c1a1a] text-[0px]">
        <span className="text-[16px]">Rating</span>
        <span className="text-[32px]"> </span>
        <span className="text-[16px]">:</span>
        <span className="text-[32px]"> </span>
      </p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="box-border content-stretch flex h-[58px] items-center mb-[-22px] relative shrink-0 w-full">
      <Frame22 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="absolute h-[26px] left-[55.5px] top-[72px] w-[178px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 178 26">
        <g id="Frame 2608550">
          <path d={svgPaths.p2d846680} fill="var(--fill-0, #FFB60B)" id="Star 1" />
          <path d={svgPaths.p27e3a580} fill="var(--fill-0, #FFB60B)" id="Star 2" />
          <path d={svgPaths.p2e22b800} fill="var(--fill-0, #FFB60B)" id="Star 3" />
          <path d={svgPaths.p2e62b680} fill="var(--fill-0, #FFB60B)" id="Star 4" />
          <path d={svgPaths.p1a54cc0} fill="var(--fill-0, #FFB60B)" id="Star 5" />
        </g>
      </svg>
    </div>
  );
}

function Frame25() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col items-center pb-[22px] pt-0 px-[10px] relative w-full">
          <Frame21 />
          <Frame23 />
          <Frame24 />
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="absolute bg-[#e4efe7] content-stretch flex gap-[4px] items-center left-0 right-0 rounded-[16px] top-1/2 translate-y-[-50%]">
      <Frame18 />
      <Frame25 />
    </div>
  );
}

function NurseCareTakerMainComponent2() {
  return (
    <div className="h-[140px] relative shrink-0 w-full" data-name="Nurse/care taker main component">
      <Frame26 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0 w-[173.5px]">
      <div className="relative shrink-0 size-[120px]">
        <img alt="" className="block max-w-none size-full" height="120" src={imgEllipse1126} width="120" />
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full">
      <p className="basis-0 font-['Poppins:SemiBold',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[24px] text-black">Jammy Martin</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-0 py-[6px] relative shrink-0 w-full">
      <p className="basis-0 font-['Poppins:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#1c1a1a] text-[16px]">{`Experience : 5 yrs `}</p>
    </div>
  );
}

function ShapeSet3() {
  return (
    <div className="absolute h-[140px] left-[-186.5px] top-[-16px] w-[554px]" data-name="Shape Set">
      <div className="absolute inset-[-7.14%_-2.89%_-15.71%_-2.89%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 586 172">
          <g filter="url(#filter0_d_6_9677)" id="Shape Set" style={{ mixBlendMode: "plus-darker" }}>
            <rect fill="url(#paint0_linear_6_9677)" height="140" rx="16" shapeRendering="crispEdges" width="554" x="16" y="10" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="172" id="filter0_d_6_9677" width="586" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="6" />
              <feGaussianBlur stdDeviation="8" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_6_9677" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_6_9677" mode="normal" result="shape" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_6_9677" x1="293" x2="293" y1="10" y2="150">
              <stop offset="0.524038" stopOpacity="0" />
              <stop offset="1" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="box-border content-stretch flex flex-col items-start mb-[-22px] relative shrink-0 w-full">
      <Frame28 />
      <Frame29 />
      <ShapeSet3 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="basis-0 box-border content-stretch flex grow items-start min-h-px min-w-px overflow-clip px-0 py-[5px] relative shrink-0">
      <p className="basis-0 font-['Inter:Extra_Bold',sans-serif] font-['Poppins:Medium',sans-serif] font-extrabold grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#1c1a1a] text-[0px]">
        <span className="text-[16px]">Rating</span>
        <span className="text-[32px]"> </span>
        <span className="text-[16px]">:</span>
        <span className="text-[32px]"> </span>
      </p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="box-border content-stretch flex h-[58px] items-center mb-[-22px] relative shrink-0 w-full">
      <Frame31 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="absolute h-[26px] left-[55.5px] top-[72px] w-[178px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 178 26">
        <g id="Frame 2608550">
          <path d={svgPaths.p2d846680} fill="var(--fill-0, #FFB60B)" id="Star 1" />
          <path d={svgPaths.p27e3a580} fill="var(--fill-0, #FFB60B)" id="Star 2" />
          <path d={svgPaths.p2e22b800} fill="var(--fill-0, #FFB60B)" id="Star 3" />
          <path d={svgPaths.p2e62b680} fill="var(--fill-0, #FFB60B)" id="Star 4" />
          <path d={svgPaths.p1a54cc0} fill="var(--fill-0, #FFB60B)" id="Star 5" />
        </g>
      </svg>
    </div>
  );
}

function Frame34() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col items-center pb-[22px] pt-0 px-[10px] relative w-full">
          <Frame30 />
          <Frame32 />
          <Frame33 />
        </div>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="absolute bg-[#dfecbf] content-stretch flex gap-[4px] items-center left-0 right-0 rounded-[16px] top-1/2 translate-y-[-50%]">
      <Frame27 />
      <Frame34 />
    </div>
  );
}

function NurseCareTakerMainComponent3() {
  return (
    <div className="h-[140px] relative shrink-0 w-full" data-name="Nurse/care taker main component">
      <Frame35 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-center left-[13px] top-[287px] w-[560px]">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#066abf] text-[32px] text-center tracking-[0.1px] w-full">
        <p className="leading-[20px]">{`Care Takers `}</p>
      </div>
      <NurseCareTakerMainComponent />
      <NurseCareTakerMainComponent1 />
      <NurseCareTakerMainComponent2 />
      <NurseCareTakerMainComponent3 />
    </div>
  );
}

function Icon1() {
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

function StateLayer2() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <Icon1 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
      <StateLayer2 />
    </div>
  );
}

function IconButtonStandard() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[22px] size-[48px] top-[275px]" data-name="Icon button - standard">
      <Content2 />
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

export default function NursesScreen() {
  return (
    <div className="bg-white relative size-full" data-name="nurses screen">
      <Group2 />
      <SearchBar />
      <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] left-[180px] text-[24px] text-center text-nowrap text-white top-[623px] tracking-[0.1px] translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre">{`General `}</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] left-[calc(50%+138.5px)] text-[24px] text-center text-nowrap text-white top-[878px] tracking-[0.1px] translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre">{`Psychiatrist `}</p>
      </div>
      <Frame36 />
      <NameComponent />
      <Frame37 />
      <IconButtonStandard />
      <NavBar />
    </div>
  );
}