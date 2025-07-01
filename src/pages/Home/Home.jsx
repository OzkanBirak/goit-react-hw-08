import css from './Home.module.css'

export default function HomePage() {
  return (
    <div className={css.container}>
      <div className={css.hero}>
        <h1 className={css.title}>Welcome to Contact Book</h1>
        <p className={css.description}>
          Manage your contacts efficiently with our simple and intuitive contact book application.
        </p>
        <div className={css.features}>
          <div className={css.feature}>
            <h3>Secure</h3>
            <p>Your contacts are protected with JWT authentication</p>
          </div>
          <div className={css.feature}>
            <h3>Fast</h3>
            <p>Quick search and filtering to find contacts instantly</p>
          </div>
          <div className={css.feature}>
            <h3>Simple</h3>
            <p>Clean and easy-to-use interface</p>
          </div>
        </div>
      </div>
    </div>
  )
}