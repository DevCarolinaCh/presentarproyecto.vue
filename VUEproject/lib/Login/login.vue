import Vue, { useContext } from 'vue'
import styles from "./login.module.css";


export default function Login() {
  return (
    <main className={styles.main}>
        <CardLogin />
    </main>
  )
}
