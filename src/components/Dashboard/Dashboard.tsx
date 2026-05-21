import { useContext } from "react";
import { userDetailsContext } from "../../context/userDetailsContext";
import styles from "./Dashboard.module.css";

export function Dashboard() {
  const { userDetails } = useContext(userDetailsContext)!;

  return (
    <div className={styles.gridDashboardContainer}>
      <aside className={styles.asideDashboardContainer}>
        <div className={styles.asideUserProfileWrapper}>
          {!userDetails?.profilePicture ? (
            <span className={styles.userProfileSpan}></span>
          ) : (
            <img
              src={userDetails.profilePicture}
              alt={"user profile picture"}
            />
          )}
          <div className={styles.userFlexedColumnWrapper}>
            <div className={styles.userFlexedContainer}>
              <p>{!userDetails?.firstName ? "null" : userDetails?.firstName}</p>
              <p>{!userDetails?.lastName ? "null" : userDetails?.lastName}</p>
            </div>
            <p>{userDetails?.email}</p>
          </div>
        </div>
        <div className={styles.asideMenuWrapper}>
          <div className={styles.homeSpanContainer}>
            <span>Home</span>
          </div>
          <div className={styles.asideMenuFlexedContainer}>
            <img className={styles.asideMenuSVG} src="./home.svg" alt="home" />
            <span className={styles.homeSpan}>Home</span>
          </div>
          <div className={styles.asideMenuFlexedContainer}>
            <img
              className={styles.asideMenuSVG}
              src="./user.svg"
              alt="user profile"
            />
            <p>Profile</p>
          </div>
        </div>
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
