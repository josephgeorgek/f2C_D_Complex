import React from "react";

import { Img, Text } from "components";

type LandingCardHolderOneSecondaryProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "username" | "dropdownicon"
> &
  Partial<{ username: string; dropdownicon: string }>;

const LandingCardHolderOneSecondary: React.FC<
  LandingCardHolderOneSecondaryProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700_7f flex flex-row items-start justify-start p-2 rounded-[20px] shadow-bs1 w-auto md:w-full">
          <div className="flex flex-col items-start justify-start px-2 w-auto">
            {!!props?.username ? (
              <Text
                className="text-base text-blue_gray-800 text-right w-auto"
                size="txtOpenSansSemiBold16Bluegray800"
              >
                {props?.username}
              </Text>
            ) : null}
          </div>
          {!!props?.dropdownicon ? (
            <Img
              className="h-6 w-6"
              alt="arrowdown"
              src="props?.dropdownicon"
            />
          ) : null}
        </div>
      </div>
    </>
  );
};

LandingCardHolderOneSecondary.defaultProps = {};

export default LandingCardHolderOneSecondary;
