import { useForm } from "react-hook-form";
import { useUpdateUser } from "../../custom hooks/useUpdateUser/userUpdateUser";
import type { UserDetailsInterface } from "../../interfaces/UserDetailsInterface/UserDetailsInterface";
import styles from "./ProfilePictureContent.module.css";

export function ProfilePictureContent({
  userDetails,
}: {
  userDetails: UserDetailsInterface;
}) {
  const { register } = useForm();

  const { mutate, error } = useUpdateUser();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const formData = new FormData();

      formData.append("file", file);

      mutate({ formData, id: userDetails.id });
    }
  };

  return (
    <>
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
          Upload a profile picture so companies and recruiters can recognize you
          more easily.
        </p>
      </div>
      <form className={styles.formUserProfilePicture}>
        <input
          className={styles.userProfilePictureInput}
          type="file"
          {...(register("file"),
          {
            onChange: (e) => handleFileChange(e),
          })}
        />
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
    </>
  );
}
