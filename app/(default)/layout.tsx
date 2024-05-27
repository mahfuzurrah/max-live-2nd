"use client";

import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import Navbar from "@/components/dashboard/Navbar";
import "@/styles/dashboard/index.css";
import "@/styles/dashboard/layout.css";
import { Layout } from "antd";
import { useState } from "react";
const { Header, Content } = Layout;

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
    <Layout>
      <DashboardSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Layout className="main_body">
        <Header className="top_navbar">
          <Navbar toggleSidebar={toggleSidebar} />
        </Header>
        <Layout>
          <Content className="body_content">{children}</Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
