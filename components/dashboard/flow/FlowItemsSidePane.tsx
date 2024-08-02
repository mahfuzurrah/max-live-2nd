import { useAppSelector } from "@/lib/hooks"
import { RootState } from "@/lib/store"
import { v4 as uuidv4 } from 'uuid';
import documentIcon from "@/public/images/file-minus.svg";
import LinkIcon from "@/public/images/link.svg";
import AIIcon from "@/public/images/sparkles.svg";
import shareIcon from "@/public/images/split.svg";
import { Dispatch, SetStateAction, useState } from "react";
import { FlowItem } from "@/types";
import gradientBg from "@/public/images/gradient-background.png";
import Image from "next/image";

interface FlowItemSidePaneProps {
    setShakingIndex: Dispatch<SetStateAction<number | null>>;
    shakingIndex: number | null;
}

export default function FlowItemsSidePane({ setShakingIndex, shakingIndex }: FlowItemSidePaneProps) {
    const { flowItemSidePane } = useAppSelector((state: RootState) => state.flow);
    const [data, setData] = useState<FlowItem[]>([
        {
            name: "Ask AI",
            id: uuidv4(),
            status: "COMPLETED",
            icon: AIIcon,
            describe: "Your input is a document, you can ask whatever you want to the model regarding this text, analyse it, generate a conclusion...",
        },
        {
            name: "Document",
            id: uuidv4(),
            status: "INCOMPLETED",
            icon: documentIcon,
            describe: "Your input is a document, you can ask whatever you want to the model regarding this text, analyse it, generate a conclusion...",
        },
        {
            name: "Link",
            id: uuidv4(),
            status: "COMPLETED",
            icon: LinkIcon,
            describe: "Your input is a document, you can ask whatever you want to the model regarding this text, analyse it, generate a conclusion...",
        },
        {
            name: "For each",
            id: uuidv4(),
            status: "COMPLETED",
            icon: shareIcon,
            describe: "Your input is a document, you can ask whatever you want to the model regarding this text, analyse it, generate a conclusion...",
        },
    ]);

    // Event handler for drag start
    const handleDragStart = (
        e: React.DragEvent<HTMLDivElement>,
        item: FlowItem,
        type?: string
    ) => {
        e.dataTransfer.setData(
            "item",
            JSON.stringify({
                ...item,
                type,
            })
        );
    };

    return (
        <div className="flex flex-col gap-4 h-full px-5 rounded-lg"
            style={{
                backgroundImage: `url(${gradientBg.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: "no-repeat"
            }}
        >
            <h2 className="text-xl mt-4 text-center text-white">Step</h2>
            {data.map((item, index) => (
                <div
                    key={index}
                    draggable={true}
                    onDragStart={(e) => handleDragStart(e, item)}
                    onClick={() => {
                        setShakingIndex(index);
                        setTimeout(() => setShakingIndex(null), 500);
                    }}
                    className={`bg-[#E6F0FF] rounded-xl cursor-pointer ${shakingIndex === index ? "animate-shake" : ""
                        }`}
                >
                    <div className="flex flex-col items-center px-2 py-4">
                        <Image src={item.icon} alt="" width={24} height={24} />
                        <div className="px-2 text-center">
                            <h3>{item.name}</h3>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
