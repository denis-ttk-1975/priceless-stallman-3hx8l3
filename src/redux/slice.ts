import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

const initialState = {
  value: null as string | null
};

export const slice = createSlice({
  name: "slice",
  initialState,
  reducers: {
    changeValue: (
      state: typeof initialState,
      action: PayloadAction<string>
    ) => {
      state.value = action.payload;
    },
    changeValueAsyncSaga: (_state, _action: PayloadAction<string>) => {}
  }
});

export const { changeValue, changeValueAsyncSaga } = slice.actions;

export const sliceValue = (state: RootState) => state.value;

export const sliceReducer = slice.reducer;
