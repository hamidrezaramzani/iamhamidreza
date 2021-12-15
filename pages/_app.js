import "../styles/globals.css";
import BlogsProvider from "../context/providers/BlogsProvider";
import ProjectsPorvider from "../context/providers/ProjectsPorvider";

function MyApp({ Component, pageProps }) {
  return (
    <BlogsProvider>
      <ProjectsPorvider>
        <Component {...pageProps} />
      </ProjectsPorvider>
    </BlogsProvider>
  );
}

export default MyApp;
