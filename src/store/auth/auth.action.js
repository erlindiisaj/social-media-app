import { createAction } from "../../utils/reducer/reducer.utils";
import { AUTH_ACTION_TYPES } from "./auth.type";

export const setAuthSate = (state) =>
  createAction(AUTH_ACTION_TYPES.SET_AUTH_STATE, state);
