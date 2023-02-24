import styles from './ErrorPage.module.css';
import errorimg from '../assets/images/error.png';

export const ErrorPage = () => {
  return (
    <main className={styles.errorpage}>
      <div className={styles.errorpage__wrap}>
        <div className={styles.errorpage__img}>
          <img src={errorimg} alt=""></img>
        </div>
        <div className={styles.errorpage__words}>
          <div className={styles.errorpage__header}>
            <p>Page not found</p>
          </div>
          <div className={styles.errorpage__why}>
            <p>
              we{`'`}re Sorry,we coundn{`'`}t find the page you requested.
            </p>
          </div>
          <div className={styles.errorpage__check}>
            <p>Try searching for similar questions</p>
            <p>Browese our recent questions</p>
            <p>Browse our popular tags</p>
            <p>
              If you feel something is missing that should be here, contact us.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};
