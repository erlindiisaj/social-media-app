import { combineReducers } from "redux";

import { AuthReducer } from "./auth/auth.reducer";
import { PostsReducer } from "./posts-list/posts-list.reducer";
import { UserReducer } from "./user/user.reducer";

export const rootReducer = combineReducers({
  auth: AuthReducer,
  posts: PostsReducer,
  user: UserReducer,
});
