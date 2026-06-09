import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <h3 className={styles.footerHeader}>JobScrapper</h3>

      <p>© {new Date().getFullYear()} year. All rights reserved.</p>
    </footer>
  );
}
