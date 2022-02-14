import { CHANGE_LANGUAGE } from "../actions/languageActions";
const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      {
        localStorage.setItem("default_hamidreza_ln", action.language);
        return {
          ...state,
          language: action.language,
        };
      }
      break;

    default:
      return state;
  }
};

export default reducer;
