import { NextResponse } from "next/server";
import { db } from "./../../../../lib/db";
import Email from "next-auth/providers/email";
export async function POST(req: Request) {
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
}
