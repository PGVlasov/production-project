import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { RoutPath } from "shared/config/routConfig/routeConfig";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { Button, ButtonSize, ThemeButton } from "shared/ui/Button/Button";
import { LanSwitcher } from "widgets/lanSwitcher";
import { ThemeSwitcher } from "widgets/themeSwitcher";
import AboutIcon from "shared/assets/icons/about.svg";
import MainIcon from "shared/assets/icons/home.svg";
import classes from "./SideBar.module.scss";

interface SideBarProps {
  className?: string;
}
export const SideBar = ({ className }: SideBarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div
      data-testid="sidebar"
      className={classNames(
        classes.SideBar,
        { [classes.collapsed]: collapsed },
        [className]
      )}
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={classes.BtnCollapsed}
        theme={ThemeButton.BACKGROUND_INVERTED}
        squere
        size={ButtonSize.L}
      >
        {collapsed ? ">" : "<"}
      </Button>
      <div className={classes.items}>
        <AppLink
          className={classes.item}
          theme={AppLinkTheme.SECONDARY}
          to={RoutPath.main}
        >
          <MainIcon className={classes.icon} />
          <span className={classes.link}>{t("Главная страница")}</span>
        </AppLink>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          className={classes.item}
          to={RoutPath.about}
        >
          <AboutIcon className={classes.icon} />
          <span className={classes.link}> {t("О сайте")}</span>
        </AppLink>
      </div>
      <div className={classes.switchers}>
        <ThemeSwitcher />
        <LanSwitcher short={collapsed} className={classes.lang} />
      </div>
    </div>
  );
};
