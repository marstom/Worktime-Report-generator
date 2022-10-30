import Layout from "../components/layout";
import useSWR from "swr";
import useUser from "../lib/useUser";
import Link from "next/link";
import { useEffect } from "react";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const Logout = () => {
  // @ts-ignore
  useEffect(async () => {
    const logout = async () => {
      const res = await fetch("/api/logout");
      const jsonData = res.json();
      return jsonData;
    };
    await logout();
  }, []);
  const { user } = useUser({
    redirectTo: "/login",
    redirectIfFound: false,
  });
  const { data, error } = useSWR("api/hello/", fetcher);

  if (user ? !user.isLoggedIn : false) return <div>Good bye!</div>;

  if (error) return <div>failed to load</div>;
  return (
    <Layout home={null}>
      <Link href="/login">Login</Link>
    </Layout>
  );
};

export default Logout;
