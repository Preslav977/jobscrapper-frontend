import { Link } from "react-router";
import styles from "./ErrorPage.module.css";

export function ErrorPage() {
  return (
    <div className={styles.errorPageContainer}>
      <img
        className={styles.errorPageSVG}
        src="./error.svg"
        alt="Error no matching route"
      />
      <p className={styles.errorPagePara}>
        You accessed a secret route for the application!
      </p>
      <Link className={styles.errorPageAnchor} to={"/"}>
        Click here to go back to HomePage
      </Link>
    </div>
  );
}
