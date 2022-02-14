import "../styles/globals.css";
import BlogsProvider from "../context/providers/BlogsProvider";
import ProjectsPorvider from "../context/providers/ProjectsPorvider";
import LanguagesProvider from "../context/providers/LanguagesProvider";
function MyApp({ Component, pageProps }) {
  return (
    <BlogsProvider>
      <ProjectsPorvider>
        <LanguagesProvider>
          <Component {...pageProps} />
        </LanguagesProvider>
      </ProjectsPorvider>
    </BlogsProvider>
  );
}

export default MyApp;
