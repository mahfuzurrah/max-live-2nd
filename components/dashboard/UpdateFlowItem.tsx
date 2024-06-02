import { setEditMode } from '@/lib/features/flow/flowSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { RootState } from '@/lib/store';
import { FlowItemNodeData, IFlowItemNode } from '@/types';
import { Button, Input, Switch } from 'antd'
import TextArea from 'antd/es/input/TextArea';
import { useRouter } from 'next/navigation';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'

interface UpdateFlowItemProps {
    flowNodesList: IFlowItemNode[];
    setFlowNodesList: Dispatch<SetStateAction<IFlowItemNode[]>>;
}

export default function UpdateFlowItem({ flowNodesList, setFlowNodesList }: UpdateFlowItemProps) {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const { editFlowItem } = useAppSelector((state: RootState) => state.flow)
    const [stepName, setStepName] = useState("")
    const [itemDescribe, setItemDescribe] = useState("")
    const [itemStatus, setItemStatus] = useState<"COMPLETED" | "INCOMPLETED">("INCOMPLETED")

    useEffect(() => {
        // set initial value of edit flow item
        if (editFlowItem) {
            const { data: { name, describe, status } } = editFlowItem

            if (name && status && describe) {
                setStepName(name)
                setItemStatus(status)
                setItemDescribe(describe)
            }
        }
    }, [])

    function handleSwitch(check: boolean) {
        if (check) {
            setItemStatus("COMPLETED")
        } else {
            setItemStatus("INCOMPLETED")
        }
    }

    function handleUpdateFlow() {
        if (editFlowItem) {
            const oldFlowNodeData: IFlowItemNode = flowNodesList[Number(editFlowItem?.id)]
            const oldFlowData: FlowItemNodeData = oldFlowNodeData.data

            setFlowNodesList((prev: IFlowItemNode[]) => {
                const newNode: IFlowItemNode = {
                    ...oldFlowNodeData,
                    data: {
                        ...oldFlowData,
                        name: stepName,
                        describe: itemDescribe,
                        status: itemStatus
                    }
                };

                const result = [...prev]
                result[Number(editFlowItem?.id)] = newNode

                return [...result]
            })

            dispatch(setEditMode(null))
            setTimeout(() => {
                router.push("/flows")
            }, 500)
        }
    }

    return (
        <div>
            <h3 className="my-4">Graph</h3>
            <div className="bg-white rounded-xl min-h-[40vh] flex flex-col justify-start p-4">
                <div className="mb-4">
                    <p className="mb-2">Step Name</p>
                    <Input className="font-semibold rounded-md border border-stone-300" value={stepName} onChange={(e) => setStepName(e.target.value)} />
                </div>
                <div className="">
                    <p className="mb-2">Rules</p>
                    <TextArea className="font-semibold" rows={4} value={itemDescribe} onChange={(e) => setItemDescribe(e.target.value)} />
                </div>
                <div className="flex items-center gap-2 mt-5 mb-4">
                    <p>Is Active ?</p>
                    <Switch
                        style={{
                            backgroundColor: itemStatus === "COMPLETED" ? "#0065FF" : "#bbbbbb",
                        }}
                        checked={itemStatus === "COMPLETED"}
                        onChange={handleSwitch}
                    />
                </div>
                <Button onClick={handleUpdateFlow} type="primary" size="middle" className="w-20 rounded-lg mt-2">
                    Save
                </Button>
            </div>
        </div>
    )
}
