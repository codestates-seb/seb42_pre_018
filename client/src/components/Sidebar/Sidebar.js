import styles from './sidebar.module.css';

export const Sidebar = () => {
  return (
    <nav className={styles.sidebar__Nav}>
      <ol>
        <li className={styles.sidebar__li}>
          <a href="a">Home</a>
        </li>
      </ol>
      <h1>PUBLIC</h1>
      <ol>
        <li className={styles.sidebar__li}>
          <a href="a">Questions</a>
        </li>
        <li className={styles.sidebar__li}>
          <a href="https://stackoverflow.com/tags">Tags</a>
        </li>
        <li className={styles.sidebar__li}>
          <a href="a">Users</a>
        </li>
        <li className={styles.sidebar__li}>
          <a href="https://stackoverflow.com/jobs/companies">Companies</a>
        </li>
      </ol>
    </nav>
  );
};
