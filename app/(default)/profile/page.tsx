"use client";
import { LockIcon, UserLogo } from "@/public/svg/Icons";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Form, Input } from "antd";
import userIcon from "@/public/images/user.svg"
import Image from "next/image";

const Profile = () => {
  return (
    <div className="flex flex-col gap-8 p-4 ">
      <div className="">
        <div className="flex items-center gap-3 mb-4">
          <Image src={userIcon} alt="user" />
          <h3 className="text-white">Information</h3>
        </div>

        <div className="bg-white/50 rounded-xl p-5">
          <div className="flex justify-between items-center">
            <div>
              <Avatar size={64} icon={<UserOutlined />} />
              <Button
                className="mt-4 ml-3 disabled:bg-blue-primary disabled:text-white disabled:cursor-not-allowed disabled:opacity-50"
                type="primary"
                disabled
              >
                Edit
              </Button>
            </div>
            <div>
              <Button type="primary">Change Password</Button>
            </div>
          </div>

          <Form layout="vertical" className="">
            <div className="grid grid-cols-12 gap-6 w-full mt-4 md:flex">
              <Form.Item label="Name" className="w-full col-span-12 md:col-span-4">
                <Input
                  placeholder="Name"
                  className="border-0 hover:border rounded-xl"
                  value="John"
                />
              </Form.Item>
              <Form.Item label="Surname" className="w-full col-span-12 md:col-span-4">
                <Input
                  placeholder="Surname"
                  className="border-0 hover:border rounded-xl"
                  value="Frenetick"
                />
              </Form.Item>
              <Form.Item label="Email" className="w-full col-span-12 md:col-span-4">
                <Input
                  placeholder="Email"
                  className="border-0 hover:border rounded-xl"
                  value="john.frenetick@primavera.com"
                />
              </Form.Item>
            </div>
            <div className="text-right">
              <Button type="primary" className="rounded-lg">
                Save
              </Button>
            </div>
          </Form>





        </div>





        {/* <div className=" border rounded-xl border-[#A698A433]/20 p-4 bg-white">
          <div className="">
            <Avatar size={64} icon={<UserOutlined />} />
            <Button
              className="mt-4 ml-3 disabled:bg-blue-primary disabled:text-white disabled:cursor-not-allowed disabled:opacity-50"
              type="primary"
              disabled
            >
              Edit
            </Button>
          </div>
          <Form layout="vertical" className="">
            <div className="justify-between w-full mt-4 md:flex">
              <Form.Item label="Name" className="md:max-w-[315px] w-full">
                <Input
                  placeholder="Name"
                  className="bg-[#E9EBEE] border-0 hover:border rounded-xl"
                />
              </Form.Item>
              <Form.Item label="Surname" className="max-w-[536px] w-full">
                <Input
                  placeholder="Surname"
                  className="bg-[#E9EBEE] border-0 hover:border rounded-xl"
                />
              </Form.Item>
            </div>
            <Button type="primary" size="small" className="rounded-lg">
              Save
            </Button>
          </Form>
        </div> */}
      </div>
      {/* <div className="">
        <div className="flex items-center gap-3 mb-4">
          <LockIcon />
          <h3>Change Password</h3>
        </div>
        <div className="bg-white border rounded-xl border-[#A698A433]/20 p-4">
          <Form layout="vertical" className="">
            <div className="justify-between w-full mt-4 md:flex">
              <Form.Item
                label="New password"
                className="md:max-w-[315px] w-full"
              >
                <Input
                  type="password"
                  placeholder="**********"
                  className="bg-[#E9EBEE] border-0 hover:border rounded-xl"
                />
              </Form.Item>
              <Form.Item
                label="Confirm Password"
                className="max-w-[536px] w-full"
              >
                <Input
                  type="password"
                  placeholder="**********"
                  className="bg-[#E9EBEE] border-0 hover:border rounded-xl"
                />
              </Form.Item>
            </div>
            <Button type="primary" size="small" className="rounded-lg">
              Save
            </Button>
          </Form>
        </div>
      </div> */}
    </div>
  );
};

export default Profile;
