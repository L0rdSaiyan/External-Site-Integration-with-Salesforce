import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request): Promise<Response> {
  try {
    // Parsing the request body
    const { cpf } = await request.json();

    // Query the database
    const funcionarioReturned = await prisma.funcionarios.findFirst({
      where: {
        cpf: cpf,
      },
    });

    // Return the response as JSON
    return NextResponse.json({
      response: `Funcionario returned: ${funcionarioReturned}`
    });
  } catch (error) {
    // Handle any errors
    return NextResponse.json({
      response: `Error: ${error}`,
    });
  }
}
