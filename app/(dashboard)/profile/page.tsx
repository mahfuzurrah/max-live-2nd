"use client";

import { LockIcon } from "@/public/svg/Icons";
import { Button, Form, Input } from "antd";
import userIcon from "@/public/images/user-profile.svg"
import Image from "next/image";
import user from "@/public/images/user.png"
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/lib/hooks";
import { setNavbarTitle } from "@/lib/features/common/commonSlice";

const Profile = () => {
  const [changePasswordSection, setChangePasswordSection] = useState(false)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setNavbarTitle("Profile"))
  }, [])

  return (
    <>
      <div className="flex flex-col gap-8 p-4 ">
        <div className="">
          <div className="flex items-center gap-3 mb-4">
            <Image className="rounded-full" src={userIcon} alt="user" />
            <h3 className="text-white">Information</h3>
          </div>

          <div className="bg-white/50 rounded-xl p-5">
            <div className="flex justify-between items-center">
              <div className="flex justify-center items-center">
                <Image className="rounded-full" width={70} src={user} alt="user" />
                <Button
                  className="mt-4 ml-3 disabled:bg-blue-primary disabled:text-white disabled:cursor-not-allowed disabled:opacity-50"
                  type="primary"
                >
                  Edit
                </Button>
              </div>
              <div>
                <Button onClick={() => setChangePasswordSection(true)} type="primary">Change Password</Button>
              </div>
            </div>

            <Form layout="vertical">
              <div className="grid grid-cols-12 gap-6 w-full mt-4 md:flex">
                <Form.Item label="Name" className="w-full col-span-12 md:col-span-4">
                  <Input
                    placeholder="Name"
                    className="border-transparent rounded-xl"
                    value="John"
                  />
                </Form.Item>
                <Form.Item label="Surname" className="w-full col-span-12 md:col-span-4">
                  <Input
                    placeholder="Surname"
                    className="border-transparent rounded-xl"
                    value="Frenetick"
                  />
                </Form.Item>
                <Form.Item label="Email" className="w-full col-span-12 md:col-span-4">
                  <Input
                    placeholder="Email"
                    className="border-transparent rounded-xl"
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
        </div>

        {changePasswordSection &&
          <div>
            <div className="flex items-center gap-3 mb-4">
              <LockIcon />
              <h3>Change Password</h3>
            </div>
            <div className="bg-white/50 border rounded-xl border-[#A698A433]/20 p-4">
              <Form layout="vertical" className="">
                <div className="grid grid-cols-12 md:gap-4">
                  <div className="grid grid-cols-12 col-span-12 md:col-span-6">
                    <Form.Item
                      label="New password"
                      className="col-span-12 md:col-span-6"
                    >
                      <Input
                        type="password"
                        placeholder="**********"
                        className="border-transparent rounded-xl"
                      />
                    </Form.Item>
                  </div>
                  <Form.Item
                    label="Confirm Password"
                    className="col-span-12 md:col-span-6"
                  >
                    <Input
                      type="password"
                      placeholder="**********"
                      className="border-transparent rounded-xl"
                    />
                  </Form.Item>
                </div>
                <Button onClick={() => setChangePasswordSection(false)} type="primary" className="rounded-lg">
                  Save
                </Button>
              </Form>
            </div>
          </div>}
      </div>
    </>
  );
};

export default Profile;
