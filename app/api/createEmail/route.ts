import { db } from "@/lib/db";
import { futimes } from "fs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    console.log("email ", email);
    if (!email || email === undefined) {
      return NextResponse.json(
        {
          message: "Email is required",
        },
        { status: 404 }
      );
    }
    const emailExists = await db.email.findUnique({
      where: { email: email },
    });
    if (emailExists) {
      return NextResponse.json(
        {
          message: "Email already exists",
        },
        { status: 409 }
      );
    }
    const newEmail = await db.email.create({
      data: { email: email },
    });
    return NextResponse.json(
      {
        data: newEmail,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
      },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  try {
    const emails = await db.email.findMany({
      select: { email: true },
    });
    if (!emails) {
      return NextResponse.json({
        data: null,
      });
    }
    return NextResponse.json({
      success: true,
      emails,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      error,
    });
  }
}
