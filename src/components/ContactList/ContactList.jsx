import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import Contact from '../Contact/Contact';
import GlassCard from '../GlassCard/GlassCard';
import styles from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <GlassCard>
      <h3 className={styles.title}>Contacts</h3>
      <div className={styles.list}>
        {contacts.length === 0 ? (
          <p className={styles.empty}>No contacts found. Add your first contact!</p>
        ) : (
          contacts.map(contact => <Contact key={contact.id} contact={contact} />)
        )}
      </div>
    </GlassCard>
  );
} 