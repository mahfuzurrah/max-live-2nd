"use client";

import { useState } from "react";
import { Layout } from "antd";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
const { Header, Content } = Layout;
import Navbar from "@/components/dashboard/Navbar";
import "../.././../styles/dashboard/index.css";
import "../.././../styles/dashboard/layout.css";

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
                    <Content className="body_content">
                        {children}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
}
