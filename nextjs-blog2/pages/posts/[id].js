import Layout from "../../components/layout"
import { getAllPostIds, getPostData } from '../../lib/posts'

const Post = ({postData}) => {
    return (
        <Layout>
        {postData.title}
        <br />
        {postData.id}
        <br />
        {postData.date}
      </Layout>
    )

}

export async function getStaticPaths(){
    console.log('paths...')
    const paths = getAllPostIds();
    return {paths, fallback: false}
}

export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
    const postData = getPostData(params.id);

    return {
        props: {
            postData
        }
    }
  }

export default Post;