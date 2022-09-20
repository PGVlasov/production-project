import classes from "./Navbar.module.scss";
import { useTheme } from "../../../app/providers/ThemeProvider/lib/useTheme";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames(classes.Navbar, {}, [className])}>
      <div className={classes.links}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          className={classes.Link}
          to={"/"}
        >
          Главная страница
        </AppLink>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          className={classes.Link}
          to={"/about"}
        >
          О сайте
        </AppLink>
        <button onClick={toggleTheme}>Сменить тему</button>
      </div>
    </div>
  );
};
