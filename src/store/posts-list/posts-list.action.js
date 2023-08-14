import { POSTS_ACTION_TYPES } from "./posts-list.type";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setPostsList = (payload) =>
  createAction(POSTS_ACTION_TYPES.SET_POSTS_LIST, payload);
