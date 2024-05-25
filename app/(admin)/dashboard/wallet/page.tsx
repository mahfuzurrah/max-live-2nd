"use client";

import FilterIcon from "@/public/images/filter.svg";
import { Input, Switch } from "antd";
import { SwitchChangeEventHandler } from "antd/es/switch";
import Image from "next/image";
import { useState } from "react";

export default function WalletPage() {
  const [activeSwitch, setActiveSwitch] = useState(false);

  const onChange: SwitchChangeEventHandler = (checked) => {
    setActiveSwitch(checked);
  };

  return (
    <div>
      <div className="model-edit">
        {/* header */}
        <div className="title-area">
          <div className="left">
            <button className="btn">Edit</button>
            <button className="btn bg-none">Dataset</button>
          </div>
          <div className="right">
            <button className="wallet-btn">
              <Image src={FilterIcon} alt="" />
              Filter
            </button>
          </div>
        </div>
        {/* main content */}
        <div className="main-content max_live_card ">
          <div className="input-field-area ">
            {/* Name */}
            <div className="input-component">
              <p className="lavel-text">Model Name</p>
              <Input
                placeholder="Basic usage"
                className="border-gray-300 rounded-lg"
              />
            </div>
            {/* Training */}
            <div className="input-component">
              <label className="lavel-text">Training model</label>
              <Input
                placeholder="Basic usage"
                type="number"
                className="border-gray-300 rounded-lg"
              />
            </div>

            {/* Batch */}
            <div className="input-component">
              <label className="lavel-text">Batch</label>
              <Input
                placeholder="Batch"
                type="number"
                className="border-gray-300 rounded-lg"
              />
            </div>

            {/* Epoch */}
            <div className="input-component">
              <label className="lavel-text">Epoch</label>
              <Input
                placeholder="Epoch"
                type="number"
                className="border-gray-300 rounded-lg"
              />
            </div>
          </div>
          <div className="swich-area">
            <p>Is Active ?</p>
            <Switch
              style={{
                backgroundColor: activeSwitch ? "#611D56" : "#bbbbbb",
              }}
              defaultChecked={activeSwitch}
              checked={activeSwitch}
              onChange={onChange}
            />
          </div>
          <button className="btn">Create</button>
        </div>
      </div>
    </div>
  );
}
