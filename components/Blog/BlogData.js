import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  blog_data,
  loading,
  active,
  deactive,
  empty_record,
} from "./styles.module.css";
import { SpinnerDotted } from "spinners-react";
import moment from "moment";
function BlogData() {
  const [state, setState] = useState(null);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await axios.get("/api/blog/manage");
        setState(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBlogs();
  }, []);

  const renderData = () => {
    if (state == null)
      return (
        <div className={loading}>
          <SpinnerDotted color="#daa520" />
        </div>
      );
    if (state.length) {
      console.log(state);
      return (
        <table>
          <thead>
            <tr>
              <td>title</td>
              <td>description</td>
              <td>content</td>
              <td>image</td>
              <td>date</td>
              <td>manage</td>
            </tr>
          </thead>
          <tbody>
            {state.map((blog) => (
              <tr key={blog.id}>
                <td>{blog.content}</td>
                <td>{blog.description}</td>
                <td>
                  <button>show content</button>
                </td>
                <td>
                  <button>show image</button>
                </td>
                <td>{moment.unix(blog.date).format("MM/DD/YYYY h:m")}</td>
                <td>
                  <button>Delete</button>
                  &nbsp;
                  <button className={`${blog.status == 1 ? active : deactive}`}>
                    {blog.status == 1 ? "Active" : "DeActive"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }

    return <p className={empty_record}>There is no record</p>;
  };

  return <div className={blog_data}>{renderData()}</div>;
}

export default BlogData;
