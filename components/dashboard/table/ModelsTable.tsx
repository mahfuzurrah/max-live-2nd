import userImage from "@/public/images/Avatar.svg";
import { Image, Switch, Table } from "antd";
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
    sorter: (a, b) => a.key.localeCompare(b.key),
  },
  {
    title: "Model name",
    dataIndex: "flowName",
    render: (text, record) => (
      <Link href={`/flows/${record.key}`} className="flex items-center ">
        <Image src={record.flowImage.src} width={50} preview={false} />
        <span style={{ marginLeft: 10 }}>{text}</span>
      </Link>
    ),
  },
  {
    title: "Steps",
    dataIndex: "steps",
  },
  {
    title: "Model R score",
    dataIndex: "runned",
    sorter: (a, b) => Number(a.runned) - Number(b.runned),
  },
  {
    title: "Update Date",
    dataIndex: "updateDate",
    sorter: (a, b) => a.updateDate.localeCompare(b.updateDate),
  },

  {
    title: "Active",
    key: "active",
    width: 100,
    sorter: (a, b) => a.key.localeCompare(b.key),
    render: () => <Switch defaultChecked={false} />,
  },
  {
    title: "Share",
    key: "autoTrain",
    width: 100,
    sorter: (a, b) => a.key.localeCompare(b.key),
    render: () => <Switch defaultChecked={false} />,
  },
];

const data: ModelData[] = [
  {
    key: "1",
    flowName: "John Brown",
    flowImage: userImage,
    steps: "10",
    runned: "0,98",
    updateDate: "2 days ago",
  },
  {
    key: "2",
    flowName: "John Brown",
    flowImage: userImage,
    steps: "10",
    runned: "0,98",
    updateDate: "2 days ago",
  },
  {
    key: "3",
    flowName: "John Brown",
    flowImage: userImage,
    steps: "10",
    runned: "0,98",
    updateDate: "2 days ago",
  },
  {
    key: "4",
    flowName: "John Brown",
    flowImage: userImage,
    steps: "10",
    runned: "0,98",
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
