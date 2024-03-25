import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  console.log(data);
  const user = await prisma.user.create({
    data: {
      email: data.email,
      username: data.username,
      password: data.password,
    },
  });
  return NextResponse.json(user, { status: 201 });
}
