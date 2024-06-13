"use client";
import ParametersTable from "@/components/dashboard/table/ParametersTable";
import FilterIcon from "@/public/images/filter.svg";
import { BrainIcon } from "@/public/svg/Icons";
import { Button, Input, Select, Switch, Table } from "antd";
import Image from "next/image";
import Link from "next/link";
import brainCircuit from "@/public/images/brain-circuit.svg"
import userImage from "@/public/images/Avatar.svg";
import { ColumnsType } from "antd/es/table";
import { StaticImageData } from "next/image";
import { ReactNode } from "react";

interface ModelData {
  key: string;
  modelName: string;
  flowImage: StaticImageData;
  last_month: string
  runned: string;
  API_key: ReactNode;
}

const columns: ColumnsType<ModelData> = [
  {
    title: "#",
    dataIndex: "key",
    width: 10,
    rowSpan: 1,
    sorter: (a, b) => a.key.localeCompare(b.key),
  },
  {
    title: "Model name",
    dataIndex: "modelName",
    render: (text, record) => (
      <Link href={`/flows/${record.key}`} className="flex items-center ">
        <Image src={record.flowImage.src} width={50} height={50} alt="" />
        <span style={{ marginLeft: 10 }} className="text-[#353c45] font-bold">{text}</span>
      </Link>
    ),
  },
  {
    title: "Token used last month",
    dataIndex: "last_month",
    render: (text) => <p className="text-[#777E90] font-bold">{text}</p>,
  },
  {
    title: "Runned",
    dataIndex: "runned",
      render: (text) => <p className="text-[#2C2E30] font-bold">{text}</p>,
    sorter: (a, b) => Number(a.runned) - Number(b.runned),
  },
  {
    title: "API Key",
    key: "active",
    width: 250,
    render: (text) => <Input size="small" className="bg-transparent border-transparent rounded-xl" value={text} type="password" />,
  },
  {
    title: "Active",
    key: "autoTrain",
    width: 100,
    render: () => <Switch />,
  },
  {
    title: "Edit",
    key: "edit",
    dataIndex: "key",
    width: 100,
    render: (text) => <Link href={`/parameters/${text}`}><Button className="rounded-2xl" type="primary">Edit</Button></Link>,
  }
];

const data: ModelData[] = [
  {
    key: "1",
    modelName: "Tax Analysis",
    flowImage: userImage,
    last_month: "20k",
    runned: "510",
    API_key: "mehedihasan",
  },
  {
    key: "2",
    modelName: "Gemini",
    flowImage: userImage,
    last_month: "122k",
    runned: "29",
    API_key: "mehedi",
  }
];

const onChange = (pagination: any, filters: any, sorter: any) => {
  console.log("params", pagination, filters, sorter);
};

const Parameters = () => {
  return (
    <div className=" p-4">
      <h3 className="flex gap-4">
        <Image src={brainCircuit} alt="" width={24} height={24} />
        <span className="text-white">Models</span>
      </h3>

      <div className="flex flex-col gap-8 mt-5">
        <div className="flex items-center justify-between mb-3">
          <Button className="rounded-xl" type="primary">Add a new model</Button>
          <Button className="wallet-btn">
            <Image src={FilterIcon} alt="" width={24} height={24} />
            Filter
          </Button>
        </div>
      </div>

      <div className="table_area bg-white/80 mt-3">
        <Table
          columns={columns}
          dataSource={data}
          onChange={onChange}
          pagination={{
            pageSize: 10,
            showSizeChanger: true,
            pageSizeOptions: ["2", "5", "10", "20"],
          }}
          scroll={{
            x: 991,
          }}
        />
      </div>
    </div>
  );
};

export default Parameters;
