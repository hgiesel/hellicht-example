import styles from './Card.module.css';
import { ReactNode } from 'react';

export default function Card({
  title,
  subtitle,
  children,
  className,
}: {
  title: ReactNode;
  subtitle: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`${className} ${styles.card}`}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.subtitle}>{subtitle}</p>
      {children}
      <strong>Mehr erfahren</strong>
    </div>
  );
}
