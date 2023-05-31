import styles from './Card.module.css';
import { ReactNode } from 'react';

export default function Card({
  title,
  subtitle,
  children,
  backgroundColor = 'white',
}: {
  title: ReactNode;
  subtitle: ReactNode;
  children: ReactNode;
  backgroundColor?: string;
}) {
  return (
    <div className={styles.card} style={{ backgroundColor }}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.subtitle}>{subtitle}</p>
      {children}
      <strong>Mehr erfahren</strong>
    </div>
  );
}
