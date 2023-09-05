import React from "react";

import { Button } from "components";

type TSIFooterbuttonProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "recallaction" | "amendaction"
> &
  Partial<{ recallaction: string; amendaction: string }>;

const TSIFooterbutton: React.FC<TSIFooterbuttonProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[17px] items-start justify-start w-full">
          <Button
            className="cursor-pointer flex-1 font-opensans font-semibold text-base text-center w-full"
            shape="round"
            color="blue_gray_600"
            size="sm"
            variant="outline"
          >
            {props?.recallaction}
          </Button>
          <Button
            className="!text-white-A700 cursor-pointer flex-1 font-opensans font-semibold text-base text-center w-full"
            shape="round"
            size="sm"
            variant="gradient"
            color="blue_gray_600_02_blue_300"
          >
            {props?.amendaction}
          </Button>
        </div>
      </div>
    </>
  );
};

TSIFooterbutton.defaultProps = { recallaction: "Recall", amendaction: "Amend" };

export default TSIFooterbutton;
