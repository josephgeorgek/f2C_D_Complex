import React from "react";

const sizeClasses = {
  txtOpenSansRegular14LightblueA700: "font-normal font-opensans",
  txtOpenSansBold14Bluegray50002: "font-bold font-opensans",
  txtOpenSansBold22Bluegray200: "font-bold font-opensans",
  txtNotoSansSCMedium12: "font-medium font-notosanssc",
  txtOpenSansBold14Yellow80099: "font-bold font-opensans",
  txtOpenSansSemiBold16LightblueA700: "font-opensans font-semibold",
  txtOpenSansRegular14Gray800: "font-normal font-opensans",
  txtOpenSansSemiBold12Bluegray800: "font-opensans font-semibold",
  txtOpenSansBold24: "font-bold font-opensans",
  txtOpenSansSemiBold12Bluegray700: "font-opensans font-semibold",
  txtOpenSansBold22: "font-bold font-opensans",
  txtOpenSansSemiBold16Bluegray600: "font-opensans font-semibold",
  txtOpenSansBold20: "font-bold font-opensans",
  txtOpenSansSemiBold14LightblueA700: "font-opensans font-semibold",
  txtOpenSansSemiBold16Bluegray800: "font-opensans font-semibold",
  txtOpenSansBold16Bluegray900: "font-bold font-opensans",
  txtOpenSansSemiBold16: "font-opensans font-semibold",
  txtOpenSansSemiBold18: "font-opensans font-semibold",
  txtOpenSansRegular14Bluegray600: "font-normal font-opensans",
  txtOpenSansSemiBold12Bluegray50002: "font-opensans font-semibold",
  txtOpenSansSemiBold12: "font-opensans font-semibold",
  txtOpenSansSemiBold14: "font-opensans font-semibold",
  txtOpenSansSemiBold14Bluegray700: "font-opensans font-semibold",
  txtOpenSansBold18Bluegray80003: "font-bold font-opensans",
  txtIBMPlexMonoRegular14: "font-ibmplexmono font-normal",
  txtOpenSansRegular14Bluegray50002: "font-normal font-opensans",
  txtOpenSansBold18: "font-bold font-opensans",
  txtOpenSansRegular14Bluegray40002: "font-normal font-opensans",
  txtOpenSansBold16: "font-bold font-opensans",
  txtOpenSansBold20Bluegray700: "font-bold font-opensans",
  txtOpenSansBold14: "font-bold font-opensans",
  txtOpenSansRegular16: "font-normal font-opensans",
  txtOpenSansRegular14: "font-normal font-opensans",
  txtOpenSansBold12: "font-bold font-opensans",
  txtOpenSansRegular12: "font-normal font-opensans",
  txtOpenSansBold32: "font-bold font-opensans",
  txtOpenSansSemiBold14Black900: "font-opensans font-semibold",
  txtOpenSansRegular10: "font-normal font-opensans",
  txtOpenSansSemiBold14Bluegray80003: "font-opensans font-semibold",
  txtOpenSansBold14Bluegray80087: "font-bold font-opensans",
  txtOpenSansRegular12Bluegray80099: "font-normal font-opensans",
  txtOpenSansRegular12Bluegray700: "font-normal font-opensans",
  txtOpenSansBold14Bluegray80003: "font-bold font-opensans",
  txtOpenSansRegular12Bluegray800: "font-normal font-opensans",
  txtOpenSansSemiBold14Gray10003: "font-opensans font-semibold",
  txtHelvetica16: "font-helvetica font-normal",
  txtOpenSansRegular16Bluegray800: "font-normal font-opensans",
  txtOpenSansSemiBold12BlueA700: "font-opensans font-semibold",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
  children: React.ReactNode;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children = "",
  className = "",
  size,
  as: Component = "p",
  ...restProps
}) => {
  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
