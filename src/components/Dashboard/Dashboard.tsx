import { useContext } from "react";
import { userDetailsContext } from "../../context/userDetailsContext";
import { AsideContent } from "../AsideContent/AsideContent";
import styles from "./Dashboard.module.css";

export function Dashboard() {
  const { userDetails } = useContext(userDetailsContext)!;

  return (
    <div className={styles.gridDashboardContainer}>
      <aside className={styles.asideDashboardContainer}>
        <AsideContent userDetails={userDetails!} />
      </aside>

      <nav className={styles.navDashboardContainer}>Profile</nav>
      <section className={styles.sectionDashboardContainer}>
        <div className={styles.userProfilePhotoContainer}></div>

        <div className={styles.userProfileContainer}></div>
      </section>

      <div className={styles.previewDashboardContainer}></div>
    </div>
  );
}
