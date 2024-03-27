import prisma from "@/libs/prisma";
import { Project } from "@prisma/client";
import { NextResponse } from "next/server";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const delProject = await prisma.project.delete({
    where: {
      id: Number(params.id),
    },
  });
  return NextResponse.json(delProject);
}

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const project = await prisma.project.findUnique({
    where: {
      id: Number(params.id),
    },
  });
  if (!project) {
    return NextResponse.json({ error: "Project not found." }, { status: 404 });
  }
  return NextResponse.json(project);
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const data = await request.json();
  const updated = await prisma.project.update({
    where: {
      id: Number(params.id),
    },
    data,
  });

  return NextResponse.json(updated);
}
