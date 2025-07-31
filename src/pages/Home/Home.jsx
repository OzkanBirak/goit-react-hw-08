import styles from './Home.module.css';
import GlassCard from '../../components/GlassCard/GlassCard';

export default function Home() {
  return (
    <GlassCard>
      <h1 className={styles.title}>Welcome to the Glass Effect Contact Book!</h1>
      <p className={styles.description}>
        Register or log in to manage your personal contacts securely with our beautiful glass-morphism interface.
      </p>
      <div className={styles.features}>
        <p className={styles.feature}>✨ Beautiful glass effect design</p>
        <p className={styles.feature}>🔒 Secure user authentication</p>
        <p className={styles.feature}>📱 Responsive design for all devices</p>
        <p className={styles.feature}>⚡ Fast and intuitive interface</p>
      </div>
    </GlassCard>
  );
} 