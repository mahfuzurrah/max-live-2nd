"use client";

import data from "@/components/dashboard/card/CardData";
import OverviewCard from "@/components/dashboard/card/OverviewCard";
import ModelsTable from "@/components/dashboard/table/ModelsTable";
import { Button, Select } from "antd";
import FilterIcon from "@/public/images/filter.svg";
import Image from "next/image";
import arrowProgress from "@/public/images/arrow-progress.svg"
import magnifyingGlass from "@/public/images/magnifying-glass.svg"
import { useAppDispatch } from "@/lib/hooks";
import { useEffect } from "react";
import { setNavbarTitle } from "@/lib/features/common/commonSlice";

export default function ModelsPage() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setNavbarTitle("Flows"))
  }, [])

  return (
    <div className="models-page">
      {/* Header */}
      <div className="title-area">
        <div className="flex gap-3">
          <Image src={magnifyingGlass} alt="magnifyingGlass" width={24} height={24} />
          <h3 className="text-white">Overview</h3>
        </div>
        
        <select className="py-1 border-2 border-white text-[#2c2e30] text-sm rounded-xl font-bold bg-transparent focus:ring-blue-500 focus:border-blue-500 block">
          <option value="This month">This month</option>
          <option value="This year">This year</option>
        </select>
      </div>
      {/* card */}
      <div className="overview-cards max_live_card bg-white/80">
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

      <div className="flex items-center justify-between mb-3">
        <h3 className="flex gap-4 py-4">
          <Image src={arrowProgress} alt="" width={24} height={24} />
          <span className="text-white">My flows</span>
        </h3>
        <div className="flex gap-3">
          <Button type="primary" className="rounded-xl">Create</Button>
          <Button className="wallet-btn">
            <Image src={FilterIcon} alt="" width={24} height={24} />
            Filter
          </Button>
        </div>
      </div>

      <div className="table_area bg-white/80">
        <ModelsTable />
      </div>
    </div>
  );
}
