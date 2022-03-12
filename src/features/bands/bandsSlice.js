import { createSlice } from "@reduxjs/toolkit";

const bandsSlice = createSlice({
  name: "bands",
  initialState: {
    entities: [],
  },
  reducers: {
    bandAdded(state, action) {
      state.entities.push(action.payload);
    },
  },
});

// export the action creators
export const { bandAdded } = bandsSlice.actions;
export default bandsSlice.reducer;

// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { act } from "@testing-library/react";

// export const fetchCats = createAsyncThunk("cats/fetchCats", () => {
//   // return a Promise containing the data we want
//   return fetch("https://learn-co-curriculum.github.io/cat-api/cats.json")
//     .then((response) => response.json())
//     .then((data) => data.images);
// });

// const catsSlice = createSlice({
//   name: "cats",
//   initialState: {
//     entities: [], // array of cats
//     status: "idle", // loading state
//   },
//   reducers: {
//     catAdded(state, action) {
//       // using createSlice lets us mutate state!
//       state.entities.push(action.payload);
//     },
//     catUpdated(state, action) {
//       const cat = state.entities.find((cat) => cat.id === action.payload.id);
//       cat.url = action.payload.url;
//     },
//   },
//   extraReducers: {
//     // handle async actions: pending, fulfilled, rejected (for errors)
//     [fetchCats.pending](state) {
//       state.status = "loading";
//     },
//     [fetchCats.fulfilled](state, action) {
//       state.entities = action.payload;
//       state.status = "idle";
//     },
//   },
// });

// export const { catAdded, catUpdated } = catsSlice.actions;

// export default catsSlice.reducer;
