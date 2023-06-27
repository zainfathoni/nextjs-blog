import Link from "next/link";
import Layout from "../../components/Layout";

export default function PostsIndex(props) {
  return (
    <Layout>
      <h1>Posts Index</h1>
      <ul>
        {props.posts.map((post) => (
          <li key={post.path}>
            <Link href={post.path}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  // const data = await ...

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {
      posts: [
        {
          title: "First Post",
          path: "/posts/first-post",
        },
        {
          title: "Second Post",
          path: "/posts/second-post",
        },
      ],
    },
  };
}
