import { useForm } from "react-hook-form";
import { useUpdateUser } from "../../custom hooks/useUpdateUser/userUpdateUser";
import type { UserDetailsInterface } from "../../interfaces/UserDetailsInterface/UserDetailsInterface";
import styles from "./UserProfilePicture.module.css";

export function UserProfilePicture({
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
      <div className={styles.profilePictureWrapper}>
        <div className={styles.profilePictureContainer}>
          <img
            className={styles.profilePictureSVG}
            src="./camera.svg"
            alt="camera"
          />
          <p>Profile photo</p>
        </div>
        <p className={styles.profilePicturePara}>
          Upload a profile picture so companies and recruiters can recognize you
          more easily.
        </p>
      </div>
      <form className={styles.formUploadingProfilePicture}>
        <input
          className={styles.inputChangingProfilePicture}
          type="file"
          {...(register("file"),
          {
            onChange: (e) => handleFileChange(e),
          })}
        />
        <span className={styles.userProfilePictureSpan}>
          <img
            className={styles.profilePictureSVG}
            src="./camera.svg"
            alt="camera"
          />
        </span>
        <div className={styles.profilePictureAbsoluteContainer}>
          <img
            className={styles.profilePicturePluSVG}
            src="./plus.svg"
            alt="plus"
          />
        </div>
      </form>
    </>
  );
}
