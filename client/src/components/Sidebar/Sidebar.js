import styles from './sidebar.module.css';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
  return (
    <nav className={styles.sidebar__Nav}>
      <div className={styles.sticky}>
        <ol>
          <li className={styles.sidebar__home}>
            <Link to="/">Home</Link>
          </li>
        </ol>
        <h1 className={styles.sidebar__h1}>PUBLIC</h1>
        <ol>
          <li className={styles.sidebar__li}>
            <Link to="/detail" className={styles.sidebar__q__icon}>
              Questions
            </Link>
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
        <h1 className={styles.sidebar__h1}>
          COLLECTIVES
          <a href="a" className={styles.sidebar__h1__icon}>
            icon
          </a>
        </h1>
        <ol>
          <li className={styles.sidebar__li}>
            <a href="a" className={styles.sidebar__ec__icon}>
              Explore Collectives
            </a>
          </li>
        </ol>
        <h1 className={styles.sidebar__h1}>
          TEAMS
          <a href="a" className={styles.sidebar__h1__icon}>
            icon
          </a>
        </h1>
        <ol>
          <li className={styles.sidebar__li}>
            <a href="a" className={styles.sidebar__cf__icon}>
              Create free Team
            </a>
          </li>
        </ol>
      </div>
    </nav>
  );
};
