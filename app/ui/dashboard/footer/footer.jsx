import styles from "./footer.module.css"

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Mlowe Dev</div>
      <div className={styles.text}>All rights Reserved</div>
    </div>
  )
}

export default Footer
