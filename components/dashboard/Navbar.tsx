"use client";

import Cpass from "@/public/images/Change Password.svg";
import User from "@/public/images/user.png";
import { Dropdown, Menu, Space } from "antd";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { PiCaretUpDown } from "react-icons/pi";
import logOut from "../../public/images/Log Out.svg";
// import Profile from "../../public/images/user-profile.svg";
import Profile from "../../public/images/user.png";
import Notifications from "./Notifications";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { handleDashboardSidebar } from "@/lib/features/common/commonSlice";

const handleMenuClick = (e: any) => {
  // console.log("click");
};

const menuItems = (
  <Menu className="flex flex-col gap-1" onClick={handleMenuClick}>
    <Menu.Item key="1" icon={<Image src={Profile} alt="Profile" />}>
      <Link href="/profile">Profile</Link>
    </Menu.Item>
    <Menu.Item key="2" icon={<Image src={Cpass} alt="Change Password" />}>
      <Link href="/change-password">Change Password</Link>
    </Menu.Item>
    <Menu.Item key="3" icon={<Image src={logOut} alt="Log Out" />}>
      <Link href="/logout">Log Out</Link>
    </Menu.Item>
  </Menu>
);

export default function Navbar() {
  const dispatch = useAppDispatch()
  const { isSidebarOpen, navbarTitle } = useAppSelector((state: RootState) => state.common)
  const pathname = usePathname();
  const path = pathname.split("/").pop();

  const [showNotifi, setShowNotifi] = useState(false);
  const notifiRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (notifiRef.current && !notifiRef.current.contains(event.target as Node)) {
      setShowNotifi(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleToggle() {
    if (isSidebarOpen) {
      dispatch(handleDashboardSidebar(false))
    } else {
      dispatch(handleDashboardSidebar(true))
    }
  }

  return (
    <nav className="nav">
      <div className="toggle_btn" onClick={handleToggle}>
        <FaBars className="icons" />
      </div>
      <div className="page_title mb_hide">
        <h1 className="capitalize text-white">{navbarTitle}</h1>
      </div>
      <div className="right_area">
        <div className="relative">
          <div
            ref={notifiRef}
            onClick={() => setShowNotifi(!showNotifi)}
            className="border notifi border-blue-primary"
          >
            <IoMdNotificationsOutline className="icons" />
            <span className="dot"></span>
          </div>
          {showNotifi && <Notifications />}
        </div>

        <Dropdown overlay={menuItems} placement="bottomRight" trigger={["click"]} arrow={{ pointAtCenter: true }}>
          <Space className="header_dropdown">
            <div className="title">
              <Image src={User} alt="User_Img" />
              <p className="name">
                Mahfuzur R. <span>Admin</span>
              </p>
            </div>
            <PiCaretUpDown className="icons" />
          </Space>
        </Dropdown>
      </div>
    </nav>
  );
}
