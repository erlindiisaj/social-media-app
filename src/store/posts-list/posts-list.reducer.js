import { POSTS_ACTION_TYPES } from "./posts-list.type";
const INITIAL_STATE = {
  postsList: [],
};

export const PostsReducer = (state = INITIAL_STATE, action) => {
  const { payload, type } = action;
  switch (type) {
    case POSTS_ACTION_TYPES.SET_POSTS_LIST:
      return {
        ...state,
        postsList: payload,
      };
    default:
      return state;
  }
};
