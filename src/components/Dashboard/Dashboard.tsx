import styles from "./Dashboard.module.css";

export function Dashboard() {
  return (
    <div className={styles.gridDashboardContainer}>
      <aside className={styles.asideDashboardContainer}>123</aside>

      <footer></footer>

      <nav className={styles.navDashboardContainer}>Profile</nav>
      <section className={styles.sectionDashboardContainer}>
        <div className={styles.userProfilePhotoContainer}></div>

        <div className={styles.userProfileContainer}></div>
      </section>

      <div className={styles.previewDashboardContainer}></div>
    </div>
  );
}
