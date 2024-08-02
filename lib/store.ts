import { configureStore } from '@reduxjs/toolkit'
import flowReducer from "@/lib/features/flow/flowSlice"
import commonReducer from "@/lib/features/common/commonSlice"

export const store = configureStore({
    reducer: {
        flow: flowReducer,
        common: commonReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            // serializableCheck: false,
        }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch