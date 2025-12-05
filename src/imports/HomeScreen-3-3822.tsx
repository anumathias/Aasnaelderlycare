import svgPaths from "./svg-386h4l17ev";
import imgItem1 from "figma:asset/f425ba276779256a050116d2f50a6b4551025f81.png";
import imgItem2 from "figma:asset/32ebe2e21ac000b1def59546ff8d41b4cf8fc45e.png";
import imgImage from "figma:asset/2648f019cf8cfdd331c2b9472eb047ef873c8b34.png";
import imgAvatars3DAvatar13 from "figma:asset/acdade26ec8c30dbfc71bfcd81a210fc9231eb9a.png";
import imgAvatars3DAvatar14 from "figma:asset/e194ee7dbf007daf2ccb230f9dc0d1d72b84f188.png";
import imgAvatars3DAvatar15 from "figma:asset/c778a73f52d89ce9495899635c0e445f9c3c89e9.png";
import imgAvatars3DAvatar16 from "figma:asset/53740fdcd6cea738192b97c671682d0bc6388c0a.png";
import imgImage1 from "figma:asset/a923939c607202e77168d0570ddbff4428b003ef.png";

function Item() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px overflow-clip relative rounded-[16px] shrink-0" data-name="Item-1">
      <img alt="" className="absolute inset-0 max-w-none mix-blend-luminosity object-50%-50% object-cover pointer-events-none rounded-[16px] size-full" src={imgItem1} />
    </div>
  );
}

function Item1() {
  return (
    <div className="h-full overflow-clip relative rounded-[16px] shrink-0 w-[120px]" data-name="Item-2">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16px]">
        <div className="absolute bg-white inset-0 rounded-[16px]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[16px] size-full" src={imgItem2} />
      </div>
    </div>
  );
}

function Carousel() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] h-[254px] items-start left-[16px] px-[16px] py-[8px] rounded-[16px] top-[196px] w-[554px]" data-name="Carousel">
      <Item />
      <Item1 />
    </div>
  );
}

function ShapeSet() {
  return <div className="absolute bg-gradient-to-b from-[59.615%] from-[rgba(0,0,0,0)] h-[238px] left-[16px] overflow-clip rounded-[16px] to-[94.712%] to-[rgba(0,0,0,0.4)] top-[206px] w-[410px]" data-name="Shape Set" />;
}

function ShapeSet1() {
  return <div className="absolute bg-gradient-to-b from-[59.615%] from-[rgba(0,0,0,0)] h-[238px] left-[calc(50%+141px)] overflow-clip rounded-[16px] to-[94.712%] to-[rgba(0,0,0,0.4)] top-[204px] w-[136px]" data-name="Shape Set" />;
}

function Image() {
  return (
    <div className="absolute inset-0 rounded-[16px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] size-full" src={imgImage} />
      <div className="overflow-clip rounded-[inherit] size-full" />
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Gradent() {
  return <div className="absolute bg-gradient-to-b bottom-0 from-[39.904%] from-[rgba(0,0,0,0)] left-0 right-0 rounded-[16px] to-[rgba(0,0,0,0.45)] top-[37.89%]" data-name="Gradent" />;
}

function CardV1() {
  return (
    <div className="absolute h-[227px] left-[16px] top-[524px] w-[267px]" data-name="Card V02">
      <Image />
      <Gradent />
      <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium inset-[83.26%_34.08%_7.93%_34.08%] justify-center leading-[0] text-[24px] text-center text-nowrap text-white tracking-[0.1px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre">{`Doctors `}</p>
      </div>
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

function Frame4() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] items-center left-[calc(50%+89px)] p-[16px] top-[40px] w-[185px]">
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
    <div className="absolute box-border content-stretch flex gap-[12px] items-center left-[16px] p-[16px] top-[40px] w-[185px]" data-name="Name Component">
      <Component3DAvatars />
      <Group1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#3dab51] box-border content-stretch flex gap-[4px] items-center justify-center leading-[0] px-[12px] py-[4px] relative rounded-[8px] shrink-0 text-[12px] text-nowrap text-white tracking-[0.1px]">
      <div className="flex flex-col font-['Roboto:Light',sans-serif] font-light justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[13px] text-nowrap whitespace-pre">Condition</p>
      </div>
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[13px] text-nowrap whitespace-pre">: Good</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#2e2e2e] text-[24px] tracking-[0.1px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Patient 01</p>
      </div>
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#2e2e2e] text-[16px] tracking-[0.1px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">62 y | Male</p>
      </div>
      <Frame2 />
    </div>
  );
}

function PatieltCardV1() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Patielt Card - V01">
      <div aria-hidden="true" className="absolute border border-[#1f75be] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[32px] items-center p-[16px] relative w-full">
          <div className="h-[110px] relative rounded-[16px] shrink-0 w-[124px]" data-name="Avatars / 3d_avatar_13">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] size-full" src={imgAvatars3DAvatar15} />
          </div>
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#b3261e] box-border content-stretch flex gap-[4px] items-center justify-center leading-[0] px-[12px] py-[4px] relative rounded-[8px] shrink-0 text-[12px] text-nowrap text-white tracking-[0.1px]">
      <div className="flex flex-col font-['Roboto:Light',sans-serif] font-light justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[13px] text-nowrap whitespace-pre">Condition</p>
      </div>
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[13px] text-nowrap whitespace-pre">: Need Attention</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#2e2e2e] text-[24px] tracking-[0.1px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Patient 02</p>
      </div>
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#2e2e2e] text-[16px] tracking-[0.1px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">56 y | Female</p>
      </div>
      <Frame3 />
    </div>
  );
}

function PatieltCardV() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Patielt Card - V01">
      <div aria-hidden="true" className="absolute border border-[#1f75be] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[32px] items-center p-[16px] relative w-full">
          <div className="h-[110px] relative rounded-[16px] shrink-0 w-[124px]" data-name="Avatars / 3d_avatar_13">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] size-full" src={imgAvatars3DAvatar16} />
          </div>
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[16px] top-[778px] w-[554px]">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1f75be] text-[24px] tracking-[0.1px] w-full">
        <p className="leading-[20px]">Family Members</p>
      </div>
      <PatieltCardV1 />
      <PatieltCardV />
    </div>
  );
}

function Image1() {
  return (
    <div className="absolute inset-0 rounded-[16px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] size-full" src={imgImage1} />
      <div className="overflow-clip rounded-[inherit] size-full" />
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Gradent1() {
  return <div className="absolute bg-gradient-to-b bottom-0 from-[39.904%] from-[rgba(0,0,0,0)] left-0 right-0 rounded-[16px] to-[rgba(0,0,0,0.45)] top-[37.89%]" data-name="Gradent" />;
}

function CardV() {
  return (
    <div className="absolute h-[227px] left-[calc(50%+7px)] top-[524px] w-[267px]" data-name="Card V02">
      <Image1 />
      <Gradent1 />
      <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium inset-[83.26%_36.33%_7.93%_36.33%] justify-center leading-[0] text-[24px] text-center text-nowrap text-white tracking-[0.1px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre">Others</p>
      </div>
    </div>
  );
}

function IcRoundHome() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="ic:round-home">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="ic:round-home">
          <path d={svgPaths.p22846f80} fill="var(--fill-0, #1F75BE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Home() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[55px]" data-name="Home">
      <IcRoundHome />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1f75be] text-[20px] text-center text-nowrap tracking-[0.1px]" style={{ fontVariationSettings: "'wdth' 100" }}>
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

export default function HomeScreen() {
  return (
    <div className="bg-white relative size-full" data-name="Home screen">
      <Carousel />
      <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] left-[calc(50%+159px)] text-[24px] text-center text-nowrap text-white top-[698px] tracking-[0.1px] translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre">Care Taker</p>
      </div>
      <ShapeSet />
      <ShapeSet1 />
      <div className="absolute flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] left-[297.5px] not-italic text-[#066abf] text-[32px] text-center text-nowrap top-[159px] tracking-[0.1px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[20px] whitespace-pre">Welcome User!!</p>
      </div>
      <CardV1 />
      <Frame4 />
      <NameComponent />
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] left-[16px] not-italic text-[#1f75be] text-[24px] text-nowrap top-[487px] tracking-[0.1px] translate-y-[-50%]">
        <p className="leading-[20px] whitespace-pre">Services</p>
      </div>
      <Frame5 />
      <CardV />
      <NavBar />
    </div>
  );
}