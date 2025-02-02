// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit";

// export const fetchUserInfo = createAsyncThunk(
//   "user/fetchUserInfo",
//   async (userName) => {
//     const readableStream = await fetch(
//       `${userName}`
//     );
//     const response = await readableStream.json();
//     return response;
//   }
// );

// const initialState = {
//   userInfo: null,
//   loading: false,
//   error: null,
// };

// const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     resetUserInfo: (state) => {
//       state.userInfo = null;
//       state.loading = false;
//       state.error = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchUserInfo.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchUserInfo.fulfilled, (state, action) => {
//         state.loading = false;
//         state.userInfo = action.payload;
//       })
//       .addCase(fetchUserInfo.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
// });

// export default userSlice.reducer;

// export const { resetUserInfo } = userSlice.actions;

export const githubUserApi = createApi({
  reducerPath: "githubApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com/" }),
  endpoints: (builder) => ({
    getGithubUserByName: builder.query({
      query: (name) => `users/${name}`,
    }),
  }),
});

export const { useGetGithubUserByNameQuery } = githubUserApi;
