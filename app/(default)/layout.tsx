"use client";

import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import Navbar from "@/components/dashboard/Navbar";
import "@/styles/dashboard/index.css";
import "@/styles/dashboard/layout.css";
import 'reactflow/dist/style.css';
import { Layout } from "antd";
import { useState } from "react";
const { Header, Content } = Layout;
import bg from "@/public/images/gradient-background.png";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Layout style={{
      backgroundImage: `url(${bg.src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: "no-repeat"
    }}>
      <DashboardSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Layout className="main_body bg-transparent">
        <Header className="top_navbar">
          <Navbar toggleSidebar={toggleSidebar} />
        </Header>
        <Layout className="bg-transparent">
          <Content className="body_content bg-transparent">{children}</Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
