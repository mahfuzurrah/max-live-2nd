import { StaticImageData } from "next/image";

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


export interface FlowItem {
    id: string;
    name: string;
    status: "COMPLETED" | "INCOMPLETED";
    icon: StaticImageData;
    describe: string;
    offsetX?: number;
    offsetY?: number;
}