import styles from './GlassCard.module.css';

export default function GlassCard({ children }) {
  return <div className={styles.card}>{children}</div>;
} 