import React from "react";

const shapes = { round: "rounded" } as const;
const variants = {
  gradient: {
    blue_gray_800_02_blue_gray_600_01: "bg-gradient1  text-white-A700",
    blue_gray_700_02_blue_gray_600_01: "bg-gradient2  text-white-A700",
    blue_gray_600_02_blue_300: "bg-gradient ",
  },
  fill: {
    gray_100_04: "bg-gray-100_04 text-gray-400_02",
    gray_100_03: "bg-gray-100_03 text-blue_gray-800",
  },
  outline: {
    blue_gray_600:
      "border border-blue_gray-600 border-solid text-blue_gray-600",
  },
} as const;
const sizes = { xs: "p-2", sm: "p-[17px]", md: "p-8 sm:px-5" } as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
