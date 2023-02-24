import styles from './loginpage.css';
import classNames from 'classnames/bind';
import SocialLogin from '../components/Buttons/SocialLogin';

function LoginPage() {
  const cx = classNames.bind(styles);
  return (
    <div className={cx('container', 'd-flex')}>
      <div className={cx('flex--item')}>
        <div className={cx('logo')}></div>
        <SocialLogin>Log in</SocialLogin>
        <div className={cx('form--container')}></div>
        <div className={cx('links')}></div>
      </div>
    </div>
  );
}

export default LoginPage;
