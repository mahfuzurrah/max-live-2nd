"use client";

import { Button, Input, Select, Switch } from "antd";
import Image from "next/image";
import Link from "next/link";
import brainCircuit from "@/public/images/brain-circuit.svg"

export default function ParametersEdit() {
  return (
    <div className="flex flex-col gap-8 p-4">
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <Image src={brainCircuit} alt="" />
          <h3 className="text-white">Models - New</h3>
        </div>
      </div>

      <div className="bg-white/50 rounded-xl p-5">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6">
            <p className="text-[#2C2E30] font-bold mb-2">Model Name</p>
            <Input size="large" value="LSTD" placeholder="Enter model name" className="max-w-md rounded-lg border-0" />
          </div>
          <div className="col-span-12 md:col-span-6">
            <p className="text-[#2C2E30] font-bold mb-2">API Key</p>
            <Input size="large" placeholder="Enter key" value="123456123456-123456-123456" className="rounded-lg border-0" />
          </div>
        </div>

        <div className="flex gap-2 mt-5">
          <p className="text-[#2C2E30] font-bold mb-2">Is active ?</p>
          <Switch defaultChecked />
        </div>

        <div className="mt-5 flex justify-end gap-4">
          <Button className="rounded-xl" type="primary">Cancle</Button>
          <Link href="/parameters">
            <Button className="rounded-xl" type="primary">Save</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

