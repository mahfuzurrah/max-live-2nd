import { StaticImageData } from "next/image";
import { Dispatch, SetStateAction } from "react";

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

// Type for Node Type
type NodeType = "source" | "target";

// Interface for Position
interface Position {
    x: number;
    y: number;
}

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

// Interface for Flow Item Node Data
export interface FlowItemNodeData {
    type: NodeType;
    id: string;
    name: string;
    status: Status;
    icon: StaticImageData;
    describe: string;
    offsetX: number;
    offsetY: number;
    setFlowNodesList: Dispatch<SetStateAction<IFlowItemNode[]>>;
}

// Interface for Flow Item Node
export interface IFlowItemNode {
    id: string;
    type: "flowItem";
    position: Position;
    data: FlowItemNodeData;
    width?: number;
    height?: number;
    selected?: boolean;
    positionAbsolute?: Position;
    dragging?: boolean;
}

// Interface for Flow Edges Data
export interface IFlowEdgesData {
    id: string;
    source: string;
    target: string;
}