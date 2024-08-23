
import styles from "./transactions.module.css"
function transactions() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latets Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
         <tr>
            <td>
              <div className={styles.user}>
              <img 
              src="./noavatar.png" 
              alt="" 
              width={40} 
              height={40} 
              className={styles.userImage} 
              />
              Generation Mlowe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>pending</span>
            </td>
            <td>02.07.2024</td>
            <td>$12.32</td>
          </tr>
          <tr>
            <td>
            <div className={styles.user}>
              <img 
              src="./noavatar.png" 
              alt="" 
              width={40} 
              height={40} 
              className={styles.userImage} 
              />
              Generation Mlowe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>done</span>
            </td>
            <td>02.07.2024</td>
            <td>$12.32</td>
          </tr>
          <tr>
            <td>
            <div className={styles.user}>
              <img 
              src="./noavatar.png" 
              alt="" 
              width={40} 
              height={40} 
              className={styles.userImage} 
              />
              Generation Mlowe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>cancelled</span>
            </td>
            <td>02.07.2024</td>
            <td>$12.32</td>
          </tr>
          <tr>
            <td>
            <div className={styles.user}>
              <img 
              src="./noavatar.png" 
              alt="" 
              width={40} 
              height={40} 
              className={styles.userImage} 
              />
              Generation Mlowe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>pending</span>
            </td>
            <td>02.07.2024</td>
            <td>$12.32</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default transactions
