import React from "react";

import { useNavigate } from "react-router-dom";

import { createColumnHelper } from "@tanstack/react-table";

import {
  Button,
  Img,
  Input,
  Line,
  ReactTable,
  SelectBox,
  Text,
} from "components";
import TSIFooterbutton from "components/TSIFooterbutton";

type Table1RowType = {
  rowallpayees: string;
  allpayeesOne: string;
  rowallpayeestwo: string;
  allpayeesThree: string;
  allpayeesFour: string;
  rowallpayeesfive?: string;
};

const successfulOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const rejectedOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const TSIPage: React.FC = () => {
  const table1Data = React.useRef<Table1RowType[]>([
    {
      rowallpayees: "14 Sep 2021",
      allpayeesOne: "123 495096 002   •  Salary AUG 2021",
      rowallpayeestwo: "-3,294.00 SGD",
      allpayeesThree: "Payroll",
      allpayeesFour: "123 495096 002",
    },
    {
      rowallpayees: "14 Sep 2021",
      allpayeesOne: "123 495096 002   •  Salary AUG 2021",
      rowallpayeestwo: "-3,294.00 SGD",
      allpayeesThree: "Payroll",
      allpayeesFour: "123 495096 002",
    },
  ]);
  const navigate = useNavigate();
  const table1Columns = React.useMemo(() => {
    const table1ColumnHelper = createColumnHelper<Table1RowType>();
    return [
      table1ColumnHelper.accessor("rowallpayees", {
        cell: (info) => (
          <Text
            className="pb-[3px] sm:pl-5 pl-7 pt-[35px] text-blue_gray-800_03 text-sm"
            size="txtOpenSansSemiBold14Bluegray80003"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <div className="flex flex-row gap-1.5 items-start justify-start min-w-[183px]">
            <Text
              className="text-blue_gray-800_03 text-sm"
              size="txtOpenSansBold14Bluegray80003"
            >
              Value Date
            </Text>
            <Img
              className="h-[11px] mt-1"
              src="images/img_download.svg"
              alt="download"
            />
          </div>
        ),
      }),
      table1ColumnHelper.accessor("allpayeesOne", {
        cell: (info) => (
          <div className="flex flex-col items-start justify-end pt-[5px] px-[5px]">
            <Text
              className="mt-[53px] text-blue_gray-800_03 text-sm"
              size="txtOpenSansSemiBold14Bluegray80003"
            >
              Catherine Tay
            </Text>
            <Text
              className="mt-1 text-black-900 text-sm"
              size="txtOpenSansSemiBold14Black900"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[390px] py-0.5 text-blue_gray-800_03 text-right text-sm"
            size="txtOpenSansBold14Bluegray80003"
          >
            Payee/Payer Details
          </Text>
        ),
      }),
      table1ColumnHelper.accessor("rowallpayeestwo", {
        cell: (info) => (
          <Text
            className="pb-1 pt-[35px] text-blue_gray-800_03 text-right text-sm"
            size="txtOpenSansBold14Bluegray80003"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <div className="flex flex-row gap-[9px] items-start justify-end min-w-[169px]">
            <Text
              className="text-blue_gray-800_03 text-right text-sm"
              size="txtOpenSansBold14Bluegray80003"
            >
              Amount
            </Text>
            <Img
              className="h-[11px] mt-1"
              src="images/img_download.svg"
              alt="download_One"
            />
          </div>
        ),
      }),
      table1ColumnHelper.accessor("allpayeesThree", {
        cell: (info) => (
          <Text
            className="pb-1 pl-[7px] pt-[35px] text-blue_gray-800_03 text-sm"
            size="txtOpenSansSemiBold14Bluegray80003"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[126px] py-0.5 text-blue_gray-800_03 text-sm"
            size="txtOpenSansBold14Bluegray80003"
          >
            Type
          </Text>
        ),
      }),
      table1ColumnHelper.accessor("allpayeesFour", {
        cell: (info) => (
          <div className="flex flex-col gap-2 items-start justify-end pt-[7px] px-[7px]">
            <Text
              className="mt-[50px] text-blue_gray-800_03 text-sm"
              size="txtOpenSansSemiBold14Bluegray80003"
            >
              ESOLUTIONS ALPHA PTE LTD
            </Text>
            <Text
              className="text-blue_gray-800_99 text-xs"
              size="txtOpenSansRegular12Bluegray80099"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[257px] text-blue_gray-800_03 text-right text-sm"
            size="txtOpenSansBold14Bluegray80003"
          >
            Your Account
          </Text>
        ),
      }),
      table1ColumnHelper.accessor("rowallpayeesfive", {
        cell: (info) => (
          <div className="flex sm:flex-1 flex-row items-center justify-center p-[5px] sm:w-full">
            <SelectBox
              className="font-bold leading-[normal] mt-[61px] text-left text-sm text-teal-400_99 w-[85%] sm:w-full"
              placeholderClassName="text-teal-400_99"
              indicator={
                <Img
                  className="h-1.5 mr-[0] w-3"
                  src="images/img_arrowdown_black_900.svg"
                  alt="arrow_down"
                />
              }
              isMulti={false}
              name="group207"
              options={successfulOptionsList}
              isSearchable={false}
              placeholder="Successful"
            />
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row items-center justify-center min-w-[153px] md:pr-10 pr-20 sm:pr-5">
            <Text
              className="text-blue_gray-800_03 text-sm"
              size="txtOpenSansBold14Bluegray80003"
            >
              Status
            </Text>
            <Img
              className="h-6 w-6"
              src="images/img_info_blue_gray_800.svg"
              alt="info"
            />
          </div>
        ),
      }),
    ];
  }, []);

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-opensans items-center justify-end mx-auto pt-[43px] w-full">
        <div className="flex flex-col gap-4 items-center justify-start w-full">
          <div className="flex flex-col gap-11 items-start justify-start max-w-[1282px] mx-auto md:px-5 w-full">
            <div className="flex flex-row md:gap-10 items-start justify-between w-full">
              <Text
                className="mt-[7px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-800_03"
                size="txtOpenSansBold32"
              >
                Transaction Status
              </Text>
              <Img className="h-9 w-9" src="images/img_clear.svg" alt="clear" />
            </div>
            <div className="flex md:flex-col flex-row gap-8 items-start justify-start w-[55%] md:w-full">
              <div className="flex flex-col gap-[7px] items-center justify-start w-[21%] md:w-full">
                <Text
                  className="text-[22px] text-blue_gray-800_03 sm:text-lg md:text-xl"
                  size="txtOpenSansBold22"
                >
                  Transactions
                </Text>
                <Line className="bg-blue_gray-800_03 h-0.5 w-full" />
              </div>
              <Text
                className="text-[22px] text-blue_gray-200 sm:text-lg md:text-xl"
                size="txtOpenSansBold22Bluegray200"
              >
                Administration
              </Text>
              <Text
                className="text-[22px] text-blue_gray-200 sm:text-lg md:text-xl"
                size="txtOpenSansBold22Bluegray200"
              >
                Trade Finance
              </Text>
              <Text
                className="text-[22px] text-blue_gray-200 sm:text-lg md:text-xl"
                size="txtOpenSansBold22Bluegray200"
              >
                Maintenance
              </Text>
            </div>
          </div>
          <div className="bg-gray-50_01 flex flex-col items-center justify-start p-3 w-full">
            <div className="flex flex-col gap-[34px] items-start justify-start max-w-[1246px] mx-auto pb-[78px] md:px-5 w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-10 justify-start w-full">
                  <div className="flex flex-row gap-8 items-center justify-end md:ml-[0] ml-[984px] w-1/5 md:w-full">
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-blue-A700 text-xs"
                        size="txtOpenSansSemiBold12BlueA700"
                      >
                        Cheque Enquiry
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-blue-A700 text-xs"
                        size="txtOpenSansSemiBold12BlueA700"
                      >
                        SWIFT UETR Tracking
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                    <div className="flex flex-col items-center justify-start md:mt-0 mt-1">
                      <div className="flex flex-col gap-[5px] items-end justify-start w-full">
                        <div className="flex flex-row items-center justify-between mr-0.5 w-full">
                          <Text
                            className="text-blue_gray-800_03 text-lg"
                            size="txtOpenSansBold18Bluegray80003"
                          >
                            Value date
                          </Text>
                          <Text
                            className="text-blue_gray-800_03 text-lg"
                            size="txtOpenSansBold18Bluegray80003"
                          >
                            Most Recent
                          </Text>
                          <Img
                            className="h-6 w-6"
                            src="images/img_trash.svg"
                            alt="trash"
                          />
                        </div>
                        <Img
                          className="h-0.5"
                          src="images/img_dividerstext.svg"
                          alt="dividerstext"
                        />
                      </div>
                    </div>
                    <Input
                      name="search"
                      placeholder="Search for transaction type / payee name / amount / status"
                      className="leading-[normal] p-0 placeholder:text-blue_gray-400_01 text-left text-sm w-full"
                      wrapClassName="flex md:flex-1 md:w-full"
                      type="text"
                      prefix={
                        <Img
                          className="mt-auto mb-px h-6 mr-[11px]"
                          src="images/img_search.svg"
                          alt="search"
                        />
                      }
                      shape="round"
                    ></Input>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-2 items-start justify-start w-auto md:w-full">
                <div className="bg-gray-100_03 border border-solid border-yellow-800 flex flex-row gap-2 items-start justify-start px-3 py-2 rounded-[18px] w-auto">
                  <Text
                    className="bg-yellow-800 justify-center px-2 rounded-[10px] text-white-A700 text-xs w-[37px]"
                    size="txtOpenSansBold12"
                  >
                    99+
                  </Text>
                  <Text
                    className="text-blue_gray-800 text-sm w-auto"
                    size="txtOpenSansSemiBold14"
                  >
                    All
                  </Text>
                </div>
                <div className="bg-gray-100_03 border border-gray-300_01 border-solid flex flex-row gap-2 items-start justify-start px-3 py-2 rounded-[18px] w-auto">
                  <Text
                    className="bg-yellow-800 justify-center px-2 rounded-[10px] text-white-A700 text-xs w-[30px]"
                    size="txtOpenSansBold12"
                  >
                    14
                  </Text>
                  <Text
                    className="text-blue_gray-800 text-sm w-auto"
                    size="txtOpenSansSemiBold14"
                  >
                    Pending authorisation
                  </Text>
                </div>
                <div className="bg-gray-100_03 border border-gray-300_01 border-solid flex flex-row gap-2 items-start justify-start px-3 py-2 rounded-[18px] w-auto">
                  <Text
                    className="bg-yellow-800 justify-center px-2 rounded-[10px] text-white-A700 text-xs w-[30px]"
                    size="txtOpenSansBold12"
                  >
                    88
                  </Text>
                  <Text
                    className="text-blue_gray-800 text-sm w-auto"
                    size="txtOpenSansSemiBold14"
                  >
                    In progress
                  </Text>
                </div>
                <div className="bg-gray-100_03 border border-gray-300_01 border-solid flex flex-row gap-2 items-start justify-start px-3 py-2 rounded-[18px] w-auto">
                  <Text
                    className="bg-yellow-800 justify-center px-2 rounded-[10px] text-white-A700 text-xs w-[30px]"
                    size="txtOpenSansBold12"
                  >
                    25
                  </Text>
                  <Text
                    className="text-blue_gray-800 text-sm w-auto"
                    size="txtOpenSansSemiBold14"
                  >
                    Successful
                  </Text>
                </div>
                <div className="bg-gray-100_03 border border-gray-300_01 border-solid flex flex-row gap-2 items-start justify-start px-3 py-2 rounded-[18px] w-auto">
                  <Text
                    className="bg-yellow-800 justify-center px-2 rounded-[10px] text-white-A700 text-xs w-[23px]"
                    size="txtOpenSansBold12"
                  >
                    4
                  </Text>
                  <Text
                    className="text-blue_gray-800 text-sm w-auto"
                    size="txtOpenSansSemiBold14"
                  >
                    Rejected
                  </Text>
                </div>
                <div className="bg-gray-100_03 border border-gray-300_01 border-solid flex flex-row gap-2 items-start justify-start px-3 py-2 rounded-[18px] w-auto">
                  <Text
                    className="bg-yellow-800 justify-center px-2 rounded-[10px] text-white-A700 text-xs w-[23px]"
                    size="txtOpenSansBold12"
                  >
                    5
                  </Text>
                  <Text
                    className="text-blue_gray-800 text-sm w-auto"
                    size="txtOpenSansSemiBold14"
                  >
                    Saved
                  </Text>
                </div>
                <Button
                  className="border border-gray-300_01 border-solid cursor-pointer font-semibold min-w-[33px] rounded-[16px] text-center text-sm"
                  color="gray_100_03"
                  size="xs"
                  variant="fill"
                >
                  +
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start max-w-[1283px] mb-[147px] mx-auto md:px-5 w-full">
              <div className="overflow-auto w-full">
                <ReactTable
                  columns={table1Columns}
                  data={table1Data.current}
                  rowClass={""}
                  headerClass=""
                />
              </div>
              <div
                className="common-pointer md:h-[2048px] h-[786px] sm:h-[801px] mt-4 relative w-full"
                onClick={() => navigate("/tsione")}
              >
                <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[18px] rounded-bl-[12px] rounded-br-[12px] w-full">
                  <div className="flex flex-col gap-[33px] justify-start mt-[85px] w-[96%] md:w-full">
                    <div className="flex flex-col md:gap-10 gap-[72px] items-center justify-start mr-[19px] w-[99%] md:w-full">
                      <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[99%] md:w-full">
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-blue_gray-400_02 text-sm"
                            size="txtOpenSansRegular14Bluegray40002"
                          >
                            Amount debited
                          </Text>
                          <Text
                            className="mt-[7px] text-gray-800 text-sm"
                            size="txtOpenSansRegular14Gray800"
                          >
                            3,785.00 SGD
                          </Text>
                          <Text
                            className="mt-[26px] text-blue_gray-400_02 text-sm"
                            size="txtOpenSansRegular14Bluegray40002"
                          >
                            Exchange rate
                          </Text>
                          <Text
                            className="mt-1 text-gray-800 text-sm"
                            size="txtOpenSansRegular14Gray800"
                          >
                            1.00 SGD = 1.54 USD
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-blue_gray-400_02 text-sm"
                            size="txtOpenSansRegular14Bluegray40002"
                          >
                            Charges paid by
                          </Text>
                          <Text
                            className="mt-[5px] text-gray-800 text-sm"
                            size="txtOpenSansRegular14Gray800"
                          >
                            Me (OUR)
                          </Text>
                          <Text
                            className="mt-[26px] text-blue_gray-400_02 text-sm"
                            size="txtOpenSansRegular14Bluegray40002"
                          >
                            Charges
                          </Text>
                          <Text
                            className="mt-1 text-gray-800 text-sm"
                            size="txtOpenSansRegular14Gray800"
                          >
                            40.00 SGD
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[21%] md:w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="text-blue_gray-400_02 text-sm"
                              size="txtOpenSansRegular14Bluegray40002"
                            >
                              OCBC reference no.
                            </Text>
                            <div className="flex flex-row gap-8 items-center justify-between mt-1.5 w-full">
                              <Text
                                className="text-gray-800 text-sm"
                                size="txtOpenSansRegular14Gray800"
                              >
                                OCBCFAST180604334301
                              </Text>
                              <Text
                                className="text-light_blue-A700 text-sm"
                                size="txtOpenSansSemiBold14LightblueA700"
                              >
                                COPY
                              </Text>
                            </div>
                            <Text
                              className="mt-[25px] text-blue_gray-400_02 text-sm"
                              size="txtOpenSansRegular14Bluegray40002"
                            >
                              UETR reference no.
                            </Text>
                            <div className="flex flex-row gap-3.5 items-start justify-between mt-1.5 w-full">
                              <Text
                                className="text-gray-800 text-sm"
                                size="txtOpenSansRegular14Gray800"
                              >
                                ahd32-fbk389-jhd50-df898y
                              </Text>
                              <Text
                                className="text-light_blue-A700 text-sm"
                                size="txtOpenSansSemiBold14LightblueA700"
                              >
                                COPY
                              </Text>
                            </div>
                            <Text
                              className="mt-6 text-blue_gray-400_02 text-sm"
                              size="txtOpenSansRegular14Bluegray40002"
                            >
                              Transfer details
                            </Text>
                            <Text
                              className="mt-1.5 text-gray-800 text-sm"
                              size="txtOpenSansRegular14Gray800"
                            >
                              Invoice #21345
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-blue_gray-400_02 text-sm"
                            size="txtOpenSansRegular14Bluegray40002"
                          >
                            Payee bank
                          </Text>
                          <Text
                            className="leading-[24.00px] mt-0.5 text-gray-800 text-sm"
                            size="txtOpenSansRegular14Gray800"
                          >
                            <span className="text-blue_gray-800 font-helvetica text-left text-base font-normal">
                              JP
                            </span>
                            <span className="text-blue_gray-800 font-helvetica text-left text-base font-normal">
                              {" "}
                            </span>
                            <span className="text-blue_gray-800 font-helvetica text-left text-base font-normal">
                              Morgan{" "}
                            </span>
                            <span className="text-blue_gray-800 font-helvetica text-left text-base font-normal">
                              Chase{" "}
                            </span>
                            <span className="text-blue_gray-800 font-helvetica text-left text-base font-normal">
                              <>
                                Bank
                                <br />
                              </>
                            </span>
                            <span className="text-blue_gray-800 font-helvetica text-left font-normal">
                              <>
                                270 Park Avenue, New York, NY 10017
                                <br />
                                United States of America
                              </>
                            </span>
                          </Text>
                          <Text
                            className="mt-[25px] text-blue_gray-400_02 text-sm"
                            size="txtOpenSansRegular14Bluegray40002"
                          >
                            Payee SWIFT code
                          </Text>
                          <Text
                            className="mt-[5px] text-base text-gray-800"
                            size="txtHelvetica16"
                          >
                            CHASUS33
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-[98%] md:w-full">
                        <div className="flex flex-col gap-[39px] items-center justify-start w-full">
                          <Img
                            className="h-[21px] md:h-auto object-cover"
                            src="images/img_group841.png"
                            alt="group841"
                          />
                          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                            <div className="bg-gray-100_04 flex flex-col items-center justify-start mb-[67px] p-8 sm:px-5 rounded-[12px]">
                              <Text
                                className="text-blue_gray-700 text-sm"
                                size="txtOpenSansSemiBold14Bluegray700"
                              >
                                Pending authorisation
                              </Text>
                              <Text
                                className="mt-0.5 text-blue_gray-500_02 text-xs"
                                size="txtOpenSansSemiBold12Bluegray50002"
                              >
                                15 Nov 2021, 09:10:00 SGT
                              </Text>
                              <Text
                                className="mb-[7px] mt-[25px] text-blue_gray-700 text-xs"
                                size="txtOpenSansSemiBold12Bluegray700"
                              >
                                Submitted by ADRIANLIM
                              </Text>
                            </div>
                            <div className="bg-gray-100_04 flex flex-col items-center justify-start mb-[67px] p-[30px] sm:px-5 rounded-[12px]">
                              <Text
                                className="text-blue_gray-700 text-sm"
                                size="txtOpenSansSemiBold14Bluegray700"
                              >
                                Authorised
                              </Text>
                              <div className="flex flex-col gap-[30px] items-center justify-start my-[3px]">
                                <Text
                                  className="text-blue_gray-500_02 text-xs"
                                  size="txtOpenSansSemiBold12Bluegray50002"
                                >
                                  15 Nov 2021, 09:10:00 SGT
                                </Text>
                                <Text
                                  className="text-blue_gray-700 text-xs"
                                  size="txtOpenSansSemiBold12Bluegray700"
                                >
                                  Authorised by JENNYTAN
                                </Text>
                              </div>
                            </div>
                            <div className="bg-gray-100_04 flex flex-col gap-[27px] items-center justify-center p-6 sm:px-5 rounded-[12px]">
                              <Text
                                className="mt-2 text-blue_gray-700 text-center text-sm"
                                size="txtOpenSansSemiBold14Bluegray700"
                              >
                                In progress
                              </Text>
                              <div className="flex flex-col items-start justify-start mb-3.5">
                                <Text
                                  className="text-blue_gray-500_02 text-sm"
                                  size="txtOpenSansBold14Bluegray50002"
                                >
                                  Requires amendment
                                </Text>
                                <Text
                                  className="leading-[20.00px] mt-0.5 text-blue_gray-700 text-xs w-full"
                                  size="txtOpenSansRegular12Bluegray700"
                                >
                                  Payee bank is unable to process due to
                                  incorrect payee name. Please amend your
                                  transfer details.
                                </Text>
                              </div>
                            </div>
                            <Button
                              className="cursor-pointer font-semibold leading-[normal] mb-[127px] min-w-[224px] rounded-[12px] text-center text-sm"
                              color="gray_100_04"
                              size="md"
                              variant="fill"
                            >
                              Successful
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <TSIFooterbutton className="bg-white-A700 flex flex-col items-center justify-center md:ml-[0] ml-[816px] sm:px-5 px-8 py-4 w-[375px] sm:w-full" />
                  </div>
                </div>
                <Line className="absolute bg-gray-100_03 h-px inset-x-[0] mx-auto top-[9%] w-full" />
                <div className="absolute bg-white-A700 flex flex-col inset-x-[0] items-center justify-end mx-auto p-2 rounded-[12px] top-[0] w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[5px] w-[98%] md:w-full">
                    <Text
                      className="text-blue_gray-800_03 text-sm"
                      size="txtOpenSansSemiBold14Bluegray80003"
                    >
                      11 Sep 2021
                    </Text>
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[81px]">
                      <Text
                        className="text-blue_gray-800_03 text-sm"
                        size="txtOpenSansSemiBold14Bluegray80003"
                      >
                        Paradise Group Holdings Pte Ltd
                      </Text>
                      <Text
                        className="mt-1 text-blue_gray-800_99 text-xs"
                        size="txtOpenSansRegular12Bluegray80099"
                      >
                        230 940 34980
                      </Text>
                    </div>
                    <Text
                      className="md:ml-[0] ml-[165px] text-blue_gray-800_03 text-right text-sm"
                      size="txtOpenSansBold14Bluegray80003"
                    >
                      -2,290.00 USD
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[84px] text-blue_gray-800_03 text-sm"
                      size="txtOpenSansSemiBold14Bluegray80003"
                    >
                      Overseas TT
                    </Text>
                    <div className="flex flex-col gap-[7px] items-start justify-start ml-11 md:ml-[0]">
                      <Text
                        className="text-blue_gray-800_03 text-sm"
                        size="txtOpenSansSemiBold14Bluegray80003"
                      >
                        ESOLUTIONS ALPHA PTE LTD
                      </Text>
                      <Text
                        className="text-blue_gray-800_99 text-xs"
                        size="txtOpenSansRegular12Bluegray80099"
                      >
                        123 495096 002
                      </Text>
                    </div>
                    <Text
                      className="leading-[15.00px] ml-16 md:ml-[0] text-sm text-yellow-800_99 w-[9%] sm:w-full"
                      size="txtOpenSansBold14Yellow80099"
                    >
                      Requires amendment
                    </Text>
                    <Img
                      className="h-1.5 ml-2.5 md:ml-[0]"
                      src="images/img_arrowup.svg"
                      alt="arrowup"
                    />
                  </div>
                </div>
              </div>
              <div className="md:h-[101px] sm:h-[420px] h-[67px] mt-[34px] relative w-full">
                <Text
                  className="ml-auto mr-[31px] my-auto text-blue_gray-800_87 text-right text-sm"
                  size="txtOpenSansBold14Bluegray80087"
                >
                  Successful
                </Text>
                <div className="absolute bg-white-A700 flex sm:flex-col flex-row sm:gap-10 h-full inset-[0] items-center justify-between m-auto p-[13px] rounded-[12px] w-full">
                  <Text
                    className="sm:ml-[0] ml-[15px] text-blue_gray-800_03 text-sm"
                    size="txtOpenSansSemiBold14Bluegray80003"
                  >
                    11 Sep 2021
                  </Text>
                  <Text
                    className="mb-0.5 text-blue_gray-800_03 text-sm"
                    size="txtOpenSansSemiBold14Bluegray80003"
                  >
                    <span className="text-blue_gray-800_03 font-opensans text-left font-semibold">
                      <>
                        Michael Tan <br />
                      </>
                    </span>
                    <span className="text-blue_gray-800_99 font-opensans text-left text-xs font-normal">
                      FAST Transfer PayNow UEN • PayNow name: Michael Tan
                    </span>
                  </Text>
                  <Text
                    className="text-blue_gray-800_03 text-right text-sm"
                    size="txtOpenSansBold14Bluegray80003"
                  >
                    -3,294.00 SGD
                  </Text>
                  <Text
                    className="text-blue_gray-800_03 text-sm"
                    size="txtOpenSansSemiBold14Bluegray80003"
                  >
                    FAST
                  </Text>
                  <Text
                    className="text-blue_gray-800_03 text-sm"
                    size="txtOpenSansSemiBold14Bluegray80003"
                  >
                    <span className="text-blue_gray-800_03 font-opensans text-left font-semibold">
                      <>
                        ESOLUTIONS ALPHA PTE LTD
                        <br />
                      </>
                    </span>
                    <span className="text-blue_gray-800_99 font-opensans text-left text-xs font-normal">
                      123 495096 002
                    </span>
                  </Text>
                  <SelectBox
                    className="sm:flex-1 font-bold leading-[normal] mr-[11px] text-left text-red-A700_99 text-sm w-[10%] sm:w-full"
                    placeholderClassName="text-red-A700_99"
                    indicator={
                      <Img
                        className="h-1.5 mr-[0] w-3"
                        src="images/img_arrowdown_black_900.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="group210"
                    options={rejectedOptionsList}
                    isSearchable={false}
                    placeholder="Rejected"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TSIPage;
