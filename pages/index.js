import Head from "next/head";
import AboutUs from "../components/AboutUs";
import Header from "../components/Header";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Blog from "../components/Blog";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import withSession from "../lib/session";
import { LanguagesContext } from "../context/providers/LanguagesProvider";
import { useContext } from "react";
export default function Home({ user }) {
  const { state } = useContext(LanguagesContext);
  return (
    <div style={{ fontFamily: state.language == "fa" ? "iranyekan" : "Quicksand" }}>
      <Head>
        <title>Hamidreza Ramzani</title>
        <meta
          name="description"
          content="Personal Website - Hamidreza Ramzani"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#000" />
      </Head>

      <Header user={user} />
      <AboutUs />
      <Projects />
      <Skills />
      <Blog />
      <ContactUs />
      <Footer />
    </div>
  );
}

export const getServerSideProps = withSession(async function ({ req }) {
  const user = req.session.get("user");
  return {
    props: {
      user: user ? true : false,
    },
  };
});
