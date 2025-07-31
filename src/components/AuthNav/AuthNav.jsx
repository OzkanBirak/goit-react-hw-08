import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <nav className={styles.nav}>
      <NavLink className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`} to="/register">
        Register
      </NavLink>
      <NavLink className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`} to="/login">
        Login
      </NavLink>
    </nav>
  );
} 