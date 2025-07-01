import { useDispatch } from 'react-redux'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { register } from '../../redux/auth/operations'
import css from './RegistrationForm.module.css'

const validationSchema = Yup.object({
  name: Yup.string().min(2, 'Must be at least 2 characters').required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  password: Yup.string().min(7, 'Must be at least 7 characters').required('Required'),
})

export default function RegistrationForm() {
  const dispatch = useDispatch()

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    )
    setSubmitting(false)
  }

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={css.form} autoComplete="off">
          <label className={css.label}>
            Username
            <Field type="text" name="name" className={css.field} />
            <ErrorMessage name="name" component="span" className={css.error} />
          </label>

          <label className={css.label}>
            Email
            <Field type="email" name="email" className={css.field} />
            <ErrorMessage name="email" component="span" className={css.error} />
          </label>

          <label className={css.label}>
            Password
            <Field type="password" name="password" className={css.field} />
            <ErrorMessage name="password" component="span" className={css.error} />
          </label>

          <button type="submit" disabled={isSubmitting} className={css.button}>
            Register
          </button>
        </Form>
      )}
    </Formik>
  )
}