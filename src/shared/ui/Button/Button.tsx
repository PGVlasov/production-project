import React, { ButtonHTMLAttributes } from "react";
import { classNames } from "shared/lib/classNames/classNames";

import classes from "./Button.module.scss";

export enum ThemeButton {
  CLEAR = "clear",
  OUTLINE = "outline",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "backgroundInverted",
}

export enum ButtonSize {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  squere?: boolean;
  size?: ButtonSize;
}
export const Button: React.FC<ButtonProps> = (props) => {
  const { className, children, theme, squere, size, ...OtherProps } = props;

  const mods: Record<string, boolean> = {
    [classes[theme]]: true,
    [classes.squere]: squere,
    [classes[size]]: true,
  };

  return (
    <button
      className={classNames(classes.Button, mods, [className])}
      {...OtherProps}
    >
      {children}
    </button>
  );
};
