"use client"

import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import Navbar from "@/components/dashboard/Navbar";
import "@/styles/dashboard/index.css";
import "@/styles/dashboard/layout.css";
import 'reactflow/dist/style.css';
import { Layout } from "antd";
const { Header, Content } = Layout;
import bg from "@/public/images/gradient-background.png";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <Layout style={{
      backgroundImage: `url(${bg.src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: "no-repeat"
    }}>
      <DashboardSidebar />
      <Layout className="main_body bg-transparent">
        <Header className="top_navbar">
          <Navbar />
        </Header>
        <Layout className="bg-transparent">
          <Content className="body_content bg-transparent">
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
