import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { logIn } from '../../redux/auth/operations';
import GlassCard from '../GlassCard/GlassCard';
import styles from './LoginForm.module.css';

export default function LoginForm() {
  const dispatch = useDispatch();
  
  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    resetForm();
  };

  return (
    <GlassCard>
      <h2 className={styles.title}>Login</h2>
      <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
        <Form className={styles.form}>
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
            Login
          </button>
        </Form>
      </Formik>
    </GlassCard>
  );
} 