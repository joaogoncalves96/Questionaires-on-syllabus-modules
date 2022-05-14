import Head from "next/head";
import Login from "../components/Login";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Login />
    </div>
  );
}
