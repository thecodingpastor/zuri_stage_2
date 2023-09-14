import { quicksand } from "@/fonts";
import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={classes.Container + " " + quicksand.className}>
      Copyright &copy;Thecodingpastor {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
