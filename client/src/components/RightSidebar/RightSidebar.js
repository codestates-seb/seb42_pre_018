import styles from './rightsidebar.module.css';

export const RightSidebar = () => {
  return (
    <div className={styles.rightSidebar}>
      <article className={styles.rightSidebar__article}>
        <h3>The Over Flow Blog</h3>
        <ul>
          <li>
            <a href="https://stackoverflow.blog/2023/02/19/developer-with-adhd-youre-not-alone/?cb=1&_ga=2.198185318.857408368.1676866636-876088019.1676866486">
              Developer with ADHD? You’re not alone.
            </a>
          </li>
        </ul>
      </article>
    </div>
  );
};
