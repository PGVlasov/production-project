import { classNames } from "shared/lib/classNames/classNames";
import classes from "./Text.module.scss";

export enum TextTheme {
  PRIMARY = "primary",
  ERROR = "error",
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: string;
}

export const Text = ({
  className,
  title,
  text,
  theme = TextTheme.PRIMARY,
}: TextProps) => {
  return (
    <div
      className={classNames(classes.AppLink, { [classes[theme]]: true }, [
        className,
      ])}
    >
      {title && <p className={classes.title}>{title}</p>}
      {text && <p className={classes.text}>{text}</p>}
    </div>
  );
};
