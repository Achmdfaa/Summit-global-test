"use client";

import { useAuth } from "@/context/authcontext";
import { Form, Input, Button, Typography, Card, message, Spin } from "antd";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const { Title, Text } = Typography;

export default function LoginPage() {
  const router = useRouter();
  const { user, loading, login } = useAuth();

  useEffect(() => {
    if (user) router.push("/products");
  }, [user, router]);

  const onFinish = async (values: { email: string; password: string }) => {
    try {
      await login(values.email, values.password);
      message.success("Login successful!");
    } catch (err: any) {
      message.error(err.message || "Invalid credentials");
    }
  };

  if (loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* LEFT SIDE */}
      <div
        style={{
          flex: 1,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521790797524-b2497295b8a0?auto=format&fit=crop&w=1200&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "40px",
        }}
      >
        <Title style={{ color: "white" }}>Summit Global</Title>
        <Text style={{ fontSize: 16, color: "#f0f0f0" }}>
          Product Management Dashboard
        </Text>
      </div>

      {/* RIGHT SIDE */}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f9f9f9",
        }}
      >
        <Card style={{ width: 400, borderRadius: 12, boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}>
          <Title level={3} style={{ textAlign: "center", marginBottom: 24 }}>
            Login
          </Title>
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please enter your email" }]}
            >
              <Input size="large" placeholder="example@mail.com" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: "Please enter your password" }]}
            >
              <Input.Password size="large" placeholder="••••••••" />
            </Form.Item>
            <Button type="primary" htmlType="submit" block size="large" style={{ marginTop: 8 }}>
              Login
            </Button>
          </Form>
        </Card>
      </div>
    </div>
  );
}