import { FaMagnifyingGlass } from "react-icons/fa6";
import styles from "./metaOffOn.module.css";

const MetaOffOn = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles.container}>
      <FaMagnifyingGlass />
    </button>
  );
};

export default MetaOffOn;
