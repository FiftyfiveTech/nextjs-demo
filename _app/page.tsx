import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

const Page = async () => {
  const allPostsData = getSortedPostsData();

  return (
    <Layout home>
      <section className={utilStyles.headingMd}>
        <p>
          Hi, I am <b>Abhinav</b>. I am a frontend developer with keen interest
          in javascript. I have worked in <b>React</b>, <b>Angular</b>,{' '}
          <b>Node.js</b> and ofcourse <b>Next.js</b>
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default Page;
