import { createSlice } from "@reduxjs/toolkit";

export type App = "Terminal" | "Settings";

interface AppsState {
  terminal: boolean;
  settings: boolean;
}

const initialState: AppsState = {
  terminal: false,
  settings: false,
};

const appsSlice = createSlice({
  name: "apps",
  initialState,
  reducers: {
    openTerminal: (state) => {
      state.terminal = true;
      localStorage.setItem("terminal", "true");
    },

    closeAll: (state) => {
      state.settings = false;
      state.terminal = false;
    },
  },
});

export const { openTerminal, closeAll } = appsSlice.actions;
export default appsSlice.reducer;
