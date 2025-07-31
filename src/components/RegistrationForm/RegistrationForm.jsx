import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { register } from '../../redux/auth/operations';
import GlassCard from '../GlassCard/GlassCard';
import styles from './RegistrationForm.module.css';

export default function RegistrationForm() {
  const dispatch = useDispatch();
  
  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <GlassCard>
      <h2 className={styles.title}>Register</h2>
      <Formik initialValues={{ name: '', email: '', password: '' }} onSubmit={handleSubmit}>
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
            name="email" 
            type="email" 
            placeholder="Email" 
            required
          />
          <Field 
            className={styles.input} 
            name="password" 
            type="password" 
            placeholder="Password" 
            required
          />
          <button className={styles.button} type="submit">
            Register
          </button>
        </Form>
      </Formik>
    </GlassCard>
  );
} 