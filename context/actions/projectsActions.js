export const FETCH_DATA = "FETCH_DATA";
export const REMOVE_ITEM = "REMOVE_ITEM";

export const fetchData = (data) => ({
  type: FETCH_DATA,
  data,
});

export const removeItem = (id) => ({
  type: REMOVE_ITEM,
  id,
});
