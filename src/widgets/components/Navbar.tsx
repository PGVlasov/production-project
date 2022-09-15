import { Link } from "react-router-dom";
import classes from "./Navbar.module.scss";
import { useTheme } from "../../app/providers/ThemeProvider/lib/useTheme";

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classes.navbar}>
      <Link to={"/"}>Главная страница</Link>
      <Link to={"/about"}>О сайте</Link>
      <button onClick={toggleTheme}>Сменить тему</button>
    </div>
  );
};
