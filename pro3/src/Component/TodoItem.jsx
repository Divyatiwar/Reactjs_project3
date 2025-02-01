import styles from "./Header.module.css";
export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log("Delete button clickede", item);
    setTodos(todos.filter((todo) => todo !== item));
  }
  return (
    <div className={styles.item}>
      <div className={styles.itemname}>
        {item}
        <span>
          <button onClick={() => handleDelete(item)} className={styles.delete}>
            Delete
          </button>
        </span>
      </div>

      <hr className={styles.line}></hr>
    </div>
  );
}
