import { AiOutlineSearch } from "react-icons/ai";

import classes from "./Navbar.module.scss";
import Link from "next/link";
import { dm_sans } from "@/fonts";

const Navbar = () => {
  return (
    <nav className={classes.Container}>
      <Link className={classes.Logo} href="/">
        <img src="/images/tv.svg" alt="TV" />
        <span className={dm_sans.className}>MovieBox</span>
      </Link>
      <div className={classes.Search}>
        <input
          type="text"
          placeholder="What do you want to watch?"
          className={dm_sans.className}
        />
        <AiOutlineSearch />
      </div>
      <div>
        <img src="/images/Menu.svg" style={{ cursor: "pointer" }} />
      </div>
    </nav>
  );
};

export default Navbar;
