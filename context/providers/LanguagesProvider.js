import React, { useEffect, useReducer, useState } from "react";
import { changeLanguage } from "../actions/languageActions";
import reducer from "../reducers/languageReducer";
import fa from "../../public/locales/fa.json";
import en from "../../public/locales/en.json";
export const LanguagesContext = React.createContext();
const LanguagesProvider = ({ children }) => {
  useEffect(() => {
    const defaultLanguageStorage = localStorage.getItem("default_hamidreza_ln");
    let defaultLanguage = "en";
    if (defaultLanguageStorage)
      defaultLanguage = defaultLanguageStorage;
    dispatch(changeLanguage(defaultLanguage));
  }, []);

  const initialState = { language: "en", resource: { en, fa } };
  const [state, dispatch] = useReducer(reducer, initialState);

  const t = (key) => {
    return state.resource[state.language][key];
  };

  return (
    <LanguagesContext.Provider value={{ state, dispatch, t }}>
      {children}
    </LanguagesContext.Provider>
  );
};

export default LanguagesProvider;
