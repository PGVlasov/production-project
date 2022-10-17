import { useTranslation } from "react-i18next";
import i18n from "shared/config/i18n/i18n";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface LanSwitcherProps {
  className?: string;
  short?: boolean;
}
export const LanSwitcher = ({ className, short }: LanSwitcherProps) => {
  const { t } = useTranslation();
  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      className={classNames("", {}, [className])}
      theme={ThemeButton.CLEAR_INVERTED}
      onClick={toggle}
    >
      {t(short ? "Короткий язык" : "Язык")}
    </Button>
  );
};
