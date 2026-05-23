import { useContext } from "react";
import { userDetailsContext } from "../../context/userDetailsContext";
import { Aside } from "../Aside/Aside";
import { Nav } from "../Nav/Nav";
import { UserProfileForm } from "../UserProfileForm/UserProfileForm";
import { UserProfilePicture } from "../UserProfilePicture/UserProfilePicture";
import styles from "./Dashboard.module.css";

export function Dashboard() {
  const { userDetails } = useContext(userDetailsContext)!;

  return (
    <div className={styles.gridWrapper}>
      <aside className={styles.asideContainer}>
        <Aside userDetails={userDetails!} />
      </aside>

      <nav className={styles.navContainer}>
        <Nav userDetails={userDetails!} />
      </nav>
      <section className={styles.profilePictureAndFormSection}>
        <div className={styles.profilePictureContainer}>
          <UserProfilePicture userDetails={userDetails!} />
        </div>

        <div className={styles.userProfileForm}>
          <UserProfileForm userDetails={userDetails!} />
        </div>
      </section>

      <div className={styles.previewContainer}></div>
    </div>
  );
}
