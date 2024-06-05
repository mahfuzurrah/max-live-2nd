"use client";

import UpdateFlowFlowItem from "@/components/dashboard/UpdateFlowItem";
import ReactFlowContainer from "@/components/ReactFlowContainer";
import { addFlowNode } from "@/lib/features/flow/flowSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
// Importing required images and components
import Cors from "@/public/images/arrows-cross.svg";
import commonQu from "@/public/images/comments-question.svg";
import documentIcon from "@/public/images/file-minus.svg";
import FilterIcon from "@/public/images/filter.svg";
import LinkIcon from "@/public/images/link.svg";
import { FlowItem, FlowItemNodeData, IFlowEdgeData, IFlowItemNode, IHandleType } from "@/types";
import { Button, Select } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Position } from "reactflow";
import { v4 as uuidv4 } from 'uuid';

const FlowDetails: React.FC = () => {
  const dispatch = useAppDispatch()
  // Sample data for items
  const [data, setData] = useState<FlowItem[]>([
    {
      name: "Document",
      id: uuidv4(),
      status: "COMPLETED",
      icon: documentIcon,
      describe: "Your input is a document, you can ask whatever you want to the model regarding this text, analyse it, generate a conclusion...",
    },
    {
      name: "Link",
      id: uuidv4(),
      status: "INCOMPLETED",
      icon: LinkIcon,
      describe: "Your input is a document, you can ask whatever you want to the model regarding this text, analyse it, generate a conclusion...",
    },
    {
      name: "If",
      id: uuidv4(),
      status: "COMPLETED",
      icon: Cors,
      describe: "Your input is a document, you can ask whatever you want to the model regarding this text, analyse it, generate a conclusion...",
    },
    {
      name: "Language",
      id: uuidv4(),
      status: "COMPLETED",
      icon: commonQu,
      describe: "Your input is a document, you can ask whatever you want to the model regarding this text, analyse it, generate a conclusion...",
    },
  ]);

  const { editFlowItem } = useAppSelector((state: RootState) => state.flow)



  // State variables
  const [shakingIndex, setShakingIndex] = useState<number | null>(null);
  const [droppedFlowItems, setDroppedFlowItems] = useState<FlowItem[]>([]);

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

  // Event handler for dropping an item outside the graph area
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    const draggedFlowItem = e.dataTransfer.getData("item");

    if (draggedFlowItem) {
      const item: FlowItem = JSON.parse(draggedFlowItem);
      const offsetX = e.clientX - e.currentTarget.getBoundingClientRect().left;
      const offsetY = e.clientY - e.currentTarget.getBoundingClientRect().top;

      // Add new item
      const newFlowItem = { ...item, offsetX, offsetY };
      setDroppedFlowItems([...droppedFlowItems, newFlowItem]);

      const id = uuidv4()
      const flowItemData: FlowItemNodeData = {
        ...newFlowItem,
        id,
        rightButton: true,
        bottomButton: false,
        leftButton: false,
        topButton: false
      }

      const newNode: IFlowItemNode = {
        id,
        type: 'flowItem',
        position: { x: offsetX, y: offsetY },
        data: flowItemData
      };

      dispatch(addFlowNode(newNode))
    }
  };

  // Event handler for drag over (needed for dropping)
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div className="p-4">
      <div>
        <div className="flex justify-between">
          <h3>#FlowName</h3>
          <div className="flex gap-4">
            <Select
              defaultValue="This month"
              className="select"
              options={[{ value: "This month", label: "This month" }]}
            />
            <Button className="wallet-btn">
              <Image src={FilterIcon} alt="" width={24} height={24} />
              Filter
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-4 mt-5 bg-white sm:flex-row rounded-xl">
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
              <div className="flex gap-2 px-2 py-3">
                <Image src={item.icon} alt="" width={24} height={24} />
                <div className="px-2">
                  <h3>{item.name}</h3>
                  <p>{item.describe}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {!editFlowItem ? (
          <div>
            <h3 className="my-4">Graph</h3>
            <div onDrop={handleDrop}
              onDragOver={handleDragOver}
              style={{ width: "100%", height: "60vh" }}
              className='w-full bg-white rounded-xl p-4 mb-4'>

              <ReactFlowContainer />
            </div>
          </div>
        ) : (
          <UpdateFlowFlowItem
          />
        )}
      </div>
    </div>
  );
};

export default FlowDetails;
