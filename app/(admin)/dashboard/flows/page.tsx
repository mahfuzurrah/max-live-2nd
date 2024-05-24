"use client";

import { Select } from "antd";
import React from "react";
import data from "@/components/dashboard/card/CardData"
import OverviewCard from "@/components/dashboard/card/OverviewCard";
import ModelsTable from "@/components/dashboard/table/ModelsTable";

export default function ModelsPage() {
    return (
        <div className="models-page">
            {/* Header */}
            <div className="title-area">
                <button className="btn">Create Model</button>
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

            <div className="table_area mt-5">
                <ModelsTable />
            </div>
        </div>
    );
}


