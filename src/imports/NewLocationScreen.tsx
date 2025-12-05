import svgPaths from "./svg-jd3yabukh9";
import imgAvatars3DAvatar13 from "figma:asset/e194ee7dbf007daf2ccb230f9dc0d1d72b84f188.png";
import imgRectangle852 from "figma:asset/701cb0cdb156b04586a986867e358eaeafdb9176.png";

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
    <div className="absolute box-border content-stretch flex gap-[12px] items-center left-[20px] p-[16px] top-[37px] w-[95px]" data-name="Name Component">
      <Component3DAvatars />
    </div>
  );
}

function Group() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Group">
      <div className="absolute inset-[-3.13%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
          <g id="Group">
            <path d={svgPaths.p24374000} fill="var(--fill-0, #48A2E8)" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.paae5c80} fill="var(--fill-0, #48A2E8)" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start leading-[0] p-[16px] relative text-[16px] text-black tracking-[0.1px] w-full">
          <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center min-w-full relative shrink-0 w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px]">{`Nagireddy Colony `}</p>
          </div>
          <div className="flex flex-col font-['Poppins:Light',sans-serif] justify-center not-italic relative shrink-0 text-nowrap">
            <p className="leading-[20px] whitespace-pre">NagiReddy, Alwal,Secunderabad,Telengana,India</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[116px] items-center left-[7px] p-[16px] top-[16px] w-[513px]">
      <Group />
      <Frame3 />
    </div>
  );
}

function Frame() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[12px] items-start leading-[0] not-italic p-[4px] relative shrink-0 text-[#121314] text-nowrap tracking-[0.1px]">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center relative shrink-0 text-[20px] text-center">
        <p className="leading-[20px] text-nowrap whitespace-pre">{`House /Flat No `}</p>
      </div>
      <div className="flex flex-col font-['Poppins:Light',sans-serif] justify-center relative shrink-0 text-[16px]">
        <p className="leading-[20px] text-nowrap whitespace-pre">{`Enter your Address `}</p>
      </div>
    </div>
  );
}

function CreditCardComponent() {
  return (
    <div className="bg-white h-[79px] relative shrink-0 w-full" data-name="Credit Card Component">
      <div aria-hidden="true" className="absolute border border-[rgba(116,116,116,0.5)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[79px] items-center p-[4px] relative w-full">
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[12px] items-start leading-[0] not-italic p-[4px] relative shrink-0 text-[#121314] text-nowrap tracking-[0.1px]">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center relative shrink-0 text-[20px] text-center">
        <p className="leading-[20px] text-nowrap whitespace-pre">Apartment/Road/Area (Recommended)</p>
      </div>
      <div className="flex flex-col font-['Poppins:Light',sans-serif] justify-center relative shrink-0 text-[16px]">
        <p className="leading-[20px] text-nowrap whitespace-pre">{`Enter your Address `}</p>
      </div>
    </div>
  );
}

function CreditCardComponent1() {
  return (
    <div className="bg-white h-[79px] relative shrink-0 w-full" data-name="Credit Card Component">
      <div aria-hidden="true" className="absolute border border-[rgba(116,116,116,0.5)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[79px] items-center p-[4px] relative w-full">
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[12px] items-start leading-[0] not-italic p-[4px] relative shrink-0 text-[#121314] text-nowrap tracking-[0.1px]">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center relative shrink-0 text-[20px] text-center">
        <p className="leading-[20px] text-nowrap whitespace-pre">Direction to Reach (Optional )</p>
      </div>
      <div className="flex flex-col font-['Poppins:Light',sans-serif] justify-center relative shrink-0 text-[16px]">
        <p className="leading-[20px] text-nowrap whitespace-pre">{`Help us Reach you Fast `}</p>
      </div>
    </div>
  );
}

function CreditCardComponent2() {
  return (
    <div className="bg-white h-[79px] relative shrink-0 w-full" data-name="Credit Card Component">
      <div aria-hidden="true" className="absolute border border-[rgba(116,116,116,0.5)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[79px] items-center p-[4px] relative w-full">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[12px] items-start left-[-9px] p-[16px] top-[122px] w-[545px]">
      <CreditCardComponent />
      <CreditCardComponent1 />
      <CreditCardComponent2 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute h-[453px] left-[15px] top-[140px] w-[521px]">
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute border border-[rgba(116,116,116,0.5)] border-solid h-[610px] left-[17px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.19)] top-[291px] w-[553px]">
      <div className="absolute h-[113px] left-[15px] rounded-[16px] top-[15px] w-[521px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16px]">
          <img alt="" className="absolute max-w-none object-50%-50% object-cover opacity-20 rounded-[16px] size-full" src={imgRectangle852} />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover opacity-40 rounded-[16px] size-full" src={imgRectangle852} />
        </div>
      </div>
      <Frame6 />
    </div>
  );
}

function StateLayer() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] isolate items-center justify-center px-[16px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[24px] text-center text-nowrap text-white tracking-[0.1px] z-[1]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px] whitespace-pre">{`Confirm Address `}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BuildingBlocksButtonGroupConnectedSegmentsSmall() {
  return (
    <div className="absolute bg-[#48a2e8] h-[64px] left-[22px] min-w-[48px] rounded-[8px] top-[934px] w-[552px]" data-name="Building Blocks/Button group/Connected segments/Small">
      <div className="content-stretch flex flex-col gap-[2px] h-[64px] items-center justify-center min-w-inherit overflow-clip relative rounded-[inherit] w-[552px]">
        <StateLayer />
      </div>
      <div aria-hidden="true" className="absolute border border-[#0d2334] border-solid inset-0 pointer-events-none rounded-[8px]" />
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

function Group1() {
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
      <Group1 />
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

export default function NewLocationScreen() {
  return (
    <div className="bg-white relative size-full" data-name="new location screen">
      <div className="absolute left-[54px] size-[100px] top-[139px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Rectangle 854"></g>
        </svg>
      </div>
      <div className="absolute bg-[rgba(91,151,249,0.4)] h-[183px] left-0 rounded-bl-[16px] rounded-br-[16px] top-0 w-[586px]" />
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] left-[298px] not-italic text-[#066abf] text-[32px] text-center text-nowrap top-[139px] tracking-[0.1px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[20px] whitespace-pre">New Location</p>
      </div>
      <NameComponent />
      <div className="absolute inset-[19.49%_93.79%_78.99%_4.44%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 19">
          <path d={svgPaths.p356e29c0} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <Frame7 />
      <BuildingBlocksButtonGroupConnectedSegmentsSmall />
      <NavBar />
    </div>
  );
}