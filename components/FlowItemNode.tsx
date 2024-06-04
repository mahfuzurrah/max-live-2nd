import { useState } from "react";
import { FaPencilAlt, FaPlus } from "react-icons/fa";
import { Handle, HandleType, Position } from "reactflow";
import Image from "next/image"
import { FlowItemNodeData, FlowItemNodeTuple, IFlowItemNode } from "@/types";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addFlowEdge, addFlowNode, setEditMode } from "@/lib/features/flow/flowSlice";
import { RootState } from "@/lib/store";
import { v4 as uuidv4 } from 'uuid';

interface IFlowItemNodeProps {
    data: FlowItemNodeData
}

export default function FlowItemNode({ data }: IFlowItemNodeProps) {
    const dispatch = useAppDispatch()
    const { flowNodesList } = useAppSelector((state: RootState) => state.flow)
    const { setFlowNodesList, name, icon, handle: { source, target } } = data || {}
    const [showPlus, setShowPlus] = useState(true)
    const [childCount, setChildCount] = useState(1)

    console.log(childCount)

    function addTargetFlowItem() {
        if (1 <= childCount && childCount <= 4) {
            const targetId = uuidv4()
            const sourceNodeIndex = flowNodesList.findIndex((node: IFlowItemNode) => node.id === data.id);
            const oldNodeData = flowNodesList[sourceNodeIndex];

            const { position: { x, y } } = oldNodeData;
            const oldData = oldNodeData.data;

            let position = { x, y };

            if (childCount == 1) {
                position = {
                    x: x + 300,
                    y
                }
            }

            if (childCount == 2) {
                position = {
                    x,
                    y: y + 100
                }
            }

            if (childCount == 3) {
                position = {
                    x: x - 300,
                    y
                }
            }

            if (childCount == 4) {
                position = {
                    x,
                    y: y - 100
                }
            }

            const newNode: IFlowItemNode = {
                ...oldNodeData,
                id: targetId,
                type: 'flowItem',
                position,
                data: {
                    ...oldData,
                    id: targetId,
                    type: "target"
                }
            };

            dispatch(addFlowNode(newNode))

            if (childCount === 1) {

                dispatch(addFlowEdge({ id: uuidv4(), source: data.id, target: targetId, sourceHandle: "s-r", targetHandle: "t-l" }))
            }

            if (childCount === 2) {
                dispatch(addFlowEdge({ id: uuidv4(), source: data.id, target: targetId, sourceHandle: "s-b", targetHandle: "t-t" }))
            }

            if (childCount === 3) {
                dispatch(addFlowEdge({ id: uuidv4(), source: data.id, target: targetId, sourceHandle: "s-l", targetHandle: "t-r" }))
            }

            if (childCount === 4) {
                dispatch(addFlowEdge({ id: uuidv4(), source: data.id, target: targetId, sourceHandle: "s-t", targetHandle: "t-b" }))
            }

            setFlowNodesList((prev: IFlowItemNode[]) => {
                return [...prev, newNode]
            })

            setChildCount(prev => prev + 1)

        }
    }

    function handleUpdateFlowItem(id: string) {
        const sourceNodeIndex = flowNodesList.findIndex((node: IFlowItemNode) => node.id === data.id);
        const flowNode = flowNodesList[sourceNodeIndex];

        dispatch(setEditMode(flowNode))
    }

    return (
        <>
            <Handle className="opacity-0" id="s-b" type="source" position={Position.Bottom} />
            <Handle className="opacity-0" id="s-t" type="source" position={Position.Top} />
            <Handle className="opacity-0" id="s-l" type="source" position={Position.Left} />
            <Handle className="opacity-0" id="s-r" type="source" position={Position.Right} />

            <Handle className="opacity-0" id="t-b" type="target" position={Position.Bottom} />
            <Handle className="opacity-0" id="t-t" type="target" position={Position.Top} />
            <Handle className="opacity-0" id="t-l" type="target" position={Position.Left} />
            <Handle className="opacity-0" id="t-r" type="target" position={Position.Right} />


            <div className="relative flex items-center gap-4">
                <div className="flex gap-3 items-center justify-between bg-[#E6F0FF] w-52 py-2 px-4 rounded-md m-4">
                    <Image src={icon} alt="" width={24} height={24} />
                    <p>{name}</p>
                    <FaPencilAlt onClick={() => handleUpdateFlowItem(data.id)} className="cursor-pointer" />
                </div>

                {childCount === 1 && <FaPlus onClick={addTargetFlowItem} className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer" />}
                {childCount === 2 && <FaPlus onClick={addTargetFlowItem} className="absolute bottom-0 left-1/2 -translate-x-1/2 cursor-pointer" />}
                {childCount === 3 && <FaPlus onClick={addTargetFlowItem} className="absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer" />}
                {childCount === 4 && <FaPlus onClick={addTargetFlowItem} className="absolute top-0 left-1/2 -translate-x-1/2 cursor-pointer" />}
            </div>
        </>
    )
}
