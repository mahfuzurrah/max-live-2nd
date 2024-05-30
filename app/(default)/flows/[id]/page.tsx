"use client";
import UpdateFlowFlowItem from "@/components/dashboard/UpdateFlowItem";
// Importing required images and components
import Cors from "@/public/images/arrows-cross.svg";
import commonQu from "@/public/images/comments-question.svg";
import documentIcon from "@/public/images/file-minus.svg";
import FilterIcon from "@/public/images/filter.svg";
import LinkIcon from "@/public/images/link.svg";
import { FlowItem } from "@/types";
import { Button, Select, Switch } from "antd";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { FaPencilAlt, FaPlus } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';


const FlowDetails: React.FC = () => {
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

  // State variables
  const [shakingIndex, setShakingIndex] = useState<number | null>(null);
  const [droppedFlowItems, setDroppedFlowItems] = useState<FlowItem[]>([]);
  const [editMode, setEditMode] = useState<FlowItem | null>(null);
  // const [activeSwitch, setActiveSwitch] = useState<boolean>(false);

  // Counter for generating unique IDs for dropped items
  const [idCounter, setIdCounter] = useState<number>(5);

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
      const item = JSON.parse(draggedFlowItem);
      const offsetX = e.clientX - e.currentTarget.getBoundingClientRect().left;
      const offsetY = e.clientY - e.currentTarget.getBoundingClientRect().top;

      if (item.type === "graph") {
        // Update position of existing item
        const newFlowItems = droppedFlowItems.map((i) => {
          if (i.id === item.id) {
            return {
              ...i,
              offsetX,
              offsetY,
            };
          }
          return i;
        });
        setDroppedFlowItems(newFlowItems);
      } else {
        // Add new item
        const newFlowItem = { ...item, offsetX, offsetY };
        setDroppedFlowItems([...droppedFlowItems, newFlowItem]);
        // setIdCounter(idCounter + 1);
      }
    }
  };

  const handleAddSimilarFlowItem = (item: FlowItem) => {
    const { offsetX, offsetY } = item || {}

    if (offsetX && offsetY) {
      const newFlowItem = { ...item, id: uuidv4(), offsetX: offsetX + 260, offsetY };
      setDroppedFlowItems([...droppedFlowItems, newFlowItem]);
      // setIdCounter(idCounter + 1);
    }
  };

  const handleUpdateItemInfo = (item: FlowItem) => {
    // setData(prevData =>
    //   prevData.map(el => el.id === item.id ? { ...el, ...item } : el)
    // );

    setDroppedFlowItems(prevData =>
      prevData.map(el => el.id === item.id ? { ...el, ...item } : el)
    );
  }

  // Event handler for drag over (needed for dropping)
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  // Event handler for clicking an item inside the graph area
  const handleClickInside = (item: FlowItem) => {
    setEditMode(item);
  };

  // Event handler for saving edited item
  const onSaveButtonClick = () => {
    setEditMode(null);
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
        {!editMode ? (
          <div>
            <h3 className="my-4">Graph</h3>
            <div
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              className="bg-white rounded-xl min-h-[40vh] p-4 relative"
            >
              <div className="flex gap-4">
                {droppedFlowItems.map((item, i) => (
                  <div
                    draggable
                    onDragStart={(e) => handleDragStart(e, item, "graph")}
                    key={i}
                    className="absolute flex items-center gap-4"
                    style={{
                      left: `${item.offsetX}px`,
                      top: `${item.offsetY}px`,
                    }}

                  >
                    <div className="flex gap-3 items-center justify-between bg-[#E6F0FF] w-52 py-2 px-4 rounded-md">
                      <Image src={item.icon} alt="" width={24} height={24} />
                      <p>{item.name}</p>
                      <FaPencilAlt className="cursor-pointer" onClick={() => handleClickInside(item)} />
                    </div>
                    <FaPlus onClick={(e) => handleAddSimilarFlowItem(item)} className="cursor-pointer" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <UpdateFlowFlowItem item={editMode} handleUpdateItemInfo={handleUpdateItemInfo} onSaveButtonClick={onSaveButtonClick} />
        )}
      </div>
    </div>
  );
};

export default FlowDetails;
