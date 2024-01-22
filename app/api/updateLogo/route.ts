import { Session } from "inspector";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  try {
    if (session?.user.role !== "admin") {
      return NextResponse.json(
        {
          error: "Unauthorized",
        },
        {
          status: 401,
        }
      );
    }
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
  const session = await getServerSession(authOptions);
  try {
    if (session?.user.role !== "admin") {
      return NextResponse.json(
        {
          error: "Unauthorized",
        },
        {
          status: 401,
        }
      );
    }
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
