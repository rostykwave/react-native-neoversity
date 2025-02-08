import { createSlice } from "@reduxjs/toolkit";

//add firebase in the future
const postsExample = [
  {
    id: "1",
    image: require("../../../assets/forests.png"),
    title: "Ліс",
    location: {
      name: "Ivano-Frankivsk Region, Ukraine",
      latitude: 48.9226,
      longitude: 24.7097,
    },
  },
  {
    id: "2",
    image: require("../../../assets/sunsets.png"),
    title: "Захід сонця",
    location: {
      name: "Odesa Region, Ukraine",
      latitude: 46.482952,
      longitude: 30.712481,
    },
  },
];

const initialState = {
  // posts: [],
  posts: postsExample,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPostInfo: (state, action) => {
      state.posts.push(action.payload);
    },
    removePostInfo: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload.id);
    },
    updatePostInfo: (state, action) => {
      const index = state.posts.findIndex(
        (post) => post.id === action.payload.id
      );
      if (index !== -1) {
        state.posts[index] = action.payload;
      }
    },
    clearPostsInfo(state) {
      // state.posts = [];
      state.posts = postsExample;
    },
  },
});

export const { addPostInfo, removePostInfo, updatePostInfo, clearPostsInfo } =
  postSlice.actions;

export default postSlice.reducer;
