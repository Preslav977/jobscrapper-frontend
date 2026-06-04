import { useForm } from "react-hook-form";
import { useUpdateUser } from "../../custom hooks/useUpdateUser/userUpdateUser";
import type { UserDetailsInterface } from "../../interfaces/UserDetailsInterface/UserDetailsInterface";
import { ErrorComponent } from "../ErrorComponent/ErrorComponen";
import styles from "./UserProfilePicture.module.css";

export function UserProfilePicture({
  userDetails,
}: {
  userDetails: UserDetailsInterface | null;
}) {
  const { register } = useForm();

  const { mutate, error } = useUpdateUser();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const formData = new FormData();

      formData.append("file", file);

      mutate({ formData, id: userDetails ? userDetails.id : 0 });
    }
  };

  if (error) return <ErrorComponent error={error} />;

  if (userDetails)
    return (
      <>
        <div className={styles.profilePictureWrapper}>
          <div className={styles.profilePictureContainer}>
            <img
              className={styles.defaultProfilePictureSVG}
              src="./camera.svg"
              alt="default profile picture"
            />
            <p>Profile photo</p>
          </div>
          <p className={styles.profilePicturePara}>
            Upload a profile picture so companies and recruiters can recognize
            you more easily.
          </p>
        </div>
        <form className={styles.formUploadingProfilePicture}>
          <label htmlFor="file">
            <input
              className={styles.inputChangingProfilePicture}
              type="file"
              aria-label="file"
              {...(register("file"),
              {
                onChange: (e) => handleFileChange(e),
              })}
            />
          </label>
          <span className={styles.userProfilePictureSpan}>
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
          <div className={styles.profilePictureAbsoluteContainer}>
            {!userDetails.profilePicture ? (
              <img
                className={styles.profilePicturePluSVG}
                src="./plus.svg"
                alt="click to upload image"
              />
            ) : (
              <img src="./pencil.svg" alt="click to change image" />
            )}
          </div>
        </form>
      </>
    );
}
