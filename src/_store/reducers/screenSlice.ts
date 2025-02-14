import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ScreenType = "SCR_POWEROFF" | "SCR_BOOTING" | "SCR_DESKTOP";

interface ScreenState {
  currentScreen: ScreenType;
}

const initialState: ScreenState = {
  currentScreen:
    (localStorage.getItem("currentScreen") as ScreenType) || "SCR_POWEROFF",
};

const screenSlice = createSlice({
  name: "screen",
  initialState,
  reducers: {
    setCurrentScreen: (state, action: PayloadAction<ScreenType>) => {
      state.currentScreen = action.payload;
      localStorage.setItem("currentScreen", action.payload);
    },
  },
});

export const { setCurrentScreen } = screenSlice.actions;
export default screenSlice.reducer;
