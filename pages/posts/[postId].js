import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Layout from "../../components/Layout";

export default function DynamicPost(props) {
  return (
    <Layout>
      <Head>
        <title>Dynamic Post: {props.postId}</title>
      </Head>
      <h1>Dynamic Post</h1>
      <Link href="/">Go home</Link>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
    </Layout>
  );
}

export function getServerSideProps({ params }) {
  return {
    props: {
      postId: params.postId,
    },
  };
}
