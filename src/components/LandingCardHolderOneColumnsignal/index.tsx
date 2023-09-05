import React from "react";

import { Img } from "components";

type LandingCardHolderOneColumnsignalProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const LandingCardHolderOneColumnsignal: React.FC<
  LandingCardHolderOneColumnsignalProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gradient5  flex flex-row items-start justify-start pt-2 px-2 w-full">
          <Img
            className="h-3 ml-[5px] mt-2"
            src="images/img_signal.svg"
            alt="signal"
          />
          <Img
            className="h-[34px] ml-[5px]"
            src="images/img_tab.svg"
            alt="tab"
          />
          <Img
            className="h-3 ml-2 mt-[11px] w-3"
            src="images/img_plus.svg"
            alt="plus"
          />
        </div>
        <Img className="h-[37px]" src="images/img_toolbar.svg" alt="toolbar" />
      </div>
    </>
  );
};

LandingCardHolderOneColumnsignal.defaultProps = {};

export default LandingCardHolderOneColumnsignal;
