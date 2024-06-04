import { Dispatch, SetStateAction, useCallback, useState } from 'react';
import ReactFlow, { applyNodeChanges, NodeChange } from 'reactflow';
import FlowItemNode from './FlowItemNode';
import { IFlowEdgeData, IFlowItemNode } from '@/types';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { RootState } from '@/lib/store';
import { onFlowNodesChange, updateFlowNodes } from '@/lib/features/flow/flowSlice';

const nodeTypes = { flowItem: FlowItemNode };

interface ReactFlowContainerProps {
    flowNodesList: IFlowItemNode[];
    setFlowNodesList: Dispatch<SetStateAction<IFlowItemNode[]>>;
    flowEdgesList: IFlowEdgeData[];
    setFlowEdgesList: Dispatch<SetStateAction<IFlowEdgeData[]>>
}

export default function ReactFlowContainer({ setFlowNodesList }: ReactFlowContainerProps) {
    const dispatch = useAppDispatch()
    const { flowEdgesList, flowNodesList } = useAppSelector((state: RootState) => state.flow)

    // const onNodesChange = useCallback(
    //     (changes: NodeChange[]) => setFlowNodesList((nds) => applyNodeChanges(changes, nds) as IFlowItemNode[]),
    //     [setFlowNodesList]
    // );

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