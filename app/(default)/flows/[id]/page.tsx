"use client";
// Importing required images and components
import Cors from "@/public/images/arrows-cross.svg";
import commonQu from "@/public/images/comments-question.svg";
import documentIcon from "@/public/images/file-minus.svg";
import FilterIcon from "@/public/images/filter.svg";
import LinkIcon from "@/public/images/link.svg";
import { Button, Select, Switch } from "antd";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { FaPencilAlt, FaPlus } from "react-icons/fa";

// Interface for the item in the data array
interface Item {
  name: string;
  id: number;
  status: string;
  icon: StaticImageData;
  describe: string;
  offsetX?: number;
  offsetY?: number;
}

const FlowDetails: React.FC = () => {
  // Sample data for items
  const data: Item[] = [
    {
      name: "Document",
      id: 1,
      status: "completed",
      icon: documentIcon,
      describe:
        "Your input is a document, you can ask whatever you want to the model regarding this text, analyse it, generate a conclusion...",
    },
    {
      name: "Link",
      id: 2,
      status: "completed",
      icon: LinkIcon,
      describe:
        "Your input is a document, you can ask whatever you want to the model regarding this text, analyse it, generate a conclusion...",
    },
    {
      name: "If",
      id: 3,
      status: "completed",
      icon: Cors,
      describe:
        "Your input is a document, you can ask whatever you want to the model regarding this text, analyse it, generate a conclusion...",
    },
    {
      name: "Language",
      id: 4,
      status: "completed",
      icon: commonQu,
      describe:
        "Your input is a document, you can ask whatever you want to the model regarding this text, analyse it, generate a conclusion...",
    },
  ];

  // State variables
  const [shakingIndex, setShakingIndex] = useState<number | null>(null);
  const [droppedItems, setDroppedItems] = useState<Item[]>([]);
  const [editMode, setEditMode] = useState<Item | null>(null);
  const [activeSwitch, setActiveSwitch] = useState<boolean>(false);

  // Counter for generating unique IDs for dropped items
  const [idCounter, setIdCounter] = useState<number>(5);

  // Event handler for drag start
  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    item: Item,
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
    const draggedItem = e.dataTransfer.getData("item");
    if (draggedItem) {
      const item = JSON.parse(draggedItem);
      const offsetX = e.clientX - e.currentTarget.getBoundingClientRect().left;
      const offsetY = e.clientY - e.currentTarget.getBoundingClientRect().top;

      if (item.type === "graph") {
        // Update position of existing item
        const newItems = droppedItems.map((i) => {
          if (i.id === item.id) {
            return {
              ...i,
              offsetX,
              offsetY,
            };
          }
          return i;
        });
        setDroppedItems(newItems);
      } else {
        // Add new item
        const newItem = { ...item, id: idCounter, offsetX, offsetY };
        setDroppedItems([...droppedItems, newItem]);
        setIdCounter(idCounter + 1);
      }
    }
  };

  // Event handler for drag over (needed for dropping)
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  // Event handler for clicking an item inside the graph area
  const handleClickInside = (item: Item) => {
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
              className={`bg-[#E6F0FF] rounded-xl cursor-pointer ${
                shakingIndex === index ? "animate-shake" : ""
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
                {droppedItems.map((item, i) => (
                  <div
                    draggable
                    onDragStart={(e) => handleDragStart(e, item, "graph")}
                    key={i}
                    className="absolute flex items-center gap-4"
                    style={{
                      left: `${item.offsetX}px`,
                      top: `${item.offsetY}px`,
                    }}
                    onClick={() => handleClickInside(item)}
                  >
                    <div className="flex gap-3 items-center justify-between bg-[#E6F0FF] w-52 py-2 px-4 rounded-md">
                      <Image src={item.icon} alt="" width={24} height={24} />
                      <p>{item.name}</p>
                      <FaPencilAlt />
                    </div>
                    <FaPlus />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h3 className="my-4">Graph</h3>
            <div className="bg-white rounded-xl min-h-[40vh] flex flex-col justify-start p-4">
              <div className="mb-4">
                <p className="mb-2">Step Name</p>
                <div className="rounded-md bg-[#E6F0FF] py-2 px-4 font-semibold w-48 text-center">
                  Extract Law 2024
                </div>
              </div>
              <div className="">
                <p className="mb-2">Rules</p>
                <div className="h-40 overflow-auto bg-[#E6F0FF] font-semibold px-4 py-2 rounded-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  labore quaerat molestiae porro quis autem enim maiores ipsa
                  aspernatur velit! Voluptatibus ut a dicta nobis magni est ab
                  eligendi neque!Lorem Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Numquam eos consequatur suscipit sequi,
                  molestiae exercitationem, asperiores labore vel provident
                  reiciendis officiis facere maxime maiores excepturi, iusto
                  quaerat. Non hic, optio nemo facilis eveniet quaerat?
                  Molestiae rerum ducimus officiis quo quisquam, accusamus
                  perspiciatis maxime vel quasi pariatur assumenda
                  necessitatibus eos, reprehenderit, nihil ipsa? Nam dignissimos
                  incidunt perferendis tempore fugit quae ipsam aspernatur est
                  laborum autem minus voluptates accusantium ut cum voluptatem
                  cumque expedita facilis reiciendis nesciunt, doloremque
                  explicabo? Amet consequuntur magnam libero accusamus animi
                  odit inventore, ipsam vero, provident tempora nam minima nobis
                  ea possimus doloribus saepe numquam, repellendus modi
                  pariatur?
                </div>
              </div>
              <div className="flex items-center gap-2 mt-5 mb-4">
                <p>Is Active ?</p>
                <Switch
                  style={{
                    backgroundColor: activeSwitch ? "#0065FF" : "#bbbbbb",
                  }}
                  defaultChecked={activeSwitch}
                  checked={activeSwitch}
                  onChange={setActiveSwitch}
                />
              </div>
              <Button
                onClick={onSaveButtonClick}
                type="primary"
                size="small"
                className="w-20 rounded-lg"
              >
                Save
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FlowDetails;
