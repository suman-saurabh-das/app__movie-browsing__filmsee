import {configureStore} from '@reduxjs/toolkit'
import { tmdbApi } from '../services/TMDB'
import genreIdOrCategoryNameReducer from '../features/currentGenreIdOrCategoryName'
import userReducer from '../features/auth'

export default configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    currentGenreIdOrCategoryName: genreIdOrCategoryNameReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(tmdbApi.middleware)
})