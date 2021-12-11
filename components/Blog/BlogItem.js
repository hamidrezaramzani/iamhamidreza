import Link from "next/link";
import React from "react";
import {
  blog_item,
  blog_item_content,
  blog_item_reverse,
} from "./styles.module.css";
function BlogItem({ title, description, reverse }) {
  return (
    <div className={blog_item}>
      <Link href="/blog/id">
        <a>
          <div
            className={`${blog_item_content} ${
              reverse ? blog_item_reverse : ""
            }`}
          >
            <div>
              <img
                src="https://picsum.photos/800/800?grayscale"
                alt="blog item"
              />
            </div>
            <div>
                <span>5 December - 20:14</span>
              <h3>Blog Title</h3>
              <p>
                Lorem nisi consequat incididunt in nulla veniam reprehenderit
                occaecat id velit in duis in est. Aute dolor deserunt id
                exercitation voluptate eiusmod anim proident eu incididunt
                reprehenderit. Cupidatat cillum et proident deserunt. Est fugiat
                labore deserunt sint. Veniam sint aliqua aliqua enim nisi ut
                irure. Duis irure proident ipsum consequat mollit sint nostrud.
                Dolor amet fugiat cillum amet commodo velit aute ullamco eu
                irure.u
              </p>              
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}

export default BlogItem;
