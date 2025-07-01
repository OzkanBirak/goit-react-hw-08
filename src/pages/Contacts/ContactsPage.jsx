import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/contacts/operations';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import css from './ContactsPage.module.css';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Contacts</h1>
      <ContactForm />
      <h2 className={css.subtitle}>Find contacts by name</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default ContactsPage;