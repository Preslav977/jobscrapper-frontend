import { useForm } from "react-hook-form";
import { useUpdateUser } from "../../custom hooks/useUpdateUser/userUpdateUser";
import type { UserDetailsInterface } from "../../interfaces/UserDetailsInterface/UserDetailsInterface";
import styles from "./ProfileFormContent.module.css";

export function UserProfileForm({
  userDetails,
}: {
  userDetails: UserDetailsInterface;
}) {
  const { register } = useForm();

  const { mutate, error } = useUpdateUser();

  const onSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    mutate({ formData: new FormData(event.target), id: userDetails.id });
  };

  return (
    <>
      <form onSubmit={onSubmit} className={styles.profileFormContainer}>
        <div className={styles.profileFormUserContainer}>
          <img
            className={styles.userProfilePictureSpan}
            src="./user.svg"
            alt="user"
          />
          <p>Your Profile</p>
        </div>
        <p className={styles.paraInfo}>
          Fill in your basic info to complete your profile and help us tailor
          your experience.
        </p>
        <label className={styles.profileFormLabel} htmlFor="firstName">
          First Name
          <input
            type="text"
            id="firstName"
            aria-label="firstName"
            {...register("firstName")}
            placeholder="First Name"
          />
        </label>
        <label className={styles.profileFormLabel} htmlFor="lastName">
          Last Name
          <input
            type="text"
            id="lastName"
            aria-label="lastName"
            {...register("lastName")}
            placeholder="Last Name"
          />
        </label>

        <label className={styles.profileFormLabel} htmlFor="location">
          Last Name
          <input
            type="text"
            id="location"
            aria-label="location"
            {...register("location")}
            placeholder="City, Country"
          />
        </label>

        <label className={styles.profileFormLabel} htmlFor="phoneNumber">
          Phone
          <input
            type="tel"
            id="phoneNumber"
            aria-label="phoneNumber"
            {...register("phoneNumber")}
            placeholder="Phone Number"
          />
        </label>

        <label className={styles.profileFormLabel} htmlFor="linkedInURL">
          LinkedIn URL
          <input
            type="text"
            id="linkedInURL"
            aria-label="linkedInURL"
            {...register("linkedInURL")}
            placeholder="https://www.linkedin.com/in/username"
          />
        </label>

        <label className={styles.profileFormLabel} htmlFor="githubURL">
          GitHub URL
          <input
            type="text"
            id="githubURL"
            aria-label="githubURL"
            {...register("githubURL")}
            placeholder="https://github.com/username"
          />
        </label>

        <label className={styles.profileFormLabel} htmlFor="portfolioURL">
          Portfolio URL
          <input
            type="text"
            id="portfolioURL"
            aria-label="portfolioURL"
            {...register("portfolioURL")}
            placeholder="Your Portfolio Website"
          />
        </label>

        <button className={styles.profileFormSubmitBtn} type="submit">
          Save
        </button>
      </form>
    </>
  );
}
