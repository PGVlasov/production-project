import classes from "./Navbar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import { Modal } from "shared/ui/Modal/Modal";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { useCallback, useState } from "react";
import { LogInModal } from "features/authByUserName";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  const [isModalOpen, setModalOpen] = useState(false);

  const onCloseModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  const onShowModal = useCallback(() => {
    setModalOpen(true);
  }, []);

  return (
    <div className={classNames(classes.Navbar, {}, [className])}>
      <Button
        theme={ThemeButton.CLEAR_INVERTED}
        className={classes.links}
        onClick={onShowModal}
      >
        {t("Войти")}
      </Button>
      <LogInModal isOpen={isModalOpen} onClose={onCloseModal} />
    </div>
  );
};
