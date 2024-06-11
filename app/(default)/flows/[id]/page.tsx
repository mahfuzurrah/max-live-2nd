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
import AIIcon from "@/public/images/sparkles.svg";
import shareIcon from "@/public/images/split.svg";
import { FlowItem, FlowItemNodeData, IFlowEdgeData, IFlowItemNode, IHandleType } from "@/types";
import { Button, Select } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Position } from "reactflow";
import { v4 as uuidv4 } from 'uuid';
import gradientBg from "@/public/images/gradient-background.png";
import FlowItemSidePane from "@/components/dashboard/flow/FlowItemsSidePane";
import FlowItemSideActionModal from "@/components/dashboard/flow/FlowItemSideActionModal";

import { useRouter } from 'next/navigation'

const FlowDetails: React.FC = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()

  const { flowItemSidePane } = useAppSelector((state: RootState) => state.flow)

  // State variables
  const [shakingIndex, setShakingIndex] = useState<number | null>(null);
  const [droppedFlowItems, setDroppedFlowItems] = useState<FlowItem[]>([]);


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
        {/* <div className="flex justify-between">
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
        </div> */}

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Button type="primary" className="rounded-xl" onClick={() => router.back()}>Back</Button>
            <h4>Tax Analysis</h4>
          </div>

          <div className="flex items-center gap-4">
            <Button type="primary" className="rounded-xl">Save</Button>
            <Button type="primary" className="rounded-xl">Run</Button>
            <Button className="wallet-btn">
              <Image src={FilterIcon} alt="" width={24} height={24} />
              Filter
            </Button>
          </div>
        </div>

        <div className="flex gap-6 w-full bg-white rounded-xl p-4 mb-4 mt-5">
          <div className="w-full">
            <>
              <h3 className="my-4">Graph</h3>
              <div onDrop={handleDrop}
                onDragOver={handleDragOver}
                style={{ width: "100%", height: "60vh" }}
                className='w-full'>

                <ReactFlowContainer />
              </div>
            </>
          </div>
          <div>
            {
              flowItemSidePane ? <FlowItemSideActionModal /> :
                <FlowItemSidePane setShakingIndex={setShakingIndex} shakingIndex={shakingIndex} />
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowDetails;
