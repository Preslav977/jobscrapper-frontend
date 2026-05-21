import { Link, useLocation } from "react-router";
import type { UserDetailsInterface } from "../../interfaces/UserDetailsInterface/UserDetailsInterface";
import styles from "./AsideContent.module.css";

export function AsideContent({
  userDetails,
}: {
  userDetails: UserDetailsInterface;
}) {
  const location = useLocation();

  const { pathname } = location;
  return (
    <>
      <div className={styles.asideUserProfileWrapper}>
        {!userDetails?.profilePicture ? (
          <span className={styles.userProfileSpan}></span>
        ) : (
          <img src={userDetails.profilePicture} alt={"user profile picture"} />
        )}
        <div className={styles.userFlexedColumnWrapper}>
          <div className={styles.userFlexedContainer}>
            <p>{!userDetails?.firstName ? "null" : userDetails?.firstName}</p>
            <p>{!userDetails?.lastName ? "null" : userDetails?.lastName}</p>
          </div>
          <a className={styles.userDetailsEmail} href={userDetails.email}>
            {userDetails?.email}
          </a>
        </div>
      </div>
      <div className={styles.asideMenuWrapper}>
        <div className={styles.homeSpanContainer}>
          <span>Home</span>
        </div>
        <Link
          style={{
            backgroundColor: pathname === "/" ? "lightgray" : "",
          }}
          to={"/"}
          className={styles.asideMenuFlexedContainer}
        >
          <img className={styles.asideMenuSVG} src="./home.svg" alt="home" />
          <span className={styles.homeSpan}>Home</span>
        </Link>
        <Link
          style={{
            backgroundColor: pathname === "/dashboard" ? "lightgray" : "",
          }}
          to={"/dashboard"}
          className={styles.asideMenuFlexedContainer}
        >
          <img
            className={styles.asideMenuSVG}
            src="./user.svg"
            alt="user profile"
          />
          <p>Profile</p>
        </Link>
      </div>
    </>
  );
}
