import ReactFlow, { applyNodeChanges, NodeChange } from 'reactflow';
import FlowItemNode from './FlowItemNode';
import {  IFlowItemNode } from '@/types';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { RootState } from '@/lib/store';
import { onFlowNodesChange, updateFlowNodes } from '@/lib/features/flow/flowSlice';

const nodeTypes = { flowItem: FlowItemNode };

export default function ReactFlowContainer() {
    const dispatch = useAppDispatch()
    const { flowEdgesList, flowNodesList } = useAppSelector((state: RootState) => state.flow)

    const onNodesChange = (changes: NodeChange[]) => {
        dispatch(onFlowNodesChange(applyNodeChanges(changes, flowNodesList) as IFlowItemNode[]))
    }

    return (
        <ReactFlow
            nodes={flowNodesList}
            edges={flowEdgesList}
            onNodesChange={onNodesChange}
            nodeTypes={nodeTypes}
        />
    );
}