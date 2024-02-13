import { configureStore } from "@reduxjs/toolkit";
import dataTableReducer from "./slices/dataTableSlice";
import searchReducer from "./slices/searchSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    dataTable: dataTableReducer,
  },
});
