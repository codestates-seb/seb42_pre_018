/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from './loginpage.module.css';
import classNames from 'classnames/bind';
import SocialLogin from '../components/Buttons/SocialLogin';

function LoginPage() {
  const cx = classNames.bind(styles);
  return (
    <main>
      <div className={cx('container', 'd-flex')}>
        <div className={cx('flex--item')}>
          <div className={cx('logo')}>
            <svg
              aria-hidden="true"
              className="native svg-icon iconLogoGlyphMd"
              width="32"
              height="37"
              viewBox="0 0 32 37"
            >
              <path d="M26 33v-9h4v13H0V24h4v9h22Z" fill="#BCBBBB"></path>
              <path
                d="m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z"
                fill="#F48024"
              ></path>
            </svg>
          </div>
          <div className={cx('social')}>
            <SocialLogin>Log in</SocialLogin>
          </div>
          <div className={cx('form--container')}>
            <form id={cx('signup-form')} className={cx('d-flex')} action="">
              <div className={cx('d-flex', 'signup-box')}>
                <label htmlFor="email">Email</label>
                <div className={cx('d-flex', 'signup-item')}>
                  <input type="email" name="email" />
                  <svg
                    aria-hidden="true"
                    className={cx('hidden')}
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                  >
                    <path d="M9 17c-4.36 0-8-3.64-8-8 0-4.36 3.64-8 8-8 4.36 0 8 3.64 8 8 0 4.36-3.64 8-8 8ZM8 4v6h2V4H8Zm0 8v2h2v-2H8Z"></path>
                  </svg>
                  <p className={cx('hidden')}>이메일 에러 메시지</p>
                </div>
              </div>
              <div className={cx('d-flex', 'signup-box')}>
                <label htmlFor="password">Password</label>
                <div className={cx('d-flex', 'signup-item')}>
                  <input type="password" name="password" />
                  <svg
                    aria-hidden="true"
                    className={cx('hidden')}
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                  >
                    <path d="M9 17c-4.36 0-8-3.64-8-8 0-4.36 3.64-8 8-8 4.36 0 8 3.64 8 8 0 4.36-3.64 8-8 8ZM8 4v6h2V4H8Zm0 8v2h2v-2H8Z"></path>
                  </svg>
                  <p className={cx('hidden')}>비번 에러 메시지</p>
                </div>
              </div>
              <div className={cx('d-flex')}>
                <button className={cx('signup-btn')}>Log in</button>
              </div>
            </form>
          </div>
          <div className={cx('links')}>
            <div className={cx('signup-caption')}>
              <p>
                Don&apos;t have an account? <a href="#">Sign up</a>
              </p>
              <p>
                Are you an employer? <a href="#">Sign up on Talent</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default LoginPage;
