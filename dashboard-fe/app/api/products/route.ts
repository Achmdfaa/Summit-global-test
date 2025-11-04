import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await axios.get("http://localhost:8001/api/web/v1/products");
    const products = res.data.data ?? [];
    return NextResponse.json(products);
  } catch (error: any) {
    console.error("Error fetching products:", error.message);
    return NextResponse.json(
      { error: "Failed to fetch products", detail: error.message },
      { status: 500 }
    );
  }
}
