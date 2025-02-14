import { configureStore } from "@reduxjs/toolkit";
import screenReducer from "./reducers/screenSlice";
import modalReducer from "./reducers/modalSlice";

export const store = configureStore({
  reducer: {
    screen: screenReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
