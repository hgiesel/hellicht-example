import styles from './Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.field}>
      <h1>Kontakt</h1>
      <label>
        <div>E-Mail-Adresse</div>
        <input
          className={styles.textInput}
          type="text"
          placeholder="Deine E-Mail-Adresse"
        />
      </label>
    </div>
  );
}
