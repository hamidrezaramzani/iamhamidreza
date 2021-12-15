export const LOAD_DATA = "LOAD_DATA";
export const REMOVE_ITEM = "REMOVE_ITEM";

export const loadData = (data) => ({
  type: LOAD_DATA,
  data,
});

export const removeItem = (id) => ({
  type: REMOVE_ITEM,
  id,
});
