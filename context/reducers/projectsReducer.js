import { FETCH_DATA, REMOVE_ITEM } from "../actions/projectsActions";
const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.data;
    case REMOVE_ITEM: {
      return state.filter((item) => item.id != action.id);
    }
    default:
      return state;
  }
};

export default reducer;
