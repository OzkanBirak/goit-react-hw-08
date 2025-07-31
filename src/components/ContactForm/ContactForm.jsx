import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { addContact } from '../../redux/contacts/operations';
import GlassCard from '../GlassCard/GlassCard';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const dispatch = useDispatch();
  
  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <GlassCard>
      <h2 className={styles.title}>Add Contact</h2>
      <Formik initialValues={{ name: '', number: '' }} onSubmit={handleSubmit}>
        <Form className={styles.form}>
          <Field 
            className={styles.input} 
            name="name" 
            type="text" 
            placeholder="Name" 
            required
          />
          <Field 
            className={styles.input} 
            name="number" 
            type="tel" 
            placeholder="Phone Number" 
            required
          />
          <button className={styles.button} type="submit">
            Add Contact
          </button>
        </Form>
      </Formik>
    </GlassCard>
  );
} 