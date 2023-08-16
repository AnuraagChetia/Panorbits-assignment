import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    username: "",
    email: "",
    profilepicture: "",
    phone: 0,
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
    },
  },
  reducers: {
    //sets the current user
    getUser(state, action) {
      state.name = action.payload.name;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.profilepicture = action.payload.profilepicture;
      state.phone = action.payload.phone;
      state.website = action.payload.website;
      state.company = action.payload.company;
      state.address = action.payload.address;
    },
  },
});

export const userActons = userSlice.actions;

export default userSlice.reducer;
