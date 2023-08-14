import { createAction } from "../../utils/reducer/reducer.utils";
import { USER_ACTION_TYPES } from "./user.type";

export const setUser = (payload) =>
  createAction(USER_ACTION_TYPES.SET_USER, payload);

export const setUserPostsList = (payload) =>
  createAction(USER_ACTION_TYPES.SET_USER_POSTS, payload);
