import Layout from '../../../components/layout';
import { getAllPostIds, getPostData } from '../../../lib/posts';
import Date from '../../../components/date';
import utilStyles from '../../../styles/utils.module.css';

type Props = {
  params: { id: string };
};

const Page = async ({ params: { id } }: Props) => {
  const postData = await getPostData(id);

  return (
    <Layout>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
};

export default Page;

export const generateStaticParams = async () => {
  const posts = getAllPostIds();

  return posts.map((post) => ({
    id: post.params.id,
  }));
};
