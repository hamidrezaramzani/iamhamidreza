import { FETCH_DATA } from "../actions/projectsActions";
const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.data;
    default:
      return state;
  }
};

export default reducer;
