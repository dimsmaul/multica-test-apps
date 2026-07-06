import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(products);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, price, description } = body;

  if (!name || price === undefined || !description) {
    return NextResponse.json(
      { error: "name, price, and description are required" },
      { status: 400 }
    );
  }

  const product = await prisma.product.create({
    data: { name, price, description },
  });

  return NextResponse.json(product, { status: 201 });
}
