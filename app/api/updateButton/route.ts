import { db } from "@/lib/db";
import { NextResponse } from "next/server";
export async function GET(req: Request) {
  try {
    const name = await db.button.findFirst({
      select: { name: true },
    });
    if (!name) {
      return NextResponse.json({
        data: null,
      });
    }
    return NextResponse.json({
      success: true,
      name: name.name,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      error,
    });
  }
}

export async function POST(req: Request) {
  try {
    const { buttonText } = await req.json();
    if (!buttonText || typeof buttonText !== "string")
      throw new Error("Invalid request");
    await db.button.upsert({
      where: { id: "name" },
      update: { name: buttonText },
      create: { id: "name", name: buttonText },
    });
    return NextResponse.json({
      success: true,
      message: `Button name ${buttonText} created`,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      error,
    });
  }
}
