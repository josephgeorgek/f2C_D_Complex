import React from "react";

import { Img, Line, Text } from "components";

type LandingCardHolderOneColumnFiveProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "usergoodmorning"
  | "userprice"
  | "usertime"
  | "language"
  | "userlanguage"
  | "usermailbox"
  | "userlogout"
  | "useraccounts"
  | "usertransactions"
  | "userfinancialmanagement"
  | "languageOne"
  | "tools"
  | "administration"
> &
  Partial<{
    usergoodmorning: JSX.Element | string;
    userprice: string;
    usertime: string;
    language: string;
    userlanguage: string;
    usermailbox: string;
    userlogout: string;
    useraccounts: string;
    usertransactions: string;
    userfinancialmanagement: string;
    languageOne: string;
    tools: string;
    administration: string;
  }>;

const LandingCardHolderOneColumnFive: React.FC<
  LandingCardHolderOneColumnFiveProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col relative w-full">
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[136px] items-center justify-start mx-auto pb-[53px] w-full"
              style={{ backgroundImage: "url('images/img_group200.svg')" }}
            >
              <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                <Line className="bg-gradient3  h-1.5 w-full" />
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[67%] md:w-full">
                  <div className="flex sm:flex-col flex-row gap-[21px] items-center justify-start md:mt-0 mt-[3px] w-auto sm:w-full">
                    <Line className="bg-gray-200 sm:h-0.5 h-11 w-0.5 sm:w-full" />
                    <div className="flex flex-col gap-0.5 items-start justify-start w-auto sm:w-full">
                      {props?.usergoodmorning}
                      <Text
                        className="text-blue_gray-800 text-xs w-auto"
                        size="txtOpenSansRegular12Bluegray800"
                      >
                        {props?.userprice}
                      </Text>
                      <Text
                        className="text-[10px] text-blue_gray-500_01 w-auto"
                        size="txtOpenSansRegular10"
                      >
                        {props?.usertime}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-between w-[21%] md:w-full">
                    <div className="flex flex-row gap-[7px] items-start justify-between w-[42%]">
                      <Text
                        className="text-blue_gray-800 text-xs"
                        size="txtOpenSansSemiBold12Bluegray800"
                      >
                        {props?.language}
                      </Text>
                      <Img
                        className="h-[13px] mt-[3px]"
                        src="images/img_line.svg"
                        alt="line_One"
                      />
                      <Text
                        className="text-light_blue-800 text-xs"
                        size="txtNotoSansSCMedium12"
                      >
                        {props?.userlanguage}
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-1 w-[19%]">
                      <Img
                        className="h-4"
                        src="images/img_mail.svg"
                        alt="mail"
                      />
                      <Text
                        className="mt-[3px] text-[10px] text-blue_gray-500_01 text-center"
                        size="txtOpenSansRegular10"
                      >
                        {props?.usermailbox}
                      </Text>
                    </div>
                    <div className="flex flex-col items-end justify-start mt-[3px] w-[17%]">
                      <Img
                        className="h-[18px] w-[18px]"
                        src="images/img_settings.svg"
                        alt="settings"
                      />
                      <Text
                        className="mt-[3px] text-[10px] text-blue_gray-500_01 text-center"
                        size="txtOpenSansRegular10"
                      >
                        {props?.userlogout}
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient4  border border-gray-300_5f border-solid flex flex-col items-center justify-start mt-[-26px] mx-auto p-[15px] rounded-[5px] shadow-bs2 w-[67%] z-[1]">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[90%] md:w-full">
                <Img
                  className="h-[21px]"
                  src="images/img_home.svg"
                  alt="home"
                />
                <Text
                  className="md:ml-[0] ml-[47px] md:mt-0 mt-0.5 text-blue_gray-800 text-sm"
                  size="txtOpenSansSemiBold14"
                >
                  {props?.useraccounts}
                </Text>
                <Text
                  className="ml-10 md:ml-[0] text-blue_gray-800 text-sm"
                  size="txtOpenSansSemiBold14"
                >
                  {props?.usertransactions}
                </Text>
                <Text
                  className="md:ml-[0] ml-[47px] md:mt-0 mt-[3px] text-blue_gray-800 text-sm"
                  size="txtOpenSansSemiBold14"
                >
                  {props?.userfinancialmanagement}
                </Text>
                <Text
                  className="md:ml-[0] ml-[45px] text-blue_gray-800 text-sm"
                  size="txtOpenSansSemiBold14"
                >
                  {props?.languageOne}
                </Text>
                <Text
                  className="md:ml-[0] ml-[49px] text-blue_gray-800 text-sm"
                  size="txtOpenSansSemiBold14"
                >
                  {props?.tools}
                </Text>
                <Text
                  className="md:ml-[0] ml-[47px] text-blue_gray-800 text-sm"
                  size="txtOpenSansSemiBold14"
                >
                  {props?.administration}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

LandingCardHolderOneColumnFive.defaultProps = {
  usergoodmorning: (
    <Text
      className="text-blue_gray-800 text-xs w-auto"
      size="txtOpenSansRegular12Bluegray800"
    >
      <span className="text-blue_gray-800 font-opensans text-left font-normal">
        Good morning,{" "}
      </span>
      <span className="text-blue_gray-800 font-opensans text-left font-bold">
        PATRICK TAN
      </span>
    </Text>
  ),
  userprice: "ESOLUTION ALPHA PTE LTD",
  usertime: "Last Login: 17 Oct 2021 10:21 AM",
  language: "English",
  userlanguage: "中文",
  usermailbox: "Mailbox",
  userlogout: "Logout",
  useraccounts: "Accounts",
  usertransactions: "Transactions",
  userfinancialmanagement: "Financial Management",
  languageOne: "Trade Finance ",
  tools: "Tools",
  administration: "Administration",
};

export default LandingCardHolderOneColumnFive;
