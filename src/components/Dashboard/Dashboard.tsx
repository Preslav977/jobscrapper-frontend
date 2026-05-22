import { useContext } from "react";
import { userDetailsContext } from "../../context/userDetailsContext";
import { AsideContent } from "../AsideContent/AsideContent";
import { NavContent } from "../NavContent/NavContent";
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
          <div className={styles.userProfilePictureFlexedWrapper}>
            <div className={styles.userProfilePictureFlexedContainer}>
              <img
                className={styles.userProfilePictureSVG}
                src="./camera.svg"
                alt="camera"
              />
              <p>Profile photo</p>
            </div>
            <p className={styles.userProfilePicturePara}>
              Upload a profile picture so companies and recruiters can recognize
              you more easily.
            </p>
          </div>
          <form className={styles.formUserProfilePicture}>
            <input className={styles.userProfilePictureInput} type="file" />
            <span className={styles.userProfilePictureSpan}>
              <img
                className={styles.userProfilePictureSVGSpan}
                src="./camera.svg"
                alt="camera"
              />
            </span>
            <div className={styles.userProfilePicturePlusContainer}>
              <img
                className={styles.userProfilePicturePlus}
                src="./plus.svg"
                alt="plus"
              />
            </div>
          </form>
        </div>

        <div className={styles.userProfileFormContainer}></div>
      </section>

      <div className={styles.previewDashboardContainer}></div>
    </div>
  );
}
