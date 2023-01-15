import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogTitle: "",
  coverImage: "",
  content: "",
  gerne: "",
};
const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    addBlog(state, action) {
      state.blogTitle = action.payload.title;
      state.coverImage = action.payload.image;
      state.content = action.payload.description;
      state.gerne = action.payload.gerne;
      console.log(action.payload);
    },
  },
});

export const blogAction = blogSlice.actions;
export default blogSlice;
