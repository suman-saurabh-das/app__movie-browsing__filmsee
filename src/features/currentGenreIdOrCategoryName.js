import { createSlice } from "@reduxjs/toolkit";

export const genreIdOrCategoryName = createSlice({
  name: 'genreIdOrCategoryName',
  initialState: {
    genreIdOrCategoryName: '',
    page: 1,
    searchQuery: '',
  },
  reducers: {
    selectGenreIdOrCategoryName: (state, action) => {
      // console.log(action.payload)
      state.genreIdOrCategoryName = action.payload
    },
  },
})

export const { selectGenreIdOrCategoryName } = genreIdOrCategoryName.actions
export default genreIdOrCategoryName.reducer