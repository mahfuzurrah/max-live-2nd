import userImage from "@/public/images/Avatar.svg";
import { Button, Image, Switch, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { StaticImageData } from "next/image";
import { ReactNode } from "react";

interface Parameters {
  key: string;
  modelName: string;
  modelImage: StaticImageData;
  parameters: ReactNode;
  modelRScore: string;
  apiKey: string;
}

const columns: ColumnsType<Parameters> = [
  {
    title: "#",
    dataIndex: "key",
    rowSpan: 1,
    sorter: (a, b) => a.key.localeCompare(b.key),
  },
  {
    title: "Model name",
    dataIndex: "modelName",
    render: (text, record) => (
      <div className="flex items-center ">
        <Image src={record.modelImage.src} width={50} preview={false} />
        <span style={{ marginLeft: 10 }}>{text}</span>
      </div>
    ),
  },
  {
    title: "Token used last month",
    dataIndex: "parameters",
  },
  {
    title: "Runned",
    dataIndex: "modelRScore",
    sorter: (a, b) => Number(a.modelRScore) - Number(b.modelRScore),
  },
  {
    title: "API Key",
    dataIndex: "apiKey",
  },
  {
    title: "Active",
    key: "active",
    width: 100,
    sorter: (a, b) => Number(a.modelRScore) - Number(b.modelRScore),
    render: () => <Switch defaultChecked={false} />,
  },
  {
    title: "Edit",
    key: "edit",
    width: 100,
    render: () => (
      <Button size="small" type="primary" className="rounded-lg">
        Edit
      </Button>
    ),
  },
];

const data: Parameters[] = [
  {
    key: "1",
    modelName: "#ModelName",
    modelImage: userImage,
    parameters: "20k",
    modelRScore: "50",
    apiKey: "********",
  },
  {
    key: "2",
    modelName: "#ModelName",
    modelImage: userImage,
    parameters: "20k",
    modelRScore: "50",
    apiKey: "********",
  },
  {
    key: "3",
    modelName: "#ModelName",
    modelImage: userImage,
    parameters: "20k",
    modelRScore: "50",
    apiKey: "********",
  },
  {
    key: "4",
    modelName: "#ModelName",
    modelImage: userImage,
    parameters: "20k",
    modelRScore: "50",
    apiKey: "********",
  },
];

const onChange = (pagination: any, filters: any, sorter: any) => {
  console.log("params", pagination, filters, sorter);
};

const ParametersTable: React.FC = () => (
  <Table
    columns={columns}
    dataSource={data}
    onChange={onChange}
    pagination={{
      pageSize: 2,
      showSizeChanger: true,
      pageSizeOptions: ["2", "5", "10", "20"],
    }}
    scroll={{
      x: 991,
    }}
  />
);

export default ParametersTable;
