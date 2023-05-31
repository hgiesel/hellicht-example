import Card from './Card';
import styles from './page.module.css';

export default function App() {
  return (
    <main>
      <h1>Leistungen</h1>

      <div className={styles.cardCarousel}>
        <Card title="Think wide" subtitle="Strategy, Ideation, Consulting">
          <p>
            Wer im koplexen digitalen Umfeld erfolgreich sein will, muss das
            große Ganze verstehen.
          </p>
        </Card>

        <Card
          title="Build deep"
          subtitle="UX/UI Design, Fullstack Development, Content Creation">
          <p>
            Wir sind überzeugt: Eine gute Strategie bedarf einer noch besseren
            Umsetzung.
          </p>
        </Card>

        <Card
          title="Grow fast"
          subtitle="SEO/SEA, Social Media/Paid Data & Analytics">
          <p>
            Ein Projekt ins Leben zu rufen ist einfach, es jedoch erfolgreich
            großwerden zu sehen, ist die Königsdiziplin.
          </p>
        </Card>
      </div>
    </main>
  );
}
