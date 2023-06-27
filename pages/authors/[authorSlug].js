import Image from "next/image";
import Layout from "../../components/Layout";

export default function Author(props) {
  return (
    <Layout>
      <main>
        <h1>It's {props.authorSlug}!</h1>
        <h2>This page is generated statically</h2>
        <Image
          src="/images/profile.jpg"
          alt="Profile Picture"
          width={144}
          height={144}
        />
        <p>
          <a href="/contact">Contact me</a>
        </p>
      </main>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  return {
    props: {
      authorSlug: params.authorSlug,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          authorSlug: "zain",
        },
      },
      {
        params: {
          authorSlug: "fathoni",
        },
      },
    ],
    fallback: false,
  };
}
