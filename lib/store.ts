import { configureStore } from '@reduxjs/toolkit'
import flowReducer from "@/lib/features/flow/flowSlice"

export const store = configureStore({
    reducer: {
        flow: flowReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch