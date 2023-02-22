import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer>
      <nav className={styles.footer__nav}>
        <div className={styles.footer__nav__wrap}>
          <div>logo</div>
          <div>
            <h5 className={styles.footer__h5}>PRODUCTS</h5>
            <ul>
              <li>
                <a href="https://stackoverflow.co/teams/">Teams</a>
              </li>
              <li>
                <a href="https://stackoverflow.co/advertising/">Advertising</a>
              </li>
              <li>
                <a href="https://stackoverflow.co/collectives/">Collectives</a>
              </li>
              <li>
                <a href="https://stackoverflow.co/talent/">Talent</a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className={styles.footer__h5}>COMPANY</h5>
            <ul>
              <li>CodeStates</li>
              <li>PreProject</li>
              <li>GalMaegi</li>
              <li>018</li>
            </ul>
          </div>
          <div>
            <h5 className={styles.footer__h5}>TEAM</h5>
            <ul>
              <li>PMS</li>
              <li>LSM</li>
              <li>JSW</li>
              <li>LHG</li>
              <li>KHJ</li>
            </ul>
          </div>
        </div>
        <div>
          <ol className={styles.footer__sns}>
            <li>
              <a href="a">Notion</a>
            </li>
            <li>
              <a href="a">Github</a>
            </li>
          </ol>
        </div>
      </nav>
    </footer>
  );
};
