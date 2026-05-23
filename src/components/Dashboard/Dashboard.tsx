import { useContext } from "react";
import { userDetailsContext } from "../../context/userDetailsContext";
import { Aside } from "../Aside/Aside";
import { Nav } from "../Nav/Nav";
import { ProfileFormContent } from "../ProfileFormContent/ProfileFormContent";
import { UserProfilePicture } from "../UserProfilePicture/UserProfilePicture";
import styles from "./Dashboard.module.css";

export function Dashboard() {
  const { userDetails } = useContext(userDetailsContext)!;

  return (
    <div className={styles.gridDashboardContainer}>
      <aside className={styles.asideDashboardContainer}>
        <Aside userDetails={userDetails!} />
      </aside>

      <nav className={styles.navDashboardContainer}>
        <Nav userDetails={userDetails!} />
      </nav>
      <section className={styles.sectionDashboardContainer}>
        <div className={styles.userProfilePictureContainer}>
          <UserProfilePicture userDetails={userDetails!} />
        </div>

        <div className={styles.userProfileFormContainer}>
          <ProfileFormContent userDetails={userDetails!} />
        </div>
      </section>

      <div className={styles.previewDashboardContainer}></div>
    </div>
  );
}
