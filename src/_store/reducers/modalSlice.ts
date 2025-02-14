import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  isOpen: boolean;
  message: string;
  status: "online" | "offline" | null;
}

const initialState: ModalState = {
  isOpen: false,
  message: "",
  status: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (
      state,
      action: PayloadAction<{ message: string; status: "online" | "offline" }>
    ) => {
      state.isOpen = true;
      state.message = action.payload.message;
      state.status = action.payload.status;
    },
    hideModal: (state) => {
      state.isOpen = false;
      state.message = "";
      state.status = null;
    },
  },
});

export const { showModal, hideModal } = modalSlice.actions;
export default modalSlice.reducer;
