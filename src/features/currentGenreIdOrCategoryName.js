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
      state.genreIdOrCategoryName = action.payload
      state.searchQuery = ''
    },
    searchMovie: (state, action) => {
      state.searchQuery = action.payload
    },
  },
})

export const { selectGenreIdOrCategoryName, searchMovie } = genreIdOrCategoryName.actions
export default genreIdOrCategoryName.reducer