/** @format */

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer,
} from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { setupListeners } from "@reduxjs/toolkit/query";
import logger from "redux-logger";
import { createWrapper } from "next-redux-wrapper";

import { baseApi } from "../services/api";
import categoriesReducer from "./slices/categories";
import servicesReducer from "./slices/services";
import reviewsReducer from "./slices/reviews";
import blogsReducer from "./slices/blogs";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  services: servicesReducer,
  reviews: reviewsReducer,
  blogs: blogsReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  //   whitelist: [""],
  autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  /**
   * Middleware function that extends the default middleware with additional functionality.
   *
   * @param {function} getDefaultMiddleware - a function that returns the default middleware.
   * @return {array} - an array of middleware functions.
   */
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // thunk: {
      //   extraArgument: {
      //     cookies: context,
      //   },
      // },
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([baseApi.middleware]),
});

export const wrapper = createWrapper((context) => store, { debug: false });

const persistor = persistStore(store);

setupListeners(store.dispatch);

export { persistor, store };
