import { StaticImageData } from "next/image";
import { Dispatch, SetStateAction } from "react";
import { MarkerType } from "reactflow";

export interface TopModel {
    count: number;
    userImgSrc: StaticImageData;
    userName: string;
    liveImgSrc: string;
    liveCount: string;
    followersCount: string;
    ratingImgSrc: string;
    avgRating: string;
}

export interface CardItem {
    imgSrc: string;
    title: string;
    number: string;
    gain: string;
}

// Type for Status
type Status = "COMPLETED" | "INCOMPLETED";



// Interface for Flow Item
export interface FlowItem {
    id: string;
    name: string;
    status: Status;
    icon: StaticImageData;
    describe: string;
    offsetX?: number;
    offsetY?: number;
}

export type HandlePosition = "bottom" | "left" | "right" | "top"

export interface IHandleType {
    source: HandlePosition,
    target: HandlePosition
}

// Interface for Position
interface NodePosition {
    x: number;
    y: number;
}

// Interface for Flow Item Node Data
export interface FlowItemNodeData {
    id: string;
    name: string;
    status: Status;
    icon: StaticImageData;
    describe: string;
    offsetX: number;
    offsetY: number;
    topButton: boolean;
    rightButton: boolean;
    leftButton: boolean;
    bottomButton: boolean;
}

// Interface for Flow Item Node
export interface IFlowItemNode {
    id: string;
    type: "flowItem";
    position: NodePosition;
    data: FlowItemNodeData;
    width?: number;
    height?: number;
    selected?: boolean;
    positionAbsolute?: NodePosition;
    dragging?: boolean;
}

// Interface for Flow Edges Data
export interface IFlowEdgeData {
    id: string;
    source: string;
    target: string;
    sourceHandle: string;
    targetHandle: string;
    markerEnd: {
        type: MarkerType.ArrowClosed;
        width: number;
        height: number;
        color: string;
    },
}
