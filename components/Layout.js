import Navi from "./Nav";
import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Navi />
      <div>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};
export default Layout;
