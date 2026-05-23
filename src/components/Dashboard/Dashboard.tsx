import { useContext } from "react";
import { userDetailsContext } from "../../context/userDetailsContext";
import { Aside } from "../Aside/Aside";
import { Nav } from "../Nav/Nav";
import { UserPreview } from "../UserPreview/UserPreview";
import { UserProfileForm } from "../UserProfileForm/UserProfileForm";
import { UserProfilePicture } from "../UserProfilePicture/UserProfilePicture";
import styles from "./Dashboard.module.css";

export function Dashboard() {
  const { userDetails } = useContext(userDetailsContext)!;
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
