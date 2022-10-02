import React, { ButtonHTMLAttributes } from "react";
import { classNames } from "shared/lib/classNames/classNames";

import classes from "./Button.module.scss";

export enum ThemeButton {
  CLEAR = "clear",
  OUTLINE = "outline",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}
export const Button: React.FC<ButtonProps> = (props) => {
  const { className, children, theme, ...OtherProps } = props;
  return (
    <button
      className={classNames(classes.Button, { theme }, [
        className,
        classes[theme],
      ])}
      {...OtherProps}
    >
      {children}
    </button>
  );
};
