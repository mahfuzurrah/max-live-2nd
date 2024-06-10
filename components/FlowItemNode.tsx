import { useState, useEffect } from "react";
import { FaPencilAlt, FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Edge, Handle, MarkerType, Node, Position, getConnectedEdges } from "reactflow";
import Image from "next/image";
import { FlowItemNodeData, IFlowItemNode } from "@/types";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addFlowEdge, addFlowNode, setEditMode, setFlowSidePane } from "@/lib/features/flow/flowSlice";
import { RootState } from "@/lib/store";
import { v4 as uuidv4 } from 'uuid';
import { Button } from "antd";

interface IFlowItemNodeProps {
    data: FlowItemNodeData;
}

export default function FlowItemNode({ data }: IFlowItemNodeProps) {
    const dispatch = useAppDispatch();
    const { flowNodesList, flowEdgesList } = useAppSelector((state: RootState) => state.flow);
    const { name, icon } = data || {};
    const [availablePositions, setAvailablePositions] = useState({
        right: true,
        bottom: true,
        left: true,
        top: true,
    });

    useEffect(() => {
        const node = flowNodesList.find((node: IFlowItemNode) => node.id === data.id);
        if (!node) return;

        const connectedEdges = getConnectedEdges([node as Node], flowEdgesList as Edge[]);
        const positions = {
            right: true,
            bottom: true,
            left: true,
            top: true,
        };

        connectedEdges.forEach(edge => {
            if (edge.source === node.id) {
                switch (edge.sourceHandle) {
                    case "s-r":
                        positions.right = false;
                        break;
                    case "s-b":
                        positions.bottom = false;
                        break;
                    case "s-l":
                        positions.left = false;
                        break;
                    case "s-t":
                        positions.top = false;
                        break;
                }
            }
            if (edge.target === node.id) {
                switch (edge.targetHandle) {
                    case "t-r":
                        positions.right = false;
                        break;
                    case "t-b":
                        positions.bottom = false;
                        break;
                    case "t-l":
                        positions.left = false;
                        break;
                    case "t-t":
                        positions.top = false;
                        break;
                }
            }
        });

        setAvailablePositions(positions);
    }, [flowEdgesList, data.id, flowNodesList]);

    // useEffect(() => {
    //     const connectedEdges = getConnectedEdges([data], flowEdgesList);
    //     const positions = {
    //         right: true,
    //         bottom: true,
    //         left: true,
    //         top: true,
    //     };

    //     connectedEdges.forEach(edge => {
    //         if (edge.source === data.id) {
    //             switch (edge.sourceHandle) {
    //                 case "s-r":
    //                     positions.right = false;
    //                     break;
    //                 case "s-b":
    //                     positions.bottom = false;
    //                     break;
    //                 case "s-l":
    //                     positions.left = false;
    //                     break;
    //                 case "s-t":
    //                     positions.top = false;
    //                     break;
    //             }
    //         }
    //         if (edge.target === data.id) {
    //             switch (edge.targetHandle) {
    //                 case "t-r":
    //                     positions.right = false;
    //                     break;
    //                 case "t-b":
    //                     positions.bottom = false;
    //                     break;
    //                 case "t-l":
    //                     positions.left = false;
    //                     break;
    //                 case "t-t":
    //                     positions.top = false;
    //                     break;
    //             }
    //         }
    //     });

    //     setAvailablePositions(positions);
    // }, [flowEdgesList, data]);

    function addTargetFlowItem(positionKey: "right" | "bottom" | "left" | "top") {
        const targetId = uuidv4();
        const sourceNodeIndex = flowNodesList.findIndex((node: IFlowItemNode) => node.id === data.id);
        const oldNodeData = flowNodesList[sourceNodeIndex];
        const { position: { x, y } } = oldNodeData;

        let position = { x, y };

        const unit = 200;

        switch (positionKey) {
            case "right":
                position = { x: x + unit, y };
                break;
            case "bottom":
                position = { x, y: y + unit };
                break;
            case "left":
                position = { x: x - unit, y };
                break;
            case "top":
                position = { x, y: y - unit };
                break;
        }

        const newNode: IFlowItemNode = {
            ...oldNodeData,
            id: targetId,
            type: 'flowItem',
            position,
            data: {
                ...oldNodeData.data,
                id: targetId,
            },
        };

        dispatch(addFlowNode(newNode));

        let sourceHandle = "", targetHandle = "";

        switch (positionKey) {
            case "right":
                sourceHandle = "s-r";
                targetHandle = "t-l";
                break;
            case "bottom":
                sourceHandle = "s-b";
                targetHandle = "t-t";
                break;
            case "left":
                sourceHandle = "s-l";
                targetHandle = "t-r";
                break;
            case "top":
                sourceHandle = "s-t";
                targetHandle = "t-b";
                break;
        }

        dispatch(addFlowEdge({
            id: uuidv4(), source: data.id, target: targetId, sourceHandle, targetHandle, markerEnd: {
                type: MarkerType.ArrowClosed,
                width: 20,
                height: 20,
                color: '#333',
            },
        }));
    }

    function handleUpdateFlowItem(name: string) {
        // const sourceNodeIndex = flowNodesList.findIndex((node: IFlowItemNode) => node.id === data.id);
        // const flowNode = flowNodesList[sourceNodeIndex];

        dispatch(setFlowSidePane(name as "Ask AI" | "Document" | "Link" | "For each"))

        // dispatch(setEditMode(flowNode));
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

            <div className="relative flex items-center gap-4 border-2 border-stone-700 rounded-2xl bg-white">
                <div className="flex flex-col gap-1 items-center justify-between p-5 rounded-md m-2">
                    <div className="h-6">
                        <Image src={icon} alt="" width={24} height={24} />
                    </div>

                    <p className="line-clamp-1 mt-1">{name}</p>
                    <div className="flex justify-between gap-4 mt-1">
                        <Button type="primary" size="small" className="rounded-full">
                            <FaPencilAlt onClick={() => handleUpdateFlowItem(data.name)} className="cursor-pointer" />
                        </Button>
                        <Button type="primary" size="small" className="rounded-full">
                            <MdDelete />
                        </Button>
                    </div>
                </div>

                {availablePositions.right && <FaPlus onClick={() => addTargetFlowItem("right")} className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer opacity-0 hover:opacity-100" />}
                {availablePositions.bottom && <FaPlus onClick={() => addTargetFlowItem("bottom")} className="absolute bottom-0 left-1/2 -translate-x-1/2 cursor-pointer opacity-0 hover:opacity-100" />}
                {availablePositions.left && <FaPlus onClick={() => addTargetFlowItem("left")} className="absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer opacity-0 hover:opacity-100" />}
                {availablePositions.top && <FaPlus onClick={() => addTargetFlowItem("top")} className="absolute top-0 left-1/2 -translate-x-1/2 cursor-pointer opacity-0 hover:opacity-100" />}
            </div>
        </>
    );
}
