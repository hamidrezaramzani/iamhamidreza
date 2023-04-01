import Link from "next/link";
import React from "react";
import { song_item } from "./styles.module.css";
function SongItem({ title, description, image, link }) {
  return (
    <div className={song_item}>
      <Link href={link}>
        <a>
          <img src={image} alt={title} />
          <h3>{title}</h3>
          <p>{description}</p>
        </a>
      </Link>
    </div>
  );
}

export default SongItem;
