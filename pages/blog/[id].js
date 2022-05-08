import React, { useEffect, useState } from "react";
import BlogContent from "../../components/Blog/BlogContent";
import axios from "axios";
import Loading from "../../components/Loading";
import withSession from "../../lib/session";
import Head from "next/head";
import Navbar from "../../components/Header/Navbar";
function SingleBlogItem({ id, domain , user }) {
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
      <Navbar user={user} />
      <BlogContent content={state.content} title={state.title}
        description={state.description}
        image={state.image}
        link={state.link}
        date={state.date}
        comments={state.comments}
        domain={domain} id={id} />
    </>
  ) : (
    <Loading />
  );
}

export const getServerSideProps = withSession(({ query, req }) => {
  const user = req.session.get("user");
  const { id } = query;
  const domain = req.headers.host;
  return {
    props: {
      id,
      domain,
      user
    },
  };
});
export default SingleBlogItem;
