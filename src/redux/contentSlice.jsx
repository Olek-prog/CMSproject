import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContent = createAsyncThunk(
  "content/fetchContent",
  async () => {
    const response = await axios.get(
      "https://cms.mydomain.com/wp-json/wp/v2/pages/2"
    ); // Replace with real page ID
    return response.data;
  }
);

const contentSlice = createSlice({
  name: "content",
  initialState: { data: null, status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContent.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchContent.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "succeeded";
      });
  },
});

export default contentSlice.reducer;
