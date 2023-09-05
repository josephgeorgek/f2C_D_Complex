import React from "react";

import { Text } from "components";

type ApplyCardTwoRadioProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "optiontext"
> &
  Partial<{ optiontext: string }>;

const ApplyCardTwoRadio: React.FC<ApplyCardTwoRadioProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gradient2  flex flex-col h-6 items-center justify-start p-2 rounded-[50%] w-6">
          <div className="bg-white-A700 h-2 rounded-[50%] shadow-bs3 w-2"></div>
        </div>
        <Text
          className="text-base text-blue_gray-800"
          size="txtOpenSansRegular16Bluegray800"
        >
          {props?.optiontext}
        </Text>
      </div>
    </>
  );
};

ApplyCardTwoRadio.defaultProps = { optiontext: "No" };

export default ApplyCardTwoRadio;
