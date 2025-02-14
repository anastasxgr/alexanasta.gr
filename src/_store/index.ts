import { configureStore } from "@reduxjs/toolkit";

// reducers
import screenReducer from "./reducers/screenSlice";
import modalReducer from "./reducers/modalSlice";
import appsReducer from "./reducers/appsSlice";

export const store = configureStore({
  reducer: {
    screen: screenReducer,
    modal: modalReducer,
    apps: appsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
