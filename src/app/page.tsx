import Card from './Card';
import ContactForm from './ContactForm';
import Footer from './Footer';
import styles from './page.module.css';
import Image from 'next/image';

export default async function App() {
  return (
    <>
      <main>
        <h1 className={`text-on-surface-50-900-token ${styles.title}`}>
          Leistungen
        </h1>

        <div className={styles.cardCarousel}>
          <Card
            title="Think wide"
            subtitle="Strategy, Ideation, Consulting"
            className="bg-primary-token"
          >
            <p>
              Wer im koplexen digitalen Umfeld erfolgreich sein will, muss das
              große Ganze verstehen.
            </p>
          </Card>

          <Card
            title="Build deep"
            subtitle="UX/UI Design, Fullstack Development, Content Creation"
            className="bg-secondary-token"
          >
            <p>
              Wir sind überzeugt: Eine gute Strategie bedarf einer noch besseren
              Umsetzung.
            </p>
          </Card>

          <Card
            title="Grow fast"
            subtitle="SEO/SEA, Social Media/Paid Data & Analytics"
            className="bg-surface-50-900-token border-token"
          >
            class
            <p>
              Ein Projekt ins Leben zu rufen ist einfach, es jedoch erfolgreich
              großwerden zu sehen, ist die Königsdiziplin.
            </p>
          </Card>
        </div>

        <div className={styles.contact}>
          <div className={styles.contactImage}>
            <Image
              src="/images/image-contact.jpg"
              alt="Contact"
              width={1440}
              height={960}
              style={{
                height: '100%',
                width: '100%',
                position: 'relative',
              }}
            />
            <Image
              src="/images/image-dot.svg"
              alt="Contact"
              width={100}
              height={100}
              style={{
                position: 'absolute',
                top: 0,
                left: 50,
              }}
            />
          </div>
          <ContactForm />
        </div>
      </main>

      <Footer />
    </>
  );
}
