import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { url } = await req.json();
    const newUrl = await db.logoUrl.upsert({
      where: { id: "logo" },
      update: { url: url },
      create: { id: "logo", url: url },
    });
    // Update the logo URL in the state
    return NextResponse.json({
      success: true,
      message: `Logo URL ${newUrl} created`,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      error,
    });
  }
}

export async function GET(req: Request) {
  try {
    const logoUrl = await db.logoUrl.findFirst({
      select: { url: true },
    });
    if (!logoUrl) {
      return NextResponse.json(
        {
          data: null,
        },
        { status: 404 }
      );
    }
    const url = logoUrl.url;
    return NextResponse.json(
      {
        url,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json({
      status: 500,
      error,
    });
  }
}
