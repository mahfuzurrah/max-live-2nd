import userImage from "@/public/images/Avatar.svg";
import { Button, Image, Switch, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { StaticImageData } from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface ModelData {
  key: string;
  flowName: string;
  flowImage: StaticImageData;
  steps: ReactNode;
  runned: string;
  updateDate: string;
}

const columns: ColumnsType<ModelData> = [
  {
    title: "#",
    dataIndex: "key",
    rowSpan: 1,
    width: 10,
    sorter: (a, b) => a.key.localeCompare(b.key),
  },
  {
    title: "Flow name",
    dataIndex: "flowName",
    width: 300,
    render: (text, record) => (
      <Link href={`/flows/${record.key}`} className="flex items-center ">
        <Image src={record.flowImage.src} width={50} preview={false} />
        <span style={{ marginLeft: 10 }} className="text-[#353c45] font-bold">{text}</span>
      </Link>
    ),
  },
  {
    title: "Steps",
    dataIndex: "steps",
    width: 300,
  },
  {
    title: "Runned",
    dataIndex: "runned",
    sorter: (a, b) => Number(a.runned) - Number(b.runned),
  },
  {
    title: "Last use",
    dataIndex: "updateDate",
    sorter: (a, b) => a.updateDate.localeCompare(b.updateDate),
  },

  {
    title: "Edit",
    key: "active",
    width: 100,
    render: () => <Button className="rounded-2xl" type="primary">Edit</Button>,
  },
  {
    title: "Run",
    key: "autoTrain",
    width: 100,
    render: () => <Button className="rounded-2xl" type="primary">Run</Button>,
  },
];

const data: ModelData[] = [
  {
    key: "1",
    flowName: "Tax Analysis",
    flowImage: userImage,
    steps: "20",
    runned: "50",
    updateDate: "2 days ago",
  },
  {
    key: "2",
    flowName: "Contract Analysis",
    flowImage: userImage,
    steps: "2",
    runned: "75",
    updateDate: "2 days ago",
  },
  {
    key: "3",
    flowName: "Matter Summary",
    flowImage: userImage,
    steps: "30",
    runned: "22",
    updateDate: "2 days ago",
  },
  {
    key: "4",
    flowName: "Legal Analysis",
    flowImage: userImage,
    steps: "7",
    runned: "4",
    updateDate: "2 days ago",
  },
  {
    key: "5",
    flowName: "Email Answer",
    flowImage: userImage,
    steps: "3",
    runned: "39",
    updateDate: "2 days ago",
  },
  {
    key: "6",
    flowName: "Tax report",
    flowImage: userImage,
    steps: "17",
    runned: "71",
    updateDate: "2 days ago",
  },
];

const onChange = (pagination: any, filters: any, sorter: any) => {
  console.log("params", pagination, filters, sorter);
};

const ModelsTable: React.FC = () => (
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
);

export default ModelsTable;
