import CreditItem from "./CreditItem"
import styles from "../styles/Box.module.css"

const CreditList = ({ credits }) => {
  return (
    <div className="d-flex justify-content-center">
      <div className={styles.grid}>
        {credits.map((credit) => (
          <CreditItem credit={credit} />
        ))}
      </div>
    </div>
  )
}

export default CreditList
