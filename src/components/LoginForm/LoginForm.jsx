import { useDispatch } from 'react-redux'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { logIn } from '../../redux/auth/operations'
import css from './LoginForm.module.css'

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email format').required('Required'),
  password: Yup.string().min(7, 'Must be at least 7 characters').required('Required'),
})

export default function LoginForm() {
  const dispatch = useDispatch()

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(
      logIn({
        email: values.email,
        password: values.password,
      })
    )
    setSubmitting(false)
  }

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={css.form} autoComplete="off">
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
            Log In
          </button>
        </Form>
      )}
    </Formik>
  )
}