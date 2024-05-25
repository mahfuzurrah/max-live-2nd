"use client";

import data from "@/components/dashboard/card/CardData";
import OverviewCard from "@/components/dashboard/card/OverviewCard";
import ModelsTable from "@/components/dashboard/table/ModelsTable";
import { ArrowProcess, MegGlass } from "@/public/svg/Icons";
import { Select } from "antd";

export default function ModelsPage() {
  return (
    <div className="models-page">
      {/* Header */}
      <div className="title-area">
        <div className="flex gap-3">
          <MegGlass />
          <h3>Overview</h3>
        </div>
        <Select
          defaultValue="This month"
          style={{
            width: 132,
          }}
          className="select"
          options={[{ value: "This month", label: "This month" }]}
        />
      </div>
      {/* card */}
      <div className="overview-cards max_live_card ">
        {data.map((item, index) => (
          <OverviewCard
            key={index}
            imgSrc={item.imgSrc}
            title={item.title}
            number={item.number}
            gain={item.gain}
          />
        ))}
      </div>
      <h3 className="flex gap-4 py-4">
        <ArrowProcess />
        My flows
      </h3>
      <div className="mt-5 table_area">
        <ModelsTable />
      </div>
    </div>
  );
}
