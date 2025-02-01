import styles from "./Header.module.css";
export default function Footer({ totalTodos }) {
  return (
    <div className={styles.footer}>
      <span>Total Todos : {totalTodos}</span>
    </div>
  );
}
