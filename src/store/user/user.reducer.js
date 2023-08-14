import { USER_ACTION_TYPES } from "./user.type";

const INITIAL_STATE = {
  user: {},
  userPostsList: [],
};

export const UserReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.SET_USER:
      return {
        ...state,
        user: payload,
      };
    case USER_ACTION_TYPES.SET_USER_POSTS:
      return {
        ...state,
        userPostsList: payload,
      };
    default:
      return state;
  }
};
