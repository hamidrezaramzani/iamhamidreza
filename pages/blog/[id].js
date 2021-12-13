import React, { useEffect, useState } from "react";
import BlogHeader from "../../components/Blog/BlogHeader";
import BlogContent from "../../components/Blog/BlogContent";
import BlogFooter from "../../components/Blog/BlogFooter";
import axios from "axios";
import Loading from "../../components/Loading";
function SingleBlogItem({ id }) {
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
      <BlogHeader
        title={state.content}
        description={state.description}
        image={state.image}
      />
      <BlogContent content={state.title} />
      <BlogFooter likes={state.likes} />
    </>
  ) : (
    <Loading />
  );
}

export async function getServerSideProps(ctx) {
  const { id } = ctx.query;
  return {
    props: {
      id,
    },
  };
}
export default SingleBlogItem;
