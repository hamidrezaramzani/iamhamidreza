import "../styles/globals.css";
import BlogsProvider from "../context/providers/BlogsProvider";

function MyApp({ Component, pageProps }) {
  return (
    <BlogsProvider>
      <Component {...pageProps} />
    </BlogsProvider>
  );
}

export default MyApp;
