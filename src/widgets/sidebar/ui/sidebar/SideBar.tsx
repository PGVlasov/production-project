import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";
import { LanSwitcher } from "widgets/lanSwitcher";
import { ThemeSwitcher } from "widgets/themeSwitcher";
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
      <Button data-testid="sidebar-toggle" onClick={onToggle}>
        {t("Переключить")}
      </Button>
      <div className={classes.switchers}>
        <ThemeSwitcher />
        <LanSwitcher className={classes.lang} />
      </div>
    </div>
  );
};
