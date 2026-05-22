import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { userDetailsContext } from "../../context/userDetailsContext";
import { useUpdateUser } from "../../custom hooks/useUpdateUser/userUpdateUser";
import { AsideContent } from "../AsideContent/AsideContent";
import { NavContent } from "../NavContent/NavContent";
import styles from "./Dashboard.module.css";

export function Dashboard() {
  const { userDetails } = useContext(userDetailsContext)!;

  const { mutate, error } = useUpdateUser();

  const { register } = useForm();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const formData = new FormData();

      formData.append("file", file);

      mutate({ formData, id: userDetails!.id });
    }
  };

  const onSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    mutate({ formData: new FormData(event.target), id: userDetails!.id });
  };

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
        </div>

        <div className={styles.userProfileFormContainer}>
          <form onSubmit={onSubmit} className={styles.formContainer}>
            <div className={styles.formFlexedImgContainer}>
              <img
                className={styles.userProfilePictureSVGSpan}
                src="./user.svg"
                alt="user"
              />
              <p>Your Profile</p>
            </div>
            <p className={styles.formParaInfo}>
              Fill in your basic info to complete your profile and help us
              tailor your experience.
            </p>
            <label className={styles.formLabel} htmlFor="firstName">
              First Name
              <input
                type="text"
                id="firstName"
                aria-label="firstName"
                {...register("firstName")}
                placeholder="First Name"
              />
            </label>
            <label className={styles.formLabel} htmlFor="lastName">
              Last Name
              <input
                type="text"
                id="lastName"
                aria-label="lastName"
                placeholder="Last Name"
              />
            </label>

            <label className={styles.formLabel} htmlFor="location">
              Last Name
              <input
                type="text"
                id="location"
                aria-label="location"
                placeholder="City, Country"
              />
            </label>

            <label className={styles.formLabel} htmlFor="phoneNumber">
              Phone
              <input
                type="tel"
                id="phoneNumber"
                aria-label="phoneNumber"
                placeholder="Phone Number"
              />
            </label>

            <label className={styles.formLabel} htmlFor="linkedInURL">
              LinkedIn URL
              <input
                type="text"
                id="linkedInURL"
                aria-label="linkedInURL"
                placeholder="https://www.linkedin.com/in/username"
              />
            </label>

            <label className={styles.formLabel} htmlFor="githubURL">
              GitHub URL
              <input
                type="text"
                id="githubURL"
                aria-label="githubURL"
                placeholder="https://github.com/username"
              />
            </label>

            <label className={styles.formLabel} htmlFor="portfolioURL">
              Portfolio URL
              <input
                type="text"
                id="portfolioURL"
                aria-label="portfolioURL"
                placeholder="Your Portfolio Website"
              />
            </label>

            <button className={styles.submitButton} type="submit">
              Save
            </button>
          </form>
        </div>
      </section>

      <div className={styles.previewDashboardContainer}></div>
    </div>
  );
}
