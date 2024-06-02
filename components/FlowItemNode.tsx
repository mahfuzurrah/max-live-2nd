import { useState } from "react";
import { FaPencilAlt, FaPlus } from "react-icons/fa";
import { Handle, Position } from "reactflow";
import Image from "next/image"
import { FlowItemNodeData, IFlowItemNode } from "@/types";
import { useAppDispatch } from "@/lib/hooks";
import { setEditMode } from "@/lib/features/flow/flowSlice";

interface IFlowItemNodeProps {
    data: FlowItemNodeData
}

export default function FlowItemNode({ data }: IFlowItemNodeProps) {
    const { setFlowNodesList, name, icon } = data || {}
    const dispatch = useAppDispatch()
    const [showPlus, setShowPlus] = useState(true)

    function addNewFlowItem() {
        setFlowNodesList((prev: IFlowItemNode[]) => {
            const oldNodeData = prev[0]

            const { position: { x, y } } = oldNodeData
            const oldData = oldNodeData.data;

            const newNode: IFlowItemNode = {
                ...oldNodeData,
                id: "1",
                type: 'flowItem',
                position: { x: x + 300, y },
                data: {
                    ...oldData,
                    id: "1",
                    type: "target"
                }
            };

            return [...prev, newNode]
        })

        setShowPlus(false)
    }

    function handleUpdateFlowItem(id: string) {
        setFlowNodesList((prev: IFlowItemNode[]) => {
            if (prev[Number(id)]) {
                dispatch(setEditMode(prev[Number(id)]))
            }
            return prev
        })
    }

    return (
        <>
            {data.type == "source" && <Handle className="opacity-0" type="source" position={Position.Right} />}
            {data.type == "target" && <Handle className="opacity-0" type="target" position={Position.Left} />}

            <div className="flex items-center gap-4">
                <div className="flex gap-3 items-center justify-between bg-[#E6F0FF] w-52 py-2 px-4 rounded-md">
                    <Image src={icon} alt="" width={24} height={24} />
                    <p>{name}</p>
                    <FaPencilAlt onClick={() => handleUpdateFlowItem(data.id)} className="cursor-pointer" />
                </div>
                {
                    data.type == "source" && showPlus && <div>
                        <FaPlus onClick={addNewFlowItem} className="cursor-pointer" />
                    </div>
                }
            </div>
        </>
    )
}
