import styles from "./layout.module.css";
import DevAssignmentsNavigation from "@/components/dev/devAssigmentsNavigation/devAssignmentsNavigation";

export default function AssignmentsLayout({ children }) {
  return (
    <section className={styles.layout}>
      <div className={styles.navigation}>
        <div className={styles.navContainer}>
          <DevAssignmentsNavigation />
        </div>
      </div>
      <div className={styles.content}>{children}</div>
    </section>
  );
}
