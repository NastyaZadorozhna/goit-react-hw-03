import styles from "./SearchBox.module.css";

function SearchBox({ value, setFilter }) {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={(event) => setFilter(event.target.value)}
        className={styles.searchInput}
      ></input>
    </div>
  );
}

export default SearchBox;
