import { configureStore } from '@reduxjs/toolkit'
import SliceSwitchSliderReducer from './SliceSwitchSlider'
import SliceLanguageReducer from './SliceLanguage'
import SliceMobileMenuReducer from './SliceMobileMenu'

export const store = configureStore({
  reducer: {
switchSlider: SliceSwitchSliderReducer,
switchLanguage: SliceLanguageReducer,
SliceMobileMenu:SliceMobileMenuReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch