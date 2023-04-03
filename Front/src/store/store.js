import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userAuthSlice } from "./userAuthSlice";
import storageSession from "redux-persist/lib/storage/session";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

const reducers = combineReducers({
  userAuth: userAuthSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage: storageSession,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export default store;
