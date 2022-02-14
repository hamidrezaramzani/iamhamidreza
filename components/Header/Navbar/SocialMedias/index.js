import Link from "next/link";
import React, { useContext } from "react";
import { FiTwitter } from "react-icons/fi";
import { FaGithub, FaTelegram } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { social_medias, change_language_select } from "./styles.module.css";
import { LanguagesContext } from "../../../../context/providers/LanguagesProvider";
import Item from "./Item";
import { changeLanguage } from "../../../../context/actions/languageActions";
function SocialMedias() {
  const { state, dispatch } = useContext(LanguagesContext);
  const handleChangeLanguage = (e) => {
    const selectedLanguage = e.target.value;
    dispatch(changeLanguage(selectedLanguage));
  };
  return (
    <div className={social_medias}>
      <Item link={"https://twitter.com/hamidrezaramzani_80"}>
        <FiTwitter />
      </Item>
      <Item link={"https://github.com/hamidrezaramzani"}>
        <FaGithub />
      </Item>

      <Item link={"https://t.me/manticore_channel"}>
        <FaTelegram />
      </Item>
      <Item link={"https://instagram.com/hamidrezaramzani_"}>
        <AiOutlineInstagram />
      </Item>
      <select
        className={change_language_select}
        onChange={handleChangeLanguage}
      >
        {state.language == "fa" ? (
          <>
            <option value="fa">FA</option>
            <option value="en">EN</option>
          </>
        ) : (
          <>
            <option value="en">EN</option>
            <option value="fa">FA</option>
          </>
        )}
      </select>
    </div>
  );
}

export default SocialMedias;
