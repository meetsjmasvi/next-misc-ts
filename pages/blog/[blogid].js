import Head from "next/head";

export default function Blog({ title, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <h2 className="content">{title}</h2>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { blogid: "1" } }],
    fallback: false,
  };
}

export async function getStaticProps() {
  return {
    props: {
      title: "Article Title",
      description: "Article Description",
    },
  };
}

// server side rendering with getServerSideProps won't work
// export async function getServerSideProps() {
//   return {
//     props: {
//       title: "Article Title",
//       description: "Article Description",
//     },
//   };
// }
