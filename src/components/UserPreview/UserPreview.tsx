import type { UserDetailsInterface } from "../../interfaces/UserDetailsInterface/UserDetailsInterface";
import styles from "./UserPreview.module.css";

export function UserPreview({
  userDetails,
}: {
  userDetails: UserDetailsInterface | null;
}) {
  if (userDetails)
    return (
      <>
        <div className={styles.previewFlexedContainer}>
          <img
            className={styles.previewSVG}
            src="./eye.svg"
            alt="preview your profile"
          />
          <p className={styles.previewPara}>Preview</p>
        </div>
        <p className={styles.previewParaInfo}>
          This is how your profile will appear to companies and recruiters. Make
          sure all information is accurate and up-to-date to create a strong
          impression
        </p>
        <div className={styles.previewUserInfoContainer}>
          <span className={styles.previewUserProfilePictureSpan}>
            {!userDetails.profilePicture ? (
              <img
                className={styles.defaultProfilePictureSVG}
                src="./camera.svg"
                alt="default profile picture"
              />
            ) : (
              <img
                className={styles.profilePictureSVG}
                src={userDetails.profilePicture}
                alt="user profile picture"
              />
            )}
          </span>

          <div className={styles.previewFlexUserInfoContainer}>
            <p className={styles.previewUserEmail}>{userDetails.email}</p>
            <img
              className={styles.previewSVG}
              src="./mail.svg"
              alt="click to send email to yourself"
            />
          </div>
        </div>
      </>
    );
}
