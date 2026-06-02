import { Aside } from "../../components/Aside/Aside";
import { Nav } from "../../components/Nav/Nav";
import { UserPreview } from "../../components/UserPreview/UserPreview";
import { UserProfileForm } from "../../components/UserProfileForm/UserProfileForm";
import { UserProfilePicture } from "../../components/UserProfilePicture/UserProfilePicture";
import { useUserDetails } from "../../context/userDetailsContext";
import styles from "./Dashboard.module.css";

export function Dashboard() {
  const { userDetails } = useUserDetails();
  return (
    <div className={styles.gridWrapper}>
      <aside className={styles.asideContainer}>
        <Aside userDetails={userDetails ? userDetails : null} />
      </aside>

      <nav className={styles.navContainer}>
        <Nav userDetails={userDetails ? userDetails : null} />
      </nav>
      <section className={styles.profilePictureAndFormSection}>
        <div className={styles.profilePictureContainer}>
          <UserProfilePicture userDetails={userDetails ? userDetails : null} />
        </div>

        <div className={styles.userProfileForm}>
          <UserProfileForm userDetails={userDetails ? userDetails : null} />
        </div>
      </section>

      <div className={styles.previewContainer}>
        <UserPreview userDetails={userDetails ? userDetails : null} />
      </div>
    </div>
  );
}
