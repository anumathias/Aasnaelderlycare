import svgPaths from "./svg-feysdjlto6";
import imgAvatars3DAvatar13 from "figma:asset/9cad12d796c14c26b67c6b770b814e923e0d9d91.png";
import imgEllipse1133 from "figma:asset/4ecc9cd0fda8c368a90e752bca859166e34c26a7.png";

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
    <div className="absolute content-stretch flex items-center justify-center left-[18px] size-[48px] top-[51px]" data-name="Icon button - standard">
      <Content />
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

function Group() {
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
      <Group />
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

function Component3DAvatars() {
  return (
    <div className="relative shrink-0 size-[150px]" data-name="3D Avatars / 14">
      <div className="absolute inset-0 pointer-events-none rounded-[50px]" data-name="Avatars / 3d_avatar_13">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[50px] size-full" src={imgAvatars3DAvatar13} />
        <div aria-hidden="true" className="absolute border border-[#252222] border-solid inset-0 rounded-[50px]" />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col font-['Poppins:Regular',sans-serif] gap-[16px] items-start leading-[0] not-italic relative shrink-0 text-[#2e2e2e] tracking-[0.1px] w-[149px]">
      <div className="flex flex-col justify-center relative shrink-0 text-[24px] w-full">
        <p className="leading-[20px]">{`William Roy `}</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[16px] w-full">
        <p className="leading-[20px]">24 y | Male</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex gap-[32px] items-center left-0 top-0">
      <Component3DAvatars />
      <Frame1 />
    </div>
  );
}

function IcOutlineEmail() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ic:outline-email">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ic:outline-email">
          <path d={svgPaths.p1ecc0980} fill="var(--fill-0, #48A2E8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative rounded-tl-[15px] rounded-tr-[15px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(116,116,116,0.5)] border-solid inset-0 pointer-events-none rounded-tl-[15px] rounded-tr-[15px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center p-[16px] relative w-full">
          <IcOutlineEmail />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[48px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black tracking-[0.1px] w-[248px]">
            <p className="leading-[20px]">{`william230@example.com `}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function IcBaselinePhone() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ic:baseline-phone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ic:baseline-phone">
          <path d={svgPaths.p2192f00} fill="var(--fill-0, #3DAB51)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative rounded-tl-[15px] rounded-tr-[15px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(116,116,116,0.5)] border-solid inset-0 pointer-events-none rounded-tl-[15px] rounded-tr-[15px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center p-[16px] relative w-full">
          <IcBaselinePhone />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[48px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black tracking-[0.1px] w-[248px]">
            <p className="leading-[20px]">+91 6756758985</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MdiBirthdayCake() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="mdi:birthday-cake">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="mdi:birthday-cake">
          <path d={svgPaths.p3c1e6e00} fill="var(--fill-0, #E540C7)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(116,116,116,0.5)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center p-[16px] relative w-full">
          <MdiBirthdayCake />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-nowrap tracking-[0.1px]">
            <p className="leading-[20px] whitespace-pre">15/01/2000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[12.5%_18.75%]" data-name="Group">
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

function MynauiLocation() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="mynaui:location">
      <Group1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative rounded-tl-[15px] rounded-tr-[15px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(116,116,116,0.5)] border-solid inset-0 pointer-events-none rounded-tl-[15px] rounded-tr-[15px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center p-[16px] relative w-full">
          <MynauiLocation />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[48px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black tracking-[0.1px] w-[492px]">
            <p className="leading-[20px] whitespace-pre-wrap">{`Flat no : 400 5th floor,Neem Hills Appartments , Hyderabad Telengana   `}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[12.5%_16.67%_16.67%_16.67%]" data-name="Group">
      <div className="absolute inset-[-5.88%_-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 19">
          <g id="Group">
            <path d={svgPaths.p28031300} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p2a375540} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function TablerLanguage() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="tabler:language">
      <Group2 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative rounded-tl-[15px] rounded-tr-[15px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(116,116,116,0.5)] border-solid inset-0 pointer-events-none rounded-tl-[15px] rounded-tr-[15px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center p-[16px] relative w-full">
          <TablerLanguage />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-nowrap tracking-[0.1px]">
            <p className="leading-[20px] whitespace-pre">{`English  `}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[12px] items-start left-0 p-[16px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.19)] top-[258px] w-[550px]">
      <Frame4 />
      <Frame5 />
      <Frame7 />
      <Frame6 />
      <Frame8 />
    </div>
  );
}

function IcBaselinePlus() {
  return (
    <div className="[grid-area:1_/_1] ml-[142.36px] mt-[13.08px] relative size-[29.989px]" data-name="ic:baseline-plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="ic:baseline-plus">
          <path d={svgPaths.pd2fa180} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group8() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] border border-[#757575] border-solid h-[56px] ml-0 mt-0 rounded-[16px] w-[189.592px]" />
      <IcBaselinePlus />
      <div className="[grid-area:1_/_1] flex flex-col font-['Poppins:Regular',sans-serif] h-[17.92px] justify-center leading-[0] ml-[11.87px] mt-[27.96px] not-italic relative text-[20px] text-black tracking-[0.1px] translate-y-[-50%] w-[154.532px]">
        <p className="leading-[20px] whitespace-pre-wrap">{`Add Patients  `}</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute box-border content-stretch flex gap-[152px] h-[88px] items-center leading-[0] left-0 p-[16px] top-[690px] w-[550px]">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[#066abf] text-[24px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">{`Linked Patients `}</p>
      </div>
      <Group8 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="h-[778px] relative shrink-0 w-full">
      <Frame2 />
      <Frame9 />
      <Frame10 />
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-[#066abf] h-[4px] ml-0 mt-0 w-[246px]" />
      <div className="[grid-area:1_/_1] bg-[#f7fbff] h-[56px] ml-0 mt-[4px] shadow-[0px_4px_4px_0px_#bcccda] w-[246px]" />
    </div>
  );
}

function Group5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white border border-[#d9d9d9] border-solid h-[60px] ml-0 mt-0 shadow-[0px_4px_4px_0px_#bcccda] w-[246px]" />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[42.39%_88.68%_36.96%_7.71%]" data-name="Group">
      <div className="absolute inset-[-3.95%_-3.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 21">
          <g id="Group">
            <path d={svgPaths.p2000b420} id="Vector" stroke="var(--stroke-0, black)" strokeWidth="1.5" />
            <path d={svgPaths.p64eb400} id="Vector_2" stroke="var(--stroke-0, black)" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[34px] top-[38px]">
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[147.97px] not-italic text-[24px] text-black text-center top-[48px] tracking-[0.1px] translate-x-[-50%] translate-y-[-50%] w-[227.933px]">
        <p className="leading-[20px]">{`View Profile `}</p>
      </div>
      <Group3 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-[324px] top-[38px]">
      <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] left-[436.18px] text-[24px] text-black text-center top-[48px] tracking-[0.1px] translate-x-[-50%] translate-y-[-50%] w-[224.367px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">{`EDIT Profile `}</p>
      </div>
      <div className="absolute inset-[41.3%_35.78%_41.3%_61.34%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <path d={svgPaths.pf144400} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute box-border content-stretch flex gap-[24px] items-end left-0 p-[16px] top-[166px] w-[554px]">
      <Group4 />
      <Group5 />
      <Group6 />
      <Group7 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-center justify-end relative shrink-0 w-full">
      <Frame11 />
      <Frame3 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic relative shrink-0 text-[24px] text-nowrap tracking-[0.1px] w-[198px]">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center relative shrink-0 text-black text-center">
        <p className="leading-[20px] text-nowrap whitespace-pre">{`Mrs. Neelam Roy `}</p>
      </div>
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center relative shrink-0 text-[#757575]">
        <p className="leading-[20px] text-nowrap whitespace-pre">{`Age : 75 `}</p>
      </div>
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

function StateLayer1() {
  return (
    <div className="content-stretch flex items-center justify-center relative size-[40px]" data-name="State-layer">
      <Icon1 />
    </div>
  );
}

function LinkPatientsMainComponent() {
  return (
    <div className="bg-[#dde8f9] h-[129px] relative rounded-[16px] shrink-0 w-full" data-name="link patients main component">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[129px] items-center p-[16px] relative w-full">
          <div className="relative shrink-0 size-[120px]">
            <img alt="" className="block max-w-none size-full" height="120" src={imgEllipse1133} width="120" />
          </div>
          <Frame />
          <div className="absolute flex items-center justify-center left-[492px] size-[40.386px] top-[60px]" style={{ "--transform-inner-width": "40", "--transform-inner-height": "40" } as React.CSSProperties}>
            <div className="flex-none rotate-[180.555deg]">
              <StateLayer1 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[16px] top-[109px] w-[557px]">
      <Frame12 />
      <LinkPatientsMainComponent />
    </div>
  );
}

export default function EndUsersScreen() {
  return (
    <div className="bg-white relative size-full" data-name="end users screen 00">
      <div className="absolute left-[54px] size-[100px] top-[139px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Rectangle 854"></g>
        </svg>
      </div>
      <IconButtonStandard />
      <NavBar />
      <Frame13 />
    </div>
  );
}