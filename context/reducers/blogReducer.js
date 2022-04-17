import { CHANGE_STATUS, LOAD_DATA, REMOVE_ITEM } from "../actions/blogActions";
const reducer = (state, action) => {
  switch (action.type) {
    case LOAD_DATA:
      return action.data;
    case REMOVE_ITEM: {
      return state.filter((item) => item._id != action.id);
    }
    case CHANGE_STATUS:
      return state.map((item) => {
        if (item._id == action.id) {
          item.status = action.status;
        }

        return item;
      });
    default:
      return state;
  }
};

export default reducer;
