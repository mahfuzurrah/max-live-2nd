import ReactFlow, { addEdge, applyEdgeChanges, applyNodeChanges, Connection, MarkerType, NodeChange } from 'reactflow';
import FlowItemNode from './FlowItemNode';
import { IFlowItemNode } from '@/types';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { RootState } from '@/lib/store';
import { addFlowEdge, onFlowNodesChange } from '@/lib/features/flow/flowSlice';
import { useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

const nodeTypes = { flowItem: FlowItemNode };

export default function ReactFlowContainer() {
    const dispatch = useAppDispatch()
    const { flowEdgesList, flowNodesList } = useAppSelector((state: RootState) => state.flow)

    const onNodesChange = (changes: NodeChange[]) => {
        dispatch(onFlowNodesChange(applyNodeChanges(changes, flowNodesList) as IFlowItemNode[]))
    }

    const onConnect = useCallback(
        (params: Connection) => {
            if (params.source && params.sourceHandle && params.target && params.targetHandle) {
                const { source, sourceHandle, target, targetHandle } = params;

                dispatch(addFlowEdge({
                    id: uuidv4(),
                    source,
                    target,
                    sourceHandle,
                    targetHandle,
                    markerEnd: {
                        type: MarkerType.ArrowClosed,
                        width: 20,
                        height: 20,
                        color: '#333',
                    },
                }));

                console.log(params);
                return params;
            }
            return null;
        },
        []
    );

    return (
        <ReactFlow
            nodes={flowNodesList}
            edges={flowEdgesList}
            onNodesChange={onNodesChange}
            nodeTypes={nodeTypes}
            onConnect={onConnect}
        />
    );
}