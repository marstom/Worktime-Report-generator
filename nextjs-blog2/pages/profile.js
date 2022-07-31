import Layout from "../components/layout";
import useSWR from 'swr'

const fetcher = url => fetch(url).then(r => r.json())

const Profile = () => {
    const {data, error} = useSWR('api/hello/', fetcher)

    if (error) return <div>failed to load</div>;
    return <Layout>
        
        <h1>This is profile page</h1>
        { data ? <div>{JSON.stringify(data)}</div>: <div>loading...</div> }
        </Layout>
    
}

export default Profile;