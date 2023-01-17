import Head from "next/head";
import "styles/globals.css";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <>
      <Head>
        <title>Page Level Header Testing</title>
        <meta name="description" content="Page Level Header Testing" />
      </Head>
      <Header />
      <Component className="content" {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
