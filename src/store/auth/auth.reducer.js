import { AUTH_ACTION_TYPES } from "./auth.type";

const INITIAL_STATE = {
  authState: "signup",
};

export const AuthReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case AUTH_ACTION_TYPES.SET_AUTH_STATE:
      return {
        ...state,
        authState: payload,
      };
    default:
      return state;
  }
};
