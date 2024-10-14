import styles from './index.module.css';

export default function Home(): JSX.Element {
  return (
    <div className={styles.temporary_home}>
      <p>You're early! Give us a second while we figure this thing out. Meanwhile, check out the <a href="https://ojosproject.org/" rel="noopener noreferrer" target="_blank">Ojos Project</a>!</p>

      <p>Want to contribute? Check out <a href="https://github.com/urlatuci/website/" rel="noopener noreferrer" target="_blank">the repo</a>.</p>
    </div>
    
  );
}
