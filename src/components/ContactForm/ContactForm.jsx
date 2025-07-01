import { useDispatch } from 'react-redux'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { addContact } from '../../redux/contacts/operations'
import toast from 'react-hot-toast'
import css from './ContactForm.module.css'

const validationSchema = Yup.object({
  name: Yup.string().min(3, 'Must be at least 3 characters').required('Required'),
  number: Yup.string().min(3, 'Must be at least 3 characters').required('Required'),
})

export default function ContactForm() {
  const dispatch = useDispatch()

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    dispatch(addContact(values))
      .unwrap()
      .then(() => {
        toast.success('Contact added successfully!')
        resetForm()
      })
      .catch(() => {
        toast.error('Failed to add contact!')
      })
      .finally(() => {
        setSubmitting(false)
      })
  }

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={css.form} autoComplete="off">
          <label className={css.label}>
            Name
            <Field type="text" name="name" className={css.field} />
            <ErrorMessage name="name" component="span" className={css.error} />
          </label>

          <label className={css.label}>
            Number
            <Field type="tel" name="number" className={css.field} />
            <ErrorMessage name="number" component="span" className={css.error} />
          </label>

          <button type="submit" disabled={isSubmitting} className={css.button}>
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  )
}