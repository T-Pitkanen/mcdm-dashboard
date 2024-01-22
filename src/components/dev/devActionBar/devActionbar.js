import styles from "./devActionbar.module.css";

const DevActionBar = ({ setSizeFunction, size, config, setColorFunction }) => {
  return (
    <div className={styles.container}>
      <div className={styles.status}>
        <h1>{size}</h1>
      </div>
      <div className={styles.actionBar}>
        <span className={styles.btn}>
          <input
            type="range"
            min="50"
            max="250"
            onChange={(e) => setSizeFunction(Number(e.target.value))}
          ></input>
        </span>
        <span
          className={styles.btn}
          onClick={() => setSizeFunction(config.small)}
        >
          {config.small}
        </span>
        <span
          className={styles.btn}
          onClick={() => setSizeFunction(config.medium)}
        >
          {config.medium}
        </span>
        <span
          className={styles.btn}
          onClick={() => setSizeFunction(config.max)}
        >
          {config.max}
        </span>
        <span className={styles.btn}>
          <input
            type="color"
            className={styles.color}
            onChange={(e) => setColorFunction(e.target.value)}
          ></input>
        </span>
      </div>
    </div>
  );
};

export default DevActionBar;
