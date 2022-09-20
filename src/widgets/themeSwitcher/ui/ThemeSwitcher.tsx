import { Theme, useTheme } from "app/providers/ThemeProvider/ui";
import { classNames } from "shared/lib/classNames/classNames";
import classes from "./ThemeSwitcher.module.scss";
import LightIcon from "shared/assets/icons/theme-light.svg";
import DarktIcon from "shared/assets/icons/theme-dark.svg";
import Icon from "shared/assets/icons/theme.jpg";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}
export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(classes.ThemeSwitcer, {}, [theme])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <DarktIcon /> : <LightIcon />}
    </Button>
  );
};
