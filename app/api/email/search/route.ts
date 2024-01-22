import { NextResponse } from "next/server";
import { db } from "./../../../../lib/db";
import Email from "next-auth/providers/email";
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
    const { searchString } = await req.json();
    const emails = await db.email.findMany({
      where: {
        email: {
          contains: searchString,
        },
      },
      select: { email: true },
    });
    return NextResponse.json(
      {
        data: emails,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error in /api/search/emails", error);
    return new Response("Internal Error", { status: 500 });
  }
}
