import React from "react";

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

type TableRowType = {
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

const TSIOnePage: React.FC = () => {
  const tableData = React.useRef<TableRowType[]>([
    {
      rowallpayees: "14 Sep 2021",
      allpayeesOne: "123 495096 002    Salary AUG 2021",
      rowallpayeestwo: "-3,294.00 SGD",
      allpayeesThree: "Payroll",
      allpayeesFour: "123 495096 002",
    },
    {
      rowallpayees: "14 Sep 2021",
      allpayeesOne: "123 495096 002     Salary AUG 2021",
      rowallpayeestwo: "-3,294.00 SGD",
      allpayeesThree: "Payroll",
      allpayeesFour: "123 495096 002",
    },
    {
      rowallpayees: "11 Sep 2021",
      allpayeesOne: "230 940 34980",
      rowallpayeestwo: "-2,290.00 USD",
      allpayeesThree: "123 495096 002",
      allpayeesFour: "Overseas TT",
      rowallpayeesfive: "Overseas TT",
    },
    {
      rowallpayees: "11 Sep 2021",
      allpayeesOne: "FAST Transfer PayNow UEN  PayNow name: Michael Tan",
      rowallpayeestwo: "-3,294.00 SGD",
      allpayeesThree: "FAST",
      allpayeesFour: "123 495096 002",
      rowallpayeesfive: "Successful",
    },
  ]);
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper<TableRowType>();
    return [
      tableColumnHelper.accessor("rowallpayees", {
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
      tableColumnHelper.accessor("allpayeesOne", {
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
            className="min-w-[389px] py-0.5 text-blue_gray-800_03 text-right text-sm"
            size="txtOpenSansBold14Bluegray80003"
          >
            Payee/Payer Details
          </Text>
        ),
      }),
      tableColumnHelper.accessor("rowallpayeestwo", {
        cell: (info) => (
          <Text
            className="pb-1 pt-[35px] text-blue_gray-800_03 text-right text-sm"
            size="txtOpenSansBold14Bluegray80003"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <div className="flex flex-row gap-[9px] items-start justify-end min-w-[170px]">
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
      tableColumnHelper.accessor("allpayeesThree", {
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
      tableColumnHelper.accessor("allpayeesFour", {
        cell: (info) => (
          <div className="flex flex-col gap-[7px] items-start justify-end pt-[7px] px-[7px]">
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
      tableColumnHelper.accessor("rowallpayeesfive", {
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
              name="group217"
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
            <div className="overflow-auto mb-[884px] md:px-5 w-[91%]">
              <ReactTable
                columns={tableColumns}
                data={tableData.current}
                rowClass={""}
                headerClass=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TSIOnePage;
