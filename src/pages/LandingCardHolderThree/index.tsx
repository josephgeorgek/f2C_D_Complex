import React from "react";

import { Img, Line, List, SelectBox, Text } from "components";
import LandingCardHolderOneColumnFive from "components/LandingCardHolderOneColumnFive";
import LandingCardHolderOneColumnsignal from "components/LandingCardHolderOneColumnsignal";
import LandingCardHolderOneSecondary from "components/LandingCardHolderOneSecondary";
import LandingCardHolderThreeBccwebfront from "components/LandingCardHolderThreeBccwebfront";

const headerdropdownaOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const sortfilterOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const LandingCardHolderThreePage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-100 flex font-opensans h-[900px] justify-end mx-auto relative w-full">
        <div className="md:h-[1469px] h-[1683px] mt-auto mx-auto md:px-5 w-full">
          <div className="md:h-[1469px] h-[1683px] m-auto w-full">
            <div className="absolute sm:h-[1024px] h-[1103px] md:h-[1304px] inset-x-[0] mx-auto top-[0] w-full">
              <div className="absolute bg-white-A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                <div className="bg-gray-50 flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-[1024px] sm:h-auto object-cover md:w-full"
                    src="images/img_background.png"
                    alt="background"
                  />
                </div>
              </div>
              <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto pt-[214px] top-[0] w-full">
                <div className="flex flex-row md:gap-10 items-center justify-between max-w-[1440px] pb-8 pt-[59px] md:px-10 sm:px-5 px-[156px] w-full">
                  <div className="flex flex-col items-center justify-start w-auto">
                    <div className="flex flex-col items-center justify-start w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="text-blue_gray-800 text-xl w-auto"
                            size="txtOpenSansBold20"
                          >
                            Business Credit Card
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <LandingCardHolderOneSecondary className="flex flex-col gap-2 items-start justify-start w-auto" />
                </div>
                <Line className="bg-blue_gray-100 h-px w-full" />
                <div className="flex md:flex-col flex-row md:gap-10 gap-[158px] items-center justify-evenly p-[49px] md:px-10 sm:px-5 w-full">
                  <div className="flex md:flex-1 flex-col gap-10 items-start justify-start mb-1.5 w-auto md:w-full">
                    <div className="flex md:flex-col flex-row gap-4 items-start justify-start max-w-[699px] w-full">
                      <div className="flex flex-col gap-1 items-start justify-start md:pr-10 sm:pr-5 pr-[79px] w-[304px]">
                        <Text
                          className="text-base text-blue_gray-400 w-full"
                          size="txtOpenSansSemiBold16"
                        >
                          Card no.
                        </Text>
                        <div className="flex flex-row gap-2 items-center justify-start w-auto">
                          <Text
                            className="text-blue_gray-800 text-xl w-auto"
                            size="txtOpenSansBold20"
                          >
                            5588 6088 1234 8888
                          </Text>
                          <div className="bg-blue_gray-100_7f flex flex-col items-start justify-start px-2 py-0.5 rounded-lg w-auto">
                            <Text
                              className="text-blue_gray-800 text-sm w-auto"
                              size="txtOpenSansSemiBold14"
                            >
                              Copy
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col gap-1 items-start justify-start md:pr-10 sm:pr-5 pr-[79px] w-full">
                        <Text
                          className="text-base text-blue_gray-400 w-full"
                          size="txtOpenSansSemiBold16"
                        >
                          Expiry date
                        </Text>
                        <div className="flex flex-col items-end justify-start w-full">
                          <Text
                            className="text-blue_gray-800 text-xl w-auto"
                            size="txtOpenSansBold20"
                          >
                            08/25
                          </Text>
                        </div>
                      </div>
                      <div className="flex md:flex-1 flex-col items-center justify-start w-[24%] md:w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <Text
                            className="text-base text-blue_gray-600"
                            size="txtOpenSansSemiBold16Bluegray600"
                          >
                            CVV
                          </Text>
                        </div>
                        <div className="flex flex-row gap-2 items-start justify-start mt-1 md:pr-10 pr-20 sm:pr-5 w-full">
                          <Text
                            className="text-blue_gray-800 text-xl"
                            size="txtOpenSansBold20"
                          >
                            •••
                          </Text>
                          <Text
                            className="bg-blue_gray-100_7f justify-center mb-0.5 px-2 py-0.5 rounded-lg text-blue_gray-800 text-sm w-auto"
                            size="txtOpenSansSemiBold14"
                          >
                            Show
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row gap-4 items-start justify-start max-w-[699px] w-full">
                      <div className="flex flex-col gap-1 items-start justify-start md:pr-10 sm:pr-5 pr-[79px] w-[304px]">
                        <Text
                          className="text-base text-blue_gray-400 w-full"
                          size="txtOpenSansSemiBold16"
                        >
                          Amount due
                        </Text>
                        <div className="flex flex-col items-start justify-start w-auto">
                          <div className="flex flex-row gap-1 items-end justify-start w-auto">
                            <Text
                              className="text-2xl md:text-[22px] text-blue_gray-800 sm:text-xl w-auto"
                              size="txtOpenSansBold24"
                            >
                              <span className="text-blue_gray-800 font-opensans text-left text-xl font-bold">
                                8,000
                              </span>
                              <span className="text-blue_gray-800 font-opensans text-left text-base font-bold">
                                .00
                              </span>
                            </Text>
                            <div className="flex flex-col items-start justify-start w-auto">
                              <Text
                                className="text-blue_gray-400 text-sm uppercase w-auto"
                                size="txtOpenSansBold14"
                              >
                                SGD
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col gap-1 items-start justify-start md:pr-10 sm:pr-5 pr-[79px] w-full">
                        <Text
                          className="text-base text-blue_gray-400 w-full"
                          size="txtOpenSansSemiBold16"
                        >
                          Min. payment
                        </Text>
                        <div className="flex flex-row gap-1 items-end justify-start w-full">
                          <Text
                            className="text-blue_gray-800 text-xl w-auto"
                            size="txtOpenSansBold20"
                          >
                            <span className="text-blue_gray-800 font-opensans text-left font-bold">
                              1,000
                            </span>
                            <span className="text-blue_gray-800 font-opensans text-left text-base font-bold">
                              .00
                            </span>
                          </Text>
                          <div className="flex flex-col items-start justify-start w-auto">
                            <Text
                              className="text-blue_gray-400 text-sm uppercase w-auto"
                              size="txtOpenSansBold14"
                            >
                              SGD
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex md:flex-1 flex-col items-center justify-start w-[24%] md:w-full">
                        <div className="flex flex-col items-start justify-start pr-0.5 pt-0.5 w-full">
                          <Text
                            className="text-base text-blue_gray-600"
                            size="txtOpenSansSemiBold16Bluegray600"
                          >
                            Payment due date
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-start mt-1 w-full">
                          <div className="flex flex-col items-end justify-start w-[120px]">
                            <Text
                              className="text-blue_gray-800 text-xl w-auto"
                              size="txtOpenSansBold20"
                            >
                              25 Aug 2022
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <List
                      className="sm:flex-col flex-row gap-4 grid md:grid-cols-1 grid-cols-2 justify-start max-w-[699px] w-full"
                      orientation="horizontal"
                    >
                      <div className="flex flex-col gap-1 items-start justify-start md:pr-10 sm:pr-5 pr-[79px] w-[304px]">
                        <Text
                          className="text-base text-blue_gray-400 w-full"
                          size="txtOpenSansSemiBold16"
                        >
                          Credit limit
                        </Text>
                        <div className="flex flex-row gap-1 items-end justify-start w-full">
                          <Text
                            className="text-2xl md:text-[22px] text-blue_gray-800 sm:text-xl w-auto"
                            size="txtOpenSansBold24"
                          >
                            <span className="text-blue_gray-800 font-opensans text-left text-xl font-bold">
                              50,000
                            </span>
                            <span className="text-blue_gray-800 font-opensans text-left text-base font-bold">
                              .00
                            </span>
                          </Text>
                          <div className="flex flex-col items-start justify-start w-auto">
                            <Text
                              className="text-blue_gray-400 text-sm uppercase w-auto"
                              size="txtOpenSansBold14"
                            >
                              SGD
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1 items-start justify-start md:pr-10 sm:pr-5 pr-[79px] w-[304px]">
                        <Text
                          className="text-base text-blue_gray-400 w-full"
                          size="txtOpenSansSemiBold16"
                        >
                          Current card spend
                        </Text>
                        <div className="flex flex-row gap-1 items-end justify-start w-full">
                          <Text
                            className="text-2xl md:text-[22px] text-blue_gray-800 sm:text-xl w-auto"
                            size="txtOpenSansBold24"
                          >
                            <span className="text-blue_gray-800 font-opensans text-left text-xl font-bold">
                              10,000
                            </span>
                            <span className="text-blue_gray-800 font-opensans text-left text-base font-bold">
                              .00
                            </span>
                          </Text>
                          <div className="flex flex-col items-start justify-start w-auto">
                            <Text
                              className="text-blue_gray-400 text-sm uppercase w-auto"
                              size="txtOpenSansBold14"
                            >
                              SGD
                            </Text>
                          </div>
                        </div>
                      </div>
                    </List>
                  </div>
                  <LandingCardHolderThreeBccwebfront className="bg-white-A700 flex md:flex-1 flex-col font-ibmplexmono items-center justify-start md:mt-0 my-11 rounded-[10px] shadow-bs4 w-[21%] md:w-full" />
                </div>
              </div>
            </div>
            <div className="absolute bg-white-A700 bottom-[0] flex flex-row inset-x-[0] items-center justify-end mx-auto sm:px-5 px-[34px] rounded-tl-[24px] rounded-tr-[24px] w-full">
              <div className="flex md:flex-col flex-row gap-[11px] items-start justify-start w-[92%]">
                <div className="flex flex-col gap-[39px] items-center justify-start w-[91%] md:w-full">
                  <div className="h-[1361px] md:h-[2570px] sm:h-[3566px] relative w-full">
                    <div className="absolute flex flex-col gap-4 h-max inset-[0] items-center justify-end m-auto max-w-[1128px] pt-10 w-full">
                      <div className="flex flex-col items-start justify-start pr-1.5 py-1.5 w-full">
                        <div className="flex flex-col items-center justify-start w-auto">
                          <Text
                            className="text-blue_gray-800 text-xl w-auto"
                            size="txtOpenSansBold20"
                          >
                            Transaction history
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white-A700 border border-gray-300_01 border-solid flex flex-col items-start justify-start rounded-[12px] w-auto md:w-full">
                        <div className="flex flex-col items-start justify-start max-w-[1128px] p-4 w-full">
                          <div className="flex flex-col items-start justify-start pr-1 py-1 w-full">
                            <SelectBox
                              className="border border-gray-300_01 border-solid font-semibold text-base text-left w-[21%] sm:w-full"
                              placeholderClassName="text-blue_gray-800"
                              indicator={
                                <Img
                                  className="h-6 w-6"
                                  src="images/img_arrowdown.svg"
                                  alt="arrow_down"
                                />
                              }
                              isMulti={false}
                              name="sortfilter"
                              options={sortfilterOptionsList}
                              isSearchable={false}
                              placeholder="Unbilled transactions"
                              shape="round"
                              color="white_A700_b2"
                              size="xs"
                              variant="fill"
                            />
                          </div>
                        </div>
                        <div className="border-b border-gray-300_01 border-solid flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1128px] w-full">
                          <div className="flex flex-col items-center justify-start px-4 py-2 w-auto">
                            <Text
                              className="text-blue_gray-300 text-xs uppercase w-auto"
                              size="txtOpenSansSemiBold12"
                            >
                              Transaction Date
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-col items-start justify-start px-4 py-2 w-full">
                            <Text
                              className="text-blue_gray-300 text-xs uppercase w-auto"
                              size="txtOpenSansSemiBold12"
                            >
                              Description
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-end px-4 py-2 w-auto">
                            <Text
                              className="text-blue_gray-300 text-right text-xs uppercase w-auto"
                              size="txtOpenSansSemiBold12"
                            >
                              Transaction Amount (SGD)
                            </Text>
                          </div>
                        </div>
                        <List
                          className="sm:flex-col flex-row md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start max-w-[1128px] rounded-[12px] w-full"
                          orientation="horizontal"
                        >
                          <div className="flex flex-col h-[1139px] md:h-auto items-start justify-start sm:ml-[0] w-[153px]">
                            <div className="flex flex-col items-start justify-start p-4 w-full">
                              <Text
                                className="text-base text-blue_gray-800 w-auto"
                                size="txtOpenSansSemiBold16Bluegray800"
                              >
                                18 Aug 2022
                              </Text>
                            </div>
                            <Line className="bg-gray-300_01 h-px w-full" />
                            <div className="flex flex-col items-start justify-start p-4 w-full">
                              <Text
                                className="text-base text-blue_gray-800 w-auto"
                                size="txtOpenSansSemiBold16Bluegray800"
                              >
                                18 Aug 2022
                              </Text>
                            </div>
                            <Line className="bg-gray-300_01 h-px w-full" />
                            <div className="flex flex-col items-start justify-start p-4 w-full">
                              <Text
                                className="text-base text-blue_gray-800 w-auto"
                                size="txtOpenSansSemiBold16Bluegray800"
                              >
                                18 Aug 2022
                              </Text>
                            </div>
                            <Line className="bg-gray-300_01 h-px w-full" />
                            <div className="flex flex-col items-start justify-start p-4 w-full">
                              <Text
                                className="text-base text-blue_gray-800 w-auto"
                                size="txtOpenSansSemiBold16Bluegray800"
                              >
                                18 Aug 2022
                              </Text>
                            </div>
                            <Line className="bg-gray-300_01 h-px w-full" />
                            <div className="flex flex-col items-start justify-start p-4 w-full">
                              <Text
                                className="text-base text-blue_gray-800 w-auto"
                                size="txtOpenSansSemiBold16Bluegray800"
                              >
                                17 Aug 2022
                              </Text>
                            </div>
                            <Line className="bg-gray-300_01 h-px w-full" />
                            <div className="flex flex-col items-start justify-start p-4 w-full">
                              <Text
                                className="text-base text-blue_gray-800 w-auto"
                                size="txtOpenSansSemiBold16Bluegray800"
                              >
                                17 Aug 2022
                              </Text>
                            </div>
                            <Line className="bg-gray-300_01 h-px w-full" />
                            <div className="flex flex-col items-start justify-start p-4 w-full">
                              <Text
                                className="text-base text-blue_gray-800 w-auto"
                                size="txtOpenSansSemiBold16Bluegray800"
                              >
                                16 Aug 2022
                              </Text>
                            </div>
                            <Line className="bg-gray-300_01 h-px w-full" />
                            <div className="flex flex-col items-start justify-start p-4 w-full">
                              <Text
                                className="text-base text-blue_gray-800 w-auto"
                                size="txtOpenSansSemiBold16Bluegray800"
                              >
                                16 Aug 2022
                              </Text>
                            </div>
                            <Line className="bg-gray-300_01 h-px w-full" />
                            <div className="flex flex-col items-start justify-start p-4 w-full">
                              <Text
                                className="text-base text-blue_gray-800 w-auto"
                                size="txtOpenSansSemiBold16Bluegray800"
                              >
                                15 Aug 2022
                              </Text>
                            </div>
                            <Line className="bg-gray-300_01 h-px w-full" />
                            <div className="flex flex-col items-start justify-start p-4 w-full">
                              <Text
                                className="text-base text-blue_gray-800 w-auto"
                                size="txtOpenSansSemiBold16Bluegray800"
                              >
                                14 Aug 2022
                              </Text>
                            </div>
                            <Line className="bg-gray-300_01 h-px w-full" />
                            <div className="flex flex-col items-start justify-start p-4 w-full">
                              <Text
                                className="text-base text-blue_gray-800 w-auto"
                                size="txtOpenSansSemiBold16Bluegray800"
                              >
                                14 Aug 2022
                              </Text>
                            </div>
                            <Line className="bg-gray-300_01 h-px w-full" />
                            <div className="flex flex-col items-start justify-start p-4 w-full">
                              <Text
                                className="text-base text-blue_gray-800 w-auto"
                                size="txtOpenSansSemiBold16Bluegray800"
                              >
                                14 Aug 2022
                              </Text>
                            </div>
                            <Line className="bg-gray-300_01 h-px w-full" />
                            <div className="flex flex-col items-start justify-start p-4 w-full">
                              <Text
                                className="text-base text-blue_gray-800 w-auto"
                                size="txtOpenSansSemiBold16Bluegray800"
                              >
                                14 Aug 2022
                              </Text>
                            </div>
                            <Line className="bg-gray-300_01 h-px w-full" />
                            <div className="flex flex-col items-start justify-start p-4 w-full">
                              <Text
                                className="text-base text-blue_gray-800 w-auto"
                                size="txtOpenSansSemiBold16Bluegray800"
                              >
                                14 Aug 2022
                              </Text>
                            </div>
                            <Line className="bg-gray-300_01 h-px w-full" />
                            <div className="flex flex-col items-start justify-start p-4 w-full">
                              <Text
                                className="text-base text-blue_gray-800 w-auto"
                                size="txtOpenSansSemiBold16Bluegray800"
                              >
                                14 Aug 2022
                              </Text>
                            </div>
                            <Line className="bg-gray-300_01 h-px w-full" />
                            <div className="flex flex-col items-start justify-start p-4 w-full">
                              <Text
                                className="text-base text-blue_gray-800 w-auto"
                                size="txtOpenSansSemiBold16Bluegray800"
                              >
                                13 Aug 2022
                              </Text>
                            </div>
                            <Line className="bg-gray-300_01 h-px w-full" />
                            <div className="flex flex-col items-start justify-start p-4 w-full">
                              <Text
                                className="text-base text-blue_gray-800 w-auto"
                                size="txtOpenSansSemiBold16Bluegray800"
                              >
                                13 Aug 2022
                              </Text>
                            </div>
                            <Line className="bg-gray-300_01 h-px w-full" />
                            <div className="flex flex-col items-start justify-start p-4 w-full">
                              <Text
                                className="text-base text-blue_gray-800 w-auto"
                                size="txtOpenSansSemiBold16Bluegray800"
                              >
                                12 Aug 2022
                              </Text>
                            </div>
                            <Line className="bg-gray-300_01 h-px w-full" />
                            <div className="flex flex-col items-start justify-start p-4 w-full">
                              <Text
                                className="text-base text-blue_gray-800 w-auto"
                                size="txtOpenSansSemiBold16Bluegray800"
                              >
                                12 Aug 2022
                              </Text>
                            </div>
                            <Line className="bg-gray-300_01 h-px w-full" />
                            <div className="flex flex-col items-start justify-start p-4 w-full">
                              <Text
                                className="text-base text-blue_gray-800 w-auto"
                                size="txtOpenSansSemiBold16Bluegray800"
                              >
                                12 Aug 2022
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col h-full items-start justify-start sm:ml-[0] w-full">
                            <div className="flex flex-col items-start justify-start p-4 w-full">
                              <Text
                                className="text-base text-blue_gray-800 w-auto"
                                size="txtOpenSansSemiBold16Bluegray800"
                              >
                                CREDIT CARD BILL PAYMENT
                              </Text>
                            </div>
                            <Line className="bg-gray-300_01 h-px w-full" />
                            <div className="flex flex-col items-start justify-start p-4 w-full">
                              <Text
                                className="text-base text-blue_gray-800 w-auto"
                                size="txtOpenSansSemiBold16Bluegray800"
                              >
                                THINKIFIC.COM VAN
                              </Text>
                            </div>
                            <Line className="bg-gray-300_01 h-px w-full" />
                            <div className="flex flex-col items-start justify-start p-4 w-full">
                              <Text
                                className="text-base text-blue_gray-800 w-auto"
                                size="txtOpenSansSemiBold16Bluegray800"
                              >
                                CASH REBATE
                              </Text>
                            </div>
                            <Line className="bg-gray-300_01 h-px w-full" />
                            <div className="flex flex-col items-start justify-start p-4 w-full">
                              <Text
                                className="text-base text-blue_gray-800 w-auto"
                                size="txtOpenSansSemiBold16Bluegray800"
                              >
                                CASH REBATE
                              </Text>
                            </div>
                            <Line className="bg-gray-300_01 h-px w-full" />
                            <div className="flex flex-col items-start justify-start p-4 w-full">
                              <Text
                                className="text-base text-blue_gray-800 w-auto"
                                size="txtOpenSansSemiBold16Bluegray800"
                              >
                                ALIBABA.COM Sin
                              </Text>
                            </div>
                            <Line className="bg-gray-300_01 h-px w-full" />
                            <div className="flex flex-col items-start justify-start p-4 w-full">
                              <Text
                                className="text-base text-blue_gray-800 w-auto"
                                size="txtOpenSansSemiBold16Bluegray800"
                              >
                                CREDIT CARD BILL PAYMENT
                              </Text>
                            </div>
                            <Line className="bg-gray-300_01 h-px w-full" />
                            <div className="flex flex-col items-start justify-start p-4 w-full">
                              <Text
                                className="text-base text-blue_gray-800 w-auto"
                                size="txtOpenSansSemiBold16Bluegray800"
                              >
                                THINKIFIC.COM VAN
                              </Text>
                            </div>
                            <Line className="bg-gray-300_01 h-px w-full" />
                            <div className="flex flex-col items-start justify-start p-4 w-full">
                              <Text
                                className="text-base text-blue_gray-800 w-auto"
                                size="txtOpenSansSemiBold16Bluegray800"
                              >
                                CASH REBATE
                              </Text>
                            </div>
                            <Line className="bg-gray-300_01 h-px w-full" />
                            <div className="flex flex-col items-start justify-start p-4 w-full">
                              <Text
                                className="text-base text-blue_gray-800 w-auto"
                                size="txtOpenSansSemiBold16Bluegray800"
                              >
                                CASH REBATE
                              </Text>
                            </div>
                            <Line className="bg-gray-300_01 h-px w-full" />
                            <div className="flex flex-col items-start justify-start p-4 w-full">
                              <Text
                                className="text-base text-blue_gray-800 w-auto"
                                size="txtOpenSansSemiBold16Bluegray800"
                              >
                                ALIBABA.COM Sin
                              </Text>
                            </div>
                            <Line className="bg-gray-300_01 h-px w-full" />
                            <div className="flex flex-col items-start justify-start p-4 w-full">
                              <Text
                                className="text-base text-blue_gray-800 w-auto"
                                size="txtOpenSansSemiBold16Bluegray800"
                              >
                                CREDIT CARD BILL PAYMENT
                              </Text>
                            </div>
                            <Line className="bg-gray-300_01 h-px w-full" />
                            <div className="flex flex-col items-start justify-start p-4 w-full">
                              <Text
                                className="text-base text-blue_gray-800 w-auto"
                                size="txtOpenSansSemiBold16Bluegray800"
                              >
                                THINKIFIC.COM VAN
                              </Text>
                            </div>
                            <Line className="bg-gray-300_01 h-px w-full" />
                            <div className="flex flex-col items-start justify-start p-4 w-full">
                              <Text
                                className="text-base text-blue_gray-800 w-auto"
                                size="txtOpenSansSemiBold16Bluegray800"
                              >
                                CASH REBATE
                              </Text>
                            </div>
                            <Line className="bg-gray-300_01 h-px w-full" />
                            <div className="flex flex-col items-start justify-start p-4 w-full">
                              <Text
                                className="text-base text-blue_gray-800 w-auto"
                                size="txtOpenSansSemiBold16Bluegray800"
                              >
                                CASH REBATE
                              </Text>
                            </div>
                            <Line className="bg-gray-300_01 h-px w-full" />
                            <div className="flex flex-col items-start justify-start p-4 w-full">
                              <Text
                                className="text-base text-blue_gray-800 w-auto"
                                size="txtOpenSansSemiBold16Bluegray800"
                              >
                                ALIBABA.COM Sin
                              </Text>
                            </div>
                            <Line className="bg-gray-300_01 h-px w-full" />
                            <div className="flex flex-col items-start justify-start p-4 w-full">
                              <Text
                                className="text-base text-blue_gray-800 w-auto"
                                size="txtOpenSansSemiBold16Bluegray800"
                              >
                                CREDIT CARD BILL PAYMENT
                              </Text>
                            </div>
                            <Line className="bg-gray-300_01 h-px w-full" />
                            <div className="flex flex-col items-start justify-start p-4 w-full">
                              <Text
                                className="text-base text-blue_gray-800 w-auto"
                                size="txtOpenSansSemiBold16Bluegray800"
                              >
                                THINKIFIC.COM VAN
                              </Text>
                            </div>
                            <Line className="bg-gray-300_01 h-px w-full" />
                            <div className="flex flex-col items-start justify-start p-4 w-full">
                              <Text
                                className="text-base text-blue_gray-800 w-auto"
                                size="txtOpenSansSemiBold16Bluegray800"
                              >
                                CASH REBATE
                              </Text>
                            </div>
                            <Line className="bg-gray-300_01 h-px w-full" />
                            <div className="flex flex-col items-start justify-start p-4 w-full">
                              <Text
                                className="text-base text-blue_gray-800 w-auto"
                                size="txtOpenSansSemiBold16Bluegray800"
                              >
                                CASH REBATE
                              </Text>
                            </div>
                            <Line className="bg-gray-300_01 h-px w-full" />
                            <div className="flex flex-col items-start justify-start p-4 w-full">
                              <Text
                                className="text-base text-blue_gray-800 w-auto"
                                size="txtOpenSansSemiBold16Bluegray800"
                              >
                                ALIBABA.COM Sin
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col h-[1139px] md:h-auto items-end justify-start sm:ml-[0]">
                            <div className="flex flex-col items-start justify-end pl-2 pr-4 py-4 w-auto">
                              <Text
                                className="text-base text-right text-teal-400 w-auto"
                                size="txtOpenSansBold16"
                              >
                                10,000.00
                              </Text>
                            </div>
                            <div className="flex flex-col items-start justify-start w-full">
                              <Line className="bg-gray-300_01 h-px w-full" />
                              <div className="flex flex-col items-start justify-end pl-2 pr-4 py-4 w-[504px] sm:w-full">
                                <Text
                                  className="text-base text-blue_gray-900 text-right w-auto"
                                  size="txtOpenSansBold16Bluegray900"
                                >
                                  - 500.00
                                </Text>
                              </div>
                              <Line className="bg-gray-300_01 h-px w-full" />
                              <div className="flex flex-col items-start justify-end pl-2 pr-4 py-4 w-[504px] sm:w-full">
                                <Text
                                  className="text-base text-right text-teal-400 w-auto"
                                  size="txtOpenSansBold16"
                                >
                                  50.00
                                </Text>
                              </div>
                              <Line className="bg-gray-300_01 h-px w-full" />
                              <div className="flex flex-col items-start justify-end pl-2 pr-4 py-4 w-[504px] sm:w-full">
                                <Text
                                  className="text-base text-right text-teal-400 w-auto"
                                  size="txtOpenSansBold16"
                                >
                                  50.00
                                </Text>
                              </div>
                              <Line className="bg-gray-300_01 h-px w-full" />
                              <div className="flex flex-col items-start justify-end pl-2 pr-4 py-4 w-[504px] sm:w-full">
                                <Text
                                  className="text-base text-blue_gray-900 text-right w-auto"
                                  size="txtOpenSansBold16Bluegray900"
                                >
                                  - 300.00
                                </Text>
                              </div>
                              <Line className="bg-gray-300_01 h-px w-full" />
                              <div className="flex flex-col items-start justify-end md:ml-[0] ml-[406px] pl-2 pr-4 py-4 w-auto">
                                <Text
                                  className="text-base text-right text-teal-400 w-auto"
                                  size="txtOpenSansBold16"
                                >
                                  10,000.00
                                </Text>
                              </div>
                              <Line className="bg-gray-300_01 h-px w-full" />
                              <div className="flex flex-col items-start justify-end pl-2 pr-4 py-4 w-[504px] sm:w-full">
                                <Text
                                  className="text-base text-blue_gray-900 text-right w-auto"
                                  size="txtOpenSansBold16Bluegray900"
                                >
                                  - 500.00
                                </Text>
                              </div>
                              <Line className="bg-gray-300_01 h-px w-full" />
                              <div className="flex flex-col items-start justify-end pl-2 pr-4 py-4 w-[504px] sm:w-full">
                                <Text
                                  className="text-base text-right text-teal-400 w-auto"
                                  size="txtOpenSansBold16"
                                >
                                  50.00
                                </Text>
                              </div>
                              <Line className="bg-gray-300_01 h-px w-full" />
                              <div className="flex flex-col items-start justify-end pl-2 pr-4 py-4 w-[504px] sm:w-full">
                                <Text
                                  className="text-base text-right text-teal-400 w-auto"
                                  size="txtOpenSansBold16"
                                >
                                  50.00
                                </Text>
                              </div>
                              <Line className="bg-gray-300_01 h-px w-full" />
                              <div className="flex flex-col items-start justify-end pl-2 pr-4 py-4 w-[504px] sm:w-full">
                                <Text
                                  className="text-base text-blue_gray-900 text-right w-auto"
                                  size="txtOpenSansBold16Bluegray900"
                                >
                                  - 300.00
                                </Text>
                              </div>
                              <Line className="bg-gray-300_01 h-px w-full" />
                              <div className="flex flex-col items-start justify-end md:ml-[0] ml-[406px] pl-2 pr-4 py-4 w-auto">
                                <Text
                                  className="text-base text-right text-teal-400 w-auto"
                                  size="txtOpenSansBold16"
                                >
                                  10,000.00
                                </Text>
                              </div>
                              <Line className="bg-gray-300_01 h-px w-full" />
                              <div className="flex flex-col items-start justify-end pl-2 pr-4 py-4 w-[504px] sm:w-full">
                                <Text
                                  className="text-base text-blue_gray-900 text-right w-auto"
                                  size="txtOpenSansBold16Bluegray900"
                                >
                                  - 500.00
                                </Text>
                              </div>
                              <Line className="bg-gray-300_01 h-px w-full" />
                              <div className="flex flex-col items-start justify-end pl-2 pr-4 py-4 w-[504px] sm:w-full">
                                <Text
                                  className="text-base text-right text-teal-400 w-auto"
                                  size="txtOpenSansBold16"
                                >
                                  50.00
                                </Text>
                              </div>
                              <Line className="bg-gray-300_01 h-px w-full" />
                              <div className="flex flex-col items-start justify-end pl-2 pr-4 py-4 w-[504px] sm:w-full">
                                <Text
                                  className="text-base text-right text-teal-400 w-auto"
                                  size="txtOpenSansBold16"
                                >
                                  50.00
                                </Text>
                              </div>
                              <Line className="bg-gray-300_01 h-px w-full" />
                              <div className="flex flex-col items-start justify-end pl-2 pr-4 py-4 w-[504px] sm:w-full">
                                <Text
                                  className="text-base text-blue_gray-900 text-right w-auto"
                                  size="txtOpenSansBold16Bluegray900"
                                >
                                  - 300.00
                                </Text>
                              </div>
                              <Line className="bg-gray-300_01 h-px w-full" />
                              <div className="flex flex-col items-start justify-end md:ml-[0] ml-[406px] pl-2 pr-4 py-4 w-auto">
                                <Text
                                  className="text-base text-right text-teal-400 w-auto"
                                  size="txtOpenSansBold16"
                                >
                                  10,000.00
                                </Text>
                              </div>
                              <Line className="bg-gray-300_01 h-px w-full" />
                              <div className="flex flex-col items-start justify-end pl-2 pr-4 py-4 w-[504px] sm:w-full">
                                <Text
                                  className="text-base text-blue_gray-900 text-right w-auto"
                                  size="txtOpenSansBold16Bluegray900"
                                >
                                  - 500.00
                                </Text>
                              </div>
                              <Line className="bg-gray-300_01 h-px w-full" />
                              <div className="flex flex-col items-start justify-end pl-2 pr-4 py-4 w-[504px] sm:w-full">
                                <Text
                                  className="text-base text-right text-teal-400 w-auto"
                                  size="txtOpenSansBold16"
                                >
                                  50.00
                                </Text>
                              </div>
                              <Line className="bg-gray-300_01 h-px w-full" />
                              <div className="flex flex-col items-start justify-end pl-2 pr-4 py-4 w-[504px] sm:w-full">
                                <Text
                                  className="text-base text-right text-teal-400 w-auto"
                                  size="txtOpenSansBold16"
                                >
                                  50.00
                                </Text>
                              </div>
                              <Line className="bg-gray-300_01 h-px w-full" />
                              <div className="flex flex-col items-start justify-end pl-2 pr-4 py-4 w-[504px] sm:w-full">
                                <Text
                                  className="text-base text-blue_gray-900 text-right w-auto"
                                  size="txtOpenSansBold16Bluegray900"
                                >
                                  - 300.00
                                </Text>
                              </div>
                            </div>
                          </div>
                        </List>
                      </div>
                    </div>
                    <Img
                      className="absolute bottom-[0] h-10 inset-x-[0] mx-auto object-cover w-10"
                      src="images/img_rectangle.png"
                      alt="rectangle"
                    />
                  </div>
                  <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1128px] py-6 w-full">
                    <Text
                      className="text-blue_gray-800 text-sm w-auto"
                      size="txtOpenSansRegular14"
                    >
                      © OCBC. All Rights Reserved.
                    </Text>
                    <Text
                      className="text-blue_gray-800 text-sm w-auto"
                      size="txtOpenSansRegular14"
                    >
                      Conditions of Access | Security & Privacy
                    </Text>
                  </div>
                </div>
                <Img
                  className="h-[82px] sm:h-auto md:mt-0 mt-[488px] object-cover w-[9%] md:w-full"
                  src="images/img_mouse2.png"
                  alt="mouseTwo"
                />
              </div>
            </div>
          </div>
          <LandingCardHolderOneColumnFive
            className="absolute flex flex-col gap-4 inset-x-[0] items-center justify-start mx-auto top-[5%] w-auto md:w-full"
            usergoodmorning={
              <Text className="text-blue_gray-800 text-xs w-auto">
                <span className="text-blue_gray-800 font-opensans text-left font-normal">
                  Good morning,{" "}
                </span>
                <span className="text-blue_gray-800 font-opensans text-left font-bold">
                  PATRICK TAN
                </span>
              </Text>
            }
          />
        </div>
        <LandingCardHolderOneColumnsignal className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full" />
      </div>
    </>
  );
};

export default LandingCardHolderThreePage;
