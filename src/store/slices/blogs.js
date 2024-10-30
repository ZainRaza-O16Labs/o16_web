const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  blogs: [],
  selectedBlog: {},
};

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    setBlogs: (state, action) => {
      state.blogs = action.payload;
      return state;
    },
    setSelectedBlog: (state, action) => {
      state.selectedBlog = action.payload;
      return state;
    },
  },
});

export const { setBlogs, setSelectedBlog } = blogsSlice.actions;

export const selectedBlog = (state) => state?.blogs?.selectedBlog;

export default blogsSlice.reducer;
