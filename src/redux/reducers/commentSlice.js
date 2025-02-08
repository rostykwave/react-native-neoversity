import { createSlice } from "@reduxjs/toolkit";

const commentsExample = [
  {
    id: "1",
    text: "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
    time: "09 червня, 2020 | 08:40",
    avatar: require("../../../assets/avatar1.png"),
  },
  {
    id: "2",
    text: "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
    time: "09 червня, 2020 | 09:14",
    avatar: require("../../../assets/avatar2.png"),
  },
  {
    id: "3",
    text: "Thank you! That was very helpful!",
    time: "09 червня, 2020 | 09:20",
    avatar: require("../../../assets/avatar1.png"),
  },
];

const initialState = {
  // commentInfo: [],
  commentInfo: commentsExample,
};

// Створення slice для коментарів
const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    setCommentInfo(state, action) {
      state.commentInfo = action.payload;
    },
    addCommentInfo(state, action) {
      state.commentInfo.push(action.payload);
    },
    updateCommentInfo(state, action) {
      const index = state.commentInfo.findIndex(
        (comment) => comment.id === action.payload.id
      );
      if (index !== -1) {
        state.commentInfo[index] = action.payload;
      }
    },
    removeCommentFromInfo(state, action) {
      state.commentInfo = state.commentInfo.filter(
        (comment) => comment.id !== action.payload.id
      );
    },
    clearCommentInfo(state) {
      // state.commentInfo = [];
      state.commentInfo = commentsExample;
    },
  },
});

// Експорт дій для використання у компонентах
export const {
  setCommentInfo,
  addCommentInfo,
  updateCommentInfo,
  removeCommentFromInfo,
  clearCommentInfo,
} = commentSlice.actions;

// Експорт ред'юсера для підключення до Store
export default commentSlice.reducer;
