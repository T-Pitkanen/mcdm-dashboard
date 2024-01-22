import styles from "./devAssignmentsNavigation.module.css";
import DevAssignmentsNavBtn from "./devAssignmentsNavBtn/devAssignmentsNavBtn";

const DevAssignmentsNavigation = () => {
  return (
    <div className={styles.navigation}>
      <div className={styles.header}>
        <h3>Assigments</h3>
      </div>
      <div className={styles.links}>
        {/* <DevAssignmentsNavBtn link={"/assignments"} title={"Assignments"} /> */}
        <DevAssignmentsNavBtn link={"/assignments/icons"} title={"Icons"} />
        <DevAssignmentsNavBtn link={"/assignments/data"} title={"Data"} />
        <DevAssignmentsNavBtn link={"/assignments/data/images"} title={"Images"} />
        <DevAssignmentsNavBtn link={"/assignments/data/authors"} title={"Authors"} />
        <DevAssignmentsNavBtn link={"/assignments/data/portfolios"} title={"Portfolios"} />
        <DevAssignmentsNavBtn link={"/galleries"} title={"Galleries"} />
      </div>
    </div>
  );
};

export default DevAssignmentsNavigation;
