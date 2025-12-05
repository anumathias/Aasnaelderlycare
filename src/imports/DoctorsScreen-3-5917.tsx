import svgPaths from "./svg-i99b606veb";
import imgAvatars3DAvatar13 from "figma:asset/acdade26ec8c30dbfc71bfcd81a210fc9231eb9a.png";
import imgAvatars3DAvatar14 from "figma:asset/e194ee7dbf007daf2ccb230f9dc0d1d72b84f188.png";
import imgRectangle832 from "figma:asset/5f9c6a325c11227889f93af7a043cec9d0ea62ee.png";
import imgRectangle833 from "figma:asset/295766ef3bb06e9a0f321862fe859933be163c63.png";
import imgRectangle834 from "figma:asset/b20c9f23f43e6cf7991a6051ea2f10dfa4549932.png";

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
    <div className="absolute bg-[#ece6f0] h-[56px] left-[19px] max-w-[720px] rounded-[28px] top-[164px] w-[553px]" data-name="Search bar">
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

function Frame15() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] items-center left-[calc(50%+91px)] p-[16px] top-[44px] w-[183px]">
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
    <div className="absolute box-border content-stretch flex gap-[12px] items-center left-[17px] p-[16px] top-[44px] w-[183px]" data-name="Name Component">
      <Component3DAvatars />
      <Group1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start leading-[normal] not-italic relative shrink-0 w-full">
      <p className="font-['Poppins:ExtraBold',sans-serif] relative shrink-0 text-[24px] text-white w-full">{`Dr . Mary Lawson `}</p>
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[20px] text-[rgba(255,255,255,0.5)] w-full">{`General Specialist `}</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-white">
      <p className="font-['Poppins:ExtraBold',sans-serif] relative shrink-0 w-full">{`Experience `}</p>
      <p className="font-['Poppins:Medium',sans-serif] relative shrink-0 w-full">{`5 Years `}</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-white">
      <p className="font-['Poppins:ExtraBold',sans-serif] relative shrink-0 w-full">{`Patients `}</p>
      <p className="font-['Poppins:Medium',sans-serif] relative shrink-0 w-full">{`503K `}</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[69px] items-center relative shrink-0 w-full">
      <Frame2 />
      <Frame1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="basis-0 bg-[#765cf6] grow h-[200px] min-h-px min-w-px relative shrink-0">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[30px] h-[200px] items-start p-[24px] relative w-full">
          <Frame />
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function ShapeSet() {
  return <div className="absolute bg-gradient-to-b from-[52.404%] from-[rgba(0,0,0,0)] h-[185px] left-px overflow-clip rounded-[16px] shadow-[0px_6px_16px_0px_rgba(0,0,0,0.16)] to-[rgba(0,0,0,0.4)] top-0 w-[553px]" data-name="Shape Set" />;
}

function DoctorMainComponent() {
  return (
    <div className="content-stretch flex h-[185px] items-end overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="Doctor main Component">
      <Frame4 />
      <div className="h-[185px] relative shrink-0 w-[193px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-white inset-0" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgRectangle832} />
        </div>
      </div>
      <ShapeSet />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start leading-[normal] not-italic relative shrink-0 w-full">
      <p className="font-['Poppins:ExtraBold',sans-serif] relative shrink-0 text-[24px] text-white w-full">{`Dr . John Harry `}</p>
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[20px] text-[rgba(255,255,255,0.5)] w-full">{`Cardiologist Specialist `}</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-white">
      <p className="font-['Poppins:ExtraBold',sans-serif] relative shrink-0 w-full">{`Experience `}</p>
      <p className="font-['Poppins:Medium',sans-serif] relative shrink-0 w-full">{`3 Years `}</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-white">
      <p className="font-['Poppins:ExtraBold',sans-serif] relative shrink-0 w-full">{`Patients `}</p>
      <p className="font-['Poppins:Medium',sans-serif] relative shrink-0 w-full">{`2.5K `}</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[69px] items-center relative shrink-0 w-full">
      <Frame6 />
      <Frame7 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="basis-0 bg-[#2962e0] grow h-[200px] min-h-px min-w-px relative shrink-0">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[30px] h-[200px] items-start p-[24px] relative w-full">
          <Frame5 />
          <Frame8 />
        </div>
      </div>
    </div>
  );
}

function ShapeSet1() {
  return <div className="absolute bg-gradient-to-b from-[52.404%] from-[rgba(0,0,0,0)] h-[185px] left-px overflow-clip rounded-[16px] shadow-[0px_6px_16px_0px_rgba(0,0,0,0.16)] to-[rgba(0,0,0,0.4)] top-0 w-[553px]" data-name="Shape Set" />;
}

function DoctorMainComponent1() {
  return (
    <div className="content-stretch flex h-[185px] items-end overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="Doctor main Component">
      <Frame9 />
      <div className="h-[185px] relative shrink-0 w-[193px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-white inset-0" />
          <img alt="" className="absolute max-w-none object-50%-50% object-contain size-full" src={imgRectangle833} />
        </div>
      </div>
      <ShapeSet1 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start leading-[normal] not-italic relative shrink-0 w-full">
      <p className="font-['Poppins:ExtraBold',sans-serif] relative shrink-0 text-[24px] text-white w-full">Dr . Eddy Munson</p>
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[20px] text-[rgba(255,255,255,0.5)] w-full">Neurologist Specialist</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-white">
      <p className="font-['Poppins:ExtraBold',sans-serif] relative shrink-0 w-full">{`Experience `}</p>
      <p className="font-['Poppins:Medium',sans-serif] relative shrink-0 w-full">{`13 Years `}</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-white">
      <p className="font-['Poppins:ExtraBold',sans-serif] relative shrink-0 w-full">{`Patients `}</p>
      <p className="font-['Poppins:Medium',sans-serif] relative shrink-0 w-full">{`350K `}</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[69px] items-center relative shrink-0 w-full">
      <Frame11 />
      <Frame12 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="basis-0 bg-[#5fced3] grow h-[200px] min-h-px min-w-px relative shrink-0">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[30px] h-[200px] items-start p-[24px] relative w-full">
          <Frame10 />
          <Frame13 />
        </div>
      </div>
    </div>
  );
}

function ShapeSet2() {
  return <div className="absolute bg-gradient-to-b from-[52.404%] from-[rgba(0,0,0,0)] h-[185px] left-px overflow-clip rounded-[16px] shadow-[0px_6px_16px_0px_rgba(0,0,0,0.16)] to-[rgba(0,0,0,0.4)] top-0 w-[553px]" data-name="Shape Set" />;
}

function DoctorMainComponent2() {
  return (
    <div className="content-stretch flex h-[185px] items-end overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="Doctor main Component">
      <Frame14 />
      <div className="h-[185px] relative shrink-0 w-[193px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-white inset-0" />
          <img alt="" className="absolute max-w-none object-50%-50% object-contain size-full" src={imgRectangle834} />
        </div>
      </div>
      <ShapeSet2 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <DoctorMainComponent />
      <DoctorMainComponent1 />
      <DoctorMainComponent2 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-center left-[16px] top-[280px] w-[552px]">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#066abf] text-[32px] text-center tracking-[0.1px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">{` Doctors  `}</p>
      </div>
      <Frame16 />
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
    <div className="absolute content-stretch flex items-center justify-center left-[23px] size-[48px] top-[266px]" data-name="Icon button - standard">
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

export default function DoctorsScreen() {
  return (
    <div className="bg-white relative size-full" data-name="Doctors screen">
      <Group2 />
      <SearchBar />
      <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] left-[calc(50%+138.5px)] text-[24px] text-center text-nowrap text-white top-[878px] tracking-[0.1px] translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre">{`Psychiatrist `}</p>
      </div>
      <Frame15 />
      <NameComponent />
      <Frame17 />
      <IconButtonStandard />
      <NavBar />
    </div>
  );
}