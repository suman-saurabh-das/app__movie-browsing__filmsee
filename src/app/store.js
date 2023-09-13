import {configureStore} from '@reduxjs/toolkit'
import { tmdbApi } from '../services/TMDB'
import genreIdOrCategoryNameReducer from '../features/currentGenreIdOrCategoryName'

export default configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    currentGenreIdOrCategoryName: genreIdOrCategoryNameReducer,
  },
  middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(tmdbApi.middleware)
})