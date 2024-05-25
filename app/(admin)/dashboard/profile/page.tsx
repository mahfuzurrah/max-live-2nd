"use client";
import { LockIcon, UserLogo } from "@/public/svg/Icons";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Form, Input } from "antd";

const Profile = () => {
  return (
    <div className="flex flex-col gap-8 px-4 ">
      <div className="">
        <div className="flex items-center gap-3 mb-4">
          <UserLogo />
          <h3 className="">Information</h3>
        </div>
        <div className=" border rounded-xl border-[#A698A433]/20  p-4">
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
        </div>
      </div>
      <div className="">
        <div className="flex items-center gap-3 mb-4">
          <LockIcon />
          <h3>Change Password</h3>
        </div>
        <div className=" border rounded-xl border-[#A698A433]/20 p-4">
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
      </div>
    </div>
  );
};

export default Profile;
