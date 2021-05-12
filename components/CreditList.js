import CreditItem from "./CreditItem";
import styles from "../styles/Box.module.css";

const CreditList = ({ credits }) => {
  return (
    <div className={styles.grid}>
      {credits.map((credit) => (
        <CreditItem credit={credit} />
      ))}
    </div>
  );
};

export default CreditList;
