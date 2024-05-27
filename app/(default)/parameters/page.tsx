"use client";
import ParametersTable from "@/components/dashboard/table/ParametersTable";
import FilterIcon from "@/public/images/filter.svg";
import { BrainIcon } from "@/public/svg/Icons";
import { Button, Select } from "antd";
import Image from "next/image";
import Link from "next/link";
const Parameters = () => {
  return (
    <div className="flex flex-col gap-8 p-4">
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <BrainIcon />
          <h3>Models</h3>
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
      <div className="flex items-center justify-between">
        <Button
          type="primary"
          size="small"
          className="font-semibold rounded-lg"
        >
          <Link href="/parameters/create">Create</Link>
        </Button>
        <div className="">
          <button className="wallet-btn">
            <Image src={FilterIcon} alt="" />
            Filter
          </button>
        </div>
      </div>
      <div className="table_area">
        <ParametersTable />
      </div>
    </div>
  );
};

export default Parameters;
