import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IFlowEdgeData, IFlowItemNode } from '@/types'

interface IMutateFlowNode {
    node: IFlowItemNode,
    index: number
}

type SidePaneFlowType = "Ask AI" | "Document" | "Link" | "For each" | "Running Flow" | null;

interface FlowState {
    flowNodesList: IFlowItemNode[];
    flowEdgesList: IFlowEdgeData[];
    editFlowItem: IFlowItemNode | null;
    flowItemSidePane: SidePaneFlowType
}

const initialState: FlowState = {
    flowNodesList: [],
    flowEdgesList: [],
    editFlowItem: null,
    flowItemSidePane: "Running Flow"
}

export const flowSlice = createSlice({
    name: 'flow',
    initialState,
    reducers: {
        addFlowNode: (state, action: PayloadAction<IFlowItemNode>) => {
            state.flowNodesList.push(action.payload)
        },
        addFlowEdge: (state, action: PayloadAction<IFlowEdgeData>) => {
            state.flowEdgesList.push(action.payload)
        },
        setEditMode: (state, action: PayloadAction<IFlowItemNode | null>) => {
            state.editFlowItem = action.payload
        },
        setFlowSidePane: (state, action: PayloadAction<SidePaneFlowType>) => {
            state.flowItemSidePane = action.payload
        },
        onFlowNodesChange: (state, action: PayloadAction<IFlowItemNode[]>) => {
            state.flowNodesList = action.payload
        },
        updateFlowNodes: (state, action: PayloadAction<IMutateFlowNode>) => {
            const { index, node } = action.payload

            if (index >= 0 && index < state.flowNodesList.length) {
                state.flowNodesList[index] = node
            }
        }
    },
})

export const { setEditMode, addFlowNode, addFlowEdge, updateFlowNodes, onFlowNodesChange, setFlowSidePane } = flowSlice.actions

export default flowSlice.reducer
