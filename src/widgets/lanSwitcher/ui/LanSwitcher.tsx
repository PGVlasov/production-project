import { useTranslation } from "react-i18next";
import i18n from "shared/config/i18n/i18n";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import classes from "./LanSwitcher.module.scss";

interface LanSwitcherProps {
  className?: string;
}
export const LanSwitcher = ({ className }: LanSwitcherProps) => {
  const { t } = useTranslation();
  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      className={classNames(classes.LanSwitcher, {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toggle}
    >
      {t("Язык")}
    </Button>
  );
};
