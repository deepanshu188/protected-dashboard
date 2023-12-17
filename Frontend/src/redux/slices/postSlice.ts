import { createSlice } from '@reduxjs/toolkit';

export const postListSlice = createSlice({
  name: 'posts list',
  initialState: { data: [] },
  reducers: {
    setPosts: (state, action) => {
      state.data = action.payload;
    },
    clearPosts: (state) => {
      state.data = [];
    },
  },
});

export const { setPosts, clearPosts } = postListSlice.actions;

export default postListSlice.reducer;
