import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  const data = await request.json();
  const salt = await bcrypt.genSalt(10);
  data.password = await bcrypt.hash(data.password, salt);
  const userNew = await prisma.user.create({
    data: {
      email: data.email,
      username: data.username,
      password: data.password,
    },
  });
  const { password, ...user } = userNew;
  return NextResponse.json(user, { status: 201 });
}
