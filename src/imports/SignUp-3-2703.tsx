import svgPaths from "./svg-8q0dtkg878";
import imgEllipse1122 from "figma:asset/95cdd3e1f4b98d8c0f4dc231ad657c15d7224f24.png";

function StateLayer() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] isolate items-center justify-center px-[16px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[24px] text-nowrap text-right text-white tracking-[0.1px] z-[1]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px] whitespace-pre">{`Sign Up  `}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BuildingBlocksButtonGroupConnectedSegmentsSmall() {
  return (
    <div className="absolute bg-[#48a2e8] content-stretch flex flex-col gap-[2px] h-[53px] items-center justify-center left-[193px] min-w-[48px] overflow-clip rounded-[8px] top-[796px] w-[194px]" data-name="Building Blocks/Button group/Connected segments/Small">
      <StateLayer />
    </div>
  );
}

function LabelTextContainer() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[31px]" data-name="Label text container">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#4e8bbc] text-[24px] text-nowrap tracking-[0.4px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        &nbsp;
      </p>
    </div>
  );
}

function InputTextContainer() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Input text container">
      <div className="basis-0 flex flex-col font-['Poppins:Medium',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#121314] text-[24px] tracking-[0.5px]">
        <p className="leading-[24px]">{`Email `}</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
      <LabelTextContainer />
      <InputTextContainer />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p3219cb70} fill="var(--fill-0, #121314)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <Icon />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
      <StateLayer1 />
    </div>
  );
}

function TrailingIcon() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Trailing icon">
      <Content1 />
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start pl-[16px] pr-0 py-[4px] relative size-full">
          <Content />
          <TrailingIcon />
        </div>
      </div>
    </div>
  );
}

function TextField() {
  return (
    <div className="basis-0 bg-[#e6e0e9] content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
      <StateLayer2 />
    </div>
  );
}

function TextField1() {
  return (
    <div className="content-stretch flex flex-col h-[55px] items-start relative rounded-tl-[15px] rounded-tr-[15px] shrink-0 w-full" data-name="Text field">
      <div aria-hidden="true" className="absolute border border-[rgba(116,116,116,0.5)] border-solid inset-[-0.5px] pointer-events-none rounded-tl-[15.5px] rounded-tr-[15.5px]" />
      <TextField />
      <div className="h-0 relative shrink-0 w-full" data-name="Active indicator">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(73, 69, 79, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 522 1">
            <line id="Active indicator" stroke="var(--stroke-0, #49454F)" x2="522" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function InputTextContainer1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Input text container">
      <div className="basis-0 flex flex-col font-['Poppins:Medium',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#121314] text-[24px] tracking-[0.5px]">
        <p className="leading-[24px]">{`Password `}</p>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
      <InputTextContainer1 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <rect fill="white" height="24" width="24" />
          <path d={svgPaths.p3219cb70} fill="var(--fill-0, #121314)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer3() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <Icon1 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
      <StateLayer3 />
    </div>
  );
}

function TrailingIcon1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Trailing icon">
      <Content3 />
    </div>
  );
}

function StateLayer4() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start pl-[16px] pr-0 py-[4px] relative size-full">
          <Content2 />
          <TrailingIcon1 />
        </div>
      </div>
    </div>
  );
}

function TextField2() {
  return (
    <div className="basis-0 bg-[#e6e0e9] content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
      <StateLayer4 />
    </div>
  );
}

function SupportingText() {
  return <div className="absolute bottom-[-21px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-[312px]" data-name="Supporting text" />;
}

function TextField3() {
  return (
    <div className="content-stretch flex flex-col h-[55px] items-start relative rounded-tl-[15px] rounded-tr-[15px] shrink-0 w-full" data-name="Text field">
      <div aria-hidden="true" className="absolute border border-[rgba(116,116,116,0.5)] border-solid inset-[-0.5px] pointer-events-none rounded-tl-[15.5px] rounded-tr-[15.5px]" />
      <TextField2 />
      <div className="h-0 relative shrink-0 w-full" data-name="Active indicator">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(73, 69, 79, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 522 1">
            <line id="Active indicator" stroke="var(--stroke-0, #49454F)" x2="522" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <SupportingText />
    </div>
  );
}

function LabelTextContainer1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[31px]" data-name="Label text container">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#0d64ae] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        &nbsp;
      </p>
    </div>
  );
}

function InputTextContainer2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Input text container">
      <div className="basis-0 flex flex-col font-['Poppins:Medium',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#121314] text-[24px] tracking-[0.5px]">
        <p className="leading-[24px]">{`Confirm Password `}</p>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
      <LabelTextContainer1 />
      <InputTextContainer2 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <rect fill="white" height="24" width="24" />
          <path d={svgPaths.p3219cb70} fill="var(--fill-0, #121314)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer5() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <Icon2 />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
      <StateLayer5 />
    </div>
  );
}

function TrailingIcon2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Trailing icon">
      <Content5 />
    </div>
  );
}

function StateLayer6() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start pl-[16px] pr-0 py-[4px] relative size-full">
          <Content4 />
          <TrailingIcon2 />
        </div>
      </div>
    </div>
  );
}

function TextField4() {
  return (
    <div className="basis-0 bg-[#e6e0e9] content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
      <StateLayer6 />
    </div>
  );
}

function TextField5() {
  return (
    <div className="content-stretch flex flex-col h-[55px] items-start relative rounded-tl-[15px] rounded-tr-[15px] shrink-0 w-full" data-name="Text field">
      <div aria-hidden="true" className="absolute border border-[rgba(116,116,116,0.5)] border-solid inset-[-0.5px] pointer-events-none rounded-tl-[15.5px] rounded-tr-[15.5px]" />
      <TextField4 />
      <div className="h-0 relative shrink-0 w-full" data-name="Active indicator">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(73, 69, 79, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 522 1">
            <line id="Active indicator" stroke="var(--stroke-0, #49454F)" x2="522" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
          <TextField1 />
          <TextField3 />
          <TextField5 />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[32px] items-start left-0 p-[10px] top-[476px] w-[574px]">
      <Frame />
    </div>
  );
}

export default function SignUp() {
  return (
    <div className="bg-white relative size-full" data-name="Sign up">
      <div className="absolute left-[187px] size-[200px] top-[227px]">
        <img alt="" className="block max-w-none size-full" height="200" src={imgEllipse1122} width="200" />
      </div>
      <div className="absolute left-[calc(50%+82px)] size-[28px] top-[1023px]" data-name="image 276" />
      <BuildingBlocksButtonGroupConnectedSegmentsSmall />
      <div className="absolute flex h-[21.183px] items-center justify-center left-[287.03px] top-[951.59px] translate-x-[-50%] translate-y-[-50%] w-[276.064px]" style={{ "--transform-inner-width": "275.96875", "--transform-inner-height": "20" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.246deg]">
          <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative text-[0px] text-black text-center tracking-[0.1px] w-[275.98px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="font-['Poppins:Medium',sans-serif] leading-[20px] not-italic text-[24px]">
              B<span className="text-[#121314]">ack To</span> <span className="text-[#2472ee]">Login Page</span>{" "}
            </p>
          </div>
        </div>
      </div>
      <Frame1 />
    </div>
  );
}