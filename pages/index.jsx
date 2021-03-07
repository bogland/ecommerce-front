import Head from "next/head";
import Header from "../components/header";

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1.0, maximum-scale=2.0, user-scalable=yes"
        />
        <link rel="stylesheet" href="reset.css" />
      </Head>
      <Header></Header>
    </>
  );
}
