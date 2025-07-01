import LoginForm from '../../components/LoginForm/LoginForm'
import css from './Login.module.css'

export default function LoginPage() {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <h1 className={css.title}>Log In</h1>
        <LoginForm />
      </div>
    </div>
  )
}