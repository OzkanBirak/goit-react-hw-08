import { Suspense } from 'react';
import AppBar from '../AppBar/AppBar';
import css from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={css.container}>
      <AppBar />
      <main className={css.main}>
        <Suspense fallback={<div>Loading...</div>}>
          {children}
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;