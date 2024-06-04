import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FlowItemNodeTuple, IFlowEdgeData, IFlowItemNode } from '@/types'

interface IMutateFlowNode {
    node: IFlowItemNode,
    index: number
}

interface FlowState {
    // flowItem: {
    //     nodes: FlowItemNodeTuple[];
    //     edges: IFlowEdgeData[];
    // },
    flowNodesList: IFlowItemNode[];
    flowEdgesList: IFlowEdgeData[];
    editFlowItem: IFlowItemNode | null;
}

const initialState: FlowState = {
    // flowItem: {
    //     nodes: [],
    //     edges: [],
    // },
    flowNodesList: [],
    flowEdgesList: [],
    editFlowItem: null
}

export const flowSlice = createSlice({
    name: 'flow',
    initialState,
    reducers: {
        // addFlowSourceNode: (state, action: PayloadAction<FlowItemNodeTuple>) => {
        //     state.flowItem.nodes.push(action.payload)
        // },
        // addFlowTargetNode: (state, action: PayloadAction<IMutateFlowNode>) => {
        //     const { index, node } = action.payload

        //     if (index >= 0 && index < state.flowItem.nodes.length) {
        //         state.flowItem.nodes[index][1] = node
        //     }
        // },


        addFlowNode: (state, action: PayloadAction<IFlowItemNode>) => {
            state.flowNodesList.push(action.payload)
        },
        addFlowEdge: (state, action: PayloadAction<IFlowEdgeData>) => {
            state.flowEdgesList.push(action.payload)
        },
        setEditMode: (state, action: PayloadAction<IFlowItemNode | null>) => {
            state.editFlowItem = action.payload
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

export const { setEditMode, addFlowNode, addFlowEdge, updateFlowNodes, onFlowNodesChange } = flowSlice.actions

export default flowSlice.reducer
