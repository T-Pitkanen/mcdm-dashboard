import styles from "./sidenav.module.css";

const Sidenav = ({authors}) => {
  return (
    <div className={styles.sidenav}>
      {authors && authors.map((author, index) => (
        <button key={index}>{author.name}</button>
      ))}
    </div>
  );
};

export default Sidenav;
