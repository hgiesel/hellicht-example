import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a className={styles.link}>Datenschutz</a>
      <a className={styles.link}>Impressum</a>
    </footer>
  );
}
