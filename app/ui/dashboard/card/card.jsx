
import { MdSupervisedUserCircle } from "react-icons/md"
import styles from "./card.module.css"
function card() {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.text}>
        <span className={styles.title}>Total users</span>
        <span className={styles.number}>10.24</span>
        <span className={styles.detail}>
            <span className={styles.positive}>12%</span> more than previous weeks
            </span>
      </div>
    </div>
  )
}

export default card
