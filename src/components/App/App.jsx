import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { refreshUser } from '../../redux/auth/operations'
import { selectIsRefreshing } from '../../redux/auth/selectors'
import Layout from '../Layout/Layout'
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import RestrictedRoute from '../RestrictedRoute/RestrictedRoute'
import HomePage from '../../pages/Home/Home'
import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage'
import LoginPage from '../../pages/Login/Login'
import ContactsPage from '../../pages/Contacts/Contacts'
import css from './App.module.css'

export default function App() {
  const dispatch = useDispatch()
  const isRefreshing = useSelector(selectIsRefreshing)

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

  return isRefreshing ? (
    <div className={css.loader}>Refreshing user...</div>
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegistrationPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Routes>
    </Layout>
  )
}