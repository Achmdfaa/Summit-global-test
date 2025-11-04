"use client";

import { useEffect, useState, useMemo } from "react";
import {
  Table,
  Image,
  Typography,
  Button,
  Input,
  Space,
  Modal,
  Form,
  InputNumber,
  message,
} from "antd";
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import axios from "axios";

const { Title } = Typography;
const { TextArea } = Input;

interface Product {
  product_id: string;
  product_title: string;
  product_price: number;
  product_description: string;
  product_image?: string;
  product_category?: string;
}

export default function ProductsPage() {
  const [data, setData] = useState<Product[]>([]);
  const [filtered, setFiltered] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [form] = Form.useForm();
  const [editData, setEditData] = useState<Product | null>(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  // Fetch products
  useEffect(() => {
    axios
      .get("/api/products")
      .then((res) => {
        setData(res.data);
        setFiltered(res.data);
      })
      .catch((err) => console.error("Error:", err))
      .finally(() => setLoading(false));
  }, []);

  // Search debounce
  useEffect(() => {
    const handler = setTimeout(() => {
      const q = search.toLowerCase();
      const result = data.filter(
        (item) =>
          item.product_title.toLowerCase().includes(q) ||
          item.product_description.toLowerCase().includes(q) ||
          item.product_category?.toLowerCase().includes(q)
      );
      setFiltered(result);
    }, 300);

    return () => clearTimeout(handler);
  }, [search, data]);

  // Format currency
  const formatPrice = (price: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);

  // Submit form (Create or Edit)
  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      const newProduct = {
        ...values,
        product_price: Number(values.product_price),
      };

      if (editData) {
        await axios.put("/api/products", newProduct);
        message.success("Product updated!");
      } else {
        await axios.post("/api/products", newProduct);
        message.success("Product created!");
      }

      setOpenModal(false);
      setEditData(null);
      form.resetFields();

      // Refresh data
      const res = await axios.get("/api/products");
      setData(res.data);
      setFiltered(res.data);
    } catch (error: any) {
      console.error(error);
      message.error("Something went wrong!");
    }
  };

  // Delete product
  const handleDelete = async (id: string) => {
    Modal.confirm({
      title: "Are you sure?",
      onOk: async () => {
        await axios.delete(`/api/products?id=${id}`);
        message.success("Product deleted!");
        const res = await axios.get("/api/products");
        setData(res.data);
        setFiltered(res.data);
      },
    });
  };

  const columns = useMemo(
    () => [
      {
        title: "Image",
        dataIndex: "product_image",
        key: "product_image",
        render: (url: string) => (
          <Image src={url} width={80} fallback="https://via.placeholder.com/80" />
        ),
      },
      {
        title: "Title",
        dataIndex: "product_title",
        key: "product_title",
      },
      {
        title: "Price",
        dataIndex: "product_price",
        key: "product_price",
        render: (p: number) => formatPrice(p),
      },
      {
        title: "Category",
        dataIndex: "product_category",
        key: "product_category",
      },
      {
        title: "Description",
        dataIndex: "product_description",
        key: "product_description",
      },
      {
        title: "Actions",
        key: "actions",
        render: (_: any, record: Product) => (
          <Space>
            <Button
              icon={<EditOutlined />}
              onClick={() => {
                setEditData(record);
                form.setFieldsValue(record);
                setOpenModal(true);
              }}
            />
            <Button
              danger
              icon={<DeleteOutlined />}
              onClick={() => handleDelete(record.product_id)}
            />
          </Space>
        ),
      },
    ],
    [data]
  );

  return (
    <>
      <Space
        style={{
          marginBottom: 16,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Title level={3} style={{ margin: 0 }}>
          Product List
        </Title>
        <Space>
          <Input
            prefix={<SearchOutlined />}
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => {
              form.resetFields();
              setEditData(null);
              setOpenModal(true);
            }}
          >
            Create Product
          </Button>
        </Space>
      </Space>

      <Table
        columns={columns}
        dataSource={filtered.slice((page - 1) * pageSize, page * pageSize)}
        rowKey="product_id"
        loading={loading}
        bordered
        pagination={{
          current: page,
          pageSize,
          total: filtered.length,
          onChange: (p, ps) => {
            setPage(p);
            setPageSize(ps);
          },
        }}
      />

      {/* Modal Form */}
      <Modal
        open={openModal}
        title={editData ? "Edit Product" : "Create Product"}
        onCancel={() => {
          setOpenModal(false);
          setEditData(null);
        }}
        onOk={handleSubmit}
        okText={editData ? "Update" : "Create"}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            label="Product Title"
            name="product_title"
            rules={[{ required: true, message: "Title is required!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Price"
            name="product_price"
            rules={[{ required: true, message: "Price is required!" }]}
          >
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item label="Category" name="product_category">
            <Input />
          </Form.Item>

          <Form.Item label="Description" name="product_description">
            <TextArea rows={3} />
          </Form.Item>

          <Form.Item label="Image URL" name="product_image">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
