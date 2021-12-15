import { LOAD_DATA, REMOVE_ITEM } from "../actions/blogActions";
const reducer = (state, action) => {
  switch (action.type) {
    case LOAD_DATA:
      return action.data;
    case REMOVE_ITEM: {
      console.log("IN REDUCER" ,state.filter((item) => item.id != action.id));
      return []
    }
    default:
      return state;
  }
};

export default reducer;
