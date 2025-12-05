import svgPaths from "./svg-1q7y5rsqh7";
import imgAvatars3DAvatar13 from "figma:asset/9b9cd8f18109509a8dc50d19c1287a7f6dd49d2f.png";

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

function Frame1() {
  return (
    <div className="content-stretch flex flex-col font-['Poppins:Regular',sans-serif] gap-[16px] items-start leading-[0] not-italic relative shrink-0 text-[#2e2e2e] tracking-[0.1px] w-[149px]">
      <div className="flex flex-col justify-center relative shrink-0 text-[24px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">{`MRS. Neelam Roy `}</p>
      </div>
      <div className="flex flex-col justify-center min-w-full relative shrink-0 text-[16px] w-[min-content]">
        <p className="leading-[20px]">75 y | Female</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="box-border content-stretch flex gap-[32px] items-center mb-[-28px] relative shrink-0 w-full">
      <Component3DAvatars />
      <Frame1 />
    </div>
  );
}

function Group8() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white border border-[rgba(116,116,116,0.5)] border-solid h-[48px] ml-0 mt-0 rounded-[100px] w-[102px]" />
      <div className="[grid-area:1_/_1] flex flex-col font-['Poppins:Medium',sans-serif] justify-center ml-[14px] mt-[24px] not-italic relative text-[#49454f] text-[14px] text-nowrap tracking-[0.1px] translate-y-[-50%]">
        <p className="leading-[20px] whitespace-pre">{`Edit Profile `}</p>
      </div>
    </div>
  );
}

function Frame3() {
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
        <p className="leading-[20px] whitespace-pre">{`View More `}</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="box-border content-stretch flex gap-[5px] h-[45px] items-center justify-end mb-[-28px] relative shrink-0 w-full">
      <Frame3 />
      <Group10 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="box-border content-stretch flex flex-col h-[183px] items-start pb-[52px] pt-[24px] px-[24px] relative shrink-0 w-[475px]">
      <Frame2 />
      <Frame4 />
    </div>
  );
}

function ShapeSet() {
  return <div className="[grid-area:1_/_1] bg-gradient-to-b from-[#f7fbff] from-[49.038%] h-[59px] ml-0 mt-0 overflow-clip rounded-[16px] to-[rgba(211,224,244,0.4)] w-[126px]" data-name="Shape Set" />;
}

function Group6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white border border-[#757575] border-solid h-[59px] ml-[2px] mt-px rounded-[16px] w-[126px]" />
      <div className="[grid-area:1_/_1] flex flex-col font-['Roboto:Light',sans-serif] font-light justify-center leading-[0] ml-[63.25px] mt-[18px] relative text-[16px] text-black text-center tracking-[0.5px] translate-x-[-50%] translate-y-[-50%] w-[94.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px] whitespace-pre-wrap">{`Heart Rate  `}</p>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] ml-[62.67px] mt-[39px] relative text-[16px] text-black text-center tracking-[0.5px] translate-x-[-50%] translate-y-[-50%] w-[60.667px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">70bpm</p>
      </div>
      <ShapeSet />
    </div>
  );
}

function ShapeSet1() {
  return <div className="[grid-area:1_/_1] bg-gradient-to-b from-[#f7fbff] from-[49.038%] h-[57px] ml-0 mt-px overflow-clip rounded-[16px] to-[rgba(211,224,244,0.12)] w-[108px]" data-name="Shape Set" />;
}

function Group5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white border border-[#757575] border-solid h-[59px] ml-px mt-0 rounded-[16px] w-[108px]" />
      <div className="[grid-area:1_/_1] flex flex-col font-['Roboto:Light',sans-serif] font-light justify-center leading-[0] ml-[53.5px] mt-[17px] relative text-[16px] text-black text-center text-nowrap tracking-[0.5px] translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px] whitespace-pre">{`BP `}</p>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] ml-[53.5px] mt-[38px] relative text-[16px] text-black text-center text-nowrap tracking-[0.5px] translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px] whitespace-pre">120/70</p>
      </div>
      <ShapeSet1 />
    </div>
  );
}

function ShapeSet2() {
  return <div className="[grid-area:1_/_1] bg-gradient-to-b from-[#f7fbff] from-[49.038%] h-[59px] ml-0 mt-0 overflow-clip rounded-[16px] to-[rgba(211,224,244,0.4)] w-[267px]" data-name="Shape Set" />;
}

function Group7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white border border-[#757575] border-solid h-[59px] ml-0 mt-0 rounded-[16px] w-[267px]" />
      <div className="[grid-area:1_/_1] flex flex-col font-['Roboto:Light',sans-serif] font-light justify-center leading-[0] ml-[133.5px] mt-[18px] relative text-[16px] text-black text-center tracking-[0.5px] translate-x-[-50%] translate-y-[-50%] w-[267px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Last Reviewed</p>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] ml-[130.18px] mt-[38px] relative text-[16px] text-black text-center tracking-[0.5px] translate-x-[-50%] translate-y-[-50%] w-[153.239px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">14/10/25</p>
      </div>
      <ShapeSet2 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-end size-full">
        <div className="box-border content-stretch flex gap-[12px] items-end leading-[0] p-[16px] relative w-full">
          <Group6 />
          <Group5 />
          <Group7 />
        </div>
      </div>
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

function Frame5() {
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

function Frame6() {
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

function Frame8() {
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

function Group() {
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
      <Group />
    </div>
  );
}

function Frame7() {
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

function Group1() {
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
      <Group1 />
    </div>
  );
}

function Frame9() {
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

function Frame10() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[12px] items-start p-[16px] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.19)] shrink-0 w-[544px]">
      <Frame5 />
      <Frame6 />
      <Frame8 />
      <Frame7 />
      <Frame9 />
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] flex flex-col font-['Poppins:Regular',sans-serif] h-[33.38px] justify-center leading-[0] ml-0 mt-[16.69px] not-italic relative text-[20px] text-black tracking-[0.1px] translate-y-[-50%] w-[234px]">
        <p className="leading-[20px]">{`Ongoing Medications : `}</p>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] flex flex-col font-['Poppins:Regular',sans-serif] h-[47px] justify-center leading-[0] ml-0 mt-[23.5px] not-italic relative text-[#757575] text-[16px] tracking-[0.1px] translate-y-[-50%] w-[231px]">
        <p className="leading-[20px] whitespace-pre-wrap">{`💊  Pain Relief: Tramadol`}</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[12px] h-[252px] items-start leading-[0] p-[16px] relative rounded-tl-[15px] rounded-tr-[15px] shadow-[0px_4px_4px_0px_rgba(116,116,116,0.19)] shrink-0 w-[256px]">
      <Group3 />
      <Group4 />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center min-w-full not-italic relative shrink-0 text-[#757575] text-[16px] tracking-[0.1px] w-[min-content]">
        <p className="leading-[20px] whitespace-pre-wrap">{`💧  Stone Expulsion Therapy: Alpha-blocker`}</p>
      </div>
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center min-w-full not-italic relative shrink-0 text-[#757575] text-[16px] tracking-[0.1px] w-[min-content]">
        <p className="leading-[20px]">🧪 Preventing Stone Formation: Hydrochlorothiazide</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-center justify-center p-[16px] relative shrink-0">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121314] text-[20px] text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">{`Ongoing Treatment: `}</p>
      </div>
    </div>
  );
}

function Group11() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] border border-[#757575] border-solid h-[56px] ml-0 mt-0 rounded-[16px] w-[110px]" />
      <div className="[grid-area:1_/_1] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] ml-[55px] mt-[33px] not-italic relative text-[14px] text-black text-center text-nowrap tracking-[0.1px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[20px] whitespace-pre">{`Kidney Stones `}</p>
      </div>
    </div>
  );
}

function Group12() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] border border-[#757575] border-solid h-[56px] ml-0 mt-0 rounded-[16px] w-[110px]" />
      <div className="[grid-area:1_/_1] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] ml-[54.5px] mt-[33px] not-italic relative text-[14px] text-black text-center text-nowrap tracking-[0.1px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[20px] whitespace-pre">{`High BP `}</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center leading-[0] p-[16px] relative w-full">
          <Group11 />
          <Group12 />
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-center justify-center p-[16px] relative shrink-0">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#757575] text-[16px] tracking-[0.1px] w-[234px]">
        <p className="leading-[20px]">{`Check up in 3 months , And Diet Management `}</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[4px] h-[252px] items-start p-[8px] relative rounded-tl-[15px] rounded-tr-[15px] shadow-[0px_4px_4px_0px_rgba(116,116,116,0.19)] shrink-0 w-[264px]">
      <Frame12 />
      <Frame14 />
      <Frame13 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[23px] items-center relative shrink-0 w-full">
      <Frame />
      <Frame17 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[16px] top-[66px] w-[554px]">
      <Frame16 />
      <Frame11 />
      <Frame10 />
      <Frame15 />
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
    <div className="absolute content-stretch flex items-center justify-center left-[18px] size-[40px] top-[23px]" data-name="State-layer">
      <Icon />
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

export default function PatientsProfile() {
  return (
    <div className="bg-white relative size-full" data-name="patients profile">
      <div className="absolute left-[54px] size-[100px] top-[139px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Rectangle 854"></g>
        </svg>
      </div>
      <Frame18 />
      <StateLayer />
      <NavBar />
    </div>
  );
}