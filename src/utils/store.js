import { configureStore, combineReducers } from "@reduxjs/toolkit";
import loginInfoReducer from "./loginInfoSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage for web

// Combine reducers (you can add more later)
const rootReducer = combineReducers({
  loginInfo: loginInfoReducer,
});

// Persist config
const persistConfig = {
  key: "root",
  storage,
};

// Wrap rootReducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store
export const appStore = configureStore({
  reducer: persistedReducer,
});

// Persistor
export const persistor = persistStore(appStore);
