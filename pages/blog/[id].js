import React, { useEffect, useState } from "react";
import BlogHeader from "../../components/Blog/BlogHeader";
import BlogContent from "../../components/Blog/BlogContent";
import axios from "axios";
import Loading from "../../components/Loading";
import withSession from "../../lib/session";
import Head from "next/head";
function SingleBlogItem({ id , domain }) {
  const [state, setState] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`/api/blog/${id}`);
        setState(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return state != null ? (
    <>
      <Head>
        <title>{state.title}</title>
        <meta name="description" content={state.description} />
      </Head>
      <BlogHeader
        title={state.title}
        description={state.description}
        image={state.image}
        link={state.link}
        domain={domain}
      />
      <BlogContent content={state.content} />      
    </>
  ) : (
    <Loading />
  );
}

export const getServerSideProps = withSession(({ query, req }) => {
  const { id } = query;
  const domain = req.headers.host;
  return {
    props: {
      id,
      domain,
    },
  };
});
export default SingleBlogItem;
