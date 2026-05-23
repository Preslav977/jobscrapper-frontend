import { useContext } from "react";
import { userDetailsContext } from "../../context/userDetailsContext";
import { AsideContent } from "../AsideContent/AsideContent";
import { NavContent } from "../NavContent/NavContent";
import { ProfileFormContent } from "../ProfileFormContent/ProfileFormContent";
import { ProfilePictureContent } from "../ProfilePictureContent/ProfilePictureContent";
import styles from "./Dashboard.module.css";

export function Dashboard() {
  const { userDetails } = useContext(userDetailsContext)!;

  return (
    <div className={styles.gridDashboardContainer}>
      <aside className={styles.asideDashboardContainer}>
        <AsideContent userDetails={userDetails!} />
      </aside>

      <nav className={styles.navDashboardContainer}>
        <NavContent userDetails={userDetails!} />
      </nav>
      <section className={styles.sectionDashboardContainer}>
        <div className={styles.userProfilePictureContainer}>
          <ProfilePictureContent userDetails={userDetails!} />
        </div>

        <div className={styles.userProfileFormContainer}>
          <ProfileFormContent userDetails={userDetails!} />
        </div>
      </section>

      <div className={styles.previewDashboardContainer}></div>
    </div>
  );
}
