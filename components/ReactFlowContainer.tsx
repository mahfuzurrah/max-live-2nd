import { Dispatch, SetStateAction, useCallback } from 'react';
import ReactFlow, { applyNodeChanges, NodeChange } from 'reactflow';
import FlowItemNode from './FlowItemNode';
import { IFlowEdgesData, IFlowItemNode } from '@/types';

const nodeTypes = { flowItem: FlowItemNode };

interface ReactFlowContainerProps {
    flowNodesList: IFlowItemNode[];
    setFlowNodesList: Dispatch<SetStateAction<IFlowItemNode[]>>;
    flowEdgesList: IFlowEdgesData[];
    setFlowEdgesList: Dispatch<SetStateAction<IFlowEdgesData[]>>
}

export default function ReactFlowContainer({ setFlowNodesList, flowEdgesList, flowNodesList }: ReactFlowContainerProps) {
    const onNodesChange = useCallback(
        (changes: NodeChange[]) => setFlowNodesList((nds) => applyNodeChanges(changes, nds) as IFlowItemNode[]),
        [setFlowNodesList]
    );

    return (
        <ReactFlow
            nodes={flowNodesList}
            edges={flowEdgesList}
            onNodesChange={onNodesChange}
            nodeTypes={nodeTypes}
        />
    );
}