import React from "react";
import { songs, song_items } from "./styles.module.css";
import Title from "../Title/index";
import SongItem from "./SongItem";
import { useLoadData, useRenderData, useTranslation } from "../hooks";
function Songs() {
  const { state, loading } = useLoadData("/api/song/all");
  const renderData = useRenderData(SongItem, loading, state);
  const t = useTranslation();
  return (
    <div className={songs} id="songs">
      <Title titleText={`#${t("songs")}`} description={t("songs_description")} />
      <div className={song_items}>{renderData()}</div>
    </div>
  );
}

export default Songs;
