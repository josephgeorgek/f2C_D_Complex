import React from "react";

import { Img, Text } from "components";

type LandingCardHolderThreeBccwebfrontProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "username"
> &
  Partial<{ username: string }>;

const LandingCardHolderThreeBccwebfront: React.FC<
  LandingCardHolderThreeBccwebfrontProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-[170px] relative rounded-[10px] w-full">
          <Img
            className="absolute h-[170px] inset-[0] justify-center m-auto object-cover rounded-[10px] w-full"
            src="images/img_bdcwithnewlogo.png"
            alt="bdcwithnewlogo"
          />
          <Text
            className="absolute bottom-[6%] left-[6%] text-shadow-ts text-sm text-white-A700 uppercase"
            size="txtIBMPlexMonoRegular14"
          >
            {props?.username}
          </Text>
        </div>
      </div>
    </>
  );
};

LandingCardHolderThreeBccwebfront.defaultProps = { username: "Patrick Tan" };

export default LandingCardHolderThreeBccwebfront;
