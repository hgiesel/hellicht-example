import styles from './ContactForm.module.css';

export type Country = string;

async function getCountries() {
  'use server';

  const response = await fetch(
    'https://restcountries.com/v3.1/region/Europe?fields=name',
  );
  const json = await response.json();
  const countries: Country[] = json.map((country: any) => country.name.common);
  return countries;
}

export default async function ContactForm() {
  const countries = await getCountries();
  countries.sort();

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
      <label>
        <div className={styles.small}>
          <span>Land</span>
          <small>optional</small>
        </div>
        <select name="country" placeholder="Land wählen...">
          <option value="" selected>
            Land wählen...
          </option>

          {countries.map((country: Country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </label>
      <label>
        <div>Nachricht</div>
        <input
          className={styles.textInput}
          name="email"
          type="text"
          placeholder="Deine Nachricht..."
        />
      </label>
    </div>
  );
}
