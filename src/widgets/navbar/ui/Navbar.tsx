import classes from "./Navbar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widgets/themeSwitcher";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
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
        <ThemeSwitcher />
      </div>
    </div>
  );
};
