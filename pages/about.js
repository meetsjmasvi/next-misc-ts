import Footer from "../components/layout/Footer";

function About() {
  return (
    <div className="content">
      <h2>About Page</h2>
    </div>
  );
}

About.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};

export default About;
