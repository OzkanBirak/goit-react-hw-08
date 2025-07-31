import styles from './Layout.module.css';
import AppBar from '../AppBar/AppBar';

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <AppBar />
      <main className={styles.main}>{children}</main>
    </div>
  );
} 