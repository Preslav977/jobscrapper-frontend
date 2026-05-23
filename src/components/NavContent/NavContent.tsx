import { useState } from "react";
import { useNavigate } from "react-router";
import type { UserDetailsInterface } from "../../interfaces/UserDetailsInterface/UserDetailsInterface";
import styles from "./NavContent.module.css";

export function NavContent({
  userDetails,
}: {
  userDetails: UserDetailsInterface;
}) {
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
      <div className={styles.navDashboardContent}>
        <img
          className={styles.navDashboardSVG}
          src="/user.svg"
          alt="user profile"
        />
        <p>Profile</p>
      </div>
      <div className={styles.navDashboardContent}>
        <img className={styles.navDashboardSVG} src="/bell.svg" alt="bell" />
        {!userDetails?.profilePicture ? (
          <div>
            <span onClick={onClickDropDown} className={styles.userProfileSpan}>
              U
            </span>
            <div
              style={{
                display: !showDropDown ? "none" : "block",
              }}
              className={styles.navDashboardDropDown}
            >
              <p className={styles.userEmail}>{userDetails?.email}</p>
              <hr />
              <p className={styles.userProfilePara}>Profile</p>
              <hr />
              <p onClick={logOut} className={styles.userLogOutPara}>
                Log out
              </p>
            </div>
          </div>
        ) : (
          <img
            className={styles.userProfileSpan}
            src={userDetails.profilePicture}
            alt={"user profile picture"}
          />
        )}
      </div>
    </>
  );
}
