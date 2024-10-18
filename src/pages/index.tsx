import styles from './index.module.css';
import Layout from '@theme/Layout';

export default function Home(): JSX.Element {
  return (
    <Layout>
      <div className={styles.temporary_home}>
        <p>You're early! We're still setting up the homepage.</p>

        <p>Here to submit a proposal? Read <a href="/docs/proposals/">the URL Proposal Guidelines</a>!</p>

        <p>Want to help build the website? Check out <a href="https://github.com/urlatuci/website/" rel="noopener noreferrer" target="_blank">the GitHub repo</a>.</p>
      </div>
    </Layout>
    
    
  );
}
