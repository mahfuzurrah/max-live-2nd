import { Avatar, Button } from "antd";
import { useState } from "react";
import { LuSettings } from "react-icons/lu";
const Notifications = () => {
  const [active, setActive] = useState<string>("All");
  return (
    <div className="absolute top-14 right-5 p-8 rounded-[16px] shadow-xl bg-white h-[466px] w-[451px]">
      <div className="flex justify-between mb-6">
        <h3 className="">Notifications</h3>
        <LuSettings className="text-2xl" />
      </div>
      <div className="flex h-8 gap-2 mb-2 border-b-2 ">
        <div className="flex duration-1000 ease-in-out">
          <div
            onClick={() => setActive("All")}
            className={`flex gap-3 px-2 cursor-pointer  ${
              active == "All" && "border-b-2 border-blue-primary -mb-[2px]"
            }`}
          >
            <p className={`text-md ${active === "All" && "text-blue-primary"}`}>
              All
            </p>
            <span
              className={`w-6 h-6 flex font-semibold text-blue-primary  items-center justify-center rounded-md badge   ${
                true && "bg-blue-primary/40"
              }`}
            >
              8
            </span>
          </div>
          <p
            onClick={() => setActive("Unread")}
            className={`cursor-pointer px-2 ${
              active === "Unread" &&
              "text-blue-primary border-b-2 border-blue-primary -mb-[2px]"
            }`}
          >
            Updated
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-8 mt-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <Avatar size={50} />
            <div className="">
              <p className="font-semibold text-black text-md">John Doe</p>
              <p className="text-sm">Discussion Comment Create</p>
            </div>
          </div>
          <p className="text-sm">23 m</p>
        </div>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <Avatar size={50} />
            <div className="">
              <p className="font-semibold text-black text-md">Title</p>
              <p className="text-sm">Task Status Change</p>
            </div>
          </div>
          <p className="text-sm">50 m</p>
        </div>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <Avatar size={50} />
            <div className="">
              <p className="font-semibold text-black text-md">Title</p>
              <p className="text-sm">Task Status Change</p>
            </div>
          </div>
          <p className="text-sm">53 m</p>
        </div>
      </div>
      <div className="mt-8 text-center">
        <Button type="link" className="text-lg font-semibold text-blue-primary">
          See All Notifications
        </Button>
      </div>
    </div>
  );
};

export default Notifications;
