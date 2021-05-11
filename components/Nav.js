import Link from "next/link";
import navStyles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/">Credits</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/studio">Studio</Link>
        </li>
        <li>
          <Link href="/booking">Record with Dryw</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
