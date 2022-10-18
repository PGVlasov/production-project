import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import classes from "./LogInForm.module.scss";

interface LogInFormProps {
  className?: string;
}
export const LogInForm = ({ className }: LogInFormProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(classes.LogInForm, {}, [className])}>
      <Input type="text" placeholder="username" className={classes.input} />
      <Input type="text" placeholder="password" className={classes.input} />

      <Button className={classes.logInBtn}>{t("Войти")}</Button>
    </div>
  );
};
