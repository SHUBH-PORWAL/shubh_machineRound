import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(response, "+++++++++++++++");
    if (!response.ok) {
      throw new Error("Failed to get posts");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
});

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    loading: false,
    error: null,
    currentPage: 1,
    totalPages: 1,
  },
  reducers: {
    removePosts: (state, action) => {
      state.posts = state.posts.filter((post) => post.id != action.payload);
      state.totalPages = Math.ceil(state.posts.length / 6);
      if (state.currentPage > state.totalPages) {
        state.currentPage = state.totalPages;
      }
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
        state.totalPages = Math.ceil(action.payload.length / 6);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { removePosts, setPage } = postsSlice.actions;
export default postsSlice.reducer;
