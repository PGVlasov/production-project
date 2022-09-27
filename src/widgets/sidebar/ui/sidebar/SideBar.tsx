import React, { useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { LanSwitcher } from "widgets/lanSwitcher";
import { ThemeSwitcher } from "widgets/themeSwitcher";
import classes from "./SideBar.module.scss";

interface SideBarProps {
  className?: string;
}
export const SideBar = ({ className }: SideBarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div
      className={classNames(
        classes.SideBar,
        { [classes.collapsed]: collapsed },
        [className]
      )}
    >
      <button onClick={onToggle}>toggle</button>
      <div className={classes.switchers}>
        <ThemeSwitcher />
        <LanSwitcher className={classes.lang} />
      </div>
    </div>
  );
};
