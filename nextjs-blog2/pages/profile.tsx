import Layout from "../components/layout";
import useSWR from "swr";
import useUser from "../lib/useUser";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const Profile = () => {
  const { user } = useUser({
    redirectTo: "/login",
    redirectIfFound: false,
  });
  const { data, error } = useSWR("api/hello/", fetcher);

  if (user ? !user.isLoggedIn : false) return <div>Please login</div>;

  if (error) return <div>failed to load</div>;
  return (
    <Layout home={null}>
      <h1>This is profile page</h1>
      {data ? <div>{JSON.stringify(data)}</div> : <div>loading...</div>}
      <div>{JSON.stringify(user)}</div>
    </Layout>
  );
};

export default Profile;
