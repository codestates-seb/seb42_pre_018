/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from './header.module.css';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

export const Header = () => {
  const cx = classNames.bind(styles);
  return (
    <>
      <header className={cx('d-flex')}>
        <div className={cx('topbar--container', 'd-flex')}>
          <Link to="/" className={cx('topbar--logo', 'd-flex')}>
            <span className={cx('img_glyph')}>Stack Overflow</span>
          </Link>
          <ul className={cx('navigation', 'd-flex')}>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">For Teams</a>
            </li>
          </ul>
          <form action="" id="search" className={cx('d-flex')}>
            <div className={cx('searchbar', 'd-flex')}>
              <input type="text" placeholder="Search..." />
              <svg
                aria-hidden="true"
                className={cx('s-input-icon')}
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path d="m18 16.5-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Z"></path>
              </svg>
              {/* 돋보기 아이콘 */}
            </div>
          </form>
          <nav className={cx('d-flex')}>
            <ul className={cx('topbar--content', 'd-flex')}>
              <li>
                <Link to="/login">
                  <a href="" className={cx('login-btn')}>
                    Log in
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/signup">
                  <a href="" className={cx('signup-btn')}>
                    Sign up
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
