import { useState } from "react";
import { useNavigate } from "react-router";
import type { UserDetailsInterface } from "../../interfaces/UserDetailsInterface/UserDetailsInterface";
import styles from "./Nav.module.css";

export function Nav({ userDetails }: { userDetails: UserDetailsInterface }) {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  const navigate = useNavigate();

  function onClickDropDown() {
    setShowDropDown((showDropDown) => !showDropDown);
  }

  function logOut() {
    sessionStorage.clear();

    void navigate("/");
  }

  return (
    <>
      <div className={styles.navContainer}>
        <img
          className={styles.navProfilePictureSVG}
          src="/user.svg"
          alt="user profile"
        />
        <p>Profile</p>
      </div>
      <div className={styles.navContainer}>
        <img
          className={styles.navProfilePictureSVG}
          src="/bell.svg"
          alt="bell"
        />
        {!userDetails?.profilePicture ? (
          <div>
            <span
              onClick={onClickDropDown}
              className={styles.navUserProfilePictureSpan}
            >
              U
            </span>
            <div
              style={{
                display: !showDropDown ? "none" : "block",
              }}
              className={styles.navDropdown}
            >
              <p className={styles.userEmail}>{userDetails?.email}</p>
              <hr />
              <p className={styles.profilePara}>Profile</p>
              <hr />
              <p onClick={logOut} className={styles.logoutPara}>
                Log out
              </p>
            </div>
          </div>
        ) : (
          <img
            className={styles.navUserProfilePictureSpan}
            src={userDetails.profilePicture}
            alt={"user profile picture"}
          />
        )}
      </div>
    </>
  );
}
