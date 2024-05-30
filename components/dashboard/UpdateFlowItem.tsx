import { FlowItem } from '@/types';
import { Button, Input, Switch } from 'antd'
import TextArea from 'antd/es/input/TextArea';
import React, { useEffect, useState } from 'react'

interface UpdateFlowItemProps {
    onSaveButtonClick: () => void,
    item: FlowItem,
    handleUpdateItemInfo: (item: FlowItem) => void
}

export default function UpdateFlowItem({ onSaveButtonClick, item, handleUpdateItemInfo }: UpdateFlowItemProps) {
    const [stepName, setStepName] = useState("")
    const [itemDescribe, setItemDescribe] = useState("")
    const [itemStatus, setItemStatus] = useState<"COMPLETED" | "INCOMPLETED">("INCOMPLETED")

    useEffect(() => {
        const { name, status, describe } = item || {}

        if (name && status && describe) {
            setStepName(name)
            setItemStatus(status)
            setItemDescribe(describe)
        }
    }, [])

    function handleSwitch(check: boolean) {
        if (check) {
            setItemStatus("COMPLETED")
        } else {
            setItemStatus("INCOMPLETED")
        }
    }

    function handleUpdate() {
        const obj: FlowItem = {
            ...item,
            name: stepName,
            status: itemStatus,
            describe: itemDescribe
        }

        handleUpdateItemInfo(obj)

        onSaveButtonClick()
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
                <Button onClick={handleUpdate} type="primary" size="middle" className="w-20 rounded-lg mt-2">
                    Save
                </Button>
            </div>
        </div>
    )
}
