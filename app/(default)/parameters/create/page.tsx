"use client";
import { Button, Form, Input, Select, Switch } from "antd";
import { SwitchChangeEventHandler } from "antd/es/switch";
import { useState } from "react";

const Create = () => {
  const [activeSwitch, setActiveSwitch] = useState(false);

  const onChange: SwitchChangeEventHandler = (checked) => {
    setActiveSwitch(checked);
  };
  return (
    <div className=" m-4 border rounded-xl border-[#A698A433]/20  p-8">
      <Form layout="vertical" className="">
        <div className="justify-between w-full mt-4 md:flex">
          <Form.Item label="Model Name" className="max-w-[315px] w-full">
            <Select
              placeholder="Model Name"
              className="bg-[#000000] border-0 hover:border rounded-xl"
            >
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="API Key" className="max-w-[536px] w-full">
            <Input
              placeholder="apiKey"
              className="bg-[#E9EBEE] border-0 hover:border rounded-xl"
            />
          </Form.Item>
        </div>
        <div className="flex items-center gap-2 mb-4">
          <p>Is Active ?</p>
          <Switch
            style={{
              backgroundColor: activeSwitch ? "#0065FF" : "#bbbbbb",
            }}
            defaultChecked={activeSwitch}
            checked={activeSwitch}
            onChange={onChange}
          />
        </div>
        <Button type="primary" size="small" className="rounded-lg">
          Save
        </Button>
      </Form>
    </div>
  );
};

export default Create;
