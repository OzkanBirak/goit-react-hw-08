import { useDispatch } from 'react-redux'
import { deleteContact } from '../../redux/contacts/operations'
import toast from 'react-hot-toast'
import css from './Contact.module.css'

export default function Contact({ contact }) {
  const dispatch = useDispatch()

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete ${contact.name}?`)) {
      dispatch(deleteContact(contact.id))
        .unwrap()
        .then(() => {
          toast.success('Contact deleted successfully!')
        })
        .catch(() => {
          toast.error('Failed to delete contact!')
        })
    }
  }

  return (
    <div className={css.contact}>
      <div className={css.info}>
        <p className={css.name}>{contact.name}</p>
        <p className={css.number}>{contact.number}</p>
      </div>
      <button type="button" onClick={handleDelete} className={css.button}>
        Delete
      </button>
    </div>
  )
}