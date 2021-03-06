import moment from "moment";
import Link from "next/link";
import React from "react";
import {
  blog_item,
  blog_item_content,
  blog_item_reverse,
} from "./styles.module.css";
function BlogItem({ _id, description, reverse, title, date, image }) {
  return (
    <div className={blog_item}>
      <Link href={`/blog/${_id}`}>
        <a>
          <div
            className={`${blog_item_content} ${reverse ? blog_item_reverse : ""
              }`}
          >
            <div>
              <img
                src={image}
                alt="blog item"
              />
            </div>
            <div>
              <span>{moment.unix(date).format("MM MMMM YYYY -  h:m")}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}

export default BlogItem;
