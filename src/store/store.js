import { compose, applyMiddleware, createStore } from "redux";

import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

const middleWare = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWare));

export const store = createStore(rootReducer, undefined, composedEnhancers);
