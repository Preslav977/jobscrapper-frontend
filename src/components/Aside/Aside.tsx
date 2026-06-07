import { Link, useLocation } from "react-router";
import { useIsUserLoggedIn } from "../../context/isUserLoggedInContext";
import type { UserDetailsInterface } from "../../interfaces/UserDetailsInterface/UserDetailsInterface";
import styles from "./Aside.module.css";

export function Aside({
  userDetails,
}: {
  userDetails: UserDetailsInterface | null;
}) {
  const location = useLocation();

  const { pathname } = location;

  const { isUserLoggedIn } = useIsUserLoggedIn();

  if (userDetails)
    return (
      <>
        <div className={styles.asideWrapper}>
          {!userDetails.profilePicture ? (
            <span className={styles.userProfilePictureSpan}></span>
          ) : (
            <img
              className={styles.userProfilePictureSpan}
              src={userDetails.profilePicture}
              alt="user profile picture around span"
            />
          )}
          <div className={styles.asideFlexedContainer}>
            <div className={styles.asideFlexedNamesContainer}>
              <p>{!userDetails.firstName ? "null" : userDetails.firstName}</p>
              <p>{!userDetails.lastName ? "null" : userDetails.lastName}</p>
            </div>
            <a className={styles.asideUserEmail} href={userDetails.email}>
              {userDetails.email}
            </a>
          </div>
        </div>
        <div>
          <div className={styles.asideHomeSpan}>
            <span>Home</span>
          </div>
          <Link
            style={{
              backgroundColor: pathname === "/" ? "lightgray" : "",
            }}
            to={"/"}
            className={styles.asideMenuContainer}
          >
            <img className={styles.asideMenuSVG} src="./home.svg" alt="home" />
            <span className={styles.asideHomeSpan}>Home</span>
          </Link>
          <Link
            style={{
              backgroundColor: pathname === "/dashboard" ? "lightgray" : "",
            }}
            to={"/dashboard"}
            className={styles.asideMenuContainer}
          >
            <img
              className={styles.asideMenuSVG}
              src="./user.svg"
              alt="user profile"
            />
            <p>Profile</p>
          </Link>
          {isUserLoggedIn && userDetails.role === "ADMIN" ? (
            <>
              <div className={styles.asideCreateSpan}>
                <span>Create</span>
              </div>
              <Link
                style={{
                  backgroundColor:
                    pathname === "/createCompany" ? "lightgray" : "",
                }}
                to={"/createCompany"}
                className={styles.asideMenuContainer}
              >
                <img
                  className={styles.asideMenuSVG}
                  src="./plus.svg"
                  alt="plus"
                />
                <span className={styles.asideCreateSpan}>Create Company</span>
              </Link>
            </>
          ) : (
            ""
          )}
        </div>
      </>
    );
}
