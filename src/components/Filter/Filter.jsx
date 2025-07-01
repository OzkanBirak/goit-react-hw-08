import { useSelector, useDispatch } from 'react-redux'
import { changeFilter } from '../../redux/filters/slice'
import { selectNameFilter } from '../../redux/filters/selectors'
import css from './Filter.module.css'

export default function Filter() {
  const dispatch = useDispatch()
  const filter = useSelector(selectNameFilter)

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value))
  }

  return (
    <div className={css.wrapper}>
      <label className={css.label}>
        Find contacts by name or phone
        <input
          type="text"
          value={filter}
          onChange={handleFilterChange}
          className={css.input}
          placeholder="Search contacts..."
        />
      </label>
    </div>
  )
}