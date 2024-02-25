import { configureStore } from '@reduxjs/toolkit'
import personsReducer from './reducers/persons-reducer'

export const makeStore = () => {
  return configureStore({
    reducer: {
      persons: personsReducer
    }
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']