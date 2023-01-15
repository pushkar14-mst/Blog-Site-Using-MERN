const { configureStore } = require("@reduxjs/toolkit");
const { default: blogSlice } = require("./blog-store");

const store = configureStore({ reducer: { blog: blogSlice.reducer } });
export default store;
