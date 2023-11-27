import { MdSearch } from "react-icons/md";
import styles from "./search.module.css";

const Search = ({ placeholder }) => {
  return (
    <div className={styles.container}>
      <MdSearch className={styles.icon} />
      <input className={styles.input} placeholder={placeholder} type="text" />
    </div>
  );
};

export default Search;
