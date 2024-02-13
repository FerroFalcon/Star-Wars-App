import { createSlice } from "@reduxjs/toolkit";

const dataTableSlice = createSlice({
  name: "dataTable",
  initialState: {
    loading: false,
  },
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = dataTableSlice.actions;
export default dataTableSlice.reducer;
