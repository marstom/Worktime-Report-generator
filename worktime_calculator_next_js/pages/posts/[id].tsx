import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";

export type PostDataType = Array<{ [id: string]: string }>;
type Props = {
  postData: PostDataType;
};

const Post: React.FC<Props> = ({ postData }) => {
  return (
    // @ts-ignore
    <Layout>
      <Head>
        {/* @ts-ignore */}
        <title>{postData.title}</title>
      </Head>
      <article>
        {/* @ts-ignore */}
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <br />
        {/* @ts-ignore */}
        {postData.id}
        <br />
        {/* @ts-ignore */}
        <Date dateString={postData.date} />
        <br />
        {/* @ts-ignore */}
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
};

export async function getStaticPaths() {
  console.log("paths...");
  const paths = getAllPostIds();
  return { paths, fallback: false };
}

// @ts-ignore
export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export default Post;
