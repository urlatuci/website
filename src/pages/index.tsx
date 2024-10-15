import styles from './index.module.css';

export default function Home(): JSX.Element {
  return (
    <div className={styles.temporary_home}>
      <p>You're early! We're still setting up the homepage. Meanwhile, check <a href="/docs/">our documentation</a>!</p>

      <p>Want to contribute? Check out <a href="https://github.com/urlatuci/website/" rel="noopener noreferrer" target="_blank">the repo</a>.</p>
    </div>
    
  );
}
