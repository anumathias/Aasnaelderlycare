import svgPaths from "./svg-hyrv9ymp41";
import imgAvatars3DAvatar13 from "figma:asset/acdade26ec8c30dbfc71bfcd81a210fc9231eb9a.png";
import imgAvatars3DAvatar14 from "figma:asset/e194ee7dbf007daf2ccb230f9dc0d1d72b84f188.png";
import imgRectangle911 from "figma:asset/50e01119d7401783d1669be3fd261ae441cc071d.png";
import imgRectangle912 from "figma:asset/92e298a068a9c7b0e76c6580ea4033048c244306.png";
import imgRectangle913 from "figma:asset/9f1080e8842219fc10cac3cce73a08f6fa4ae61e.png";
import imgRectangle914 from "figma:asset/5e5b272fb937b99a9a65d9115daea2af39c22f76.png";

function IconamoonDeliveryFill() {
  return <div className="absolute left-[32px] size-[24px] top-[670px]" data-name="iconamoon:delivery-fill" />;
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

function Frame() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] items-center left-[calc(50%+90px)] p-[16px] top-[39px] w-[185px]">
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
    <div className="absolute box-border content-stretch flex gap-[12px] items-center left-[18px] p-[16px] top-[39px] w-[185px]" data-name="Name Component">
      <Component3DAvatars />
      <Group1 />
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white border border-[rgba(116,116,116,0.5)] border-solid h-[48px] ml-0 mt-0 rounded-[100px] w-[102px]" />
      <div className="[grid-area:1_/_1] flex flex-col font-['Poppins:Medium',sans-serif] justify-center ml-[14px] mt-[24px] not-italic relative text-[#49454f] text-[14px] text-nowrap tracking-[0.1px] translate-y-[-50%]">
        <p className="leading-[20px] whitespace-pre">{`View More `}</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-center p-[16px] relative shrink-0">
      <Group2 />
    </div>
  );
}

function Group3() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#48a2e8] h-[48px] ml-0 mt-0 rounded-[100px] w-[102px]" />
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group3 />
      <div className="[grid-area:1_/_1] flex flex-col font-['Poppins:Medium',sans-serif] justify-center ml-[16px] mt-[24px] not-italic relative text-[14px] text-nowrap text-white tracking-[0.1px] translate-y-[-50%]">
        <p className="leading-[20px] whitespace-pre">Book Now</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[5px] h-[45px] items-center justify-end relative shrink-0 w-full">
      <Frame1 />
      <Group4 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start p-[16px] relative w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#1d1b20] text-[16px] tracking-[0.5px] w-full">Comprehensive Wellness Plan</p>
          <p className="font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#49454f] text-[14px] tracking-[0.25px] w-full">₹2,500/month</p>
          <ul className="block font-['Poppins:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#49454f] text-[10px] tracking-[0.25px] w-full">
            <li className="mb-0 ms-[15px]">
              <span className="leading-[20px]">Annual full-body check-up</span>
            </li>
            <li className="mb-0 ms-[15px]">
              <span className="leading-[20px]">Medicine delivery service</span>
            </li>
            <li className="ms-[15px]">
              <span className="leading-[20px]">24/7 Tele-consultation</span>
            </li>
          </ul>
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function PackagesMainComponent() {
  return (
    <div className="content-stretch flex flex-col h-[429px] items-start relative shrink-0 w-[269px]" data-name="Packages main component">
      <div className="h-[188px] relative shrink-0 w-full">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[267.29%] left-0 max-w-none top-[-63.04%] w-full" src={imgRectangle911} />
        </div>
      </div>
      <Frame2 />
    </div>
  );
}

function Group5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white border border-[rgba(116,116,116,0.5)] border-solid h-[48px] ml-0 mt-0 rounded-[100px] w-[102px]" />
      <div className="[grid-area:1_/_1] flex flex-col font-['Poppins:Medium',sans-serif] justify-center ml-[14px] mt-[24px] not-italic relative text-[#49454f] text-[14px] text-nowrap tracking-[0.1px] translate-y-[-50%]">
        <p className="leading-[20px] whitespace-pre">{`View More `}</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-center p-[16px] relative shrink-0">
      <Group5 />
    </div>
  );
}

function Group6() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#48a2e8] h-[48px] ml-0 mt-0 rounded-[100px] w-[102px]" />
    </div>
  );
}

function Group7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group6 />
      <div className="[grid-area:1_/_1] flex flex-col font-['Poppins:Medium',sans-serif] justify-center ml-[16px] mt-[24px] not-italic relative text-[14px] text-nowrap text-white tracking-[0.1px] translate-y-[-50%]">
        <p className="leading-[20px] whitespace-pre">Book Now</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[5px] h-[45px] items-center justify-end relative shrink-0 w-full">
      <Frame4 />
      <Group7 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start p-[16px] relative w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#1d1b20] text-[16px] tracking-[0.5px] w-full">{`Advanced Chronic Disease Management `}</p>
          <p className="font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#49454f] text-[14px] tracking-[0.25px] w-full">₹3,200/month</p>
          <ul className="block font-['Poppins:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#49454f] text-[10px] tracking-[0.25px] w-full">
            <li className="mb-0 ms-[15px]">
              <span className="leading-[20px]">Specialist consultations (2/year)</span>
            </li>
            <li className="mb-0 ms-[15px]">
              <span className="leading-[20px]">Personalized medication reminders</span>
            </li>
            <li className="ms-[15px]">
              <span className="leading-[20px]">Dietary and lifestyle coaching</span>
            </li>
          </ul>
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function PackagesMainComponent1() {
  return (
    <div className="content-stretch flex flex-col h-[429px] items-start relative shrink-0 w-[269px]" data-name="Packages main component">
      <div className="h-[188px] relative shrink-0 w-full">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle912} />
      </div>
      <Frame6 />
    </div>
  );
}

function Group8() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white border border-[rgba(116,116,116,0.5)] border-solid h-[48px] ml-0 mt-0 rounded-[100px] w-[102px]" />
      <div className="[grid-area:1_/_1] flex flex-col font-['Poppins:Medium',sans-serif] justify-center ml-[14px] mt-[24px] not-italic relative text-[#49454f] text-[14px] text-nowrap tracking-[0.1px] translate-y-[-50%]">
        <p className="leading-[20px] whitespace-pre">{`View More `}</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-center p-[16px] relative shrink-0">
      <Group8 />
    </div>
  );
}

function Group9() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#48a2e8] h-[48px] ml-0 mt-0 rounded-[100px] w-[102px]" />
    </div>
  );
}

function Group10() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group9 />
      <div className="[grid-area:1_/_1] flex flex-col font-['Poppins:Medium',sans-serif] justify-center ml-[16px] mt-[24px] not-italic relative text-[14px] text-nowrap text-white tracking-[0.1px] translate-y-[-50%]">
        <p className="leading-[20px] whitespace-pre">Book Now</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[5px] h-[45px] items-center justify-end relative shrink-0 w-full">
      <Frame7 />
      <Group10 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start p-[16px] relative w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#1d1b20] text-[16px] tracking-[0.5px] w-full">{`Rehabilitation and Recovery `}</p>
          <p className="font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#49454f] text-[14px] tracking-[0.25px] w-full">₹2,200/month</p>
          <ul className="block font-['Poppins:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#49454f] text-[10px] tracking-[0.25px] w-full">
            <li className="mb-0 ms-[15px]">
              <span className="leading-[20px]">Physiotherapy sessions (4/month)</span>
            </li>
            <li className="mb-0 ms-[15px]">
              <span className="leading-[20px]">Post-operative care support</span>
            </li>
            <li className="ms-[15px]">
              <span className="leading-[20px]">Rehab equipment rental discounts</span>
            </li>
          </ul>
          <Frame8 />
        </div>
      </div>
    </div>
  );
}

function PackagesMainComponent2() {
  return (
    <div className="content-stretch flex flex-col h-[429px] items-start relative shrink-0 w-[269px]" data-name="Packages main component">
      <div className="h-[188px] relative shrink-0 w-full">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle913} />
      </div>
      <Frame9 />
    </div>
  );
}

function Group11() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white border border-[rgba(116,116,116,0.5)] border-solid h-[48px] ml-0 mt-0 rounded-[100px] w-[102px]" />
      <div className="[grid-area:1_/_1] flex flex-col font-['Poppins:Medium',sans-serif] justify-center ml-[14px] mt-[24px] not-italic relative text-[#49454f] text-[14px] text-nowrap tracking-[0.1px] translate-y-[-50%]">
        <p className="leading-[20px] whitespace-pre">{`View More `}</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-center p-[16px] relative shrink-0">
      <Group11 />
    </div>
  );
}

function Group12() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#48a2e8] h-[48px] ml-0 mt-0 rounded-[100px] w-[102px]" />
    </div>
  );
}

function Group13() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group12 />
      <div className="[grid-area:1_/_1] flex flex-col font-['Poppins:Medium',sans-serif] justify-center ml-[16px] mt-[24px] not-italic relative text-[14px] text-nowrap text-white tracking-[0.1px] translate-y-[-50%]">
        <p className="leading-[20px] whitespace-pre">Book Now</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[5px] h-[45px] items-center justify-end relative shrink-0 w-full">
      <Frame10 />
      <Group13 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start p-[16px] relative w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#1d1b20] text-[16px] tracking-[0.5px] w-full">{`Basic Care and Support `}</p>
          <p className="font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#49454f] text-[14px] tracking-[0.25px] w-full">₹1,800/month</p>
          <ul className="block font-['Poppins:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#49454f] text-[14px] tracking-[0.25px] w-full">
            <li className="mb-0 ms-[21px]">
              <span className="leading-[20px]">Bi-annual health assessment</span>
            </li>
            <li className="mb-0 ms-[21px]">
              <span className="leading-[20px]">Monthly home nurse visit</span>
            </li>
            <li className="ms-[21px]">
              <span className="leading-[20px]">Emergency response coordination</span>
            </li>
          </ul>
          <Frame11 />
        </div>
      </div>
    </div>
  );
}

function PackagesMainComponent3() {
  return (
    <div className="content-stretch flex flex-col h-[429px] items-start relative shrink-0 w-[269px]" data-name="Packages main component">
      <div className="h-[188px] relative shrink-0 w-full">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle914} />
      </div>
      <Frame12 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute content-start flex flex-wrap gap-[21px] items-start left-[15px] top-[184px] w-[559px]">
      <PackagesMainComponent />
      <PackagesMainComponent1 />
      <PackagesMainComponent2 />
      <PackagesMainComponent3 />
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
          <path d={svgPaths.p3781a680} fill="var(--fill-0, #1F75BE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Packages() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[89px]" data-name="Packages">
      <MaterialSymbolsPackageOutlineSharp />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1f75be] text-[20px] text-center text-nowrap tracking-[0.1px]" style={{ fontVariationSettings: "'wdth' 100" }}>
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

export default function Packages1() {
  return (
    <div className="bg-white relative size-full" data-name="packages 00">
      <div className="absolute left-[54px] size-[100px] top-[139px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Rectangle 854"></g>
        </svg>
      </div>
      <IconamoonDeliveryFill />
      <Frame />
      <NameComponent />
      <Frame13 />
      <NavBar />
    </div>
  );
}