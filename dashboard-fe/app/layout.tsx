"use client";

import { AuthProvider, useAuth } from "@/context/authcontext";
import { Layout, Menu, Typography } from "antd";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import "./globals.css";
import React from "react";

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // Custom component biar bisa pakai hook di dalam layout
  const AppContent = () => {
    const { logout, user } = useAuth();
    const router = useRouter();

    const handleLogout = async () => {
      try {
        await logout();
        router.push("/login");
      } catch (error) {
        console.error("Logout failed:", error);
      }
    };

    // Ambil nama user dari Firebase (displayName / email)
    const userName =
      user?.displayName || user?.email?.split("@")[0] || "User";

    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider width={220} style={{ background: "#001529" }}>
          <div
            style={{
              height: 64,
              margin: 16,
              color: "white",
              fontSize: 18,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Summit Global
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                label: <Link href="/products">Products</Link>,
              },
              {
                key: "2",
                label: <Link href="#">Settings</Link>,
              },
              {
                key: "3",
                label: (
                  <button
                    onClick={handleLogout}
                    style={{
                      background: "none",
                      border: "none",
                      color: "inherit",
                      cursor: "pointer",
                      padding: 0,
                    }}
                  >
                    Logout
                  </button>
                ),
              },
            ]}
          />
        </Sider>

        <Layout>
          <Header
            style={{
              background: "#fff",
              padding: "0 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            }}
          >
            <Title level={4} style={{ margin: 0 }}>
              Product Dashboard
            </Title>
            <span style={{ fontWeight: 500 }}>👋 Welcome, {userName}</span>
          </Header>

          <Content
            style={{
              margin: "24px",
              background: "#fff",
              padding: 24,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    );
  };

  if (pathname === "/login") {
    return (
      <html lang="en">
        <body style={{ margin: 0 }}>
          <AuthProvider>{children}</AuthProvider>
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </body>
    </html>
  );
}