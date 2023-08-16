import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
  name: "page",
  
  initialState: {
    page: "Profile",
  },

  reducers: {
    //change the page state
    setPage(state, action) {
      state.page = action.payload;
    },
  },
});

export const pageActions = pageSlice.actions;

export default pageSlice.reducer;
