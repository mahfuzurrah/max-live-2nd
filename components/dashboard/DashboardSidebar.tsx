"use client";

import { handleDashboardSidebar } from "@/lib/features/common/commonSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import logo from "@/public/images/dashboard-logo.png";
import { NvLogo } from "@/public/svg/Icons";
import { Render } from "keep-render";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import { TbSettingsCog } from "react-icons/tb";
import { TiFlowSwitch } from "react-icons/ti";

interface DashboardSidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

interface MenuItem {
  id: number;
  label: string;
  icon: ReactNode;
  route: string;
}

function SideBarMenuItem({ item }: { item: MenuItem }) {
  const pathname = usePathname();

  return (
    <li
      key={item.id}
      className={`side_nav_list ${pathname?.endsWith(item.route) ? "active" : ""
        }`}
    >
      <Link href={item.route} className="flex justify-between nav-link">
        <div className="flex gap-3">
          <div className="icon">{item.icon}</div>
          {item.label}
        </div>
        <Render.When isTrue={item.route === "/flows"}>
          <div className="icon">
            <span
              className={`px-[6px] py-[2px] text-white rounded-md badge   ${pathname?.endsWith(item.route)
                ? "bg-blue-primary"
                : "bg-[#2C2E30]"
                }`}
            >
              8
            </span>
          </div>
        </Render.When>
      </Link>
    </li>
  );
}

export default function DashboardSidebar() {
  const dispatch = useAppDispatch()
  const { isSidebarOpen } = useAppSelector((state: RootState) => state.common)

  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    {
      id: 1,
      label: "Dashboard",
      icon: <IoGrid className="icons" />,
      route: "/dashboard",
    },
    {
      id: 7,
      label: "Flows",
      icon: <TiFlowSwitch className="icons" />,
      route: "/flows",
    },
    {
      id: 6,
      label: "Parameters",
      icon: <TbSettingsCog className="icons" />,
      route: "/parameters",
    },
    {
      id: 5,
      label: "Profile",
      icon: <FaUser className="icons" />,
      route: "/profile",
    },
  ]);

  const setActiveItem = (id: number) => {
    const updatedItems = menuItems.map((item) => ({
      ...item,
      isActive: item.id === id,
    }));
    setMenuItems(updatedItems);

    // Close sidebar on mobile and add 'sider-collapsed' class
    if (window.innerWidth <= 991) {
      if (isSidebarOpen) {
        dispatch(handleDashboardSidebar(false))
      } else {
        dispatch(handleDashboardSidebar(true))
      }
    }
  };

  return (
    <div className={`side_navbar ${isSidebarOpen ? "" : "sider-collapsed"}`}>
      <div className="flex gap-5">
        <NvLogo className="icons" />
        <Image src={logo} alt="Logo" className="w-36 h-full" />
      </div>
      <ul className="side_nav_menu">
        {menuItems?.map((item) => (
          <SideBarMenuItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}
