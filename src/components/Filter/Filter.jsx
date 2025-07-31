import { useDispatch } from 'react-redux';
import { setNameFilter } from '../../redux/filters/slice';
import GlassCard from '../GlassCard/GlassCard';
import styles from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  
  const handleChange = e => {
    dispatch(setNameFilter(e.target.value));
  };

  return (
    <GlassCard>
      <h3 className={styles.title}>Find Contacts</h3>
      <div className={styles.filter}>
        <input
          className={styles.input}
          type="text"
          placeholder="Search by name or phone number..."
          onChange={handleChange}
        />
      </div>
    </GlassCard>
  );
} 