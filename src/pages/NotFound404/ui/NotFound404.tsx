import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import classes from "./NotFound404.module.scss";

interface NotFound404Props {
  className?: string;
}
export const NotFound404 = ({ className }: NotFound404Props) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(classes.NotFound404, {}, [className])}>
      {t("Страница не найдена")}
    </div>
  );
};
