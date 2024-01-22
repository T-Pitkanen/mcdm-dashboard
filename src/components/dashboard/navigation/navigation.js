
import styles from "./navigation.module.css";

const DashboardNav = ({galleries}) => {


  console.log(galleries);

  return (
    <div className={styles.navigation}>
      <div className={styles.navtop}>
        <p>Portfolio Dashboard</p>
      </div>

      <hr></hr>

      <div className={styles.navbot}>
        {galleries && galleries.map((gallery, index) => (
          <button key={index}>{gallery.name}</button>
        ))}
      </div>
    </div>
  );
};


export default DashboardNav;
