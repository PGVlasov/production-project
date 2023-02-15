import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";
import { loginActions } from "../../model/slice/loginSlice";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import classes from "./LogInForm.module.scss";
import { logInByUsername } from "features/authByUserName/model/services/logInByUsername/LogInByUsername";
import { Text, TextTheme } from "shared/ui/Text/Text";

interface LogInFormProps {
  className?: string;
}
export const LogInForm = memo(({ className }: LogInFormProps) => {
  const { t } = useTranslation();
  const { username, password, error, isLoading } = useSelector(getLoginState);
  const dispatch = useDispatch();

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUserName(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const onLoginClick = useCallback(() => {
    dispatch<any>(logInByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
    <div className={classNames(classes.LogInForm, {}, [className])}>
      <Text title={t("Форма авторизации")} />
      {error && <Text text={error} theme={TextTheme.ERROR} />}
      <Input
        type="text"
        placeholder="username"
        className={classes.input}
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        type="text"
        placeholder="password"
        className={classes.input}
        onChange={onChangePassword}
        value={password}
      />

      <Button
        theme={ThemeButton.OUTLINE}
        className={classes.logInBtn}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t("Войти")}
      </Button>
    </div>
  );
});
