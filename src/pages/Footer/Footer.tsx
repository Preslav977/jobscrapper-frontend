import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <h3 className={styles.footerHeader}>JobScraper</h3>

      <p className={styles.footerPara}>
        © {new Date().getFullYear()} year. All rights reserved.
      </p>
    </footer>
  );
}
