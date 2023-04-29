import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

// const loggerMiddleware = (store) => (next) => (action) => {
//   if (!action.type) {
//     return next(action);
//   }

//   console.log("type", action.type);
//   console.log("payload", action.pyaload);
//   console.log("currentSate", store.getState());

//   next(action);
//   console.log("next state: ", store.getState());
// };

const middleWares = [process.env.NODE_ENV === "development" && logger];

const composedEnhancers = composeEnhancers(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
