import {  IFlowItemNode } from '@/types'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface FlowState {
    editFlowItem: IFlowItemNode | null
}

const initialState: FlowState = {
    editFlowItem: null
}

export const flowSlice = createSlice({
    name: 'flow',
    initialState,
    reducers: {
        setEditMode: (state, action: PayloadAction<IFlowItemNode | null>) => {
            state.editFlowItem = action.payload
        }
    },
})

export const { setEditMode } = flowSlice.actions

export default flowSlice.reducer