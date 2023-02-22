import styles from './rightsidebar.module.css';

export const RightSidebar = () => {
  return (
    <div className={styles.rightsidebar}>
      <article className={styles.rightsidebar__article}>
        <h3>The OverFlow Blog</h3>
        <ul>
          <li>
            <span className={styles.rightsidebar__write__icon}>i</span>
            <a href="https://stackoverflow.blog/2023/02/19/developer-with-adhd-youre-not-alone/?cb=1&_ga=2.198185318.857408368.1676866636-876088019.1676866486">
              Are clouds having their on-prem moment?
            </a>
          </li>
          <li>
            <span className={styles.rightsidebar__write__icon}>i</span>
            <a href="https://stackoverflow.blog/2023/02/19/developer-with-adhd-youre-not-alone/?cb=1&_ga=2.198185318.857408368.1676866636-876088019.1676866486">
              Authorization on Rails (Ep. 540)
            </a>
          </li>
        </ul>
        <h3>Featured on Meta</h3>
        <ul>
          <li>
            <span className={styles.rightsidebar__write__icon}>i</span>
            <a href="https://stackoverflow.blog/2023/02/19/developer-with-adhd-youre-not-alone/?cb=1&_ga=2.198185318.857408368.1676866636-876088019.1676866486">
              We&apos;ve added a &quot;Necessary cookies only&quot; option to
              the cookie consent popup
            </a>
          </li>
          <li>
            <span className={styles.rightsidebar__write__icon}>i</span>
            <a href="https://stackoverflow.blog/2023/02/19/developer-with-adhd-youre-not-alone/?cb=1&_ga=2.198185318.857408368.1676866636-876088019.1676866486">
              Planned Imgur Maintenance for Thursday, February 23rd 00:00-01:00
              UTC
            </a>
          </li>
          <li>
            <span className={styles.rightsidebar__write__icon}>i</span>
            <a href="https://stackoverflow.blog/2023/02/19/developer-with-adhd-youre-not-alone/?cb=1&_ga=2.198185318.857408368.1676866636-876088019.1676866486">
              We&apos;ve made changes to our Privacy Notice for Collectives™
            </a>
          </li>
          <li>
            <span className={styles.rightsidebar__write__icon}>i</span>
            <a href="https://stackoverflow.blog/2023/02/19/developer-with-adhd-youre-not-alone/?cb=1&_ga=2.198185318.857408368.1676866636-876088019.1676866486">
              The [amazon] tag is being burninated
            </a>
          </li>
          <li>
            <span className={styles.rightsidebar__write__icon}>i</span>
            <a href="https://stackoverflow.blog/2023/02/19/developer-with-adhd-youre-not-alone/?cb=1&_ga=2.198185318.857408368.1676866636-876088019.1676866486">
              Temporary policy: ChatGPT is banned
            </a>
          </li>
          <li>
            <span className={styles.rightsidebar__write__icon}>i</span>
            <a href="https://stackoverflow.blog/2023/02/19/developer-with-adhd-youre-not-alone/?cb=1&_ga=2.198185318.857408368.1676866636-876088019.1676866486">
              Microsoft Azure Collective launch and proposed tag changes
            </a>
          </li>
        </ul>
      </article>
    </div>
  );
};
