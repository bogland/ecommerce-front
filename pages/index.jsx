import Head from "next/head";
import Header from "../components/header";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="reset.css" />
      </Head>
      <Header></Header>
    </>
  );
}
