import React, { useEffect, useState } from "react";
import BlogContent from "../../components/Blog/BlogContent";
import axios from "axios";
import Loading from "../../components/Loading";
import withSession from "../../lib/session";
import Head from "next/head";
import Navbar from "../../components/Header/Navbar";
function SingleBlogItem({ data, domain, user, id }) {


  return data ? (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
      </Head>
      <Navbar user={user} />
      <BlogContent {...data}
        domain={domain} id={id} />
    </>
  ) : (
    <Loading />
  );
}

export const getServerSideProps = withSession(async ({ query, req }) => {
  const user = req.session.get("user");
  const { id } = query;
  const { data } = await axios.get(`http://localhost:3000/api/blog/${id}`);
  console.log(data);
  const domain = req.headers.host;
  return {
    props: {
      data,
      domain,
      user: user ? user : null,
      id
    },
  };
});
export default SingleBlogItem;
