import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";
import ApplyCardHeader from "components/ApplyCardHeader";
import ApplyCardTwoRadio from "components/ApplyCardTwoRadio";

const ApplyCardTwoPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100_02 flex flex-col font-opensans items-center justify-start mx-auto pb-[35px] w-full">
        <div className="flex flex-col items-center justify-start w-auto md:w-full">
          <ApplyCardHeader className="flex flex-col items-start justify-start w-auto md:w-full" />
          <div className="flex flex-col items-center justify-start max-w-[1128px] mx-auto md:px-5 w-full">
            <div className="bg-white-A700 flex flex-col md:gap-10 gap-16 items-start justify-start max-w-[1128px] md:px-10 px-20 sm:px-5 py-16 rounded-[12px] shadow-bs5 w-full">
              <List
                className="flex flex-col gap-16 w-3/5"
                orientation="vertical"
              >
                <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-blue_gray-800 text-lg w-auto"
                    size="txtOpenSansSemiBold18"
                  >
                    Entity details
                  </Text>
                  <div className="flex flex-col gap-6 items-start justify-start w-[378px] sm:w-full">
                    <div className="flex flex-col gap-1 items-start justify-start pb-2 w-full">
                      <Text
                        className="text-blue_gray-500_02 text-sm w-full"
                        size="txtOpenSansRegular14Bluegray50002"
                      >
                        Registered name
                      </Text>
                      <Text
                        className="text-base text-blue_gray-800 w-full"
                        size="txtOpenSansSemiBold16Bluegray800"
                      >
                        Gastronomy Pte Ltd
                      </Text>
                    </div>
                    <div className="flex flex-col gap-1 items-start justify-start pb-2 w-full">
                      <Text
                        className="text-blue_gray-500_02 text-sm w-full"
                        size="txtOpenSansRegular14Bluegray50002"
                      >
                        Unique Entity No. (UEN)
                      </Text>
                      <Text
                        className="text-base text-blue_gray-800 w-full"
                        size="txtOpenSansSemiBold16Bluegray800"
                      >
                        2016347449N
                      </Text>
                    </div>
                    <div className="flex flex-col gap-1 items-start justify-start pb-2 w-full">
                      <Text
                        className="text-blue_gray-500_02 text-sm w-full"
                        size="txtOpenSansRegular14Bluegray50002"
                      >
                        Registered address
                      </Text>
                      <Text
                        className="leading-[24.00px] text-base text-blue_gray-800"
                        size="txtOpenSansSemiBold16Bluegray800"
                      >
                        <>
                          35 Bedok North Road #09-39
                          <br />
                          Singapore 674902
                        </>
                      </Text>
                    </div>
                    <div className="flex flex-col gap-1 items-start justify-start pb-2 w-full">
                      <Text
                        className="text-blue_gray-500_02 text-sm w-full"
                        size="txtOpenSansRegular14Bluegray50002"
                      >
                        Mailing address
                      </Text>
                      <Text
                        className="leading-[24.00px] text-base text-blue_gray-800"
                        size="txtOpenSansSemiBold16Bluegray800"
                      >
                        <>
                          35 Bedok North Road #09-39
                          <br />
                          Singapore 674902
                        </>
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-blue_gray-800 text-lg w-auto"
                    size="txtOpenSansSemiBold18"
                  >
                    Business structure
                  </Text>
                  <div className="flex flex-col gap-6 items-start justify-start w-[378px] sm:w-full">
                    <div className="flex flex-col gap-1 items-start justify-start pb-2 w-full">
                      <Text
                        className="text-blue_gray-500_02 text-sm w-full"
                        size="txtOpenSansRegular14Bluegray50002"
                      >
                        Entity type
                      </Text>
                      <Text
                        className="text-base text-blue_gray-800 w-full"
                        size="txtOpenSansSemiBold16Bluegray800"
                      >
                        Private Limited
                      </Text>
                    </div>
                    <div className="flex flex-col gap-1 items-start justify-start pb-2 w-full">
                      <Text
                        className="text-blue_gray-500_02 text-sm w-full"
                        size="txtOpenSansRegular14Bluegray50002"
                      >
                        Primary activity
                      </Text>
                      <Text
                        className="text-base text-blue_gray-800 w-full"
                        size="txtOpenSansSemiBold16Bluegray800"
                      >
                        General Wholesale Trade
                      </Text>
                    </div>
                    <div className="flex flex-col gap-1 items-start justify-start pb-2 w-full">
                      <Text
                        className="text-blue_gray-500_02 text-sm w-full"
                        size="txtOpenSansRegular14Bluegray50002"
                      >
                        Secondary activity
                      </Text>
                      <Text
                        className="text-base text-blue_gray-800 w-full"
                        size="txtOpenSansSemiBold16Bluegray800"
                      >
                        Import Export
                      </Text>
                    </div>
                    <div className="flex flex-col gap-1 items-start justify-start pb-2 w-full">
                      <Text
                        className="text-blue_gray-500_02 text-sm w-full"
                        size="txtOpenSansRegular14Bluegray50002"
                      >
                        Sole Proprietor/Partners/Directors
                      </Text>
                      <Text
                        className="leading-[24.00px] text-base text-blue_gray-800"
                        size="txtOpenSansSemiBold16Bluegray800"
                      >
                        <>
                          Jack Lee
                          <br />
                          Mary Tan
                        </>
                      </Text>
                    </div>
                    <div className="flex flex-col gap-1 items-start justify-start pb-2 w-full">
                      <Text
                        className="text-blue_gray-500_02 text-sm w-full"
                        size="txtOpenSansRegular14Bluegray50002"
                      >
                        Shareholders (if applicable)
                      </Text>
                      <div className="flex sm:flex-col flex-row gap-2 items-start justify-start w-full">
                        <Text
                          className="leading-[24.00px] text-base text-blue_gray-800"
                          size="txtOpenSansSemiBold16Bluegray800"
                        >
                          <>
                            Jack Lee
                            <br />
                            Mary Tan
                          </>
                        </Text>
                        <Text
                          className="flex-1 leading-[24.00px] text-base text-blue_gray-800"
                          size="txtOpenSansSemiBold16Bluegray800"
                        >
                          <>
                            30%
                            <br />
                            70%
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
              <div className="flex md:flex-col flex-row gap-4 items-start justify-start w-auto md:w-full">
                <Text
                  className="text-blue_gray-800 text-lg w-auto"
                  size="txtOpenSansSemiBold18"
                >
                  Business nature
                </Text>
                <List
                  className="flex flex-col gap-10 items-start w-[594px]"
                  orientation="vertical"
                >
                  <div className="flex flex-col gap-4 items-start justify-start my-0 w-[594px] sm:w-full">
                    <div className="flex flex-row gap-1 items-center justify-start w-auto">
                      <Text
                        className="text-blue_gray-600 text-sm w-[198px]"
                        size="txtOpenSansRegular14Bluegray600"
                      >
                        We are a property corporation
                      </Text>
                      <Img
                        className="h-6 w-6"
                        src="images/img_info.svg"
                        alt="info"
                      />
                    </div>
                    <div className="flex flex-row gap-6 items-start justify-start pb-2 w-full">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <div className="border border-gray-300_01 border-solid h-6 rounded-[50%] w-6"></div>
                        <Text
                          className="text-base text-blue_gray-800 w-auto"
                          size="txtOpenSansRegular16Bluegray800"
                        >
                          Yes
                        </Text>
                      </div>
                      <ApplyCardTwoRadio className="flex flex-row gap-2 items-center justify-start w-auto" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start my-0 w-[594px] sm:w-full">
                    <div className="relative w-[566px] sm:w-full">
                      <Text
                        className="leading-[21.00px] m-auto max-w-[566px] md:max-w-full text-blue_gray-600 text-sm"
                        size="txtOpenSansRegular14Bluegray600"
                      >
                        The purpose of the facility applied is for the use of
                        any property corporation or for property-related
                        activities, whether such activities are undertaken by us
                        or our related corporations
                      </Text>
                      <Img
                        className="absolute bottom-[0] h-6 left-[0] w-6"
                        src="images/img_info.svg"
                        alt="info"
                      />
                    </div>
                    <div className="flex flex-row gap-6 items-start justify-start pb-2 w-full">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <div className="border border-gray-300_01 border-solid h-6 rounded-[50%] w-6"></div>
                        <Text
                          className="text-base text-blue_gray-800 w-auto"
                          size="txtOpenSansRegular16Bluegray800"
                        >
                          Yes
                        </Text>
                      </div>
                      <ApplyCardTwoRadio className="flex flex-row gap-2 items-center justify-start w-auto" />
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-auto md:w-full">
            <div className="flex flex-row flex-wrap gap-6 items-center justify-end max-w-[1440px] md:px-10 sm:px-5 px-[156px] py-16 w-full">
              <Button
                className="common-pointer cursor-pointer font-semibold text-base text-center w-[196px]"
                onClick={() => navigate("/applycard")}
                shape="round"
                color="blue_gray_600"
                size="sm"
                variant="outline"
              >
                Back
              </Button>
              <Button
                className="cursor-pointer font-semibold text-base text-center w-[196px]"
                shape="round"
                size="sm"
                variant="gradient"
                color="blue_gray_700_02_blue_gray_600_01"
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplyCardTwoPage;
