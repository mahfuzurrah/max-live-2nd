import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CommonState {
    isSidebarOpen: boolean;
    navbarTitle: string
}

const initialState: CommonState = {
    isSidebarOpen: false,
    navbarTitle: "Dashboard"
}

export const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        handleDashboardSidebar: (state, action: PayloadAction<boolean>) => {
            state.isSidebarOpen = action.payload
        },
        setNavbarTitle: (state, action: PayloadAction<string>) => {
            state.navbarTitle = action.payload
        }
    },
})

export const { handleDashboardSidebar, setNavbarTitle } = commonSlice.actions

export default commonSlice.reducer
