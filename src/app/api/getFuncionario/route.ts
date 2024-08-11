import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(): Promise<void | Response> {
  try {
    const funcionarioReturned = await prisma.funcionarios.findFirst({
      where: {
        cpf: "654333",
      },
    });

    return NextResponse.json({
      response: funcionarioReturned,
    });
  } catch (error) {
    return NextResponse.json({
      response: `Error: ${error}`,
    });
  }
}